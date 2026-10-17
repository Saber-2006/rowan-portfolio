import Reveal from "../ui/Reveal";

/** Dark "Results" band: the 3 big numbers, the outcome sentence and the takeaway quote. */
export default function CaseResults({ results, outcome, takeaway }) {
  return (
    <section className="bg-night py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The results
          </span>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">{outcome}</p>
        </Reveal>

        {/* Big numbers */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-3">
          {results.map((result, i) => (
            <Reveal key={result.label} delay={i * 100}>
              <div className="h-full bg-night p-8 md:p-10">
                <p className="font-display text-5xl tracking-tight text-blush md:text-6xl">{result.value}</p>
                <p className="mt-3 text-sm text-white/55">{result.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* One-line lesson, styled as a quote */}
        {takeaway && (
          <Reveal delay={100}>
            <blockquote className="mt-16 max-w-3xl border-l-2 border-accent pl-6 font-display text-2xl leading-snug md:text-3xl">
              {takeaway}
            </blockquote>
          </Reveal>
        )}
      </div>
    </section>
  );
}
