---
title: StreamSuites Platform Release — v0.4.2-alpha
sidebar_label: v0.4.2-alpha
slug: /changelog/v0-4-2-alpha
---

# 🌌 StreamSuites Platform Release — v0.4.2-alpha
**Unified Project Release Notes**

`v0.4.2-alpha` is the late-alpha release that hardens the runtime-owned alerting contract, expands admin analytics with richer geo visibility, and turns the desktop-admin migration path into active in-repo delivery work instead of planning alone.

This cycle keeps StreamSuites aligned around **runtime authority** while making the Admin, Creator, Public, and FindMeHere surfaces more truthful to that central contract. It also publishes the corresponding unified documentation release so the docs site tracks the same platform milestone.

---

## 🧠 Platform-Wide Highlights

- Advanced the **runtime-owned alerting contract** with persisted rules, targets, notification preferences, authenticated SSE delivery, delivery history, and real event production across platform flows
- Expanded platform telemetry and alert context with richer geo and request metadata, including city, region, `region_code`, `client_ip`, `user_code`, `page_path`, canonical `page_url`, and `{{country_flag}}`
- Promoted admin reporting from broad country summaries to **city and region-aware analytics** with stronger hydration and geo-ingestion resilience
- Split **Alerts** and **Analytics** into clearer admin workspaces while keeping backend authority in the Runtime
- Established `findmehere.live` as a first-class **directory surface** for analytics, sessions, page visits, and alert traffic
- Moved the **WPF Desktop Admin replacement** into a live migration track while preserving the WinForms desktop app as a runnable fallback

---

## 🧱 Runtime, Auth & Alerting Authority

- Added runtime-owned multi-device alerting foundations with persisted rules, targets, preferences, delivery history, authenticated SSE delivery, and real event generation across auth, admin, signup, and public page-visit flows
- Expanded alert payload context additively with richer geo and request metadata for downstream admin and notifier surfaces
- Narrowed the auth access gate to public and creator fresh-auth starts while preserving internal and admin auth paths through the shared `/auth/access-state` and debug-bypass contract
- Reduced alert-state loading overhead and hydration instability in runtime and admin-facing APIs after the geo rollout
- Reconciled existing repo-prep state with authoritative runtime version markers stamped at `0.4.2-alpha`

---

## 🖥️ Desktop Admin, Alerts & Analytics

- Established the WPF Desktop Admin replacement program with a branded shell host, shared desktop-admin foundation work, an audit trail, and live operator views for overview, diagnostics, health, monitoring, logs, API usage, paths, settings, console visibility, and platform deployments
- Kept the legacy WinForms Desktop Admin runnable as the fallback and migration reference while the WPF path continues toward parity
- Reinforced the separate Windows Alerts client as a backend-driven notifier with device registration, SSE subscription, retained history, quiet-hours controls, overlay behavior, remote-auth hardening, deep-link-aware alert details, and substantial banner and layout polish
- Split Alerts into a dedicated admin route and restored Analytics as its own reporting page so alert authoring and geo reporting no longer compete inside one narrow workspace
- Hardened dashboard hydration so a failing section is less likely to blank the whole admin experience, and improved location formatting across analytics and alerts

---

## 🎛️ Creator Experience

- Wired creator auth entry points to the runtime-owned `/auth/access-state` and `/auth/debug/unlock` contract instead of local maintenance behavior
- Repaired creator redirect loops, callback timing, post-login hydration, and auth-session noise so valid creator sessions settle cleanly
- Continued the move toward cleaner path routing and Cloudflare Pages-safe deep links
- Added creator-facing public profile and FindMeHere settings, including canonical slug and visibility controls backed by authoritative profile APIs
- Polished account, settings, notifications, overview, statistics, Discord integration, auth notices, and footer version/build presentation to keep the creator surface stable while platform access rules evolve

---

## 🌐 Public Site & FindMeHere Directory

- Wired public auth entry points to the runtime-owned `/auth/access-state` and `/auth/debug/unlock` flow, with passive lockout banner behavior instead of turning ordinary public pages into gated routes
- Fixed redirect-loop, category-hydration, and auth-modal issues so public browsing and login remain usable during gate-state changes
- Tightened public shell polish across user widgets, fallback avatars, footer presentation, share-link behavior, and release-facing resources and statistics surfaces
- Kept public-profile, badge, and live-status behavior downstream of centralized runtime authority rather than repo-local ownership
- Turned FindMeHere into a true **directory-first** surface with `/` as discovery, `/<slug>` as the canonical public profile route, and explicit `directory` traffic tracking for analytics and alerts
- Continued the FindMeHere redesign with premium dark and light theme support, persisted theme switching, live-first presentation, pulsing live treatments, and stronger share-first profile behavior

---

## 📚 Documentation

- Published the unified `v0.4.2-alpha` platform changelog in the Docs site so the release cycle is represented in one authoritative documentation page
- Updated changelog navigation surfaces to include the new release alongside prior platform notes
- Bumped the Docs repository release markers to align the package metadata with the broader `v0.4.2-alpha` release cycle

---

## 🧭 Looking Ahead

`v0.4.2-alpha` reinforces StreamSuites as a platform where runtime-owned contracts define behavior across every surface, while late-alpha work pushes desktop administration, alerting, analytics, and directory tracking toward a more operationally complete system.

The next cycle is likely to focus on:
- Continuing WPF Desktop Admin parity work
- Expanding alert authoring and downstream operator tooling
- Further refining creator and public profile flows around shared platform authority
- Turning the docs site from release alignment into broader knowledge-base depth

---

## 🔗 Repository Changelogs

- Runtime: https://github.com/BSMediaGroup/StreamSuites/compare/v0.4.0-alpha...v0.4.2-alpha
- Admin Dashboard: https://github.com/BSMediaGroup/StreamSuites-Dashboard/compare/v0.4.0-alpha...v0.4.2-alpha
- Creator Dashboard: https://github.com/BSMediaGroup/StreamSuites-Creator/compare/v0.4.0-alpha...v0.4.2-alpha
- Public Site: https://github.com/BSMediaGroup/StreamSuites-Public/compare/v0.4.0-alpha...v0.4.2-alpha
- FindMeHere / Members: Previous repo-local release tag is unavailable in this clone; confirm the prior release anchor before tagging or publishing `v0.4.2-alpha`
- Documentation: https://github.com/BSMediaGroup/StreamSuites-Docs/compare/v0.4.0-alpha...main
