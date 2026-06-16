import { earlierGlobalExperience, experienceGroups } from '../data/portfolio';
import { Card } from './Card';
import { SectionHeader } from './SectionHeader';

function ExperienceAccordionCard({
  role,
  featured,
}: {
  role: (typeof experienceGroups)[number]['roles'][number];
  featured: boolean;
}) {
  return (
    <details
      className={`group rounded-lg border bg-white shadow-sm shadow-slate-200/70 transition-[border-color,box-shadow,transform] duration-200 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        featured ? 'border-sky-200/80' : 'border-slate-200/80'
      } hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md hover:shadow-slate-300/50`}
    >
      <summary className="list-none cursor-pointer rounded-lg px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3
                className={`font-semibold text-slate-950 ${
                  featured ? 'text-xl sm:text-2xl' : 'text-xl'
                }`}
              >
                {role.company}
              </h3>
              {featured ? (
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-sky-700">
                  Featured
                </span>
              ) : null}
            </div>
            <p className="mt-1.5 text-base font-semibold text-slate-700 sm:text-lg">
              {role.role}
            </p>
            <p className="mt-2 line-clamp-2 text-base leading-7 text-slate-500">
              {role.summary}
            </p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden items-center justify-end gap-2 sm:flex">
              <span className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 text-xs font-semibold text-slate-600">
                {role.period}
              </span>
              <span className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 text-xs font-semibold text-slate-600">
                {role.location}
              </span>
            </div>
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors duration-200 group-hover:bg-sky-50 group-hover:text-sky-700 group-open:bg-sky-50 group-open:text-sky-700"
            >
              <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-current transition-transform duration-200 group-open:rotate-[225deg] motion-reduce:transition-none" />
            </span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 sm:hidden">
          <span className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 text-xs font-semibold text-slate-600">
            {role.period}
          </span>
          <span className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 text-xs font-semibold text-slate-600">
            {role.location}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </summary>
      <div className="border-t border-slate-200 px-5 pb-5 pt-5 sm:px-6">
        <ul className="space-y-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          <span className="font-bold text-slate-900">Tech stack: </span>
          {role.techStack}
        </p>
      </div>
    </details>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-18"
    >
      <SectionHeader
        eyebrow="Experience"
        title="Experience across enterprise web platforms, product teams and AI-enabled workflows."
        description="A track record of contributing to meaningful software delivery in high-expectation environments."
      />
      <div className="mt-8 space-y-8 sm:mt-9 sm:space-y-10">
        {experienceGroups.map((group) =>
          group.featured ? (
            <div key={group.title}>
              <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {group.title}
              </h3>
              <div className="mt-4 grid gap-4 sm:mt-5 xl:grid-cols-2">
                {group.roles.map((role) => (
                  <ExperienceAccordionCard
                    key={`${role.company}-${role.period}`}
                    role={role}
                    featured={group.featured}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div key={group.title}>
              <details className="group rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/70 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {group.roles.length} additional Australian roles
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 group-open:bg-sky-50 group-open:text-sky-700"
                  >
                    <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-current group-open:rotate-[225deg]" />
                  </span>
                </summary>
                <div className="grid gap-4 border-t border-slate-200 p-4">
                  {group.roles.map((role) => (
                    <ExperienceAccordionCard
                      key={`${role.company}-${role.period}`}
                      role={role}
                      featured={group.featured}
                    />
                  ))}
                </div>
              </details>
              <div className="hidden lg:block">
                <h3 className="text-2xl font-bold text-slate-950">
                  {group.title}
                </h3>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  {group.roles.map((role) => (
                    <ExperienceAccordionCard
                      key={`${role.company}-${role.period}`}
                      role={role}
                      featured={group.featured}
                    />
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
        <details className="group rounded-lg border border-slate-200 bg-slate-50 shadow-sm shadow-slate-200/70 lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                Earlier Global Experience
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Earlier software engineering roles
              </p>
            </div>
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 group-open:bg-sky-50 group-open:text-sky-700"
            >
              <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-current group-open:rotate-[225deg]" />
            </span>
          </summary>
          <div className="grid gap-2 border-t border-slate-200 p-4 text-base font-semibold text-slate-700">
            {earlierGlobalExperience.map((role) => (
              <p
                key={role}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3"
              >
                {role}
              </p>
            ))}
          </div>
        </details>
        <Card className="hidden border-slate-200 bg-slate-50 lg:block">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                Earlier Global Experience
              </h3>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
                Earlier software engineering roles across major global product
                and enterprise technology teams.
              </p>
            </div>
            <div className="grid gap-2 text-lg font-semibold text-slate-700 sm:grid-cols-2 lg:min-w-[520px]">
              {earlierGlobalExperience.map((role) => (
                <p
                  key={role}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3"
                >
                  {role}
                </p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
