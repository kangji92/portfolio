import { skills } from "@/data/skills";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 80} className="h-full">
              <Card className="h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item.name}>{item.name}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
