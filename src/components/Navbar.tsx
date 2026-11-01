"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DragonLogo from "./DragonLogo";
import { site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Add subtle shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "sticky top-0 z-50 glass-nav transition-shadow",
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.5)]" : "",
      ].join(" ")}
    >
      <nav className="container-nv flex h-[72px] items-center justify-between">
        {/* ── Brand ── */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <DragonLogo letter="N" size={32} label={site.shortName} />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-heading text-sm font-semibold tracking-tight text-white">
              {site.shortName}
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              AI & Robotics Lab
            </span>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "relative inline-flex items-center px-3 py-2 text-sm transition-colors",
                    active
                      ? "text-white"
                      : "text-text-secondary hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-px h-[2px] bg-brand-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA (desktop) ── */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn btn-primary text-xs">
            Get in touch
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-soft text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="glass-strong border-t border-line-soft lg:hidden">
          <ul className="container-nv flex flex-col py-2">
            {site.nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "block border-l-2 py-3 pl-3 text-sm transition-colors",
                      active
                        ? "border-brand-primary text-white"
                        : "border-transparent text-text-secondary hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 pb-3">
              <Link href="/contact" className="btn btn-primary w-full text-xs">
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}