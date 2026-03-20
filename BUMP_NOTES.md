CURRENT VER= 0.4.2-alpha / PENDING VER= 0.4.2-alpha

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
