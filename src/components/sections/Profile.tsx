import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";

const coreStack = ["React", "Next.js", "TypeScript", "Vue.js", "Angular"];

export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Frontend Engineer
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Kang JiYeon
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            화면을 그리는 일에서 시작해, 이제는 그 뒤의 구조까지 설계하는 프론트엔드
            개발자입니다.
            <br />
            제로트러스트 접근 관리 플랫폼의 관리자 콘솔을 개발하며 MFE 구조를 React
            기반 통합 구조로 전환하는 과정을 전담했고, 여러 관리 화면과 워크플로우
            에디터를 구현했습니다.
            <br />
            테스트 자동화와 품질 관리로 오래 잘 유지되는 프론트엔드를 지향합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {coreStack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
