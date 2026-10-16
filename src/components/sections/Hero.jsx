import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "../ui/Reveal";
import Ticker from "../ui/Ticker";
import { TICKER } from "../../data/site";

/**
 * Top of the page: location badge, big headline, intro, two buttons, ticker.
 * This section is loaded immediately (not lazy) because it's the first thing
 * visitors see. The staggered `delay` values make the four blocks appear one
 * after another on page load.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      {/* Two blurred pink blobs floating in the background (purely decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 animate-float rounded-full bg-blush opacity-70 blur-3xl motion-reduce:animate-none md:h-[28rem] md:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 animate-float rounded-full bg-petal opacity-50 blur-3xl [animation-delay:2s] motion-reduce:animate-none"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Location badge with a pulsing dot */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-xs shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <MapPin size={13} /> Dubai · working globally
          </div>
        </Reveal>

        {/* Headline (the only <h1> on the page, which is good for SEO) */}
        <Reveal delay={100}>
          <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            I build brands people <em className="text-accent">talk about</em>, and growth you can measure.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
            Founder & CEO of a Dubai digital marketing agency. For 7+ years I've taken brands from first idea to full
            calendars across the UAE, the GCC and Egypt: strategy, identity, campaigns and the systems behind them.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-night px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25"
            >
              Explore case studies
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-medium backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:bg-blush/40"
            >
              Let's connect
            </a>
          </div>
        </Reveal>
      </div>

      <Ticker items={TICKER} />
    </section>
  );
}
