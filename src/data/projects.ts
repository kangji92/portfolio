import type { Project } from "@/types";
import { zeroTrust } from "./projects/zero-trust";

// 프로젝트 목록. caseStudy를 가진 프로젝트는 케이스 스터디 레이아웃으로 렌더링됩니다.
export const projects: Project[] = [
  zeroTrust,
  {
    id: "ai-fe-harness",
    title: "AI Front-end Harness",
    period: "2026",
    role: "Personal Project",
    summary:
      "Markdown 개발 표준을 AI 에이전트가 읽고 컴포넌트·테스트를 일관되게 생성하는 프론트엔드 개발 하네스.",
    stack: [
      "Node.js",
      "TypeScript",
      "React",
      "Vitest",
      "Testing Library",
      "GitHub Actions",
    ],
    highlights: [
      "Markdown 개발 표준(standards · AGENTS.md)을 단일 진실 소스로 수립",
      "표준을 강제하는 컴포넌트 스캐폴더 + 재사용 프롬프트 라이브러리 구축",
      "SonarQube 리포트 → AI 개선 → 재검증 품질 루프 설계",
      "본 포트폴리오를 동일 접근으로 구축 (dogfooding)",
    ],
    detailHref: "/projects/ai-fe-harness",
    detailLabel: "개발 파이프라인 상세 보기",
    links: [
      { label: "GitHub", href: "https://github.com/kangji92/ai-fe-harness" },
    ],
  },
  {
    id: "mediawill-flea-market",
    title: "미디어윌 벼룩시장 통합 플랫폼 구축",
    period: "2024.06 - 2024.12",
    role: "Front-end Developer",
    summary:
      "Vue.js 기반 벼룩시장 통합 플랫폼의 프론트엔드 UI 개발 및 서비스 안정화에 참여한 프로젝트.",
    stack: ["Vue.js", "JavaScript", "Vuetify", "CKEditor", "Storybook"],
    highlights: [
      "통합 테스트 단계에 투입되어 화면 및 UI 기능 관련 이슈 분석·개선",
      "테스트 과정에서 발견된 UI 오류 및 기존 구현 이슈 수정",
      "공유용 UI 산출물을 Storybook으로 제작·문서화하여 협업 효율 향상",
      "약 6개월간 프로젝트 현장에 참여하여 통합 테스트 및 서비스 안정화 대응",
    ],
    links: [{ label: "서비스 바로가기", href: "https://www.findjob.co.kr/" }],
  },
  {
    id: "inihub",
    title: "INIHUB — 통합 인증 플랫폼",
    period: "2022 - 2024",
    role: "Front-end Developer",
    summary:
      "사설인증·본인인증·2차 인증·전자서명 등 다양한 인증 수단을 하나로 통합하는 인증통합플랫폼의 프론트엔드 UI를 개발한 프로젝트.",
    stack: ["Vue 3", "Vue 2", "TypeScript", "JavaScript", "Sass (SCSS)"],
    highlights: [
      "다양한 인증 수단을 통합하는 모달 형태의 인증 UI 개발",
      "Cloud 형(Vue 3 / TypeScript)·On-premise 형(Vue 2 / JavaScript)을 각각 개발·출시",
      "약 1~2년간 지속 개발 및 기능 고도화",
    ],
    detailHref: "/projects/inihub",
    links: [{ label: "제품 소개", href: "https://www.inihub.biz/" }],
  },
];
