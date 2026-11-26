/**
 * NOVA VERA — PUBLICATIONS
 * Single source of truth for articles and research publications.
 *
 * TO ADD AN ARTICLE:
 *   - Copy one entry below
 *   - Change slug, title, description, date, tags, readTime
 *   - Save this file
 *   - The article appears automatically at /publications
 *
 * The founder-introduction article page is separately at
 * /publications/founder-introduction (already created in Batch 4).
 */

export interface Publication {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateDisplay: string;
  readTime: string;
  tags: string[];
  /** "published" shows normally, "in-progress" shows with a badge */
  status?: "published" | "in-progress";
}

export const publications: Publication[] = [
  {
    slug: "founder-introduction",
    title: "Founder Introduction: Lion S. Asjad Ali Jafri",
    description:
      "An introduction to the founder of Nova Vera AI & Robotics Lab — the journey through programming, agentic AI, robotics, and independent research that led to establishing the laboratory.",
    date: "2026-11-09",
    dateDisplay: "November 9, 2026",
    readTime: "8 min read",
    tags: ["Founder", "Laboratory", "Introduction", "Vision"],
    status: "published",
  },
];

export function getAllPublications(): Publication[] {
  return [...publications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPublication(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}