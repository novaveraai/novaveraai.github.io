"use client";

import { useEffect, useRef } from "react";

interface GridBackdropProps {
  /** Show the faint crimson radial glow. Default: true */
  glow?: boolean;
  /** Grid cell size in px. Default: 60 */
  size?: number;
  /** Fixed to viewport (for hero) vs absolute within parent. Default: true */
  fixed?: boolean;
}

/**
 * Faint animated grid + radial glow.
 * Sits BEHIND glass elements so the glass has something to blur.
 * Respects prefers-reduced-motion (animation is CSS-driven, reset in globals.css).
 */
export default function GridBackdrop({
  glow = true,
  size = 60,
  fixed = true,
}: GridBackdropProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle parallax: shift the grid a few px on scroll (desktop only, no motion issues)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * 0.08;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={[
        fixed ? "fixed" : "absolute",
        "inset-0 -z-10 overflow-hidden pointer-events-none",
      ].join(" ")}
    >
      {/* Base gradient: pure black at edges, near-black in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0A0A0A_0%,#000000_75%)]" />

      {/* Faint animated grid */}
      <div
        ref={ref}
        className="absolute inset-0 opacity-[0.35] animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: `${size}px ${size}px`,
        }}
      />

      {/* Crimson radial glow (only if enabled) */}
      {glow && (
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(240,0,8,0.10)_0%,transparent_70%)] blur-3xl" />
      )}

      {/* Bottom fade to solid black */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}