# RealEyes Displays Website Rebuild — Discovery Audit

Audit date: October 20, 2026

This report records the initial read-only audit of the current public website and the approved `RealEyes Website Assets - Shared` source folder. No source assets were modified, moved, renamed, or deleted.

## Source boundary

The live website at `www.realeyesdisplays.com` is the primary visual and behavioral authority for the rebuild. The only local source folder approved for asset selection is:

`RealEyes Website Assets - Shared`

Sibling folders are outside the project scope and will not be used as build inputs. The approved folder is a source library only: production-ready copies will be selected, optimized, and placed in the Astro project without modifying the originals.

## Executive summary

The website is a strong fit for a static Astro rebuild. It has six primary public pages, one shared header/footer system, a small and repeatable animation vocabulary, two image carousels, one background hero video, one Google map, and four ClickUp form destinations.

The approved source folder contains page mockups, PSD source files, page-specific image exports, brand assets, and a large reference gallery. Its source files will remain outside the production repository.

An exact visual reconstruction is feasible. The WordPress content export, `wp-content/uploads` archive, Elementor Site Kit/template export, and active-plugin screenshot were supplied on October 20, 2026 and used to resolve the production page structure, content, global styles, media, and form destinations.

## Public site scope

| Page | Current path | Image elements | Lazy-loaded images | Animation configurations |
| --- | --- | ---: | ---: | ---: |
| Home | `/` | 15 | 10 | 14 |
| Our Roots | `/our-roots/` | 21 | 15 | 24 |
| Passive Displays | `/passive-displays/` | 54 | 46 | 17 |
| Interactive | `/interactive/` | 66 | 61 | 14 |
| Partners | `/partners/` | 6 | 1 | 6 |
| Contact | `/contact-us/` | 7 | 2 | 10 |

The audit found 169 image elements across the six page loads. Repeated header/footer assets are included in that number.

### Behavior to reproduce

- Responsive desktop and mobile headers, including the mobile hamburger menu.
- Desktop navigation card with active-page styling.
- Autoplaying, muted, looping homepage background video.
- Scroll-triggered `fadeInLeft`, `fadeInRight`, `fadeInUp`, and `fadeInDown` entrances.
- Passive Displays image carousel: three slides, 500 ms transition, 5-second autoplay, loop, arrows, pause on hover and interaction.
- Interactive image carousel: coverflow presentation, three slides, 500 ms transition, 5-second autoplay, loop, arrows, pause on hover and interaction.
- Image hover/float treatment on the homepage calls to action.
- Google map on the Contact page.
- ClickUp forms opened in modal overlays.
- External Client Login link to the existing player portal.

At a 390 × 844 mobile viewport, the homepage had no horizontal overflow. The mobile layout and breakpoint behavior can therefore be captured directly from the existing site and reproduced.

## Current integrations

The public site currently exposes these form workflows:

1. New Displays Request — ClickUp form embedded in an Elementor modal.
2. Rehab or Help with Existing Displays — ClickUp form embedded in an Elementor modal.
3. Partner Inquiry — ClickUp form embedded in an Elementor modal.
4. Existing-client support — direct ClickUp form link.

These can remain ClickUp-hosted in the Astro rebuild. We only need to replace Elementor's modal wrapper with an accessible, lightweight dialog component.

The live site also uses:

- Elementor and Elementor popup/background-video behavior.
- Royal Elementor Addons.
- LiteSpeed-combined CSS and JavaScript.
- Google Maps on the Contact page.
- Red Hat Display for headings and body copy, as specified by the Elementor global site settings.

No obvious GA4 or Google Tag Manager loader appeared in the homepage scripts inspected during this audit. It may be conditionally loaded or folded into another configuration, so analytics should be verified against the WordPress header settings, Tag Manager account, and GA4 property before migration.

## Approved asset-library inventory

Source folder: `RealEyes Website Assets - Shared`

- Total files: 552
- Total size: approximately 5,913.2 MB

### Page-specific source folders

