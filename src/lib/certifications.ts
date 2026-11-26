/**
 * NOVA VERA — CERTIFICATIONS
 * Single source of truth for the founder's certifications.
 * Add, edit, or remove entries here — the /certifications page updates automatically.
 */

export type CertStatus = "completed" | "in-progress" | "planned";

export interface Certification {
  /** Unique id (used as React key and for anchor links) */
  id: string;
  /** Certificate name — appears as the card title */
  name: string;
  /** Issuer (platform, university, company) */
  issuer: string;
  /** Optional issue date — e.g. "March 2025" */
  date?: string;
  /** Status */
  status: CertStatus;
  /** Short description — one sentence explaining what it covers */
  description?: string;
  /** Public path under /public, e.g. "/certificates/artificial-intelligence-python.png" */
  image?: string;
  /** SEO alt text for the certificate image */
  imageAlt?: string;
  /** Optional public verification link — where users can confirm the cert */
  verifyUrl?: string;
  /** Optional credential ID shown on the card */
  credentialId?: string;
  /** Optional category for grouping: AI, Data, Design, Web, etc. */
  category?: string;
}

export const certifications: Certification[] = [
  {
    id: "artificial-intelligence-python",
    name: "Artificial Intelligence using Python",
    issuer: "—",
    status: "completed",
    description:
      "Machine learning fundamentals, data handling, and model building with Python.",
    image: "/certificates/artificial-intelligence-python.png",
    imageAlt:
      "Artificial Intelligence using Python certificate — Lion S. Asjad Ali Jafri",
    category: "AI",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    issuer: "—",
    status: "completed",
    description:
      "Visual design principles, typography, layout, and brand identity.",
    image: "/certificates/graphic-design.png",
    imageAlt: "Graphic Design certificate — Lion S. Asjad Ali Jafri",
    category: "Design",
  },
  {
    id: "mern-stack",
    name: "MERN Stack Software Development",
    issuer: "Virtual University Pakistan",
    status: "completed",
    description:
      "MongoDB, Express, React, and Node.js full-stack application development.",
    image: "/certificates/mern-stack-development.png",
    imageAlt:
      "MERN Stack Software Development certificate — Lion S. Asjad Ali Jafri",
    category: "Web Development",
  },
  {
    id: "mobile-game-dart",
    name: "Mobile App & Game Development with Dart",
    issuer: "—",
    status: "completed",
    description:
      "Cross-platform mobile and game development using Dart and Flutter.",
    image: "/certificates/mobile-app-game-development-dart.png",
    imageAlt:
      "Mobile App & Game Development with Dart certificate — Lion S. Asjad Ali Jafri",
    category: "Mobile",
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    issuer: "—",
    status: "completed",
    description:
      "User interface and user experience design fundamentals.",
    image: "/certificates/ui-ux-design.png",
    imageAlt: "UI/UX Design certificate — Lion S. Asjad Ali Jafri",
    category: "Design",
  },
];

/**
 * Status labels for display.
 */
export const statusLabels: Record<CertStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

/**
 * Group certifications by status for the /certifications page.
 */
export function certificationsByStatus() {
  return {
    completed: certifications.filter((c) => c.status === "completed"),
    inProgress: certifications.filter((c) => c.status === "in-progress"),
    planned: certifications.filter((c) => c.status === "planned"),
  };
}