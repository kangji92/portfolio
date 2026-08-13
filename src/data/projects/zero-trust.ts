import type { Project } from "@/types";

export const zeroTrust: Project = {
  id: "zero-trust-security-platform",
  title: "INI-ICAM — 제로트러스트 통합 접근 관리(ICAM) 플랫폼",
  period: "2025 - 현재",
  role: "Front-end Developer",
  detailHref: "/projects/ini-icam",
  summary:
    "신원 등록부터 자원 접근까지 사용자 여정 전체를 관리하는 제로트러스트 기반 통합 접근 관리(ICAM) 플랫폼. 인가·지속 평가·거버넌스 영역을 제공하고, 자사 제품·고객의 기존 시스템과 결합해 ICAM 전 영역을 완성한다. 이 플랫폼의 관리자 콘솔 프론트엔드를 개발하고, MFE 구조에서 React 기반 통합 구조로의 전환을 주도했다.",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Angular",
    "single-spa",
    "React Flow",
    "TanStack Query",
    "ECharts",
    "d3",
    "Radix UI",
    "Tailwind CSS",
    "Storybook",
    "Playwright",
  ],
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
  contributions: [
    {
      category: "제품 개발",
      items: [
        "관리자 콘솔 — 정책·사용자·권한 관리 UI 개발",
        "Workflow Editor — React Flow 기반 노드 에디터로 워크플로우를 시각적으로 구성·편집",
        "모니터링 / 데이터 시각화 — 운영 지표 대시보드 및 데이터 시각화 구현",
      ],
    },
    {
      category: "품질 & 자동화",
      items: [
        "E2E 테스트 자동화 — Playwright로 핵심 사용자 시나리오 자동화",
        "단위 테스트 — 커버리지 80% 이상 유지로 코드 품질 확보",
        "문서화 자동화 — Playwright를 활용해 관리자 콘솔 사용 가이드 문서화",
        "AI 활용 — Claude Code·Codex로 테스트 코드 생성·보강, SonarQube 분석 결과 기반 코드 품질 개선, 데모 데이터 시드 자동화",
      ],
    },
  ],
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
