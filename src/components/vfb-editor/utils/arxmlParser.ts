// ARXML Parser - Parses AUTOSAR ARXML files into VFB nodes and edges

import type { PortData, CpPortKind } from "../types";
import type { Node, Edge } from "@xyflow/react";
import type { ExecutableData } from "../types";

interface VFBPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ParsedPort {
  name: string;
  type: "provider" | "required";
  interfaceRef: string;
  interfaceDest?: string; // e.g. "CLIENT-SERVER-INTERFACE", "SENDER-RECEIVER-INTERFACE"
  vfbSide?: number; // 0 = left, 1 = right
  vfbY?: number; // absolute Y coordinate on VFB canvas
}

interface ParsedSWC {
  name: string;
  ports: ParsedPort[];
  vfbPosition?: VFBPosition;
}

interface ParsedConnection {
  sourceComponent: string;
  sourcePort: string;
  targetComponent: string;
  targetPort: string;
}

export interface ParsedARXML {
  swComponents: ParsedSWC[];
  connections: ParsedConnection[];
  compositionName: string;
  hasVfbPositions: boolean;
}

function getLocalName(tagName: string): string {
  const idx = tagName.indexOf(":");
  return idx >= 0 ? tagName.substring(idx + 1) : tagName;
}

function getElementsByLocalName(parent: Element | Document, localName: string): Element[] {
  const results: Element[] = [];
  const all = parent.getElementsByTagName("*");
  for (let i = 0; i < all.length; i++) {
    if (getLocalName(all[i].tagName) === localName) {
      results.push(all[i]);
    }
  }
  return results;
}

function getDirectChildrenByLocalName(parent: Element, localName: string): Element[] {
  const results: Element[] = [];
  for (let i = 0; i < parent.children.length; i++) {
    if (getLocalName(parent.children[i].tagName) === localName) {
      results.push(parent.children[i]);
    }
  }
  return results;
}

function getTextContent(parent: Element, localName: string): string {
  const children = getDirectChildrenByLocalName(parent, localName);
  return children.length > 0 ? (children[0].textContent?.trim() || "") : "";
}

function extractInterfaceName(tref: string): string {
  const parts = tref.split("/");
  return parts[parts.length - 1] || tref;
}

// Extract VFB position data from the first AUTOSAR-IO-VFB-MAIN SDG
function extractVfbSDG(element: Element): { x?: number; y?: number; width?: number; height?: number; position?: number } | null {
  const adminDataEls = getDirectChildrenByLocalName(element, "ADMIN-DATA");
  if (adminDataEls.length === 0) return null;

  const sdgsEls = getElementsByLocalName(adminDataEls[0], "SDGS");
  if (sdgsEls.length === 0) return null;

  // Find the first SDG with GID="AUTOSAR-IO-VFB-MAIN"
  const sdgEls = getElementsByLocalName(sdgsEls[0], "SDG");
  for (const sdg of sdgEls) {
    if (sdg.getAttribute("GID") === "AUTOSAR-IO-VFB-MAIN") {
      const result: { x?: number; y?: number; width?: number; height?: number; position?: number } = {};
      const sdItems = getDirectChildrenByLocalName(sdg, "SD");
      for (const sd of sdItems) {
        const gid = sd.getAttribute("GID");
        const val = parseFloat(sd.textContent?.trim() || "");
        if (isNaN(val)) continue;
        if (gid === "X") result.x = val;
        else if (gid === "Y") result.y = val;
        else if (gid === "WIDTH") result.width = val;
        else if (gid === "HEIGHT") result.height = val;
        else if (gid === "POSITION") result.position = val;
      }
      return result;
    }
  }

  return null;
}

