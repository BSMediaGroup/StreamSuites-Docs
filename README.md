# StreamSuites-Docs
Documentation site for StreamSuites(TM) user guides, references, and support content.

## What this repo is
- Docusaurus-based docs site with Markdown content, sidebars, and versioned docs.
- Source for the public documentation at https://docs.streamsuites.app.

## How it is deployed
- Built as a static site with Docusaurus; output goes to `build/`.
- Hosting uses the checked-in `CNAME` for the docs domain.
- Deploys are driven by the `deploy` script in `package.json`.

## How versioning works
- Docusaurus docs versioning with `current` plus `v1.x` and `v0.x`.
- Versions are tracked in `versions.json` and materialized in `versioned_docs/` and `versioned_sidebars/`.
- The version dropdown is enabled in the navbar.

## Theme system (light/dark)
- Color mode is managed by Docusaurus and configured in `docusaurus.config.js`.
- Default is dark, the toggle is enabled, and OS color preference is ignored.
- Custom styling is in `src/css/custom.css`.

## Search behavior
- Local, client-side search via `@easyops-cn/docusaurus-search-local`.
- Indexes docs and pages under `/docs`; blog search is disabled.
- Search assets are generated at build time.

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
