"use client";

import { useCallback, useState, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  NodeTypes,
  EdgeTypes,
  ReactFlowProvider,
  addEdge,
  useUpdateNodeInternals,
} from "@xyflow/react";
import type { Node, Edge, Connection } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ExecutableNode from "./nodes/ExecutableNode";
import EditableEdge from "./edges/EditableEdge";
import Toolbar from "./Toolbar";
import ContextMenu from "./ContextMenu";
import LimitPopup from "./LimitPopup";
import type { ExecutableData, ContextMenuState, CpPortKind } from "./types";
import { parseARXML, arxmlToNodesAndEdges } from "./utils/arxmlParser";
import { applyAutoLayout } from "./utils/autoLayout";
import { exportArxml, downloadArxml } from "./utils/arxmlExporter";

const MAX_ADDED_SWC = 2;
const MAX_ADDED_PORT = 2;

function VFBCanvasInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const updateNodeInternals = useUpdateNodeInternals();
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    show: false,
    x: 0,
    y: 0,
    type: null,
  });

  // Demo state
  const [activeDemo, setActiveDemo] = useState<"ap" | "cp" | null>(null);
  const [addedSwcCount, setAddedSwcCount] = useState(0);
  const [addedPortCount, setAddedPortCount] = useState(0);
  const [showLimitPopup, setShowLimitPopup] = useState(false);

  // Export state
  const [originalArxml, setOriginalArxml] = useState<string>("");
  const [addedNodeIds, setAddedNodeIds] = useState<Set<string>>(new Set());
  const [addedPortIds, setAddedPortIds] = useState<Set<string>>(new Set());

  // Port connection state
  const [selectedPort, setSelectedPort] = useState<{
    nodeId: string;
    portId: string;
    portType: "provider" | "required";
  } | null>(null);

  // Handle label change
  const handleLabelChange = useCallback(
    (nodeId: string, newLabel: string) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, label: newLabel } }
            : node
        )
      );
    },
    [setNodes]
  );

  // Handle node context menu
  const handleNodeContextMenu = useCallback(
    (e: React.MouseEvent, nodeId: string) => {
      setContextMenu({
        show: true,
        x: e.clientX,
        y: e.clientY,
        type: "node",
        nodeId,
      });
    },
    []
  );

  // Handle port context menu
  const handlePortContextMenu = useCallback(
    (e: React.MouseEvent, nodeId: string, portId: string) => {
      setContextMenu({
        show: true,
        x: e.clientX,
        y: e.clientY,
        type: "port",
        nodeId,
        portId,
      });
    },
    []
  );

  // Close context menu
  const closeContextMenu = useCallback(() => {
    setContextMenu({ show: false, x: 0, y: 0, type: null });
  }, []);

  // Handle port click for connection
  const handlePortClick = useCallback(
    (nodeId: string, portId: string, portType: "provider" | "required") => {
      if (!selectedPort) {
        // First click - select the port
        setSelectedPort({ nodeId, portId, portType });
        return;
      }

      // Second click
      if (selectedPort.portId === portId) {
        // Same port - deselect
        setSelectedPort(null);
        return;
      }

      if (selectedPort.portType === portType) {
        // Same type - change selection
        setSelectedPort({ nodeId, portId, portType });
        return;
      }

      // Different type - create connection (P -> R)
      const sourceNodeId = portType === "provider" ? nodeId : selectedPort.nodeId;
      const sourcePortId = portType === "provider" ? portId : selectedPort.portId;
      const targetNodeId = portType === "required" ? nodeId : selectedPort.nodeId;
      const targetPortId = portType === "required" ? portId : selectedPort.portId;

      // Check if connection already exists
      const connectionExists = edges.some(
        (e) =>
          (e.sourceHandle === sourcePortId && e.targetHandle === targetPortId) ||
          (e.sourceHandle === targetPortId && e.targetHandle === sourcePortId)
      );

      if (!connectionExists) {
        const newEdge = {
          id: `edge-${Date.now()}`,
          source: sourceNodeId,
          sourceHandle: sourcePortId,
          target: targetNodeId,
          targetHandle: targetPortId,
          type: "editable",
        };
        setEdges((eds) => [...eds, newEdge]);
      }

      setSelectedPort(null);
    },
    [selectedPort, edges, setEdges]
  );

  // Clear port selection when clicking canvas background
  const handlePaneClick = useCallback(() => {
    setSelectedPort(null);
  }, []);

  // Delete node
  const deleteNode = useCallback(
    (nodeId: string) => {
      setNodes((nds) => nds.filter((n) => n.id !== nodeId));
      setEdges((eds) => eds.filter((e) => e.source !== nodeId && e.target !== nodeId));
    },
    [setNodes, setEdges]
  );

  // Delete port
  const deletePort = useCallback(
    (nodeId: string, portId: string) => {
      setNodes((nds) =>
        nds.map((n) =>
          n.id === nodeId
            ? {
                ...n,
                data: {
                  ...n.data,
                  ports: (n.data as ExecutableData).ports.filter((p) => p.id !== portId),
                },
              }
            : n
        )
      );
      setEdges((eds) =>
        eds.filter((e) => e.sourceHandle !== portId && e.targetHandle !== portId)
      );
    },
    [setNodes, setEdges]
  );

  // Handle port drag to reposition
  const handlePortDrag = useCallback(
    (nodeId: string, portId: string, side: "top" | "right" | "bottom" | "left", position: number) => {
      setNodes((nds) =>
        nds.map((n) =>
          n.id === nodeId
            ? {
                ...n,
                data: {
                  ...n.data,
                  ports: (n.data as ExecutableData).ports.map((p) =>
                    p.id === portId ? { ...p, side, position } : p
                  ),
                },
              }
            : n
        )
      );
      requestAnimationFrame(() => {
        updateNodeInternals(nodeId);
      });
    },
    [setNodes, updateNodeInternals]
  );

  // Handle port name change
  const handlePortNameChange = useCallback(
    (nodeId: string, portId: string, newName: string) => {
      setNodes((nds) =>
        nds.map((n) =>
          n.id === nodeId
            ? {
                ...n,
                data: {
                  ...n.data,
                  ports: (n.data as ExecutableData).ports.map((p) =>
                    p.id === portId ? { ...p, name: newName } : p
                  ),
                },
              }
            : n
        )
      );
    },
    [setNodes]
  );

  // Handle node resize
  const handleResize = useCallback(
    (nodeId: string, newWidth: number, newHeight: number, deltaX?: number, deltaY?: number) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id !== nodeId) return n;

          const updatedNode = {
            ...n,
            data: {
              ...n.data,
              width: newWidth,
              height: newHeight,
            },
          };

          if (deltaX !== undefined && deltaX !== 0) {
            updatedNode.position = {
              ...updatedNode.position,
              x: n.position.x + deltaX,
            };
          }
          if (deltaY !== undefined && deltaY !== 0) {
            updatedNode.position = {
              ...updatedNode.position,
              y: n.position.y + deltaY,
            };
          }

          return updatedNode;
        })
      );
      requestAnimationFrame(() => {
        updateNodeInternals(nodeId);
      });
    },
    [setNodes, updateNodeInternals]
  );

  // Node types
  const nodeTypes: NodeTypes = useMemo(
    () => ({ executable: ExecutableNode }),
    []
  );

  // Edge types
  const edgeTypes: EdgeTypes = useMemo(
    () => ({ editable: EditableEdge }),
    []
  );

  // Calculate offset for edges with same source/target to avoid overlap
  const edgesWithOffset = useMemo(() => {
    const edgeGroups: Record<string, Edge[]> = {};

    edges.forEach((edge) => {
      const nodeKey = [edge.source, edge.target].sort().join("-");
      if (!edgeGroups[nodeKey]) {
        edgeGroups[nodeKey] = [];
      }
      edgeGroups[nodeKey].push(edge);
    });

    return edges.map((edge) => {
      const nodeKey = [edge.source, edge.target].sort().join("-");
      const group = edgeGroups[nodeKey];

      if (group.length <= 1) {
        return { ...edge, type: "editable", data: { ...edge.data, offset: 0 } };
      }

      const index = group.findIndex((e) => e.id === edge.id);
      const offsetSpacing = 15;
      const totalOffset = (group.length - 1) * offsetSpacing;
      const offset = index * offsetSpacing - totalOffset / 2;

      return { ...edge, type: "editable", data: { ...edge.data, offset } };
    });
  }, [edges]);

  // Update nodes with callbacks
  const nodesWithCallbacks = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onNodeContextMenu: handleNodeContextMenu,
          onPortContextMenu: handlePortContextMenu,
          onPortClick: handlePortClick,
          onPortDrag: handlePortDrag,
          onPortNameChange: handlePortNameChange,
          onResize: handleResize,
          onLabelChange: handleLabelChange,
          selectedPortId: selectedPort?.portId ?? null,
        },
      })),
    [nodes, handleNodeContextMenu, handlePortContextMenu, handlePortClick, handlePortDrag, handlePortNameChange, handleResize, handleLabelChange, selectedPort]
  );

  // Load demo ARXML
  const handleLoadDemo = useCallback(
    async (type: "ap" | "cp") => {
      try {
        const response = await fetch(`/demo/${type}.arxml`);
        if (!response.ok) throw new Error(`Failed to fetch ${type}.arxml`);
        const content = await response.text();

        const parsed = parseARXML(content);
        const { nodes: parsedNodes, edges: parsedEdges } = arxmlToNodesAndEdges(parsed);

        // Tag nodes with platform type
        const taggedNodes = parsedNodes.map((n) => ({
          ...n,
          data: { ...n.data, platform: type },
        }));

        const finalNodes = parsed.hasVfbPositions
          ? taggedNodes
          : applyAutoLayout(taggedNodes, parsedEdges);

        setNodes(finalNodes);
        setEdges(parsedEdges);
        setActiveDemo(type);
        setAddedSwcCount(0);
        setAddedPortCount(0);
        setOriginalArxml(content);
        setAddedNodeIds(new Set());
        setAddedPortIds(new Set());

        requestAnimationFrame(() => {
          for (const node of finalNodes) {
            updateNodeInternals(node.id);
          }
        });
      } catch (err) {
        console.error("Failed to load demo ARXML:", err);
      }
    },
    [setNodes, setEdges, updateNodeInternals]
  );

  // Add SWC with limit
  const handleAddSWC = useCallback(() => {
    if (addedSwcCount >= MAX_ADDED_SWC) {
      setShowLimitPopup(true);
      return;
    }

    const newId = `swc-new-${Date.now()}`;
    const newNode: Node = {
      id: newId,
      type: "executable",
      position: { x: 100 + addedSwcCount * 200, y: 300 },
      data: {
        label: `NewSWC_${addedSwcCount + 1}`,
        width: 140,
        height: 80,
        ports: [],
        platform: activeDemo ?? "ap",
      } as ExecutableData,
    };

    setNodes((nds) => [...nds, newNode]);
    setAddedSwcCount((c) => c + 1);
    setAddedNodeIds((prev) => new Set(prev).add(newId));
  }, [addedSwcCount, activeDemo, setNodes]);

  // Add Port to a specific node with limit
  const handleAddPort = useCallback(
    (nodeId: string, portType: "provider" | "required", cpPortKind?: CpPortKind) => {
      if (addedPortCount >= MAX_ADDED_PORT) {
        setShowLimitPopup(true);
        return;
      }

      const portId = `port-new-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
      const side = portType === "provider" ? "right" : "left";

      // Generate port name based on XSD standard naming
      // CP: P-PORT-PROTOTYPE + CLIENT-SERVER-INTERFACE = PPort_CS
      //     R-PORT-PROTOTYPE + CLIENT-SERVER-INTERFACE = RPort_CS
      //     P-PORT-PROTOTYPE + SENDER-RECEIVER-INTERFACE = PPort_SR
      //     R-PORT-PROTOTYPE + SENDER-RECEIVER-INTERFACE = RPort_SR
      // AP: P-PORT-PROTOTYPE + SERVICE-INTERFACE = PPort
      //     R-PORT-PROTOTYPE + SERVICE-INTERFACE = RPort
      const getPortName = (existingCount: number) => {
        if (cpPortKind) {
          const kindNames: Record<CpPortKind, string> = {
            server: "PPort_CS",
            client: "RPort_CS",
            sender: "PPort_SR",
            receiver: "RPort_SR",
          };
          return `${kindNames[cpPortKind]}_${existingCount + 1}`;
        }
        // AP: P-PORT or R-PORT with SERVICE-INTERFACE
        const prefix = portType === "provider" ? "PPort" : "RPort";
        return `${prefix}_${existingCount + 1}`;
      };

      setNodes((nds) =>
        nds.map((n) => {
          if (n.id !== nodeId) return n;
          const existingPorts = (n.data as ExecutableData).ports;
          const sameSidePorts = existingPorts.filter((p) => p.side === side);
          const position = ((sameSidePorts.length + 1) / (sameSidePorts.length + 2)) * 100;

          return {
            ...n,
            data: {
              ...n.data,
              ports: [
                ...existingPorts,
                {
                  id: portId,
                  type: portType,
                  name: getPortName(existingPorts.length),
                  side,
                  position,
                  cpPortKind,
                },
              ],
            },
          };
        })
      );
      setAddedPortCount((c) => c + 1);
      setAddedPortIds((prev) => new Set(prev).add(portId));

      requestAnimationFrame(() => {
        updateNodeInternals(nodeId);
      });
    },
    [addedPortCount, setNodes, updateNodeInternals]
  );

  // Clear all
  const handleClear = useCallback(() => {
    setNodes([]);
    setEdges([]);
    setActiveDemo(null);
    setAddedSwcCount(0);
    setAddedPortCount(0);
    setOriginalArxml("");
    setAddedNodeIds(new Set());
    setAddedPortIds(new Set());
  }, [setNodes, setEdges]);

  // Export ARXML
  const handleExport = useCallback(() => {
    if (!activeDemo || !originalArxml) return;

    const arxmlContent = exportArxml({
      platform: activeDemo,
      nodes,
      originalArxml,
      addedNodeIds,
      addedPortIds,
    });

    const filename = `${activeDemo}_vfb_export.arxml`;
    downloadArxml(arxmlContent, filename);
  }, [activeDemo, nodes, originalArxml, addedNodeIds, addedPortIds]);

  // Check if there are modifications
  const hasModifications = addedNodeIds.size > 0 || addedPortIds.size > 0;

  // Handle connection from drag
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges]
  );

  // Default edge options
  const defaultEdgeOptions = useMemo(
    () => ({
      type: "editable",
    }),
    []
  );

  return (
    <div className="flex flex-col h-full">
      <Toolbar
        onLoadDemo={handleLoadDemo}
        onAddSWC={handleAddSWC}
        onExport={handleExport}
        onClear={handleClear}
        activeDemo={activeDemo}
        hasModifications={hasModifications}
      />

      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodesWithCallbacks}
          edges={edgesWithOffset}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onPaneClick={handlePaneClick}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
          snapToGrid
          snapGrid={[10, 10]}
          nodesDraggable={true}
          nodesConnectable={true}
          elementsSelectable={true}
          proOptions={{ hideAttribution: true }}
          style={{ backgroundColor: "#c8dce8" }}
        >
          <Background color="#b0c8d8" gap={20} size={0.8} />
          <Controls className="!bg-white/95 !border-gray-200 !shadow-lg !rounded-lg" />
          <MiniMap
            className="!bg-white !border-gray-300"
            nodeColor={(node) => (node.data as ExecutableData).platform === "cp" ? "#d0d0d0" : "#f0c040"}
            maskColor="rgba(255, 255, 255, 0.7)"
          />
        </ReactFlow>

        {/* Context Menu */}
        {contextMenu.show && contextMenu.type && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            type={contextMenu.type}
            platform={activeDemo ?? undefined}
            onDelete={() => {
              if (contextMenu.type === "node" && contextMenu.nodeId) {
                deleteNode(contextMenu.nodeId);
              } else if (contextMenu.type === "port" && contextMenu.nodeId && contextMenu.portId) {
                deletePort(contextMenu.nodeId, contextMenu.portId);
              }
            }}
            onAddPort={
              contextMenu.type === "node" && contextMenu.nodeId
                ? (portType: "provider" | "required", cpPortKind?: CpPortKind) => handleAddPort(contextMenu.nodeId!, portType, cpPortKind)
                : undefined
            }
            onClose={closeContextMenu}
          />
        )}

        {/* Limit Popup */}
        {showLimitPopup && (
          <LimitPopup onClose={() => setShowLimitPopup(false)} />
        )}

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 text-[11px] text-gray-500 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100 max-w-[260px]">
          <div className="font-semibold text-gray-700 mb-2 text-xs">How to use</div>
          <ul className="space-y-1 leading-snug">
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">1.</span> Click <b>AP</b> or <b>CP</b> to load</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">2.</span> <b>Add SWC</b> to create node</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">3.</span> <b>Right-click SWC</b> to add port</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">4.</span> <b>Click P + R port</b> to connect</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">5.</span> <b>Drag node</b> to reposition</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">6.</span> <b>Drag port</b> to move port</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">7.</span> <b>Double-click</b> name to rename</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">8.</span> <b>Drag line</b> to adjust path</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">9.</span> <b>Right-click</b> to delete</li>
            <li className="flex gap-1.5"><span className="text-gray-400 shrink-0">10.</span> <b>Export</b> to download ARXML</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function VFBCanvas() {
  return (
    <ReactFlowProvider>
      <VFBCanvasInner />
    </ReactFlowProvider>
  );
}
