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
import type { ExecutableData, PortData, SelectedPort, ContextMenuState } from "./types";
import { exportToARXML, downloadARXML } from "./utils/arxmlExporter";

function VFBCanvasInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const updateNodeInternals = useUpdateNodeInternals();
  const [nodeCounter, setNodeCounter] = useState(1);
  const [portCounter, setPortCounter] = useState(1);
  const [selectedPort, setSelectedPort] = useState<SelectedPort | null>(null);
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    show: false,
    x: 0,
    y: 0,
    type: null,
  });

  // Handle port click for connecting
  const handlePortClick = useCallback(
    (nodeId: string, portId: string, portType: "provider" | "required") => {
      if (!selectedPort) {
        setSelectedPort({ nodeId, portId, portType });
      } else {
        const canConnect =
          (selectedPort.portType === "provider" && portType === "required") ||
          (selectedPort.portType === "required" && portType === "provider");

        if (canConnect && (selectedPort.nodeId !== nodeId || selectedPort.portId !== portId)) {
          const source = selectedPort.portType === "provider" ? selectedPort : { nodeId, portId };
          const target = selectedPort.portType === "required" ? selectedPort : { nodeId, portId };

          const connection: Connection = {
            source: source.nodeId,
            target: target.nodeId,
            sourceHandle: source.portId,
            targetHandle: target.portId,
          };

          setEdges((eds) => addEdge(connection, eds));
        }
        setSelectedPort(null);
      }
    },
    [selectedPort, setEdges]
  );

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

  // Handle node context menu - save click position for port placement
  const handleNodeContextMenu = useCallback(
    (e: React.MouseEvent, nodeId: string) => {
      const nodeElement = (e.target as HTMLElement).closest(".react-flow__node");
      if (!nodeElement) return;

      const nodeRect = nodeElement.getBoundingClientRect();
      const clickX = e.clientX - nodeRect.left;
      const clickY = e.clientY - nodeRect.top;
      const nodeWidth = nodeRect.width;
      const nodeHeight = nodeRect.height;

      // Determine which side was clicked
      const distToLeft = clickX;
      const distToRight = nodeWidth - clickX;
      const distToTop = clickY;
      const distToBottom = nodeHeight - clickY;
      const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

      let side: "top" | "right" | "bottom" | "left";
      let position: number;

      if (minDist === distToLeft) {
        side = "left";
        position = (clickY / nodeHeight) * 100;
      } else if (minDist === distToRight) {
        side = "right";
        position = (clickY / nodeHeight) * 100;
      } else if (minDist === distToTop) {
        side = "top";
        position = (clickX / nodeWidth) * 100;
      } else {
        side = "bottom";
        position = (clickX / nodeWidth) * 100;
      }

      position = Math.max(10, Math.min(90, position));

      setContextMenu({
        show: true,
        x: e.clientX,
        y: e.clientY,
        type: "node",
        nodeId,
        clickPosition: { x: clickX, y: clickY, side, position },
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

  // Add port to node at clicked position
  const addPortToNode = useCallback(
    (nodeId: string, portType: "provider" | "required") => {
      const portName = portType === "provider" ? `P${portCounter}` : `R${portCounter}`;

      // Use click position if available
      const clickPos = contextMenu.clickPosition;
      const side = clickPos?.side || (portType === "provider" ? "left" : "right");
      const position = clickPos?.position || 50;

      const newPort: PortData = {
        id: `port-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        type: portType,
        name: portName,
        side,
        position,
      };

      setNodes((nds) =>
        nds.map((n) =>
          n.id === nodeId
            ? { ...n, data: { ...n.data, ports: [...(n.data as ExecutableData).ports, newPort] } }
            : n
        )
      );

      setPortCounter((c) => c + 1);

      // Update node internals to register the new handle
      requestAnimationFrame(() => {
        updateNodeInternals(nodeId);
      });
    },
    [contextMenu.clickPosition, portCounter, setNodes, updateNodeInternals]
  );

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
      if (selectedPort?.portId === portId) {
        setSelectedPort(null);
      }
    },
    [setNodes, setEdges, selectedPort]
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
      // Update node internals to re-register handle positions
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

  // Handle node resize (with optional position adjustment for nw/ne/sw corners)
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

          // Adjust position if dragging from top or left edges
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
      // Update node internals to recalculate handle positions
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
    // Group edges by source-target pair
    const edgeGroups: Record<string, Edge[]> = {};

    edges.forEach((edge) => {
      // Create a key that groups edges between same nodes (regardless of direction)
      const nodeKey = [edge.source, edge.target].sort().join("-");
      if (!edgeGroups[nodeKey]) {
        edgeGroups[nodeKey] = [];
      }
      edgeGroups[nodeKey].push(edge);
    });

    // Assign offsets to each edge in a group
    return edges.map((edge) => {
      const nodeKey = [edge.source, edge.target].sort().join("-");
      const group = edgeGroups[nodeKey];

      if (group.length <= 1) {
        return { ...edge, type: "editable", data: { ...edge.data, offset: 0 } };
      }

      const index = group.findIndex((e) => e.id === edge.id);
      const offsetSpacing = 15; // pixels between parallel edges
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
          onPortClick: handlePortClick,
          onNodeContextMenu: handleNodeContextMenu,
          onPortContextMenu: handlePortContextMenu,
          onPortDrag: handlePortDrag,
          onPortNameChange: handlePortNameChange,
          onResize: handleResize,
          onLabelChange: handleLabelChange,
          selectedPortId: selectedPort?.portId || null,
        },
      })),
    [nodes, handlePortClick, handleNodeContextMenu, handlePortContextMenu, handlePortDrag, handlePortNameChange, handleResize, handleLabelChange, selectedPort]
  );

  // Add executable
  const handleAddExecutable = useCallback(() => {
    const id = `exec-${Date.now()}`;
    const offsetX = ((nodeCounter - 1) % 4) * 150;
    const offsetY = Math.floor((nodeCounter - 1) / 4) * 120;

    const newNode: Node = {
      id,
      type: "executable",
      position: { x: 50 + offsetX, y: 50 + offsetY },
      data: {
        label: `Exec${nodeCounter}`,
        width: 120,
        height: 80,
        ports: [],
      } as ExecutableData,
    };

    setNodes((nds) => [...nds, newNode]);
    setNodeCounter((c) => c + 1);
  }, [nodeCounter, setNodes]);

  // Export ARXML
  const handleExportARXML = useCallback(() => {
    const arxml = exportToARXML(nodes, edges);
    downloadARXML(arxml, "vfb_design.arxml");
  }, [nodes, edges]);

  // Clear all
  const handleClear = useCallback(() => {
    setNodes([]);
    setEdges([]);
    setNodeCounter(1);
    setPortCounter(1);
    setSelectedPort(null);
  }, [setNodes, setEdges]);

  // Handle pane click to deselect port
  const handlePaneClick = useCallback(() => {
    setSelectedPort(null);
  }, []);

  // Handle connection from drag
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges]
  );

  // Selected port info for toolbar
  const selectedPortInfo = useMemo(() => {
    if (!selectedPort) return null;
    const node = nodes.find((n) => n.id === selectedPort.nodeId);
    if (!node) return null;
    const port = (node.data as ExecutableData).ports.find((p) => p.id === selectedPort.portId);
    if (!port) return null;
    return `${(node.data as ExecutableData).label}.${port.name}`;
  }, [selectedPort, nodes]);

  // Default edge options - use editable edge type
  const defaultEdgeOptions = useMemo(
    () => ({
      type: "editable",
    }),
    []
  );

  return (
    <div className="flex flex-col h-full">
      <Toolbar
        onAddExecutable={handleAddExecutable}
        onExportARXML={handleExportARXML}
        onClear={handleClear}
        selectedPortInfo={selectedPortInfo}
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
          nodesConnectable={false}
          elementsSelectable={true}
          proOptions={{ hideAttribution: true }}
          style={{ backgroundColor: "#c8dce8" }}
        >
          <Background color="#a8c4d8" gap={20} size={1} />
          <Controls className="!bg-white !border-gray-300 !shadow-md" />
          <MiniMap
            className="!bg-white !border-gray-300"
            nodeColor={() => "#f0c040"}
            maskColor="rgba(255, 255, 255, 0.7)"
          />
        </ReactFlow>

        {/* Context Menu */}
        {contextMenu.show && contextMenu.type && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            type={contextMenu.type}
            onAddProviderPort={
              contextMenu.type === "node" && contextMenu.nodeId
                ? () => addPortToNode(contextMenu.nodeId!, "provider")
                : undefined
            }
            onAddRequiredPort={
              contextMenu.type === "node" && contextMenu.nodeId
                ? () => addPortToNode(contextMenu.nodeId!, "required")
                : undefined
            }
            onDelete={() => {
              if (contextMenu.type === "node" && contextMenu.nodeId) {
                deleteNode(contextMenu.nodeId);
              } else if (contextMenu.type === "port" && contextMenu.nodeId && contextMenu.portId) {
                deletePort(contextMenu.nodeId, contextMenu.portId);
              }
            }}
            onClose={closeContextMenu}
          />
        )}

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 text-[11px] text-gray-600 bg-white/95 p-2.5 rounded shadow-md border border-gray-200 max-w-[260px]">
          <div className="font-semibold text-gray-800 mb-1.5">How to use:</div>
          <ul className="space-y-0.5 leading-tight">
            <li>1. Click <b>+ Executable</b> to add</li>
            <li>2. <b>Right-click border</b> → Add P/R</li>
            <li>3. <b>Click P</b> → <b>Click R</b> to connect</li>
            <li>4. <b>Drag port</b> to move on border</li>
            <li>5. <b>Double-click port name</b> → Rename</li>
            <li>6. <b>Drag line</b> → Adjust path</li>
            <li>7. <b>Double-click line</b> → Reset path</li>
            <li>8. <b>Right-click line</b> → Delete line</li>
            <li>9. <b>Drag corner</b> → Resize node</li>
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
