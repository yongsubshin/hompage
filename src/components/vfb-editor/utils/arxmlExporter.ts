// ARXML Exporter - Generates ARXML from VFB nodes

import type { Node } from "@xyflow/react";
import type { ExecutableData, PortData, Platform, CpPortKind } from "../types";

interface ExportOptions {
  platform: Platform;
  nodes: Node[];
  originalArxml: string;
  addedNodeIds: Set<string>;
  addedPortIds: Set<string>;
}

// Generate UUID for ARXML elements
function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Get interface type based on cpPortKind
function getInterfaceType(cpPortKind?: CpPortKind): string {
  if (!cpPortKind) return "SERVICE-INTERFACE";
  if (cpPortKind === "server" || cpPortKind === "client") {
    return "CLIENT-SERVER-INTERFACE";
  }
  return "SENDER-RECEIVER-INTERFACE";
}


// Insert new ports into existing SWC in ARXML
function insertPortsIntoArxml(
  arxml: string,
  nodeLabel: string,
  ports: PortData[],
  platform: Platform
): string {
  if (ports.length === 0) return arxml;

  const parser = new DOMParser();
  const doc = parser.parseFromString(arxml, "text/xml");

  // Find the SWC by SHORT-NAME
  const shortNames = doc.getElementsByTagName("SHORT-NAME");
  let targetSwc: Element | null = null;

  for (let i = 0; i < shortNames.length; i++) {
    if (shortNames[i].textContent === nodeLabel) {
      const parent = shortNames[i].parentElement;
      if (parent && (
        parent.tagName === "APPLICATION-SW-COMPONENT-TYPE" ||
        parent.tagName === "ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE" ||
        parent.tagName === "SENSOR-ACTUATOR-SW-COMPONENT-TYPE" ||
        parent.tagName === "SW-COMPONENT-PROTOTYPE"
      )) {
        // For SW-COMPONENT-PROTOTYPE, we need to find the actual type
        if (parent.tagName === "SW-COMPONENT-PROTOTYPE") {
          const typeRef = parent.getElementsByTagName("TYPE-TREF")[0];
          if (typeRef) {
            const typePath = typeRef.textContent || "";
            const typeName = typePath.split("/").pop();
            // Find the actual type definition
            for (let j = 0; j < shortNames.length; j++) {
              if (shortNames[j].textContent === typeName) {
                const typeParent = shortNames[j].parentElement;
                if (typeParent && (
                  typeParent.tagName === "APPLICATION-SW-COMPONENT-TYPE" ||
                  typeParent.tagName === "ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE" ||
                  typeParent.tagName === "SENSOR-ACTUATOR-SW-COMPONENT-TYPE"
                )) {
                  targetSwc = typeParent;
                  break;
                }
              }
            }
          }
        } else {
          targetSwc = parent;
        }
        break;
      }
    }
  }

  if (!targetSwc) return arxml;

  // Find or create PORTS element
  let portsElement = targetSwc.getElementsByTagName("PORTS")[0];
  if (!portsElement) {
    portsElement = doc.createElement("PORTS");
    const shortNameEl = targetSwc.getElementsByTagName("SHORT-NAME")[0];
    if (shortNameEl.nextSibling) {
      targetSwc.insertBefore(portsElement, shortNameEl.nextSibling);
    } else {
      targetSwc.appendChild(portsElement);
    }
  }

  // Add new ports
  for (const port of ports) {
    const portEl = doc.createElement(port.type === "provider" ? "P-PORT-PROTOTYPE" : "R-PORT-PROTOTYPE");
    portEl.setAttribute("UUID", generateUUID());

    const shortName = doc.createElement("SHORT-NAME");
    shortName.textContent = port.name;
    portEl.appendChild(shortName);

    const interfaceRef = doc.createElement(
      port.type === "provider" ? "PROVIDED-INTERFACE-TREF" : "REQUIRED-INTERFACE-TREF"
    );

    if (platform === "cp") {
      const interfaceType = getInterfaceType(port.cpPortKind);
      interfaceRef.setAttribute("DEST", interfaceType);
      const interfaceName = (port.cpPortKind === "server" || port.cpPortKind === "client")
        ? "NewCSInterface"
        : "NewSRInterface";
      interfaceRef.textContent = `/PortInterface/${interfaceName}`;
    } else {
      interfaceRef.setAttribute("DEST", "SERVICE-INTERFACE");
      interfaceRef.textContent = "/PortInterface/Service/NewService";
    }

    portEl.appendChild(interfaceRef);
    portsElement.appendChild(portEl);
  }

  // Serialize back to string
  const serializer = new XMLSerializer();
  return formatXml(serializer.serializeToString(doc));
}

