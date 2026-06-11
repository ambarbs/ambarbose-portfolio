import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import {
  about,
  experience,
  hero,
  heroTechBadges,
  projects,
  techStack,
} from "./data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

function publicAssetExists(path: string) {
  return existsSync(join(process.cwd(), "public", path.replace(/^\//, "")));
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-xl leading-9 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`rounded-lg border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-200/80 ${className}`}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.22),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,#020617_0%,#07111f_48%,#0f172a_100%)] text-white">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-18 pt-10 sm:px-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24 lg:pt-18">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-white/8 px-3 py-1 text-sm font-medium text-sky-100 shadow-sm shadow-sky-950/30">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            {hero.location}
          </div>
          <h1 className="mt-8 max-w-4xl text-6xl font-semibold tracking-tight text-white sm:text-8xl">
            {hero.name}
          </h1>
          <p className="mt-6 text-3xl font-medium text-sky-100 sm:text-4xl">
            {hero.title}
          </p>
          <p className="mt-4 text-lg font-semibold tracking-wide text-slate-300 sm:text-xl">
            {hero.subtitle}
          </p>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
            {hero.summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {heroTechBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-base font-semibold text-slate-100"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={hero.links.cv}
              className="inline-flex h-15 items-center justify-center rounded-lg bg-sky-400 px-8 text-lg font-bold text-slate-950 shadow-lg shadow-sky-950/30 hover:bg-sky-300"
            >
              Download CV
            </a>
            <a
              href={hero.links.projects}
              className="inline-flex h-15 items-center justify-center rounded-lg border border-white/15 bg-white/8 px-8 text-lg font-semibold text-white hover:border-sky-300/60 hover:bg-white/12"
            >
              View Projects
            </a>
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-15 items-center justify-center rounded-lg border border-white/15 px-8 text-lg font-semibold text-slate-200 hover:border-sky-300/60 hover:bg-white/8"
            >
              LinkedIn
            </a>
            <a
              href={hero.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-15 items-center justify-center rounded-lg border border-white/15 px-8 text-lg font-semibold text-slate-200 hover:border-sky-300/60 hover:bg-white/8"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex lg:justify-end">
          <div className="w-full max-w-md rounded-lg border border-white/12 bg-white/9 p-7 shadow-2xl shadow-black/25 backdrop-blur">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Image
                src="/profile.jpg"
                alt="Ambar Bose"
                width={112}
                height={112}
                priority
                className="h-24 w-24 rounded-full border-2 border-sky-200/70 object-cover shadow-lg shadow-black/25"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Recruiter snapshot
                </p>
                <p className="mt-2 text-2xl font-semibold leading-tight text-white">
                  10+ years across Australian delivery teams
                </p>
              </div>
            </div>
            <p className="mt-6 border-t border-white/10 pt-6 text-lg leading-9 text-slate-300">
              Enterprise web platforms, full-stack delivery, API integration,
              and AI-enabled workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-950/45 px-3.5 py-1.5 text-base font-semibold text-sky-100">
                Enterprise
              </span>
              <span className="rounded-full bg-slate-950/45 px-3.5 py-1.5 text-base font-semibold text-sky-100">
                Platforms
              </span>
              <span className="rounded-full bg-slate-950/45 px-3.5 py-1.5 text-base font-semibold text-sky-100">
                AI workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-18">
        <SectionHeader
          eyebrow="About"
          title="Engineering leadership with a practical product lens."
        />
        <div className="text-xl leading-10 text-slate-600">
          <p>{about}</p>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-18"
    >
      <SectionHeader
        eyebrow="Experience"
        title="Production experience across enterprise and product teams."
        description="A track record of contributing to meaningful software delivery in high-expectation environments."
      />
      <div className="mt-9 grid gap-5 xl:grid-cols-2">
        {experience.map((role) => (
          <Card
            key={`${role.company}-${role.period}`}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-400 to-slate-300" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">
                  {role.company}
                </h3>
                <p className="mt-2 text-lg font-semibold text-slate-700">
                  {role.role}
                </p>
              </div>
              <div className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left sm:text-right">
                <p className="text-base font-bold text-sky-700">
                  {role.period}
                </p>
                <p className="mt-1 text-base text-slate-500">{role.location}</p>
              </div>
            </div>
            <ul className="mt-7 space-y-5 text-xl leading-9 text-slate-600">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  if (publicAssetExists(image)) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
        <Image src={image} alt={`${name} preview`} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <div className="flex min-h-48 flex-col justify-between rounded-md border border-slate-200 bg-white p-6">
        <span className="w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-700">
          Project
        </span>
        <div>
          <p className="text-xl font-semibold text-slate-950">{name}</p>
          <div className="mt-5 grid gap-3">
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-slate-200" />
              <div className="h-2 w-4/5 rounded-full bg-sky-100" />
              <div className="h-2 w-2/3 rounded-full bg-slate-200" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded-md border border-slate-100 bg-slate-50" />
              <div className="h-10 rounded-md border border-sky-100 bg-sky-50" />
              <div className="h-10 rounded-md border border-slate-100 bg-slate-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
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
            <Card key={project.name} className="p-5">
              <ProjectVisual name={project.name} image={project.image} />
              <div className="p-2 pt-5">
                <h3 className="text-2xl font-semibold text-slate-950">
                  {project.name}
                </h3>
                <p className="mt-3 text-xl leading-9 text-slate-600">
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
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
            <h3 className="text-2xl font-semibold text-slate-950">
              {stack.group}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-base font-semibold text-slate-700"
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

function ContactSection() {
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
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Open to senior engineering conversations.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
              For roles involving frontend leadership, full-stack product
              delivery, internal platforms, or AI-assisted tools, the fastest
              path is LinkedIn or email.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="mailto:ambar.bose@email.com"
              className="inline-flex h-15 items-center justify-center rounded-lg bg-white px-8 text-lg font-bold text-slate-950 hover:bg-slate-100"
            >
              Email Ambar
            </a>
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-15 items-center justify-center rounded-lg border border-white/15 px-8 text-lg font-semibold text-white hover:border-sky-300/60 hover:bg-white/8"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-lg text-slate-900">
      <header className="bg-slate-950 text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8">
          <a href="#" className="text-base font-semibold tracking-tight">
            Ambar Bose
          </a>
          <div className="hidden items-center gap-6 text-base font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-sky-300">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
