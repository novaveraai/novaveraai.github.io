import type { Metadata } from "next";
import localFont from "next/font/local";
import GridBackdrop from "@/components/GridBackdrop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import {
  OrganizationSchema,
  PersonSchema,
  WebSiteSchema,
} from "@/components/StructuredData";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    { path: "./fonts/space-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/space-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/space-grotesk-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/space-grotesk-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-400-normal.woff2",
  variable: "--font-inter",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.subtitle}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Nova Vera",
    "AI research",
    "robotics",
    "computer vision",
    "independent research laboratory",
    "machine learning",
  ],
  authors: [{ name: site.founder.name }],
  creator: site.founder.name,
  publisher: site.name,
  verification: {
    google: "Hdj8YaryyhB6HC7JG2fX23Cg7EU4y8SnuKHXUTi151o",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.subtitle}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.subtitle}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="relative min-h-screen bg-bg-base font-body text-text-primary antialiased">
        <OrganizationSchema />
        <PersonSchema />
        <WebSiteSchema />

        <GridBackdrop glow />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}