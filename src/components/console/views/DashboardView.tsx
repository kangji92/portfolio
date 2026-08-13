import { dashboardKpis, recentActivity, authTrend } from "@/data/console-mock";
import { AreaChart } from "@/components/console/charts";

export default function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {dashboardKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-xs text-slate-400">{kpi.label}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-xl font-semibold tabular-nums text-slate-100">
                {kpi.value}
              </span>
              {kpi.delta && (
                <span className="text-xs text-emerald-400">{kpi.delta}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-200">인증 시도 추이</p>
          <span className="text-xs text-slate-500">최근 24시간</span>
        </div>
        <div className="mt-3 h-16">
          <AreaChart data={authTrend} gradientId="dash-trend" className="h-16" />
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.03]">
        <p className="border-b border-white/10 px-4 py-3 text-sm font-medium text-slate-200">
          최근 활동
        </p>
        <ul className="divide-y divide-white/5">
          {recentActivity.map((a, i) => (
            <li
              key={i}
              className="flex items-center gap-3 px-4 py-2.5 text-sm"
            >
              <span className="w-12 shrink-0 text-xs tabular-nums text-slate-500">
                {a.time}
              </span>
              <span className="w-24 shrink-0 font-mono text-xs text-slate-400">
                {a.user}
              </span>
              <span className="flex-1 text-slate-300">{a.action}</span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${
                  a.status === "허용"
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "bg-rose-400/10 text-rose-400"
                }`}
              >
                {a.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
