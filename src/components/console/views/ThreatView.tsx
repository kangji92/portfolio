"use client";

import { useState } from "react";
import { threatEvents, threatRiskLevels, threatSummary } from "@/data/console-mock";

const riskTone: Record<string, string> = {
  높음: "bg-rose-400/10 text-rose-400",
  중간: "bg-amber-400/10 text-amber-400",
  낮음: "bg-emerald-400/10 text-emerald-400",
};
const riskText: Record<string, string> = {
  높음: "text-rose-400",
  중간: "text-amber-400",
  낮음: "text-emerald-400",
};
const statusTone: Record<string, string> = {
  "대응 완료": "bg-emerald-400/10 text-emerald-400",
  "대응 중": "bg-amber-400/10 text-amber-400",
  미대응: "bg-rose-400/10 text-rose-400",
};
const statusDot: Record<string, string> = {
  "대응 완료": "bg-emerald-400",
  "대응 중": "bg-amber-400",
  미대응: "bg-rose-400",
};
const kpiTone: Record<string, string> = {
  up: "text-emerald-400",
  warn: "text-amber-400",
  down: "text-rose-400",
};

function Field({ label, mono, children }: { label: string; mono?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className={`mt-0.5 text-sm text-slate-200 ${mono ? "font-mono" : ""}`}>
        {children}
      </p>
    </div>
  );
}

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
    <div className="space-y-4">
      {/* 상단 요약 */}
      <div className="grid grid-cols-4 gap-3">
        {threatSummary.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
          >
            <p className="text-[11px] text-slate-400">{s.label}</p>
            <p
              className={`mt-1 text-xl font-semibold tabular-nums ${
                kpiTone[s.tone ?? ""] ?? "text-slate-100"
              }`}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 목록 */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-md border border-white/10 p-0.5">
              {threatRiskLevels.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRisk(r)}
                  className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                    risk === r
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="사용자·유형 검색"
              className="w-40 max-w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
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
                      selected?.id === t.id
                        ? "bg-white/[0.06]"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="w-10 shrink-0 text-xs tabular-nums text-slate-500">
                      {t.time}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 truncate text-slate-100">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[t.status]}`}
                        />
                        {t.type}
                      </p>
                      <p className="truncate font-mono text-xs text-slate-500">
                        {t.user} · {t.detail.resource}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${riskTone[t.risk]}`}
                    >
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
                  <p className="font-mono text-xs text-slate-500">
                    {selected.id}
                  </p>
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

              <p className="mt-3 text-sm text-slate-300">
                {selected.detail.description}
              </p>

              {/* 메타 */}
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-white/10 py-4">
                <div>
                  <p className="text-xs text-slate-500">위험 점수</p>
                  <p
                    className={`text-2xl font-semibold tabular-nums ${riskText[selected.risk]}`}
                  >
                    {selected.detail.score}
                  </p>
                </div>
                <Field label="대상 사용자" mono>
                  {selected.user}
                </Field>
                <Field label="출발지 IP" mono>
                  {selected.detail.sourceIp}
                </Field>
                <Field label="위치">{selected.detail.location}</Field>
                <Field label="대상 리소스" mono>
                  {selected.detail.resource}
                </Field>
                <Field label="탐지 규칙">{selected.detail.rule}</Field>
              </div>

              {/* 권장 대응 */}
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                권장 대응
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selected.detail.recommended.map((a) => (
                  <span
                    key={a}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200"
                  >
                    {a}
                  </span>
                ))}
              </div>

              {/* 타임라인 */}
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                대응 타임라인
              </p>
              <ol className="mt-2">
                {selected.detail.timeline.map((step, i, arr) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      {i < arr.length - 1 && (
                        <span className="w-px flex-1 bg-white/10" />
                      )}
                    </div>
                    <div className="pb-3">
                      <span className="mr-2 text-xs tabular-nums text-slate-500">
                        {step.time}
                      </span>
                      <span className="text-sm text-slate-300">
                        {step.label}
                      </span>
                    </div>
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
    </div>
  );
}
