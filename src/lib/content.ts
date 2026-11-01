/**
 * NOVA VERA — CONTENT LAYER
 * Typed records for products, projects, and articles.
 * Version 1.0 = static records here. Migrate to MDX/CMS later.
 *
 * RULES (from PID §15):
 * - No invented achievements
 * - No placeholder products presented as live
 * - Every status field reflects reality
 */

// ─────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────
export type ProductStatus = "Live" | "In Development" | "Beta" | "Archived";

export interface Product {
  slug: string;
  name: string;
  /** Single-letter dragon logo */
  logoLetter: "N" | "O" | "S" | "A" | "D";
  /** One-line tagline (appears on the products index) */
  tagline: string;
  /** Full description (appears on the product page) */
  description: string;
  /** Concise feature bullet list */
  features: string[];
  /** Technology stack */
  stack: string[];
  status: ProductStatus;
  /** Optional external links — null means "not available yet", link is hidden */
  links: {
    github: string | null;
    docs: string | null;
    gumroad: string | null;
  };
}

export const products: Product[] = [
  {
    slug: "ordumind",
    name: "Ordumind",
    logoLetter: "O",
    tagline: "Intelligent task management for focused work.",
    description:
      "Ordumind is a task management system designed around cognitive clarity — organizing work into structured, prioritized flows so users can focus on execution rather than organization.",
    features: [
      "Structured task organization and prioritization",
      "Focused workflow views",
      "Local-first data model (no mandatory cloud dependency)",
    ],
    stack: ["Next.js", "TypeScript", "Local-first storage"],
    status: "In Development",
    links: {
      github: null,
      docs: null,
      gumroad: null,
    },
  },
  {
    slug: "dragon-sentinel",
    name: "Dragon Sentinel",
    logoLetter: "S",
    tagline: "System monitoring and security oversight.",
    description:
      "Dragon Sentinel is a monitoring and oversight tool for tracking system state and surfacing anomalies — built as a foundation for autonomous defensive software.",
    features: [
      "System state monitoring",
      "Anomaly detection surface",
      "Extensible alerting pipeline",
    ],
    stack: ["TypeScript", "Node.js", "Desktop"],
    status: "In Development",
    links: {
      github: null,
      docs: null,
      gumroad: null,
    },
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS
// Empty for v1. Add real entries here as they're completed.
// ─────────────────────────────────────────────────────────────
export type ProjectStatus =
  | "Completed"
  | "Active Development"
  | "Experimental"
  | "Archived";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  href: string | null;
}

export const projects: Project[] = [
  // Populate with real projects only — no placeholders (PID §15.6)
];

// ─────────────────────────────────────────────────────────────
// ARTICLES / INSIGHTS
// Empty for v1. Add real entries here.
// ─────────────────────────────────────────────────────────────
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO 8601
  tags: string[];
}

export const articles: Article[] = [
  // Populate with real posts only
];

// ─────────────────────────────────────────────────────────────
// RESEARCH DIVISIONS
// These reflect Nova Vera's stated research interests (PID §5).
// ─────────────────────────────────────────────────────────────
export interface Division {
  title: string;
  description: string;
}

export const divisions: Division[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Machine learning, neural networks, large language models, and experimental AI architectures.",
  },
  {
    title: "Robotics & Autonomous Systems",
    description:
      "Embedded intelligence, sensor integration, and autonomous robotic control systems.",
  },
  {
    title: "Software Engineering",
    description:
      "Systems programming, full-stack development, and offline-capable software architecture.",
  },
  {
    title: "Computer Vision",
    description:
      "Image processing, object detection, and camera-based perception for robotic systems.",
  },
  {
    title: "Embedded Systems & Automation",
    description:
      "Microcontroller systems, IoT integration, and hardware-software automation.",
  },
];

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}