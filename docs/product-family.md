---
title: StreamSuites product family
description: Current roles, media ownership, and Alpha posture across StreamSuites production products and connected surfaces.
slug: /product-family
---

StreamSuites is a connected livestream-production suite. The production family leads; automation, audience engagement, administration, documentation, and developer intake connect around it.

## Production products

| Product | Current role | Media owner | Current documented posture |
| --- | --- | --- | --- |
| **Browser Studio** | Private browser production workspace at [studio.streamsuites.app](https://studio.streamsuites.app) | The browser connects directly to Cloudflare RealtimeKit. Runtime/Auth does not proxy media. | Closed-access Alpha with private-room and media foundations under active hardening. It remains **OFF AIR**; browser recording and broadcast output are not implemented. |
| **StudioApp** | Windows-first native studio with a C#/.NET/WPF shell and supervised C++ engine | Its native engine owns local capture, Direct3D composition, WASAPI audio, encoding, recording, replay, and direct output. | Native Alpha production workspace with implemented local media foundations and ongoing hardening. Some remote-participant and multi-source/provider capabilities remain deferred. |
| **StreamSuites Studio for OBS** | Dedicated native OBS Studio plugin and integration path | OBS owns scenes, sources, mixing, composition, encoding, recording, and streaming. | Alpha receiver and control-plane foundations are implemented. Production chat, alerts, games, automation controls, and output orchestration are not yet implemented in the plugin. |

These products are distinct on purpose. StudioApp is not a wrapped website, and the OBS integration is not an OBS fork or a duplicate of StudioApp's media engine.

## Shared authority

[Runtime/Auth](/docs/runtime/runtime-overview) is the canonical source for accounts, sessions, roles, tiers, permissions, rooms, invitations, credentials, destinations, alerts, automation and shared state, exports, audit information, and project-wide version/build metadata.

The production products consume that authority while keeping media out of the Python runtime.

## Connected surfaces

| Surface | Purpose |
| --- | --- |
| **Creator** | Operational companion for integrations, destinations, automation, alerts, analytics, account settings, and audience modules. |
| **Admin Dashboard** | Privileged operator client for Runtime/Auth-backed accounts, permissions, alerts, audit, telemetry, Studio access, and system visibility. |
| **Developer Console** | Access-gated technical intake, feedback, beta application, and structured reporting surface. It does not claim a public API or fictional token management. |
| **Public** | Read-only product, download, community, and audience-facing client. |
| **Docs** | Shipped-reality documentation for the family and its current boundaries. |
| **FindMeHere** | Public profile and discovery client with authority retained by Runtime/Auth. |

## Where to go next

- Read [authority and media boundaries](/docs/architecture/product-boundaries).
- Open the [Browser Studio](https://studio.streamsuites.app).
- Review the current [StudioApp surface](https://streamsuites.app/downloads/studioapp/).
- Review the [Studio for OBS surface](https://streamsuites.app/downloads/obs-plugin/).
- Continue with [getting started](/docs/getting-started/installation) or the [Creator guide](/docs/creator-guide/creator-dashboard).

