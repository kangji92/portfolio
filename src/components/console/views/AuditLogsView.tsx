"use client";

import { useState } from "react";
import { auditLogs, auditActions, type AuditLog } from "@/data/console-mock";

function inCategory(log: AuditLog, cat: string): boolean {
  switch (cat) {
    case "로그인":
      return log.action.includes("로그인");
    case "정책":
      return log.action.includes("정책");
    case "역할":
      return log.action.includes("역할");
    case "API":
      return log.action.includes("API");
    case "시스템":
      return log.actor === "system" || log.action.includes("번들");
    default:
      return true;
  }
}

export default function AuditLogsView() {
  const [category, setCategory] = useState("전체");
  const [query, setQuery] = useState("");

  const filtered = auditLogs.filter((log) => {
    if (!inCategory(log, category)) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      log.actor.toLowerCase().includes(q) ||
      log.target.toLowerCase().includes(q) ||
      log.action.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 focus:border-emerald-400/50 focus:outline-none"
        >
          {auditActions.map((a) => (
            <option key={a} value={a} className="bg-slate-900">
              {a}
            </option>
          ))}
        </select>
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-400">
          최근 24시간
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="작업자·대상 검색"
          className="w-52 max-w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
        />
        <span className="ml-auto text-xs text-slate-500">총 {filtered.length}건</span>
      </div>

      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-slate-500">
              <th className="px-4 py-2.5 font-medium">시간</th>
              <th className="px-4 py-2.5 font-medium">작업자</th>
              <th className="px-4 py-2.5 font-medium">액션</th>
              <th className="px-4 py-2.5 font-medium">대상</th>
              <th className="px-4 py-2.5 font-medium">결과</th>
              <th className="px-4 py-2.5 font-medium">IP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map((log, i) => (
              <tr key={i} className="text-slate-300">
                <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-slate-500">
                  {log.time}
                </td>
                <td className="px-4 py-2.5 font-mono text-xs text-slate-400">
                  {log.actor}
                </td>
                <td className="px-4 py-2.5 text-slate-100">{log.action}</td>
                <td className="px-4 py-2.5 font-mono text-xs text-slate-400">
                  {log.target}
                </td>
                <td className="px-4 py-2.5">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      log.result === "성공"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-rose-400/10 text-rose-400"
                    }`}
                  >
                    {log.result}
                  </span>
                </td>
                <td className="px-4 py-2.5 font-mono text-xs text-slate-500">{log.ip}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-500">
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>1 / 1 페이지</span>
        <div className="flex gap-1">
          <span className="rounded border border-white/10 px-2 py-1 text-slate-600">이전</span>
          <span className="rounded border border-white/10 px-2 py-1 text-slate-600">다음</span>
        </div>
      </div>
    </div>
  );
}
