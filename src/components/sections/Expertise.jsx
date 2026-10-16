import { useState } from "react";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import SectionLabel from "../ui/SectionLabel";
import { INDUSTRIES } from "../../data/industries";
import { STATS } from "../../data/site";

/**
 * "Where I excel": animated stat counters + clickable industry tabs.
 * `activeKey` is the only state, and it lives here, so clicking a tab
 * re-renders just this section and nothing else on the page.
 */
export default function Expertise() {
  const [activeKey, setActiveKey] = useState(INDUSTRIES[0].key);
  const current = INDUSTRIES.find((industry) => industry.key === activeKey);

  return (
    <section id="expertise" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Where I excel</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Industries and markets I know from the inside.
          </h2>
        </Reveal>

        {/* Stat counters: 2 columns on phones, 4 on desktop */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-3xl bg-paper p-6 md:p-8">
                <p className="font-display text-4xl tracking-tight md:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-black/55">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tabs: a button list on the left, the selected industry on the right.
            On phones the buttons scroll sideways; on desktop they stack vertically. */}
        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <div
            role="tablist"
            aria-label="Industries"
            className="flex gap-2 overflow-x-auto pb-2 md:col-span-5 md:flex-col md:overflow-visible md:pb-0"
          >
            {INDUSTRIES.map((industry) => {
              const isActive = industry.key === activeKey;
              return (
                <button
                  key={industry.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(industry.key)}
                  className={`shrink-0 rounded-2xl px-5 py-4 text-left text-sm transition md:text-base ${
                    isActive ? "bg-night text-white shadow-lg" : "bg-paper text-black/70 hover:bg-blush/50"
                  }`}
                >
                  {industry.title}
                </button>
              );
            })}
          </div>

          {/* `key` forces React to treat each industry as a new element, which
              restarts the fade-in animation every time you switch tabs. */}
          <div className="md:col-span-7">
            <div
              key={current.key}
              role="tabpanel"
              className="h-full animate-fade-in rounded-[2rem] bg-linear-to-br from-blush via-blush-soft to-white p-8 shadow-xl shadow-petal/30 md:p-12"
            >
              <h3 className="font-display text-3xl leading-tight md:text-4xl">{current.title}</h3>
              <p className="mt-5 text-lg text-black/65">{current.body}</p>

              <div className="mt-8 rounded-2xl border border-white/80 bg-white/70 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-accent">Proof</p>
                <p className="mt-2 font-medium">{current.proof}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}