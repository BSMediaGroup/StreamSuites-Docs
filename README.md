# StreamSuites-Docs
Documentation site source for StreamSuites user guides, references, and support content.

## What this repo is
- A Docusaurus site with Markdown content and sidebars.
- Public docs are served from https://docs.streamsuites.app.

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
  package-lock.json
  package.json
  README.md
  sidebars.js
  versions.json
```
