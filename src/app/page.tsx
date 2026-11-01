import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Compass, Cog } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import DragonLogo from "@/components/DragonLogo";
import { site } from "@/lib/site";
import { divisions } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.subtitle}. Mission, philosophy, founder, and research direction.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-nv pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="accent-bar" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              About the Laboratory
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            An independent laboratory exploring the frontier of intelligent systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            {site.name} is an independent research and development initiative
            focused on artificial intelligence, robotics, software engineering,
            and emerging computational technologies.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="container-nv pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <GlassCard className="p-8">
            <Target size={22} className="text-brand-primary" />
            <h2 className="mt-5 font-heading text-lg">Mission</h2>
            <p className="mt-3 text-sm text-text-secondary">
              To explore practical applications of artificial intelligence, develop
              experimental robotics and autonomous systems, and document the
              process with engineering rigor.
            </p>
          </GlassCard>
          <GlassCard className="p-8">
            <Compass size={22} className="text-brand-primary" />
            <h2 className="mt-5 font-heading text-lg">Vision</h2>
            <p className="mt-3 text-sm text-text-secondary">
              To establish Nova Vera as an independent technology research
              initiative exploring intelligent systems, robotics, software
              engineering, and the future of artificial intelligence.
            </p>
          </GlassCard>
          <GlassCard className="p-8">
            <Cog size={22} className="text-brand-primary" />
            <h2 className="mt-5 font-heading text-lg">Approach</h2>
            <p className="mt-3 text-sm text-text-secondary">
              First-principles experimentation, disciplined documentation, and
              honest presentation of work in progress — no inflated claims, no
              invented achievements.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Founder */}
      <section className="container-nv pb-24">
        <SectionHeading
          eyebrow="Founder"
          title="Leadership"
          description="The laboratory is led by its founder and lead researcher."
        />
        <GlassCard strong className="mt-12 overflow-hidden p-10 md:p-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <DragonLogo letter="N" size={96} className="shrink-0" />
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                {site.founder.designation}
              </p>
              <h2 className="mt-2 font-heading text-2xl md:text-3xl">
                {site.founder.name}
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-text-secondary">
                Asjad leads Nova Vera as an independent research initiative,
                exploring the intersection of artificial intelligence, robotics,
                and software engineering. The laboratory's work is documented
                openly through the Insights and Publications sections as it
                develops.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Research divisions */}
      <section className="container-nv pb-24">
        <SectionHeading
          eyebrow="Disciplines"
          title="Areas of exploration"
          description="Five intersecting research directions define the laboratory's work."
          href="/research"
          hrefLabel="View research"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <GlassCard key={d.title} className="p-6">
              <h3 className="font-heading text-lg">{d.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{d.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-nv pb-24">
        <GlassCard className="p-10 text-center md:p-14">
          <h2 className="font-heading text-2xl md:text-3xl">
            Want to collaborate or get in touch?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-text-secondary">
            The laboratory is open to research discussions, engineering
            collaborations, and technical conversations.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8">
            Contact <ArrowRight size={16} />
          </Link>
        </GlassCard>
      </section>
    </>
  );
}