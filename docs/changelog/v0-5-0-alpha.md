---
title: StreamSuites Platform Release — v0.5.0-alpha
sidebar_label: v0.5.0-alpha
---

# 🌌 StreamSuites Platform Release — v0.5.0-alpha

**Release Date:** Late Alpha — 2026  
**Scope:** All 8 StreamSuites repositories (Runtime + 7 satellite surfaces)

This release ships the foundational contracts that will power the next phase of the platform: a real economy system, first-class Kick live status, robust public identity management, scoped progression, and significantly improved parity across every major surface.

---

## 🌟 Major Platform Themes

- **Economy becomes real**: Full Market & Exchange system with admin governance, public catalogs, livechat commands (`!market`, `!buy`, `!exchange`), scoped wallets/inventory, and rich public metadata.
- **Kick is now first-class**: Official webhook support, live status provider, bot session orchestration, recent stream history, and scoped XP/rank in the trigger runtime.
- **Public identities & accounts**: Complete system for primary/secondary identities, admin reconciliation, owner self-service unassign with reasons, and proper roll-up into StreamSuites accounts for progression/economy/leaderboards.
- **Scoped progression**: Channel/creator-scoped livechat XP with global roll-up, suppression controls, and new public APIs.
- **Surface parity & maturity**: Creator, Dashboard, Developer, and Public all received major shell, auth, and tooling alignment work.

---

## 🧠 Runtime & Auth Highlights

### 💰 Economy & Market Foundations
- Added complete Runtime/Auth-owned Market & Exchange contract (`/api/public/economy/market-exchange`, `/api/public/economy/market/buy`, exchange endpoints).
- Admin Market Governance endpoints for controlling sale/exchange eligibility, pricing, stock limits, and labels per item definition.
- Livechat command integration: `!market`, `!shop`, `!buy <item> <qty>`, `!exchange`, `!exchange rates` now work through the Kick webhook trigger path with safe fallbacks.
- Scoped wallet and inventory rows with proper global roll-up behavior and creator-controlled suppression.
- Rich public item metadata (tooltips, descriptions, chat aliases, icons) seeded and projected from authoritative item definitions.
- Admin tools for item definitions, denominations, asset catalog management, and safe icon handling with full audit reasons.

### 📡 Live Status & Kick
- Official Kick live status provider using Kick's public API with proper caching, backoff, and diagnostics.
- Webhook subscription management, bot session orchestration, and redacted debug pipeline.
- Recent stream history added to live-status exports and public profile `latest_stream` payloads (ended streams now persist safely).
- Scoped livechat XP/rank/level module activated for Kick (`!xp`, `!rank`, `!level`, `!leaderboard`, `!top`).
- Public profile projections now include safe `tray_sources` and ended stream evidence.

### 👥 Public Identities & Account Projection
- Full public identity assignment, unassignment (with required reasons), and admin reconciliation workflow.
- Primary identities protected; secondary identities can be self-service removed by owners.
- Assigned identities now properly roll up under StreamSuites accounts in progression, economy, and leaderboards while preserving history.
- Admin tools for reviewing ambiguous/unresolved identities and forcing assignments when needed.

### ⚙️ Other Core Improvements
- Scoped progression settings API for creators (`/api/creator/progression/scoped-settings`).
- Platform identity alias self-service removal.
- X OAuth fixes and improved auth surface identification.
- Trigger editor contract exposed for Dashboard and Creator consumers (validation + no-send dry-run).

---

## 🎨 Creator Surface

- Complete Wheels system shipped: full editor, import/export (`.sswheel` format), public links, sound assets per category, SSE live updates, and default vs scoreboard display modes.
- Creator trigger management with runtime-backed editor, validation, "Livechat Trigger Simulator", platform chips, and clear staging of planned modules.
- Public identity alias tools and secondary identity management on the account page.
- Scoped livechat progression settings and advanced roll-up suppression.
- Rumble integration hardening and graceful degradation on partial data.
- Hovercard and social registry consistency with the rest of the platform.

---

## 📊 Dashboard (Admin)

- Full Economy Command Center: item definitions, denominations, asset catalog with bundled/external/upload modes, market governance, and rich inspectors.
- Dedicated Public Identity Reconciliation workspace with filters, assignment, unassignment, notes, and conflict handling.
- Major overhaul of the Admin Triggers page into a dark "command center" with global/effective/custom/planned sections, validation, and dry-run.
- Significant expansion of Kick bot debugging (webhook mode, subscription attempts, async probe transport, detailed diagnostics).
- Live status diagnostics panels and many resilience/loading/parity fixes across economy, progression, bots, accounts, and telemetry surfaces.
- Local runtime version mirrors kept in sync with the authoritative runtime export.

---

## 🛠️ Developer Console

- Reached first-class surface status with full Admin-style authenticated shell (sidebar + topbar + collapse + mobile drawer).
- Clear separation between protected console routes and standalone public/intake pages (`/feedback`, `/beta/apply`, `/reports/submit`, login flows, etc.).
- Structured developer report form with explicit required/optional fields, checkbox-driven affected areas, and rich `structured_metadata`.
- Expanded surface catalog covering all major StreamSuites products and runtime targets.
- Proper `console` surface identification during auth, Turnstile + access-code parity, and `developer_console_access` enforcement.

---

## 🌐 Public & FindMeHere (Members)

- Full public Market & Exchange experience now live with catalog, purchases, exchanges, and livechat command surface.
- FindMeHere transformed into a first-class public directory surface with creator-led slideshow, strong light/dark theming, custom links, background handling, and advanced CSS foundation.
- Proper `directory` surface tracking for analytics and alerting.
- Consistent live status (Rumble + Kick), public identity handling, hovercards, and badge behavior.
- Games & Economy hub stabilized with canonical routing and shell-level section bar.

---

## ✨ Cross-Cutting & Polish

- Consistent auth surface contracts, access gating, and session handoff behavior across all consumer repos.
- Hovercard, social platform registry, and badge normalization aligned everywhere.
- Many loading resilience, error state, and layout parity improvements.
- Strong emphasis on "runtime as source of truth" — surfaces are consumers, not owners of identity, live status, economy, or progression data.

---

## 📦 Release Artifacts & Versioning

- Canonical runtime version stamped at `0.5.0-alpha` in `runtime/version.py` and `runtime/exports/version.json`.
- BUMP_NOTES.md prepared with proper 0.4.2-alpha archiving in all 8 repositories.
- Detailed per-repo changelogs created:
- Runtime (StreamSuites/repo/changelog/v0.5.0-CHANGELOG.md)
- Public (StreamSuites-Public/changelog/v0.5.0-CHANGELOG.md)
- Creator (StreamSuites-Creator/changelog/v0.5.0-CHANGELOG.md)
- Dashboard (StreamSuites-Dashboard/changelog/v0.5.0-CHANGELOG.md)
- Members (StreamSuites-Members/changelog/v0.5.0-CHANGELOG.md)
- Developer (StreamSuites-Developer/changelog/v0.5.0-CHANGELOG.md)
- LiveChat Launcher (StreamSuites-LiveChat-Launcher/changelog/v0.5.0-CHANGELOG.md)
- This is the canonical published version of the platform changelog for v0.5.0-alpha.

---

**Note:** This release is deliberately foundation-heavy. Clipping/FFmpeg, full game economy, advanced creator monetization, and several planned trigger modules remain staged for future cycles. The contracts shipped here are the durable base the rest of the platform will build on.

Compare ranges (once tags are created): `v0.4.2-alpha...v0.5.0-alpha` per repository.

---

*This page contains the full official v0.5.0-alpha platform changelog.*
