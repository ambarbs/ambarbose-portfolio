import { hero } from '../data/portfolio';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(135deg,#020617_0%,#0b1220_55%,#0f172a_100%)] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-18">
        <div className="grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
              Open to senior engineering conversations.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:mt-5 sm:text-lg sm:leading-9">
              For roles involving full-stack delivery, web platforms, API
              integration, cloud-hosted systems, product engineering or
              AI-enabled workflows, the fastest path is LinkedIn or email.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="mailto:ambar.bs@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-bold text-slate-950 hover:bg-slate-100 sm:h-15 sm:px-8 sm:text-lg"
            >
              Email Ambar
            </a>
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 px-6 text-base font-semibold text-white hover:border-sky-300/60 hover:bg-white/8 sm:h-15 sm:px-8 sm:text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
