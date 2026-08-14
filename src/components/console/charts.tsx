// 라이브러리 없이 인라인 SVG/CSS로 그리는 경량 차트 (다크 고정).

export function AreaChart({
  data,
  gradientId,
  className = "",
  color = "#34d399",
}: {
  data: number[];
  gradientId: string;
  className?: string;
  color?: string;
}) {
  const w = 100;
  const h = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);

  const points = data.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / range) * h;
    return [x, y] as const;
  });

  const line = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      role="img"
      aria-label="인증 시도 추이"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gradientId})`} />
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function BarChart({
  data,
}: {
  data: { label: string; value: number; tone: "positive" | "negative" }[];
}) {
  const max = Math.max(...data.map((d) => d.value)) || 1;

  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label}>
          <div className="mb-1 flex justify-between text-xs text-slate-400">
            <span>{d.label}</span>
            <span className="tabular-nums">{d.value.toLocaleString()}</span>
          </div>
          <div className="h-2 rounded-full bg-white/5">
            <div
              className={`h-2 rounded-full ${
                d.tone === "positive" ? "bg-emerald-400" : "bg-rose-400"
              }`}
              style={{ width: `${(d.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
