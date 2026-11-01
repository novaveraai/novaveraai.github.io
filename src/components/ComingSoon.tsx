import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import GlassCard from "./GlassCard";

interface ComingSoonProps {
  /** Small uppercase label above the title */
  eyebrow: string;
  /** Main heading */
  title: string;
  /** Explanation of what's coming */
  description: string;
  /** What this section will contain (bullets) */
  plannedItems?: string[];
  /** Back link destination. Default: "/" */
  backHref?: string;
  /** Back link label. Default: "Back to home" */
  backLabel?: string;
}

export default function ComingSoon({
  eyebrow,
  title,
  description,
  plannedItems,
  backHref = "/",
  backLabel = "Back to home",
}: ComingSoonProps) {
  return (
    <section className="container-nv py-32">
      <div className="mx-auto max-w-2xl">
        <GlassCard strong className="p-10 text-center md:p-14">
          <Clock size={28} className="mx-auto text-brand-primary" />
          <p className="mono mt-6 text-[11px] uppercase tracking-[0.22em] text-text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-3xl md:text-4xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-text-secondary">
            {description}
          </p>

          {plannedItems && plannedItems.length > 0 && (
            <ul className="mx-auto mt-8 max-w-md space-y-2 text-left">
              {plannedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <Link
            href={backHref}
            className="mt-10 inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-brand-primary"
          >
            <ArrowLeft size={14} /> {backLabel}
          </Link>
        </GlassCard>
      </div>
    </section>
  );
}