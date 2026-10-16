import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT } from "../../data/site";

// Shared by every input so the styling is written once.
const FIELD =
  "mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-blush/60";

const BUDGETS = [
  "Under 5,000 AED / month",
  "5,000 – 15,000 AED / month",
  "15,000+ AED / month",
  "Project based",
];

/**
 * Contact form with no backend: on submit it builds a `mailto:` link, which
 * opens the visitor's own email app with the message already written.
 *
 * To store submissions instead, replace the body of handleSubmit with a
 * fetch() call to Formspree, Supabase, or your own API.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser's default page reload

    // FormData reads every input by its `name` attribute.
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New project enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-2xl shadow-petal/30 backdrop-blur-xl md:p-10"
    >
      <label className="mb-5 block">
        <span className="text-sm text-black/60">Your name</span>
        <input required name="name" type="text" autoComplete="name" className={FIELD} />
      </label>

      <label className="mb-5 block">
        <span className="text-sm text-black/60">Email</span>
        <input required name="email" type="email" autoComplete="email" className={FIELD} />
      </label>

      <label className="mb-5 block">
        <span className="text-sm text-black/60">Budget</span>
        <select name="budget" className={FIELD}>
          {BUDGETS.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </label>

      <label className="mb-6 block">
        <span className="text-sm text-black/60">Tell me about your brand</span>
        <textarea required name="message" rows={4} className={`${FIELD} resize-none`} />
      </label>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-night px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25"
      >
        {sent ? "Opening your email app…" : "Send message"}
        <Send size={15} className="transition group-hover:translate-x-1" />
      </button>
    </form>
  );
}