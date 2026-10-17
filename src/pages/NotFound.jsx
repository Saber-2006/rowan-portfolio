import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/** Shown for any address that doesn't exist, e.g. /case-studies/typo */
export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-5 pt-32 md:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">This page doesn't exist.</h1>
      <p className="mt-6 max-w-md text-lg text-black/60">The link may be broken, or the page may have moved.</p>
      <Link
        to="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-night px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25"
      >
        <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
        Back to home
      </Link>
    </section>
  );
}
