import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";

/**
 * End of a case study page, two blocks:
 *  1. a big card linking to the next case study (keeps visitors browsing)
 *  2. a call-to-action that leads to the contact form on the Home page
 */
export default function CaseNext({ next }) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-black/45">Next case study</p>

          <Link
            to={`/case-studies/${next.id}`}
            className="group relative mt-6 block overflow-hidden rounded-[2rem] bg-night text-white"
          >
            <img
              src={next.image}
              alt=""
              width={1200}
              height={500}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
            />
            <div className="relative flex min-h-[18rem] flex-col justify-end p-8 md:p-12">
              <p className="text-sm uppercase tracking-widest text-white/70">{next.client}</p>
              <div className="mt-3 flex items-end justify-between gap-6">
                <h2 className="max-w-3xl font-display text-3xl leading-snug md:text-5xl">{next.headline}</h2>
                <ArrowUpRight
                  size={32}
                  className="shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="relative overflow-hidden pb-24 md:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-petal opacity-50 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="rounded-[2rem] bg-linear-to-br from-blush via-blush-soft to-white p-8 shadow-xl shadow-petal/30 md:p-14">
              <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Want results like these for your brand?
              </h2>
              <Link
                to="/#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-night px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25"
              >
                Let's talk
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
