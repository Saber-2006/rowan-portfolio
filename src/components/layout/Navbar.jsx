import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV } from "../../data/site";
import useScrolled from "../../hooks/useScrolled";

/**
 * Fixed top navigation.
 *  - Transparent at the top of the page, frosted glass once you scroll.
 *  - Desktop: inline links. Mobile: hamburger button that opens a dropdown.
 *
 * Links use <Link to="/#section"> (with the leading slash), so they work from
 * ANY page: on a case study page, "About" takes you back to Home and scrolls
 * to the About section.
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
        {/* Logo: goes to the Home page */}
       <Link to="/" className="inline-flex items-baseline gap-2">
  <span className="font-script text-[30px] font-normal leading-[36px] text-hot-pink">Rowan</span>
  <span className="font-instrument text-[24px] font-normal leading-[32px] tracking-[0.6px] text-ink">
    Saber
  </span>
</Link>

        {/* Desktop links (hidden below the md breakpoint).
            The pink underline is a ::after element that grows on hover. */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                to={`/${item.href}`}
                className="relative text-black/70 transition hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop call-to-action */}
        <Link
          to="/#contact"
          className="hidden rounded-full border-2 border-ink bg-pink  px-2 py-1 font-bold text-sm text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 hover:bg-black hover:text-white md:inline-flex"
        >
          Book a discovery call
        </Link>

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
            <Link
              key={item.href}
              to={`/${item.href}`}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-black/5 py-4 font-display text-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}