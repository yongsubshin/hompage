"use client";

import { memo, useState, useCallback, useRef } from "react";
import { Handle, Position } from "@xyflow/react";
import type { ExecutableData, PortData } from "../types";

type ResizeDirection = "nw" | "ne" | "sw" | "se";

interface ExecutableNodeProps {
  data: ExecutableData & {
    onPortClick?: (nodeId: string, portId: string, portType: "provider" | "required") => void;
    onNodeContextMenu?: (e: React.MouseEvent, nodeId: string) => void;
    onPortContextMenu?: (e: React.MouseEvent, nodeId: string, portId: string) => void;
    onPortDrag?: (nodeId: string, portId: string, side: "top" | "right" | "bottom" | "left", position: number) => void;
    onPortNameChange?: (nodeId: string, portId: string, newName: string) => void;
    onResize?: (nodeId: string, width: number, height: number, deltaX?: number, deltaY?: number) => void;
    selectedPortId?: string | null;
  };
  selected?: boolean;
  id: string;
}

function ExecutableNode({ data, selected = false, id }: ExecutableNodeProps) {
  const {
    label,
    width,
    height,
    ports,
    onLabelChange,
    onPortClick,
    onNodeContextMenu,
    onPortContextMenu,
    onPortDrag,
    onPortNameChange,
    onResize,
    selectedPortId,
  } = data;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(label);
  const [editingPortId, setEditingPortId] = useState<string | null>(null);
  const [portEditValue, setPortEditValue] = useState("");
  const [draggingPort, setDraggingPort] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isResizing, setIsResizing] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);
  const resizeStartRef = useRef<{ width: number; height: number; x: number; y: number } | null>(null);
  const lastResizeRef = useRef<{ width: number; height: number; posX: number; posY: number } | null>(null);

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsEditing(true);
      setEditValue(label);
    },
    [label]
  );

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    if (editValue.trim() && editValue !== label && onLabelChange) {
      onLabelChange(id, editValue.trim());
    }
  }, [editValue, label, id, onLabelChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleBlur();
      } else if (e.key === "Escape") {
        setIsEditing(false);
        setEditValue(label);
      }
    },
    [handleBlur, label]
  );

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onNodeContextMenu?.(e, id);
    },
    [id, onNodeContextMenu]
  );

  const handlePortClick = useCallback(
    (e: React.MouseEvent, port: PortData) => {
      e.stopPropagation();
      // Only trigger connect if not dragging
      if (!isDragging) {
        onPortClick?.(id, port.id, port.type);
      }
      setIsDragging(false);
    },
    [id, onPortClick, isDragging]
  );

  const handlePortContextMenu = useCallback(
    (e: React.MouseEvent, portId: string) => {
      e.preventDefault();
      e.stopPropagation();
      onPortContextMenu?.(e, id, portId);
    },
    [id, onPortContextMenu]
  );

  // Port name editing handlers
  const handlePortNameDoubleClick = useCallback(
    (e: React.MouseEvent, port: PortData) => {
      e.stopPropagation();
      e.preventDefault();
      setEditingPortId(port.id);
      setPortEditValue(port.name);
    },
    []
  );

  const handlePortNameBlur = useCallback(
    (port: PortData) => {
      if (portEditValue.trim() && portEditValue !== port.name && onPortNameChange) {
        onPortNameChange(id, port.id, portEditValue.trim());
      }
      setEditingPortId(null);
      setPortEditValue("");
    },
    [id, portEditValue, onPortNameChange]
  );

  const handlePortNameKeyDown = useCallback(
    (e: React.KeyboardEvent, port: PortData) => {
      if (e.key === "Enter") {
        handlePortNameBlur(port);
      } else if (e.key === "Escape") {
        setEditingPortId(null);
        setPortEditValue("");
      }
    },
    [handlePortNameBlur]
  );

  // Port drag handlers
  const handlePortMouseDown = useCallback(
    (e: React.MouseEvent, portId: string) => {
      if (e.button !== 0) return; // Left click only
      e.stopPropagation();

      // Record start position
      dragStartPos.current = { x: e.clientX, y: e.clientY };
      setDraggingPort(portId);
      setIsDragging(false);

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!nodeRef.current || !dragStartPos.current) return;

        // Check if moved more than 5px (threshold for drag vs click)
        const dx = moveEvent.clientX - dragStartPos.current.x;
        const dy = moveEvent.clientY - dragStartPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 5) return; // Not dragging yet

        setIsDragging(true);

        const nodeRect = nodeRef.current.getBoundingClientRect();
        // Use actual rendered size (accounts for zoom/pan)
        const nodeWidth = nodeRect.width;
        const nodeHeight = nodeRect.height;

        // Calculate relative position within the node
        const relX = moveEvent.clientX - nodeRect.left;
        const relY = moveEvent.clientY - nodeRect.top;

        // Determine closest edge
        const distToLeft = Math.abs(relX);
        const distToRight = Math.abs(relX - nodeWidth);
        const distToTop = Math.abs(relY);
        const distToBottom = Math.abs(relY - nodeHeight);
        const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

        let newSide: "top" | "right" | "bottom" | "left";
        let newPosition: number;

        if (minDist === distToLeft) {
          newSide = "left";
          newPosition = Math.max(10, Math.min(90, (relY / nodeHeight) * 100));
        } else if (minDist === distToRight) {
          newSide = "right";
          newPosition = Math.max(10, Math.min(90, (relY / nodeHeight) * 100));
        } else if (minDist === distToTop) {
          newSide = "top";
          newPosition = Math.max(10, Math.min(90, (relX / nodeWidth) * 100));
        } else {
          newSide = "bottom";
          newPosition = Math.max(10, Math.min(90, (relX / nodeWidth) * 100));
        }

        onPortDrag?.(id, portId, newSide, newPosition);
      };

      const handleMouseUp = () => {
        setDraggingPort(null);
        dragStartPos.current = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [id, onPortDrag]
  );

  const getHandlePosition = (side: string): Position => {
    switch (side) {
      case "top": return Position.Top;
      case "bottom": return Position.Bottom;
      case "left": return Position.Left;
      case "right": return Position.Right;
      default: return Position.Left;
    }
  };

  const getHandleStyle = (port: PortData): React.CSSProperties => {
    const isSelected = port.id === selectedPortId;

    const style: React.CSSProperties = {
      width: 16,
      height: 16,
      backgroundColor: "#99cc00",
      border: isSelected ? "2px solid #ff0000" : "1px solid #000000",
      borderRadius: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: isSelected ? "0 0 6px rgba(255,0,0,0.5)" : "none",
    };

    if (port.side === "left" || port.side === "right") {
      style.top = `${port.position}%`;
    } else {
      style.left = `${port.position}%`;
    }

    return style;
  };

  // Resize handler for all corners
  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent, direction: ResizeDirection) => {
      e.stopPropagation();
      e.preventDefault();
      setIsResizing(true);

      const startWidth = width || 120;
      const startHeight = height || 80;

      resizeStartRef.current = {
        width: startWidth,
        height: startHeight,
        x: e.clientX,
        y: e.clientY,
      };

      // Track last applied values to calculate frame-by-frame delta
      lastResizeRef.current = {
        width: startWidth,
        height: startHeight,
        posX: 0,
        posY: 0,
      };

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!resizeStartRef.current || !lastResizeRef.current) return;

        const deltaX = moveEvent.clientX - resizeStartRef.current.x;
        const deltaY = moveEvent.clientY - resizeStartRef.current.y;

        let newWidth = resizeStartRef.current.width;
        let newHeight = resizeStartRef.current.height;
        let totalPosX = 0;
        let totalPosY = 0;

        // Calculate new size based on direction
        if (direction === "se") {
          newWidth = Math.max(80, resizeStartRef.current.width + deltaX);
          newHeight = Math.max(60, resizeStartRef.current.height + deltaY);
        } else if (direction === "sw") {
          const proposedWidth = resizeStartRef.current.width - deltaX;
          newWidth = Math.max(80, proposedWidth);
          newHeight = Math.max(60, resizeStartRef.current.height + deltaY);
          if (proposedWidth >= 80) totalPosX = deltaX;
        } else if (direction === "ne") {
          newWidth = Math.max(80, resizeStartRef.current.width + deltaX);
          const proposedHeight = resizeStartRef.current.height - deltaY;
          newHeight = Math.max(60, proposedHeight);
          if (proposedHeight >= 60) totalPosY = deltaY;
        } else if (direction === "nw") {
          const proposedWidth = resizeStartRef.current.width - deltaX;
          const proposedHeight = resizeStartRef.current.height - deltaY;
          newWidth = Math.max(80, proposedWidth);
          newHeight = Math.max(60, proposedHeight);
          if (proposedWidth >= 80) totalPosX = deltaX;
          if (proposedHeight >= 60) totalPosY = deltaY;
        }

        // Calculate frame delta (difference from last frame)
        const frameDeltaX = totalPosX - lastResizeRef.current.posX;
        const frameDeltaY = totalPosY - lastResizeRef.current.posY;

        // Update last values
        lastResizeRef.current = {
          width: newWidth,
          height: newHeight,
          posX: totalPosX,
          posY: totalPosY,
        };

        onResize?.(id, newWidth, newHeight, frameDeltaX, frameDeltaY);
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        resizeStartRef.current = null;
        lastResizeRef.current = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [id, width, height, onResize]
  );

  return (
    <div
      ref={nodeRef}
      className={`relative flex flex-col ${selected ? "ring-2 ring-blue-400 ring-offset-1" : ""}`}
      style={{
        width: width || 120,
        height: height || 80,
        minWidth: 80,
        minHeight: 60,
        backgroundColor: "#f0c040",
        border: "1px solid #000000",
        borderRadius: 0,
      }}
      onContextMenu={handleContextMenu}
    >
      {/* Header */}
      <div
        className="text-[10px] text-black px-1.5 pt-1 select-none"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        [Executable]
      </div>

      {/* Name */}
      <div
        className="text-xs font-bold text-black px-1.5 select-none cursor-text"
        onDoubleClick={handleDoubleClick}
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-full bg-white border border-gray-400 px-0.5 text-xs font-bold outline-none"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          label
        )}
      </div>

      {/* Ports */}
      {ports.map((port) => (
        <Handle
          key={port.id}
          type={port.type === "provider" ? "source" : "target"}
          position={getHandlePosition(port.side)}
          id={port.id}
          isConnectable={true}
          style={{
            ...getHandleStyle(port),
            cursor: draggingPort === port.id ? "grabbing" : "grab",
          }}
          onClick={(e) => handlePortClick(e, port)}
          onContextMenu={(e) => handlePortContextMenu(e, port.id)}
          onMouseDown={(e) => handlePortMouseDown(e, port.id)}
        >
          <span
            className="text-[9px] font-bold pointer-events-none select-none"
            style={{
              color: "#000000",
              lineHeight: 1,
            }}
          >
            {port.type === "provider" ? "P" : "R"}
          </span>

          {editingPortId === port.id ? (
            <input
              type="text"
              value={portEditValue}
              onChange={(e) => setPortEditValue(e.target.value)}
              onBlur={() => handlePortNameBlur(port)}
              onKeyDown={(e) => handlePortNameKeyDown(e, port)}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              autoFocus
              className="absolute text-[9px] text-black bg-white border border-gray-400 px-0.5 outline-none text-center"
              style={{
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: 1,
                fontFamily: "Arial, sans-serif",
                width: 50,
              }}
            />
          ) : (
            <div
              className="absolute whitespace-nowrap text-[9px] text-black select-none cursor-text"
              style={{
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: 1,
                fontFamily: "Arial, sans-serif",
              }}
              onDoubleClick={(e) => handlePortNameDoubleClick(e, port)}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {port.name}
            </div>
          )}
        </Handle>
      ))}

      {/* Resize handles - positioned outside node to avoid port overlap */}
      <div
        onMouseDown={(e) => handleResizeMouseDown(e, "nw")}
        className="nodrag absolute w-3 h-3"
        style={{ cursor: "nwse-resize", top: -8, left: -8 }}
      />
      <div
        onMouseDown={(e) => handleResizeMouseDown(e, "ne")}
        className="nodrag absolute w-3 h-3"
        style={{ cursor: "nesw-resize", top: -8, right: -8 }}
      />
      <div
        onMouseDown={(e) => handleResizeMouseDown(e, "sw")}
        className="nodrag absolute w-3 h-3"
        style={{ cursor: "nesw-resize", bottom: -8, left: -8 }}
      />
      <div
        onMouseDown={(e) => handleResizeMouseDown(e, "se")}
        className="nodrag absolute w-3 h-3"
        style={{ cursor: "nwse-resize", bottom: -8, right: -8 }}
      />
    </div>
  );
}

export default memo(ExecutableNode);