| Area | Files | Approximate size |
| --- | ---: | ---: |
| Home | 15 | 7.7 MB |
| Our Roots | 18 | 5.7 MB |
| Passive Displays | 104 | 269.2 MB |
| Interactive | 163 | 263.4 MB |
| Partners | 14 | 55.3 MB |
| Contact | 9 | 141.6 MB |
| Branding and Logos | 6 | 4.7 MB |
| Display Pic Gallery | 155 | 5,039.8 MB |

The remaining files are stored at the approved folder's top level. The Display Pic Gallery is a source/reference library, not a production web folder; it contains most of the large videos.

## Asset-selection rules

- Keep the approved source folder unchanged.
- Select assets by comparing them with the live website, not merely by filename.
- Do not ship PSDs, full-resolution originals, unused videos, or complete-page mockups.
- Generate appropriately sized AVIF/WebP/JPEG output files from the best available originals.
- Record every selected source-to-production mapping so future replacements are traceable.

## Current-site accessibility and SEO findings

These issues can be corrected while preserving the visual design:

- All 169 observed image elements had empty alternative text.
- None of the six primary pages exposed a standard meta description.
- Home, Passive Displays, Interactive, Partners, and Contact did not expose an H1 heading.
- Some visible headings contain copy or punctuation issues, including `Corporate Headquaters` and `- Office Buildings / High Rise`.
- Several image-only links have no accessible label.
- The ClickUp modal experience should receive explicit dialog labeling, focus trapping, Escape-to-close support, and focus restoration.

These are implementation improvements, not reasons to change the approved visual layout.

## Recommended production asset strategy

1. Preserve `RealEyes Website Assets - Shared` as the untouched source library.
2. Do not place the source library inside Git.
3. Create a curated working set from the final page folders and live-site media map.
4. Export responsive AVIF/WebP/JPEG variants from the best available originals.
5. Keep PSDs, full-resolution photography, unused video, and full-page mockups outside the production repository.
6. Ship only the 8.3 MB homepage hero video after verifying its codec, dimensions, and mobile fallback poster.
7. Use the display gallery only when a page explicitly references one of its photos.
8. Record every chosen source-to-output mapping so later replacements remain traceable.

## Migration export status

Received and reviewed:

- Elementor Website Template export containing the six pages, header, footer, popups, global Site Settings, fonts, and icons.
- WordPress content export (`.xml`) containing page content and metadata.
- WordPress `wp-content/uploads` export preserving the 2025 media library.
- Active WordPress plugins screenshot.

No SEO/redirect export or analytics configuration was present. The new build therefore preserves the six public routes directly and accepts the GA4 measurement ID through `PUBLIC_GA4_MEASUREMENT_ID` when it is supplied. All four ClickUp form destinations have been preserved.

Place these items in a new `_migration-exports` subfolder inside `RealEyes Website Assets - Shared`. Do not include `wp-config.php`, database dumps, passwords, API secrets, recovery codes, or a full hosting-account backup.

## Proposed implementation sequence

1. ~~Import the remaining WordPress/Elementor references.~~ Complete.
2. ~~Create a frozen visual baseline for desktop and mobile.~~ Complete.
3. ~~Scaffold the Astro repository and shared design tokens.~~ Complete.
4. ~~Build header, footer, dialog, carousel, and animation primitives.~~ Complete.
5. ~~Rebuild Home, Our Roots, Partners, Contact, Passive Displays, and Interactive.~~ Complete.
6. ~~Curate and optimize production assets.~~ Complete; Astro produces responsive WebP output at build time.
7. ~~Add accessibility, metadata, sitemap, Hostinger cache rules, analytics hooks, and event tracking.~~ Complete; the GA4 ID remains to be supplied.
8. Deploy to a Hostinger staging subdomain from GitHub.
9. Run staging visual-regression, browser, mobile, link, form, Lighthouse, and analytics QA.
10. Obtain approval, back up WordPress, and perform a reversible production cutover.
