"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

export default function CinematicHero() {
  const headlineWords = [
    { text: "Engineering", delay: "d1" },
    { text: "Intelligence.", delay: "d2", highlight: true },
    { text: "Exploring", delay: "d3" },
    { text: "Tomorrow.", delay: "d4" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] opacity-25 md:opacity-40"
      >
        <svg
          viewBox="0 0 700 700"
          className="spin-slow h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="350" cy="350" r="330" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="350" cy="350" r="280" stroke="rgba(240,0,8,0.15)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="350" cy="350" r="220" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="350" cy="350" r="160" stroke="rgba(240,0,8,0.2)" strokeWidth="1" />
          <circle cx="350" cy="350" r="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-60 h-[500px] w-[500px] opacity-30"
      >
        <svg
          viewBox="0 0 500 500"
          className="spin-reverse h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="240" stroke="rgba(240,0,8,0.12)" strokeWidth="1" strokeDasharray="2 12" />
          <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle cx="250" cy="250" r="120" stroke="rgba(240,0,8,0.18)" strokeWidth="1" />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(240,0,8,0.35)_0%,transparent_70%)] blur-3xl pulse-red"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent cinematic-scan"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="particle d1 absolute left-[15%] top-[30%] h-1 w-1 rounded-full bg-brand-primary/70" />
        <span className="particle d2 absolute left-[45%] top-[20%] h-1.5 w-1.5 rounded-full bg-brand-primary/50" />
        <span className="particle d3 absolute left-[75%] top-[60%] h-1 w-1 rounded-full bg-brand-primary/60" />
        <span className="particle d4 absolute left-[35%] top-[70%] h-0.5 w-0.5 rounded-full bg-white/60" />
      </div>

      <div className="container-nv relative flex min-h-[88vh] flex-col justify-center py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="accent-bar" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              {site.subtitle}
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className={`word-in ${word.delay}`}
                style={{ marginRight: "0.25em" }}
              >
                <span className={word.highlight ? "text-gradient-mono" : ""}>
                  {word.text}
                </span>
              </span>
            ))}
          </h1>

          <p className="word-in d5 mt-8 max-w-2xl text-base text-text-secondary md:text-lg">
            {site.description}
          </p>

          <div className="word-in d6 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/research" className="btn btn-primary">
              Explore Our Research <ArrowRight size={16} />
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              Discover Our Projects
            </Link>
          </div>

          <p className="mono mt-12 text-[11px] uppercase tracking-[0.22em] text-text-muted">
            {site.disciplines}
          </p>
        </div>

        <div className="word-in d6 mt-16 flex items-center gap-2 text-text-muted">
          <ChevronDown size={14} className="animate-bounce" />
          <span className="mono text-[10px] uppercase tracking-[0.22em]">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}