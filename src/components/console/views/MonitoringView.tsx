import { authTrend, authOutcome } from "@/data/console-mock";
import { AreaChart, BarChart } from "@/components/console/charts";

export default function MonitoringView() {
  const total = authOutcome.reduce((sum, o) => sum + o.value, 0);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-200">인증 요청 추이</p>
          <span className="text-xs text-slate-500">최근 24시간 · 2시간 단위</span>
        </div>
        <div className="mt-4 h-40">
          <AreaChart data={authTrend} gradientId="mon-trend" className="h-40" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-medium text-slate-200">인증 결과 분포</p>
          <div className="mt-4">
            <BarChart data={authOutcome} />
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-medium text-slate-200">요약</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-400">총 요청</dt>
              <dd className="tabular-nums text-slate-100">
                {total.toLocaleString()}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">성공률</dt>
              <dd className="tabular-nums text-emerald-400">
                {((authOutcome[0].value / total) * 100).toFixed(1)}%
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">차단 건수</dt>
              <dd className="tabular-nums text-rose-400">
                {authOutcome[2].value.toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
