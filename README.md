# RealEyes Displays website

An Astro rebuild of [realeyesdisplays.com](https://www.realeyesdisplays.com), designed to preserve the current site’s layout, content, motion, and responsive behavior without WordPress or Elementor.

## Local development

Requirements: Node.js 22 and pnpm 10.

```sh
pnpm install
pnpm dev
```

The local site is available at `http://localhost:4321`.

## Production build

```sh
pnpm check
pnpm build
```

The static production site is written to `dist/`. Hostinger should publish the contents of that directory.

## Analytics

Copy `.env.example` to `.env` and set the existing GA4 measurement ID:

```text
PUBLIC_GA4_MEASUREMENT_ID=G-EBSGYCH5KC
```

The production build also falls back to the same public measurement ID if the variable is omitted. Local and staging builds do not load analytics, preventing preview traffic from polluting production reporting. Local and staging builds should use `PUBLIC_SITE_ENV=staging`; production must explicitly set `PUBLIC_SITE_ENV=production`. Staging builds receive `noindex` metadata and a crawler-blocking `robots.txt` automatically.

## Search and AI discovery

Production builds generate the XML sitemap, canonical URLs, social metadata, Organization/WebSite structured data, and `/llms.txt`. The production crawler policy allows standard search crawlers and `OAI-SearchBot`, while blocking `GPTBot`. Preview builds remain blocked from indexing.

The footer currently links to the existing RealEyes Passive Signage privacy policy at `https://realeyes.playr.biz/en/privacy_policy`. Replace that link with the new RealEyes Displays website privacy page when it is ready.

## Deployment

GitHub Actions verifies every push to `main`. The final Hostinger deployment step can be connected after the Hostinger destination and authentication method are confirmed. The expected settings are:

- Install: `pnpm install --frozen-lockfile`
- Build: `pnpm build`
- Publish directory: `dist`
- Node.js: 22
- Staging environment: `PUBLIC_SITE_ENV=staging`
- Production environment: `PUBLIC_SITE_ENV=production`

Do not commit Hostinger credentials or `.env` files. Add secrets in GitHub or Hostinger’s deployment settings.

## Source assets

Only production-ready files selected for the website are committed under `src/assets/media`. The full WordPress and Elementor migration exports remain outside the repository and are intentionally excluded by `.gitignore`.
