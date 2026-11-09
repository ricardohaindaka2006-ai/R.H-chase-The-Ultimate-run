# R.H-CHASE payment integration — safe staging plan

## Current state

**Payments are deliberately disabled in the application.** The server exposes:
- `GET /api/payments/status` — reports disabled state
- `POST /api/payments/checkout` — returns HTTP 503
- `POST /api/payments/manual` — returns HTTP 503

No payment credentials, bank account number, phone number, card details, or OTPs are stored in this repository. No purchase can unlock premium content.

## Merchant onboarding required

1. Confirm with FNB Namibia Merchant Services whether a personal Future Forward account can receive settlements for a game merchant, or whether a business account is required.
2. Apply with the chosen authorised payment provider and confirm fees, settlement timing, refunds/chargebacks, merchant identity requirements, and whether subscriptions are supported.
3. Obtain written confirmation of a genuine sandbox/test environment. Do not use PayToday's documented live environment for test transactions: its current integration guide warns that test activity can incur real charges.
4. Keep provider credentials in Render secret environment variables only. Never place private keys in browser JavaScript, Git, logs, or this document.

## Required production architecture

- Server creates a unique order and payment intent using a provider adapter.
- Browser is redirected to provider-hosted checkout; the game never handles raw card numbers or CVVs.
- Server verifies the provider's signed webhook or queries the provider's authenticated transaction-status endpoint. A browser return URL or screenshot is not proof of payment.
- Verify order reference, amount, currency (NAD), merchant account, final paid status, and provider transaction ID.
- Process webhook events idempotently; duplicate callbacks must not grant duplicate entitlements.
- Persist orders, payment events, entitlement grants, refunds, and reconciliation records in a durable database.
- Manual transfer orders remain pending until independently reconciled against the bank/provider transaction record. Never grant an item from a customer screenshot alone.
- Add customer consent, terms, refund/cancellation policy, support contact, and audit logging before launch.

## Go-live gate

Do not change the hard-coded `PAYMENTS_ENABLED = false` until the owner separately approves go-live after:
- merchant account approval and settlement destination confirmation;
- provider test credentials and successful sandbox/UAT;
- signed webhook/status verification and replay/idempotency tests;
- refund, cancellation, failure, duplicate-payment, and reconciliation tests;
- durable database and backup plan;
- production credentials entered directly in Render's secure environment-variable interface;
- final written owner approval.

## Contact details

Customer contact details should be configured only after confirming the merchant's public support contact. Do not expose private banking details as customer-facing payment instructions.
