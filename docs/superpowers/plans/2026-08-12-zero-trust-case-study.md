# Zero Trust 케이스 스터디 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 포트폴리오의 대표 프로젝트 "Zero Trust Security Platform"을, MFE→React 전환 서사와 React Flow 기반 Before/After 인터랙티브 다이어그램을 갖춘 케이스 스터디로 구현한다.

**Architecture:** 순수 로직(그래프 선택/검증)은 `src/lib/arch.ts`로 분리해 Vitest로 TDD한다. 콘텐츠·그래프 데이터는 `src/data/projects/zero-trust.ts`로 격리한다. 표시 계층은 `ArchitectureDiagram`(React Flow, 세그먼트 토글), `ImprovementSummary`(정성적 개선 효과), `ProjectSection`(케이스 스터디 렌더링)으로 구성한다.

**Tech Stack:** Next.js 16.3.0 (App Router), React 19, TypeScript 5, Tailwind CSS 4, React Flow(`@xyflow/react`), Vitest.

## Global Constraints

- Next.js App Router + React Server/Client Components 규칙 준수. React Flow를 쓰는 컴포넌트는 `"use client"`.
- 정량 성능 수치를 **지어내지 않는다**. 개선 효과는 정성적 항목만 사용한다.
- React Flow 다이어그램은 **읽기 전용**: `nodesDraggable={false}`, `nodesConnectable={false}`, `elementsSelectable={false}`.
- 한글 카피는 설계 문서 §5/§6에서 **그대로** 옮긴다 (임의 수정 금지).
- `period`는 실제 값이 없으므로 플레이스홀더 문자열 `"재직 기간 미정"`을 사용한다.
- import alias는 `@/*` (= `src/*`).
- **git은 이번 범위에서 제외**한다(초판 1차 완성 후 별도로 초기화 예정). `git init` 및 모든 commit 스텝을 수행하지 않는다.
- 각 태스크 종료 시 `npm run lint`와 `npm run build`가 모두 통과해야 한다. (커밋 대신 이 검증으로 태스크 완료를 판정한다.)

---

### Task 1: 툴링 셋업 — React Flow + Vitest + git

**Files:**
- Modify: `package.json` (dependencies, scripts)
- Create: `vitest.config.ts`

**Interfaces:**
- Consumes: (없음)
- Produces: `npm test` 스크립트(= `vitest run --passWithNoTests`), `@` alias가 해석되는 Vitest 환경, `@xyflow/react` 의존성.

- [ ] **Step 1: React Flow 설치**

```bash
npm install @xyflow/react
```

Expected: `@xyflow/react`가 `dependencies`에 추가됨 (v12.x).

- [ ] **Step 2: Vitest 설치**

```bash
npm install -D vitest
```

- [ ] **Step 3: `package.json`에 test 스크립트 추가**

`scripts`에 아래 라인을 추가한다 (기존 dev/build/start/lint는 유지):

```json
"test": "vitest run --passWithNoTests",
"test:watch": "vitest"
```

- [ ] **Step 4: `vitest.config.ts` 생성**

```ts
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  test: {
    environment: "node",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

- [ ] **Step 5: 테스트 러너 동작 확인**

Run: `npm test`
Expected: PASS — "No test files found, exiting with code 0" (또는 유사 메시지, exit code 0)

- [ ] **Step 6: 빌드 회귀 확인**

Run: `npm run build`
Expected: PASS (기존과 동일하게 정적 생성 성공)

---

### Task 2: 아키텍처 타입 + 그래프 헬퍼 (TDD)

**Files:**
- Modify: `src/types/index.ts`
- Create: `src/lib/arch.ts`
- Test: `src/lib/arch.test.ts`

**Interfaces:**
- Consumes: (없음)
- Produces:
  - 타입 `CaseStudy`, `ArchNode`, `ArchEdge`, `ArchGraph`, 그리고 `Project`에 추가 필드 `responsibilities?: string[]`, `caseStudy?: CaseStudy`, `architecture?: { before: ArchGraph; after: ArchGraph }`.
  - `selectGraph(architecture: NonNullable<Project["architecture"]>, mode: "before" | "after"): ArchGraph`
  - `validateGraph(graph: ArchGraph): string[]` — 엣지가 참조하는 node id가 없으면 오류 문자열을 담아 반환. 유효하면 빈 배열.

- [ ] **Step 1: 타입 추가 (`src/types/index.ts` 하단에 append)**

```ts
export interface CaseStudy {
  background: string;
  challenge: string;
  solution: { summary: string; points: string[] };
  /** 정성적 개선 효과 (Before/After 대비) */
  improvements: string[];
}

