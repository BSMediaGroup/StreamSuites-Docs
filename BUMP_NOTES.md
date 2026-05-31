# Bump Notes

## RELEASED / PACKAGED: 0.4.2-alpha

Packaged / released and no longer the active pending bucket. Preserve new notes for the open `0.5.0-alpha` section below.

## CURRENT VER= 0.5.0-alpha / PENDING VER= 0.5.1-alpha

## Release Prep — v0.5.0-alpha

- BUMP_NOTES.md restructured with proper RELEASED 0.4.2-alpha archiving for consistency with the rest of the platform.
- New detailed `v0.5.0-CHANGELOG.md` created.
- Package metadata bumped to 0.5.0-alpha.
- Changelog navigation and Docusaurus sidebars updated for the new release.
- Master `v0.5.0-PROJECT-CHANGELOG.md` published in the runtime repository and linked from the docs site.

### Files / Areas Touched

- `BUMP_NOTES.md`
- `package.json`
- `sidebars.js`
- `docs/changelog/index.md`
- `docs/changelog/v0-5-0-alpha.md` (new)
- `changelog/v0.5.0-CHANGELOG.md` (new in runtime)

CURRENT VER= 0.4.2-alpha / PENDING VER= 0.4.2-alpha

## FindMeHere Advanced CSS Docs Scaffold - 2026-03-28

### Technical Notes

- Added the first Docusaurus `FindMeHere` sidebar/category scaffold and authored `docs/find-me-here/advanced-css.md`, which resolves to `/docs/find-me-here/advanced-css` under the current docs routing setup.
- The new page is grounded in the live FindMeHere implementation: it documents the current advanced CSS selector aliases, the presentational property allowlist, the at-rule and unsafe-input rejections, and the product boundary that this feature is Pro-only and FindMeHere.live-only.
- Wired the requested preview image into the actual Docusaurus-served asset path at `static/assets/illustrations/advancedcss-sample-01.webp` so the markdown page can render the inline WEBP during a normal site build.
- Updated the root README to reflect the new `find-me-here` docs section and the repo's real `/assets/...` static-asset convention.
- Validation completed with `npm run build`, which generated the new route, sidebar entry, markdown code fence, and inline image through the real Docusaurus pipeline.
- The build still reports the repo's older broken-link warnings on existing legacy docs pages; those warnings predate this FindMeHere docs addition and were not introduced by the new page.

### Human Notes

- Docs now have a truthful first-pass FindMeHere section instead of sending advanced CSS users to a future empty route.
- The new page teaches safe customization without implying that creators can rewrite the whole public profile shell with unrestricted CSS.
- The preview image is wired as a real inline doc asset, so it can be swapped later without changing the page structure.

### Files / Areas Touched

- `sidebars.js`
- `docs/find-me-here/advanced-css.md`
- `static/assets/illustrations/advancedcss-sample-01.webp`
- `README.md`
- `BUMP_NOTES.md`

## Technical Notes

- CI was failing at `npm ci` because `package-lock.json` contained a poisoned transitive entry for `update-notifier -> is-yarn-global` that pointed npm at the nonexistent tarball `is-yarn-global-0.4.2.tgz`.
- Removed and regenerated the root `package-lock.json` from `package.json` after isolating the stale local install tree, which replaced the bad lockfile entry with the published `is-yarn-global@0.4.1` resolution.
- Validation run for this repair used the repo's CI install/build commands: `npm ci` and `npm run build`.
- `npm ci` now succeeds locally against the regenerated lockfile, and `npm run build` now succeeds and generates the Docusaurus site.
- The Docusaurus build still reports pre-existing broken-link warnings on older docs routes; those warnings did not block the build during this repair.

## Human Notes

- The docs pipeline was blocked by a bad lockfile artifact, not by a real package declared in `package.json`.
- The fix was a clean lockfile replacement rather than a broad dependency upgrade, so the repo stays truthful to its existing dependency intent.
- The regenerated lockfile is expected to differ substantially from the prior one because the broken generated artifact was replaced with a fresh npm-generated dependency graph.

CURRENT VER= v0.4.0-alpha / PENDING VER= 0.4.2-alpha

## Technical Notes

- Bumped the docs package metadata from `0.1.0` to `0.4.2-alpha` in `package.json` and the root package entries in `package-lock.json` so the repository's release markers align with the platform release cycle.
- Added the new unified changelog page at `docs/changelog/v0-4-2-alpha.md` using the finalized `v0.4.2-alpha` release notes for Runtime, Dashboard, Creator, Public, FindMeHere, and Docs.
- Updated existing changelog navigation surfaces in `docs/changelog/index.md` and `sidebars.js` to include `v0.4.2-alpha` additively; no existing release entries were removed or shortened.
- Added `BUMP_NOTES.md` to the root README repo tree because this task introduced a new root-level file.
- Validation completed with the repo-standard build command `npm run build`; Docusaurus generated static files in `build/` successfully and refreshed the tracked build output for the new release page.
- The rebuild reported existing broken-link warnings on older docs pages such as `/docs`, `/docs/guides/*`, and `/docs/reference/runtime-overview`; these warnings predate the `v0.4.2-alpha` release-page additions and were not introduced by this release task.
- Repaired CI install failures by fixing invalid transitive lockfile entries for `cssnano-preset-advanced -> autoprefixer` and old `ajv -> json-schema-traverse` chains, then updated the GitHub Pages workflow to use `npm ci`, opt into Node 24 action runtime, and install/build on Node 24.
- Regenerated `package-lock.json` with a newer npm dependency model so optional wasm packages required by `@node-rs/jieba` are now present in the lockfile for cross-platform CI installs instead of being omitted by the prior lockfile state.

## Human Notes

- The docs site now has a release-grade, workspace-wide `v0.4.2-alpha` platform changelog page rather than leaving this cycle unrepresented in Docs.
- Changelog discovery remains truthful and additive: the newest release is listed first, prior release pages remain intact, and no information architecture redesign was introduced.
- The docs repo itself is aligned to the broader late-alpha milestone without inventing extra product changes beyond the published release content.
- Docusaurus now rebuilds successfully after the release-page and navigation updates, with the existing broken-link warnings still present on unrelated legacy content.
- GitHub Actions is now configured more defensively for this repo's current dependency graph instead of depending on broken registry resolutions from the previous lockfile state.
- The lockfile now covers both the broken tarball corrections and the missing `@node-rs/jieba` wasm dependency set that was previously blocking `npm ci` on GitHub Actions.
