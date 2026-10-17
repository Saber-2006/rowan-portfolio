import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import portrait from "../../assets/images/portrait.png";

// Defined OUTSIDE the component so the array is created once, not on every render.
const VALUES = [
  { title: "Brand identity", text: "Positioning, visual systems, tone of voice." },
  { title: "Performance marketing", text: "Meta ads tied to CPL, CAC and ROAS." },
  { title: "Workflow automation", text: "Odoo, n8n and SOPs that scale teams." },
];

/** "Who I am": portrait on the left, bio and three skill cards on the right. */
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Portrait column (5 of 12 grid columns on desktop) */}
        <Reveal className="md:col-span-5">
          <div className="relative">
            {/* TODO: replace this gradient box with your portrait, e.g.
                <img src="/portrait.jpg" alt="Rowan Saber" width={800} height={1000} className="h-full w-full object-cover" />
                (put portrait.jpg in the /public folder) */}

            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-linear-to-br from-blush to-petal shadow-xl shadow-petal/40">
  <img
    src={portrait}
    alt="Rowan Saber"
    width={800}
    height={1000}
    loading="lazy"
    decoding="async"
    className="h-full w-full object-cover"
  />
</div>

            {/* Floating role badge overlapping the corner */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-lg backdrop-blur-md md:-right-8">
              <p className="text-xs uppercase tracking-widest text-black/50">Founder & CEO</p>
              <p className="mt-1 font-display text-lg">Etekk Agency</p>
            </div>
          </div>
        </Reveal>

        {/* Text column (7 of 12) */}
        <div className="md:col-span-7">
          <Reveal>
            {/* <SectionLabel>Who I am</SectionLabel> */}
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Helping your brand get closer to its <span className="text-accent">goals</span>—
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-black/65">
              <p>
I started in performance marketing and grew into brand strategy,
because the best results come from someone who understands the brand, 
the numbers and the operations behind them.
              </p>
              <p>
                Today I lead brand launches, social media, paid campaigns and
                CRM-driven lead generation for hospitality, F&B, creative studios and
                B2B businesses, and I automate the workflows that keep it all running
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-petal hover:shadow-lg"
                >
                  <p className="font-medium">{value.title}</p>
                  <p className="mt-2 text-sm text-black/55">{value.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}