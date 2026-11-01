import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  /** Small uppercase mono label above the title */
  eyebrow?: string;
  /** Main heading */
  title: string;
  /** Optional subtext below */
  description?: string;
  /** Optional "View all" link target */
  href?: string;
  /** Text for the link. Default: "View all" */
  hrefLabel?: string;
  /** Center-align the block. Default: false */
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  hrefLabel = "View all",
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "flex flex-col gap-4",
        centered
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between",
        className,
      ].join(" ")}
    >
      <div className={centered ? "flex flex-col items-center" : "max-w-2xl"}>
        {eyebrow && (
          <div className="mb-3 flex items-center gap-3">
            <span className="accent-bar" />
            <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            {description}
          </p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="group inline-flex items-center gap-1.5 self-start rounded-full border border-line-soft px-4 py-2 text-sm text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-primary md:self-end"
        >
          {hrefLabel}
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  );
}