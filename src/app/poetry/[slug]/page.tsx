import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { site } from "@/lib/site";
import { poems, getPoem } from "@/lib/poetry";

export const dynamicParams = false;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return poems.map((poem) => ({ slug: poem.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const poem = getPoem(params.slug);
  if (!poem) return { title: "Poem not found" };
  return {
    title: `${poem.title} — Poetry`,
    description: poem.description,
    keywords: [poem.title, poem.language, ...poem.tags, "poetry", "poem", site.name],
    authors: [{ name: site.founder.name }],
    alternates: { canonical: `${site.url}/poetry/${poem.slug}` },
  };
}

export default function PoemPage({ params }: PageProps) {
  const poem = getPoem(params.slug);
  if (!poem) notFound();
  return (
    <>
      <section className="container-nv pt-16">
        <Link href="/poetry" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-brand-primary">
          <ArrowLeft size={14} /> All poems
        </Link>
      </section>
      <section className="container-nv pt-8 pb-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="accent-bar" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Poetry · {poem.language}
            </span>
          </div>
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
            {poem.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line-soft py-4 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5"><User size={14} /> {site.founder.name}</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(poem.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className={`lang-badge ${poem.language.toLowerCase()}`}>{poem.language}</span>
          </div>
        </div>
      </section>
      <section className="container-nv pb-16">
        <div className="mx-auto max-w-3xl">
          <GlassCard strong className="p-10 md:p-14">
            <article
              className="whitespace-pre-line font-heading text-lg leading-loose text-text-primary md:text-xl"
              style={{ direction: poem.language === "Urdu" ? "rtl" : "ltr" }}
            >
              {poem.body}
            </article>
          </GlassCard>
          {poem.tags.length > 0 && (
            <div className="mt-12 border-t border-line-soft pt-8">
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.18em] text-text-muted">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {poem.tags.map((tag) => (
                  <span key={tag} className="mono rounded border border-line-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted">{tag}</span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <Link href="/poetry" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand-primary">
              <ArrowLeft size={14} /> All poems
            </Link>
            <Link href="/publications" className="btn btn-ghost text-xs">Read publications</Link>
          </div>
        </div>
      </section>
    </>
  );
}