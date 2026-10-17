import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT } from "../../data/site";

/*
  Styles written once and reused (so changing the look means editing one line).

  LABEL   small, uppercase, widely spaced text above each field
  FIELD   "underline" inputs: no box, just a dark line under the text.
          The line turns pink while you type. `tracking-[0.12em]` is the wide
          letter spacing you see inside the fields and in the placeholders.
*/
const LABEL = "block text-xs uppercase tracking-[0.25em] text-black/55";
const FIELD =
  "mt-3 w-full rounded-none border-b border-ink bg-transparent pb-4 text-lg tracking-[0.12em] outline-none transition placeholder:text-black/35 focus:border-accent";

// The first option is selected by default. The text is also what appears in the email.
const BUDGETS = ["Under 5K AED", "5K – 15K AED", "15K+ AED", "Project based"];

/**
 * Contact form with no backend: on submit it builds a `mailto:` link, which
 * opens the visitor's own email app with the message already written.
 *
 * To store submissions instead, replace the body of handleSubmit with a
 * fetch() call to Formspree, Supabase, or your own API.
 *
 * The form has no card or background of its own: it sits directly on whatever
 * section it is placed in.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser's default page reload

    // FormData reads every input by its `name` attribute.
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New project enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBrand: ${data.get("brand") || "-"}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Name + email side by side on tablets and up, stacked on phones */}
      <div className="grid gap-10 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>Your name</span>
          <input required name="name" type="text" autoComplete="name" placeholder="Jane Doe" className={FIELD} />
        </label>

        <label className="block">
          <span className={LABEL}>Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@brand.com"
            className={FIELD}
          />
        </label>
      </div>

      <label className="block">
        <span className={LABEL}>Brand / business</span>
        <input name="brand" type="text" autoComplete="organization" placeholder="Your brand name" className={FIELD} />
      </label>

      {/* Budget as clickable pills. Each pill is a real radio button hidden with
          `sr-only` (invisible but still usable with keyboard and screen readers).
          The visible pill is the <span> after it, and `peer-checked:` colours it
          pink when its radio is selected. Only one can be selected at a time. */}
      <fieldset>
        <legend className={LABEL}>Monthly budget</legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {BUDGETS.map((budget, i) => (
            <label key={budget} className="cursor-pointer">
              <input
                type="radio"
                name="budget"
                value={budget}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-ink px-5 py-3 text-base transition hover:border-accent peer-checked:bg-pink peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2">
                {budget}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className={LABEL}>Tell me about your goals</span>
        <textarea required name="message" rows={4} className={`${FIELD} resize-none`} />
      </label>

      {/* Full-width pink pill with a dark outline */}
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-ink bg-pink  px-7 py-5 text-lg font-medium text-ink transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25"
      >
        {sent ? "Opening your email app…" : "Send message"}
        <Send size={18} className="transition group-hover:translate-x-1" />
      </button>
    </form>
  );
}