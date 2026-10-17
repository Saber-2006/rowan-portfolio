import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

/** "What I did": one numbered card per step. */
export default function CaseApproach({ steps }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>What I did</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
            The approach, step by step.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="h-full rounded-3xl bg-paper p-6 transition hover:-translate-y-1 hover:shadow-lg md:p-8">
                {/* "0" + number turns 1 into "01" */}
                <span className="font-display text-4xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-black/60">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
