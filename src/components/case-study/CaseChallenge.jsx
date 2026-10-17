import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

/** "The challenge": the starting problem, in large text. */
export default function CaseChallenge({ text }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-8 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <SectionLabel>The challenge</SectionLabel>
        </Reveal>
        <Reveal delay={100} className="md:col-span-8">
          <p className="font-display text-3xl leading-snug tracking-tight md:text-4xl">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
