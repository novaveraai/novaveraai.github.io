/**
 * NOVA VERA — CENTRAL SITE CONFIG
 * Single source of truth for identity, contact, navigation, and social links.
 * Edit here → changes propagate across every page.
 */

export const site = {
  name: "Nova Vera AI & Robotics Lab",
  shortName: "Nova Vera",
  subtitle: "Independent AI Research Laboratory",
  tagline: "Research. Engineer. Innovate.",
  motto: "Beyond Code. Beyond Machines. Toward Intelligence.",
  description:
    "An independent research laboratory exploring artificial intelligence, robotics, software engineering and emerging computational technologies.",

  founder: {
    name: "S. Asjad Ali Jafri",
    designation: "Founder & Lead Researcher",
  },

  disciplines: "AI • ROBOTICS • COMPUTER VISION • AUTOMATION",

  // ⚠️ Replace with your real domain before public launch.
  // For v1 on GitHub Pages user site this stays as shown.
  url: "https://novaveraai.github.io",

  contact: {
    email: "novaveraai@gmail.com",
  },

  // ─────────────────────────────────────────────────────────────
  // SOCIAL LINKS
  // Real URLs are used where provided. Placeholders (null) are
  // hidden from the UI — never shipped as dead "#" links.
  // When you have the real URL, replace null with the string.
  // ─────────────────────────────────────────────────────────────
   social: {
    github: "https://github.com/novaveraai",
    linkedin: "https://www.linkedin.com/in/nova-veraai-587712421/",
    youtube: "https://www.youtube.com/@NovaveraAI",
    whatsappChannel: "https://whatsapp.com/channel/0029VbD0w9tCxoAyG0KOzL3w",
    whatsappGroup: "https://chat.whatsapp.com/G0byg65j2y5CIIr5e8yS8o",
    gumroad: "https://novaveraai.gumroad.com/",
    instagram: null as string | null,
  },

  // ─────────────────────────────────────────────────────────────
  // PRIMARY NAVIGATION
  // Order matters — this is what renders in the navbar.
  // `stub: true` pages get a "Coming Soon" treatment.
  // ─────────────────────────────────────────────────────────────
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Research", href: "/research", stub: true },
    { label: "Projects", href: "/projects" },
    { label: "Products", href: "/products" },
    { label: "Publications", href: "/publications", stub: true },
    { label: "Insights", href: "/insights", stub: true },
    { label: "Contact", href: "/contact" },
  ],

  // Footer legal / meta
  copyright: `© ${new Date().getFullYear()} Nova Vera AI & Robotics Lab. All rights reserved.`,
} as const;

export type SiteConfig = typeof site;