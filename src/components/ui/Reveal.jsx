import useReveal from "../../hooks/useReveal";

/**
 * Wrap anything in <Reveal> to fade + slide it up when it scrolls into view.
 *
 * Props:
 *   delay      milliseconds to wait before animating (use it to stagger items)
 *   className  extra classes, e.g. grid column spans
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const { ref, shown } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}