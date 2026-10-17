import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CASES } from "../data/cases";
import NotFound from "./NotFound";
import CaseHero from "../components/case-study/CaseHero";
import CaseChallenge from "../components/case-study/CaseChallenge";
import CaseApproach from "../components/case-study/CaseApproach";
import CaseResults from "../components/case-study/CaseResults";
import CaseNext from "../components/case-study/CaseNext";

/**
 * One full case study. The address /case-studies/hula gives useParams() the
 * value { id: "hula" }, and we look that id up in data/cases.js.
 * So adding an object to cases.js is all it takes to create a new page.
 */
export default function CaseStudyPage() {
  const { id } = useParams();
  const study = CASES.find((c) => c.id === id);

  // Put the client name in the browser tab (good for bookmarks and Google),
  // and restore the old title when leaving the page.
  useEffect(() => {
    if (!study) return;
    const previous = document.title;
    document.title = `${study.client} · Case study — Rowan Saber`;
    return () => {
      document.title = previous;
    };
  }, [study]);

  // Unknown id, e.g. /case-studies/typo
  if (!study) return <NotFound />;

  // The next case in the list; after the last one it loops back to the first.
  const next = CASES[(CASES.indexOf(study) + 1) % CASES.length];

  return (
    <article>
      <CaseHero study={study} />
      <CaseChallenge text={study.challenge} />
      <CaseApproach steps={study.approach} />
      <CaseResults results={study.results} outcome={study.outcome} takeaway={study.takeaway} />
      <CaseNext next={next} />
    </article>
  );
}
