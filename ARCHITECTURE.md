# 🏛️ Waypoint AV Operations Hub — Architecture & System Design

This document details the architectural design, state flow, data patterns, and engineering decisions of the Waypoint Church AV Operations Hub for future developers and AI programming agents.

---

## 1. Architectural Philosophy: Why a Single-Page Offline PWA?

A critical question in the design of this system is: **"Does this application need to be one page or several separate pages?"**

### The Tradeoff Analysis:

| Architectural Pattern | Suitability for Sanctuary Tech Operations | Evaluation |
| :--- | :--- | :--- |
| **Multi-Page App (MPA)**<br>*(Separate `.html` files for `/audio.html`, `/video.html`, `/troubleshoot.html`)* | ❌ **High Risk in Booth Environment** | • **Offline Failure Risk:** In a sanctuary where Wi-Fi drops or is congested, navigating to a new page can fail with a browser network error if uncached.<br>• **State Loss:** If a volunteer is halfway through an Aviom diagnostic or a Saturday line check, clicking over to check an electrical breaker resets their progress.<br>• **Search Latency:** Full-site search across all hardware databases requires multiple page roundtrips or complex preloading.<br>• **Web Audio Tone Generator:** Page changes destroy the HTML5 `AudioContext` and kill active audio test frequencies. |
| **Single-Page Progressive Web App (SPA + PWA)**<br>*(Single cached entry point with tabbed navigation)* | ✅ **Optimal for Sanctuary Operations** | • **100% Offline Reliability:** Once cached via `sw.js`, all 6 operational hubs, 21 troubleshooting scenarios, and 5 stage calculators work with zero network connection.<br>• **Zero-Latency Navigation:** Switching between Audio, Livestream, Rehearsal, and Electrical panels is instantaneous (DOM class toggling).<br>• **Persistent State:** Live timer, checklist selections, search query cache, and audio generator state remain active across tab switches.<br>• **GitHub Pages Simplicity:** Zero server routing configuration needed. |

**Conclusion:** The application **must remain a Single-Page Application (SPA) with offline PWA caching**, but with modular, data-driven separation between data structures (`data.js`), rendering logic (`app.js`), and styling (`styles.css`).

---

## 2. Separation of Concerns & Codebase Map

```
Waypoint_Troubleshooting/
├── index.html          # Semantic DOM skeleton, navigation header, tab containers, modals
├── data.js             # Data Layer: Single Source of Truth (`AV_DATA`)
├── app.js              # Controller & Presentation Layer: State, Event Handlers, Dynamic DOM
├── styles.css          # Visual Layer: Design tokens, CSS Grid, Dark Mode, Print Styles
├── sw.js               # Network Layer: Service Worker caching & offline strategy
├── manifest.json       # PWA Configuration: Standalone app meta, icons, display mode
├── README.md           # Project Overview & Quick Start
├── ARCHITECTURE.md     # Architecture & Engineering Guide (This document)
├── HARDWARE_MAP.md     # Church Hardware Directory & Wiring Reference
└── AI_GUIDELINES.md    # Instructions & Decision Rules for AI Assistants
```

---

## 3. Data-Driven Architecture (`data.js`)

All sanctuary hardware, stage floor boxes, mixer fader assignments, electrical breaker maps, and troubleshooting scenarios are decoupled from the HTML markup and stored in `AV_DATA`:

```javascript
window.AV_DATA = {
  stageBoxes: { ... },             // Physical stage floor pockets (Inputs 1–23)
  soundboardChannels: [ ... ],     // Si Impact digital soft patches, Fader Layers A/B/C/D
  aviomMixBuses: [ ... ],          // Aviom in-ear monitor mix buses (Mix 1–11)
  troubleshootingScenarios: [ ... ],// 21 Interactive troubleshooting guides
  patchingProcedures: { ... },     // Rehearsal, iPad playback & soft-patch routines
  electricalPanels: { ... },       // Panel S & Lighting breaker directories
  preServiceChecklist: [ ... ],    // Sunday readiness checklist
  livestreamSetup: { ... }         // YouTube Studio, ATEM switcher, 6 lighting scenes
};
```

### Data Modeling Guidelines:
1. **Never Hardcode Hardware Specs in `index.html`:** Always define hardware names, channel numbers, breaker assignments, and colors in `data.js`.
2. **Troubleshooting Scenarios (`troubleshootingScenarios`):**
   - **`id`:** Unique kebab-case slug (e.g. `sanctuary-speakers-quiet`).
   - **`title` / `icon` / `category` / `severity`:** Metadata used for card rendering and filter chips.
   - **`phases` Array:** Contains 1 or more phase objects.
     - *Single-Item Guides:* 1 phase with concise, numbered action steps.
     - *Multi-Phase Wizards:* 2–3 graduated diagnostic phases from common quick-fix to deep inspection.

---

## 4. State Management & Lifecycle (`app.js`)

Application state is managed in a single, predictable `state` object inside the `DOMContentLoaded` closure:

```javascript
const state = {
  activeTab: 'volunteer-hub',      // Current primary navigation tab
  activeAudioSubTab: 'audiosub-stage', // Sub-tab within Audio Hub
  activeLiveSubTab: 'livesub-setup',   // Sub-tab within Livestream Hub
  activeScenarioId: 'sanctuary-tvs',   // Currently loaded troubleshooting scenario
  scenarioStepIndex: 0,                // Active phase index (0-based)
  scenarioResolved: false,             // Resolution state for celebratory card
  checklistState: {},                  // Persistent completed checklist items
  toneGen: { ... },                    // Web Audio oscillator state
  searchQuery: ''                      // Live search input
};
```

### Key Controller Functions:
- **`switchTab(tabId)`:** Controls top-level navigation, updates aria-selected attributes, toggles `.active` classes on tab buttons and panes.
- **`selectScenario(scenarioId)`:** Loads the specified scenario into the wizard canvas, resets step index to 0, and smoothly scrolls to `#wizardCanvas`.
- **`renderWizard()`:** Dynamically builds the interactive wizard DOM from `AV_DATA.troubleshootingScenarios`:
  - Renders single-item scenarios with the `⚡ Quick-Fix Guide` badge and `✓ Yes, It Worked!` resolution button.
  - Renders multi-phase scenarios with step dots, previous/next phase buttons, and print formatting.
- **`getSearchIndex()`:** Aggregates searchable keywords across all stage boxes, fader channels, electrical breakers, and troubleshooting scenarios for instant `<1ms` modal filtering.

---

## 5. Offline PWA Strategy (`sw.js`)

- **Cache Strategy:** **Cache-First for Precached Assets**, with Network Fallback.
- **Precached Bundle:**
  - `./`
  - `./index.html`
  - `./styles.css`
  - `./app.js`
  - `./data.js`
  - `./manifest.json`
  - `./favicon.svg`
  - `./icon-192.png`
  - `./icon-512.png`
  - `./qrcode.min.js`
- **Cache Invalidation:** The cache is versioned with `const CACHE_NAME = 'waypoint-av-vX.Y.Z'`. When `sw.js` detects a new cache version during `activate`, all previous cache buckets are purged automatically.

---

## 6. Print Architecture (`@media print`)

The application includes customized print styles in `styles.css`:
- Screen chrome, navigation bars, tab buttons, and interactive sliders are automatically hidden via `.no-print`.
- Scenarios feature a dedicated `.wizard-print-all-phases` container that formats all phases into a clean, black-and-white, high-contrast printout for clipboards in the sound booth.
