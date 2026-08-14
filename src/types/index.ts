// 포트폴리오 전역에서 공유하는 도메인 타입 정의

export interface CareerItem {
  company: string;
  role: string;
  /** ISO 형식 권장: "2022-03" */
  start: string;
  /** 재직 중이면 null */
  end: string | null;
  location?: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  /** 예: "2023.01 - 2023.08" */
  period: string;
  role: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links?: ProjectLink[];
  /** 대표 프로젝트 여부 (아키텍처/워크플로우/모니터링 데모 노출용) */
  featured?: boolean;
  responsibilities?: string[];
  caseStudy?: CaseStudy;
  architecture?: { before: ArchGraph; after: ArchGraph };
  /** 주제별 주요 성과 (제품 개발 / 품질 & 자동화 등) */
  contributions?: ContributionGroup[];
  /** 케이스 스터디 상세 페이지 경로 (예: "/projects/ini-icam") */
  detailHref?: string;
  /** 상세 링크 문구 (미지정 시 "예시 UI 상세 보기") */
  detailLabel?: string;
}

export interface SkillCategory {
  /** 예: "Frontend", "Backend", "DevOps" */
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  /** 1~5 숙련도 (선택) */
  level?: 1 | 2 | 3 | 4 | 5;
}

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

export interface ContributionGroup {
  /** 예: "제품 개발", "품질 & 자동화" */
  category: string;
  items: string[];
}
