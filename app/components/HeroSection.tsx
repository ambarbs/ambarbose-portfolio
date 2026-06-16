import Image from 'next/image';
import { hero, heroTechBadges } from '../data/portfolio';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.22),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,#020617_0%,#07111f_48%,#0f172a_100%)] text-white">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-12 pt-8 sm:gap-12 sm:px-8 sm:pb-18 sm:pt-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24 lg:pt-18">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-white/8 px-3 py-1 text-sm font-medium text-sky-100 shadow-sm shadow-sky-950/30">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            {hero.location}
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:mt-8 sm:text-8xl">
            {hero.name}
          </h1>
          <p className="mt-4 text-2xl font-medium text-sky-100 sm:mt-6 sm:text-4xl">
            {hero.title}
          </p>
          <p className="mt-3 text-base font-semibold tracking-wide text-slate-300 sm:mt-4 sm:text-xl">
            {hero.subtitle}
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:mt-7 sm:text-xl sm:leading-9">
            {hero.summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {heroTechBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm font-semibold text-slate-100 sm:px-4 sm:py-2 sm:text-base"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <a
              href={hero.links.cv}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-sky-400 px-6 text-base font-bold text-slate-950 shadow-lg shadow-sky-950/30 hover:bg-sky-300 sm:h-13 sm:px-7"
            >
              Download CV
            </a>
            <a
              href={hero.links.projects}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-white/8 px-6 text-base font-semibold text-white hover:border-sky-300/60 hover:bg-white/12 sm:h-13 sm:px-7"
            >
              View Projects
            </a>
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 px-5 text-base font-medium text-slate-300 hover:border-white/20 hover:bg-white/6 hover:text-white sm:h-13 sm:px-6"
            >
              LinkedIn
            </a>
            <a
              href={hero.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 px-5 text-base font-medium text-slate-300 hover:border-white/20 hover:bg-white/6 hover:text-white sm:h-13 sm:px-6"
            >
              GitHub
            </a>
          </div>
          <p className="mt-4 max-w-3xl text-sm font-medium leading-6 text-sky-100/85 sm:mt-5 sm:text-base sm:leading-7">
            Available for senior frontend and full-stack contract roles across
            platform delivery, product engineering and AI-enabled workflows.
          </p>
        </div>
        <div className="flex lg:justify-end">
          <div className="w-full max-w-md rounded-lg border border-white/12 bg-white/9 p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-7">
            <div className="flex flex-row items-center gap-4 sm:gap-5">
              <Image
                src="/profile.jpg"
                alt="Ambar Bose"
                width={112}
                height={112}
                priority
                className="h-18 w-18 rounded-full border-2 border-sky-200/70 object-cover shadow-lg shadow-black/25 sm:h-24 sm:w-24"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 sm:text-sm">
                  Recruiter snapshot
                </p>
                <p className="mt-1.5 text-lg font-semibold leading-tight text-white sm:mt-2 sm:text-2xl">
                  10+ years across Australian delivery teams
                </p>
              </div>
            </div>
            <p className="mt-4 border-t border-white/10 pt-4 text-base leading-7 text-slate-300 sm:mt-6 sm:pt-6 sm:text-lg sm:leading-9">
              Enterprise web platforms, full-stack delivery, API integration,
              and AI-enabled workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-950/45 px-3 py-1 text-sm font-semibold text-sky-100 sm:px-3.5 sm:py-1.5 sm:text-base">
                Enterprise
              </span>
              <span className="rounded-full bg-slate-950/45 px-3 py-1 text-sm font-semibold text-sky-100 sm:px-3.5 sm:py-1.5 sm:text-base">
                Platforms
              </span>
              <span className="rounded-full bg-slate-950/45 px-3 py-1 text-sm font-semibold text-sky-100 sm:px-3.5 sm:py-1.5 sm:text-base">
                AI workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
