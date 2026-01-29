"use client";

import { memo, useState, useCallback, useEffect } from "react";
import { useReactFlow } from "@xyflow/react";
import type { EdgeProps } from "@xyflow/react";

interface EditableEdgeData {
  midX?: number;
  offset?: number;
}

function EditableEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
  data,
}: EdgeProps) {
  const { setEdges, screenToFlowPosition } = useReactFlow();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const offset = (data as EditableEdgeData)?.offset || 0;
  const customMidX = (data as EditableEdgeData)?.midX;

  const offsetSourceY = sourceY + offset;
  const offsetTargetY = targetY + offset;

  // Default midX is halfway between source and target
  const defaultMidX = (sourceX + targetX) / 2;
  const midX = customMidX !== undefined ? customMidX : defaultMidX;

  // Smooth step path with rounded corners
  const r = Math.min(8, Math.abs(midX - sourceX) / 2, Math.abs(midX - targetX) / 2, Math.abs(offsetTargetY - offsetSourceY) / 2);
  const dy = offsetTargetY > offsetSourceY ? 1 : -1;
  const dxSource = midX > sourceX ? 1 : -1;
  const dxTarget = targetX > midX ? 1 : -1;

  const pathData = r > 1
    ? `M ${sourceX} ${offsetSourceY} L ${midX - r * dxSource} ${offsetSourceY} Q ${midX} ${offsetSourceY}, ${midX} ${offsetSourceY + r * dy} L ${midX} ${offsetTargetY - r * dy} Q ${midX} ${offsetTargetY}, ${midX + r * dxTarget} ${offsetTargetY} L ${targetX} ${offsetTargetY}`
    : `M ${sourceX} ${offsetSourceY} L ${midX} ${offsetSourceY} L ${midX} ${offsetTargetY} L ${targetX} ${offsetTargetY}`;

  // Global drag handlers - only adjust midX (horizontal position of vertical segment)
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const flowPos = screenToFlowPosition({ x: e.clientX, y: e.clientY });

      setEdges((edges) =>
        edges.map((edge) => {
          if (edge.id !== id) return edge;
          return {
            ...edge,
            data: {
              ...edge.data,
              midX: flowPos.x,
            },
          };
        })
      );
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, id, setEdges, screenToFlowPosition]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
  }, []);

  // Reset on double-click
  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setEdges((edges) =>
        edges.map((edge) => {
          if (edge.id !== id) return edge;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { midX: _x, ...restData } = edge.data as EditableEdgeData;
          return { ...edge, data: restData };
        })
      );
    },
    [id, setEdges]
  );

  // Delete on right-click
  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setEdges((edges) => edges.filter((edge) => edge.id !== id));
    },
    [id, setEdges]
  );

  return (
    <>
      {/* Invisible wider path for easier interaction */}
      <path
        d={pathData}
        fill="none"
        stroke="transparent"
        strokeWidth={20}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => !isDragging && setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        onContextMenu={handleContextMenu}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      />

      {/* Visible edge path */}
      <path
        d={pathData}
        fill="none"
        stroke={isDragging || isHovered ? "#0066cc" : "#333333"}
        strokeWidth={isDragging || isHovered ? 2.5 : 1.5}
        strokeDasharray="6 3"
        markerEnd={markerEnd}
        style={{ pointerEvents: "none", transition: "stroke 0.2s ease, stroke-width 0.2s ease" }}
      />
    </>
  );
}

export default memo(EditableEdge);
