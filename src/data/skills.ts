import type { SkillCategory } from "@/types";

// 기술 스택. 카테고리별로 그룹핑해서 노출합니다.
// level(1~5)은 선택 항목이라 비워뒀습니다. 원하면 각 item에 level을 추가하세요.
export const skills: SkillCategory[] = [
  {
    category: "Frameworks",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Angular" },
    ],
  },
  {
    category: "Language",
    items: [{ name: "TypeScript" }, { name: "JavaScript" }],
  },
  {
    category: "State Management",
    items: [{ name: "Zustand" }, { name: "TanStack Query" }],
  },
  {
    category: "Architecture",
    items: [{ name: "MFE (Micro Frontend)" }],
  },
  {
    category: "Data Visualization",
    items: [
      { name: "React Flow" },
      { name: "d3" },
      { name: "ECharts" },
      { name: "Recharts" },
    ],
  },
  {
    category: "Libraries & Tools",
    items: [
      { name: "Storybook" },
      { name: "CKEditor" },
      { name: "CodeMirror" },
      { name: "Vuetify" },
      { name: "jQuery" },
      { name: "i18n (vue-i18n)" },
    ],
  },
  {
    category: "Version Control",
    items: [{ name: "Git" }, { name: "GitLab" }, { name: "Bitbucket" }],
  },
  {
    category: "Testing & Quality",
    items: [{ name: "Playwright" }, { name: "Vitest" }, { name: "SonarQube" }],
  },
  {
    category: "AI-Assisted Development",
    items: [{ name: "Claude Code" }, { name: "Codex" }],
  },
  {
    category: "Styling",
    items: [{ name: "Tailwind CSS" }, { name: "Sass (SCSS)" }],
  },
];
