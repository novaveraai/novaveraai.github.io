/**
 * NOVA VERA — POETRY
 * Single source of truth for all poems.
 *
 * TO ADD A POEM:
 *   - Copy one of the entries below
 *   - Change `slug`, `title`, `body`, `language`, `tags`, `date`
 *   - Save this file
 *   - The poem appears automatically at /poetry and /poetry/<slug>
 *
 * SEO is fully automatic — title, description, keywords, JSON-LD,
 * and sitemap entry are all derived from these fields.
 */

export type PoemLanguage = "English" | "Urdu" | "Hindi" | "Punjabi" | "Other";

export interface Poem {
  /** URL slug — use lowercase-dashes, e.g. "the-day-the-sky-fell" */
  slug: string;
  /** Title of the poem — appears as page title and heading */
  title: string;
  /** Language of the poem */
  language: PoemLanguage;
  /** Date written (ISO 8601) — used in metadata and sitemap */
  date: string;
  /** Short description for SEO — 1–2 sentences, 120–155 characters ideal */
  description: string;
  /** Tags — e.g. ["War", "Loss", "Reflections"] — also used as keywords */
  tags: string[];
  /** The poem body. Line breaks preserved. */
  body: string;
  /** Optional: dedicated image for social sharing (OpenGraph). Leave empty for default. */
  image?: string;
}

export const poems: Poem[] = [
  {
    slug: "the-day-the-sky-fell",
    title: "The Day the Sky Fell",
    language: "English",
    date: "2026-11-09",
    description:
      "A poem about a girl caught in a war she never chose — a meditation on loss, memory, and interrupted dreams, by Lion S. Asjad Ali Jafri.",
    tags: ["War", "Loss", "Reflections", "Memory"],
    body: `I woke this morning
like any other—
sunlight spilling over my notebook,
the smell of chalk,
pencils scratching,
whispers of friends trading secrets
before the bell.

I ran to school,
bag bouncing against my back,
laughed at a joke I barely heard,
traced letters in the margin of my page,
dreamed of a future
I thought was mine.

And then—
the sky screamed.

Metal and fire tore through walls
and laughter,
and every little thing I held.

I did not scream.
I did not run.
I simply…
woke somewhere else.

The air here tastes different—
quiet like an empty ocean.
I float between memories of life
and shadows of what was stolen.

I see my friends,
frozen in the last breath of a normal day,
smiles paused mid-laugh,
hands reaching for something
that would never come.

I am a girl of 165 names,
each one a heartbeat
the world forgot to keep.

I watch the teachers,
the walls,
the windows—
all swallowed by a war
that was not ours,
all rewritten in the language of fire.

I am here,
and yet I am everywhere—
a whisper in the ruins,
a tremor in the earth,
a tear no one can catch.

Do not remember me only as ash.
Remember me as sunlight spilling over a notebook,
a laugh barely finished,
a dream interrupted—
a girl who was
just beginning.`,
  },
];

/**
 * Get all poems sorted by date (newest first).
 */
export function getAllPoems(): Poem[] {
  return [...poems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single poem by slug.
 */
export function getPoem(slug: string): Poem | undefined {
  return poems.find((p) => p.slug === slug);
}

/**
 * Extract all unique tags across poems.
 */
export function getAllTags(): string[] {
  const set = new Set<string>();
  poems.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

/**
 * Extract all unique languages across poems.
 */
export function getAllLanguages(): PoemLanguage[] {
  const set = new Set<PoemLanguage>();
  poems.forEach((p) => set.add(p.language));
  return Array.from(set).sort();
}