# R.H-CHASE — Admin, Namibia World, Online Travel & Visual Production Specification

## 1. Owner / administrator mode
The game owner account must receive a server-authoritative administrator role after successful authentication. Admin access is separate from ordinary player progression.

Admin entitlements:
- All premium packages and cosmetic collections unlocked.
- All characters, outfits, vehicles, aircraft, boats, jet skis, equipment, powers and upgrades unlocked.
- No purchase prompts, paywalls, premium currency requirements or payment deductions for the authenticated administrator.
- Access to all story chapters and mission replay tools for testing.
- Access to all free-roam destinations, online social spaces and test environments.
- Ability to preview unreleased content and switch test flags where authorized.
- Full admin dashboard for player support, moderation, economy configuration, mission/event configuration, announcements, content publishing and operational status.

Security requirements:
- Never implement admin mode as a client-side email check, hidden URL, localStorage flag or editable browser variable.
- Assign admin role only on the server after secure authentication and authorization.
- Store password hashes and secrets securely; use environment variables/secret manager. Never commit credentials or expose them in frontend bundles.
- Use MFA for owner/admin access, secure sessions, rate limiting, CSRF protections where applicable, and session revocation.
- Keep an audit log of sensitive admin actions with timestamp, actor, action and outcome.
- Use least-privilege roles for staff; reserve full owner privileges for the owner.
- Admin bypass applies only to in-game purchases and entitlements. It must not bypass platform fees, third-party costs or legal requirements.
- Provide a safe recovery process and never display passwords in the admin dashboard.

## 2. Namibia as the heart of the world
Create an original, fictionalized playable map inspired by Namibia's landscapes, architecture, climate and everyday life. Use respectful visual research and original assets; do not reproduce private homes or imply exact real-world property locations.

### Windhoek — central hub
- Modern city centre, recognizable hilly skyline, business district, residential neighbourhoods, markets, shopping areas and road networks.
- A central player hub with garage, safehouse, shops, mission board, airport access and social meeting places.
- Mix contemporary buildings, local street life, taxis, buses, pedestrians, road signs, vegetation and realistic Namibian light.
- Include surrounding hills and viewpoints for driving, running and flight activities.

### Swakopmund and the coast
- Coastal town atmosphere, German-colonial-era inspired architecture represented thoughtfully, beachfront, dunes, foggy mornings, ocean promenades and watersports.
- Surfing, jet-ski races, boat missions, rescue missions and dune exploration.
- Make coastal lighting, sea spray, wind and fog visually distinctive.

### Walvis Bay
- Working harbour, container port, waterfront, salt works-inspired scenery, lagoon and coastal roads.
- Boat handling, cargo delivery, rescue missions, wildlife observation activities and port investigations.
- Include appropriate environmental care and wildlife-safe gameplay.

### Other Namibian regions
- Namib Desert and Sossusvlei-inspired red dunes, gravel roads and dramatic desert skies.
- Etosha-inspired wildlife landscapes and conservation missions; do not encourage harming wildlife.
- Damaraland-inspired rocky terrain and remote settlements.
- Northern Namibia-inspired green landscapes, rivers and villages.
- Each region should have distinct vegetation, weather, architecture, road surfaces, ambient audio and mission types.

## 3. International travel and online world
Build a connected world map and travel system that can expand over time:
- Namibia is the main home region and narrative anchor.
- International destinations can include Dubai, locations in the United States, and South Africa (including Cape Town and Johannesburg).
- Add further destinations through future content updates.
- Travel should feel like a journey: airports, flights, arrival scenes, luggage/vehicle transport where appropriate, destination introductions and local activities.
- Online players can meet friends, visit public social spaces, join co-op activities, take holidays, explore, race, take photos and participate in events.
- Make clear which destinations are currently playable, in development or planned. Do not present unavailable areas as finished.
- Use original fictional districts inspired by real places; avoid copying real-world trademarks or exact private locations.

Online requirements:
- Server-authoritative multiplayer state, matchmaking/party system, player presence, invitations, block/report tools and moderation.
- Secure account and cloud-save systems, reconnect handling and clear network status.
- Separate public, friends-only and private sessions.
- Protect minors and user privacy with appropriate safety settings and moderation.
- Plan infrastructure and operating costs before promising a massive seamless globe. Release a polished set of connected regions first, then expand.

