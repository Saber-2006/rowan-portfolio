// Case studies. They feed BOTH the cards on the home page AND the full case study
// pages (each card links to /case-studies/<id>). To add a new one, copy an object
// below and change the values: the card and its page are created automatically.
//
// Shape of each case:
//   id        unique and URL-safe (lowercase, no spaces). It becomes the page address,
//             e.g. id "hula" -> /case-studies/hula
//   client    client name shown on the image
//   category  decides which filter button shows it (the filter buttons are
//             generated from these values, so a new category appears automatically)
//   headline  big title of the card and of the page
//   summary   one or two sentences under the title
//   strategy  list of small tags (also shown as "Services" on the page)
//   results   exactly 3 { value, label } pairs (the card lays them out in 3 columns)
//   image     TODO: replace the Unsplash placeholders with your own project images
//
//   Only used on the full page:
//   challenge  the starting problem, 1-2 sentences
//   approach   list of { title, body }, one per step of the work (3 works best)
//   outcome    what happened, 1-2 sentences
//   takeaway   one-line lesson shown as a quote
//
// TODO: the challenge / approach / outcome / takeaway texts were drafted from the
// short summaries above. Replace them with the real story and extra details.

export const CASES = [
  {
    id: "hula",
    client: "HULA HAZE Beach Club",
    category: "Hospitality",
    headline: "A launch month that went 98.5% organic",
    summary:
      "Built the brand and social assets for a new beach club's first summer, then let real guests and creators carry the story.",
    strategy: ["Brand & social asset system", "Guest-led feedback reels", "Creator & partner collabs"],
    results: [
      { value: "429K", label: "Instagram views" },
      { value: "134K", label: "Accounts reached" },
      { value: "98.5%", label: "Organic share" },
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    challenge:
      "A brand-new beach club has no audience and no history, and one summer to prove itself. The goal was a full venue from opening week.",
    approach: [
      {
        title: "Brand & social asset system",
        body: "Built the visual identity and a reusable set of social assets, so every post looked like the same brand from day one.",
      },
      {
        title: "Guest-led feedback reels",
        body: "Let real guests tell the story, with short reels built from their reactions instead of polished ads.",
      },
      {
        title: "Creator & partner collabs",
        body: "Invited creators and partners to experience the venue and share it with their own audiences.",
      },
    ],
    outcome:
      "In its first month the club's Instagram reached 134K accounts and earned 429K views, 98.5% of them organic.",
    takeaway: "When the venue itself is the content, guests and creators do most of the marketing.",
  },
  {
    id: "clario",
    client: "Clario Cakehouse",
    category: "F&B",
    headline: "From losing money on ads to 100 orders a month",
    summary:
      "Restructured the Meta account around purchases and rebuilt creative around the product, while spending less.",
    strategy: ["Purchase-optimised campaigns", "Product & blogger video", "Fast creative testing"],
    results: [
      { value: "100", label: "Orders / month" },
      { value: "−66%", label: "Cost per purchase" },
      { value: "0.9→2.1×", label: "ROAS" },
    ],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80",
    challenge:
      "The Meta ad account was spending without bringing in enough orders, and the creative wasn't built around the product.",
    approach: [
      {
        title: "Purchase-optimised campaigns",
        body: "Restructured the account so every campaign is built around purchases.",
      },
      {
        title: "Product & blogger video",
        body: "Rebuilt the creative around the product itself, with video content made with bloggers.",
      },
      {
        title: "Fast creative testing",
        body: "Tested new creative quickly and kept what lowered the cost per purchase.",
      },
    ],
    outcome: "Orders reached 100 a month and cost per purchase fell 66%, while ROAS moved from 0.9 to 2.1×.",
    takeaway: "What the account optimises for, and what the ad shows, mattered more than raising the budget.",
  },
  {
    id: "oak",
    client: "One of a Kind Studio",
    category: "Workshops",
    headline: "A 1,200 AED course became sold-out weekend workshops",
    summary:
      "Fixed the offer first: split one expensive course into affordable themed workshops, then built content and community around them.",
    strategy: ["Offer & pricing redesign", "Process-led reels", "Messaging ads per workshop date"],
    results: [
      { value: "929", label: "Contacts in a season" },
      { value: "+417%", label: "Organic contacts" },
      { value: "1.52 AED", label: "Best cost per chat" },
    ],
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=1200&q=80",
    challenge:
      "A single 1,200 AED course was a hard sell, so the problem started with the offer, before any advertising.",
    approach: [
      {
        title: "Offer & pricing redesign",
        body: "Split the one expensive course into affordable themed workshops that are easier to say yes to.",
      },
      {
        title: "Process-led reels",
        body: "Showed the making process in short reels, so people could see what a workshop feels like.",
      },
      {
        title: "Messaging ads per workshop date",
        body: "Ran message-based ads for each workshop date to start conversations with interested people.",
      },
    ],
    outcome: "929 contacts in a season, organic contacts up 417%, and a best cost per chat of 1.52 AED.",
    takeaway: "Fix the offer first, so the ads have something worth promoting.",
  },
  {
    id: "obh",
    client: "Octopus Business Hub",
    category: "B2B",
    headline: "Lead generation traced all the way to revenue",
    summary:
      "Connected Meta lead ads to the Odoo CRM to measure cost per qualified lead, CAC and ROAS by campaign.",
    strategy: ["Meta Lead Ads + CBO", "CRM funnel analysis", "Tracking audit & fixes"],
    results: [
      { value: "2,050", label: "Leads" },
      { value: "21", label: "Clients closed" },
      { value: "18–23×", label: "ROAS" },
    ],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    challenge:
      "Leads were coming in, but the ad spend wasn't yet traced to the clients who actually closed.",
    approach: [
      {
        title: "Meta Lead Ads + CBO",
        body: "Ran Meta lead ads with campaign budget optimisation to generate leads at scale.",
      },
      {
        title: "CRM funnel analysis",
        body: "Connected the ads to the Odoo CRM to measure cost per qualified lead, CAC and ROAS by campaign.",
      },
      {
        title: "Tracking audit & fixes",
        body: "Audited the tracking and fixed the gaps, so reported numbers matched what the CRM showed.",
      },
    ],
    outcome: "2,050 leads, 21 clients closed, and a ROAS of 18–23×.",
    takeaway: "Tie every dirham of spend to a closed client and optimisation gets much simpler.",
  },
];