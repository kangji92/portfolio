import { career } from "@/data/career";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import type { CareerItem } from "@/types";

function formatPeriod(item: CareerItem) {
  const end = item.end ?? "현재";
  return `${item.start} — ${end}`;
}

export default function CareerTimeline() {
  return (
    <section id="career" className="scroll-mt-16 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Career</h2>
        </Reveal>

        <ol className="mt-10 space-y-10 border-l border-black/[.1] dark:border-white/[.14]">
          {career.map((item, index) => (
            <li key={`${item.company}-${item.start}`} className="relative pl-8">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <Reveal delay={index * 80}>
                <p className="text-sm text-zinc-500">{formatPeriod(item)}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {item.role} · {item.company}
                </h3>
                {item.summary && (
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {item.summary}
                  </p>
                )}
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                {item.stack && item.stack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
