import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { site } from "@/lib/site";

const ARTICLE = {
  title:
    "Lion S. Asjad Ali Jafri | Founder of Nova Vera AI & Robotics Lab",
  description:
    "Meet Lion S. Asjad Ali Jafri, founder of Nova Vera AI & Robotics Lab. Explore his interests in Python, C++, agentic AI, robotics, software engineering, and emerging computational technologies.",
  date: "2026-11-09",
  dateDisplay: "November 9, 2026",
  readTime: "8 min read",
  tags: [
    "NovaVeraAI",
    "ArtificialIntelligence",
    "AIResearch",
    "AgenticAI",
    "AIAgents",
    "AgenticFrameworks",
    "Python",
    "PythonDevelopment",
    "PythonProgramming",
    "Cpp",
    "CppProgramming",
    "SoftwareEngineering",
    "SoftwareDevelopment",
    "Robotics",
    "RoboticsEngineering",
    "EmbeddedSystems",
    "ComputerVision",
    "Automation",
    "IndependentResearch",
    "TechnologyResearch",
    "ComputationalIntelligence",
    "EmergingTechnologies",
    "EngineeringIntelligence",
  ],
  author: site.founder.name,
  authorTitle: site.founder.designation,
};

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  keywords: [
    "Nova Vera AI Robotic Lab Founder",
    "Lion S. Asjad Ali Jafri",
    "Independent AI Researcher",
    "Agentic AI Research",
    "AI Agent Frameworks",
    "Python Programming and Development",
    "C++ Software Development",
    "Robotics Research",
    "Software Engineering",
    "Artificial Intelligence and Robotics",
    "Independent Technology Research Laboratory",
    "Computational Intelligence",
    "Emerging Computational Technologies",
  ],
  authors: [{ name: ARTICLE.author }],
  openGraph: {
    type: "article",
    title: ARTICLE.title,
    description: ARTICLE.description,
    url: `${site.url}/publications/founder-introduction`,
    siteName: site.name,
    publishedTime: ARTICLE.date,
    authors: [ARTICLE.author],
    tags: ARTICLE.tags,
    images: [
      {
        url: `${site.url}/profile/founder-portrait.webp`,
        width: 1200,
        height: 1200,
        alt: `${ARTICLE.author} â€” ${ARTICLE.authorTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE.title,
    description: ARTICLE.description,
    images: [`${site.url}/profile/founder-portrait.webp`],
  },
  alternates: {
    canonical: `${site.url}/publications/founder-introduction`,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE.title,
  description: ARTICLE.description,
  image: `${site.url}/profile/founder-portrait.webp`,
  datePublished: ARTICLE.date,
  author: {
    "@type": "Person",
    name: ARTICLE.author,
    jobTitle: ARTICLE.authorTitle,
    image: `${site.url}/profile/founder-portrait.webp`,
    url: site.url,
  },
  publisher: {
    "@type": "ResearchOrganization",
    name: site.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/profile/founder-portrait.webp`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${site.url}/publications/founder-introduction`,
  },
  keywords: ARTICLE.tags.join(", "),
};

export default function FounderIntroductionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="container-nv pt-16">
        <Link
          href="/publications"
          className="inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-brand-primary"
        >
          <ArrowLeft size={14} /> All publications
        </Link>
      </section>

      <section className="container-nv pt-8 pb-12">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="accent-bar" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Founder Profile
            </span>
          </div>
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
            About the Founder
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <img
              src="/profile/founder-portrait.webp"
              alt={`${ARTICLE.author} â€” ${ARTICLE.authorTitle}, ${site.name}`}
              width={96}
              height={96}
              className="h-20 w-20 shrink-0 rounded-full border border-white/10 object-cover md:h-24 md:w-24"
            />
            <div>
              <p className="font-heading text-xl text-white md:text-2xl">
                {ARTICLE.author}
              </p>
              <p className="mono mt-1 text-[11px] uppercase tracking-[0.22em] text-text-muted">
                {ARTICLE.authorTitle} Â· {site.name}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line-soft py-4 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <User size={14} />
              {ARTICLE.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {ARTICLE.dateDisplay}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {ARTICLE.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="container-nv pb-16">
        <div className="mx-auto max-w-3xl">
          <article className="space-y-6 text-base leading-relaxed text-text-secondary">
            <p className="text-lg text-white">
              Technology has always represented more than a collection of
              tools, programming languages, or machines. It represents an
              opportunity to understand how things work, explore what is
              possible, and transform ideas into practical systems.
            </p>
            <p>
              For Lion S. Asjad Ali Jafri, this curiosity forms the foundation
              of an ongoing journey through programming, artificial
              intelligence, robotics, and software engineering.
            </p>

            <h2 className="!mt-12 text-2xl font-semibold text-white">
              An Independent Journey into Technology
            </h2>
            <p>
              I am an independent technology enthusiast, programmer, and
              researcher with a particular interest in building intelligent
              software systems. My primary programming interests lie in Python
              and C++, two languages that offer different yet complementary
              approaches to software development, computational
              problem-solving, and intelligent system design.
            </p>
            <p>
              My journey is driven by curiosity, experimentation, and a desire
              to understand technology beyond its surface. Rather than simply
              using existing tools, I am interested in exploring their
              underlying mechanisms, understanding their architecture, and
              developing independent solutions that demonstrate what can be
              achieved through engineering and persistence.
            </p>
            <p>
              I am currently pursuing my education through Virtual University
              of Pakistan while independently exploring different areas of
              computer science and emerging technologies. My academic journey
              and personal technical projects work together to shape my
              understanding of the rapidly evolving technological landscape.
            </p>

            <h2 className="!mt-12 text-2xl font-semibold text-white">
              Programming and Software Engineering
            </h2>
            <p>
              Programming is at the centre of my technical interests. Among the
              various technologies available today, Python and C++ hold a
              particularly important place in my development journey.
            </p>
            <p>
              Python attracts me because of its versatility, readability, and
              extensive ecosystem. It provides an effective environment for
              developing automation tools, intelligent applications, AI agents,
              data-processing systems, and experimental software. Its
              flexibility makes it particularly valuable for rapid prototyping
              and exploring new computational ideas.
            </p>
            <p>
              C++, on the other hand, represents another dimension of my
              interest in engineering. Its performance, memory management
              capabilities, and low-level control make it an important language
              for understanding how software interacts with hardware and how
              computational systems operate beneath higher-level abstractions.
            </p>
            <p>
              I am also interested in software development as a broader
              discipline. Writing code is only one part of building a
              successful application. Software architecture, maintainability,
              modularity, security, performance, and user experience all
              contribute to the quality of a finished product.
            </p>
            <p>
              My approach is to explore these elements together, developing an
              understanding of both the internal engineering and the external
              experience of software.
            </p>

            <h2 className="!mt-12 text-2xl font-semibold text-white">
              A Particular Interest in Agentic Artificial Intelligence
            </h2>
            <p>
              One of my primary areas of interest is Agentic AI and the
              development of intelligent agents.
            </p>
            <p>
              Artificial intelligence is evolving beyond conventional
              question-and-answer systems. Modern agentic architectures explore
              how software systems can interpret objectives, plan actions,
              interact with tools, execute tasks, evaluate results, and work
              through multi-step processes.
            </p>
            <p>
              This development has captured my attention because it introduces
              a different way of thinking about software. Instead of creating
              applications that only respond to predefined commands, agentic
              systems can be designed to pursue objectives through structured
              workflows and tool interactions.
            </p>
            <p>
              I am particularly interested in agent frameworks, agent
              orchestration, autonomous task execution, system architecture,
              memory mechanisms, and the integration of different computational
              tools into intelligent workflows.
            </p>
            <p>
              My current work involves exploring and developing AI agent
              systems, understanding their architecture, and experimenting with
              the engineering principles that make them useful, reliable, and
              practical.
            </p>
            <p>
              I consider agentic frameworks an important area of my technical
              specialization and an opportunity to explore the next generation
              of intelligent software.
            </p>

            <h2 className="!mt-12 text-2xl font-semibold text-white">
              Nova Vera AI &amp; Robotics Lab
            </h2>
            <p>
              Nova Vera AI &amp; Robotics Lab is an independent research
              laboratory established as a platform for exploring artificial
              intelligence, robotics, software engineering, and emerging
              computational technologies.
            </p>
            <p>
              The laboratory represents my commitment to independent learning,
              technical experimentation, and the development of practical
              technological projects.
            </p>
            <p>
              Its purpose is not limited to discussing emerging technologies.
              It is intended to document the process of exploring, designing,
              developing, and testing them.
            </p>
            <p>
              Through Nova Vera, I aim to create a growing collection of
              technical experiments, programming projects, research articles,
              engineering documentation, and educational resources.
            </p>
            <p>The laboratory focuses on several interconnected areas:</p>
            <ul className="!mt-4 space-y-3 !pl-0">
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>
                  <strong className="text-white">
                    Artificial Intelligence and Agentic Systems
                  </strong>{" "}
                  â€” Exploring intelligent agents, agentic frameworks, AI
                  architectures, automation, and the engineering principles
                  behind intelligent software.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>
                  <strong className="text-white">Python Development</strong> â€”
                  Developing Python applications, automation systems,
                  experimental tools, programming projects, and practical
                  implementations of computational concepts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>
                  <strong className="text-white">C++ Programming</strong> â€”
                  Exploring software development, computational efficiency,
                  systems programming, and the relationship between software
                  and hardware.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>
                  <strong className="text-white">
                    Robotics and Embedded Systems
                  </strong>{" "}
                  â€” Investigating robotics, microcontrollers, electronic
                  systems, sensors, hardware integration, automation, and the
                  engineering principles behind intelligent machines.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>
                  <strong className="text-white">Software Engineering</strong>{" "}
                  â€” Exploring application architecture, development
                  methodologies, backend systems, interface design, and the
                  practical process of transforming ideas into working
                  software.
                </span>
              </li>
            </ul>
            <p>
              These areas are not isolated disciplines. They frequently overlap,
              creating opportunities to develop systems that combine software,
              hardware, computational intelligence, and automation.
            </p>

            <h2 className="!mt-12 text-2xl font-semibold text-white">
              Engineering Beyond the Code
            </h2>
            <p>
              An important part of my work is the relationship between
              engineering and design. I believe that software should not only
              function correctly; it should also be understandable, accessible,
              and thoughtfully presented.
            </p>
            <p>
              The user interface and user experience of the Nova Vera AI &amp;
              Robotics Lab website are designed and developed by me. This
              includes the visual direction, interface structure, and overall
              presentation of the platform.
            </p>
            <p>
              My involvement in both software development and UI/UX design
              reflects an interest in understanding the complete development
              process, from the underlying architecture to the experience of
              the person interacting with the final product.
            </p>
            <p>
              For me, a successful technological project is not simply a
              collection of working functions. It is a complete system in which
              engineering, usability, and design work together.
            </p>

            <h2 className="!mt-12 text-2xl font-semibold text-white">
              Independent Research and Knowledge Sharing
            </h2>
            <p>
              Nova Vera AI &amp; Robotics Lab is also intended to serve as a
              public record of continuous technical exploration.
            </p>
            <p>
              I plan to publish articles, project documentation, programming
              experiments, research observations, and practical demonstrations
              covering Python, C++, artificial intelligence, robotics, and
              related technologies.
            </p>
            <p>
              Some publications may explore fundamental programming concepts,
              while others may examine more advanced technical implementations,
              software architectures, and experimental systems.
            </p>
            <p>
              I believe that documenting the development process is valuable in
              its own right. Understanding how a project is conceptualized, how
              its architecture is designed, what problems emerge during
              implementation, and how those problems are addressed can provide
              meaningful knowledge to other developers and technology
              enthusiasts.
            </p>
            <p>
              The laboratory therefore aims to encourage a practical approach
              to learning: explore an idea, investigate its foundations, build
              an implementation, evaluate the results, and document the
              findings.
            </p>
            <p>
              Independent research does not necessarily begin with
              sophisticated equipment or extensive resources. Sometimes it
              begins with a programming environment, an idea, a problem worth
              solving, and the determination to investigate it.
            </p>

            <h2 className="!mt-12 text-2xl font-semibold text-white">
              Looking Toward Tomorrow
            </h2>
            <p>
              The future of technology will increasingly involve intelligent
              software, autonomous systems, robotics, and the integration of
              computational intelligence into everyday applications.
            </p>
            <p>
              I want to continue exploring these developments, strengthening my
              engineering capabilities, and working toward the creation of
              independent technological systems.
            </p>
            <p>
              My long-term vision for Nova Vera AI &amp; Robotics Lab is to
              establish a platform where experimentation, software development,
              robotics, and artificial intelligence can exist together under
              one research-oriented identity.
            </p>
            <p>
              It is a continuing journey rather than a finished destination.
              There is always another concept to understand, another system to
              investigate, another project to build, and another technical
              challenge to overcome.
            </p>
            <p>
              I do not consider learning a process that ends with a
              qualification or a particular level of expertise. It is an
              ongoing commitment to curiosity, improvement, and discovery.
            </p>
            <p>
              Nova Vera AI &amp; Robotics Lab reflects that commitment.
            </p>
            <p className="!mt-8 font-heading text-lg text-white">
              Build. Experiment. Understand. Innovate.
            </p>
            <p className="text-sm italic text-text-muted">
              Engineering Intelligence. Exploring Tomorrow.
            </p>

            <p className="!mt-12 text-sm italic text-text-muted">
              â€” {ARTICLE.author}, {ARTICLE.authorTitle}
            </p>
          </article>

          {/* Tags */}
          <div className="mt-12 border-t border-line-soft pt-8">
            <p className="mono mb-3 text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Hashtags
            </p>
            <div className="flex flex-wrap gap-1.5">
              {ARTICLE.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono rounded border border-line-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author card */}
          <GlassCard className="mt-12 p-6">
            <div className="flex items-start gap-4">
              <img
                src="/profile/founder-portrait.webp"
                alt={`${ARTICLE.author} â€” ${ARTICLE.authorTitle}`}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-16 w-16 shrink-0 rounded-full border border-white/10 object-cover"
              />
              <div>
                <p className="font-heading text-base text-white">
                  {ARTICLE.author}
                </p>
                <p className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {ARTICLE.authorTitle}
                </p>
                <p className="mt-3 text-sm text-text-secondary">
                  Founder of {site.name}. Building independent AI &amp;
                  robotics research from the ground up.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Bottom nav */}
          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-brand-primary"
            >
              <ArrowLeft size={14} /> All publications
            </Link>
            <Link href="/certifications" className="btn btn-ghost text-xs">
              View certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}