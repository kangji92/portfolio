"use client";

import { useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Position,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { selectGraph } from "@/lib/arch";
import type { Project } from "@/types";

type Architecture = NonNullable<Project["architecture"]>;

const rootStyle = {
  background: "#18181b",
  color: "#fafafa",
  border: "1px solid #18181b",
  borderRadius: 12,
  padding: 8,
  fontWeight: 600,
  fontSize: 13,
  width: 220,
} as const;

const leafStyle = {
  background: "#f4f4f5",
  color: "#27272a",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 12,
  padding: 8,
  fontSize: 12,
  width: 160,
} as const;

const MODES = ["before", "after"] as const;

export default function ArchitectureDiagram({
  architecture,
}: {
  architecture: Architecture;
}) {
  const [mode, setMode] = useState<(typeof MODES)[number]>("before");

  const { nodes, edges } = useMemo(() => {
    const graph = selectGraph(architecture, mode);
    const nodes: Node[] = graph.nodes.map((n) => ({
      id: n.id,
      position: n.position,
      data: { label: n.label },
      style: n.variant === "root" ? rootStyle : leafStyle,
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    }));
    const edges: Edge[] = graph.edges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      animated: true,
    }));
    return { nodes, edges };
  }, [architecture, mode]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="아키텍처 전환 단계"
        className="mb-3 inline-flex rounded-lg border border-black/[.08] p-0.5 dark:border-white/[.14]"
      >
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
              mode === m
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="h-[340px] w-full overflow-hidden rounded-xl border border-black/[.08] dark:border-white/[.12]">
        <ReactFlow
          key={mode}
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          colorMode="system"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          preventScrolling={false}
        >
          <Background />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}