export function parseARXML(xmlContent: string): ParsedARXML {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlContent, "application/xml");

  const parserError = doc.querySelector("parsererror");
  if (parserError) {
    throw new Error("Invalid ARXML file: XML parsing failed");
  }

  // Extract SWC types (Adaptive + Classic AUTOSAR)
  const swcTagNames = [
    "ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE",
    "APPLICATION-SW-COMPONENT-TYPE",
    "SENSOR-ACTUATOR-SW-COMPONENT-TYPE",
    "SERVICE-SW-COMPONENT-TYPE",
    "COMPLEX-DEVICE-DRIVER-SW-COMPONENT-TYPE",
  ];
  const swcElements: Element[] = [];
  for (const tagName of swcTagNames) {
    swcElements.push(...getElementsByLocalName(doc, tagName));
  }
  const swComponents: ParsedSWC[] = swcElements.map((swcEl) => {
    const name = getTextContent(swcEl, "SHORT-NAME");
    const ports: ParsedPort[] = [];

    // P-PORT-PROTOTYPE (Provider ports)
    const pPorts = getElementsByLocalName(swcEl, "P-PORT-PROTOTYPE");
    for (const pPort of pPorts) {
      const portName = getTextContent(pPort, "SHORT-NAME");
      const trefEls = getElementsByLocalName(pPort, "PROVIDED-INTERFACE-TREF");
      const interfaceRef = trefEls.length > 0 ? (trefEls[0].textContent?.trim() || "") : "";
      const interfaceDest = trefEls.length > 0 ? (trefEls[0].getAttribute("DEST") || "") : "";

      const vfbData = extractVfbSDG(pPort);
      ports.push({
        name: portName,
        type: "provider",
        interfaceRef: extractInterfaceName(interfaceRef),
        interfaceDest,
        vfbSide: vfbData?.position,
        vfbY: vfbData?.y,
      });
    }

    // R-PORT-PROTOTYPE (Required ports)
    const rPorts = getElementsByLocalName(swcEl, "R-PORT-PROTOTYPE");
    for (const rPort of rPorts) {
      const portName = getTextContent(rPort, "SHORT-NAME");
      const trefEls = getElementsByLocalName(rPort, "REQUIRED-INTERFACE-TREF");
      const interfaceRef = trefEls.length > 0 ? (trefEls[0].textContent?.trim() || "") : "";
      const interfaceDest = trefEls.length > 0 ? (trefEls[0].getAttribute("DEST") || "") : "";

      const vfbData = extractVfbSDG(rPort);
      ports.push({
        name: portName,
        type: "required",
        interfaceRef: extractInterfaceName(interfaceRef),
        interfaceDest,
        vfbSide: vfbData?.position,
        vfbY: vfbData?.y,
      });
    }

    return { name, ports };
  });

  // Try to find explicit ASSEMBLY-SW-CONNECTOR
  const connectors = getElementsByLocalName(doc, "ASSEMBLY-SW-CONNECTOR");
  const connections: ParsedConnection[] = [];

  // Extract composition info first (needed for connection inference decision)
  const compositionEls = getElementsByLocalName(doc, "COMPOSITION-SW-COMPONENT-TYPE");
  const compositionName = compositionEls.length > 0
    ? getTextContent(compositionEls[0], "SHORT-NAME")
    : "VFB Design";

  if (connectors.length > 0) {
    // Use explicit connectors
    for (const connector of connectors) {
      const providerIref = getElementsByLocalName(connector, "PROVIDER-IREF")[0];
      const requesterIref = getElementsByLocalName(connector, "REQUESTER-IREF")[0];

      if (!providerIref || !requesterIref) continue;

      const providerContextRef = getElementsByLocalName(providerIref, "CONTEXT-COMPONENT-REF")[0]?.textContent?.trim() || "";
      const providerPortRef = getElementsByLocalName(providerIref, "TARGET-P-PORT-REF")[0]?.textContent?.trim() || "";
      const requesterContextRef = getElementsByLocalName(requesterIref, "CONTEXT-COMPONENT-REF")[0]?.textContent?.trim() || "";
      const requesterPortRef = getElementsByLocalName(requesterIref, "TARGET-R-PORT-REF")[0]?.textContent?.trim() || "";

      const sourceComponent = providerContextRef.split("/").pop() || "";
      const sourcePort = providerPortRef.split("/").pop() || "";
      const targetComponent = requesterContextRef.split("/").pop() || "";
      const targetPort = requesterPortRef.split("/").pop() || "";

      connections.push({ sourceComponent, sourcePort, targetComponent, targetPort });
    }
  } else {
    // Infer connections by matching SERVICE-INTERFACE references
    const providerPorts: Array<{ component: string; portName: string; interfaceRef: string }> = [];
    const requiredPorts: Array<{ component: string; portName: string; interfaceRef: string }> = [];

    for (const swc of swComponents) {
      for (const port of swc.ports) {
        if (port.type === "provider") {
          providerPorts.push({ component: swc.name, portName: port.name, interfaceRef: port.interfaceRef });
        } else {
          requiredPorts.push({ component: swc.name, portName: port.name, interfaceRef: port.interfaceRef });
        }
      }
    }

    for (const pPort of providerPorts) {
      for (const rPort of requiredPorts) {
        if (pPort.interfaceRef === rPort.interfaceRef && pPort.component !== rPort.component) {
          connections.push({
            sourceComponent: pPort.component,
            sourcePort: pPort.portName,
            targetComponent: rPort.component,
            targetPort: rPort.portName,
          });
        }
      }
    }
  }

  // Check for instances in COMPOSITION to handle multiple instances of same type
  // Also extract VFB position data from SW-COMPONENT-PROTOTYPE ADMIN-DATA
  interface InstanceInfo {
    name: string;
    vfbPosition?: VFBPosition;
  }

  const instanceMap = new Map<string, InstanceInfo[]>();
  for (const compEl of compositionEls) {
    const prototypes = getElementsByLocalName(compEl, "SW-COMPONENT-PROTOTYPE");
    for (const proto of prototypes) {
      const instanceName = getTextContent(proto, "SHORT-NAME");
      const typeRef = getElementsByLocalName(proto, "TYPE-TREF")[0]?.textContent?.trim() || "";
      const typeName = typeRef.split("/").pop() || "";
      // Skip composition-type references (nested compositions)
      const destAttr = getElementsByLocalName(proto, "TYPE-TREF")[0]?.getAttribute("DEST") || "";
      if (destAttr === "COMPOSITION-SW-COMPONENT-TYPE") continue;

      // Extract VFB position from prototype's ADMIN-DATA
      const vfbData = extractVfbSDG(proto);
      const vfbPosition: VFBPosition | undefined =
        vfbData?.x !== undefined && vfbData?.y !== undefined && vfbData?.width !== undefined && vfbData?.height !== undefined
          ? { x: vfbData.x, y: vfbData.y, width: vfbData.width, height: vfbData.height }
          : undefined;

      if (!instanceMap.has(typeName)) {
        instanceMap.set(typeName, []);
      }
      instanceMap.get(typeName)!.push({ name: instanceName, vfbPosition });
    }
  }

  // Expand instances with VFB positions
  const expandedComponents: ParsedSWC[] = [];
  const handledTypes = new Set<string>();

  for (const [typeName, instances] of Array.from(instanceMap.entries())) {
    const swcType = swComponents.find((s) => s.name === typeName);
    if (!swcType) continue;
    handledTypes.add(typeName);

    if (instances.length === 1) {
      // Single instance - use type name (matches original AutoSAR.io behavior)
      expandedComponents.push({
        ...swcType,
        vfbPosition: instances[0].vfbPosition,
      });
    } else {
      // Multiple instances of same type - use instance names for distinction
      for (const instance of instances) {
        expandedComponents.push({
          name: instance.name,
          ports: swcType.ports.map((p) => ({ ...p })),
          vfbPosition: instance.vfbPosition,
        });
      }
    }
  }

  // Add any types not referenced in compositions
  for (const swc of swComponents) {
    if (!handledTypes.has(swc.name)) {
      expandedComponents.push(swc);
    }
  }

  const finalComponents = expandedComponents.length > 0 ? expandedComponents : swComponents;
  const hasVfbPositions = finalComponents.some((c) => c.vfbPosition !== undefined);

  return {
    swComponents: finalComponents,
    connections,
    compositionName,
    hasVfbPositions,
  };
}

