import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Controls scrolling when you move between pages. It renders nothing.
 *
 * A normal website jumps to the top of a new page, but React Router doesn't do
 * that by itself, and it doesn't scroll to "#sections" either. This does both:
 *   - link without a hash (/case-studies/hula) -> jump to the top
 *   - link with a hash (/#work)                -> scroll to that section
 *
 * Sections lower on the Home page load lazily, so the target may not exist yet
 * right after you arrive. It retries every 100 ms (up to 2 seconds) until it appears.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      // "instant" overrides the site-wide smooth scrolling: a new page should
      // start at the top immediately, not slide up from the bottom.
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    let attempts = 0;
    let timer;
    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
      } else if (attempts++ < 20) {
        timer = setTimeout(scrollToTarget, 100);
      }
    };
    scrollToTarget();

    return () => clearTimeout(timer);
  }, [pathname, hash, key]); // `key` changes on every navigation, so clicking the same link twice still scrolls

  return null;
}