## 4. Vehicles and interaction
Create individually designed, detailed and controllable:
- Cars, off-road vehicles, buses and motorcycles.
- Aeroplanes and helicopters.
- Boats and jet skis.
- Snow vehicles for cold-weather missions.
- Experimental but plausible 2040 powered flight equipment.

Each vehicle needs a distinct handling profile, acceleration, braking, steering, traction, suspension or buoyancy, camera behavior, audio, damage feedback, entry/exit animation and control tutorial. Vehicle classes should not all handle identically. Include garage customization, paint, wheels, upgrades and repair. Avoid licensed real-world branding unless permission is obtained.

## 5. Visual quality bar
The visual direction is premium, cinematic and varied, while remaining performant on mobile:
- Namibia: warm desert sunsets, long shadows, dust, red dunes, rocky mountains, city lights and realistic vegetation.
- Underwater: clear-to-turbid water variation, volumetric light shafts, caustics, suspended particles, coral/rock detail, believable buoyancy, bubbles, marine life and readable navigation.
- Snow: layered snow, footprints, blowing powder, frost, ice reflections, blizzards, aurora where geographically appropriate and warm interior lighting.
- Towns and interiors: coherent architecture, lived-in rooms, believable furniture, signage, materials, local details and varied lighting.
- Driving: detailed road surfaces, reflections, dust, rain, tire behavior, vehicle interiors and convincing camera motion.
- Aircraft and boats: accurate silhouettes, readable cockpits, water/air effects, propeller/rotor motion and distinct audio.
- Characters: original silhouettes, expressive faces, believable body proportions, varied clothing, animation blending, facial animation and inclusive character options.
- Missions: bespoke landmarks, visual storytelling, distinct color/light identities and cinematic transitions.
- Use original art, sound and designs. Do not copy the protected assets, maps, characters or branding of other games.

Quality process:
- Establish art direction sheets and reference boards for every region, character class, vehicle class and mission.
- Build modular environment kits and reusable props without making every location look identical.
- Use level-of-detail, occlusion culling, texture streaming, baked lighting where appropriate, scalable shadows and effects.
- Provide low, medium and high graphics settings, frame-rate options and battery-conscious mobile defaults.
- Test on real lower- and mid-range Android/iOS devices as well as high-end devices and desktop browsers.

## 6. Friendly controls and accessibility
- Context-sensitive control layouts for running, driving, flying, swimming/surfing, boats and walking.
- Runner: swipe left/right to change lanes, swipe up to jump, swipe down to slide; optional on-screen buttons.
- Open world: virtual movement stick, camera/look control, interact, sprint, jump, crouch, attack/defend and context action.
- Driving: steering wheel or left/right controls, accelerator, brake/reverse, handbrake, horn, camera and exit/enter.
- Aircraft: throttle, pitch, roll, yaw, landing gear and camera, with simplified assisted mode.
- Watercraft: steering, throttle, reverse/brake and dismount.
- Flight suit/powers: ascend, descend, boost, hover and land, with energy indicator and safe-landing guidance.
- Offer customizable layouts, sensitivity, left-handed mode, button size, haptic settings, subtitles, remappable keyboard/gamepad controls and tutorials.
- Prompt players to rotate the phone before landscape-only missions. Pause safely during orientation changes and preserve progress. Runner mode may default to portrait; open-world and vehicle modes should use landscape where supported.
- Do not make essential controls too small or hide them under UI overlays.

## 7. Admin testing and release gates
- Admin can launch any mission, teleport to a region, spawn a vehicle, grant an ability and preview premium content in a controlled test environment.
- Clearly distinguish test actions from live player data; require confirmation for destructive economy or moderation actions.
- Before calling the game complete, verify authentication, admin authorization, entitlements, purchase flows, save persistence, multiplayer safety, touch controls, orientation changes, device performance, crash recovery and store compliance.
- Ship a polished vertical slice before attempting a fully global open world. Prioritize Windhoek, a coastal region and one natural environment; then expand region by region.
- A design specification is not itself an implemented feature. Each item must be built, tested and demonstrated before being marked complete.
