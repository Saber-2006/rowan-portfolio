// Case studies. To add a new one, copy an object below and change the values.
//
// Shape of each case:
//   id        unique string, used as the React key
//   client    client name shown on the image
//   category  decides which filter button shows it (the filter buttons are
//             generated from these values, so a new category appears automatically)
//   headline  big title of the card
//   summary   one or two sentences under the title
//   strategy  list of small tags
//   results   exactly 3 { value, label } pairs (the card lays them out in 3 columns)
//   image     TODO: replace the Unsplash placeholders with your own project images

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
  },
];