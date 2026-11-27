import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { site } from "@/lib/site";
import { getAllPoems, getAllTags, getAllLanguages } from "@/lib/poetry";

export const metadata: Metadata = {
  title: "Poetry",
  description: `Original poetry by ${site.founder.name} â€” ${site.founder.designation} at ${site.name}. Multilingual verses on life, reflection, and the human side of building.`,
  keywords: [
    "poetry",
    "original poems",
    `${site.founder.name} poetry`,
    `${site.name} poetry`,
    "Urdu poetry",
    "English poetry",
    "multilingual poetry",
  ],
  openGraph: {
    type: "website",
    title: `Poetry â€” ${site.name}`,
    description: `Original poetry by ${site.founder.name}.`,
    url: `${site.url}/poetry`,
  },
};

export default function PoetryIndexPage() {
  const poems = getAllPoems();
  const tags = getAllTags();
  const languages = getAllLanguages();
  const isEmpty = poems.length === 0;

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
              Poetry
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Words from <span className="text-gradient-mono">the human side.</span>
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <img
              src="/profile/founder-portrait.webp"
              alt={`${site.founder.name} â€” ${site.founder.designation}, ${site.name}`}
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
            Original poetry â€” verses written alongside the engineering,
            documenting the quieter observations.
          </p>
        </div>
      </section>

      {!isEmpty && (
        <section className="container-nv pb-8">
          <div className="flex flex-wrap items-center gap-3 border-y border-line-soft py-4">
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Languages:
            </span>
            {languages.map((lang) => (
              <span key={lang} className={`lang-badge ${lang.toLowerCase()}`}>
                {lang}
              </span>
            ))}
            {tags.length > 0 && (
              <>
                <span className="mono ml-6 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  Tags:
                </span>
                {tags.slice(0, 12).map((tag) => (
                  <span
                    key={tag}
                    className="mono rounded border border-line-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>
        </section>
      )}

      <section className="container-nv pb-24">
        {isEmpty ? (
          <GlassCard strong className="p-14 text-center md:p-20">
            <BookOpen size={32} className="mx-auto text-brand-primary" />
            <p className="mono mt-6 text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Coming soon
            </p>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl">
              The first poems are on their way
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
              Original poetry by {site.founder.name} will appear here â€”
              multilingual, tagged, and searchable. Each poem will have its own
              dedicated page.
            </p>
            <Link href="/" className="btn btn-ghost mt-8 text-xs">
              Back to home
            </Link>
          </GlassCard>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem, i) => (
              <Link
                key={poem.slug}
                href={`/poetry/${poem.slug}`}
                className={`poetry-card liquid-float d${(i % 6) + 1} block`}
              >
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`lang-badge ${poem.language.toLowerCase()}`}
                    >
                      {poem.language}
                    </span>
                    <span className="mono text-[10px] uppercase tracking-wider text-text-muted">
                      {new Date(poem.date).getFullYear()}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl leading-tight">
                    {poem.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-text-secondary">
                    {poem.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {poem.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded border border-line-soft px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs text-brand-primary">
                    Read poem <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}