import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../../data/site";
import useScrolled from "../../hooks/useScrolled";

/**
 * Fixed top navigation.
 *  - Transparent at the top of the page, frosted glass once you scroll.
 *  - Desktop: inline links. Mobile: hamburger button that opens a dropdown.
 *
 * The menu-open and scrolled state live HERE (not in App), so toggling the
 * menu only re-renders the navbar instead of the entire page.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-black/5 bg-white/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a href="#top" className="font-display text-xl tracking-tight">
          Rowan<span className="text-accent">.</span>
        </a>

        {/* Desktop links (hidden below the md breakpoint).
            The pink underline is a ::after element that grows on hover. */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-black/70 transition hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop call-to-action */}
        <a
          href="#contact"
          className="hidden rounded-full bg-night px-5 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 md:inline-flex"
        >
          Let's talk
        </a>

        {/* Mobile hamburger / close button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="rounded-full p-2 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown. Tapping a link closes it. */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-black/5 bg-white/95 px-5 pb-6 backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-black/5 py-4 font-display text-lg"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
