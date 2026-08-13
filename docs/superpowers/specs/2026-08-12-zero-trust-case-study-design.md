# Zero Trust 프로젝트 케이스 스터디 — 설계 문서

- 작성일: 2026-08-12
- 대상: 포트폴리오의 대표(featured) 프로젝트 "Zero Trust 보안 솔루션"
- 목표: MFE(single-spa) 구조에서 React 통합 구조로의 **아키텍처 전환 서사**를, 인터랙티브 다이어그램과 케이스 스터디 형식으로 보여준다.

## 1. 배경 / 목표

경력 중심 포트폴리오에서 아키텍처 의사결정과 마이그레이션 경험을 증명하는 핵심 프로젝트다.
스토리 구조는 Background → Challenge → Solution → Architecture Transition으로 구성하며,
전환의 before/after를 React Flow 기반 인터랙티브 다이어그램으로 시각화한다.

## 2. 확정된 설계 결정

| 항목 | 결정 |
|------|------|
| 다이어그램 구현 | React Flow (`@xyflow/react`) — 보유 스킬 자기증명 효과 |
| 다이어그램 UX | Before / After 세그먼트 토글 (하나의 캔버스에서 전환) |
| 다이어그램 상호작용 | 팬/줌/컨트롤 O, 노드 편집·연결 X (읽기 전용 showcase) |
| 개선 효과 표현 | 정성적 체크리스트 패널 (가짜 정량 수치 사용 안 함) |
| WorkflowDemo | 이번 프로젝트에서 제외 (실제 콘텐츠 없음, 파일은 보존) |

## 3. 데이터 모델 (`src/types/index.ts`)

`Project`에 선택적 필드를 추가한다. 일반 프로젝트는 영향받지 않는다.

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
  /** 시각 위계: host/app = 강조, 나머지 = 일반 */
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

export interface Project {
  // ...기존 필드
  /** 프로젝트에서 담당한 주요 업무 (프로젝트 헤더에 표시) */
  responsibilities?: string[];
  caseStudy?: CaseStudy;
  architecture?: { before: ArchGraph; after: ArchGraph };
}
```

## 4. 데이터 파일 구조

Zero Trust는 콘텐츠·그래프 데이터가 커서 별도 파일로 분리한다.

```
src/data/
├─ projects.ts              # 배열 조립: [zeroTrust, ...기타 프로젝트]
└─ projects/
   └─ zero-trust.ts         # Zero Trust 프로젝트 전체 데이터
