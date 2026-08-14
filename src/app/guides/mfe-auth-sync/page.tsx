import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

const guide = guides.find((g) => g.slug === "mfe-auth-sync")!;

export const metadata: Metadata = {
  title: `${guide.title} — Kang JiYeon`,
  description: guide.description,
};

const eventTypes = `type AuthEventType =
  // Host → 위젯
  | 'AUTH_LOGIN'
  | 'AUTH_LOGOUT'
  | 'AUTH_TOKEN_REFRESH'
  | 'AUTH_SESSION_EXPIRED'
  // 위젯 → Host
  | 'AUTH_LOGIN_REQUEST';

// 페이로드는 최소한만 — 토큰·권한은 절대 싣지 않는다(보안)
interface AuthEventPayload {
  type: AuthEventType;
  timestamp: number;
  email?: string;   // AUTH_LOGIN
  reason?: 'unauthenticated' | 'session_expired' | 'refresh_failed' | 'forbidden';
}`;

export default function MfeAuthSyncGuide() {
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

      <article className="prose prose-zinc mt-10 max-w-3xl dark:prose-invert prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-xl prose-h3:text-base">
        <p>
          관리자 콘솔은 Angular Host가 로그인·세션을 전담하고 React 위젯이 그
          세션을 공유해 API만 호출하는 MFE로 시작했다. 이후 React 단독 구조로
          전환하면서, 경계를 넘던 인증 로직이 통째로 사라졌다. 이 글은 그 전후를
          비교한다. (전환 판단의 배경은{" "}
          <Link href="/guides/mfe-to-react">MFE → React 전환기</Link>에서 다룬다.)
        </p>

        <h2>문제: 인증은 하나, 프레임워크는 둘</h2>
        <p>
          상태관리·라우터·라이프사이클이 서로 다른 두 프레임워크(그리고 여러 탭)에서
          로그인·로그아웃을 직접 감지할 수는 없다. 그래서 MFE 시절의 인증은 두 축으로
          풀었다 — <strong>공유 저장소(쿠키)</strong>와 <strong>공용 신호(이벤트)</strong>.
        </p>

        <h2>MFE 시절: 경계를 넘는 인증</h2>

        <h3>쿠키로 세션 공유 — 역할 분담</h3>
        <ul>
          <li>
            <code>accessToken</code>: 일반 쿠키(JS 읽기 가능) — API 인증에 사용.
          </li>
          <li>
            <code>refreshToken</code>: HttpOnly 쿠키(서버만 접근) — 갱신은 서버가
            담당.
          </li>
          <li>같은 도메인에서 공유되도록 설정(HTTPS에서 SameSite=None; Secure).</li>
          <li>
            <strong>원칙: Host가 쓰기·삭제, 위젯은 읽기만.</strong> 토큰 수명 관리를
            한 곳으로 모아 상태가 갈라지지 않게 했다.
          </li>
        </ul>

        <h3>인증 이벤트 규약 — 이중 채널</h3>
        <ul>
          <li>
            방향: Host → 위젯(로그인·로그아웃·토큰 갱신·세션 만료), 위젯 → Host(로그인
            요청 + 사유).
          </li>
          <li>
            <strong>페이로드 최소화(보안)</strong> — 토큰·권한 값은 절대 싣지 않고
            &ldquo;무슨 일이 일어났는지&rdquo;만 전달한다.
          </li>
          <li>
            <strong>두 채널</strong>: <code>CustomEvent</code>(같은 탭의 Host↔위젯)
            + <code>BroadcastChannel</code>(다른 탭·창 간).
          </li>
        </ul>
        <pre>
          <code>{eventTypes}</code>
        </pre>
        <p>
          <strong>브로드캐스트 정책</strong>에는 판단이 들어갔다. 로그인·로그아웃·토큰
          갱신은 모든 탭에 broadcast했지만(특히 로그아웃은 모든 탭에서 즉시),{" "}
          <strong>세션 만료는 broadcast하지 않았다.</strong> 만료는 요청을 보낸 탭의
          맥락에서 발견되는 게 정확하고, 전역으로 뿌리면 놀고 있던 탭까지 불필요하게
          로그인 화면으로 튕기기 때문이다.
        </p>
        <p>
          토큰 <strong>갱신은 Host가 단일 소유</strong>했다. 위젯은 401을 만나면 직접
          갱신하지 않고 Host에 갱신을 요청했고, Host가 갱신에 성공하면 토큰 갱신
          이벤트를 emit해 위젯이 새 토큰을 쓰게 했다. 여러 위젯이 동시에 옛 토큰으로
          갱신을 시도하는 레이스를 이 방식으로 없앴다.
        </p>

        <h2>단독 전환 후: 인증을 자기 것으로</h2>
        <p>
          React가 독립 앱이 되자 경계가 사라졌고, 인증도 자연히 단순해졌다.
        </p>
        <ul>
          <li>
            <strong>자체 로그인</strong> — 위젯이 직접 로그인 페이지를 갖는다. 로그인
            응답의 에러에 따라 최초 비밀번호 변경·비밀번호 만료·OTP 등록/인증·계정
            잠금으로 분기하고, 일반 실패는 모호한 메시지로 응답한다(계정 존재 노출
            방지).
          </li>
          <li>
            <strong>토큰 직접 관리</strong> — 더는 Host에 위임하지 않고 위젯이 직접
            쓴다.
          </li>
          <li>
            <strong>갱신도 직접</strong> — 401이면 갱신 API를 직접 호출한다. 동시에
            여러 401이 나도 <code>isRefreshing</code> 플래그와 <strong>대기 큐</strong>로
            갱신은 한 번만 하고, 갱신이 끝나면 대기 중이던 요청을 재시도한다.
          </li>
          <li>
            <strong>이벤트 계층 삭제</strong> — 프레임워크가 하나라{" "}
            <code>CustomEvent</code>/<code>BroadcastChannel</code> 신호가 필요 없어졌다.
          </li>
          <li>
            <strong>토큰 우선순위</strong> — 메모리 캐시를 먼저 보고, 없으면 쿠키로
            폴백한다.
          </li>
        </ul>

        <h2>Before / After</h2>
        <table>
          <thead>
            <tr>
              <th>항목</th>
              <th>MFE 통합 (이전)</th>
              <th>단독 운영 (현재)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>로그인</td>
              <td>Angular Host 전담</td>
              <td>React 자체 로그인</td>
            </tr>
            <tr>
              <td>토큰 쓰기</td>
              <td>Host만</td>
              <td>React 직접</td>
            </tr>
            <tr>
              <td>토큰 갱신</td>
              <td>Host에 이벤트 위임</td>
              <td>React 직접 (isRefreshing + 큐)</td>
            </tr>
            <tr>
              <td>프레임워크 간 이벤트</td>
              <td>CustomEvent + BroadcastChannel</td>
              <td>불필요 (삭제)</td>
            </tr>
            <tr>
              <td>진입점</td>
              <td>위젯 진입 + 앱 진입 이원화</td>
              <td>단일 진입점</td>
            </tr>
            <tr>
              <td>로컬 개발</td>
              <td>리버스 프록시로 다중 서버 통합</td>
              <td>dev 서버 단일</td>
            </tr>
            <tr>
              <td>배포</td>
              <td>Host + 위젯 분리</td>
              <td>단일 빌드</td>
            </tr>
          </tbody>
        </table>

        <h2>배운 것</h2>
        <ul>
          <li>
            MFE에서 인증이 복잡했던 건 인증 자체가 아니라{" "}
            <strong>프레임워크 경계</strong>였다. 쿠키 역할 분담·이중 채널 이벤트·갱신
            위임은 모두 경계를 넘기 위한 장치였다.
          </li>
          <li>
            통합은 그 장치를 <strong>제거</strong>했다. 로그인·토큰·갱신을 한 앱이
            소유하니 이벤트 계층·이중 채널·위임이 통째로 사라졌다.
          </li>
          <li>
            아키텍처를 단순화했을 때 <strong>코드가 줄어드는가</strong>는 좋은
            신호다. 여기선 통합이 인증 코드의 상당 부분을 삭제하게 만들었다 — 경계
            비용이 실재했다는 증거다.
          </li>
        </ul>
      </article>

      <div className="mt-12 border-t border-black/[.06] pt-6 dark:border-white/[.08]">
        <Link
          href="/guides/shadow-dom-mfe"
          className="text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          함께 보기: Shadow DOM으로 위젯을 격리한 이야기 →
        </Link>
      </div>
    </section>
  );
}
