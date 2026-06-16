import { about } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-18">
        <SectionHeader
          eyebrow="About"
          title="Engineering leadership with a practical product lens."
        />
        <div className="text-lg leading-8 text-slate-600 sm:text-xl sm:leading-10">
          <p>{about}</p>
        </div>
      </div>
    </section>
  );
}
