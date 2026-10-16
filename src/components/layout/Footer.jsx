/** Bottom strip of the page. The year updates itself every January. */
export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <p className="font-display text-3xl">
          Rowan <em className="text-accent">Saber</em>
        </p>
        <p className="text-sm text-black/50">Brand strategy · Performance marketing · Automation — Dubai</p>
        <p className="text-sm text-black/40">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
