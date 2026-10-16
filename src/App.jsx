import { lazy, Suspense } from "react";

// Always needed for the first screen, so they load together with the main bundle.
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

/*
  Code splitting: everything below the first screen is loaded with lazy().
  Vite turns each one into its own small JavaScript file, so the browser can
  paint the hero first and fetch the rest right afterwards, instead of
  downloading the whole site before showing anything.

  To switch this off, replace each line with a normal import, e.g.
    import Expertise from "./components/sections/Expertise";
*/
const Expertise = lazy(() => import("./components/sections/Expertise"));
const Process = lazy(() => import("./components/sections/Process"));
const CaseStudies = lazy(() => import("./components/sections/CaseStudies"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

/**
 * App only arranges the sections in order. It holds NO state itself, so nothing
 * here re-renders after the first paint: every interactive piece (menu, tabs,
 * filters, form) keeps its own state inside its own component.
 */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased selection:bg-blush">
      <Navbar />

      <main>
        <Hero />
        <About />

        {/* While the lazy sections download, show an empty placeholder that
            keeps some height so the page doesn't collapse and jump. */}
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Expertise />
          <Process />
          <CaseStudies />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