export interface ArchNode {
  id: string;
  label: string;
  /** 시각 위계: root = 강조(Host/App), leaf = 일반 */
  variant: "root" | "leaf";
  position: { x: number; y: number };
}

export interface ArchEdge {
  id: string;
  source: string;
  target: string;
}

export interface ArchGraph {
  nodes: ArchNode[];
  edges: ArchEdge[];
}
```

그리고 기존 `Project` 인터페이스에 아래 3개 필드를 추가한다 (기존 필드는 그대로):

```ts
  responsibilities?: string[];
  caseStudy?: CaseStudy;
  architecture?: { before: ArchGraph; after: ArchGraph };
```

- [ ] **Step 2: 실패하는 테스트 작성 (`src/lib/arch.test.ts`)**

```ts
import { describe, it, expect } from "vitest";
import { selectGraph, validateGraph } from "./arch";
import type { ArchGraph } from "@/types";

const validGraph: ArchGraph = {
  nodes: [
    { id: "a", label: "A", variant: "root", position: { x: 0, y: 0 } },
    { id: "b", label: "B", variant: "leaf", position: { x: 0, y: 100 } },
  ],
  edges: [{ id: "e1", source: "a", target: "b" }],
};

describe("validateGraph", () => {
  it("returns empty array for a valid graph", () => {
    expect(validateGraph(validGraph)).toEqual([]);
  });

  it("reports an edge referencing an unknown node", () => {
    const broken: ArchGraph = {
      nodes: [{ id: "a", label: "A", variant: "root", position: { x: 0, y: 0 } }],
      edges: [{ id: "e1", source: "a", target: "missing" }],
    };
    const errors = validateGraph(broken);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain("missing");
  });
});

describe("selectGraph", () => {
  it("returns the before graph when mode is before", () => {
    const arch = { before: validGraph, after: { nodes: [], edges: [] } };
    expect(selectGraph(arch, "before")).toBe(validGraph);
  });

  it("returns the after graph when mode is after", () => {
    const after: ArchGraph = { nodes: [], edges: [] };
    const arch = { before: validGraph, after };
    expect(selectGraph(arch, "after")).toBe(after);
  });
});
```

- [ ] **Step 3: 테스트 실패 확인**

Run: `npm test`
Expected: FAIL — `./arch` 모듈이 없어 import 에러

- [ ] **Step 4: 구현 (`src/lib/arch.ts`)**

```ts
import type { ArchGraph, Project } from "@/types";

type Architecture = NonNullable<Project["architecture"]>;

export function selectGraph(
  architecture: Architecture,
  mode: "before" | "after",
): ArchGraph {
  return architecture[mode];
}

export function validateGraph(graph: ArchGraph): string[] {
  const ids = new Set(graph.nodes.map((n) => n.id));
  const errors: string[] = [];
  for (const edge of graph.edges) {
    if (!ids.has(edge.source)) {
      errors.push(`edge ${edge.id}: unknown source node "${edge.source}"`);
    }
    if (!ids.has(edge.target)) {
      errors.push(`edge ${edge.id}: unknown target node "${edge.target}"`);
    }
  }
  return errors;
}
```

- [ ] **Step 5: 테스트 통과 확인**

Run: `npm test`
Expected: PASS (4 tests)

- [ ] **Step 6: 타입 회귀 확인**

Run: `npm run build`
Expected: PASS (타입 추가만 했으므로 정상)

---

### Task 3: Zero Trust 데이터 (콘텐츠 + Before/After 그래프) (TDD)

**Files:**
- Create: `src/data/projects/zero-trust.ts`
- Modify: `src/data/projects.ts`
- Test: `src/data/projects/zero-trust.test.ts`

**Interfaces:**
- Consumes: 타입(`Project`), `validateGraph`
- Produces: `export const zeroTrust: Project` — `caseStudy`, `architecture`, `responsibilities` 포함.

- [ ] **Step 1: 실패하는 무결성 테스트 작성 (`src/data/projects/zero-trust.test.ts`)**

```ts
import { describe, it, expect } from "vitest";
import { zeroTrust } from "./zero-trust";
import { validateGraph } from "@/lib/arch";

