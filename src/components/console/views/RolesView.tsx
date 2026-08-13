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
import { roleNodes, roleEdges, type RoleNodeSeed } from "@/data/console-mock";

// 역할 관리 트리의 커스텀 노드 (group / role / service)
function RoleFlowNode({ data, selected }: NodeProps) {
  const d = data as unknown as RoleNodeSeed;
  const ring = selected ? "ring-2 ring-emerald-400" : "";

  if (d.variant === "group") {
    return (
      <div
        className={`w-56 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 px-4 py-3 text-white shadow-lg ${ring}`}
      >
        <Handle type="source" position={Position.Right} className="!bg-white/70" />
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-sm">
            ▤
          </span>
          <div>
            <p className="text-sm font-semibold">{d.title}</p>
            {d.subtitle && <p className="text-xs text-white/70">{d.subtitle}</p>}
          </div>
        </div>
      </div>
    );
  }

  if (d.variant === "role") {
    return (
      <div className={`w-56 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 ${ring}`}>
        <Handle type="target" position={Position.Left} className="!bg-slate-500" />
        <Handle type="source" position={Position.Right} className="!bg-slate-500" />
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-semibold text-slate-200">
            {d.badge}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-100">{d.title}</p>
            {d.subtitle && <p className="truncate text-xs text-slate-400">{d.subtitle}</p>}
            {d.meta && <p className="mt-0.5 text-xs text-slate-500">{d.meta}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-64 rounded-lg border border-white/10 bg-slate-900 px-3 py-2.5 ${ring}`}>
      <Handle type="target" position={Position.Left} className="!bg-slate-500" />
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-400/15 text-xs font-semibold text-emerald-400">
          SP
        </span>
        <div className="min-w-0">
          <p className="truncate font-mono text-xs font-semibold text-slate-100">{d.title}</p>
          <p className="text-xs text-slate-500">{d.meta}</p>
        </div>
      </div>
    </div>
  );
}

const nodeTypes = { role: RoleFlowNode };

const badgeClass: Record<RoleNodeSeed["variant"], string> = {
  group: "bg-indigo-400/20 text-indigo-300",
  role: "bg-white/5 text-slate-200",
  service: "bg-emerald-400/15 text-emerald-400",
};

export default function RolesView() {
  const [view, setView] = useState<"canvas" | "tree">("canvas");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const selected = roleNodes.find((n) => n.id === selectedId) ?? null;

  const nodeMap = useMemo(
    () => Object.fromEntries(roleNodes.map((n) => [n.id, n])) as Record<string, RoleNodeSeed>,
    [],
  );
  const childrenMap = useMemo(() => {
    const m: Record<string, string[]> = {};
    roleEdges.forEach((e) => {
      (m[e.source] ??= []).push(e.target);
    });
    return m;
  }, []);
  const roots = useMemo(
    () => roleNodes.filter((n) => !roleEdges.some((e) => e.target === n.id)),
    [],
  );

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = roleNodes.map((n) => ({
      id: n.id,
      type: "role",
      position: n.position,
      data: n as unknown as Record<string, unknown>,
    }));
    const edges: Edge[] = roleEdges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      type: "smoothstep",
      style: { stroke: "#334155" },
    }));
    return { nodes, edges };
  }, []);

  const q = query.trim().toLowerCase();
  const matches = (n: RoleNodeSeed) =>
    !q ||
    n.title.toLowerCase().includes(q) ||
    (n.subtitle?.toLowerCase().includes(q) ?? false) ||
    (n.meta?.toLowerCase().includes(q) ?? false);

  const toggleCollapse = (id: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  function TreeRow(node: RoleNodeSeed, depth: number): React.ReactNode {
    const kids = (childrenMap[node.id] ?? []).map((id) => nodeMap[id]);
    const hasKids = kids.length > 0;
    const isCollapsed = collapsed.has(node.id);
    return (
      <div key={node.id}>
        <div
          onClick={() => setSelectedId(node.id)}
          style={{ paddingLeft: 12 + depth * 18 }}
          className={`flex cursor-pointer items-center gap-2 py-2 pr-3 text-sm transition-colors ${
            selectedId === node.id ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
          }`}
        >
          {hasKids ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                toggleCollapse(node.id);
              }}
              className="w-4 shrink-0 text-center text-slate-500"
            >
              {isCollapsed ? "▸" : "▾"}
            </span>
          ) : (
            <span className="w-4 shrink-0" />
          )}
          <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-semibold ${badgeClass[node.variant]}`}
          >
            {node.variant === "service" ? "SP" : node.badge}
          </span>
          <span className="truncate text-slate-100">{node.title}</span>
          {node.meta && (
            <span className="ml-auto shrink-0 text-xs text-slate-500">{node.meta}</span>
          )}
        </div>
        {hasKids && !isCollapsed && kids.map((k) => TreeRow(k, depth + 1))}
      </div>
    );
  }

  return (
    <div>
      {/* 툴바 */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="inline-flex rounded-lg border border-white/10 p-0.5">
          {(["canvas", "tree"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                view === v ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {v === "canvas" ? "캔버스" : "트리"}
            </button>
          ))}
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="역할 검색"
            className="w-40 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
          />
          <span className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-emerald-400">
            서비스
          </span>
          <span className="rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 px-3 py-1.5 text-sm font-medium text-white">
            + 역할 생성
          </span>
        </div>
      </div>

      <div className="flex h-[480px] overflow-hidden rounded-lg border border-white/10">
        <div className="min-w-0 flex-1">
          {view === "canvas" ? (
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.15 }}
              colorMode="dark"
              nodesDraggable={false}
              nodesConnectable={false}
              zoomOnScroll={false}
              preventScrolling={false}
              onNodeClick={(_, n) => setSelectedId(n.id)}
              onPaneClick={() => setSelectedId(null)}
            >
              <Background bgColor="#0b1120" color="#1e293b" gap={20} />
              <Controls showInteractive={false} />
            </ReactFlow>
          ) : (
            <div className="h-full overflow-y-auto py-1">
              {q
                ? roleNodes
                    .filter(matches)
                    .map((n) => TreeRow({ ...n }, 0))
                : roots.map((r) => TreeRow(r, 0))}
            </div>
          )}
        </div>

        {selected && (
          <aside className="w-72 shrink-0 overflow-y-auto border-l border-white/10 bg-slate-900/80 p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-100">{selected.title}</h4>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="text-xs text-slate-500 hover:text-slate-300"
                aria-label="상세 패널 닫기"
              >
                ✕
              </button>
            </div>
            {selected.subtitle && (
              <p className="mt-1 text-xs text-slate-400">{selected.subtitle}</p>
            )}
            <p className="mt-3 text-sm text-slate-300">{selected.detail.description}</p>
            <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
              {selected.detail.fields.map((f) => (
                <div key={f.label} className="flex justify-between gap-3">
                  <dt className="shrink-0 text-slate-500">{f.label}</dt>
                  <dd className="break-all text-right text-slate-200">{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        )}
      </div>
    </div>
  );
}
