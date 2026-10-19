# 🎛️ Sanctuary AV Controller — Master Architecture, Telemetry & Multi-Station Guide

This document provides a comprehensive technical and operational reference for the **Sanctuary AV Controller** (`AV_Controller`), the unified Node.js real-time A/V telemetry watchdog, camera switching console, emergency display restore suite, and automated pre-flight checklist running on port `3050`.

---

## 📋 Table of Contents
1. [System Overview & Mission](#1-system-overview--mission)
2. [Signal Flow & Hardware Telemetry Map](#2-signal-flow--hardware-telemetry-map)
3. [Connected Hardware & Software Subsystems](#3-connected-hardware--software-subsystems)
4. [Mobile-First Volunteer Station Web Pages](#4-mobile-first-volunteer-station-web-pages)
5. [Emergency Safeguards & Quick Controls](#5-emergency-safeguards--quick-controls)
6. [Silence Watchdog & Dual GroupMe Incident Bots](#6-silence-watchdog--dual-groupme-incident-bots)
7. [Automated Sunday Pre-Flight Checklist & Reports](#7-automated-sunday-pre-flight-checklist--reports)
8. [REST & WebSocket API Reference (Port 3050)](#8-rest--websocket-api-reference-port-3050)
9. [Hardware Controllers (Stream Deck & Companion)](#9-hardware-controllers-stream-deck--companion)
10. [Configuration (`config.json`, `.env`) & Startup](#10-configuration-configjson-env--startup)
11. [Sound Booth Quick Triage & Diagnostic Guide](#11-sound-booth-quick-triage--diagnostic-guide)

---

## 1. System Overview & Mission

The **Sanctuary AV Controller** is the central nerve center for Waypoint Church's sound booth. Built with **Node.js (Express & `ws`)**, it continuously polls and listens to every piece of A/V equipment across the church network, aggregating state into a 200ms real-time telemetry stream.

### Primary Missions:
* **Volunteer-Proof Camera & Switcher Control:** Mobile touch tallies for Blackmagic ATEM Mini and 8-way joystick control for PTZOptics cameras with 1-tap church presets.
* **Audio Watchdog & Silence Alarms:** Listens to REAPER DAW via Open Sound Control (OSC) to monitor master broadcast dBFS levels and fire incident alerts if audio drops during live service hours.
* **Emergency Stage Monitor Recovery:** 1-click API endpoint (`POST /api/control/reopen-screen`) to instantly force OBS Fullscreen Projector back onto the **LONTIUM stage TV (Monitor Index 1)** if the display drops.
* **Live Caption & Pace Telemetry:** Bridges directly to VoxStream (port `8765`), tracking words-per-minute (WPM), speech pace, and interim captions for sound booth operators.
* **Sunday Pre-Flight Automation:** Runs a 1-second multi-system diagnostic sweep across all hardware before service and records volunteer sign-off.
* **Incident Alerting:** Alerts sound booth leads and production team via dual GroupMe bot webhooks on critical faults.

---

## 2. Signal Flow & Hardware Telemetry Map

```mermaid
flowchart TD
    subgraph Sanctuary AV Hardware Layer
        FOH["Soundcraft Si Impact\n(FOH USB Out)"] -->|"USB Audio Ch 1-2"| REAPER["REAPER DAW\n(Master Broadcast Mix)"]
        CAM1["PTZOptics 20X (Pulpit)\n192.168.1.101"] -->|"HDMI 1"| ATEM["Blackmagic ATEM Mini\n192.168.1.240"]
        CAM2["PTZOptics 30X (Wide)\n192.168.1.102"] -->|"HDMI 2"| ATEM
        PROCLAIM["Faithlife Proclaim\nLyrics / Slides"] -->|"HDMI 3"| ATEM
        OBS["OBS Studio (v5)\n127.0.0.1:4455"] -->|"Monitor 1"| LONTIUM["LONTIUM Stage TV\n(Confidence Display)"]
        VOX["VoxStream Live Captioner PRO\n127.0.0.1:8765"]
    end

    subgraph Sanctuary AV Controller (Port 3050)
        SERVER["Node.js Master Server\n(Express & WebSocket Engine)"]
        REAPER -.->|"OSC UDP 9000/8000 (VU Meters)"| SERVER
        ATEM -.->|"Ethernet Tallies & Switching"| SERVER
        SERVER -.->|"VISCA UDP 1259 / CGI Presets"| CAM1 & CAM2
        PROCLAIM -.->|"REST Port 52195"| SERVER
        OBS -.->|"WebSocket v5 Stats & Projector"| SERVER
        VOX -.->|"REST & WS 8765 (Live Captions & WPM)"| SERVER
    end

    subgraph Mobile-First Volunteer Stations
        SERVER --> M_MASTER["🎛️ Master Hub (/)"]
        SERVER --> M_CHECK["📋 Pre-Flight Checklist (/checklist)"]
        SERVER --> M_CAM["🎥 Cameras & Switcher (/cameras)"]
        SERVER --> M_AUD["🎙️ Audio & VU Meters (/audio)"]
        SERVER --> M_CAP["📺 Captions & Teleprompter (/captions)"]
        SERVER --> M_BROAD["📡 Broadcast & Ping Telemetry (/broadcast)"]
        SERVER --> M_HUD["🪟 Mini-HUD Bar (/hud)"]
    end

    subgraph Incident Alerting
        SERVER --> GM_MAIN["📢 GroupMe: Main AV Team"]
        SERVER --> GM_LEAD["🚨 GroupMe: Tech Leads"]
    end
```

---

## 3. Connected Hardware & Software Subsystems

| Subsystem | Hardware / Software | Protocol / Port | Target Address | Purpose in Booth |
| :--- | :--- | :--- | :--- | :--- |
| **🎙️ FOH Mixer** | Soundcraft Si Impact | USB Audio 48kHz | Direct USB | Feeds clean 24-bit stereo audio into DAW. |
| **🎛️ Livestream DAW** | REAPER DAW | Open Sound Control (OSC) | `127.0.0.1:9000` / `8000` | Precision master volume VU meters & silence timer. |
| **🎥 Video Switcher** | Blackmagic ATEM Mini | Blackmagic Ethernet API | `192.168.1.240` | 2-Camera program/preview touch tallies, CUT & AUTO. |
| **🕹️ Stage Camera** | PTZOptics 20X (Pulpit) | VISCA over IP (UDP) + HTTP | `192.168.1.101:1259` | Stage pan/tilt/zoom and 1-tap church presets. |
| **🕹️ Wide Camera** | PTZOptics 30X (Sanctuary) | VISCA over IP (UDP) + HTTP | `192.168.1.102:1259` | Wide sanctuary congregation framing. |
| **📖 Lyric Slides** | Faithlife Proclaim | Local REST API | `192.168.1.X:52195` | Presentation on-air status and slide tracking. |
| **📼 Broadcast OBS** | OBS Studio | WebSocket Protocol v5 | `127.0.0.1:4455` | Recording health, dropped frames %, LONTIUM projector. |
| **🗣️ Live Captions** | VoxStream PRO | REST & WebSocket | `http://127.0.0.1:8765` | Speech-to-text teleprompter, WPM gauge, Bible cards. |
| **📡 YouTube Live** | YouTube Data API v3 | HTTPS REST | `googleapis.com` | Live stream status, viewer count, AAC audio health. |

---

## 4. Mobile-First Volunteer Station Web Pages

All web station pages are mobile-responsive and accessible on iPhones, Androids, iPads, and booth monitors:

```
┌────────────────────────────────────────────────────────────────────────────┐
│                    SANCTUARY AV — MOBILE BOTTOM DOCK                       │
│  [ 🎛️ Master ]  [ 📋 Checklist ]  [ 🎥 Cameras ]  [ 🎙️ Audio ]  [ 📺 Captions ]  [ 📡 Broadcast ] │
└────────────────────────────────────────────────────────────────────────────┘
```

1. **🎛️ Master Control Hub (`http://localhost:3050/`)**:
   - Comprehensive sanctuary overview: signal chain flow, ATEM switcher bar, PTZ joystick, VU meters, YouTube viewer counts.
   - 4-tab configuration center for IPs, alert thresholds, service hours, and dual GroupMe bot IDs.
2. **📋 Sunday Pre-Flight Checklist (`http://localhost:3050/checklist`)**:
   - **`⚡ Run Auto-Check`**: Diagnostic sweep testing all 8 hardware/software subsystems in 1 second.
   - Volunteer name sign-off and historical broadcast report archive.
3. **🎥 Cameras & Video Switcher (`http://localhost:3050/cameras`)**:
   - Touch tallies for Blackmagic ATEM Mini (Program = Red, Preview = Green).
   - 8-Way PTZ D-Pad joystick with variable speed slider (1–24).
   - Instant Church Presets: *Pulpit*, *Wide Stage*, *Lectern*, *Piano*, *Altar*, *Choir*.
4. **🎙️ Audio & Metering Station (`http://localhost:3050/audio`)**:
   - Dual full-height VU meters with logarithmic scale (-60 to 0 dBFS) and peak hold.
   - Real-time Silence Watchdog Alarm timer pulsing red during dropouts.
5. **📺 Real-Time Captions & Teleprompter (`http://localhost:3050/captions`)**:
   - Glowing interim words, final transcript cards, WPM speed gauge, and 1-tap **"Reopen Screen"** button.
6. **📡 Broadcast Telemetry & ICMP Ping (`http://localhost:3050/broadcast`)**:
   - Live stream bitrates, FPS, dropped frame percentages, and 5-node ping latency matrix.
7. **🪟 Floating Mini-HUD Bar (`http://localhost:3050/hud`)**:
   - Ultra-compact status bar for side-by-side docking with Mixing Station or OBS.

---

## 5. Emergency Safeguards & Quick Controls

Sanctuary AV Controller includes dedicated safeguards for high-stress live service disruptions:

* **📺 Reopen Screen (`POST /api/control/reopen-screen`)**:
  - Automatically commands OBS Studio via WebSocket v5 to open a Fullscreen Video Projector on **Monitor Index 1 (the LONTIUM stage TV)** and restarts the caption engine.
* **🚨 Emergency Panic Mute (`POST /api/control/panic`)**:
  - Immediately blanks all broadcast captions across OBS and stage displays and triggers audio mute safeguards.
* **⏯️ Toggle Speech Engine (`POST /api/control/toggle`)**:
  - Pauses or resumes speech transcription on VoxStream without restarting software.

---

## 6. Silence Watchdog & Dual GroupMe Incident Bots

### Audio Silence Watchdog:
* Runs on a continuous 1-second loop in `modules/alerts.js`.
* If master broadcast audio from REAPER DAW drops below **`-50 dBFS` for more than 15 seconds** during defined Sunday service hours (e.g. 9:00 AM – 12:30 PM), the system flags an **AUDIO_SILENCE** incident.
* Color codes the web UI into emergency pulsing red.

### Dual GroupMe Incident Bots:
* **Main Team Bot (`GROUPME_BOT_ID_MAIN`):** Sends general announcements, pre-service checklist completions, and post-service health cards.
* **Tech Leads Bot (`GROUPME_BOT_ID_LEADS`):** Dispatches high-priority incident alerts (Audio Silence >15s, RTMP Stream Dropped, Camera IP Unreachable, Dropped Frames >5%).

---

## 7. Automated Sunday Pre-Flight Checklist & Reports

### 1-Click Automated Hardware Sweep:
Pressing **`⚡ Run Auto-Check`** executes `modules/checklist.js`:
1. Pings ATEM Switcher (`192.168.1.240`)
2. Pings PTZ Cameras (`192.168.1.101`, `192.168.1.102`)
3. Polls Proclaim REST API (`52195`)
4. Verifies OBS Studio WebSocket connection (`4455`)
5. Verifies VoxStream Live Captioner API (`8765`)
6. Tests REAPER OSC VU Meter Stream (`8000`)
7. Tests Internet & YouTube Ingest connectivity

### Post-Service Health Reports:
At the conclusion of the broadcast, the system compiles a service summary in `reports/` containing total uptime, audio loudness statistics, peak YouTube viewers, dropped frame totals, and volunteer sign-offs.

---

## 8. REST & WebSocket API Reference (Port 3050)

### Telemetry & Control API:
```bash
# Get overall sanctuary status JSON
GET http://localhost:3050/api/status

# Execute automated hardware checklist sweep
POST http://localhost:3050/api/checklist/run

# Save volunteer sign-off
POST http://localhost:3050/api/checklist/signoff
Content-Type: application/json
{ "volunteer": "John Doe", "notes": "All green" }

# Switch ATEM Video Input (1 = Cam 1, 2 = Cam 2, 3 = Proclaim, 4 = Media)
POST http://localhost:3050/api/atem/program
Content-Type: application/json
{ "input": 1 }

# Trigger ATEM CUT or AUTO transition
POST http://localhost:3050/api/atem/cut
POST http://localhost:3050/api/atem/auto

# Move PTZ Camera (Direction: up, down, left, right, up-left, etc. Speed: 1-24)
POST http://localhost:3050/api/ptz/1/move
Content-Type: application/json
{ "direction": "left", "speed": 12 }

# Recall PTZ Church Preset (1 = Pulpit, 2 = Wide, 3 = Lectern, 4 = Piano)
POST http://localhost:3050/api/ptz/1/preset/1

# Emergency: Reopen LONTIUM Stage Screen
POST http://localhost:3050/api/control/reopen-screen

# Emergency: Panic Mute
POST http://localhost:3050/api/control/panic
```

---

## 9. Hardware Controllers (Stream Deck & Companion)

Sanctuary AV Controller provides a ready-to-import key guide in `hardware/streamdeck-key-guide.json` for Elgato Stream Deck and Bitfocus Companion:
* **Key 1:** CUT Transition (`POST /api/atem/cut`)
* **Key 2:** AUTO Transition (`POST /api/atem/auto`)
* **Key 3:** Cam 1 Pulpit (`POST /api/atem/program { "input": 1 }`)
* **Key 4:** Cam 2 Wide (`POST /api/atem/program { "input": 2 }`)
* **Key 5:** Proclaim Slides (`POST /api/atem/program { "input": 3 }`)
* **Key 6:** Pulpit Preset (`POST /api/ptz/1/preset/1`)
* **Key 7:** Reopen Stage Screen (`POST /api/control/reopen-screen`)
* **Key 8:** Panic Mute (`POST /api/control/panic`)

---

## 10. Configuration (`config.json`, `.env`) & Startup

### Environment Variables (`.env`):
```env
PORT=3050
ATEM_IP=192.168.1.240
CAM1_IP=192.168.1.101
CAM2_IP=192.168.1.102
OBS_WS_HOST=127.0.0.1
OBS_WS_PORT=4455
OBS_WS_PASS=
VOXSTREAM_API=http://127.0.0.1:8765
PROCLAIM_IP=192.168.1.150
PROCLAIM_PORT=52195
GROUPME_BOT_ID_MAIN=
GROUPME_BOT_ID_LEADS=
```

### Starting the Server:
```bash
cd /Users/techguyowen/Downloads/AV_Controller
npm install
npm start
```

### Auto-Starting on macOS Boot via PM2:
```bash
npm install -g pm2
pm2 start server.js --name "sanctuary-av"
pm2 save
pm2 startup
```

---

## 11. Sound Booth Quick Triage & Diagnostic Guide

| Symptom | Root Cause | Immediate Sound Booth Fix |
| :--- | :--- | :--- |
| **Silence Alarm Flashing Red** | FOH Mix 14 fader down or REAPER DAW unlinked | 1. Check Soundcraft Si Impact Layer D, Fader 22 (Mix 14 Master Send).<br>2. Check REAPER DAW master track fader.<br>3. Verify USB audio cable between desk and PC. |
| **Camera Joystick Not Responding** | Camera IP or Ubiquiti switch port asleep | 1. Check `/broadcast` ping telemetry.<br>2. Replug camera network patch cable on Ubiquiti switch under booth desk.<br>3. Verify camera IP matches `.env`. |
| **ATEM Tally State Mismatched** | ATEM Ethernet connection dropped | Reconnect ATEM Mini in Master Settings or power cycle ATEM Mini power plug. |
| **Stage TV Lost Video/Captions** | OBS Projector lost window focus | Tap **"Reopen Screen"** button on `/captions` or execute `POST /api/control/reopen-screen`. |
