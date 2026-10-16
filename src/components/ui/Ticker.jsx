import { Sparkles } from "lucide-react";

/**
 * Infinite horizontal scrolling strip of short phrases.
 *
 * How the loop works: the list is repeated 4 times, and the CSS animation moves
 * the strip left by exactly 50% of its width, then restarts. Because the second
 * half looks identical to the first, the restart is invisible.
 * `motion-reduce:animate-none` stops it for people who prefer reduced motion.
 */
export default function Ticker({ items }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative mt-20 border-y border-black/5 bg-white/60 py-4 backdrop-blur">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-black/60 motion-reduce:animate-none">
        {repeated.map((text, i) => (
          <span key={i} className="flex items-center gap-12">
            {text}
            <Sparkles size={14} className="text-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}