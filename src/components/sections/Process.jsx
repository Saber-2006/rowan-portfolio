import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import ProcessStep from "../cards/ProcessStep";
import { PROCESS } from "../../data/process";

/** "How I work": five steps, one expanded at a time (hover or click to switch). */
export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>How I work</SectionLabel>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
          From brainstorm to final creation, in five steps.
        </h2>
      </Reveal>

      <div className="relative mt-16">
        {/* Thin vertical pink line behind the icons (desktop only) */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-linear-to-b from-accent via-petal to-transparent md:block" />

        <div className="space-y-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <ProcessStep step={step} active={i === activeIndex} onActivate={() => setActiveIndex(i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