// Insert new SWCs into ARXML
function insertSwcsIntoArxml(
  arxml: string,
  nodes: Node[],
  platform: Platform
): string {
  if (nodes.length === 0) return arxml;

  const parser = new DOMParser();
  const doc = parser.parseFromString(arxml, "text/xml");

  // Find the ELEMENTS container for SWCs
  const packages = doc.getElementsByTagName("AR-PACKAGE");
  let targetElements: Element | null = null;

  for (let i = 0; i < packages.length; i++) {
    const shortName = packages[i].getElementsByTagName("SHORT-NAME")[0];
    if (shortName) {
      const name = shortName.textContent;
      if (platform === "cp" && name === "AtomicSwComponent") {
        targetElements = packages[i].getElementsByTagName("ELEMENTS")[0];
        break;
      }
      if (platform === "ap" && name === "AdaptiveApplication") {
        targetElements = packages[i].getElementsByTagName("ELEMENTS")[0];
        break;
      }
    }
  }

  if (!targetElements) return arxml;

  // Add new SWCs
  for (const node of nodes) {
    const data = node.data as ExecutableData;
    const swcType = platform === "cp"
      ? "APPLICATION-SW-COMPONENT-TYPE"
      : "ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE";

    const swcEl = doc.createElement(swcType);
    swcEl.setAttribute("UUID", generateUUID());

    const shortName = doc.createElement("SHORT-NAME");
    shortName.textContent = data.label;
    swcEl.appendChild(shortName);

    if (data.ports.length > 0) {
      const portsEl = doc.createElement("PORTS");
      for (const port of data.ports) {
        const portEl = doc.createElement(
          port.type === "provider" ? "P-PORT-PROTOTYPE" : "R-PORT-PROTOTYPE"
        );
        portEl.setAttribute("UUID", generateUUID());

        const portShortName = doc.createElement("SHORT-NAME");
        portShortName.textContent = port.name;
        portEl.appendChild(portShortName);

        const interfaceRef = doc.createElement(
          port.type === "provider" ? "PROVIDED-INTERFACE-TREF" : "REQUIRED-INTERFACE-TREF"
        );

        if (platform === "cp") {
          const interfaceType = getInterfaceType(port.cpPortKind);
          interfaceRef.setAttribute("DEST", interfaceType);
          const interfaceName = (port.cpPortKind === "server" || port.cpPortKind === "client")
            ? "NewCSInterface"
            : "NewSRInterface";
          interfaceRef.textContent = `/PortInterface/${interfaceName}`;
        } else {
          interfaceRef.setAttribute("DEST", "SERVICE-INTERFACE");
          interfaceRef.textContent = "/PortInterface/Service/NewService";
        }

        portEl.appendChild(interfaceRef);
        portsEl.appendChild(portEl);
      }
      swcEl.appendChild(portsEl);
    }

    // Add internal behavior for CP
    if (platform === "cp") {
      const ibContainer = doc.createElement("INTERNAL-BEHAVIORS");
      const ib = doc.createElement("SWC-INTERNAL-BEHAVIOR");
      ib.setAttribute("UUID", generateUUID());

      const ibShortName = doc.createElement("SHORT-NAME");
      ibShortName.textContent = `${data.label}_IB`;
      ib.appendChild(ibShortName);

      const handleTerm = doc.createElement("HANDLE-TERMINATION-AND-RESTART");
      handleTerm.textContent = "NO-SUPPORT";
      ib.appendChild(handleTerm);

      const supportsMulti = doc.createElement("SUPPORTS-MULTIPLE-INSTANTIATION");
      supportsMulti.textContent = "false";
      ib.appendChild(supportsMulti);

      ibContainer.appendChild(ib);
      swcEl.appendChild(ibContainer);
    }

    targetElements.appendChild(swcEl);
  }

  const serializer = new XMLSerializer();
  return formatXml(serializer.serializeToString(doc));
}

// Simple XML formatter
function formatXml(xml: string): string {
  const PADDING = "  ";
  let formatted = "";
  let indent = 0;

  xml = xml.replace(/(>)(<)(\/*)/g, "$1\n$2$3");

  xml.split("\n").forEach((node) => {
    if (node.match(/^<\/\w/)) {
      indent--;
    }
    formatted += PADDING.repeat(Math.max(0, indent)) + node + "\n";
    if (node.match(/^<\w([^>]*[^\/])?>.*$/) && !node.match(/^<\?/)) {
      indent++;
    }
    if (node.match(/^<\w[^>]*\/>/)) {
      // Self-closing tag, no indent change
    }
    if (node.match(/<\/\w[^>]*>$/)) {
      indent--;
    }
  });

  return formatted.trim();
}

// Main export function
export function exportArxml(options: ExportOptions): string {
  const { platform, nodes, originalArxml, addedNodeIds, addedPortIds } = options;

  // If nothing added, return original
  if (addedNodeIds.size === 0 && addedPortIds.size === 0) {
    return originalArxml;
  }

  let result = originalArxml;

  // Get added nodes
  const addedNodes = nodes.filter((n) => addedNodeIds.has(n.id));

  // Insert new SWCs
  if (addedNodes.length > 0) {
    result = insertSwcsIntoArxml(result, addedNodes, platform);
  }

  // Find added ports on existing nodes
  const existingNodesWithNewPorts = nodes.filter((n) => {
    if (addedNodeIds.has(n.id)) return false;
    const data = n.data as ExecutableData;
    return data.ports.some((p) => addedPortIds.has(p.id));
  });

  for (const node of existingNodesWithNewPorts) {
    const data = node.data as ExecutableData;
    const newPorts = data.ports.filter((p) => addedPortIds.has(p.id));
    result = insertPortsIntoArxml(result, data.label, newPorts, platform);
  }

  return result;
}

// Download ARXML file
export function downloadArxml(content: string, filename: string): void {
  const blob = new Blob([content], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
