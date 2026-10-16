import { useEffect, useState } from "react";
import useReveal from "../../hooks/useReveal";

const DURATION = 1400; // how long the count-up lasts, in milliseconds

/**
 * A number that counts from 0 up to `to` the first time it scrolls into view.
 * It uses requestAnimationFrame, which runs in sync with the screen refresh,
 * and an "ease-out cubic" curve so it starts fast and slows near the end.
 */
export default function Counter({ to, suffix = "" }) {
  const { ref, shown } = useReveal();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shown) return; // wait until the counter is visible

    const start = performance.now();
    let frame = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1); // 0 -> 1
      const eased = 1 - Math.pow(1 - progress, 3);            // ease-out cubic
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame); // stop if unmounted mid-animation
  }, [shown, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}