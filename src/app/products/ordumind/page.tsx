import { ProductSchema } from "@/components/StructuredData";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import DragonLogo from "@/components/DragonLogo";
import { getProduct } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ordumind",
  description:
    "Ordumind — intelligent task management for focused work. In development at Nova Vera AI & Robotics Lab.",
};

export default function OrdumindPage() {
  const product = getProduct("ordumind");
  if (!product) return null;

  return (
    <>
      <ProductSchema slug="ordumind" />
      <section className="container-nv pt-16">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-brand-primary"
        >
          <ArrowLeft size={14} /> All products
        </Link>
      </section>

      {/* Hero */}
      <section className="container-nv pt-8 pb-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-6">
            <DragonLogo letter={product.logoLetter} size={96} />
            <div>
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                {product.status}
              </span>
              <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-text-secondary">
                {product.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section className="container-nv pb-24">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeading eyebrow="Overview" title="What it does" />
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              {product.description}
            </p>

            <h2 className="mt-12 font-heading text-xl">Features</h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-5">
            <GlassCard strong className="p-6">
              <h3 className="mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                Details
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-text-muted">Status</dt>
                  <dd className="mt-1 text-white">{product.status}</dd>
                </div>
                <div>
                  <dt className="text-text-muted">Stack</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {product.stack.map((s) => (
                      <span
                        key={s}
                        className="mono rounded border border-line-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted">Links</dt>
                  <dd className="mt-1 text-white">
                    {!product.links.github && !product.links.docs && !product.links.gumroad ? (
                      <span className="text-text-muted">
                        Coming soon — will be published at release.
                      </span>
                    ) : (
                      <ul className="space-y-1.5">
                        {product.links.github && (
                          <li>
                            <a
                              href={product.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-primary hover:underline"
                            >
                              GitHub
                            </a>
                          </li>
                        )}
                        {product.links.docs && (
                          <li>
                            <a
                              href={product.links.docs}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-primary hover:underline"
                            >
                              Documentation
                            </a>
                          </li>
                        )}
                        {product.links.gumroad && (
                          <li>
                            <a
                              href={product.links.gumroad}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-primary hover:underline"
                            >
                              Purchase
                            </a>
                          </li>
                        )}
                      </ul>
                    )}
                  </dd>
                </div>
              </dl>
            </GlassCard>
          </aside>
        </div>
      </section>

      {/* Next product */}
      <section className="container-nv pb-24">
        <GlassCard className="flex flex-col items-center justify-between gap-4 p-8 text-center md:flex-row md:text-left">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              More from the lab
            </p>
            <h2 className="mt-2 font-heading text-xl">See all products</h2>
          </div>
          <Link href="/products" className="btn btn-ghost text-xs">
            Browse products <ArrowRight size={14} />
          </Link>
        </GlassCard>
      </section>
    </>
  );
}