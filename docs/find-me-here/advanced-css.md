---
title: Advanced CSS
description: Scoped advanced CSS guidance for Pro-tier FindMeHere.live creator profiles.
sidebar_label: Advanced CSS
---

# Advanced CSS

FindMeHere advanced CSS lets Pro creators add small, scoped presentation overrides to their live `FindMeHere.live` profile page. This page is intentionally a foundation document for advanced users: it covers the real feature that exists today and can expand later as the wider FindMeHere docs section grows.

:::warning Scope and availability
Advanced CSS is a **Pro tier** feature for **FindMeHere.live profiles only**. It does **not** change the regular public StreamSuites creator profile, and it is not meant for users who are uncomfortable debugging CSS themselves.
:::

## Where the CSS applies

- You enter this CSS from the **Advanced FindMeHere styling** area in the Creator dashboard.
- The saved CSS is applied by the live FindMeHere profile renderer on `findmehere.live`.
- The feature is scoped to the FindMeHere profile surface only. It is not a site-wide styling hook, and it does not rewrite the normal StreamSuites public profile page.

## What you can customize

The current implementation only accepts a fixed set of local selector aliases. Use these aliases exactly as shown here.

| Selector alias | FindMeHere area |
| --- | --- |
| `.profile-root` | Entire scoped profile wrapper |
| `.profile-hero` | Hero/header card |
| `.profile-cover` | Cover media area |
| `.profile-body` | Main profile body container |
| `.profile-summary` | Summary/details stack |
| `.profile-avatar` | Avatar image block |
| `.profile-title` | Main title/name area |
| `.profile-meta` | Meta row |
| `.profile-about` | About/bio block |
| `.profile-live` | Live status banner |
| `.profile-actions` | Primary action row |
| `.profile-grid` | Lower content grid |
| `.profile-section` | Shared section card blocks |
| `.profile-links` | Link list wrapper |
| `.profile-social-item` | Individual link card |
| `.profile-share` | Share box |
| `.profile-destination` | Destination/callout box |

The current property allowlist is intentionally narrow and presentation-focused:

- Background and surface styling: `background`, `background-color`, `background-image`, `background-size`, `background-position`
- Borders and depth: `border`, `border-color`, `border-radius`, `box-shadow`
- Typography and readable text treatment: `color`, `opacity`, `font-family`, `font-size`, `font-style`, `font-weight`, `letter-spacing`, `line-height`, `text-transform`, `text-decoration`, `text-shadow`
- Spacing and simple alignment: `padding`, `padding-block`, `padding-inline`, `margin`, `margin-block`, `margin-inline`, `gap`, `align-items`, `justify-content`
- Light visual effects: `backdrop-filter`, `filter`

Use the standard FindMeHere theme controls for header branding, accent color, button color, button tone, font preset, layout preset, and image visibility. Advanced CSS is best reserved for last-mile visual refinement.

## Guardrails and cautions

- Unsupported selectors are ignored. Raw internal FindMeHere class names, global selectors, tag selectors, and layout-wide rewrites are not the supported contract here.
- Unsupported properties are ignored. This feature is meant for presentation changes, not for rebuilding the page layout from scratch.
- Unsafe input is rejected. The live renderer blocks unsupported at-rules and unsafe patterns such as `@import`, `@media`, `@supports`, `@layer`, `@keyframes`, `@font-face`, script-like values, and HTML injection attempts.
- Keep changes readable. High-contrast text, sensible spacing, and restraint around `opacity`, `filter`, and heavy shadows matter more than visual novelty.
- Test on the live FindMeHere page after saving. If a rule does not appear, first confirm that the selector alias and property are both on the supported list.

## Starter example

This example keeps to the real selector aliases and allowed property set used by the live FindMeHere renderer.

```css
.profile-hero {
  background: linear-gradient(135deg, rgba(13, 18, 31, 0.94), rgba(45, 10, 18, 0.88));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.28);
  padding: 1.5rem;
}

.profile-title {
  color: #f8fafc;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.profile-links {
  gap: 0.85rem;
}

.profile-social-item {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
}
```

## Example preview

![Sample FindMeHere advanced CSS preview](/assets/illustrations/advancedcss-sample-01.webp)

_Starter preview only. You can replace this image later without changing the page route or markdown structure._

## Notes and limitations

- This feature currently customizes presentation inside the existing FindMeHere profile shell. It is not a supported way to replace the full platform layout or inject arbitrary site-wide behavior.
- The broader FindMeHere docs section will expand later, but this page already reflects the real advanced CSS controls available in the current Creator dashboard and live renderer.
- If you need major structural changes, stay within the built-in FindMeHere theme controls first and add advanced CSS only where the standard settings stop short.
