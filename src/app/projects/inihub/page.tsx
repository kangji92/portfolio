import type { Metadata } from "next";
import Link from "next/link";
import AuthModalMock from "@/components/inihub/AuthModalMock";
import Tag from "@/components/ui/Tag";
import { inihubStack } from "@/data/inihub-stack";

export const metadata: Metadata = {
  title: "INIHUB 통합 인증 모달 — 예시 UI",
  description:
    "INIHUB 통합 인증 모달을 재구성한 예시 UI (실제 제품 화면이 아닌 더미 데이터 기반 데모).",
};

function TagCell({ items }: { items: string[] }) {
  if (items.length === 1 && items[0] === "—") {
    return <span className="text-sm text-zinc-400">—</span>;
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((i) => (
        <Tag key={i}>{i}</Tag>
      ))}
    </div>
  );
}

export default function InihubDetailPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <Link
        href="/#projects"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        INIHUB 통합 인증 모달
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
        다양한 인증 수단(간편인증·본인인증·2차 인증)을 하나로 통합하는 모달 UI를
        재구성한 예시입니다. 인증 수단 선택 → 정보 입력 → 인증 대기 → PIN(2차)
        → 완료까지 단계별 흐름을 직접 체험할 수 있습니다.
      </p>
      <p className="mt-2 text-sm text-zinc-500">
        Cloud 형 (Vue 3 / TypeScript) · On-premise 형 (Vue 2 / JavaScript) 두 배포
        형태로 개발한 제품입니다. (본 데모는 React로 재구성)
      </p>

      {/* 안전장치: 실제 제품 화면이 아님을 명확히 고지 */}
      <div className="mt-6 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-300">
        <span aria-hidden>⚠️</span>
        <p>
          재구성한 <strong>예시 UI</strong>이며, 실제 제품 화면·로고·데이터가
          아닙니다. 인증 수단은 컬러 배지로 대체했고 입력값은 동작하지 않습니다.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <AuthModalMock />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">상세 기술 스택</h2>
        <p className="mt-2 text-sm text-zinc-500">
          두 배포 형태(On-premise / Cloud)의 기술 구성 비교입니다.
        </p>

        <div className="mt-6">
          {/* 헤더 (데스크톱) */}
          <div className="hidden border-b border-black/[.06] pb-2 sm:grid sm:grid-cols-[120px_1fr_1fr] sm:gap-6 dark:border-white/[.08]">
            <span />
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              On-premise · Vue 2 / JS
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Cloud · Vue 3 / TS
            </span>
          </div>
          <div className="divide-y divide-black/[.06] dark:divide-white/[.08]">
            {inihubStack.map((r) => (
              <div
                key={r.area}
                className="grid gap-3 py-4 sm:grid-cols-[120px_1fr_1fr] sm:gap-6"
              >
                <span className="text-sm font-semibold text-zinc-500">
                  {r.area}
                </span>
                <div>
                  <span className="mb-1 block text-xs text-zinc-400 sm:hidden">
                    On-premise (Vue 2 / JS)
                  </span>
                  <TagCell items={r.v1} />
                </div>
                <div>
                  <span className="mb-1 block text-xs text-zinc-400 sm:hidden">
                    Cloud (Vue 3 / TS)
                  </span>
                  <TagCell items={r.v2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
