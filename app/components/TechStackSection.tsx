import { techStack } from '../data/portfolio';
import { Card } from './Card';
import { SectionHeader } from './SectionHeader';

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-18"
    >
      <SectionHeader
        eyebrow="Tech Stack"
        title="A modern toolkit for reliable web products."
      />
      <div className="mt-9 grid gap-5 lg:grid-cols-2">
        {techStack.map((stack) => (
          <Card key={stack.group}>
            <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
              {stack.group}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 sm:px-4 sm:py-2 sm:text-base"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
