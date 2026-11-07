import Link from "next/link";
import {
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
  ShoppingBag,
  Instagram,
  Mail,
} from "lucide-react";
import DragonLogo from "./DragonLogo";
import { site } from "@/lib/site";

export default function Footer() {
  const socials = [
    { key: "github", label: "GitHub", icon: Github, href: site.social.github },
    { key: "linkedin", label: "LinkedIn", icon: Linkedin, href: site.social.linkedin },
    { key: "youtube", label: "YouTube", icon: Youtube, href: site.social.youtube },
    { key: "whatsappChannel", label: "WhatsApp Channel", icon: MessageCircle, href: site.social.whatsappChannel },
    { key: "whatsappGroup", label: "WhatsApp Group", icon: MessageCircle, href: site.social.whatsappGroup },
    { key: "gumroad", label: "Gumroad", icon: ShoppingBag, href: site.social.gumroad },
    { key: "instagram", label: "Instagram", icon: Instagram, href: site.social.instagram },
  ].filter((s) => s.href !== null && s.href !== "");

  const navLeft = site.nav.slice(0, 4);
  const navRight = site.nav.slice(4);

  return (
    <footer className="relative mt-32 border-t border-line-soft">
      <div className="container-nv py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <DragonLogo letter="N" size={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-base font-semibold text-white">
                  {site.name}
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {site.subtitle}
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-text-secondary">
              {site.description}
            </p>
            <p className="mono mt-4 text-[11px] uppercase tracking-[0.18em] text-text-muted">
              {site.disciplines}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLeft.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navRight.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-4 mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Contact
            </h3>
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-brand-primary"
            >
              <Mail size={14} />
              {site.contact.email}
            </a>

            {socials.length > 0 && (
              <>
                <h3 className="mb-4 mt-8 mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  Follow
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {socials.map(({ key, label, icon: Icon, href }) => (
                    <li key={key}>
                      <a
                        href={href as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-soft text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-primary"
                      >
                        <Icon size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line-soft pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <p className="mono uppercase tracking-[0.18em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}