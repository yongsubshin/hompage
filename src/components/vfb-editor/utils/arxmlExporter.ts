import type { Node, Edge } from "@xyflow/react";
import type { ExecutableData } from "../types";

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function exportToARXML(nodes: Node[], edges: Edge[]): string {
  const timestamp = new Date().toISOString();

  // Collect unique service interface names from ports
  const serviceInterfaceNames = new Set<string>();
  nodes.forEach((node) => {
    const data = node.data as ExecutableData;
    data.ports.forEach((port) => {
      serviceInterfaceNames.add(`${port.name}_Interface`);
    });
  });

  // Generate Service Interfaces
  const serviceInterfacesXml = Array.from(serviceInterfaceNames)
    .map((name) => {
      const uuid = generateUUID();
      return `        <SERVICE-INTERFACE UUID="${uuid}">
          <SHORT-NAME>${escapeXml(name)}</SHORT-NAME>
          <NAMESPACES>
            <SYMBOL-PROPS>
              <SHORT-NAME>ns</SHORT-NAME>
              <SYMBOL>ara::com</SYMBOL>
            </SYMBOL-PROPS>
          </NAMESPACES>
        </SERVICE-INTERFACE>`;
    })
    .join("\n");

  // Generate Component Types
  const componentTypesXml = nodes
    .map((node) => {
      const data = node.data as ExecutableData;
      const uuid = generateUUID();

      const providerPorts = data.ports
        .filter((p) => p.type === "provider")
        .map((port) => {
          const portUuid = generateUUID();
          return `          <P-PORT-PROTOTYPE UUID="${portUuid}">
            <SHORT-NAME>${escapeXml(port.name)}</SHORT-NAME>
            <PROVIDED-INTERFACE-TREF DEST="SERVICE-INTERFACE">/PortInterface/Service/${escapeXml(port.name)}_Interface</PROVIDED-INTERFACE-TREF>
          </P-PORT-PROTOTYPE>`;
        })
        .join("\n");

      const requiredPorts = data.ports
        .filter((p) => p.type === "required")
        .map((port) => {
          const portUuid = generateUUID();
          return `          <R-PORT-PROTOTYPE UUID="${portUuid}">
            <SHORT-NAME>${escapeXml(port.name)}</SHORT-NAME>
            <REQUIRED-INTERFACE-TREF DEST="SERVICE-INTERFACE">/PortInterface/Service/${escapeXml(port.name)}_Interface</REQUIRED-INTERFACE-TREF>
          </R-PORT-PROTOTYPE>`;
        })
        .join("\n");

      const portsSection = [providerPorts, requiredPorts].filter(Boolean).join("\n");

      return `        <ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE UUID="${uuid}">
          <SHORT-NAME>${escapeXml(data.label)}</SHORT-NAME>
${portsSection ? `          <PORTS>\n${portsSection}\n          </PORTS>` : ""}
        </ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE>`;
    })
    .join("\n\n");

  // Generate Component Prototypes for Composition
  const componentPrototypesXml = nodes
    .map((node) => {
      const data = node.data as ExecutableData;
      const prototypeUuid = generateUUID();
      return `          <SW-COMPONENT-PROTOTYPE UUID="${prototypeUuid}">
            <SHORT-NAME>${escapeXml(data.label)}</SHORT-NAME>
            <TYPE-TREF DEST="ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE">/SwComponent/AdaptiveApplication/${escapeXml(data.label)}</TYPE-TREF>
          </SW-COMPONENT-PROTOTYPE>`;
    })
    .join("\n");

  // Generate Assembly Connectors
  const connectorsXml = edges
    .map((edge) => {
      const uuid = generateUUID();
      const sourceNode = nodes.find((n) => n.id === edge.source);
      const targetNode = nodes.find((n) => n.id === edge.target);

      if (!sourceNode || !targetNode) return "";

      const sourceData = sourceNode.data as ExecutableData;
      const targetData = targetNode.data as ExecutableData;
      const sourcePort = sourceData.ports.find((p) => p.id === edge.sourceHandle);
      const targetPort = targetData.ports.find((p) => p.id === edge.targetHandle);

      if (!sourcePort || !targetPort) return "";

      return `          <ASSEMBLY-SW-CONNECTOR UUID="${uuid}">
            <SHORT-NAME>Conn_${escapeXml(sourceData.label)}_to_${escapeXml(targetData.label)}</SHORT-NAME>
            <PROVIDER-IREF>
              <CONTEXT-COMPONENT-REF DEST="SW-COMPONENT-PROTOTYPE">/SwComponent/Composition/TopLevelComposition/${escapeXml(sourceData.label)}</CONTEXT-COMPONENT-REF>
              <TARGET-P-PORT-REF DEST="P-PORT-PROTOTYPE">/SwComponent/AdaptiveApplication/${escapeXml(sourceData.label)}/${escapeXml(sourcePort.name)}</TARGET-P-PORT-REF>
            </PROVIDER-IREF>
            <REQUESTER-IREF>
              <CONTEXT-COMPONENT-REF DEST="SW-COMPONENT-PROTOTYPE">/SwComponent/Composition/TopLevelComposition/${escapeXml(targetData.label)}</CONTEXT-COMPONENT-REF>
              <TARGET-R-PORT-REF DEST="R-PORT-PROTOTYPE">/SwComponent/AdaptiveApplication/${escapeXml(targetData.label)}/${escapeXml(targetPort.name)}</TARGET-R-PORT-REF>
            </REQUESTER-IREF>
          </ASSEMBLY-SW-CONNECTOR>`;
    })
    .filter(Boolean)
    .join("\n\n");

  const arxml = `<?xml version="1.0" encoding="UTF-8"?>
<AUTOSAR xmlns="http://autosar.org/schema/r4.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://autosar.org/schema/r4.0 AUTOSAR_00049.xsd">
  <!-- Generated by AutoSAR.io VFB Editor -->
  <!-- Timestamp: ${timestamp} -->
  <AR-PACKAGES>
    <!-- PortInterface Package -->
    <AR-PACKAGE UUID="${generateUUID()}">
      <SHORT-NAME>PortInterface</SHORT-NAME>
      <AR-PACKAGES>
        <AR-PACKAGE UUID="${generateUUID()}">
          <SHORT-NAME>Service</SHORT-NAME>
          <ELEMENTS>
${serviceInterfacesXml || "            <!-- No service interfaces -->"}
          </ELEMENTS>
        </AR-PACKAGE>
      </AR-PACKAGES>
    </AR-PACKAGE>

    <!-- SwComponent Package -->
    <AR-PACKAGE UUID="${generateUUID()}">
      <SHORT-NAME>SwComponent</SHORT-NAME>
      <AR-PACKAGES>
        <!-- Component Types -->
        <AR-PACKAGE UUID="${generateUUID()}">
          <SHORT-NAME>AdaptiveApplication</SHORT-NAME>
          <ELEMENTS>
${componentTypesXml || "            <!-- No components -->"}
          </ELEMENTS>
        </AR-PACKAGE>

        <!-- Composition -->
        <AR-PACKAGE UUID="${generateUUID()}">
          <SHORT-NAME>Composition</SHORT-NAME>
          <ELEMENTS>
            <COMPOSITION-SW-COMPONENT-TYPE UUID="${generateUUID()}">
              <SHORT-NAME>TopLevelComposition</SHORT-NAME>
              <COMPONENTS>
${componentPrototypesXml || "                <!-- No component instances -->"}
              </COMPONENTS>
${connectorsXml ? `              <CONNECTORS>\n${connectorsXml}\n              </CONNECTORS>` : ""}
            </COMPOSITION-SW-COMPONENT-TYPE>
          </ELEMENTS>
        </AR-PACKAGE>
      </AR-PACKAGES>
    </AR-PACKAGE>
  </AR-PACKAGES>
</AUTOSAR>`;

  return arxml;
}

export function downloadARXML(content: string, filename: string = "vfb_design.arxml"): void {
  const blob = new Blob([content], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
