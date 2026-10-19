# 🎙️ VoxStream PRO — System Architecture, Speech Pipeline & Sound Booth Operations Guide

This document provides a comprehensive technical and operational reference for **VoxStream Live Captioner PRO** (`delightful-bohr`), the real-time AI live captioning, scripture lookup, and broadcast automation suite powering Waypoint Church's OBS Studio livestream and stage confidence displays.

---

## 📋 Table of Contents
1. [Ecosystem Overview & Purpose](#1-ecosystem-overview--purpose)
2. [Master Architecture & Signal Flow](#2-master-architecture--signal-flow)
3. [7-Tier Speech Recognition (STT) Engine Decision Matrix](#3-7-tier-speech-recognition-stt-engine-decision-matrix)
4. [Church Lexicon, Deity Truecasing & Scripture Parser](#4-church-lexicon-deity-truecasing--scripture-parser)
5. [Offline SQLite Bible & Verse Cue Engine](#5-offline-sqlite-bible--verse-cue-engine)
6. [Web Endpoints, Stage Displays & OBS Overlays](#6-web-endpoints-stage-displays--obs-overlays)
7. [REST & WebSocket API Reference (Port 8765)](#7-rest--websocket-api-reference-port-8765)
8. [Neurodivergent & Accessibility Suite (WCAG 2.2 AAA)](#8-neurodivergent--accessibility-suite-wcag-22-aaa)
9. [OBS Studio, CEA-608 & Broadcast Integration](#9-obs-studio-cea-608--broadcast-integration)
10. [Configuration Reference (`config.json`)](#10-configuration-reference-configjson)
11. [Startup, Maintenance & Sound Booth Troubleshooting](#11-startup-maintenance--sound-booth-troubleshooting)

---

## 1. Ecosystem Overview & Purpose

**VoxStream PRO** is an asynchronous Python/FastAPI application engineered specifically for low-latency live speech transcription, multi-screen distribution, and broadcast automation.

### Primary Roles in Waypoint Sanctuary:
* **OBS Broadcast Overlay:** Injects live translucent lower-third subtitles into the sanctuary YouTube livestream via OBS Studio Browser Sources.
* **YouTube Closed Captions:** Encodes and streams embedded **CEA-608 line-21 closed captions** directly through RTMP to YouTube Live for viewer-toggleable CC.
* **Stage & Podium Confidence Monitor (`/display`):** Serves real-time scrollable teleprompter transcripts to stage iPads, musician confidence screens, and the **LONTIUM stage TV**.
* **Automatic Scripture Detection:** Listens to sermon audio, identifies spoken Bible references (e.g. *"Romans 8:28"*), queries an offline SQLite scripture database in `<0.1ms`, and automatically renders verse cards.
* **Overflow & Assistive Listening:** Broadcasts real-time translated and accessible captions to mobile devices over local Wi-Fi.

---

## 2. Master Architecture & Signal Flow

```mermaid
flowchart TD
    subgraph Audio Input
        MIC["Sanctuary Lapel / Pulpit Mic\n(Soundcraft Si Desk / USB)"] --> CAP["AudioCapture Engine\n(PyAudio / sounddevice / CoreAudio / ASIO)"]
        CAP --> VAD["Silero VAD v5 + RMS Energy Gate\n(Filters background room noise & bleed)"]
    end

    subgraph Speech Recognition Engines
        VAD --> STT_ROUTER{"Active STT Engine Selector\n(Hot-Switchable)"}
        STT_ROUTER -->|Local Ultra-Low Latency| VOSK["Vosk / Kaldi Acoustic Models\n(~20ms latency, 100% offline)"]
        STT_ROUTER -->|Local ONNX Neural| MOON["Useful Moonshine Tiny/Base\n(Apple MPS / CUDA / CPU)"]
        STT_ROUTER -->|Local GPU Deep Learning| WHISPER["Faster-Whisper\n(NVIDIA CUDA / CTranslate2)"]
        STT_ROUTER -->|Cloud AI| GEMINI["Google Gemini 3.5 Live API\n(Transcribe Live with custom prompt)"]
        STT_ROUTER -->|Cloud Enterprise| GCLOUD["Google Cloud STT v2\n(Streaming gRPC with diarization)"]
        STT_ROUTER -->|Cloud WS| BANDWIDTH["Bandwidth Labs Live STT"]
        STT_ROUTER -->|Free Fallback| GWEB["Free Google Speech Recognizer"]
    end

    subgraph NLP & Church Intelligence Pipeline
        VOSK & MOON & WHISPER & GEMINI & GCLOUD & BANDWIDTH & GWEB --> SINK["CaptionSink Pipeline"]
        SINK --> LEXICON["Church & Deity Lexicon\n(Capitalization & Sacred Names)"]
        SINK --> CENSOR["Church Context Whitelist & Profanity Filter"]
        SINK --> BIBLE_DET["Spoken Scripture Parser\n(Auto-detects canonical citations)"]
        BIBLE_DET --> BIBLE_DB[("Offline SQLite Bible DB\nBSB / WEB / KJV")]
        SINK --> TRANS["Multi-Language Translator\n(30+ languages)"]
    end

    subgraph Distribution & Endpoints (Port 8765)
        SINK --> WS_SERVER["FastAPI WebSocket Server (/ws)"]
        WS_SERVER --> OVERLAY["📺 OBS Lower-Third (/)"]
        WS_SERVER --> STAGE["📱 Stage Confidence PWA (/display)"]
        WS_SERVER --> DOCK["🎛️ In-OBS Web Dock (/dock, /dashboard)"]
        WS_SERVER --> BIBLE_OV["📖 Scripture Overlay (/bible)"]
        WS_SERVER --> AV_CTRL["🎛️ Sanctuary AV Controller (Port 3050)"]
        SINK --> OBS_CC["📡 OBS WebSocket v5 CEA-608 CC Injection"]
    end
```

---

## 3. 7-Tier Speech Recognition (STT) Engine Decision Matrix

VoxStream supports **7 hot-switchable speech engines**, allowing operators to transition between 100% offline local processing and cloud AI without restarting the server:

| Engine Key | Engine Name | Internet Needed? | Compute Hardware | Latency | Recommended Sanctuary Scenario |
| :--- | :--- | :---: | :--- | :---: | :--- |
| **`vosk`** | **Local Vosk / Kaldi** | ❌ **No (100% Offline)** | Lightweight CPU | **~20–50ms** | **Sanctuary Default / Zero Internet:** Bulletproof offline operation with instant interim feedback. |
| **`moonshine`** | **Useful Moonshine** | ❌ **No (100% Offline)** | Apple Silicon MPS / NVIDIA CUDA / CPU | **~100–180ms** | **Modern Mac/PC Default:** Exceptional accuracy on names and natural sentence boundaries (~5x faster than Whisper). |
| **`local_whisper`** | **Faster-Whisper** | ❌ **No (100% Offline)** | NVIDIA GPU (GTX 1660 / RTX 3060+) | **~250–400ms** | **High-End GPU Workstation:** Maximum offline grammatical accuracy and punctuation. |
| **`gemini`** | **Gemini 3.5 Transcribe Live** | 🌐 **Yes (Cloud API)** | Cloud Server (Google AI) | **~300–600ms** | **Online Sunday Service:** Removes filler words (*"um"*, *"like"*), perfect Biblical theology spelling. |
| **`google_cloud`** | **Google Cloud STT v2** | 🌐 **Yes (Cloud API)** | Cloud Server (GCP) | **~250–500ms** | **Enterprise Streaming:** Auto-diarization and multi-speaker transcription. |
| **`bandwidth`** | **Bandwidth Labs STT** | 🌐 **Yes (Cloud API)** | Cloud WebSocket | **~200–400ms** | Low-overhead cloud streaming alternative. |
| **`google`** | **Free Google Speech** | 🌐 **Yes (Cloud)** | Standard Web STT | **~400–800ms** | Zero-setup, API-key-free cloud backup. |

---

## 4. Church Lexicon, Deity Truecasing & Scripture Parser

The church intelligence engine (`obs_captioner/church_lexicon.py` & `obs_captioner/formatter.py`) intercepts all raw transcript text before broadcasting:

### 1. Sacred Names & Deity Truecasing
Automatically capitalizes and truecases religious terms regardless of engine casing:
* `God`, `God's`, `Lord`, `Lord's`, `Jesus`, `Jesus Christ`, `Christ`, `Holy Spirit`, `Holy Ghost`
* `Heavenly Father`, `Almighty God`, `King of Kings`, `Lord of Lords`, `Son of God`, `Prince of Peace`
* `Lamb of God`, `Messiah`, `Savior`, `Yahweh`, `Jehovah`, `Emmanuel`, `Abba`

### 2. Spoken Scripture Reference Parsing
Converts spoken conversational references into standard canonical Bible citations:
* `"John three sixteen"` $\rightarrow$ **`John 3:16`**
* `"First Corinthians chapter thirteen verses four through eight"` $\rightarrow$ **`1 Corinthians 13:4-8`**
* `"Romans eight twenty eight"` $\rightarrow$ **`Romans 8:28`**
* `"Psalm twenty three"` $\rightarrow$ **`Psalm 23`**
* `"Second Timothy one seven"` $\rightarrow$ **`2 Timothy 1:7`**

### 3. Church Context Whitelist Filter
Protects canonical scriptural expressions from false-positive profanity censoring:
* Whitelisted: *"heaven and hell"*, *"gates of hell"*, *"damnation"*, *"virgin birth"*, *"circumcision"*, *"blood of the Lamb"*.

---

## 5. Offline SQLite Bible & Verse Cue Engine

VoxStream bundles a zero-latency SQLite database (`obs_captioner/data/bible.db`) containing complete texts for multiple translations:
* **BSB (Berean Standard Bible):** Modern, literal translation closely matching ESV/NASB.
* **WEB (World English Bible):** Clean modern translation equivalent to NIV/NLT.
* **KJV (King James Version):** Traditional authorized text.

### How Automatic Verse Retrieval Works:
1. When spoken citation detection is enabled in `config.json` (`"auto_lookup_bible": true`), any spoken scripture triggers an instant SQLite lookup.
2. The scripture is delivered via WebSocket with event `scripture_detected`.
3. The **Stage Confidence Monitor** displays a scripture banner for the pastor/speaker.
4. The **OBS Scripture Lower-Third (`/bible`)** renders an animated gold-amber lower-third card with full verse text and reference.

---

## 6. Web Endpoints, Stage Displays & OBS Overlays

All interfaces run over HTTP on port `8765` (`http://localhost:8765` or `http://192.168.1.X:8765`):

| Endpoint | Target Screen | Description & Features |
| :--- | :--- | :--- |
| **`/`** | **OBS Browser Source** | Transparent lower-third overlay with smooth CSS animations, theme gallery, and auto-clearing captions. |
| **`/display`** | **Stage iPads & LONTIUM TV** | PWA-installable confidence monitor with **Scrollable History Mode**, **Live Prompter Mode**, Bionic Reading, and Screen Wake Lock. |
| **`/dashboard`** | **In-OBS Web Browser Dock** | Full operator dashboard: live audio VU meter, engine switcher, volume threshold sliders, scripture search cue tool. |
| **`/dock`** | **Compact OBS Dock** | Ultra-compact control strip for quick Start/Stop/Panic controls inside OBS Studio side panels. |
| **`/bible`** | **OBS Dedicated Scripture** | Dedicated standalone scripture lower-third overlay with automatic 12-second fadeout. |
| **`/audio`** | **Network Audio Feed** | Live PCM/WAV audio streaming endpoint for remote listening or overflow rooms. |

---

## 7. REST & WebSocket API Reference (Port 8765)

### Core Control Endpoints:
```bash
# Get overall system status, active engine, audio level dB, uptime
GET http://127.0.0.1:8765/api/status

# Start audio capture & speech recognition
POST http://127.0.0.1:8765/api/control/start

# Stop audio capture & pause recognition
POST http://127.0.0.1:8765/api/control/stop

# 1-Click Toggle between active and paused
POST http://127.0.0.1:8765/api/control/toggle

# Emergency Panic: Clear all screen text and mute outputs
POST http://127.0.0.1:8765/api/control/panic

# Force OBS Fullscreen Video Projector to LONTIUM Stage Monitor (Monitor Index 1)
POST http://127.0.0.1:8765/api/control/reopen-screen
```

### Real-Time WebSocket Protocol (`ws://127.0.0.1:8765/ws`):
Incoming messages from VoxStream broadcast server:
```json
{
  "type": "final_transcript",
  "text": "For God so loved the world that He gave His only begotten Son.",
  "confidence": 0.96,
  "words_per_minute": 138,
  "timestamp": 1725238900.12
}
```
```json
{
  "type": "interim_transcript",
  "text": "For God so loved the world"
}
```
```json
{
  "type": "scripture_cue",
  "reference": "John 3:16",
  "translation": "BSB",
  "text": "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life."
}
```

---

## 8. Neurodivergent & Accessibility Suite (WCAG 2.2 AAA)

VoxStream includes dedicated accessibility features designed for sound booth volunteers, worship leaders, pastors, and congregation members:
* **⚡ Bionic Reading (Guided Word Focus):** Bolds the first 2–3 letters of each word (`<b>Wel</b>come <b>t</b>o <b>chur</b>ch`), creating visual fixation points that accelerate reading comprehension for people with **ADHD** or **dyslexia**.
* **👁️ Visual Aid Mode:** Expands character tracking (`0.06em`), word spacing (`0.15em`), and line height (`1.65x`) to eliminate character crowding.
* **🐢 Slow Down Text (Paced Reading):** Speech governor that buffers rapid speech bursts and delivers words at a steady pace of **~135 WPM**, holding sentences on screen for **10.0 seconds** to eliminate reading fatigue.
* **📖 OpenDyslexic & Lexend Fonts:** Heavy-bottomed letterforms that prevent character flipping and rotational inversion.
* **🔋 Screen Wake Lock API:** Automatically keeps iPads and LONTIUM stage screens from going to sleep during live services.

---

## 9. OBS Studio, CEA-608 & Broadcast Integration

1. **OBS Browser Source Configuration:**
   - **URL:** `http://127.0.0.1:8765/`
   - **Width:** `1920` | **Height:** `1080`
   - **Custom CSS:** `body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }`
   - **Shutdown source when not visible:** Checked.
   - **Refresh browser when scene becomes active:** Checked.
2. **OBS CEA-608 Closed Captions Injection:**
   - VoxStream connects directly to OBS Studio via `obs-websocket` (port `4455`).
   - Finalized text is encoded as **CEA-608 Line 21 captions** and embedded into the RTMP livestream video stream.
   - YouTube Live automatically detects the embedded captions and renders the interactive `[CC]` button for online viewers.

---

## 10. Configuration Reference (`config.json`)

Key configuration options located in `/Users/techguyowen/Documents/antigravity/delightful-bohr/config.json`:

```json
{
  "engine": "moonshine",
  "model_size": "base",
  "audio_device_index": null,
  "sample_rate": 16000,
  "vad_threshold": 0.5,
  "silence_timeout_ms": 1200,
  "church_lexicon_enabled": true,
  "auto_lookup_bible": true,
  "bible_default_translation": "BSB",
  "bionic_reading_default": false,
  "visual_aid_default": false,
  "theme": "obsidian",
  "obs": {
    "host": "127.0.0.1",
    "port": 4455,
    "password": "",
    "enable_cea608": true,
    "lontium_monitor_index": 1
  },
  "api": {
    "port": 8765,
    "host": "0.0.0.0",
    "api_key": ""
  }
}
```

---

## 11. Startup, Maintenance & Sound Booth Troubleshooting

### Quick Launch Commands:
```bash
# macOS / Linux:
cd /Users/techguyowen/Documents/antigravity/delightful-bohr
./run_captioner.sh

# Windows:
run_captioner.bat
```

### Common Sound Booth Issues & Fixes:

| Symptom | Root Cause | Immediate Sound Booth Fix |
| :--- | :--- | :--- |
| **No captions appearing on screen** | Audio input device selection or VAD silence threshold | 1. Open `http://localhost:8765/dashboard` and check the audio VU meter.<br>2. Ensure the microphone input is selected (Soundcraft USB / Lapel).<br>3. Lower VAD threshold from `0.6` to `0.4`. |
| **LONTIUM Stage Monitor went black** | OBS Projector window minimized or disconnected | Click **"Reopen Screen"** in Sanctuary AV Controller (`POST /api/control/reopen-screen`) or press under-desk confidence button. |
| **Captions lagging or delayed** | Heavy model on CPU (e.g. Whisper Large) | In the dashboard, switch STT engine to **Useful Moonshine** or **Vosk** for instantaneous `<50ms` processing. |
| **Emergency blanking needed** | Spoken misinterpretation or off-script comment | Hit **Panic Mute** in Sanctuary AV Controller or run `POST /api/control/panic` to clear all screens immediately. |
