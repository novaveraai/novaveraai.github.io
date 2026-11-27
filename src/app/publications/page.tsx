import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Youtube, ExternalLink, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { site } from "@/lib/site";
import { getAllPublications } from "@/lib/publications";
import { youtubeVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Publications",
  description: `Technical articles, founder notes, and engineering documentation from ${site.name} — covering AI, robotics, software engineering, and independent research.`,
  keywords: [
    "Nova Vera publications",
    "AI research articles",
    "independent research laboratory",
    "Lion S. Asjad Ali Jafri articles",
    "software engineering notes",
    "agentic AI",
    "robotics research",
  ],
  openGraph: {
    type: "website",
    title: `Publications — ${site.name}`,
    description: `Technical articles and research notes from ${site.name}.`,
    url: `${site.url}/publications`,
  },
};

export default function PublicationsPage() {
  const publications = getAllPublications();
  const isEmpty = publications.length === 0;

  return (
    <>
      <section className="container-nv relative pt-24 pb-16">
        <div
          aria-hidden="true"
          className="liquid-blob h-[400px] w-[500px] -right-20 top-20"
        />
        <div className="relative max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="accent-bar" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Publications
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Research. Notes.{" "}
            <span className="text-gradient-mono">Ideas.</span>
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <img
              src="/profile/founder-portrait.webp"
              alt={`${site.founder.name} — ${site.founder.designation}, ${site.name}`}
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-full border border-white/10 object-cover"
            />
            <div>
              <p className="text-base text-white">{site.founder.name}</p>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                {site.founder.designation}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Technical articles, founder notes, and engineering documentation
            from {site.name} — published as the work develops.
          </p>
        </div>
      </section>

      <section className="container-nv pb-16">
        <SectionHeading
          eyebrow="Articles"
          title="All publications"
          description="Written by the founder and documented in the open."
        />

        {isEmpty ? (
          <GlassCard strong className="mt-12 p-14 text-center">
            <BookOpen size={28} className="mx-auto text-brand-primary" />
            <p className="mono mt-6 text-[11px] uppercase tracking-[0.22em] text-text-muted">
              In progress
            </p>
            <p className="mt-3 text-sm text-text-secondary">
              Publications will appear here as they're written.
            </p>
          </GlassCard>
        ) : (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {publications.map((pub, i) => (
              <Link
                key={pub.slug}
                href={`/publications/${pub.slug}`}
                className={`block liquid-float d${(i % 6) + 1}`}
              >
                <GlassCard className="liquid-hover h-full p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.status === "in-progress" ? (
                      <span className="mono rounded-full border border-brand-primary/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-brand-primary">
                        In progress
                      </span>
                    ) : (
                      <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                        Article
                      </span>
                    )}
                    <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      ·
                    </span>
                    <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      {pub.dateDisplay}
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-xl leading-tight md:text-2xl">
                    {pub.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm text-text-secondary">
                    {pub.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded border border-line-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-line-soft pt-4">
                    <span className="mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-text-muted">
                      <Clock size={12} /> {pub.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-brand-primary">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="container-nv pb-24">
        <div className="mb-8 flex items-center gap-3">
          <Youtube size={20} className="text-brand-primary" />
          <h2 className="font-heading text-2xl md:text-3xl">Watch on YouTube</h2>
        </div>
        <p className="mb-8 max-w-2xl text-text-secondary">
          Technical demonstrations, project walkthroughs, and research updates from the laboratory.
        </p>

        {youtubeVideos.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video, i) => (
              <div key={video.id} className={`liquid-float d${(i % 6) + 1}`}>
                <GlassCard className="liquid-hover overflow-hidden p-0">
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base leading-tight">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="mt-1 line-clamp-2 text-xs text-text-muted">
                        {video.description}
                      </p>
                    )}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        ) : (
          <GlassCard className="p-10 text-center">
            <p className="text-sm text-text-muted">Videos will appear here soon.</p>
          </GlassCard>
        )}

        <div className="mt-10 text-center">
          <a
            href={site.social.youtube ?? "https://www.youtube.com/@NovaveraAI"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost text-xs"
          >
            Visit YouTube Channel <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
