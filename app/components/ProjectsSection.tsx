import { projects } from '../data/portfolio';
import { Card } from './Card';
import { ProjectVisual } from './ProjectVisual';
import { SectionHeader } from './SectionHeader';

export function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-18">
        <SectionHeader
          eyebrow="Projects"
          title="Focused projects at the intersection of product and AI."
          description="Selected work and concepts that show Ambar's interest in practical tools, polished workflows, and modern engineering stacks."
        />
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col p-5">
              <ProjectVisual
                name={project.name}
                image={project.image}
                status={project.status}
              />
              <div className="flex flex-1 flex-col p-2 pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-base leading-7 text-slate-600 sm:text-xl sm:leading-9">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  {project.ctaUrl ? (
                    <a
                      href={project.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-bold text-white hover:bg-slate-800"
                    >
                      {project.ctaLabel}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-500">
                      {project.ctaLabel}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
