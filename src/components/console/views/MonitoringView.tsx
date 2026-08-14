import {
  authTrend,
  monitorKpis,
  decisionBreakdown,
  topResources,
  denyReasons,
  accessLogs,
} from "@/data/console-mock";
import { AreaChart, BarChart } from "@/components/console/charts";

const valueTone: Record<string, string> = {
  down: "text-rose-300",
  warn: "text-amber-300",
  up: "text-slate-100",
};
const deltaTone: Record<string, string> = {
  up: "text-emerald-400",
  down: "text-rose-400",
  warn: "text-amber-400",
};
const segBg: Record<string, string> = {
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
};
const decisionBadge: Record<string, string> = {
  허용: "bg-emerald-400/10 text-emerald-400",
  거부: "bg-rose-400/10 text-rose-400",
  "추가 인증": "bg-amber-400/10 text-amber-400",
};

export default function MonitoringView() {
  const decTotal = decisionBreakdown.reduce((s, d) => s + d.value, 0);
  const maxAllow = Math.max(...topResources.map((r) => r.allow));

  return (
    <div className="space-y-5">
      {/* 실시간 KPI */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {monitorKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-xs text-slate-400">{kpi.label}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span
                className={`text-2xl font-semibold tabular-nums ${
                  valueTone[kpi.tone ?? ""] ?? "text-slate-100"
                }`}
              >
                {kpi.value}
              </span>
              {kpi.delta && (
                <span
                  className={`text-xs font-medium ${
                    deltaTone[kpi.tone ?? ""] ?? "text-slate-400"
                  }`}
                >
                  {kpi.delta}
                </span>
              )}
            </div>
            {kpi.hint && (
              <p className="mt-1 text-[11px] text-slate-500">{kpi.hint}</p>
            )}
          </div>
        ))}
      </div>

      {/* 접근 요청 추이 + 정책 판정 분포 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">접근 요청 추이</p>
            <span className="text-xs text-slate-500">최근 24시간 · 2시간 단위</span>
          </div>
          <div className="mt-4 h-32">
            <AreaChart data={authTrend} gradientId="mon-trend" className="h-32" />
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">정책 판정 분포</p>
            <span className="text-xs text-slate-500">
              총 {decTotal.toLocaleString()}건
            </span>
          </div>
          <div className="flex h-2.5 overflow-hidden rounded-full bg-white/5">
            {decisionBreakdown.map((d) => (
              <div
                key={d.label}
                className={segBg[d.color]}
                style={{ width: `${(d.value / decTotal) * 100}%` }}
              />
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {decisionBreakdown.map((d) => (
              <li
                key={d.label}
                className="flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2 text-slate-300">
                  <span className={`h-2 w-2 rounded-full ${segBg[d.color]}`} />
                  {d.label}
                </span>
                <span className="tabular-nums text-slate-400">
                  {d.value.toLocaleString()}
                  <span className="ml-1 text-xs text-slate-500">
                    ({Math.round((d.value / decTotal) * 100)}%)
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 리소스별 접근 + 거부 사유 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="mb-3 text-sm font-medium text-slate-200">
            리소스별 접근 Top
          </p>
          <div className="space-y-3">
            {topResources.map((r) => (
              <div key={r.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="truncate font-mono text-slate-300">
                    {r.name}
                  </span>
                  <span className="shrink-0 tabular-nums text-slate-400">
                    {r.allow.toLocaleString()} 허용
                    {r.deny > 0 && (
                      <span className="ml-1.5 text-rose-400">
                        {r.deny} 거부
                      </span>
                    )}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/5">
                  <div
                    className="h-2 rounded-full bg-emerald-400/80"
                    style={{ width: `${(r.allow / maxAllow) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="mb-3 text-sm font-medium text-slate-200">거부 사유 Top</p>
          <BarChart data={denyReasons} />
        </div>
      </div>

      {/* 실시간 접근 로그 */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <p className="text-sm font-medium text-slate-200">실시간 접근 로그</p>
          <span className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            LIVE
          </span>
        </div>
        <ul className="divide-y divide-white/5">
          {accessLogs.map((log, i) => (
            <li key={i} className="flex items-center gap-3 px-4 py-2 text-sm">
              <span className="w-16 shrink-0 font-mono text-xs tabular-nums text-slate-500">
                {log.time}
              </span>
              <span className="w-20 shrink-0 truncate font-mono text-xs text-slate-400">
                {log.user}
              </span>
              <span className="w-28 shrink-0 truncate font-mono text-xs text-slate-300">
                {log.resource}
              </span>
              <span className="flex-1 truncate text-xs text-slate-500">
                {log.reason}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${
                  decisionBadge[log.decision] ?? ""
                }`}
              >
                {log.decision}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
