# 🎛️ Waypoint Church Sound Booth Operations & Troubleshooting Hub

An offline-first, high-performance Progressive Web App (PWA) designed for church sound booth volunteers, worship leaders, and audio/video engineers. Built with vanilla JavaScript, CSS3 design tokens, and offline service worker caching to ensure 100% reliability during Sunday services and rehearsals even during complete network outages.

---

## 🌟 Overview & Purpose

The **Waypoint Church Sound Booth Operations Hub** provides immediate, high-contrast, step-by-step assistance for all technical systems in the sanctuary:
- **Volunteer Quick-Fix Center:** Rapid triage for common disruptions (mic feedback, black TV screens, silent sanctuary speakers, frozen lyric slides, dropped camera feeds).
- **Audio Tech Hub:** Interactive stage box patch maps (Inputs 1–20), Soundcraft Si Impact fader layer cheat sheets, Aviom in-ear monitoring matrix, and Saturday line check / rehearsal protocols.
- **Livestream & Presentation Hub:** YouTube Studio broadcast workflow, ATEM Mini switcher controls, Proclaim slide presentation recovery, stage confidence monitor toggles, and 6-button lighting scene presets.
- **Embrace Group Hub:** Assistive listening (Williams AV / WaveCAST Wi-Fi setup), OBS Cloud Closed Captions (Google Cloud Speech API), and Embrace Conference Room TV extender troubleshooting.
- **Electrical & Hardware Power Directory:** Complete circuit directory and reset guide for Gray Electrical Panel S (Breakers 4 & 6 for stage pockets, Breaker 9 for booth lights, Breaker 11 for TVs, Breakers 29–30 for subwoofers).
- **Engineering Tools:** Interactive stage audio frequency spectrum analyzer, real-time tone generator, and acoustic room delay / decibel SPL calculators.

---

## 🚀 Quick Start & Local Development

No heavy build steps or npm compilation required—this project is pure modern ES6+ vanilla web technology!

### Run Locally with Python:
```bash
# Start a local HTTP server on port 8085
python3 -m http.server 8085
```
Open **[http://localhost:8085](http://localhost:8085)** in Google Chrome, Safari, or Microsoft Edge.

### Run with Docker:
```bash
docker compose up --build
```

---

## 📱 PWA & Offline Installation

This web app is built with a Service Worker (`sw.js`) and Web App Manifest (`manifest.json`):
1. Open the site on an iPhone (Safari) or Android (Chrome).
2. Tap **Share ➔ Add to Home Screen** (iOS) or **Install App** (Android).
3. The app installs as a standalone fullscreen app and caches all assets locally for instant, offline sound booth use.

---

## 🏗️ Architecture & Core Files

| File | Responsibility |
| :--- | :--- |
| **`index.html`** | Semantic Single-Page Application (SPA) structure, accessibility landmarks, tab panels, and modal containers. |
| **`data.js`** | **Single Source of Truth (`AV_DATA`)**: Stage box hardware specs, console layers, troubleshooting scenarios, electrical panels, lighting levels, and pre-service checklists. |
| **`app.js`** | Interactive engine: tab routing (`switchTab`), search indexing (`getSearchIndex`), dynamic wizard rendering (`renderWizard`), Web Audio tone generation, and event listeners. |
| **`styles.css`** | CSS3 custom properties (`--bg-primary`, `--accent-blue`, etc.), responsive flex/grid layouts, dark mode UI, and high-contrast `@media print` stylesheets. |
| **`sw.js`** | Service Worker handling precaching and cache-first offline delivery. |
| **`ARCHITECTURE.md`** | Comprehensive technical deep dive for AI assistants and software engineers. |
| **`HARDWARE_MAP.md`** | Detailed physical hardware directory, port mappings, and booth wiring layout. |

---

## 🛠️ Verification & Quality Checks

Before committing changes, validate JavaScript syntax across all core files:
```bash
node -c data.js && node -c app.js && node -c sw.js
```

---

## 📜 Golden Rules for Maintainers & AI

1. **Protect `1NormalSunday`:** Never recommend saving over or overwriting the `1NormalSunday` show file on the Soundcraft console. Always save custom mixes under a separate dated file name (e.g. `MM.DD.YYYY.show`).
2. **Offline-First Integrity:** Do not introduce external CDN dependencies that break offline booth operation. Keep scripts and styles local.
3. **Cache Bumping:** Whenever modifying `data.js`, `app.js`, `index.html`, or `styles.css`, always bump `CACHE_NAME` in `sw.js` (e.g. `waypoint-av-v2.5.0`).
4. **Single-Item vs. Multi-Phase Scenarios:**
   - **Single-Item:** Use for direct, self-contained quick fixes (e.g. Under-desk confidence monitor button, Venue Live 360 power cycle, Click track soft-patching).
   - **Multi-Phase:** Use for graduated diagnostic flows where volunteers need step-by-step guidance from most common fix to deep troubleshooting (e.g. Black sanctuary TVs, dead wireless mic, dead Aviom station).
