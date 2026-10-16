import { useEffect, useRef, useState } from "react";

/*
  useReveal: tells you when an element has scrolled into view for the first time.

  Performance note: the page has ~25 animated elements. Instead of creating one
  IntersectionObserver per element, they all share ONE observer (created lazily
  below). A WeakMap remembers which callback belongs to which element.
*/

const callbacks = new WeakMap(); // element -> function to run when it becomes visible
let sharedObserver = null;

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          callbacks.get(entry.target)?.(); // flip `shown` to true for that element
          callbacks.delete(entry.target);
          sharedObserver.unobserve(entry.target); // reveal only once, then stop watching
        });
      },
      { threshold: 0.15 } // visible once 15% of the element is on screen
    );
  }
  return sharedObserver;
}

/**
 * Usage:
 *   const { ref, shown } = useReveal();
 *   <div ref={ref} className={shown ? "visible" : "hidden"} />
 */
export default function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    callbacks.set(el, () => setShown(true));
    observer.observe(el);

    // Cleanup if the component unmounts before it was ever revealed.
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return { ref, shown };
}