import { ArrowUpRight } from "lucide-react";

/**
 * One case study card: image on top, then headline, summary, tags and 3 results.
 * It only receives data and renders it, so it has no state of its own.
 *
 * Image notes:
 *   loading="lazy"   the browser only downloads the image when it is near the screen
 *   decoding="async" decoding happens off the main thread so scrolling stays smooth
 *   width/height     reserve the space in advance so the page doesn't jump when
 *                    the image arrives (this is what Google calls layout shift)
 */
export default function CaseCard({ study }) {
  const { client, category, headline, summary, strategy, results, image } = study;

  return (
    <article className="group h-full overflow-hidden rounded-[2rem] bg-white/[0.04] ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-blush/60">
      {/* Image + dark gradient + category pill + client name */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={client}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs text-black backdrop-blur">
          {category}
        </span>
        <p className="absolute bottom-5 left-5 text-sm uppercase tracking-widest text-white/80">{client}</p>
      </div>

      {/* Text content */}
      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl leading-snug md:text-3xl">{headline}</h3>
        <p className="mt-3 text-white/60">{summary}</p>

        {/* Strategy tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {strategy.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>

        {/* Results: 3 columns */}
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
          {results.map((result) => (
            <div key={result.label}>
              <p className="font-display text-xl text-blush md:text-2xl">{result.value}</p>
              <p className="mt-1 text-xs text-white/50">{result.label}</p>
            </div>
          ))}
        </div>

        {/* TODO: point this at the full case study page when you have one */}
        <a href="#" className="mt-6 inline-flex items-center gap-1 text-sm text-white/80 transition hover:text-blush">
          Read the full case study <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}