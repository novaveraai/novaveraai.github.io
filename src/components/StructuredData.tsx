import { site } from "@/lib/site";
import { products } from "@/lib/content";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.designation,
    },
    email: site.contact.email,
    sameAs: [
      site.social.github,
      site.social.linkedin,
      site.social.youtube,
      site.social.whatsappChannel,
      site.social.whatsappGroup,
      site.social.gumroad,
    ].filter(Boolean),
    knowsAbout: [
      "Artificial Intelligence",
      "Robotics",
      "Computer Vision",
      "Software Engineering",
      "Embedded Systems",
      "Automation",
    ],
  };
  return <JsonLd data={org} />;
}

export function PersonSchema() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.designation,
    worksFor: {
      "@type": "ResearchOrganization",
      name: site.name,
      url: site.url,
    },
    email: site.contact.email,
    sameAs: [site.social.github, site.social.linkedin].filter(Boolean),
    knowsAbout: [
      "Artificial Intelligence",
      "Robotics",
      "Software Engineering",
    ],
  };
  return <JsonLd data={person} />;
}

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "ResearchOrganization",
      name: site.name,
      url: site.url,
    },
  };
  return <JsonLd data={data} />;
}

export function ProductSchema({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS, Linux",
    author: {
      "@type": "ResearchOrganization",
      name: site.name,
      url: site.url,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
  };
  return <JsonLd data={data} />;
}