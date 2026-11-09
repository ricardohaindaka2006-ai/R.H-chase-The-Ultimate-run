# R.H-CHASE — Game Design Direction

## Core setting
- Year: 2040.
- Tone: grounded near-future adventure. Everyday life remains recognisable: modern cities, ordinary cars, contemporary fashion, familiar homes and believable infrastructure.
- Advanced technology is rare, experimental and story-driven. Avoid a world that feels excessively futuristic.
- Original characters, locations, storylines, music and visual assets.

## Three gameplay scales
1. **Quick-run / endless runner:** Subway Surfers and Temple Run-inspired lane running. Swipe left/right to change lanes, swipe up to jump, swipe down to slide. Collect coins, dodge traffic and obstacles, use ramps and power-ups, and chase high scores.
2. **Open-world free roam:** Explore connected districts and natural environments, drive vehicles, fly aircraft, run, surf, discover activities and replay unlocked content.
3. **Cinematic missions:** Larger authored levels with bespoke objectives, set pieces, boss encounters and changing camera/gameplay styles. The scale changes to suit the mission rather than forcing every activity into one format.

## Story premise
In 2040, an experimental energy technology called the Aether Core is developed to provide clean power and emergency-response capabilities. A private technology consortium called Meridian secretly diverts the project to create a controllable power system. The protagonist and a small group of allies uncover the plan, recover the scattered Core components and decide how the technology should be used. Keep the stakes human and grounded even when missions become spectacular.

## Story chapters and sample missions
### Chapter 1 — A City on Edge
- First Signal: investigate a blackout and escape a blocked city district.
- Rooftop Run: endless-runner chase across rooftops and construction sites.
- The Getaway: drive an ordinary car through city traffic while protecting an ally.
- Evidence Trail: explore on foot, question contacts and locate a hidden workshop.

### Chapter 2 — The Velocity Project
- Trial Run: complete a timed parkour course to test an experimental mobility system.
- Velocity Trials: earn the **Burst** ability, a short controlled super-speed dash.
- Tunnel Pursuit: use runner mechanics to escape through a transit tunnel.
- Free-roam reward: Burst becomes available outside missions, with cooldown and stamina limits.

### Chapter 3 — Above the City
- Skybreaker: infiltrate an aviation research facility and rescue its test pilot.
- First Flight: learn controlled powered gliding and short-burst flight using an experimental flight rig.
- High-Wire: navigate cranes and rooftops in a precision platforming mission.
- Free-roam reward: flight rig usable in open areas, with energy limits and safe landing requirements.

### Chapter 4 — The Titan Initiative
- Heavy Lifting: recover a prototype exoskeleton from a guarded depot.
- Titan Test: defeat a training mech using timing, dodges and environmental objects.
- Break the Line: protect civilians during a convoy ambush.
- Free-roam reward: enhanced strength for lifting objects, breaking selected barriers and close-range combat.

### Chapter 5 — Blue Horizon
- Coastline Run: surf a coastal route, avoiding rocks and navigating waves.
- Ocean Protocol: recover a lost data capsule beneath an offshore platform.
- Storm Warning: rescue stranded people during a severe storm.
- Free-roam reward: surfboard and water traversal challenges at designated coastlines.

### Chapter 6 — White Silence
- Northbound: drive through a snowstorm to reach an isolated research station.
- Whiteout: runner-style escape through collapsing ice tunnels.
- The Cold Lab: investigate Meridian's hidden Arctic facility.
- Reward: cold-weather gear, snow vehicle access and a deployable energy shield prototype.

### Chapter 7 — Beyond the Atmosphere
- Launch Window: prepare and defend a civilian research launch.
- Orbital Drift: pilot a spacecraft through debris in a focused 3D flight mission.
- The Silent Station: explore a damaged orbital research station and uncover Meridian's final plan.
- Keep space missions exceptional and plausible for the 2040 setting: experimental near-Earth missions, not routine interplanetary civilisation.

### Chapter 8 — The Aether Choice
- Citywide Emergency: coordinate allies across several districts.
- Meridian Showdown: multi-stage boss encounter combining driving, running, flight and power abilities.
- The Core Decision: choose how the Aether Core is secured and who oversees it.
- Epilogue: consequences reflected in the city and free-roam activities.

