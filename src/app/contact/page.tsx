import type { Metadata } from "next";
import { Mail, Github, Linkedin, Instagram, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — research collaboration, engineering partnerships, and technical enquiries.`,
};

export default function ContactPage() {
  const socials = [
    { key: "github", label: "GitHub", icon: Github, href: site.social.github, description: "Open-source repositories and code." },
    { key: "linkedin", label: "LinkedIn", icon: Linkedin, href: site.social.linkedin, description: "Professional profile and updates." },
    { key: "instagram", label: "Instagram", icon: Instagram, href: site.social.instagram, description: "Behind-the-scenes and visual updates." },
    { key: "youtube", label: "YouTube", icon: Youtube, href: site.social.youtube, description: "Technical videos and demonstrations." },
    { key: "whatsappChannel", label: "WhatsApp Channel", icon: MessageCircle, href: site.social.whatsappChannel, description: "Announcements and updates." },
    { key: "whatsappGroup", label: "WhatsApp Group", icon: MessageCircle, href: site.social.whatsappGroup, description: "Community discussions." },
  ].filter((s) => s.href !== null && s.href !== "");

  return (
    <>
      <section className="container-nv pt-24 pb-16">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="For research collaboration, engineering partnerships, product enquiries, or technical discussions."
        />
      </section>

      {/* Primary contact */}
      <section className="container-nv pb-16">
        <GlassCard strong className="p-10 md:p-14">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
            Primary contact
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="group mt-4 inline-flex items-center gap-3 font-heading text-2xl text-white transition-colors hover:text-brand-primary md:text-3xl"
          >
            <Mail size={24} className="text-brand-primary" />
            {site.contact.email}
            <ArrowUpRight
              size={18}
              className="text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-primary"
            />
          </a>
          <p className="mt-6 max-w-xl text-sm text-text-secondary">
            For collaboration enquiries, please include a brief description of
            your project, the technical area, and the timeframe you have in mind.
          </p>
        </GlassCard>
      </section>

      {/* Social channels */}
      {socials.length > 0 && (
        <section className="container-nv pb-24">
          <SectionHeading
            eyebrow="Follow"
            title="Other channels"
            description="Where the laboratory shares updates, code, and technical work."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map(({ key, label, icon: Icon, href, description }) => (
              <a
                key={key}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <GlassCard className="h-full p-6">
                  <div className="flex items-start justify-between">
                    <Icon size={20} className="text-brand-primary" />
                    <ArrowUpRight
                      size={16}
                      className="text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-primary"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-base">{label}</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">
                    {description}
                  </p>
                </GlassCard>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Note about missing channels */}
      {socials.length < 6 && (
        <section className="container-nv pb-24">
          <div className="mx-auto max-w-2xl border-t border-line-soft pt-8 text-center">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
              Additional channels coming soon
            </p>
          </div>
        </section>
      )}
    </>
  );
}