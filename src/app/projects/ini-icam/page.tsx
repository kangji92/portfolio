import type { Metadata } from "next";
import Link from "next/link";
import AdminConsoleMock from "@/components/console/AdminConsoleMock";

export const metadata: Metadata = {
  title: "INI-ICAM 관리자 콘솔 — 예시 UI",
  description:
    "INI-ICAM 관리자 콘솔을 재구성한 예시 UI (실제 제품 화면이 아닌 더미 데이터 기반 데모).",
};

export default function IniIcamDetailPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <Link
        href="/#projects"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        INI-ICAM 관리자 콘솔
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
        제로트러스트 통합 접근 관리 플랫폼의 관리자 콘솔을 재구성한 예시 UI입니다.
        대시보드·워크플로우 에디터·모니터링·접근 정책 관리 화면을 직접 구현해
        데모로 재현했습니다. 좌측 메뉴로 각 화면을 둘러볼 수 있습니다.
      </p>

      {/* 안전장치: 실제 제품 화면이 아님을 명확히 고지 */}
      <div className="mt-6 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-300">
        <span aria-hidden>⚠️</span>
        <p>
          재구성한 <strong>예시 UI</strong>이며, 실제 제품 화면이 아닙니다. 표시된
          데이터는 모두 더미 값입니다.
        </p>
      </div>

      <div className="mt-8">
        <AdminConsoleMock />
      </div>
    </section>
  );
}
