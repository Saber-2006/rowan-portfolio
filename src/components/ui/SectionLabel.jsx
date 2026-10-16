/** The small pill with a pink dot above each section heading. */
export default function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-petal bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}