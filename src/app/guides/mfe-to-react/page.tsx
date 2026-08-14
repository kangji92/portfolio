import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

const guide = guides.find((g) => g.slug === "mfe-to-react")!;

export const metadata: Metadata = {
  title: `${guide.title} — Kang JiYeon`,
  description: guide.description,
};

export default function MfeToReactGuide() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <Link
        href="/guides"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Notes
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          {guide.date} · {guide.readingTime} · {guide.tags.join(" · ")}
        </p>
      </header>

      <article className="prose prose-zinc mt-10 max-w-3xl dark:prose-invert prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-xl">
        <p>
          제로트러스트 접근 관리 플랫폼의 관리자 콘솔을 개발하며, 우리는 처음에
          MFE(Micro Frontend) 구조로 시작했다가 이후 React 기반 통합 구조로
          전환했다. 이 글은 왜 MFE로 시작했고, 무엇이 문제였으며, 어떻게 통합
          구조로 옮겼는지에 대한 기록이다.
        </p>

        <h2>배경: 왜 MFE로 시작했나</h2>
        <p>
          기존 Host는 Angular로 작성되어 있었고 인증과 공통 기능을 담당하고
          있었다. 여기에 신규 서비스를 빠르게 얹어야 했는데, Host 전체를 다시
          쓰는 대신 신규 화면을 React Widget으로 개발하기로 했다. 서로 다른
          프레임워크를 한 페이지에서 구동하기 위해 <strong>single-spa</strong>를
          도입했다 — 루트 설정이 Angular Host(shell)와 여러 React Widget을
          마운트·언마운트하는 구조였다.
        </p>
        <p>
          React Widget은 <strong>Shadow DOM</strong>으로 격리해 빌드했다. Angular
          Host의 전역 스타일과 위젯 스타일이 서로 침범하지 않도록, 각 위젯을 자체
          Shadow Root 안에 마운트한 것이다. 이 격리 구성과 경계 비용, 그리고
          BroadcastChannel로 인증을 넘긴 이야기는{" "}
          <Link href="/guides/shadow-dom-mfe">Shadow DOM 격리 가이드</Link>에서
          자세히 다룬다.
        </p>
        <p>
          MFE는 이 상황에서 합리적인 선택이었다. 레거시를 유지하면서 신규 스택을
          점진적으로 도입할 수 있었고, 기능 단위로 독립 개발·배포가 가능했다.
        </p>

        <h2>MFE가 남긴 비용</h2>
        <p>프로젝트가 커지면서 &ldquo;경계 비용&rdquo;이 쌓이기 시작했다.</p>
        <ul>
          <li>
            <strong>이중 런타임</strong> — Angular와 React를 동시에 로드하면서
            초기 로딩과 번들이 무거워졌다.
          </li>
          <li>
            <strong>의존성·호환성</strong> — 두 생태계의 라이브러리와 버전이
            얽히며 충돌 해결에 지속적인 비용이 들었다.
          </li>
          <li>
            <strong>공통 기능 이중 관리</strong> — 인증·레이아웃 같은 공통 축을
            양쪽 스택에서 맞춰야 했다.
          </li>
          <li>
            <strong>경계의 복잡도</strong> — Host와 Widget 사이의 상태 공유·라우팅
            동기화가 늘 신경 쓰였다.
          </li>
          <li>
            <strong>Shadow DOM 경계</strong> — 스타일 격리는 얻었지만, 전역
            스타일(폰트·디자인 토큰) 주입, 이벤트 전파, 포커스 처리가 경계를
            넘느라 그만큼 손이 갔다.
          </li>
        </ul>
        <p>
          요점은 MFE 자체가 나빴다는 게 아니다. 이 프로젝트가 그 경계 비용을 계속
          지불할 만한 상황이 아니게 됐다는 것이다.
        </p>

        <h2>전환 판단: 보완할까, 재구성할까</h2>
        <p>
          두 갈래였다. 기존 구조를 계속 보완하며 버틸 것인가, React로 통합할
          것인가. 우리는 장기 유지보수성과 개발 효율을 기준으로 통합을 택했다.
        </p>
        <table>
          <thead>
            <tr>
              <th>기준</th>
              <th>유지·보완</th>
              <th>React 통합</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>단기 비용</td>
              <td>낮음</td>
              <td>높음 (전환 작업)</td>
            </tr>
            <tr>
              <td>장기 유지보수</td>
              <td>계속 증가</td>
              <td>크게 감소</td>
            </tr>
            <tr>
              <td>공통 기능 관리</td>
              <td>이중</td>
              <td>일원화</td>
            </tr>
            <tr>
              <td>런타임 부담</td>
              <td>지속</td>
              <td>제거</td>
            </tr>
          </tbody>
        </table>
        <p>
          단기 비용은 통합이 크지만, 경계 비용이 시간이 갈수록 커지는
          구조였기에 장기적으로는 통합이 유리하다고 판단했다.
        </p>

        <h2>어떻게 옮겼나: 빅뱅이 아니라 경계 좁히기</h2>
        <p>
          한 번에 갈아엎지 않았다. 핵심은 &ldquo;경계를 점진적으로 좁혀가는
          것&rdquo;이었다.
        </p>
        <ol>
          <li>
            <strong>공통 축부터</strong> — 인증·레이아웃 등 공통 기능을 React
            쪽으로 먼저 정리해 단일 소스로 만들었다.
          </li>
          <li>
            <strong>기능 단위 이관</strong> — Angular Host가 담당하던 화면을
            Feature Module 단위로 React로 옮겼다.
          </li>
          <li>
            <strong>경계 제거</strong> — 이관이 끝난 부분부터 single-spa 마운트
            경계를 걷어냈다.
          </li>
          <li>
            <strong>단계마다 배포 가능하게</strong> — 전환 중에도 서비스가 계속
            동작하도록, 각 단계를 릴리스 가능한 상태로 유지했다.
          </li>
        </ol>

        <h2>Before / After</h2>
        <p>
          <strong>Before (MFE · single-spa)</strong>
        </p>
        <pre>
          <code>{`Angular Host (인증 · 공통 기능)
        ↓
React Widget A / B / C`}</code>
        </pre>
        <p>
          <strong>After (React 통합)</strong>
        </p>
        <pre>
          <code>{`React 통합 Application
        ↓
공통 인증 · Layout · Feature Modules · Shared Components`}</code>
        </pre>
        <p>
          이 전환의 인터랙티브 다이어그램(Before/After 토글)은{" "}
          <Link href="/projects/ini-icam">INI-ICAM 상세 페이지</Link>에서 직접
          볼 수 있다.
        </p>

        <h2>결과</h2>
        <ul>
          <li>기술 스택 단일화 (Angular + React → React)</li>
          <li>레거시 Angular 의존성·호환성 관리 부담 감소</li>
          <li>인증·레이아웃 등 공통 기능 관리 일원화</li>
          <li>런타임 프레임워크 중복 로드 제거</li>
          <li>개발 환경·유지보수 체계 일원화 → 생산성·확장성 개선</li>
        </ul>

        <h2>배운 것</h2>
        <ul>
          <li>
            MFE는 &ldquo;조직·스택 경계&rdquo;를 다루기 위한 도구지, 그 자체로
            좋은 아키텍처는 아니다. 경계 비용을 계속 낼 가치가 있을 때만
            유효하다.
          </li>
          <li>
            전환은 빅뱅이 아니라 경계를 좁혀가는 점진적 작업이어야 한다. 그래야
            리스크가 통제된다.
          </li>
          <li>
            아키텍처 결정은 되돌릴 수 있어야 한다. MFE에서 통합으로 되돌아간
            것처럼, &ldquo;지금의 최선&rdquo;이 &ldquo;영원한 최선&rdquo;은
            아니다.
          </li>
        </ul>
      </article>

      <div className="mt-12 border-t border-black/[.06] pt-6 dark:border-white/[.08]">
        <Link
          href="/projects/ini-icam"
          className="text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          이 전환이 적용된 프로젝트: INI-ICAM 관리자 콘솔 →
        </Link>
      </div>
    </section>
  );
}
