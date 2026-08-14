import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Notes — Kang JiYeon",
  description: "프론트엔드 아키텍처·개발 경험을 정리한 기술 노트.",
};

export default function GuidesPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <Link
        href="/#profile"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Home
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Notes</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        프론트엔드 아키텍처·개발 경험을 정리한 기술 노트입니다.
      </p>

      <div className="mt-10 space-y-4">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="block rounded-2xl border border-black/[.08] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/[.1] dark:bg-zinc-900"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">{g.title}</h2>
              <span className="shrink-0 text-xs text-zinc-500">
                {g.date} · {g.readingTime}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {g.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
