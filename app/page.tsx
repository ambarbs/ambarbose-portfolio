import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { hero, heroTechBadges, techStack } from './data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
];

function PersonJsonLd() {
  const skills = Array.from(
    new Set([
      ...heroTechBadges,
      ...techStack.flatMap((stack) => stack.items),
      'GraphQL',
      'AWS',
      'Azure',
      'CI/CD',
    ]),
  );

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: hero.name,
    url: 'https://ambarbose.com',
    jobTitle: hero.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    sameAs: [hero.links.github, hero.links.linkedin],
    knowsAbout: skills,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <main className="min-h-screen bg-slate-50 text-lg text-slate-900">
        <header className="bg-slate-950 text-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 sm:py-5">
            <a
              href="#"
              className="inline-flex h-11 items-center text-base font-semibold tracking-tight"
            >
              Ambar Bose
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 px-4 text-sm font-semibold text-slate-200 md:hidden"
            >
              Contact
            </a>
            <div className="hidden items-center gap-6 text-base font-medium text-slate-300 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-sky-300"
                >
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
    </>
  );
}