export function arxmlToNodesAndEdges(parsed: ParsedARXML): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = parsed.swComponents.map((swc, index) => {
    const hasVfb = swc.vfbPosition !== undefined;
    const vfb = swc.vfbPosition;

    // Determine node dimensions
    const nodeWidth = hasVfb && vfb ? vfb.width : 140;
    const nodeHeight = hasVfb && vfb ? vfb.height : undefined; // calculated below if no VFB

    const ports: PortData[] = swc.ports.map((port, pIndex) => {
      // Determine side from VFB data or default
      let side: "top" | "right" | "bottom" | "left";
      if (port.vfbSide !== undefined) {
        side = port.vfbSide === 1 ? "right" : "left";
      } else {
        side = port.type === "provider" ? "right" : "left";
      }

      // Derive cpPortKind from interface DEST attribute
      let cpPortKind: CpPortKind | undefined;
      if (port.interfaceDest) {
        const isCS = port.interfaceDest.includes("CLIENT-SERVER");
        const isSR = port.interfaceDest.includes("SENDER-RECEIVER");
        if (isCS) {
          cpPortKind = port.type === "provider" ? "server" : "client";
        } else if (isSR) {
          cpPortKind = port.type === "provider" ? "sender" : "receiver";
        }
      }

      return {
        id: `port-${index}-${pIndex}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        type: port.type,
        name: port.name,
        side,
        position: 50, // default; recalculated below
        cpPortKind,
      };
    });

    // Calculate final node height (if no VFB data)
    const calculatedHeight = (() => {
      if (nodeHeight !== undefined) return nodeHeight;
      const maxPorts = Math.max(
        ports.filter((p) => p.type === "provider").length,
        ports.filter((p) => p.type === "required").length,
        1
      );
      return Math.max(80, maxPorts * 40 + 40);
    })();

    // Distribute port positions
    if (hasVfb && vfb) {
      // Use VFB absolute Y coordinates converted to percentage within node
      for (let pi = 0; pi < ports.length; pi++) {
        const srcPort = swc.ports[pi];
        if (srcPort.vfbY !== undefined) {
          const relativeY = srcPort.vfbY - vfb.y;
          const pct = (relativeY / vfb.height) * 100;
          ports[pi].position = Math.max(5, Math.min(95, pct));
        }
      }

      // For ports without VFB Y data, distribute evenly by side
      const leftNoVfb = ports.filter((p, i) => p.side === "left" && swc.ports[i].vfbY === undefined);
      const rightNoVfb = ports.filter((p, i) => p.side === "right" && swc.ports[i].vfbY === undefined);
      leftNoVfb.forEach((port, i) => {
        port.position = ((i + 1) / (leftNoVfb.length + 1)) * 100;
      });
      rightNoVfb.forEach((port, i) => {
        port.position = ((i + 1) / (rightNoVfb.length + 1)) * 100;
      });
    } else {
      // No VFB data - distribute evenly
      const leftPorts = ports.filter((p) => p.side === "left");
      const rightPorts = ports.filter((p) => p.side === "right");
      leftPorts.forEach((port, i) => {
        port.position = ((i + 1) / (leftPorts.length + 1)) * 100;
      });
      rightPorts.forEach((port, i) => {
        port.position = ((i + 1) / (rightPorts.length + 1)) * 100;
      });
    }

    return {
      id: `swc-${index}`,
      type: "executable",
      position: hasVfb && vfb
        ? { x: vfb.x, y: vfb.y }
        : { x: 0, y: 0 }, // set by auto layout if no VFB
      data: {
        label: swc.name,
        width: nodeWidth,
        height: calculatedHeight,
        ports,
      } as ExecutableData,
    };
  });

  // Normalize positions: shift all nodes so min X/Y starts at padding
  if (parsed.hasVfbPositions) {
    const padding = 50;
    let minX = Infinity;
    let minY = Infinity;
    for (const node of nodes) {
      if (node.position.x < minX) minX = node.position.x;
      if (node.position.y < minY) minY = node.position.y;
    }
    if (isFinite(minX) && isFinite(minY)) {
      const offsetX = -minX + padding;
      const offsetY = -minY + padding;
      for (const node of nodes) {
        node.position = {
          x: node.position.x + offsetX,
          y: node.position.y + offsetY,
        };
      }
    }
  }

  // Build edges from connections
  const edges: Edge[] = [];
  let edgeIndex = 0;

  for (const conn of parsed.connections) {
    const sourceNode = nodes.find(
      (n) => (n.data as ExecutableData).label === conn.sourceComponent
    );
    const targetNode = nodes.find(
      (n) => (n.data as ExecutableData).label === conn.targetComponent
    );

    if (!sourceNode || !targetNode) continue;

    const sourcePort = (sourceNode.data as ExecutableData).ports.find(
      (p) => p.name === conn.sourcePort && p.type === "provider"
    );
    const targetPort = (targetNode.data as ExecutableData).ports.find(
      (p) => p.name === conn.targetPort && p.type === "required"
    );

    if (!sourcePort || !targetPort) continue;

    edges.push({
      id: `edge-${edgeIndex++}`,
      source: sourceNode.id,
      target: targetNode.id,
      sourceHandle: sourcePort.id,
      targetHandle: targetPort.id,
      type: "editable",
    });
  }

  return { nodes, edges };
}
