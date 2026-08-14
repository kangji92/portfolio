import type { Metadata } from "next";
import Link from "next/link";
import HarnessPipeline from "@/components/harness/HarnessPipeline";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "AI Front-end Harness — 개발 파이프라인",
  description:
    "개발 표준을 단일 진실 소스로 두고, AI 에이전트가 이를 읽어 컴포넌트·테스트를 일관되게 생성하고 품질 게이트로 검증하는 프론트엔드 개발 하네스.",
};

const STACK = [
  "Node.js",
  "TypeScript",
  "React",
  "Vitest",
  "Testing Library",
  "ESLint",
  "SonarQube",
  "GitHub Actions",
];

const PARTS = [
  {
    title: "개발 표준 (Single Source of Truth)",
    body: "컴포넌트 구조·네이밍·테스트 규칙을 Markdown(standards/*.md · AGENTS.md)으로 명문화. 사람과 AI가 같은 문서를 읽고 같은 규칙으로 코드를 만든다.",
    tag: "standards",
  },
  {
    title: "컴포넌트 스캐폴더",
    body: "표준을 강제하는 템플릿으로 컴포넌트·스토리·테스트 뼈대를 한 번에 생성. --dry-run으로 실제 생성 없이 결과를 미리 확인할 수 있다.",
    tag: "scaffold",
  },
  {
    title: "재사용 프롬프트 라이브러리",
    body: "테스트 생성·보강, 데모 데이터 시드, 리팩터링 등 반복 작업을 프롬프트로 표준화. 에이전트가 표준 문서를 주입받아 일관된 산출물을 낸다.",
    tag: "prompts",
  },
  {
    title: "품질 루프 (Quality Loop)",
    body: "Vitest·ESLint·SonarQube 리포트를 다시 AI에게 넘겨 개선 → 재검증을 반복. 게이트를 통과할 때까지 자동으로 좁혀간다.",
    tag: "quality-loop",
  },
];

// 예시 폴더 구조 (실제 명칭은 저장소 기준으로 조정 가능)
const TREE: { d: string; c?: string }[] = [
  { d: "ai-fe-harness/" },
  { d: "├─ AGENTS.md", c: "에이전트가 가장 먼저 읽는 최상위 규칙" },
  { d: "├─ standards/", c: "개발 표준 — 단일 진실 소스" },
  { d: "│  ├─ component.md", c: "컴포넌트 구조·네이밍" },
  { d: "│  └─ testing.md", c: "테스트 작성 규칙" },
  { d: "├─ templates/component/", c: "스캐폴더 템플릿" },
  { d: "│  ├─ __NAME__.tsx" },
  { d: "│  ├─ __NAME__.test.tsx" },
  { d: "│  └─ __NAME__.stories.tsx" },
  { d: "├─ prompts/", c: "재사용 프롬프트 라이브러리" },
  { d: "├─ scripts/" },
  { d: "│  ├─ scaffold.mjs", c: "컴포넌트 스캐폴더 (--dry-run)" },
  { d: "│  ├─ agent-generate.mjs", c: "실행 에이전트 루프" },
  { d: "│  └─ quality-fix.mjs", c: "품질 루프 (Sonar → AI 개선)" },
  { d: "├─ eslint.config.js" },
  { d: "└─ .github/workflows/ci.yml", c: "lint · test · build 게이트" },
];

export default function AiFeHarnessDetailPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <Link
        href="/#projects"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        AI Front-end Harness
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        Personal Project · 2026
      </p>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        “AI로 코드를 빨리 만든다”가 아니라{" "}
        <strong className="text-zinc-900 dark:text-zinc-100">
          “AI가 우리 팀의 규칙대로 일관되게 만들게 한다”
        </strong>
        는 데 초점을 둔 프론트엔드 개발 하네스입니다. 개발 표준을 단일 진실
        소스로 두고, 에이전트가 그 문서를 읽어 컴포넌트·테스트를 생성한 뒤 품질
        게이트로 검증합니다.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {STACK.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      {/* 파이프라인 다이어그램 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">개발 파이프라인</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          요구사항이 표준을 거쳐 검증된 PR이 되기까지의 흐름. 품질 게이트에서
          실패하면 에이전트가 리포트를 받아 다시 수정합니다.
        </p>
        <div className="mt-6 rounded-2xl border border-black/[.08] bg-white p-6 shadow-sm sm:p-10 dark:border-white/[.1] dark:bg-zinc-900">
          <HarnessPipeline />
        </div>
      </div>

      {/* 문제의식 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">왜 만들었나</h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          AI 코드 생성은 빠르지만, 매번 스타일·구조·테스트 방식이 달라지면 오히려
          리뷰·유지보수 비용이 늘어난다. 핵심은{" "}
          <strong className="text-zinc-900 dark:text-zinc-100">
            “표준을 사람이 아니라 파이프라인이 강제하게”
          </strong>{" "}
          만드는 것이다. 규칙을 문서 하나로 모으고, 생성·검증 단계에서 그 규칙을
          반복 적용하면 결과물의 편차가 줄어든다.
        </p>
      </div>

      {/* 구성 요소 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">구성 요소</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PARTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-black/[.08] bg-white p-6 shadow-sm dark:border-white/[.1] dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <code className="shrink-0 rounded bg-black/[.04] px-1.5 py-0.5 text-xs text-zinc-500 dark:bg-white/[.06]">
                  {p.tag}
                </code>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 폴더 구조 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">예시 폴더 구조</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          표준·템플릿·스크립트·CI가 저장소에서 어떻게 놓이는지 보여주는 예시입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-black/[.08] bg-zinc-50 p-5 dark:border-white/[.1] dark:bg-zinc-900">
          <pre className="text-[13px] leading-6">
            <code>
              {TREE.map((line) => (
                <div key={line.d}>
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {line.d.padEnd(30, " ")}
                  </span>
                  {line.c && (
                    <span className="text-zinc-400 dark:text-zinc-500">
                      # {line.c}
                    </span>
                  )}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

      {/* dogfooding */}
      <div className="mt-16 rounded-2xl border border-indigo-500/25 bg-indigo-500/[.06] p-6">
        <h2 className="text-lg font-bold tracking-tight">
          이 포트폴리오도 같은 방식으로 (dogfooding)
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          지금 보고 있는 이 포트폴리오 사이트 자체가 동일한 접근으로 구축됐습니다.
          개발 표준을 문서로 두고, 컴포넌트·테스트를 표준에 맞춰 생성하며, CI에서
          lint·test·build를 게이트로 검증합니다.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 border-t border-black/[.06] pt-6 dark:border-white/[.08]">
        <a
          href="https://github.com/kangji92/ai-fe-harness"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          GitHub에서 코드 보기 →
        </a>
      </div>
    </section>
  );
}