describe("zeroTrust data", () => {
  it("has non-empty case study narrative", () => {
    expect(zeroTrust.caseStudy?.background).toBeTruthy();
    expect(zeroTrust.caseStudy?.challenge).toBeTruthy();
    expect(zeroTrust.caseStudy?.solution.summary).toBeTruthy();
    expect(zeroTrust.caseStudy?.solution.points.length).toBeGreaterThan(0);
    expect(zeroTrust.caseStudy?.improvements.length).toBeGreaterThan(0);
  });

  it("has valid before/after architecture graphs", () => {
    expect(zeroTrust.architecture).toBeDefined();
    expect(validateGraph(zeroTrust.architecture!.before)).toEqual([]);
    expect(validateGraph(zeroTrust.architecture!.after)).toEqual([]);
  });
});
```

- [ ] **Step 2: 테스트 실패 확인**

Run: `npm test`
Expected: FAIL — `./zero-trust` 모듈 없음

- [ ] **Step 3: 데이터 파일 구현 (`src/data/projects/zero-trust.ts`)**

```ts
import type { Project } from "@/types";

export const zeroTrust: Project = {
  id: "zero-trust-security-platform",
  title: "Zero Trust Security Platform",
  period: "재직 기간 미정",
  role: "Front-end Developer",
  summary:
    "MFE(Micro Frontend) 구조로 시작해 React 기반 통합 구조로 전환한 프론트엔드 아키텍처 프로젝트.",
  stack: ["React", "TypeScript", "Angular", "single-spa", "React Flow", "Tailwind CSS"],
  highlights: [],
  responsibilities: [
    "프론트엔드 아키텍처 설계 및 개발",
    "MFE 통합 구조 개발",
    "React 기반 통합 구조 전환",
    "관리자 콘솔 개발",
    "Workflow Editor 개발",
    "모니터링 / 데이터 시각화",
    "테스트 자동화 및 품질 개선",
  ],
  caseStudy: {
    background:
      "초기에는 기존 Angular 기반 Host의 인증 및 공통 기능을 유지하면서 신규 서비스를 React Widget으로 개발하기 위해 MFE(Micro Frontend) 구조를 적용했습니다.",
    challenge:
      "프로젝트가 확장되면서 레거시 Angular 환경의 의존성 충돌 및 호환성 문제 해결에 지속적인 비용이 발생했고, Angular와 React를 함께 운영함에 따라 공통 기능과 개발 환경을 관리하는 복잡도도 증가했습니다.",
    solution: {
      summary:
        "기존 구조를 지속적으로 보완하는 것보다 장기적인 유지보수성과 개발 효율성을 고려하여 React 기반의 통합 프론트엔드 구조로 전환했습니다.",
      points: [
        "Angular / React 이중 기술 스택을 React로 단일화",
        "레거시 Angular 의존성 및 호환성 관리 부담 감소",
        "인증·레이아웃 등 공통 기능 관리 구조 단순화",
        "프로젝트 개발 환경 및 유지보수 체계 일원화",
        "프론트엔드 개발 생산성 및 확장성 개선",
      ],
    },
    improvements: [
      "기술 스택 단일화 (Angular + React → React)",
      "레거시 Angular 의존성·호환성 충돌 해소",
      "공통 기능(인증·레이아웃) 관리 일원화",
      "런타임 프레임워크 중복 로드 제거",
      "개발 환경·유지보수 체계 단순화",
    ],
  },
  architecture: {
    before: {
      nodes: [
        { id: "host", label: "Angular Host (인증 · 공통 기능)", variant: "root", position: { x: 120, y: 0 } },
        { id: "w-a", label: "React Widget A", variant: "leaf", position: { x: 0, y: 150 } },
        { id: "w-b", label: "React Widget B", variant: "leaf", position: { x: 180, y: 150 } },
        { id: "w-c", label: "React Widget C", variant: "leaf", position: { x: 360, y: 150 } },
      ],
      edges: [
        { id: "e-host-a", source: "host", target: "w-a" },
        { id: "e-host-b", source: "host", target: "w-b" },
        { id: "e-host-c", source: "host", target: "w-c" },
      ],
    },
    after: {
      nodes: [
        { id: "app", label: "React 통합 Application", variant: "root", position: { x: 262, y: 0 } },
        { id: "auth", label: "공통 인증", variant: "leaf", position: { x: 0, y: 150 } },
        { id: "layout", label: "Layout", variant: "leaf", position: { x: 175, y: 150 } },
        { id: "features", label: "Feature Modules", variant: "leaf", position: { x: 350, y: 150 } },
        { id: "shared", label: "Shared Components", variant: "leaf", position: { x: 525, y: 150 } },
      ],
      edges: [
        { id: "e-app-auth", source: "app", target: "auth" },
        { id: "e-app-layout", source: "app", target: "layout" },
        { id: "e-app-features", source: "app", target: "features" },
        { id: "e-app-shared", source: "app", target: "shared" },
      ],
    },
  },
};
```

- [ ] **Step 4: `src/data/projects.ts`를 zeroTrust를 포함하도록 수정 (파일 전체 교체)**

```ts
import type { Project } from "@/types";
import { zeroTrust } from "./projects/zero-trust";