## Ultimate abilities and free-roam persistence
Abilities are earned by completing story milestones, not simply bought:
- Burst: short super-speed dash.
- Flight rig: controlled powered flight/gliding with energy management.
- Titan strength: lift heavy objects and break marked obstacles.
- Aegis shield: temporary protection with cooldown.
- Surf kit: surfboard and water-traversal skills.
- Utility scanner: reveal clues, hidden caches and mission traces.

Every earned ability must remain unlocked in free roam after its story mission. Add cooldowns, energy/stamina limits, clear tutorials and accessibility options so abilities are fun rather than overpowered. Story completion rewards may include outfits, vehicles, equipment, districts, challenges and replay modifiers.

## Mobile controls and orientation
- Portrait orientation for quick-run mode by default.
- Landscape orientation for open-world driving, flight and cinematic missions.
- Show an explicit, friendly prompt when a mission needs landscape: “Rotate your phone to play this mission.” Pause safely during rotation and preserve progress.
- Use touch controls: swipe lanes/jump/slide in runner mode; contextual virtual joystick and action buttons in open-world mode.
- Support keyboard/gamepad where available on web and desktop.
- Offer left-handed controls, adjustable sensitivity, button resizing, subtitles, colour-safe indicators, reduced motion and graphics presets.
- Never require device rotation without warning; provide a setting to lock preferred orientation where the platform permits.

## UX and accessibility
- Simple home screen: Continue, Story, Free Roam, Quick Run, Garage, Character, Rewards, Settings.
- Clear mission objectives, map markers, tutorials, checkpoint saves and pause/resume.
- Reward screen explains score, performance grade, XP, currency and unlocks.
- Monetisation must not sell story-required abilities or create pay-to-win advantages. Clearly label optional cosmetics and convenience items; no deceptive timers or accidental purchases.

## Visual direction
- High-quality, cinematic, realistic presentation with original art direction.
- Detailed but believable 2040 environments, expressive characters, natural lighting, weather, animation and vehicle handling.
- Scale visual quality to device capability; mobile performance and readability take priority over effects.
- 2D and 3D are both intentional tools: 2D for selected runner/challenge sequences and UI; 3D for open-world and cinematic missions.
- Use original assets and do not copy GTA, Subway Surfers or Temple Run characters, maps, branding, music or assets.

## Release requirements
A design document is not a completed or store-ready game. Before release, implement and test each mode, save systems, controller and touch input, orientation handling, performance, accessibility, privacy disclosures, age rating, crash reporting, store screenshots, icons, signing, and platform-specific builds. Android and iOS publication require developer accounts, store compliance review and signed production builds. Web deployment must be tested independently.


## Expanded hybrid mission catalogue — approved direction

### Mission-format rule
The game uses one persistent player identity, progression, inventory, map, and save. 2D and 3D are authored mission formats, not a global graphics toggle. Each mission selects the format that best serves its mechanics and narrative. A chapter may alternate between formats; transitions must be clearly staged, preserve objectives and rewards, and never reset the player's progress. Open-world free roam is primarily 3D; selected arcade, chase, puzzle, flashback and stylised challenge missions may be 2D.

### Endless runner and parkour playlist
Create an original endless-runner mode drawing on broad genre conventions from lane runners, temple escape games and collection runners. Do not reuse their protected characters, levels, music, branding, UI or assets.
- Three-lane and free-form parkour variants with swipe left/right, jump and slide; optional touch buttons and controller/keyboard input.
- Distinct routes: busy city transit corridors, rail yards, rooftops, jungle ruins, desert highways, forest trails, mine tunnels, construction sites and coastal boardwalks.
- Hazards: moving trains, road traffic, barriers, gaps, falling debris, branches, low beams, water hazards and collapsing structures, each with readable telegraphs and fair collision timing.
- Pickups: coins, gold, mission tokens and temporary power-ups such as magnet, shield and controlled boost. Clearly communicate duration and cooldown.
- Missions: distance targets, collectible routes, rescue chases, time trials, boss pursuits, daily/weekly challenges and friend score challenges.
- Difficulty scales gradually through speed, obstacle patterns and route complexity. Include checkpoints for authored levels, practice mode, accessibility assists and a fair restart flow.
- Results show distance, objectives, collected items, near misses, score multiplier, grade, XP and earned rewards. Leaderboards must validate scores server-side when online.

