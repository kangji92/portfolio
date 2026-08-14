"use client";

import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Handle,
  Position,
  MarkerType,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

type Variant = "muted" | "agent" | "pass" | "doc";

interface StepData {
  step?: number;
  title: string;
  subtitle?: string;
  chips?: string[];
  variant: Variant;
  sideHandles?: boolean;
  [key: string]: unknown;
}

const H = { opacity: 0 } as const;

function StepNode({ data }: NodeProps) {
  const d = data as StepData;
  const { variant } = d;

  const shell =
    variant === "agent"
      ? "border-indigo-500/70 bg-indigo-50 ring-1 ring-indigo-500/30 dark:bg-indigo-500/10"
      : variant === "pass"
        ? "border-emerald-500/70 bg-emerald-50 ring-1 ring-emerald-500/25 dark:bg-emerald-500/10"
        : variant === "doc"
          ? "border-dashed border-zinc-400/60 bg-zinc-50/60 dark:border-zinc-500/50 dark:bg-white/[.03]"
          : "border-black/10 bg-white dark:border-white/15 dark:bg-zinc-900";

  const badge =
    variant === "agent"
      ? "bg-indigo-500 text-white"
      : variant === "pass"
        ? "bg-emerald-500 text-white"
        : "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100";

  return (
    <div
      className={`w-64 rounded-xl border px-4 py-3 shadow-sm transition-shadow ${shell}`}
    >
      <Handle type="target" position={Position.Top} id="t" style={H} />
      <Handle type="source" position={Position.Bottom} id="b" style={H} />
      {d.sideHandles && (
        <>
          <Handle type="source" position={Position.Left} id="ls" style={H} />
          <Handle type="target" position={Position.Left} id="lt" style={H} />
        </>
      )}

      {d.variant === "doc" ? (
        <div className="text-center">
          <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-400">
            reads · single source of truth
          </div>
          <div className="mt-1 font-mono text-[13px] text-zinc-700 dark:text-zinc-200">
            standards/*.md
          </div>
          <div className="font-mono text-[13px] text-zinc-700 dark:text-zinc-200">
            AGENTS.md
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          {d.step != null && (
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${badge}`}
            >
              {d.step}
            </span>
          )}
          <div className="min-w-0">
            <div
              className={`text-sm font-semibold ${
                d.variant === "agent"
                  ? "text-indigo-700 dark:text-indigo-300"
                  : d.variant === "pass"
                    ? "text-emerald-700 dark:text-emerald-300"
                    : "text-zinc-900 dark:text-zinc-100"
              }`}
            >
              {d.title}
            </div>
            {d.subtitle && (
              <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                {d.subtitle}
              </div>
            )}
            {d.chips && (
              <div className="mt-1.5 flex flex-wrap gap-1">
                {d.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded border border-black/[.08] bg-black/[.03] px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-white/[.12] dark:bg-white/[.05] dark:text-zinc-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const nodeTypes = { step: StepNode };

const X = 120;
const nodes: Node[] = [
  { id: "dev", type: "step", position: { x: X, y: 0 }, data: { step: 1, title: "Developer", subtitle: "요구사항 정의", variant: "muted" } },
  { id: "req", type: "step", position: { x: X, y: 108 }, data: { step: 2, title: "Requirement", subtitle: "구현할 컴포넌트 명세", variant: "muted" } },
  { id: "agent", type: "step", position: { x: X, y: 216 }, data: { step: 3, title: "AI Agent", subtitle: "Claude Code · Codex", variant: "agent", sideHandles: true } },
  { id: "std", type: "step", position: { x: X, y: 330 }, data: { title: "standards", variant: "doc" } },
  { id: "comp", type: "step", position: { x: X, y: 456 }, data: { step: 4, title: "Component + Test", subtitle: "표준을 따르는 코드 생성", variant: "muted" } },
  { id: "gate", type: "step", position: { x: X, y: 564 }, data: { step: 5, title: "Quality Gate", chips: ["Vitest", "ESLint", "SonarQube"], variant: "muted", sideHandles: true } },
  { id: "pr", type: "step", position: { x: X, y: 690 }, data: { step: 6, title: "Pull Request", subtitle: "리뷰 가능한 상태로 제출", variant: "pass" } },
];

const flow = (source: string, target: string, label?: string): Edge => ({
  id: `${source}-${target}`,
  source,
  target,
  sourceHandle: "b",
  targetHandle: "t",
  label,
  labelShowBg: true,
  labelStyle: { fontSize: 11, fill: "#3f3f46", fontWeight: 700 },
  labelBgStyle: { fill: "#f4f4f5", stroke: "#e4e4e7" },
  labelBgPadding: [8, 4],
  labelBgBorderRadius: 8,
  style: { stroke: "#a1a1aa", strokeWidth: 1.5 },
  markerEnd: { type: MarkerType.ArrowClosed, color: "#a1a1aa", width: 16, height: 16 },
});

const edges: Edge[] = [
  flow("dev", "req"),
  flow("req", "agent"),
  flow("agent", "std", "reads"),
  flow("std", "comp"),
  flow("comp", "gate"),
  {
    id: "gate-pr",
    source: "gate",
    target: "pr",
    sourceHandle: "b",
    targetHandle: "t",
    label: "Pass ✓",
    animated: true,
    labelShowBg: true,
    labelStyle: { fontSize: 11, fill: "#15803d", fontWeight: 800 },
    labelBgStyle: { fill: "#dcfce7", stroke: "#86efac" },
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 8,
    style: { stroke: "#22c55e", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e", width: 18, height: 18 },
  },
  {
    id: "gate-agent",
    source: "gate",
    target: "agent",
    sourceHandle: "ls",
    targetHandle: "lt",
    type: "smoothstep",
    label: "✗ Fail · 재수정",
    animated: true,
    labelShowBg: true,
    labelStyle: { fontSize: 11, fill: "#b91c1c", fontWeight: 800 },
    labelBgStyle: { fill: "#fee2e2", stroke: "#fca5a5" },
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 8,
    style: { stroke: "#ef4444", strokeWidth: 1.8, strokeDasharray: "6 4" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#ef4444", width: 16, height: 16 },
  },
];

export default function HarnessPipeline() {
  return (
    <div className="h-[780px] w-full sm:h-[840px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.08, maxZoom: 1.25, minZoom: 0.5 }}
        minZoom={0.5}
        colorMode="system"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        panOnScroll={false}
        preventScrolling={false}
      >
        <Background variant={BackgroundVariant.Dots} gap={18} size={1} className="opacity-60" />
      </ReactFlow>
    </div>
  );
}