// 프로젝트 목록. caseStudy를 가진 프로젝트는 케이스 스터디 레이아웃으로 렌더링됩니다.
export const projects: Project[] = [
  zeroTrust,
  {
    id: "project-beta",
    title: "프로젝트 Beta",
    period: "2022.05 - 2022.12",
    role: "Frontend",
    summary: "두 번째 프로젝트 요약.",
    stack: ["React", "TypeScript", "Zustand"],
    highlights: ["핵심 성과 1", "핵심 성과 2"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
];
```

- [ ] **Step 5: 테스트 통과 확인**

Run: `npm test`
Expected: PASS (Task 2의 4개 + 이번 2개 = 총 6 tests)

---

### Task 4: ArchitectureDiagram — React Flow 세그먼트 토글 (재작성)

**Files:**
- Modify(전체 교체): `src/components/project/ArchitectureDiagram.tsx`

**Interfaces:**
- Consumes: `selectGraph` (`@/lib/arch`), 타입 `Project["architecture"]`
- Produces: `<ArchitectureDiagram architecture={...} />` — prop `architecture: NonNullable<Project["architecture"]>`

**검증 방식:** React Flow는 DOM 계측(ResizeObserver 등)에 의존해 node 환경 단위 테스트에 부적합하다. 이 태스크는 `npm run build`(타입) + `npm run lint` + 아래 수동 체크리스트로 검증한다.

- [ ] **Step 1: 컴포넌트 전체 교체 (`src/components/project/ArchitectureDiagram.tsx`)**

```tsx
"use client";

import { useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Position,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { selectGraph } from "@/lib/arch";
import type { Project } from "@/types";

type Architecture = NonNullable<Project["architecture"]>;

const rootStyle = {
  background: "#18181b",
  color: "#fafafa",
  border: "1px solid #18181b",
  borderRadius: 12,
  padding: 8,
  fontWeight: 600,
  fontSize: 13,
  width: 220,
} as const;

const leafStyle = {
  background: "#f4f4f5",
  color: "#27272a",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 12,
  padding: 8,
  fontSize: 12,
  width: 160,
} as const;

const MODES = ["before", "after"] as const;

export default function ArchitectureDiagram({
  architecture,
}: {
  architecture: Architecture;
}) {
  const [mode, setMode] = useState<(typeof MODES)[number]>("before");

  const { nodes, edges } = useMemo(() => {
    const graph = selectGraph(architecture, mode);
    const nodes: Node[] = graph.nodes.map((n) => ({
      id: n.id,
      position: n.position,
      data: { label: n.label },
      style: n.variant === "root" ? rootStyle : leafStyle,
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    }));
    const edges: Edge[] = graph.edges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      animated: true,
    }));
    return { nodes, edges };
  }, [architecture, mode]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="아키텍처 전환 단계"
        className="mb-3 inline-flex rounded-lg border border-black/[.08] p-0.5 dark:border-white/[.14]"
      >
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
              mode === m
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="h-[340px] w-full overflow-hidden rounded-xl border border-black/[.08] dark:border-white/[.12]">
        <ReactFlow
          key={mode}
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          colorMode="system"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          preventScrolling={false}
        >
          <Background />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}
```

> 참고: `zoomOnScroll={false}` + `preventScrolling={false}`로 페이지 스크롤이 다이어그램에 갇히지 않게 한다. 확대/축소는 좌하단 Controls 버튼으로 제공.

- [ ] **Step 2: 빌드 확인**

Run: `npm run build`
Expected: PASS. React Flow는 클라이언트 컴포넌트이므로 SSR 단계에서 문제없이 정적 생성되어야 한다. 만약 "window is not defined" 류 에러가 나면 `ArchitectureDiagram`이 `"use client"`인지 확인.

- [ ] **Step 3: 린트 확인**

Run: `npm run lint`
Expected: PASS

---

### Task 5: MonitoringMockup → ImprovementSummary 전환

**Files:**
- Create: `src/components/project/ImprovementSummary.tsx`
- Delete: `src/components/project/MonitoringMockup.tsx`

**Interfaces:**
- Consumes: `Card` (`@/components/ui/Card`)
- Produces: `<ImprovementSummary items={string[]} />`

**검증 방식:** 순수 프레젠테이션 컴포넌트. `npm run build` + `npm run lint`로 검증.

- [ ] **Step 1: `ImprovementSummary.tsx` 생성**

```tsx
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
```

- [ ] **Step 2: `MonitoringMockup.tsx` 삭제**

```bash
rm src/components/project/MonitoringMockup.tsx
```

Expected: 이 시점에 `MonitoringMockup`을 import하는 곳은 기존 `ProjectSection.tsx` 뿐이며, Task 6에서 교체된다. 따라서 이 순서(5→6)로 진행하되, **Task 5 단독으로는 빌드가 실패할 수 있으므로**(ProjectSection이 아직 옛 import 보유) Task 5의 빌드 검증은 Task 6과 함께 수행한다.

---

### Task 6: ProjectSection — 케이스 스터디 렌더링 (재작성)

**Files:**
- Modify(전체 교체): `src/components/sections/ProjectSection.tsx`

**Interfaces:**
- Consumes: `projects` (`@/data/projects`), `Card`, `Tag`, `Reveal`, `ArchitectureDiagram`, `ImprovementSummary`, 타입 `Project`
- Produces: `<ProjectSection />` (default export)

**검증 방식:** `npm run build` + `npm run lint` + 수동 확인.

- [ ] **Step 1: 컴포넌트 전체 교체 (`src/components/sections/ProjectSection.tsx`)**

```tsx
import { projects } from "@/data/projects";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import ArchitectureDiagram from "@/components/project/ArchitectureDiagram";
import ImprovementSummary from "@/components/project/ImprovementSummary";
import type { Project } from "@/types";

function NarrativeBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </h4>
      <div className="mt-2 text-zinc-600 dark:text-zinc-400">{children}</div>
    </div>
  );
}

