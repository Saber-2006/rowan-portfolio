// Site-wide content: contact details, navigation, the scrolling ticker and the headline stats.
// Edit the values here and every component that uses them updates automatically.

export const CONTACT = {
  email: "rewaansaaber96@gmail.com ",       
  instagram: "https://www.instagram.com/rowansaaber?obrf=N3VmMDlxeW9mcDFq", 
  linkedin: "https://www.linkedin.com/in/rewan-saber-dm", 
};

// `href` values must match the `id` of a <section> on the page.
export const NAV = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// Short phrases that scroll across the page under the hero.
export const TICKER = [
  "Based in Dubai",
  "Working across UAE · GCC · Egypt",
  "Currently: brand launches & performance marketing",
  "Open to new partnerships",
];

// Animated counters in the Expertise section.
// `value` is the number it counts up to, `suffix` is shown right after it.
export const STATS = [
  { value: 7, suffix: "+", label: "Years in digital marketing" },
  { value: 3, suffix: "", label: "Markets: UAE, GCC, Egypt" },
  { value: 429, suffix: "K", label: "Organic views in one launch month" },
  { value: 23, suffix: "×", label: "Peak ROAS on lead generation" },
];