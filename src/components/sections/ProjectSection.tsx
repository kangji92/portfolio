import Link from "next/link";
import { projects } from "@/data/projects";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import ArchitectureDiagram from "@/components/project/ArchitectureDiagram";
import ImprovementSummary from "@/components/project/ImprovementSummary";
import type { Project } from "@/types";

function NarrativeBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </h4>
      <div className="mt-2 text-zinc-600 dark:text-zinc-400">{children}</div>
    </div>
  );
}

function CaseStudyCard({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-zinc-500">{project.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-zinc-500">{project.role}</p>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.summary}</p>

      {project.responsibilities && project.responsibilities.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            주요 담당
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.responsibilities.map((r) => (
              <Tag key={r}>{r}</Tag>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 space-y-5">
        <NarrativeBlock label="Background">
          <p>{cs.background}</p>
        </NarrativeBlock>
        <NarrativeBlock label="Challenge">
          <p>{cs.challenge}</p>
        </NarrativeBlock>
        <NarrativeBlock label="Solution">
          <p>{cs.solution.summary}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {cs.solution.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </NarrativeBlock>
      </div>

      {project.architecture && (
        <div className="mt-8 no-print">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Architecture Transition
          </h4>
          <div className="mt-3">
            <ArchitectureDiagram architecture={project.architecture} />
          </div>
        </div>
      )}

      <div className="mt-8">
        <ImprovementSummary items={cs.improvements} />
      </div>

      {project.contributions && project.contributions.length > 0 && (
        <div className="mt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            주요 성과
          </h4>
          <div className="mt-3 grid gap-5 sm:grid-cols-2">
            {project.contributions.map((group) => (
              <div key={group.category}>
                <h5 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {group.category}
                </h5>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      {project.detailHref && (
        <div className="mt-6 border-t border-black/[.06] pt-4 dark:border-white/[.08]">
          <Link
            href={project.detailHref}
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            관리자 콘솔 예시 UI 상세 보기 →
          </Link>
        </div>
      )}
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-zinc-500">{project.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-zinc-500">{project.role}</p>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.summary}</p>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}

      {project.detailHref && (
        <div className="mt-6 border-t border-black/[.06] pt-4 dark:border-white/[.08]">
          <Link
            href={project.detailHref}
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            {project.detailLabel ?? "예시 UI 상세 보기"} →
          </Link>
        </div>
      )}
    </Card>
  );
}

export default function ProjectSection() {
  return (
    <section id="projects" className="scroll-mt-16 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
        </Reveal>
        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              {project.caseStudy ? (
                <CaseStudyCard project={project} />
              ) : (
                <ProjectCard project={project} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