function CaseStudyCard({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-zinc-500">{project.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-zinc-500">{project.role}</p>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.summary}</p>

      {project.responsibilities && project.responsibilities.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            주요 담당
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.responsibilities.map((r) => (
              <Tag key={r}>{r}</Tag>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 space-y-5">
        <NarrativeBlock label="Background">
          <p>{cs.background}</p>
        </NarrativeBlock>
        <NarrativeBlock label="Challenge">
          <p>{cs.challenge}</p>
        </NarrativeBlock>
        <NarrativeBlock label="Solution">
          <p>{cs.solution.summary}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {cs.solution.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </NarrativeBlock>
      </div>

      {project.architecture && (
        <div className="mt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Architecture Transition
          </h4>
          <div className="mt-3">
            <ArchitectureDiagram architecture={project.architecture} />
          </div>
        </div>
      )}

      <div className="mt-8">
        <ImprovementSummary items={cs.improvements} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-zinc-500">{project.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-zinc-500">{project.role}</p>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.summary}</p>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}

export default function ProjectSection() {
  return (
    <section id="projects" className="scroll-mt-16 py-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
        </Reveal>
        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              {project.caseStudy ? (
                <CaseStudyCard project={project} />
              ) : (
                <ProjectCard project={project} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 빌드 확인 (Task 5의 삭제 포함 최종 상태)**

Run: `npm run build`
Expected: PASS. `MonitoringMockup`/`WorkflowDemo`를 import하는 곳이 없어야 한다.

- [ ] **Step 3: 린트 확인**

Run: `npm run lint`
Expected: PASS (미사용 import 경고 없음)

- [ ] **Step 4: 전체 테스트 확인**

Run: `npm test`
Expected: PASS (총 6 tests)

---

### Task 7: 최종 검증 (수동)

**Files:** (변경 없음 — 검증 전용)

- [ ] **Step 1: 개발 서버 실행 후 수동 확인**

Run: `npm run dev` → http://localhost:3000 접속

체크리스트:
- Projects 섹션 최상단에 "Zero Trust Security Platform" 케이스 스터디가 보인다.
- 주요 담당 7개 태그가 표시된다.
- Background / Challenge / Solution 내러티브가 순서대로 보인다.
- Architecture Transition 다이어그램에서 `[ Before | After ]` 토글이 동작하고, Before는 Angular Host→React Widget A/B/C, After는 React 통합 App→공통 인증/Layout/Feature Modules/Shared Components 구조가 보인다.
- 좌하단 Controls로 확대/축소·fitView가 동작한다.
- 개선 효과 패널에 ✓ 체크리스트 5개가 보인다.
- 두 번째 프로젝트(프로젝트 Beta)는 기존 간단 카드로 보인다.
- 다크모드(OS 설정)에서 토글·다이어그램·카드가 정상 표기된다.
- 브라우저 폭을 좁혔을 때 레이아웃이 깨지지 않는다.

- [ ] **Step 2: WorkflowDemo 미사용 확인**

Run: `grep -r "WorkflowDemo" src/`
Expected: `src/components/project/WorkflowDemo.tsx` 파일 정의만 나오고, 이를 import하는 곳은 없어야 한다 (보존만, 미사용).

---

## Self-Review

**Spec coverage:**
- §2 결정(React Flow/토글/읽기전용/정성 개선/WorkflowDemo 제외) → Task 4, 5, 7 반영 ✅
- §3 데이터 모델 → Task 2 ✅
- §4 데이터 파일 구조 → Task 3 ✅
- §5 콘텐츠(제목/역할/책임/내러티브) → Task 3 데이터 + Task 6 렌더링 ✅
- §6 그래프 데이터 → Task 3 ✅
- §7 컴포넌트 변경 → Task 4/5/6 ✅
- §8 의존성(@xyflow/react) → Task 1 ✅
- §10 검증(lint/build/수동) → 각 태스크 + Task 7 ✅

**Placeholder scan:** "TBD/TODO/적절히 처리" 류 없음. period만 의도된 플레이스홀더(`"재직 기간 미정"`, Global Constraints에 명시). ✅

**Type consistency:** `selectGraph`/`validateGraph` 시그니처가 Task 2 정의와 Task 3·4 사용에서 일치. `ArchitectureDiagram`의 prop `architecture` 타입이 Task 4 정의와 Task 6 사용에서 일치. `ImprovementSummary`의 prop `items: string[]`가 Task 5·6에서 일치. ✅
