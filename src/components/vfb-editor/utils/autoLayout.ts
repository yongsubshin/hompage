// Auto Layout utility using dagre for VFB diagram

import dagre from "dagre";
import type { Node, Edge } from "@xyflow/react";
import type { ExecutableData } from "../types";

export function applyAutoLayout(nodes: Node[], edges: Edge[]): Node[] {
  if (nodes.length === 0) return nodes;

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: "LR",
    nodesep: 60,
    ranksep: 150,
    marginx: 50,
    marginy: 50,
  });

  // Add nodes to dagre graph
  for (const node of nodes) {
    const data = node.data as ExecutableData;
    g.setNode(node.id, {
      width: data.width || 140,
      height: data.height || 80,
    });
  }

  // Add edges to dagre graph
  for (const edge of edges) {
    g.setEdge(edge.source, edge.target);
  }

  // Run layout
  dagre.layout(g);

  // Apply positions from dagre
  return nodes.map((node) => {
    const dagreNode = g.node(node.id);
    const data = node.data as ExecutableData;
    const nodeWidth = data.width || 140;
    const nodeHeight = data.height || 80;

    return {
      ...node,
      position: {
        // dagre returns center position, convert to top-left
        x: dagreNode.x - nodeWidth / 2,
        y: dagreNode.y - nodeHeight / 2,
      },
    };
  });
}
