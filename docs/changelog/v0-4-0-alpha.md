---
title: StreamSuites Platform Release — v0.4.0-alpha
sidebar_label: v0.4.0-alpha
slug: /changelog/v0-4-0-alpha
---

# 🌌 StreamSuites Platform Release — v0.4.0-alpha  
**Unified Project Release Notes**

`v0.4.0-alpha` marks a **major alpha milestone** for the StreamSuites platform.  
This release brings all core repositories into **version parity**, formalizes **runtime authority**, hardens **authentication and admin recovery**, and significantly advances the **Creator, Admin, and Public experiences**.

While still alpha, this version represents the first **cohesive, system-level release** of StreamSuites as a multi-surface SaaS platform rather than a collection of loosely coupled components.

---

## 🧠 Platform-Wide Highlights

- Unified all StreamSuites repositories under a single version: **v0.4.0-alpha**
- Established the **Runtime as the canonical source of truth** for:
  - Version metadata
  - Roadmap data
  - Changelogs
  - Account and audit exports
- Hardened authentication across **Public, Creator, and Admin** surfaces
- Introduced **emergency admin recovery paths** to prevent total lockout scenarios
- Significantly improved UI consistency, routing correctness, and surface cohesion

---

## 🔐 Authentication, Sessions & Resilience

- Implemented shared `streamsuites_session` cookies for secure cross-subdomain auth
- Normalized session payloads across Creator and Admin roles
- Enforced strict role-based access (creator-only vs admin-only)
- Added **emergency admin fallback authentication** at both runtime and dashboard levels
- Fixed auth redirects, logout handling, and session edge cases across all surfaces
- Improved lockout handling and recovery UX for admin access

---

## 🧩 Runtime & Admin Authority

- Formalized runtime export contracts as **authoritative and immutable**
- Added account reconciliation, audit logging, and admin-facing exports
- Introduced Accounts and Audit Logs views in the Admin Dashboard
- Improved runtime process safety using Win32 JobObject management
- Fixed runtime shutdown idempotency and desktop process teardown
- Ensured GitHub Pages publishing correctly serves runtime exports

---

## 🎛️ Creator Experience

- Modernized the Creator Dashboard UI and layout
- Stabilized creator authentication and onboarding flows
- Added login/signup modal toggle and onboarding routing
- Introduced **Plans** and **Tiers** pages to support future monetization
- Added creator account widget for identity and status visibility
- Surfaced runtime version and build metadata directly in the creator UI
- Polished header layout, removed redundant controls, and improved usability

---

## 🛠️ Admin Dashboard

- Fully aligned admin dashboard hydration with runtime exports
- Standardized `ADMIN_BASE_PATH` and eliminated routing ambiguity
- Fixed asset resolution and boot reliability under `/docs`
- Added robust SAFE MODE handling for partial runtime failures
- Polished admin auth modals with StreamSuites branding and typography
- Improved operational visibility via new admin views and charts

---

## 🌐 Public Site

- Clarified the Public site’s role as a gateway into StreamSuites
- Added explicit Creator and Admin login entry points
- Unified all public authentication through the Auth API
- Improved landing page CTA hierarchy and login discoverability
- Added and polished public login/signup modal
- Ensured public pages hydrate version metadata from runtime exports

---

## 📚 Documentation

- Introduced the **initial tagged release** of the StreamSuites Docs site
- Established documentation structure, branding, and navigation
- Aligned Docs with platform-wide versioning and release cadence
- Prepared the Docs repository for significant expansion in upcoming releases

---

## 🧭 Looking Ahead

`v0.4.0-alpha` establishes StreamSuites as a **cohesive platform** with clear authority boundaries, resilient authentication, and aligned surfaces.

The next release cycle will focus on:
- Expanding documentation into a true knowledge base
- Advancing creator-facing functionality
- Refining onboarding and support workflows
- Continued stabilization toward beta readiness

---

## 🔗 Repository Changelogs

- Runtime: https://github.com/BSMediaGroup/StreamSuites/compare/v0.3.0-alpha...v0.4.0-alpha  
- Admin Dashboard: https://github.com/BSMediaGroup/StreamSuites-Dashboard/compare/v0.3.0-alpha...v0.4.0-alpha  
- Creator Dashboard: https://github.com/BSMediaGroup/StreamSuites-Creator/compare/v0.3.0-alpha...v0.4.0-alpha  
- Public Site: https://github.com/BSMediaGroup/StreamSuites-Public/compare/v0.3.0-alpha...v0.4.0-alpha  
- Documentation: https://github.com/BSMediaGroup/StreamSuites-Docs/commits/v0.4.0-alpha
