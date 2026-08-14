import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

const guide = guides.find((g) => g.slug === "ckeditor-paste-styling")!;

export const metadata: Metadata = {
  title: `${guide.title} — Kang JiYeon`,
  description: guide.description,
};

export default function CkeditorPasteGuide() {
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
          벼룩시장 통합 플랫폼에서 CKEditor를 다루며 가장 애를 먹은 건 기능이
          아니라 <strong>붙여넣기</strong>였다. 사용자가 외부에서 내용을 복사해
          에디터에 붙여넣을 때마다, 눈에 보이지 않는 스타일이 콘텐츠에 그대로
          딸려 들어와 레이아웃을 무너뜨렸다. 이 글은 그 문제와 씨름한 기록이다.
        </p>

        <h2>증상: 붙여넣으면 레이아웃이 무너졌다</h2>
        <p>
          사용자가 워드·한글·다른 웹페이지에서 내용을 복사해 붙여넣으면,
          문단마다 <code>padding</code>·<code>margin</code>·폰트·색상 같은
          <strong> 인라인 스타일</strong>이 통째로 따라 들어왔다. 결과적으로 저장된
          콘텐츠가 디자인 시스템과 어긋났고, 문단마다 제각각의 여백과 정렬이
          생겼다. 편집 화면에서는 멀쩡해 보이다가, 다른 화면(목록·상세)에서 렌더될
          때 깨지는 경우도 있었다.
        </p>

        <h2>왜 이런 일이 벌어지나</h2>
        <p>
          WYSIWYG 에디터에 붙여넣는 HTML은 &ldquo;소스가 준 그대로&rdquo;다.
          워드·한글·구글 문서 같은 출처는 문단마다 방대한 인라인 <code>style</code>을
          붙인다. 에디터는 기본적으로 이 HTML을 최대한 보존하려 하기 때문에,
          사용자가 의도하지 않은 스타일까지 콘텐츠에 저장된다.
        </p>
        <p>
          즉 문제의 뿌리는 특정 CSS 값이 아니라{" "}
          <strong>&ldquo;붙여넣기 경계에서 아무도 HTML을 정제하지 않았다&rdquo;</strong>는
          것이었다.
        </p>

        <h2>CSS로 가리기의 한계</h2>
        <p>
          가장 먼저 떠오르는 대응은 CSS로 덮는 것이다. 에디터·뷰어 스타일에서 여백을
          강제로 리셋하는 식(<code>margin: 0 !important</code> 류). 하지만 인라인{" "}
          <code>style</code>은 우선순위가 높아 계속 새는 케이스가 생기고, 무엇보다{" "}
          <strong>저장된 데이터 자체는 여전히 더럽다.</strong> 화면에서 가리는 것과
          데이터를 정제하는 것은 다르다 — 근본 해법은{" "}
          <strong>붙여넣기 경계에서 HTML을 좁히는 것</strong>이다.
        </p>

        <h2>CKEditor 4 vs 5: 붙여넣기를 어떻게 다루나</h2>
        <p>
          핵심 차이는{" "}
          <strong>&ldquo;기본이 보존이냐, 기본이 제거냐&rdquo;</strong>다.
        </p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>CKEditor 4</th>
              <th>CKEditor 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기반</td>
              <td>HTML 중심 + ACF(Advanced Content Filter)</td>
              <td>모델·스키마 중심</td>
            </tr>
            <tr>
              <td>기본 동작</td>
              <td>붙여넣은 HTML을 비교적 보존</td>
              <td>스키마에 없는 건 기본 제거</td>
            </tr>
            <tr>
              <td>정제 지점</td>
              <td>
                <code>allowedContent</code> · <code>pasteFilter</code> ·{" "}
                <code>paste</code> 이벤트의 <code>dataValue</code>
              </td>
              <td>
                ClipboardPipeline의 <code>inputTransformation</code> · 업캐스트
                컨버터/스키마
              </td>
            </tr>
            <tr>
              <td>인라인 style</td>
              <td>ACF 규칙으로 허용/차단</td>
              <td>스키마에 없으면 자동 제거 (보존하려면 GHS)</td>
            </tr>
            <tr>
              <td>Office 정제</td>
              <td>Paste from Word 플러그인</td>
              <td>Paste from Office 플러그인</td>
            </tr>
          </tbody>
        </table>
        <p>
          CKEditor 4는 <strong>깨끗함이 opt-in</strong>이다.{" "}
          <code>allowedContent</code>로 허용 목록을 좁히거나 <code>paste</code>{" "}
          이벤트에서 삽입될 HTML을 직접 손봐야 인라인 스타일이 걸러진다.
        </p>
        <p>
          CKEditor 5는 반대로 <strong>깨끗함이 기본</strong>이다. 붙여넣은 HTML은
          모델로 변환되며, 스키마·컨버터가 이해하지 못하는 스타일·속성은 그
          과정에서 버려진다. 오히려 스타일을 보존하려면 GHS(General HTML Support)를
          켜는데, 그러면 &ldquo;딸려오는 스타일&rdquo; 문제가 다시 나타날 수 있다.
        </p>
        <p>
          결국 두 버전의 원칙은 같다:{" "}
          <strong>경계에서 무엇을 허용할지 명시적으로 정한다.</strong> 4는 필터를
          좁혀서, 5는 스키마가 자동으로.
        </p>

        <h2>배운 것</h2>
        <ul>
          <li>
            WYSIWYG 에디터는 <strong>콘텐츠 소방호스</strong>다. 사용자가 무엇을
            붙여넣을지는 통제할 수 없다 — 통제해야 하는 건 <em>경계</em>다.
          </li>
          <li>
            &ldquo;화면에서 가리기(CSS)&rdquo;와 &ldquo;데이터를 정제하기&rdquo;는
            다르다. 저장되는 데이터가 더러우면 언젠가 다른 화면에서 터진다. 정제는
            저장 경계에서 해야 한다.
          </li>
          <li>
            <strong>스타일은 콘텐츠가 아니다.</strong> 콘텐츠에는 의미(문단·강조)만
            담고, 겉모습은 CSS로. 이 경계를 지키면 붙여넣기 문제의 대부분이 사라진다.
          </li>
          <li>
            실제 사용자 출처(워드·한글·엑셀·웹페이지)로 테스트해야 한다. 깨끗한
            텍스트만으로는 이 버그를 재현할 수 없다.
          </li>
        </ul>
      </article>
    </section>
  );
}
