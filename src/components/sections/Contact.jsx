import { ArrowUpRight, Mail } from "lucide-react";
import { Instagram, Linkedin } from "../ui/BrandIcons";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import ContactForm from "../forms/ContactForm";
import { CONTACT } from "../../data/site";

// Built once at load time because CONTACT never changes while the page is open.
const LINKS = [
  { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Instagram, label: "Instagram", href: CONTACT.instagram },
  { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin },
];

/** "Let's connect": headline + contact links on the left, the form on the right. */
export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* Decorative blurred blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blush opacity-60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <SectionLabel>Let's connect</SectionLabel>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-6xl">
            Have a brand that deserves more attention?
          </h2>
          <p className="mt-6 max-w-md text-lg text-black/60">
            Tell me where you are and where you want to be. I reply within two working days.
          </p>

          <div className="mt-10 space-y-3">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                // Only web links open in a new tab; mailto: links should not.
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-5 py-4 backdrop-blur transition hover:border-petal hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} /> {label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}