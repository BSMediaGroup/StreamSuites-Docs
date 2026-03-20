CURRENT VER= v0.4.0-alpha / PENDING VER= 0.4.2-alpha

## Technical Notes

- Bumped the docs package metadata from `0.1.0` to `0.4.2-alpha` in `package.json` and the root package entries in `package-lock.json` so the repository's release markers align with the platform release cycle.
- Added the new unified changelog page at `docs/changelog/v0-4-2-alpha.md` using the finalized `v0.4.2-alpha` release notes for Runtime, Dashboard, Creator, Public, FindMeHere, and Docs.
- Updated existing changelog navigation surfaces in `docs/changelog/index.md` and `sidebars.js` to include `v0.4.2-alpha` additively; no existing release entries were removed or shortened.
- Added `BUMP_NOTES.md` to the root README repo tree because this task introduced a new root-level file.
- Validation completed with the repo-standard build command `npm run build`; Docusaurus generated static files in `build/` successfully and refreshed the tracked build output for the new release page.
- The rebuild reported existing broken-link warnings on older docs pages such as `/docs`, `/docs/guides/*`, and `/docs/reference/runtime-overview`; these warnings predate the `v0.4.2-alpha` release-page additions and were not introduced by this release task.

## Human Notes

- The docs site now has a release-grade, workspace-wide `v0.4.2-alpha` platform changelog page rather than leaving this cycle unrepresented in Docs.
- Changelog discovery remains truthful and additive: the newest release is listed first, prior release pages remain intact, and no information architecture redesign was introduced.
- The docs repo itself is aligned to the broader late-alpha milestone without inventing extra product changes beyond the published release content.
- Docusaurus now rebuilds successfully after the release-page and navigation updates, with the existing broken-link warnings still present on unrelated legacy content.
