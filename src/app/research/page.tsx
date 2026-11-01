import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Beaker, Bot, Cpu, Eye, Boxes, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { divisions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research divisions at Nova Vera AI & Robotics Lab — AI, robotics, software engineering, computer vision, and embedded systems.",
};

const divisionIcons = [Beaker, Bot, Cpu, Eye, Boxes];

export default function ResearchPage() {
  return (
    <>
      <section className="container-nv pt-24 pb-16">
        <SectionHeading
          eyebrow="Research"
          title="Research divisions"
          description="Five intersecting technical disciplines form the foundation of the laboratory's research and development work."
        />
      </section>

      {/* Divisions */}
      <section className="container-nv pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {divisions.map((d, i) => {
            const Icon = divisionIcons[i] ?? Beaker;
            return (
              <GlassCard key={d.title} accent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line-soft">
                    <Icon size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg">{d.title}</h2>
                    <p className="mt-2 text-sm text-text-secondary">
                      {d.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Research output note */}
      <section className="container-nv pb-24">
        <GlassCard className="p-10 md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-brand-primary" />
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                  Research output
                </p>
              </div>
              <h2 className="mt-3 font-heading text-xl md:text-2xl">
                Detailed research documentation is in progress
              </h2>
              <p className="mt-3 text-sm text-text-secondary">
                Published papers, technical reports, and experimental
                documentation will appear in the Publications section as they are
                completed. Nothing is listed until it exists — the laboratory
                publishes work honestly.
              </p>
            </div>
            <Link href="/publications" className="btn btn-ghost shrink-0 text-xs">
              Publications <ArrowRight size={14} />
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}