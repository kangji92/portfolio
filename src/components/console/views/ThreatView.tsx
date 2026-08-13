"use client";

import { useState } from "react";
import { threatEvents, threatRiskLevels } from "@/data/console-mock";

const riskTone: Record<string, string> = {
  높음: "bg-rose-400/10 text-rose-400",
  중간: "bg-amber-400/10 text-amber-400",
  낮음: "bg-emerald-400/10 text-emerald-400",
};

const statusTone: Record<string, string> = {
  "대응 완료": "bg-emerald-400/10 text-emerald-400",
  "대응 중": "bg-amber-400/10 text-amber-400",
  미대응: "bg-rose-400/10 text-rose-400",
};

export default function ThreatView() {
  const [risk, setRisk] = useState("전체");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(threatEvents[0].id);

  const filtered = threatEvents.filter((t) => {
    if (risk !== "전체" && t.risk !== risk) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return t.user.toLowerCase().includes(q) || t.type.toLowerCase().includes(q);
  });

  const selected =
    filtered.find((t) => t.id === selectedId) ?? filtered[0] ?? null;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* 목록 */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
            className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 focus:border-emerald-400/50 focus:outline-none"
          >
            {threatRiskLevels.map((r) => (
              <option key={r} value={r} className="bg-slate-900">
                위험도: {r}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="사용자·유형 검색"
            className="w-44 max-w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
          />
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10">
          <ul className="divide-y divide-white/5">
            {filtered.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(t.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                    selected?.id === t.id ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="w-10 shrink-0 text-xs tabular-nums text-slate-500">
                    {t.time}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-slate-100">{t.type}</p>
                    <p className="truncate font-mono text-xs text-slate-500">{t.user}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${riskTone[t.risk]}`}>
                    {t.risk}
                  </span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-8 text-center text-sm text-slate-500">
                해당 조건의 위협 이벤트가 없습니다.
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* 상세 */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
        {selected ? (
          <div>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-mono text-xs text-slate-500">{selected.id}</p>
                <h4 className="mt-0.5 text-base font-semibold text-slate-100">
                  {selected.type}
                </h4>
              </div>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${statusTone[selected.status]}`}
              >
                {selected.status}
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-300">{selected.detail.description}</p>

            <div className="mt-4 flex items-center gap-4 border-y border-white/10 py-3">
              <div>
                <p className="text-xs text-slate-500">위험 점수</p>
                <p className="text-2xl font-semibold tabular-nums text-rose-400">
                  {selected.detail.score}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">대상 사용자</p>
                <p className="font-mono text-sm text-slate-200">{selected.user}</p>
              </div>
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
              대응 타임라인
            </p>
            <ol className="mt-2 space-y-2">
              {selected.detail.timeline.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-10 shrink-0 text-xs tabular-nums text-slate-500">
                    {step.time}
                  </span>
                  <span className="text-slate-300">{step.label}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <p className="py-12 text-center text-sm text-slate-500">
            좌측에서 위협 이벤트를 선택하세요.
          </p>
        )}
      </div>
    </div>
  );
}