### Rural life, farming and timber
Add explorable farms and ranches to free roam and dedicated story/side missions:
- Buy, lease or inherit a farm; develop fields, barns, fences, sheds, water points and equipment.
- Care for cattle and other suitable livestock: feed, water, herd, shelter, transport and veterinary-care gameplay. Use welfare indicators and avoid rewarding neglect.
- Plant, irrigate, harvest and sell crops with seasonal/weather variation.
- Operate tractors, trailers, harvesters, utility vehicles and 4x4 pickups.
- Forestry missions use a sustainable permit/management mechanic: select marked trees, operate safe cutting equipment, process logs at a sawmill and transport timber. Replanting and habitat protection affect reputation and rewards.
- Farm missions include animal rescue, broken-fence repair, supply delivery, harvest deadlines, equipment recovery and rural emergencies.

### Business ownership and personal-life simulation
- Players can establish and operate businesses such as garages, dealerships, restaurants, shops, construction, logistics, property, farms and timber operations.
- Business loops include setup costs, staffing, stock/supplies, maintenance, customer demand, revenue, expenses, upgrades and optional management missions. Show understandable ledgers and prevent passive income from replacing gameplay.
- Homes, friendships, romance/relationships and family activities are optional role-play systems with consent-respecting dialogue choices and age-appropriate presentation.
- In-world phone supports contacts, calls, texts, calendar, map, business dashboard and mission invitations. Players can accept, decline or defer calls; never interrupt critical controls or force a mission without consent.
- Personal and business events can generate contextual side missions. Save relationship/business state across sessions.

### Islands, boats and marine missions
- Add navigable coastlines, ports, marinas and island destinations connected by boat, ferry or aircraft travel.
- Watercraft classes include small boats, speedboats, fishing boats and larger leisure craft, each with distinct acceleration, turning, buoyancy, wake, fuel and damage behavior.
- Mission types include island supply runs, navigation trials, fishing, marine rescue, storm response, cargo transport, coastal exploration, underwater survey and shipwreck discovery.
- Underwater spaces require readable oxygen/air limits, visibility, buoyancy, safe wildlife interactions and clear return routes.
- Island properties and businesses (such as marinas or resorts) are later progression options, not assumed to be available in the first release.

### Online mode
- Separate online free-roam sessions, co-op story/activities, competitive runner leaderboards, races, community events and private friend sessions.
- Use server-authoritative accounts, progression, inventory, currency, purchases, matchmaking and score validation. Client prediction may smooth movement but must not decide valuable outcomes.
- Add parties/invites, presence, reconnect, latency indicators, block/report/mute, moderation tools, chat safety controls and privacy settings.
- Never expose private account data. Protect admin functions with server-side role checks and audit logs. Provide a solo/offline path where feasible.
- Launch online only after load, abuse, reconnect, persistence, anti-cheat and moderation tests pass.

### Mobile scope and release packaging
- Aim for an initial install below 100 MB only as a measured release target, not a guarantee. Keep the core shell and first playable region lean; stream or separately download optional environment/audio/texture packs with clear sizes and Wi-Fi controls.
- A complete photorealistic AAA-scale world cannot fit inside a 100 MB package. Use scalable assets, LODs, texture/audio compression, occlusion culling and device graphics presets; test actual signed Android/iOS packages.
- Build Android and iOS packages, signing, store metadata, privacy disclosures, age ratings, screenshots, icons and review submissions as separate release tasks. Store publication requires the owner's developer accounts and approval; do not claim published until each store confirms it.
- The current browser runner prototype is not equivalent to the complete 2D/3D open-world, farming, life-simulation or online product. Mark features implemented only after code exists and automated/manual tests demonstrate them.
