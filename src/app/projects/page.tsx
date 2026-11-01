import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects from Nova Vera AI & Robotics Lab — completed, active, and experimental work.",
};

const statusStyles: Record<string, string> = {
  Completed: "border-green-500/40 text-green-400",
  "Active Development": "border-brand-primary/50 text-brand-primary",
  Experimental: "border-yellow-500/40 text-yellow-400",
  Archived: "border-line-soft text-text-muted",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="container-nv pt-24 pb-16">
        <SectionHeading
          eyebrow="Projects"
          title="Engineering portfolio"
          description="Completed, ongoing, and experimental work from the laboratory."
        />
      </section>

      <section className="container-nv pb-24">
        {projects.length === 0 ? (
          <GlassCard className="p-14 text-center">
            <FolderOpen size={28} className="mx-auto text-brand-primary" />
            <p className="mono mt-6 text-[11px] uppercase tracking-[0.22em] text-text-muted">
              In development
            </p>
            <h2 className="mt-3 font-heading text-xl md:text-2xl">
              No public projects yet
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
              Projects will appear here as they reach a presentable milestone.
              The laboratory publishes work honestly — nothing is listed until
              it exists.
            </p>
            <Link href="/products" className="btn btn-ghost mt-8">
              Browse products instead
            </Link>
          </GlassCard>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <GlassCard key={p.slug} accent className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-heading text-lg">{p.title}</h3>
                  <span
                    className={`mono rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] ${
                      statusStyles[p.status] ?? statusStyles["Archived"]
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="mono rounded border border-line-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-brand-primary hover:underline"
                  >
                    View project <ArrowRight size={14} />
                  </a>
                )}
              </GlassCard>
            ))}
          </div>
        )}
      </section>
    </>
  );
}