```

`projects.ts`는 `zero-trust.ts`에서 export한 프로젝트 객체를 import해 배열 맨 앞에 배치한다.

## 5. 콘텐츠 (확정 카피)

- **title**: "Zero Trust Security Platform"
- **period**: *(사용자 입력 필요 — 플레이스홀더로 진행)*
- **role**: "Front-end Developer"
- **summary**: MFE 구조로 시작해 React 통합 구조로 전환한 프론트엔드 아키텍처 프로젝트.

**Responsibilities (주요 담당 — 프로젝트 헤더에 표시)**
- 프론트엔드 아키텍처 설계 및 개발
- MFE 통합 구조 개발
- React 기반 통합 구조 전환
- 관리자 콘솔 개발
- Workflow Editor 개발
- 모니터링 / 데이터 시각화
- 테스트 자동화 및 품질 개선

> 참고: "Workflow Editor 개발"은 React Flow 사용의 실제 근거일 가능성이 높다. 이번 범위에서는
> 담당 업무 목록으로만 노출하고, Workflow Editor 자체의 상세 쇼케이스는 후속 작업으로 둔다.

**Background**
초기에는 기존 Angular 기반 Host의 인증 및 공통 기능을 유지하면서 신규 서비스를 React Widget으로 개발하기 위해 MFE(Micro Frontend) 구조를 적용했습니다.

**Challenge**
프로젝트가 확장되면서 레거시 Angular 환경의 의존성 충돌 및 호환성 문제 해결에 지속적인 비용이 발생했고, Angular와 React를 함께 운영함에 따라 공통 기능과 개발 환경을 관리하는 복잡도도 증가했습니다.

**Solution (summary)**
기존 구조를 지속적으로 보완하는 것보다 장기적인 유지보수성과 개발 효율성을 고려하여 React 기반의 통합 프론트엔드 구조로 전환했습니다.

**Solution (points)**
- Angular / React 이중 기술 스택을 React로 단일화
- 레거시 Angular 의존성 및 호환성 관리 부담 감소
- 인증·레이아웃 등 공통 기능 관리 구조 단순화
- 프로젝트 개발 환경 및 유지보수 체계 일원화
- 프론트엔드 개발 생산성 및 확장성 개선

**Improvements (정성적 개선 효과 — 개선 효과 패널)**
- 기술 스택 단일화 (Angular + React → React)
- 레거시 Angular 의존성·호환성 충돌 해소
- 공통 기능(인증·레이아웃) 관리 일원화
- 런타임 프레임워크 중복 로드 제거
- 개발 환경·유지보수 체계 단순화

## 6. 아키텍처 그래프 데이터

**Before (MFE / single-spa)**
- root: `Angular Host (인증 · 공통 기능)`
- leaf: `React Widget A`, `React Widget B`, `React Widget C`
- edges: Host → 각 Widget

**After (React 통합)**
- root: `React 통합 Application`
- leaf: `공통 인증`, `Layout`, `Feature Modules`, `Shared Components`
- edges: App → 각 leaf

노드 좌표는 `zero-trust.ts`에 정적으로 정의한다 (React Flow는 좌표 기반). root는 상단 중앙, leaf는 하단에 가로로 분산 배치.

## 7. 컴포넌트 변경

### 7.1 `src/components/project/ArchitectureDiagram.tsx` (재작성)
- `"use client"` 컴포넌트
- props: `before: ArchGraph`, `after: ArchGraph`
- 로컬 state `mode: "before" | "after"`, 상단 세그먼트 토글로 전환
- React Flow 렌더링:
  - `import { ReactFlow, Background, Controls } from "@xyflow/react"`
  - `import "@xyflow/react/dist/style.css"`
  - `fitView`, `nodesDraggable={false}`, `nodesConnectable={false}`, `elementsSelectable={false}`
  - 고정 높이 컨테이너 (예: `h-[320px]`)
  - 커스텀 노드 스타일: `variant==="root"`는 강조(진한 배경), `leaf`는 일반
- 다크모드 대응 (React Flow 컨테이너 배경/노드 색상)

### 7.2 `src/components/project/MonitoringMockup.tsx` → 개선 효과 패널로 전환
- 파일명을 `ImprovementSummary.tsx`로 변경 (역할과 이름 일치)
- props: `items: string[]`
- 체크(✓) 아이콘 + 항목 리스트를 `Card`로 렌더링
- 제목: "개선 효과 (Before → After)"

### 7.3 `src/components/project/WorkflowDemo.tsx`
- 이번 프로젝트에서 사용하지 않음. 파일은 보존(향후 실제 플로우 콘텐츠 추가 시 재사용).

### 7.4 `src/components/sections/ProjectSection.tsx` (featured 렌더링 확장)
featured 프로젝트가 `caseStudy`/`architecture`를 가지면 아래 순서로 렌더링:
1. 프로젝트 헤더 (제목 · 기간 · 역할 · 요약)
2. 주요 담당 (`responsibilities`) — 태그/불릿 형태
3. Background → Challenge → Solution(요약 + 5개 불릿) 내러티브 블록
4. Architecture Transition — `ArchitectureDiagram` (세그먼트 토글)
5. 개선 효과 패널 — `ImprovementSummary`
6. 스택 태그

`caseStudy`가 없는 일반 featured 프로젝트는 기존 동작(하이라이트 + 데모)을 유지하되,
placeholder였던 Architecture/Workflow/Monitoring 3-카드 데모는 caseStudy 기반 렌더링으로 대체된다.

## 8. 의존성

- 추가: `@xyflow/react` (React Flow) 안정 버전

## 9. 범위 밖 (Out of Scope)

- 정량 성능 지표(번들 크기/로딩/빌드 시간) — 실측 데이터 없어 도입하지 않음
- WorkflowDemo 콘텐츠 — 이번 범위 아님
- 프로젝트 정확한 제품명/기간/역할 — 사용자 입력으로 후속 반영

## 10. 검증

- `npm run lint` 통과
- `npm run build` 통과 (React Flow 클라이언트 컴포넌트 SSR 이슈 없이 정적 생성되는지 확인)
- 로컬에서 세그먼트 토글 동작 및 다크모드 확인
