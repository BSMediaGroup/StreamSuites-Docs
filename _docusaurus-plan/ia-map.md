# IA map (current -> Docusaurus)

This maps the current static IA (folders in repo root) to proposed Docusaurus
sections and route families.

| Current location | Current purpose | Docusaurus section | Proposed route | Notes |
| --- | --- | --- | --- | --- |
| `index.html` | Landing / hub | Home | `/` | Keep as Docusaurus home page.
| `getting-started/` | First-run / onboarding | Getting Started | `/getting-started` | Convert each page to MDX docs.
| `guides/` | How-to guides | Guides | `/guides` | Organize by workflow topics.
| `integrations/` | Partner / API integrations | Integrations | `/integrations` | Consider nested categories by vendor.
| `reference/` | Reference content | Reference | `/reference` | Likely most stable section.
| `runtime/` | Runtime / operational docs | Runtime | `/runtime` | Verify audience (dev vs ops).
| `support/` | Support docs / FAQ | Support | `/support` | Consider moving FAQs to separate subcategory.
| `creator-guide/` | Creator / contributor guide | Contributor Guide | `/creator-guide` | Could live under Guides if short.
| `assets/`, `css/`, `js/`, `favicon.ico` | Static assets | Static | `/assets` | Move into Docusaurus static/.
| `COMMERCIAL-LICENSE-NOTICE.md`, `EULA.md`, `LICENSE` | Legal | Legal | `/legal` | Expose in footer and sidebar.
