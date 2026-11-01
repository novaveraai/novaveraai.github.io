import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Research publications, technical reports, and engineering documentation from Nova Vera AI & Robotics Lab.",
};

export default function PublicationsPage() {
  return (
    <ComingSoon
      eyebrow="Publications"
      title="Publication catalogue in progress"
      description="Technical papers, research reports, and engineering documentation will be catalogued here as the laboratory's research output matures."
      plannedItems={[
        "Peer-reviewed papers and preprints",
        "Technical reports and engineering notes",
        "Experimental documentation",
        "Searchable by division and category",
      ]}
      backHref="/research"
      backLabel="Explore research divisions"
    />
  );
}