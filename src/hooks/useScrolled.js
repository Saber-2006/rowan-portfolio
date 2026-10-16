import { useEffect, useState } from "react";

/**
 * Returns true once the page has been scrolled further than `threshold` pixels.
 * Used by the navbar to switch from transparent to frosted glass.
 *
 * Performance note: the scroll event fires many times per second, but React
 * ignores setState when the value hasn't changed (true -> true), so the
 * component only re-renders when the boolean actually flips.
 * `{ passive: true }` tells the browser we never block scrolling.
 */
export default function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll(); // set the right value immediately (e.g. page refreshed mid-scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
