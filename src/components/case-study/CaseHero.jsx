import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

/** Top of a case study page: back link, category, headline, summary, big image, quick facts. */
export default function CaseHero({ study }) {
  const { client, category, headline, summary, strategy, image } = study;

  // Quick facts shown under the image. Built from the data, so nothing to maintain here.
  const facts = [
    { label: "Client", value: client },
    { label: "Industry", value: category },
    { label: "Services", value: strategy.join(" · ") },
  ];

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* Decorative blurred blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 animate-float rounded-full bg-blush opacity-70 blur-3xl motion-reduce:animate-none md:h-[28rem] md:w-[28rem]"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          {/* Goes back to the Work section on the Home page */}
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2 text-sm text-black/60 transition hover:text-black"
          >
            <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
            All case studies
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8">
            <SectionLabel>{category}</SectionLabel>
          </div>
          {/* The only <h1> on this page (good for SEO and screen readers) */}
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">{summary}</p>
        </Reveal>

        <Reveal delay={200}>
          {/* This image is at the top of the page, so it must NOT be lazy-loaded.
              fetchPriority="high" tells the browser to download it first. */}
          <div className="mt-12 overflow-hidden rounded-[2rem] shadow-xl shadow-petal/40">
            <img
              src={image}
              alt={client}
              width={1200}
              height={675}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <dl className="mt-8 grid gap-6 border-b border-black/10 pb-10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-widest text-black/45">{fact.label}</dt>
                <dd className="mt-2 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
