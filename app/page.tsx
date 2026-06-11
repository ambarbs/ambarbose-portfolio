import Image from "next/image";
import { experience, hero, projects, techStack } from "./data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

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
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
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
      className={`rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 ${className}`}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:pb-28 lg:pt-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-800">
          <span className="h-2 w-2 rounded-full bg-sky-500" />
          {hero.location}
        </div>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          {hero.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-slate-700 sm:text-2xl">
          {hero.title}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {hero.summary}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={hero.links.cv}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Download CV
          </a>
          <a
            href={hero.links.projects}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 px-5 text-sm font-semibold text-slate-900 hover:border-sky-300 hover:bg-sky-50"
          >
            View Projects
          </a>
          <a
            href={hero.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 px-5 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:bg-sky-50"
          >
            LinkedIn
          </a>
          <a
            href={hero.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 px-5 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:bg-sky-50"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex lg:justify-end">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80">
          <Image
            src="/profile.jpg"
            alt="Ambar Bose"
            width={128}
            height={128}
            priority
            className="h-32 w-32 rounded-full border border-slate-200 object-cover"
          />
          <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-sm font-semibold text-slate-950">
              Senior frontend and full-stack delivery
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Product-minded engineering for teams that value clarity, speed,
              and durable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-18 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <SectionHeader
          eyebrow="About"
          title="Engineering leadership with a practical product lens."
        />
        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Ambar is a Sydney-based Senior Software Engineer with experience
            across customer-facing platforms, internal tooling, and emerging
            AI-assisted workflows.
          </p>
          <p>
            He brings calm execution to complex delivery environments, pairing
            strong frontend craft with full-stack fluency, clear communication,
            and a bias toward systems that remain easy to understand after they
            ship.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-18 sm:px-8 lg:py-24">
      <SectionHeader
        eyebrow="Experience"
        title="Production experience across enterprise and product teams."
        description="A track record of contributing to meaningful software delivery in high-expectation environments."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {experience.map((role) => (
          <Card key={role.company}>
            <h3 className="text-lg font-semibold text-slate-950">
              {role.company}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {role.summary}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-18 sm:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Projects"
          title="Focused projects at the intersection of product and AI."
          description="Selected work and concepts that show Ambar's interest in practical tools, polished workflows, and modern engineering stacks."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name}>
              <h3 className="text-lg font-semibold text-slate-950">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="tech-stack" className="mx-auto max-w-6xl px-6 py-18 sm:px-8 lg:py-24">
      <SectionHeader
        eyebrow="Tech Stack"
        title="A modern toolkit for reliable web products."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {techStack.map((stack) => (
          <Card key={stack.group}>
            <h3 className="text-lg font-semibold text-slate-950">
              {stack.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
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
    <section id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Open to senior engineering conversations.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              For roles involving frontend leadership, full-stack product
              delivery, internal platforms, or AI-assisted tools, the fastest
              path is LinkedIn or email.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="mailto:ambar.bose@email.com"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-100"
            >
              Email Ambar
            </a>
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600 px-5 text-sm font-semibold text-white hover:border-sky-300 hover:bg-slate-900"
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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 sm:px-8">
          <a href="#" className="text-sm font-semibold tracking-tight text-slate-950">
            Ambar Bose
          </a>
          <div className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-sky-700">
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
