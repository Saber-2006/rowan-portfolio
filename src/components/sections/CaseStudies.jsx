import { useState } from "react";
import Reveal from "../ui/Reveal";
import CaseCard from "../cards/CaseCard";
import { CASES } from "../../data/cases";

// Filter buttons are built from the data, so adding a case with a new category
// in data/cases.js automatically adds its button. `Set` removes duplicates.
// This runs once when the file loads, not on every render.
const FILTERS = ["All", ...new Set(CASES.map((study) => study.category))];

/** "Selected work": dark section with category filters and a grid of case cards. */
export default function CaseStudies() {
  const [filter, setFilter] = useState("All");

  // Derived value: no extra state needed, it's recalculated from `filter`.
  const visibleCases = filter === "All" ? CASES : CASES.filter((study) => study.category === filter);

  return (
    <section id="work" className="bg-night py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Selected work
          </span>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Case studies, with the numbers to back them.
            </h2>
            

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((name) => (
                <button
                  key={name}
                  onClick={() => setFilter(name)}
                  aria-pressed={filter === name}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filter === name
                      ? "bg-blush text-night"
                      : "border border-white/15 text-white/70 hover:border-blush hover:text-white"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cards. Each one fades in with a small stagger. */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {visibleCases.map((study, i) => (
            <Reveal key={study.id} delay={i * 100}>
              <CaseCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
