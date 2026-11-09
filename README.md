# R.H-CHASE — The Ultimate Adventure

A mobile-friendly browser prototype for a grounded, cinematic 2024 open-world adventure beginning in Namibia, with a grounded lunar expedition chapter.

## Current build status
- Updated story direction: believable 2024, Namibia-led setting, realistic everyday technology, with restrained mystery/fantasy elements.
- Browser prototype: lightweight 2D playable runner, story chapters, vehicle/wardrobe progression, settings, local save and PWA shell.
- Regional preferences: detects a likely country from device locale and allows manual country selection. Currency code is a display preview only.
- Payments: **not enabled**. No real-money checkout, paid entitlements, cloud accounts or server-side purchases exist in this prototype.
- Visual fidelity: this is not a GTA-scale 3D game. The current browser canvas is simple 2D artwork; photorealistic 3D requires a dedicated Unreal Engine/Unity production, art assets, animation, audio and device QA.
- Storage: keep the initial native install under 100 MB as a production target, not a verified measurement of this repository. Stream/download optional world, language, vehicle and cosmetic packs only when selected/unlocked.

## Regional pricing and payments
For production, use Google Play Billing for Android and StoreKit / Apple In-App Purchase for iOS. Configure product IDs and storefront availability in each store. Let the store return its localized price, currency, taxes and payment options; do not use a manually calculated FX conversion as the purchase price. Validate receipts/tokens on the backend and grant entitlements server-side. The current country/currency selector is informational only and cannot charge users.

## Downloadable content plan
- Android: publish an Android App Bundle and use Play Asset Delivery (install-time for essential starter content; on-demand/fast-follow for optional world and cosmetic packs).
- iOS: use the current Apple-supported Background Assets / on-demand delivery approach for optional content, and App Thinning. Apple's older On-Demand Resources API is deprecated on iOS 27 and later.
- Web: serve versioned, compressed asset packs from a CDN; download only after explicit selection/unlock, show progress, verify hashes, and support pause/resume/retry/delete.
- Keep save data and purchased entitlements separate from downloaded asset files. Deleting a pack must never delete an entitlement.

## Run locally
- Node.js 18+
- `npm install`
- `npm start`
- Open `http://localhost:3000`

## Deploy
Render Node web service:
- Build: `npm install`
- Start: `npm start`
- Health endpoint: `/health`

## Store launch requirements
The repository currently contains a web app, not signed Android AAB or iOS IPA builds. Store launch still requires a native game client, signing certificates, store developer accounts, privacy disclosures, age rating, store assets, tested in-app purchase flows, production backend, device compatibility testing and review approval.
