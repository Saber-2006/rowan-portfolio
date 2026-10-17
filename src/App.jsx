import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollManager from "./components/layout/ScrollManager";

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
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

/**
 * App arranges the page frame (navbar, footer) and decides which page shows
 * in the middle, based on the address:
 *
 *   /                    -> the Home sections
 *   /case-studies/:id    -> one full case study (":id" is read from the address)
 *   anything else        -> NotFound
 *
 * It holds NO state itself, so nothing here re-renders after the first paint:
 * every interactive piece (menu, tabs, filters, form) keeps its own state
 * inside its own component.
 */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased selection:bg-blush">
      {/* Handles scroll-to-top on new pages and scroll-to-section for /#links */}
      <ScrollManager />
      <Navbar />

      <main>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          {/* Full case study page */}
          <Route
            path="case-studies/:id"
            element={
              <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
                <CaseStudyPage />
              </Suspense>
            }
          />

          {/* Any other address */}
          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}