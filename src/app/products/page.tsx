import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import DragonLogo from "@/components/DragonLogo";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software products developed by Nova Vera AI & Robotics Lab — Ordumind and Dragon Sentinel.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="container-nv pt-24 pb-16">
        <SectionHeading
          eyebrow="Products"
          title="Software from the lab"
          description="Tools developed in-house. Each product page lists features, stack, and current status."
        />
      </section>

      <section className="container-nv pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <GlassCard key={p.slug} accent className="p-8 md:p-10">
              <div className="flex items-start justify-between">
                <DragonLogo letter={p.logoLetter} size={56} />
                <span className="mono rounded-full border border-line-soft px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {p.status}
                </span>
              </div>
              <h2 className="mt-8 font-heading text-2xl">{p.name}</h2>
              <p className="mt-2 text-sm text-text-secondary">{p.tagline}</p>
              <p className="mt-5 text-sm text-text-secondary">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono rounded border border-line-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href={`/products/${p.slug}`}
                className="btn btn-primary mt-8 text-xs"
              >
                View product <ArrowRight size={14} />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}