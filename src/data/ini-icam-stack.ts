// INI-ICAM 상세 페이지용 상세 기술 스택 + 품질·보안 파이프라인.

export interface StackGroup {
  area: string;
  items: string[];
}

export const iniIcamStack: StackGroup[] = [
  { area: "코어", items: ["React 18", "TypeScript 5", "Vite 6"] },
  {
    area: "상태 관리",
    items: ["Zustand (클라이언트)", "TanStack Query (서버 상태)"],
  },
  { area: "라우팅", items: ["React Router v7 (Data Router)"] },
  {
    area: "UI 시스템",
    items: [
      "Tailwind CSS 3",
      "Radix UI",
      "shadcn/ui 패턴",
      "lucide-react",
      "FontAwesome",
      "class-variance-authority",
      "tailwind-merge",
    ],
  },
  {
    area: "플로우 에디터",
    items: ["React Flow (@xyflow/react)", "elkjs (자동 배치)", "d3", "d3-org-chart"],
  },
  { area: "차트 / 시각화", items: ["ECharts", "Recharts"] },
  {
    area: "코드 에디터",
    items: ["CodeMirror (@uiw)", "JSON view / lang (정책·YAML 편집)"],
  },
  { area: "통신", items: ["axios", "jwt-decode"] },
  {
    area: "유틸",
    items: ["uuid", "diff", "web-worker", "resize-observer-polyfill"],
  },
];

export const iniIcamPipeline: StackGroup[] = [
  {
    area: "테스트",
    items: [
      "Vitest 4",
      "Testing Library",
      "jest-axe (접근성)",
      "MSW (API 목)",
      "axios-mock-adapter",
      "v8 커버리지",
    ],
  },
  { area: "문서화", items: ["Storybook 10 (MSW · a11y 애드온)"] },
  {
    area: "정적분석 / 보안",
    items: [
      "ESLint 9",
      "Prettier",
      "SonarQube (sonar-scanner)",
      "Fortify SAST",
      "knip (데드코드)",
      "CycloneDX (SBOM)",
      "license-checker",
    ],
  },
  { area: "스캐폴딩", items: ["Plop (feature · screen 템플릿)"] },
  {
    area: "배포",
    items: [
      "Docker (node:22-alpine → nginx-unprivileged 1.30)",
      "nginx conf",
      "Jenkinsfile",
      "dev:mock (MSW) · dev:single · dev:ha",
    ],
  },
];
