// INIHUB 상세 페이지용 — On-premise(v1) vs Cloud(v2) 스택 비교.

export interface StackCompareRow {
  area: string;
  /** On-premise 형 (Vue 2 / JavaScript) */
  v1: string[];
  /** Cloud 형 (Vue 3 / TypeScript) */
  v2: string[];
}

export const inihubStack: StackCompareRow[] = [
  { area: "프레임워크", v1: ["Vue 2.6"], v2: ["Vue 3.2"] },
  { area: "언어", v1: ["JavaScript"], v2: ["TypeScript 4.9"] },
  { area: "빌드", v1: ["Vue CLI 4"], v2: ["Vue CLI 5"] },
  {
    area: "상태 관리",
    v1: ["Vuex 3"],
    v2: ["Vuex 4", "vuex-module-decorators"],
  },
  {
    area: "컴포넌트 스타일",
    v1: ["Options API"],
    v2: ["vue-class-component", "vue-property-decorator"],
  },
  {
    area: "스타일",
    v1: ["Sass / SCSS (node-sass)"],
    v2: ["Sass / SCSS (dart-sass)"],
  },
  { area: "HTTP", v1: ["axios 0.21"], v2: ["axios 1.3"] },
  { area: "i18n", v1: ["—"], v2: ["vue-i18n 9"] },
  {
    area: "기타",
    v1: ["jQuery", "vue-slick-carousel", "vuedraggable", "css-vars-ponyfill"],
    v2: ["FocusTrap", "네이티브 CSS 변수 테마"],
  },
];
