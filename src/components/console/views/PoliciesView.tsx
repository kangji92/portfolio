"use client";

import { useState } from "react";
import { policies } from "@/data/console-mock";

export default function PoliciesView() {
  const [query, setQuery] = useState("");

  const filtered = policies.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.resource.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="정책 이름·리소스 검색"
          className="w-64 max-w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
        />
        <span className="shrink-0 text-xs text-slate-500">
          {filtered.length}개 정책
        </span>
      </div>

      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-slate-500">
              <th className="px-4 py-2.5 font-medium">ID</th>
              <th className="px-4 py-2.5 font-medium">정책명</th>
              <th className="px-4 py-2.5 font-medium">리소스</th>
              <th className="px-4 py-2.5 font-medium">조건</th>
              <th className="px-4 py-2.5 font-medium">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map((p) => (
              <tr key={p.id} className="text-slate-300">
                <td className="px-4 py-2.5 font-mono text-xs text-slate-500">
                  {p.id}
                </td>
                <td className="px-4 py-2.5 text-slate-100">{p.name}</td>
                <td className="px-4 py-2.5 font-mono text-xs text-slate-400">
                  {p.resource}
                </td>
                <td className="px-4 py-2.5 text-slate-400">{p.condition}</td>
                <td className="px-4 py-2.5">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      p.status === "활성"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-slate-500/10 text-slate-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-sm text-slate-500">
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
