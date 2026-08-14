"use client";

import { useState } from "react";

const TABS = ["스코어링 규칙", "대응 정책", "배치 설정", "변경 이력"] as const;

function NumberBox({ value }: { value: string | number }) {
  return (
    <div className="flex w-20 shrink-0 items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5">
      <span className="text-sm tabular-nums text-slate-100">{value}</span>
      <span className="flex flex-col text-[7px] leading-[1.1] text-slate-500">
        <span>▲</span>
        <span>▼</span>
      </span>
    </div>
  );
}

function Card({
  title,
  code,
  desc,
  children,
}: {
  title: string;
  code?: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <h5 className="text-sm font-semibold text-slate-100">
        {title}
        {code && (
          <span className="ml-1 font-mono text-xs font-normal text-slate-500">
            ({code})
          </span>
        )}
      </h5>
      <p className="mt-1 text-xs leading-relaxed text-slate-400">{desc}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

// 감쇠 곡선: y = 100 · 0.5^(t / halfLife)
function DecayChart() {
  const W = 300, H = 170, padL = 30, padR = 12, padT = 12, padB = 26;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const lifetime = 14;
  const half = 3.5;
  const sx = (t: number) => padL + (t / lifetime) * plotW;
  const sy = (v: number) => padT + (1 - v / 100) * plotH;
  const pts: string[] = [];
  for (let t = 0; t <= lifetime; t += 0.5) {
    const v = 100 * Math.pow(0.5, t / half);
    pts.push(`${sx(t).toFixed(1)},${sy(v).toFixed(1)}`);
  }
  const dotX = sx(half);
  const dotY = sy(50);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
      {/* 축 */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#334155" />
      <line x1={padL} y1={padT + plotH} x2={W - padR} y2={padT + plotH} stroke="#334155" />
      <text x={padL - 4} y={padT + 4} textAnchor="end" fontSize="9" fill="#64748b">100</text>
      <text x={padL - 4} y={sy(50) + 3} textAnchor="end" fontSize="9" fill="#64748b">50%</text>
      <text x={padL - 4} y={padT + plotH} textAnchor="end" fontSize="9" fill="#64748b">0</text>
      <text x={padL} y={H - 6} fontSize="9" fill="#64748b">0</text>
      <text x={W - padR} y={H - 6} textAnchor="end" fontSize="9" fill="#64748b">14  기간(일)</text>
      {/* 50% 보조선 */}
      <line x1={padL} y1={dotY} x2={dotX} y2={dotY} stroke="#475569" strokeDasharray="3 3" />
      <line x1={dotX} y1={dotY} x2={dotX} y2={padT + plotH} stroke="#475569" strokeDasharray="3 3" />
      {/* 곡선 */}
      <polyline points={pts.join(" ")} fill="none" stroke="#a78bfa" strokeWidth="2" />
      <circle cx={dotX} cy={dotY} r="3.5" fill="#f59e0b" />
      {/* 주석 */}
      <rect x={dotX + 8} y={dotY - 12} width="66" height="24" rx="4" fill="#0f172a" stroke="#334155" />
      <text x={dotX + 41} y={dotY + 3} textAnchor="middle" fontSize="9" fill="#e2e8f0">
        3.5일 후 50%
      </text>
    </svg>
  );
}

// 포화 곡선: y = 100 · x / (K + x), K=50
function SaturationChart() {
  const W = 300, H = 170, padL = 24, padR = 40, padT = 12, padB = 26;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const xMax = 500;
  const K = 50;
  const sx = (x: number) => padL + (x / xMax) * plotW;
  const sy = (v: number) => padT + (1 - v / 100) * plotH;
  const pts: string[] = [];
  for (let x = 0; x <= xMax; x += 10) {
    const v = (100 * x) / (K + x);
    pts.push(`${sx(x).toFixed(1)},${sy(v).toFixed(1)}`);
  }
  const bands = [
    { v: 75, label: "HIGH 75", color: "#fb7185" },
    { v: 50, label: "MED 50", color: "#fbbf24" },
    { v: 25, label: "LOW 25", color: "#34d399" },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#334155" />
      <line x1={padL} y1={padT + plotH} x2={W - padR} y2={padT + plotH} stroke="#334155" />
      <text x={padL - 4} y={padT + 4} textAnchor="end" fontSize="9" fill="#64748b">100</text>
      <text x={padL - 4} y={padT + plotH} textAnchor="end" fontSize="9" fill="#64748b">0</text>
      <text x={W - padR} y={H - 6} textAnchor="end" fontSize="9" fill="#64748b">누적 입력 500</text>
      {/* 밴드 보조선 */}
      {bands.map((b) => (
        <g key={b.label}>
          <line x1={padL} y1={sy(b.v)} x2={W - padR} y2={sy(b.v)} stroke={b.color} strokeDasharray="4 3" opacity="0.6" />
          <text x={W - padR + 3} y={sy(b.v) + 3} fontSize="8" fill={b.color}>{b.label}</text>
        </g>
      ))}
      {/* K 마커 */}
      <line x1={sx(K)} y1={padT} x2={sx(K)} y2={padT + plotH} stroke="#475569" strokeDasharray="3 3" />
      <text x={sx(K) + 3} y={padT + 8} fontSize="8" fill="#94a3b8">K=50</text>
      {/* 곡선 */}
      <polyline points={pts.join(" ")} fill="none" stroke="#6366f1" strokeWidth="2" />
    </svg>
  );
}

const SEVERITY = [
  { key: "critical", label: "Critical (90~100)", dot: "bg-rose-500", value: 25 },
  { key: "high", label: "High (70~89)", dot: "bg-orange-500", value: 15 },
  { key: "medium", label: "Medium (40~69)", dot: "bg-amber-400", value: 8 },
  { key: "low", label: "Low (1~39)", dot: "bg-sky-500", value: 3 },
] as const;

export default function ThreatRulesView() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("스코어링 규칙");

  return (
    <div className="space-y-5">
      {/* 헤더 */}
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-slate-400">위협 점수 계산 규칙을 설정합니다.</p>
        <span className="flex shrink-0 items-center gap-1.5 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 px-3 py-1.5 text-xs font-medium text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M3 12h4l3 8 4-16 3 8h4" />
          </svg>
          규칙 시뮬레이션
        </span>
      </div>

      {/* 서브 탭 */}
      <div className="flex gap-5 border-b border-white/10">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 pb-2 text-sm font-medium transition-colors ${
              tab === t
                ? "border-indigo-400 text-slate-100"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "스코어링 규칙" ? (
        <div className="space-y-6">
          {/* 점수 계산 곡선 */}
          <section>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
              점수 계산 곡선
            </h4>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card
                title="Iklody 시간 감쇠"
                code="iklodyDecay"
                desc="이벤트 발생 후 시간이 지날수록 해당 이벤트의 점수 반영 비중이 줄어듭니다."
              >
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-xs text-slate-400">Lifetime (일)</span>
                      <NumberBox value={14} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-xs text-slate-400">Delta</span>
                      <NumberBox value={2} />
                    </div>
                  </div>
                  <DecayChart />
                </div>
              </Card>

              <Card
                title="Hill 포화"
                code="HillSaturation"
                desc="위협이 누적될수록 점수가 오르되, 일정 수준부터 상승 폭이 완만해집니다(포화)."
              >
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-xs text-slate-400">Half saturation</span>
                      <NumberBox value={50} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-xs text-slate-400">Exponent</span>
                      <NumberBox value={1} />
                    </div>
                  </div>
                  <SaturationChart />
                </div>
              </Card>
            </div>
          </section>

          {/* 심각도 · 레벨 */}
          <section>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
              심각도 · 레벨
            </h4>
            <div className="grid gap-4 lg:grid-cols-3">
              {/* Severity banding */}
              <Card
                title="Severity banding"
                code="severityBand"
                desc="이벤트 단위 — 이벤트 한 건의 심각도 등급별로 누적 점수에 더할 가중치를 정합니다."
              >
                <div className="space-y-3.5">
                  {SEVERITY.map((b) => (
                    <div
                      key={b.key}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="flex items-center gap-1.5 text-xs text-slate-300">
                        <span className={`h-2 w-2 rounded-full ${b.dot}`} />
                        {b.label}
                      </span>
                      <NumberBox value={b.value} />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Level thresholds */}
              <Card
                title="레벨 임계값"
                code="LevelThresholds"
                desc="사용자 점수 단위 — 누적된 최종 위험 점수(0~100)를 4개 등급으로 나누는 경계값을 정합니다."
              >
                <div>
                  <div className="flex h-3 overflow-hidden rounded-full text-[9px] font-bold">
                    <div className="flex flex-1 items-center justify-center bg-sky-500/80 text-white">LOW</div>
                    <div className="flex flex-1 items-center justify-center bg-amber-400/80 text-slate-900">MED</div>
                    <div className="flex flex-1 items-center justify-center bg-orange-500/80 text-white">HIGH</div>
                    <div className="flex flex-1 items-center justify-center bg-rose-500/80 text-white">CRIT</div>
                  </div>
                  <div className="mt-1 flex justify-between text-[10px] tabular-nums text-slate-500">
                    <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {[
                      ["LOW 상한", 25],
                      ["MED 상한", 50],
                      ["HIGH 상한", 75],
                    ].map(([label, v]) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{label}</span>
                        <NumberBox value={v} />
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    CRITICAL: <span className="font-semibold text-rose-400">75 초과</span> 자동 적용
                  </p>
                </div>
              </Card>

              {/* 기타 */}
              <Card
                title="기타 (최대값)"
                desc="위협 점수 상한과 점수 계산 시 조회할 이벤트 건수 상한을 정합니다."
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">최대 점수</span>
                    <NumberBox value={100} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">최대 조회 건수</span>
                    <NumberBox value={"10000"} />
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-white/10 py-16 text-center text-sm text-slate-500">
          「{tab}」 탭은 예시에서 생략되었습니다.
        </div>
      )}
    </div>
  );
}
