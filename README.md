# StreamSuites-Docs
Documentation site source for StreamSuites user guides, references, and support content.

## What this repo is
- A Docusaurus site with Markdown content and sidebars.
- Public docs are served from https://docs.streamsuites.app.
- Current doc sections include `changelog`, `creator-guide`, `find-me-here`, `getting-started`, `guides`, `integrations`, `runtime`, `reference`, `support`, and `legal`.
- Site-served docs assets that resolve under `/assets/...` are kept in `static/assets/`.

## How it is deployed
- GitHub Actions builds on pushes to `main` (or manual runs) using `npm run build`.
- The static output in `build/` is uploaded and deployed to GitHub Pages.
- The docs domain is set by the checked-in `CNAME`.

## How versioning works
- Docusaurus versioning is enabled with `current` as the default and only active version.
- Version metadata lives in `versions.json` (currently empty).
- Versioned snapshots, when created, are stored in `versioned_docs/` and `versioned_sidebars/`.
- Version persistence is disabled, so the site does not remember a user's last version choice.

## Theme system (light/dark)
- Color mode is managed by Docusaurus via `docusaurus.config.js`.
- Default is dark; the toggle is enabled; OS color preference is ignored.
- Custom styling is in `src/css/custom.css`.

## Studio-first documentation system

- `src/css/custom.css` owns the calm editorial shell, navigation, sidebars, search, breadcrumbs, tables, code blocks, admonitions, tabs, pagination, focus, mobile containment, and reduced-motion treatment. `src/pages/index.jsx` and `src/pages/index.module.css` provide the product-family landing page.
- `static/assets/logos/docsnew.webp` is the shared Docs navbar and landing-hero mark. The existing `favicon.ico` remains the site favicon and is intentionally independent.
- Tektur is selective display typography, Geist Sans is the documentation and UI face, and IBM Plex Mono is used for code, commands, API paths, schema/version values, and technical metadata. Deployment-safe files live in `static/assets/fonts/`: `Tektur-VariableFont_wdth,wght.ttf`, `Geist-{Light,Regular,Medium,SemiBold,Bold,ExtraBold}.ttf`, and `mono/IBMPlexMono-{Light,Regular,Medium,SemiBold,Bold}.ttf`.
- All copied font hashes match the approved read-only Public source. Genuine licenses are stored at `static/assets/fonts/GEISTMONOOFL.txt` and `static/assets/fonts/mono/IBMPLEXMONOOFL.txt`; the missing genuine Tektur license file remains a publication blocker.
- `docs/product-family.md` and `docs/architecture/product-boundaries.md` document current Alpha roles, Runtime/Auth authority, and the separate Browser Studio, StudioApp, and OBS media paths without promoting planned work to shipped behavior. Existing slugs, anchors, Docusaurus versioning, local search, and Cloudflare/GitHub Pages paths remain intact.
- Run `npm run build` for the real production and MDX/link validation path.

## Search behavior
- Local, client-side search via `@easyops-cn/docusaurus-search-local`.
- Indexes docs and regular pages; blog indexing is disabled.
- Search index is generated at build time and loaded at runtime.

## Repo tree (current)
```
StreamSuites-Docs/
  .docusaurus/
  .github/
  assets/
  build/
  creator-guide/
  css/
  docs/
    architecture/product-boundaries.md
    product-family.md
  getting-started/
  guides/
  integrations/
  js/
  node_modules/
  pagefind/
  reference/
  runtime/
  src/
  static/
    assets/fonts/
      Tektur-VariableFont_wdth,wght.ttf
      Geist-{Light,Regular,Medium,SemiBold,Bold,ExtraBold}.ttf
      GEISTMONOOFL.txt
      mono/IBMPlexMono-{Light,Regular,Medium,SemiBold,Bold}.ttf
      mono/IBMPLEXMONOOFL.txt
    assets/logos/
      docsnew.webp
  support/
  versioned_docs/
  versioned_sidebars/
  _docusaurus-plan/
  .gitignore
  CNAME
  COMMERCIAL-LICENSE-NOTICE.md
  docusaurus.config.js
  EULA.md
  LICENSE
  BUMP_NOTES.md
  package-lock.json
  package.json
  README.md
  sidebars.js
  versions.json
```
