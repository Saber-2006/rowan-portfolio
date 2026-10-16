/**
 * One row in the "How I work" list.
 * The parent decides which step is `active`; the active one expands to show its text.
 *
 * The expand animation uses the CSS grid trick: animating grid-template-rows
 * from 0fr to 1fr smoothly grows the element to its natural height. Animating
 * `height: auto` directly isn't possible in CSS.
 */
export default function ProcessStep({ step, active, onActivate }) {
  const Icon = step.icon;

  return (
    <button
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-expanded={active}
      className={`group relative flex w-full items-start gap-5 rounded-3xl border p-5 text-left transition-all md:gap-8 md:p-8 ${
        active
          ? "border-petal bg-white shadow-xl shadow-petal/25"
          : "border-transparent bg-transparent hover:bg-white/70"
      }`}
    >
      {/* Round icon: black when active, pink when not */}
      <span
        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition ${
          active ? "bg-night text-white" : "bg-blush text-ink"
        }`}
      >
        <Icon size={20} aria-hidden="true" />
      </span>

      <div className="flex-1">
        <span className="text-sm text-accent">Step {step.n}</span>
        <h3 className="mt-1 font-display text-2xl md:text-3xl">{step.title}</h3>

        {/* Expanding description */}
        <div
          className={`grid transition-all duration-500 ${
            active ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-black/60 md:text-lg">{step.body}</p>
        </div>
      </div>
    </button>
  );
}