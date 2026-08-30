# 🤖 Waypoint AV Operations Hub — AI Assistant Instructions & Maintenance Rules

This guide provides explicit instructions, architectural constraints, and operational rules for future AI coding agents working on this codebase.

---

## 1. Core Principles

1. **Protect `1NormalSunday` Above All Else:**
   - Never write code or documentation that suggests overwriting `1NormalSunday`.
   - Always emphasize saving custom show files as `[Date].show` in `MMC ➔ Other Folder`.
2. **Zero External Runtime Dependencies:**
   - This app must function **100% offline** inside a church sound booth.
   - Do NOT add CDN scripts (e.g. unpkg, cdnjs, Google Fonts) that break when the venue has no internet.
   - Use local vanilla ES6+ JS and CSS custom properties.
3. **Data-Driven Architecture:**
   - All physical hardware numbers, breaker numbers, stage boxes, fader channels, and scenarios belong in `data.js`.
   - `index.html` holds the DOM skeleton and static layout structure.
   - `app.js` renders dynamic content and manages user events.
   - `styles.css` contains all design tokens and layout rules.

---

## 2. Decision Criteria: Single-Item vs. Multi-Phase Scenarios

When adding or updating troubleshooting scenarios in `AV_DATA.troubleshootingScenarios`:

### ✅ Use a Single-Item Guide (`phases.length === 1`) when:
- The fix is a direct physical action (e.g. Under-desk button toggle, power cycling the Venue Live 360 box, swapping batteries).
- The procedure is a standard 3–5 step console menu routine (e.g. Loading Sunday show file, soft-patching click track, running Mixing Station Backup Search).
- Splitting the steps across multiple wizard screens would slow down a volunteer during a live service disruption.

### ✅ Use a Multi-Phase Wizard (`phases.length === 2 or 3`) when:
- The issue has progressive tiers of diagnostics (e.g. Try quick fix A first ➔ if that fails, inspect physical cables B ➔ if that fails, configure software C).
- Examples:
  - `sanctuary-tvs`: Phase 1 (Ceiling Splitter 90% fix) ➔ Phase 2 (Mac Connections) ➔ Phase 3 (Proclaim / TV Remote HDMI 1).
  - `wireless-mic-issues`: Phase 1 (Rechargeable AAs) ➔ Phase 2 (Color Match to Rack Box) ➔ Phase 3 (Layer B Fader & Un-mute).
  - `aviom-dead-station`: Phase 1 (Headphone Extender Bypass) ➔ Phase 2 (Stage-Left Switch) ➔ Phase 3 (Console Mix Sends & Preamp Gain).

---

## 3. Maintenance Checklist for Any Code Modification

Whenever you modify any code in this repository:

1. **Update `CACHE_NAME` in `sw.js`:**
   - Increment the semantic version (e.g. `const CACHE_NAME = 'waypoint-av-v2.5.0';`).
   - If you do not bump `CACHE_NAME`, volunteer browsers will serve stale cached code!
2. **Validate JavaScript Syntax:**
   - Run the syntax check command:
     ```bash
     node -c data.js && node -c app.js && node -c sw.js
     ```
   - Ensure all files exit with code `0`.
3. **Update Global Search Index (`getSearchIndex` in `app.js`):**
   - If adding new equipment, hardware models, or room keywords, ensure they are indexed so the Quick Search modal (`Cmd+K` / Search icon) returns them immediately.
4. **Preserve High-Contrast Dark Mode & Print Styles:**
   - All colors must adhere to CSS custom properties (`var(--bg-primary)`, `var(--accent-blue)`, `var(--text-primary)`).
   - Ensure printable elements have appropriate `@media print` rules and use `.no-print` on screen-only navigation.
