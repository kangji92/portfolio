export interface Guide {
  slug: string;
  title: string;
  description: string;
  /** 예: "2026.08" */
  date: string;
  /** 예: "6분" */
  readingTime: string;
  tags: string[];
}

// 기술 가이드 목록. 각 가이드는 src/app/guides/<slug>/page.tsx 로 작성됩니다.
export const guides: Guide[] = [
  {
    slug: "mfe-to-react",
    title: "MFE에서 React 통합 구조로 — 왜, 어떻게 전환했나",
    description:
      "single-spa 기반 Angular Host + React Widget 구조를 React 통합 구조로 옮긴 판단과 과정에 대한 기록.",
    date: "2026.05",
    readingTime: "6분",
    tags: ["Architecture", "MFE", "Shadow DOM", "React", "Migration"],
  },
  {
    slug: "mfe-auth-sync",
    title: "인증 아키텍처: MFE 통합에서 React 단독 운영으로",
    description:
      "Angular Host와 세션을 공유하던 MFE 인증(쿠키·이벤트·갱신 위임)을, React 단독 운영으로 전환하며 자체 인증으로 단순화한 과정.",
    date: "2026.05",
    readingTime: "8분",
    tags: ["Auth", "MFE", "React", "BroadcastChannel"],
  },
  {
    slug: "shadow-dom-mfe",
    title: "Angular Host 위에 React 위젯을 Shadow DOM으로 격리하기",
    description:
      "서로 다른 스택의 위젯을 한 페이지에 얹으며 Shadow DOM으로 스타일을 격리한 구성과, 그 경계가 남긴 비용.",
    date: "2026.02",
    readingTime: "5분",
    tags: ["Shadow DOM", "MFE", "Web Components", "Architecture"],
  },
  {
    slug: "ckeditor-paste-styling",
    title: "CKEditor 붙여넣기 지옥 — 강제로 딸려오는 스타일과 싸운 기록",
    description:
      "복사·붙여넣기 시 딸려오는 인라인 스타일·패딩·여백 문제와, CKEditor 4·5가 이를 다루는 방식 비교.",
    date: "2024.10",
    readingTime: "6분",
    tags: ["CKEditor", "WYSIWYG", "Debugging", "Frontend"],
  },
];
