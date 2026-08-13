import Card from "@/components/ui/Card";

// 사용자/데이터 흐름 또는 CI/CD 워크플로우를 단계로 보여주는 자리.
const steps = [
  { step: "1", label: "Trigger", desc: "사용자 액션 / 이벤트 발생" },
  { step: "2", label: "Process", desc: "검증 · 비즈니스 로직 처리" },
  { step: "3", label: "Persist", desc: "저장 및 상태 갱신" },
  { step: "4", label: "Notify", desc: "결과 반영 / 알림" },
];

export default function WorkflowDemo() {
  return (
    <Card>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Workflow
      </h4>
      <ol className="mt-4 space-y-3">
        {steps.map((s) => (
          <li key={s.step} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
              {s.step}
            </span>
            <div>
              <p className="font-medium leading-6">{s.label}</p>
              <p className="text-xs text-zinc-500">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
