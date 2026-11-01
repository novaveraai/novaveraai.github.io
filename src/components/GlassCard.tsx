"use client";

import { clsx } from "clsx";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  /** Emphasized glass (stronger blur). Default: false */
  strong?: boolean;
  /** Add crimson left accent bar on hover. Default: false */
  accent?: boolean;
  /** Apply hover lift + border glow. Default: true */
  interactive?: boolean;
  className?: string;
  /** Semantic element. Default: "div" */
  as?: "div" | "article" | "section" | "li";
}

/**
 * Glassmorphism surface card.
 * - Uses `.glass` / `.glass-strong` from globals.css
 * - Hover: subtle lift + border color shift toward crimson
 * - All colors from monochrome palette + crimson accent only
 */
export default function GlassCard({
  children,
  strong = false,
  accent = false,
  interactive = true,
  className,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={clsx(
        "relative overflow-hidden rounded-2xl",
        strong ? "glass-strong" : "glass",
        interactive && [
          "transition-all duration-300 ease-out",
          "hover:-translate-y-0.5",
          "hover:border-[rgba(240,0,8,0.45)]",
          "hover:shadow-[0_12px_40px_rgba(240,0,8,0.12)]",
        ],
        className
      )}
    >
      {/* Optional crimson accent bar (top-left) */}
      {accent && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-[2px] bg-brand-primary/70"
        />
      )}

      {/* Subtle top highlight (glass edge glint) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative">{children}</div>
    </Tag>
  );
}