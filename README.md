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
PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

The analytics script is omitted when this value is blank, so local development does not pollute production reporting.

## Deployment

GitHub Actions verifies every push to `main`. The final Hostinger deployment step can be connected after the Hostinger destination and authentication method are confirmed. The expected settings are:

- Install: `pnpm install --frozen-lockfile`
- Build: `pnpm build`
- Publish directory: `dist`
- Node.js: 22

Do not commit Hostinger credentials or `.env` files. Add secrets in GitHub or Hostinger’s deployment settings.

## Source assets

Only production-ready files selected for the website are committed under `src/assets/media`. The full WordPress and Elementor migration exports remain outside the repository and are intentionally excluded by `.gitignore`.
