import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

const guide = guides.find((g) => g.slug === "shadow-dom-mfe")!;

export const metadata: Metadata = {
  title: `${guide.title} — Kang JiYeon`,
  description: guide.description,
};

export default function ShadowDomMfeGuide() {
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
          React 통합 구조로 가기 전, 우리는 Angular Host 위에 React 위젯을 얹는 MFE
          구조를 운영했다. 이 글은 그 위젯들을{" "}
          <strong>Shadow DOM으로 격리해 만든 방식</strong>과, 그 경계가 남긴 비용에
          대한 기록이다. (왜 이 구조를 결국 걷어냈는지는{" "}
          <Link href="/guides/mfe-to-react">MFE → React 전환기</Link>에서 다룬다.)
        </p>

        <h2>무엇을 만들었나</h2>
        <p>
          Angular Host(shell)가 인증과 공통 기능을 담당하고, 신규 화면은 React
          위젯으로 개발했다. single-spa가 위젯을 마운트·언마운트했고, 각 React
          위젯은 자체 <strong>Shadow Root</strong> 안에 마운트해 스타일을
          격리했다.
        </p>

        <h2>왜 Shadow DOM이었나</h2>
        <p>
          서로 다른 스택·팀이 만든 위젯이 한 페이지에 공존하면 <strong>CSS 충돌</strong>이
          큰 리스크다. 전역 클래스·리셋·폰트가 서로를 덮어쓴다. Shadow DOM은{" "}
          <strong>스타일 캡슐화</strong>를 브라우저 레벨에서 제공한다 — 위젯의 CSS가
          Shadow Root 밖으로 새지 않고, 바깥 스타일도 (상속되는 일부 속성을 제외하면)
          안으로 들어오지 않는다. &ldquo;위젯은 자기 스타일만 책임진다&rdquo;는
          경계를 강제로 그을 수 있었다.
        </p>

        <h2>가장 어려웠던 것: 경계를 넘는 인증</h2>
        <p>
          인증은 Angular Host가 담당했고, 격리된 React 위젯은 그 세션을 공유해야
          했다. 프레임워크가 달라 상태를 직접 공유할 수 없어, 쿠키(공유 저장소)와
          이벤트(<code>CustomEvent</code> + <code>BroadcastChannel</code>)로 인증을
          동기화했다. 이 인증 아키텍처와, 이후 단독 운영으로 전환하며 그 계층을
          걷어낸 이야기는{" "}
          <Link href="/guides/mfe-auth-sync">인증 아키텍처 가이드</Link>에서 자세히
          다룬다.
        </p>

        <h2>경계가 남긴 비용</h2>
        <p>Shadow DOM은 격리를 주지만, 그 경계를 넘는 모든 것이 일이 된다:</p>
        <ul>
          <li>
            <strong>전역 스타일 주입</strong> — Host의 디자인 토큰·폰트·공통 CSS가
            Shadow Root 안으로 자동 상속되지 않는다. 필요한 스타일을 Shadow Root
            안에 다시 넣어줘야 했다.
          </li>
          <li>
            <strong>이벤트 retargeting</strong> — Shadow 경계를 넘는 이벤트는 target이
            Shadow Host로 재지정된다. 바깥에서 위젯 내부 요소를 직접 겨냥하는 로직은
            예상과 다르게 동작했다.
          </li>
          <li>
            <strong>포커스·선택</strong> — 포커스 이동, <code>document.activeElement</code>,
            텍스트 선택이 Shadow 경계에서 달라진다.
          </li>
          <li>
            <strong>서드파티 라이브러리</strong> — light DOM을 가정하는 라이브러리
            (포털·툴팁·모달을 <code>body</code>에 붙이는 류)는 Shadow 안에서 스타일·위치가
            어긋났다.
          </li>
        </ul>

        <h2>배운 것</h2>
        <ul>
          <li>
            Shadow DOM은 <strong>&ldquo;스타일 격리&rdquo;라는 한 가지 문제를 확실히</strong>{" "}
            푼다. 하지만 격리는 공짜가 아니라, <strong>경계를 넘는 모든 상호작용에
            비용</strong>을 매긴다.
          </li>
          <li>
            상태 공유는 프레임워크가 아니라 <strong>플랫폼(BroadcastChannel 같은
            브라우저 기본기)</strong>으로 풀면 스택에 묶이지 않는다. 대신 이벤트
            모델의 한계(초기 상태·순서·레이스)를 직접 메워야 한다.
          </li>
          <li>
            격리가 정말 필요한지 먼저 묻는다. CSS 충돌이 실제 위협일 때는 값어치가
            있지만, 그렇지 않으면 경계 비용이 더 크다. 이 비용이 쌓인 것이 이후{" "}
            <Link href="/guides/mfe-to-react">React 통합 구조로 전환</Link>한 이유 중
            하나였다.
          </li>
        </ul>
      </article>
    </section>
  );
}
