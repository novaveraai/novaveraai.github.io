# Nova Vera AI & Robotics Lab — Official Website

> Research. Engineer. Innovate.

Official website for **Nova Vera AI & Robotics Lab** — an independent AI & robotics research initiative.

- **Founder & Lead Researcher:** S. Asjad Ali Jafri
- **Disciplines:** AI • Robotics • Computer Vision • Automation
- **Stack:** Next.js 14 · React 18 · TypeScript · Tailwind CSS · Lucide · static export
- **Hosting:** GitHub Pages (free)

---

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Production build (what GitHub Pages serves)

```bash
npm run build
```

This generates a static `out/` folder. Preview it locally:

```bash
npx serve out
```

---

## 🌐 Deployment (GitHub Pages)

This site is deployed automatically via **GitHub Actions** on every push to `main`.

### One-time setup

1. **Create the repo** on GitHub:
   - **User site (recommended):** repo name must be **`novaveraai.github.io`**
   - Then the site lives at `https://novaveraai.github.io`
   - Alternative (project site): any repo name → `https://novaveraai.github.io/<repo>`
     → in that case, edit `next.config.js` and set `const BASE_PATH = "/<repo>"`

2. **Initialize git and push:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit — Nova Vera Lab website v1.0"
   git branch -M main
   git remote add origin https://github.com/novaveraai/novaveraai.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** on the repo:
   - Repo → **Settings → Pages**
   - **Source:** GitHub Actions *(not "Deploy from a branch")*
   - Save

4. **Watch the deploy:** Repo → **Actions** tab → the "Deploy to GitHub Pages" workflow should run. First run takes ~2 min. After it succeeds, your site is live.

### Making edits later

```bash
git add .
git commit -m "Update: <what changed>"
git push
```

GitHub Actions rebuilds and redeploys in ~60 seconds. That's it.

---

## 🗂️ Project Structure

```
content/                 # MDX content staging (product copy, future articles)
  products/              # ordumind.mdx, dragon-sentinel.mdx
  projects/              # populate as real projects are completed
  articles/              # populate as real articles are written
public/                  # static assets, .nojekyll, favicon, logos
src/
  app/                   # Next.js App Router pages
    layout.tsx           # root layout: fonts, navbar, footer, grid backdrop
    page.tsx             # homepage
    about/, contact/,    # page routes
    products/            # product index + 2 product detail pages
    projects/, research/,# other routes
    publications/, insights/
    robots.ts            # auto-generated robots.txt
    sitemap.ts           # auto-generated sitemap.xml
    globals.css          # design tokens + glass utilities
  components/            # Navbar, Footer, GlassCard, DragonLogo, etc.
  lib/
    site.ts              # ⭐ SINGLE SOURCE OF TRUTH (name, email, socials, nav)
    content.ts           # ⭐ typed products, projects, articles, divisions
.github/workflows/
  deploy.yml             # GitHub Actions → Pages deployment
```

---

## ✏️ How to Edit Content

### Change lab name, email, or social links

**One file:** `src/lib/site.ts`

```ts
social: {
  github: "https://github.com/novaveraai",
  linkedin: "https://www.linkedin.com/in/nova-veraai-587712421/",
  instagram: null,        // ← paste URL when ready
  whatsappChannel: null,  // ← paste URL when ready
  whatsappGroup: null,    // ← paste URL when ready
  youtube: null,          // ← paste URL when ready
},
```

`null` = the icon is **hidden** (no dead links). Paste a URL and it appears.

### Add a new product

Edit `src/lib/content.ts` and add an object to the `products` array. Then create `src/app/products/<slug>/page.tsx` (copy one of the existing product pages, change `getProduct("<slug>")`).

### Add a project

Edit `src/lib/content.ts` → `projects` array. The Projects page will render automatically.

### Add an article

Edit `src/lib/content.ts` → `articles` array (Insights page is Coming Soon for v1 — will render once you swap it for a real grid).

---

## 🔴 Brand Tokens

| Token | Value | Use |
|---|---|---|
| `--brand-primary` | `#F00008` | Crimson — logos, accents, CTAs |
| `--brand-highlight` | `#FF0000` | Hover only |
| `--brand-dark-red` | `#960000` | Depth / gradients only |
| `--bg-base` | `#000000` | Page background |
| `--bg-main` | `#050505` | Elevated section background |
| `--text-primary` | `#FFFFFF` | Primary text |
| `--text-secondary` | `#B8B8B8` | Body text |
| `--text-muted` | `#777777` | Labels / metadata |
| `--glass-bg` | `rgba(255,255,255,0.04)` | Glass surfaces |
| `--glass-border` | `rgba(255,255,255,0.12)` | Glass borders |

**Rule:** crimson `#F00008` is the **only chromatic color**. Everything else is black / white / silver / gray.

---

## 🎨 Replacing the Dragon Logos

The `<DragonLogo letter="N|O|S" />` component renders a clean geometric placeholder (letter inside a hexagonal dragon-scale motif).

To use your real dragon artwork:

1. Save your artwork as `public/logos/N.svg`, `public/logos/O.svg`, `public/logos/S.svg`.
2. Edit `src/components/DragonLogo.tsx` to render `<Image src={\`/logos/${letter}.svg\`} ... />` when the file exists.

Ask the assistant to wire this up when your assets are ready.

---

## 📄 License

© 2026 Nova Vera AI & Robotics Lab. All rights reserved.