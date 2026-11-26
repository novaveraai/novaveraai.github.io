import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Circle, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import DragonLogo from "@/components/DragonLogo";
import { site } from "@/lib/site";
import {
  certificationsByStatus,
  statusLabels,
  type Certification,
} from "@/lib/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description: `Certifications, coursework, and credentials of ${site.founder.name} — ${site.founder.designation} at ${site.name}.`,
};

const statusIcon = {
  completed: CheckCircle2,
  "in-progress": Clock,
  planned: Circle,
};

const statusColor = {
  completed: "text-[#00C853]",
  "in-progress": "text-[#FFA500]",
  planned: "text-text-muted",
};

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const Icon = statusIcon[cert.status];
  const colorClass = statusColor[cert.status];
  const floatClass = `liquid-float d${(index % 6) + 1}`;

  return (
    <GlassCard className="liquid-hover h-full p-6">
      <div className={floatClass}>
        {cert.image && (
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block overflow-hidden rounded-lg border border-white/10 bg-white/5"
            aria-label={`View ${cert.name} certificate full size`}
          >
            <img
              src={cert.image}
              alt={cert.imageAlt ?? `${cert.name} certificate`}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </a>
        )}

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Icon size={16} className={colorClass} />
              <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                {statusLabels[cert.status]}
              </span>
            </div>
            <h3 className="mt-3 font-heading text-lg leading-tight">
              {cert.name}
            </h3>
            <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
            {cert.description && (
              <p className="mt-3 text-sm text-text-secondary">
                {cert.description}
              </p>
            )}
            {cert.date && (
              <p className="mono mt-3 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                {cert.date}
              </p>
            )}
            {cert.credentialId && (
              <p className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                ID: {cert.credentialId}
              </p>
            )}
          </div>
        </div>

        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-brand-primary hover:underline"
          >
            Verify credential <ExternalLink size={12} />
          </a>
        )}
      </div>
    </GlassCard>
  );
}

export default function CertificationsPage() {
  const grouped = certificationsByStatus();

  return (
    <>
      {/* --- FOUNDER INTRO --- */}
      <section className="container-nv relative pt-24 pb-16">
        <div
          aria-hidden="true"
          className="liquid-blob h-[400px] w-[500px] -left-20 top-20"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <DragonLogo letter="N" size={120} className="shrink-0" />
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="accent-bar" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                {site.founder.designation}
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              {site.founder.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Leading {site.name} as an independent research initiative —
              exploring the intersection of artificial intelligence, robotics,
              and software engineering. The laboratory's work is documented
              openly, and the founder's ongoing development is reflected in the
              credentials below.
            </p>
            <Link
              href="/publications/founder-introduction"
              className="btn btn-primary mt-8 text-xs"
            >
              Read full article <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section className="container-nv pb-24">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials and coursework"
          description="A record of completed certifications, ongoing coursework, and planned qualifications."
        />

        {grouped.completed.length > 0 && (
          <div className="mt-12">
            <h2 className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Completed
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped.completed.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </div>
        )}

        {grouped.inProgress.length > 0 && (
          <div className="mt-12">
            <h2 className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              In Progress
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped.inProgress.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </div>
        )}

        {grouped.planned.length > 0 && (
          <div className="mt-12">
            <h2 className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Planned
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped.planned.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}