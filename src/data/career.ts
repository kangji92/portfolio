import type { CareerItem } from "@/types";

// 경력 타임라인 데이터. 최신 경력이 위로 오도록 정렬해서 사용하세요.
export const career: CareerItem[] = [
  {
    company: "이니텍(주)",
    role: "Frontend Developer",
    start: "2019-09",
    end: null,
    summary: "보안 솔루션 프론트엔드 개발 및 아키텍처 설계·개선 담당.",
    highlights: [
      "Zero Trust 보안 플랫폼(INI-ICAM) 프론트엔드 아키텍처 설계 및 MFE → React 통합 구조 전환 주도",
      "통합 인증 플랫폼(INIHUB) Cloud·On-premise 프론트엔드 개발 및 기능 고도화",
      "E2E 테스트 자동화(Playwright) 및 단위 테스트 커버리지 80% 이상 유지로 품질 개선",
    ],
    stack: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "React Flow",
      "Tailwind CSS",
      "Sass (SCSS)",
    ],
  },
  {
    company: "이노브",
    role: "Web Publisher",
    start: "2019-02",
    end: "2019-06",
    summary: "롯데백화점 통합 앱 UI 개발 및 운영.",
    highlights: [
      "웹 서비스 UI 구현 및 웹 퍼블리싱",
      "서비스 운영에 따른 UI 개선 및 유지보수",
    ],
    stack: ["HTML", "CSS", "jQuery"],
  },
];
