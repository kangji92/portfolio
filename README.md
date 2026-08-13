# Kang JiYeon — Frontend Portfolio

[![CI](https://github.com/kangji92/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kangji92/portfolio/actions/workflows/ci.yml)

경력 중심 프론트엔드 포트폴리오. Next.js · TypeScript · Tailwind CSS로 구축했으며,
인터랙티브 제품 데모(관리자 콘솔·인증 모달)와 ⌘K 커맨드 팔레트를 포함합니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router) · React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Diagram / UI**: React Flow (아키텍처 다이어그램·워크플로우 에디터 데모)
- **Test**: Vitest

## 구조

```
src/
├─ app/                     # 라우트 (홈 + /projects/ini-icam, /projects/inihub 상세)
├─ components/
│  ├─ layout/               # Header(⌘K 검색) · Footer
│  ├─ sections/             # Profile · Career · Projects · Skills
│  ├─ project/              # 아키텍처 다이어그램 · 개선 효과
│  ├─ console/              # INI-ICAM 관리자 콘솔 목업 (7뷰)
│  └─ inihub/               # INIHUB 인증 모달 목업
├─ data/                    # 경력·프로젝트·스킬 데이터
└─ lib/                     # 순수 로직 (+ 테스트)
```

## 개발

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm test           # Vitest
npm run build      # 프로덕션 빌드
```

## 배포

`main`에 push하면 [Vercel](https://vercel.com)이 자동 배포합니다.

## 관련 프로젝트

- [ai-fe-harness](https://github.com/kangji92/ai-fe-harness) — 이 포트폴리오를 구축한 AI 기반 프론트엔드 개발 하네스 (dogfooding)

> 우측 하단 **PDF 저장** 버튼으로 이력서형 PDF를 내려받을 수 있습니다.
