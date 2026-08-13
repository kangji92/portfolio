import Card from "@/components/ui/Card";

// 전환 전후의 정성적 개선 효과를 체크리스트로 표시.
// (정량 수치는 실측 데이터가 없어 사용하지 않는다.)
export default function ImprovementSummary({ items }: { items: string[] }) {
  return (
    <Card>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        개선 효과 (Before → After)
      </h4>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
          >
            <span
              className="mt-0.5 font-semibold text-green-600 dark:text-green-500"
              aria-hidden
            >
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
