"use client";

import { useState } from "react";
import { accounts, accountStatuses } from "@/data/console-mock";
import { AreaChart } from "@/components/console/charts";

const statusTone: Record<string, string> = {
  활성: "bg-emerald-400/10 text-emerald-400",
  잠금: "bg-rose-400/10 text-rose-400",
  비활성: "bg-slate-400/10 text-slate-400",
};
const statusDot: Record<string, string> = {
  활성: "bg-emerald-400",
  잠금: "bg-rose-400",
  비활성: "bg-slate-500",
};

function Field({
  label,
  mono,
  children,
}: {
  label: string;
  mono?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className={`mt-0.5 text-sm text-slate-200 ${mono ? "font-mono" : ""}`}>
        {children}
      </p>
    </div>
  );
}

export default function AccountsView() {
  const [status, setStatus] = useState("전체");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(accounts[0].id);
  const [tab, setTab] = useState<"account" | "stats">("account");

  const filtered = accounts.filter((a) => {
    if (status !== "전체" && a.status !== status) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      a.name.toLowerCase().includes(q) ||
      a.id.toLowerCase().includes(q) ||
      a.email.toLowerCase().includes(q)
    );
  });

  const selected =
    filtered.find((a) => a.id === selectedId) ?? filtered[0] ?? null;

  const st = selected?.detail.stats;
  const authTotal = st ? st.authSuccess + st.authFail : 0;
  const successRate = st && authTotal ? (st.authSuccess / authTotal) * 100 : 0;
  const maxRes = st ? Math.max(...st.topResources.map((r) => r.count), 1) : 1;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* 목록 */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-md border border-white/10 p-0.5">
            {accountStatuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                  status === s
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="이름·ID·이메일 검색"
            className="w-44 max-w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
          />
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10">
          <ul className="divide-y divide-white/5">
            {filtered.map((a) => (
              <li key={a.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(a.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                    selected?.id === a.id
                      ? "bg-white/[0.06]"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-xs font-semibold text-slate-300">
                    {a.name.slice(0, 1)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 truncate text-slate-100">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[a.status]}`}
                      />
                      {a.name}
                      <span className="text-xs font-normal text-slate-500">
                        · {a.role}
                      </span>
                    </p>
                    <p className="truncate font-mono text-xs text-slate-500">
                      {a.id} · {a.dept}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${statusTone[a.status]}`}
                  >
                    {a.status}
                  </span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-8 text-center text-sm text-slate-500">
                해당 조건의 계정이 없습니다.
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* 상세 */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
        {selected && st ? (
          <div>
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-400/15 text-sm font-semibold text-indigo-300">
                  {selected.name.slice(0, 1)}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-slate-100">
                    {selected.name}
                    <span className="ml-2 font-mono text-xs font-normal text-slate-500">
                      {selected.id}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">{selected.email}</p>
                </div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${statusTone[selected.status]}`}
              >
                {selected.status}
              </span>
            </div>

            {/* 탭 */}
            <div className="mt-4 flex rounded-md border border-white/10 p-0.5 text-sm">
              {(
                [
                  ["account", "계정 관리"],
                  ["stats", "사용자 통계"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className={`flex-1 rounded px-2 py-1 font-medium transition-colors ${
                    tab === key
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {tab === "account" ? (
              <div>
                {/* 메타 */}
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-b border-white/10 pb-4">
                  <Field label="부서">{selected.dept}</Field>
                  <Field label="역할">{selected.role}</Field>
                  <Field label="최근 로그인" mono>
                    {selected.lastLogin}
                  </Field>
                  <Field label="마지막 IP" mono>
                    {selected.detail.lastIp}
                  </Field>
                  <Field label="MFA">
                    {selected.mfa ? (
                      <span className="text-emerald-400">
                        설정 · {selected.detail.mfaMethods.join(" / ")}
                      </span>
                    ) : (
                      <span className="text-amber-400">미설정</span>
                    )}
                  </Field>
                  <Field label="활성 세션">
                    {selected.detail.activeSessions}개
                  </Field>
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                  할당 역할
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.detail.roles.map((r) => (
                    <span
                      key={r}
                      className="rounded-md bg-indigo-400/10 px-2.5 py-1 text-xs text-indigo-300"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                  최근 활동
                </p>
                <ol className="mt-2 space-y-1.5">
                  {selected.detail.recent.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-12 shrink-0 text-xs tabular-nums text-slate-500">
                        {step.time}
                      </span>
                      <span className="text-slate-300">{step.label}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span
                    className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                      selected.status === "잠금"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-rose-500/15 text-rose-300"
                    }`}
                  >
                    {selected.status === "잠금" ? "잠금 해제" : "계정 잠금"}
                  </span>
                  <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-slate-300">
                    세션 강제 종료
                  </span>
                  <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-slate-300">
                    역할 편집
                  </span>
                  <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-slate-300">
                    MFA 초기화
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {/* 통계 요약 */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-[11px] text-slate-500">총 로그인</p>
                    <p className="mt-1 text-lg font-semibold tabular-nums text-slate-100">
                      {st.totalLogins.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-[11px] text-slate-500">최근 30일 접근</p>
                    <p className="mt-1 text-lg font-semibold tabular-nums text-slate-100">
                      {st.last30dAccess.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-[11px] text-slate-500">인증 성공률</p>
                    <p className="mt-1 text-lg font-semibold tabular-nums text-emerald-400">
                      {successRate.toFixed(1)}%
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  인증 성공 {st.authSuccess.toLocaleString()} · 실패{" "}
                  <span className="text-rose-400">{st.authFail}</span>
                </p>

                {/* 자주 접근한 리소스 */}
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                  자주 접근한 리소스
                </p>
                <div className="mt-2 space-y-2">
                  {st.topResources.map((r) => (
                    <div key={r.name}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="font-mono text-slate-300">
                          {r.name}
                        </span>
                        <span className="tabular-nums text-slate-400">
                          {r.count}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5">
                        <div
                          className="h-1.5 rounded-full bg-indigo-400/80"
                          style={{ width: `${(r.count / maxRes) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 로그인 추이 */}
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                  로그인 추이 · 최근 7일
                </p>
                <div className="mt-2 h-16">
                  <AreaChart
                    data={st.loginTrend}
                    gradientId={`acc-${selected.id}`}
                    className="h-16"
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="py-12 text-center text-sm text-slate-500">
            좌측에서 계정을 선택하세요.
          </p>
        )}
      </div>
    </div>
  );
}
