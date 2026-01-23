---
title: Stripe
slug: /integrations/stripe
---

Integrations

<span class="version-badge">Applies to StreamSuites v0.3+</span>

Connect StreamSuites to Stripe for payments and entitlements.

This page will be expanded.

## Billing overview

### Overview of StreamSuites billing model

StreamSuites uses Stripe to handle billing for paid access and usage-based features. The StreamSuites account owner manages billing for their workspace, while end users see access based on the plan or purchase tied to that workspace.

### Role of Stripe in payments

Stripe processes payments and issues receipts. StreamSuites stores only the billing status and access rules needed to provide service, while Stripe handles the actual payment transaction.

### What users are charged for (high level)

Charges are based on the plan selected and any usage-based features enabled for the workspace. If a plan includes limits, exceeding those limits may trigger additional charges according to the plan rules.

### Supported payment methods

Stripe supports common payment methods such as credit and debit cards, and may offer additional local payment options depending on region. The available options are shown during checkout.

### Security and compliance (high level)

Payment details are entered and stored in Stripe's secure environment. StreamSuites does not store full card numbers and relies on Stripe's security controls and compliance program to protect payment data.

### Subscription lifecycle

#### Trial state (if applicable)

During a trial, paid features are available so you can evaluate the plan. Workspace data, integrations, and configurations remain intact. Access does not immediately change for non-billing users.

#### Active subscription

Active status grants the full set of plan features and any usage-based capabilities enabled for the workspace. Normal access rules apply to members. Nothing breaks as long as the subscription stays active.

#### Past-due / payment failure

When a payment fails, billing status reflects past-due while access may be limited to core functionality. Workspace data, configurations, and integrations remain in place. Access for existing members does not immediately change at the moment of failure.

#### Canceled subscription

After cancellation, paid features are no longer available and access is restricted to non-paid functionality. Workspace data and configurations remain preserved. Integrations are not deleted, but paid-driven capabilities are unavailable.

#### Reactivation behavior

Reactivation restores the subscription to active status and re-enables paid features based on the current plan. Existing workspace data and configurations are used as-is. Reactivation does not require recreating the workspace.

## Account prerequisites

* Required Stripe account settings.
* Supported regions and currencies.

## Webhook setup

* Endpoint configuration and signing secrets.
* Event delivery and retry behavior.

## Event mapping

* StreamSuites features tied to Stripe events.
* Recommended testing in a sandbox mode.
