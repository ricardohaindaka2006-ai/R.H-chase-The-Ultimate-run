# R.H-CHASE — Globe Map, Travel Tokens & Unified World Economy

## Whole-world globe map
The world map must show the entire Earth as a navigable globe, not only a flat regional minimap. Use a globe view with a smooth transition into regional maps and playable locations.

Map behavior:
- Show the player's current country, region, city/district and a clear “YOU ARE HERE” marker.
- Display a readable player position marker with heading/direction, and distinguish current position from selected destination.
- Allow rotate, zoom in/out, pan, search and select destination.
- Show continents, oceans, country borders where appropriate, major cities, airports, ports and unlocked game regions.
- Use different visual states for discovered, unlocked, locked, mission-required, event-only and planned destinations.
- Show travel route, estimated in-game travel duration, transport options and any mission requirements.
- Add filters for story missions, side missions, races, shops, garages, safehouses, friends, events, collectibles and services.
- Provide accessible list/search alternatives to globe navigation, high-contrast markers, readable labels and a “return to current location” control.
- Keep player position privacy-conscious in multiplayer: public map location is approximate or session-controlled; never expose real-world GPS location.
- The globe is an in-game fictional world map. It must not track the player's real physical location unless a separate, explicit opt-in location feature is designed and approved.

## Destination regions
Namibia is the starting homeland and central story hub. Build a globe-wide destination framework with playable regions introduced in releases:
- Namibia: Windhoek, Swakopmund, Walvis Bay, desert, northern river regions and other original fictionalized areas.
- South Africa: original playable interpretations of Cape Town, Johannesburg and surrounding environments.
- United Arab Emirates: a Dubai-inspired modern city district.
- United States: multiple distinct city and natural-region destinations.
- Future regions across Africa, Europe, Asia, the Americas and Oceania as content packs.

Use original fictional districts inspired by real places. Clearly label destinations as playable, locked, coming soon or event-limited. Do not imply the entire real world is already built.

## Travel and limited teleportation
Normal travel is done through in-world transport and travel sequences:
- Cars, buses, motorcycles, aircraft, helicopters, boats and ferries where suitable.
- Airports and ports act as travel hubs, with departure/arrival scenes and destination discovery.
- Fast travel can be unlocked for destinations already visited, subject to mission and story rules.

Teleportation tokens:
- Rare, limited-use reward items earned from story chapters, difficult missions, achievements, seasonal events and hidden treasure challenges.
- Each token grants one teleport to an eligible discovered destination or activated travel beacon.
- No teleport to locked, mission-incompatible or restricted areas.
- Display token balance clearly; show confirmation and destination before consuming a token.
- Warn players when a token is about to be spent; never consume one from an accidental tap.
- Add optional cooldowns or destination restrictions for balance.
- Allow admin/test accounts to grant tokens through audited server-side tools.
- Avoid pay-to-win pressure: tokens should primarily be earned through gameplay and should not be required to finish the main story.

## Unified gameplay ecosystem
The runner, cinematic missions and open world share one persistent player profile and world state:
- A mission can begin as an open-world activity, transition into a cinematic set piece, then switch to runner gameplay for a chase.
- Story completion unlocks abilities, vehicles, locations, contacts, collectibles and equipment that remain available in free roam.
- Quick-run challenges use the same character, outfit, earned cosmetics and selected power loadout where suitable.
- Rewards, mission progress, discovered destinations and inventory persist across modes and supported devices through secure cloud saves.
- Keep camera, control and UI transitions smooth and teach the player before a mode changes.

## Currency, collectibles and rewards
Use a clear multi-currency system:
- **Dollars ($):** main in-game cash for ordinary purchases, garages, repairs, upgrades and services. Clearly distinguish in-game dollars from real money and show the currency label.
- **Coins:** earned through runner routes, daily challenges, races and exploration; used for selected cosmetics and low-tier upgrades.
- **Treasures:** rare collectible artifacts and caches found in missions and hidden locations; used for special collections, lore, unique cosmetics and selected unlocks.
- **Teleport tokens:** rare travel consumables; never confuse them with ordinary coins.
- **XP and reputation:** progression measures, not spendable currency.

Economy rules:
- Display balances consistently in the HUD, map, garage, shop and reward screen.
- Every purchase confirmation must show item, amount, currency, remaining balance and whether it is real-money or in-game currency.
- Reward screens show exact earned amounts and a breakdown by mission performance.
- Prevent negative balances, duplicate claims, client-side currency edits and replay exploits with server-authoritative transactions.
- Admin owner entitlement grants access to premium content without payment, but should not create an insecure client-side bypass.
- Never use real-world dollar symbols for an actual cash payment without clear disclosure that the value is virtual in-game currency.

## Realism and immersion
- A believable globe-to-city map transition with consistent geography and travel context.
- Distinct weather, time of day, terrain, architecture, traffic and ambient sound in each region.
- Respectful representation of local culture and environments, especially Namibia.
- Vehicles and travel methods must match their environment and mission context.
- The whole system must remain easy to understand: clear icons, short labels, guided onboarding, map legend, contextual hints and accessible settings.

## Delivery and quality gates
The full globe, every country and every travel system cannot be represented as complete until the relevant world regions, server systems, art, mission content and travel logic have actually been implemented and tested. Release in polished regional expansions:
1. Namibia globe/map hub and initial playable regions.
2. South Africa and regional travel.
3. Dubai-inspired destination.
4. First US destination.
5. Further world regions in subsequent tested updates.

Test globe interaction on touch devices, map performance, player marker accuracy within the fictional game world, accessibility, token spending/rollback, travel transitions, cloud-save consistency and multiplayer privacy before release.
