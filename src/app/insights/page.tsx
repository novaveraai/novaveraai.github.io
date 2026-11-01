import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical articles and engineering insights from Nova Vera AI & Robotics Lab.",
};

export default function InsightsPage() {
  return (
    <ComingSoon
      eyebrow="Insights"
      title="Technical writing coming soon"
      description="Articles on artificial intelligence, robotics, software engineering, and computational systems will be published here as the laboratory's work progresses."
      plannedItems={[
        "Technical deep-dives and tutorials",
        "Engineering notes and lessons learned",
        "Experiment write-ups",
        "Categorised by division and tag",
      ]}
      backHref="/"
      backLabel="Back to home"
    />
  );
}