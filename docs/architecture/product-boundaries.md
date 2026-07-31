---
title: Authority and media boundaries
description: The trust, state, and media-ownership boundaries that keep StreamSuites products coordinated without duplicating authority.
slug: /architecture/product-boundaries
---

StreamSuites coordinates several production and client surfaces without turning every repository into an independent source of truth.

## Canonical state

Runtime/Auth owns canonical:

- accounts, sessions, roles, tiers, and permissions;
- Studio access, rooms, invitations, participants, and room-scoped guest access;
- credentials and destinations;
- alerts, automation, and shared project state;
- exports, audit data, telemetry projections, and project version/build metadata.

Creator, Admin, Developer, Docs, Public, FindMeHere, Browser Studio, StudioApp, and the OBS integration consume the contracts relevant to them. Downstream caches and exports are projections or hydration inputs, not independent authority.

## Media stays with the production surface

| Surface | Media boundary |
| --- | --- |
| **Browser Studio** | Browser clients use the currently implemented Cloudflare RealtimeKit integration directly. The Python runtime does not transport browser audio or video. |
| **StudioApp** | The supervised native C++ engine owns capture, composition, mixing, encoding, recording, replay, device control, and direct output. |
| **StreamSuites Studio for OBS** | OBS owns its media pipeline. The plugin uses supported OBS integration paths and does not embed or recreate StudioApp's engine. |
| **Runtime/Auth** | Owns control, identity, policy, protected credential, and shared-state decisions. It is not the media engine or media transport. |

Self-hosted LiveKit plus Egress is later direction for Browser Studio, not the currently shipped browser media layer.

## Guest and access boundaries

Guest invitations are temporary, room-scoped access. They do not create a new account authority, role system, or permission store in a client repository.

Admin and Creator interfaces can request or display privileged changes only through Runtime/Auth contracts. UI state must not imply that a write succeeded until the authoritative response confirms it.

## Version and build identity

The canonical StreamSuites system version/build comes from Runtime/Auth. A client or product may expose separately governed component metadata, but that metadata does not replace the system authority.

## Security posture

- Cookies, OAuth tokens, credentials, stream keys, and provider secrets must not be exposed in browser logs or documentation examples.
- Browser-public configuration must contain only values safe to ship to clients.
- OAuth callbacks, role checks, permission checks, session redirects, and return URLs remain part of the existing Auth flow.
- Provider integrations must use documented, implemented contracts; planned APIs are not presented as available.

