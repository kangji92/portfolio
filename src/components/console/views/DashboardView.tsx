import {
  dashboardKpis,
  threatByType,
  threatTrend,
  responseSummary,
  threatEvents,
  systemStatus,
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
const riskBadge: Record<string, string> = {
  높음: "bg-rose-400/10 text-rose-400",
  중간: "bg-amber-400/10 text-amber-400",
  낮음: "bg-slate-400/10 text-slate-400",
};
const statusBadge: Record<string, string> = {
  "대응 완료": "bg-emerald-400/10 text-emerald-400",
  "대응 중": "bg-amber-400/10 text-amber-400",
  미대응: "bg-rose-400/10 text-rose-400",
};
const sysDot: Record<string, string> = {
  정상: "bg-emerald-400",
  지연: "bg-amber-400",
  점검: "bg-rose-400",
};
const sysBadge: Record<string, string> = {
  정상: "bg-emerald-400/10 text-emerald-400",
  지연: "bg-amber-400/10 text-amber-400",
  점검: "bg-rose-400/10 text-rose-400",
};

export default function DashboardView() {
  const total = responseSummary.reduce((s, r) => s + r.value, 0);
  const sysOk = systemStatus.filter((s) => s.status === "정상").length;
  const sysWarn = systemStatus.length - sysOk;

  return (
    <div className="space-y-5">
      {/* 상단 KPI — 위협 대응 현황 */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {dashboardKpis.map((kpi) => (
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

      {/* 위협 유형 분포 + 대응 상태 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">위협 유형 분포</p>
            <span className="text-xs text-slate-500">최근 24시간</span>
          </div>
          <BarChart data={threatByType} />
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">대응 상태</p>
            <span className="text-xs text-slate-500">총 {total}건</span>
          </div>
          <div className="flex h-2.5 overflow-hidden rounded-full bg-white/5">
            {responseSummary.map((seg) => (
              <div
                key={seg.label}
                className={segBg[seg.color]}
                style={{ width: `${(seg.value / total) * 100}%` }}
              />
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {responseSummary.map((seg) => (
              <li
                key={seg.label}
                className="flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2 text-slate-300">
                  <span
                    className={`h-2 w-2 rounded-full ${segBg[seg.color]}`}
                  />
                  {seg.label}
                </span>
                <span className="tabular-nums text-slate-400">
                  {seg.value}
                  <span className="ml-1 text-xs text-slate-500">
                    ({Math.round((seg.value / total) * 100)}%)
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 위협 탐지 추이 + 시스템 상태 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">위협 탐지 추이</p>
            <span className="text-xs text-slate-500">최근 24시간</span>
          </div>
          <div className="mt-6 h-20">
            <AreaChart
              data={threatTrend}
              gradientId="dash-threat"
              color="#fb7185"
              className="h-20"
            />
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">시스템 상태</p>
            <span className="text-xs text-slate-500">
              정상 {sysOk}
              {sysWarn > 0 && <span className="text-amber-400"> · 이상 {sysWarn}</span>}
            </span>
          </div>
          <ul className="space-y-2.5">
            {systemStatus.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2 text-slate-300">
                  <span className={`h-2 w-2 rounded-full ${sysDot[s.status]}`} />
                  {s.name}
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className={`tabular-nums text-xs ${
                      s.status === "지연" ? "text-amber-400" : "text-slate-500"
                    }`}
                  >
                    {s.latency}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${sysBadge[s.status]}`}
                  >
                    {s.status}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 최근 위협 이벤트 */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03]">
        <p className="border-b border-white/10 px-4 py-3 text-sm font-medium text-slate-200">
          최근 위협 이벤트
        </p>
        <ul className="divide-y divide-white/5">
          {threatEvents.map((e) => (
            <li
              key={e.id}
              className="flex items-center gap-3 px-4 py-2.5 text-sm"
            >
              <span className="w-10 shrink-0 text-xs tabular-nums text-slate-500">
                {e.time}
              </span>
              <span className="w-20 shrink-0 truncate font-mono text-xs text-slate-400">
                {e.user}
              </span>
              <span className="flex-1 truncate text-slate-300">{e.type}</span>
              <span
                className={`shrink-0 rounded px-1.5 py-0.5 text-xs ${
                  riskBadge[e.risk] ?? ""
                }`}
              >
                {e.risk}
              </span>
              <span
                className={`hidden shrink-0 rounded-full px-2 py-0.5 text-xs sm:inline ${
                  statusBadge[e.status] ?? ""
                }`}
              >
                {e.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
