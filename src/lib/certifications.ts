/**
 * NOVA VERA — CERTIFICATIONS
 * Single source of truth for the founder's certifications.
 * Add, edit, or remove entries here — the /certifications page updates automatically.
 *
 * All certificates below are issued by DigiSkills (Ministry of IT & Telecom,
 * Government of Pakistan) and are verifiable at https://digiskills.pk/verify
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
  /** Public verification link — where visitors can confirm the credential */
  verifyUrl?: string;
  /** Credential ID shown on the card */
  credentialId?: string;
  /** Optional category for grouping */
  category?: string;
}

export const certifications: Certification[] = [
  {
    id: "artificial-intelligence-python",
    name: "Artificial Intelligence using Python",
    issuer: "DigiSkills — Ministry of IT & Telecom, Government of Pakistan",
    status: "completed",
    description:
      "Machine learning fundamentals, data handling, and model building with Python.",
    image: "/certificates/artificial-intelligence-python.png",
    imageAlt:
      "Artificial Intelligence using Python certificate — Lion S. Asjad Ali Jafri",
    verifyUrl: "https://digiskills.pk/verify/?certificate_id=HERXT8SMK",
    credentialId: "HERXT8SMK",
    category: "AI",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    issuer: "DigiSkills — Ministry of IT & Telecom, Government of Pakistan",
    status: "completed",
    description:
      "Visual design principles, typography, layout, and brand identity.",
    image: "/certificates/graphic-design.png",
    imageAlt: "Graphic Design certificate — Lion S. Asjad Ali Jafri",
    verifyUrl: "https://digiskills.pk/verify/?certificate_id=YZ7Y233PQ",
    credentialId: "YZ7Y233PQ",
    category: "Design",
  },
  {
    id: "mern-stack",
    name: "Full Stack Development with MERN",
    issuer: "DigiSkills — Ministry of IT & Telecom, Government of Pakistan",
    status: "completed",
    description:
      "MongoDB, Express, React, and Node.js full-stack application development.",
    image: "/certificates/mern-stack-development.png",
    imageAlt:
      "Full Stack Development with MERN certificate — Lion S. Asjad Ali Jafri",
    verifyUrl: "https://digiskills.pk/verify/?certificate_id=HUD6X2GMK",
    credentialId: "HUD6X2GMK",
    category: "Web Development",
  },
  {
    id: "mobile-game-dart",
    name: "Mobile Game and App Development",
    issuer: "DigiSkills — Ministry of IT & Telecom, Government of Pakistan",
    status: "completed",
    description:
      "Cross-platform mobile and game development using Dart and Flutter.",
    image: "/certificates/mobile-app-game-development-dart.png",
    imageAlt:
      "Mobile Game and App Development certificate — Lion S. Asjad Ali Jafri",
    verifyUrl: "https://digiskills.pk/verify/?certificate_id=38AMZHTM",
    credentialId: "38AMZHTM",
    category: "Mobile",
  },
  {
    id: "ui-ux-webflow",
    name: "UI/UX & Webflow",
    issuer: "DigiSkills — Ministry of IT & Telecom, Government of Pakistan",
    status: "completed",
    description:
      "User interface and user experience design, plus Webflow site building.",
    image: "/certificates/ui-ux-design.png",
    imageAlt: "UI/UX & Webflow certificate — Lion S. Asjad Ali Jafri",
    verifyUrl: "https://digiskills.pk/verify/?certificate_id=GMF24JXMK",
    credentialId: "GMF24JXMK",
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