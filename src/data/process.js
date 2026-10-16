// The five steps in the "How I work" section.
// `icon` is a lucide-react component (not a string), rendered as <step.icon />.
import { Search, Palette, Workflow, Rocket, LineChart } from "lucide-react";

export const PROCESS = [
  {
    n: "01",
    icon: Search,
    title: "Deep Brainstorming & Market Audit",
    body: "Audience research, competitor mapping and a hard look at the offer itself. Most growth problems start before the ad.",
  },
  {
    n: "02",
    icon: Palette,
    title: "Creative Direction & Brand DNA",
    body: "Mood boards, aesthetic profiling, tone of voice and the messaging pillars every asset is built on.",
  },
  {
    n: "03",
    icon: Workflow,
    title: "Architecture & Automation",
    body: "System design, CRM and Odoo set-up, n8n automations and SOPs, so leads never fall through the cracks.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Execution & Launch",
    body: "Omnichannel campaigns, paid social, creator collaborations and design rolled out on a fixed rhythm.",
  },
  {
    n: "05",
    icon: LineChart,
    title: "Optimization & Growth",
    body: "Weekly reporting on CPL, CAC and ROAS. Scale what sells, cut what doesn't, and prove it with numbers.",
  },
];