"use client";

import { useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Position,
  Handle,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { workflowNodes, workflowEdges, type FlowNodeSeed } from "@/data/console-mock";

const kindMeta: Record<
  FlowNodeSeed["kind"],
  { icon: string; border: string; chip: string }
> = {
  start: { icon: "▶", border: "border-indigo-400/40", chip: "bg-indigo-400/15 text-indigo-300" },
  step: { icon: "●", border: "border-slate-600", chip: "bg-slate-500/20 text-slate-300" },
  decision: { icon: "◆", border: "border-amber-400/40", chip: "bg-amber-400/15 text-amber-300" },
  allow: { icon: "✓", border: "border-emerald-400/40", chip: "bg-emerald-400/15 text-emerald-300" },
  deny: { icon: "✕", border: "border-rose-400/40", chip: "bg-rose-400/15 text-rose-300" },
};

function WorkflowNode({ data, selected }: NodeProps) {
  const d = data as unknown as FlowNodeSeed;
  const m = kindMeta[d.kind];
  const hasTarget = d.kind !== "start";
  const hasSource = d.kind !== "allow" && d.kind !== "deny";

  return (
    <div
      className={`w-44 rounded-xl border bg-slate-900 px-3 py-2.5 shadow-md ${m.border} ${
        selected ? "ring-2 ring-indigo-400" : ""
      }`}
    >
      {hasTarget && <Handle type="target" position={Position.Left} className="!bg-slate-500" />}
      {hasSource && <Handle type="source" position={Position.Right} className="!bg-slate-500" />}
      <div className="flex items-center gap-2.5">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${m.chip}`}
        >
          {m.icon}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-100">{d.label}</p>
          <p className="truncate text-[11px] text-slate-500">{d.nodeType}</p>
        </div>
      </div>
    </div>
  );
}

const nodeTypes = { wf: WorkflowNode };

export default function WorkflowView() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tab, setTab] = useState<"input" | "task" | "output">("task");
  const selected = workflowNodes.find((n) => n.id === selectedId) ?? null;

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = workflowNodes.map((n) => ({
      id: n.id,
      type: "wf",
      position: n.position,
      data: n as unknown as Record<string, unknown>,
    }));
    const toneColor: Record<string, string> = {
      high: "#f87171",
      mid: "#fbbf24",
      low: "#34d399",
    };
    const edges: Edge[] = workflowEdges.map((e) => {
      const c = e.tone ? toneColor[e.tone] : undefined;
      return {
        id: e.id,
        source: e.source,
        target: e.target,
        label: e.label,
        type: "smoothstep",
        animated: true,
        style: { stroke: "#475569" },
        labelStyle: { fill: c ?? "#94a3b8", fontSize: 11, fontWeight: c ? 600 : 400 },
        labelShowBg: true,
        labelBgStyle: { fill: "#0f172a", stroke: c ?? "#1e293b" },
        labelBgPadding: [6, 3] as [number, number],
        labelBgBorderRadius: 4,
      };
    });
    return { nodes, edges };
  }, []);

  return (
    <div>
      <p className="mb-3 text-sm text-slate-400">
        위협 대응 프로세스를 노드 기반으로 정의하는 워크플로우 에디터 (React Flow).{" "}
        <span className="text-slate-500">노드를 클릭하면 설정 패널이 열립니다.</span>
      </p>
      <div className="flex h-[440px] overflow-hidden rounded-lg border border-white/10">
        <div className="min-w-0 flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            colorMode="dark"
            nodesDraggable={false}
            nodesConnectable={false}
            zoomOnScroll={false}
            preventScrolling={false}
            onNodeClick={(_, n) => {
              setSelectedId(n.id);
              setTab("task");
            }}
            onPaneClick={() => setSelectedId(null)}
          >
            <Background bgColor="#0b1120" color="#1e293b" gap={20} />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>

        {selected && (
          <aside className="w-72 shrink-0 overflow-y-auto border-l border-white/10 bg-slate-900/80 p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span
                  className={`rounded px-2 py-0.5 text-xs ${kindMeta[selected.kind].chip}`}
                >
                  {selected.nodeType}
                </span>
                <h4 className="mt-1.5 text-sm font-semibold text-slate-100">
                  {selected.label}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="text-xs text-slate-500 hover:text-slate-300"
                aria-label="설정 패널 닫기"
              >
                ✕
              </button>
            </div>

            {/* Input / Task / Output 탭 */}
            <div className="mt-4 flex rounded-md border border-white/10 p-0.5 text-sm">
              {(["input", "task", "output"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`flex-1 rounded px-2 py-1 font-medium capitalize transition-colors ${
                    tab === t ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {tab === "input" && "이전 노드에서 전달되는 입력 파라미터"}
              {tab === "task" && "이 노드의 태스크 설정 (TaskConfig)"}
              {tab === "output" && "다음 노드로 전달되는 출력 변수"}
            </p>

            <div className="mt-2 space-y-3">
              {selected.settings && selected.settings[tab].length > 0 ? (
                selected.settings[tab].map((f) => (
                  <div key={f.label}>
                    <label className="text-xs text-slate-500">{f.label}</label>
                    <div
                      className={`mt-1 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 ${
                        tab === "task" ? "" : "font-mono"
                      }`}
                    >
                      {f.value}
                    </div>
                  </div>
                ))
              ) : (
                <p className="rounded-md border border-dashed border-white/10 px-3 py-4 text-center text-xs text-slate-500">
                  전달되는 항목이 없습니다.
                </p>
              )}
            </div>

            {tab === "task" && (
              <div className="mt-5 flex gap-2">
                <span className="flex-1 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 px-3 py-1.5 text-center text-sm font-medium text-white">
                  저장
                </span>
                <span className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-slate-400">
                  취소
                </span>
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
