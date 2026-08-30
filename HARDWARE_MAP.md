# 🗺️ Waypoint Church AV Hardware & Wiring Reference Map

This document serves as the master technical specification for all physical hardware, network switches, digital mixing layers, electrical panels, and stage box patch points at Waypoint Church.

---

## 1. Physical Stage Floor Boxes (Inputs 1–23 & Drum MADI)

```
================================ STAGE BACK WALL ================================
 [Far Left Box]          [Back Left (Keys)]                [Drum Cage Plates]
  In 1: Violin            In 7: Keys Right                  Left Plate (Analog):
  Aviom 1                 In 8: Keys Left                    In 19: Synth/Pad
                          In 9: Folk                         In 20: Drum Click
                          Aviom 6 & 7                        In 21: Drum Talk/Spare
                                                             Aviom 8
                                                            Right Plate (MADI 17–24):
                                                             Mini Stagebox 32i Snake
---------------------------------------------------------------------------------
 [Front Left Box]        [Center Front Box]                [Front Right Box]
  In 2: Vocal 1 (V1)      In 10: Vocal 2 (Leader)           In 14: Vocal 3 (V3)
  In 3: Aux 1 (Guest)     In 11: Electric Guitar 1          In 15: Acoustic Guitar 1
  In 4: Stomp Box         In 12: Front Click                In 16: Music Director (MD)
  In 5: Choir Left        In 13: Acoustic Guitar 2          In 17: Djembe
  In 6: Choir Right       Aviom 4                           In 18: Cajon / Stomp
  Aviom 5                                                   Aviom 3
                                                           [Far Right Box]
                                                            In 22: Electric Guitar 2
                                                            In 23: Vocal 4 (V4)
                                                            Aviom 2
================================ FRONT OF STAGE =================================
```

---

## 2. Soundcraft Si Impact Console Routing & Fader Layers

### Master Protection Rule:
> 🛑 **CRITICAL: NEVER OVERWRITE `1NormalSunday`**
> `1NormalSunday` is the church's master golden reference show file. You may **LOAD** it at any time, but **NEVER SAVE OVER / OVERWRITE** it. Always save custom mixes using the current date: `MM.DD.YYYY.show` (e.g. `08.23.2026.show`) in `MMC ➔ Other Folder`.

### Fader Layers:
- **Layer A (Faders 1–24): Main Instruments, Vocals & Computer Playback**
  - Faders 1–4: Vocals 1–4 (Lead and background vocalists)
  - Fader 5: Bass Guitar (`<5>`)
  - Faders 6–7: Acoustic Guitars (Acou1 `<15>`, Acou2 `<13>`)
  - Faders 8–9: Keyboards (KeysL `<7>`, KeysR `<8>`)
  - Faders 10–11: Electric Guitars (Elec1 `<11>`, Elec2 `<22>`)
  - Faders 12–18: Drum Kit Channels (OH L, OH R, Kick, Snare, Hi Tom, Mid Tom, Low Tom)
  - Fader 19: Violin (`<1>`)
  - Fader 20: Djembe (`<17>`)
  - Fader 21: Front Cajon / Stomp (`<18>`) — *Note: Assigned inside Band Group. Must be muted when inactive!*
  - Fader 22: **PC Audio** *(Sound booth computer audio line input)*
  - Fader 23: **Mac Audio** *(Presentation Mac audio line input for sermon videos & media)*
  - Fader 24: **Foyer Audio** *(Dedicated foyer feed — foyer audio comes exclusively from this Foyer bus)*
- **Layer B (Faders 1–24): Wireless Microphones, Click & Utility**
  - Fader 1: **Ambient Room Mic** *(Feeds Mix 14 Livestream ONLY — NEVER route to House)*
  - Fader 2: **Click Track** *(Soft-patched to Input 12 Front or Input 20 Drum Cage — Aviom In-Ears ONLY)*
  - Fader 3: **Pastor Lapel / Headset** *(Golden Preset: "Pastor Lapel" in Mixing Station)*
  - Fader 4: White Wireless Mic
  - Fader 5: Blue Wireless Mic
  - Fader 6: Headset Mic
  - Faders 8–13: Gray, Red, Orange, Yel-Gre, Green, Yellow Handheld Wireless Mics
  - Fader 14–15: Choir Left (`<5>`) & Choir Right (`<6>`)
  - Fader 16: Drum / Synth Pad (`<19>`)
  - Fader 17: Aux 1 (`<3>`) — *Default soft patch for guest instruments*
  - Fader 18: Folk / Front Left Stomp Box (`<4>` or `<9>`)
  - Faders 19–21: Talkback Mics (Booth, MD `<16>`, Drum `<21>`)
- **Layer C: VCAs, DAW Sends & Lexicon FX**
  - Faders 1–5: VCAs (Vocals, Band, Drums, Computer, Pastor)
  - Fader 18: **To Reaper DAW** *(Feeds Williams AV WaveCAST assistive listening)*
  - Fader 19: **From Reaper DAW** *(Return from DAW)*
  - Faders 21–24: Lexicon FX Returns (Vocal Reverb, Drum Plate, Snare Verb, Acoustic/Pad)
- **Layer D: Aviom In-Ear Monitor Master Faders & Broadcast**
  - Faders 1–11: Master send volume for Aviom mix buses (Ensure nominal at 0 dB and unmuted!).
  - Fader 12: **Stereo House Mix (Mix 12)** *(Main sanctuary speakers)*
  - Fader 13: **Stereo Drums House Mix (Mix 13)** *(Drums main house bus)*
  - Fader 22: **Livestream Broadcast Master (Mix 14)** *(Master send to OBS / stream PC)*

---

## 3. Aviom In-Ear Monitoring Network

- **Hardware Hub:** Dedicated PoE network distribution switch located on the **left side of the stage with a bundle of Ethernet cables coming out**.
- **Aviom Mix Buses:**
  - **Mix 1:** Drums (Back Right / Drum Cage)
  - **Mix 2:** Bass
  - **Mix 3:** Talkback
  - **Mix 4:** Keyboards (Back Left)
  - **Mix 5:** Electric Guitar (Center Front)
  - **Mix 6:** Violin / Guest Instrument (Flex 1)
  - **Mix 9:** Vocals 1 & 2
  - **Mix 10:** Vocals 3 & 4
  - **Mix 11:** Acoustic Guitars 1 & 2
- **⚠️ #1 Failure Point:** **Headphone Extension Cables**. Extension cables fail more than any other part. Always bypass by plugging earbuds directly into the Aviom unit's `Phones` jack first.
- **Gain Staging Rule:** If an Aviom send fader is topped out at `+10 dB` on the tablet, add `+2 to +4 dB` of Preamp Gain instead (and pull the House fader down slightly to compensate).

---

## 4. Video, Displays & Livestream Infrastructure

### Front Sanctuary Presentation TVs:
- **Primary Failure Point (90% of outages):** **Choir Closet Ceiling HDMI Splitter**. Located above the ceiling tiles behind the right side of the stage-left choir closet. Power cycle by unplugging for 10–15s and replugging.
- **Booth Routing:** Presentation Mac ➔ Power Strip ➔ Under-Desk HDMI Splitter ➔ Sanctuary Wall HDMI Runs (direct runs, no network baluns).
- **TV Settings:** TVs must be set to **HDMI 1**.

### Stage Confidence Monitor (Rear TV for Musicians & Pastor):
- **Display Modes:**
  1. *Full Static Slide View:* Exact duplicate of front sanctuary TVs.
  2. *BirdDog Dynamic View:* True confidence monitor with lyrics, next upcoming line, and countdown clock.
- **How to Switch:** Press the physical push-button located **underneath the booth desk (labeled on top of desk)**.

### Livestream & Cameras (ATEM Mini Switcher):
- **Both Camera Feeds Black:** Reboot the **Ubiquiti white network switch located underneath the sound booth desk**.
- **Single Camera Feed Black:** Replug that camera's network cable on the Ubiquiti switch OR power cycle that camera's **labeled SDI converter box underneath the desk**.
- **Camera Physical Cable:** Reseat HDMI/SDI cable on the camera body (loosens during tripod panning/tilting).
- **Livestream Audio:** Ensure the PC to the left of the stage is ON, the red-taped audio cord is inserted in the back of the ATEM board, and Soundboard Mix 14 broadcast bus is active.

### Embrace Group TV & Video Extender:
- **HDMI-over-Ethernet Extender:** Small RX receiver box mounted behind the Embrace Room TV, connected via Cat6 to the TX unit under the sound booth desk.
- **Nest Camera Shared Timer:** The receiver box shares a wall outlet timer with the room's Nest camera. If the Nest camera is off, the timer is OFF and must be overridden.
- **OBS Fullscreen Projector:** In OBS Studio, right-click video preview ➔ *Fullscreen Projector (Preview)* ➔ select **'LONTIUM'**.

---

## 5. Electrical Distribution Panels (Sound Booth)

### Gray Metal Electrical Panel (Panel S):
*Powers stage floor pockets, platform receptacles, sound booth workstations, TVs, projectors, and subwoofers.*

| Breakers | Circuit Label | Powered Hardware / Load | Reset Action |
| :--- | :--- | :--- | :--- |
| **4 & 6** | *Floor Recept. Stage* | **Stage Floor Boxes, Musician Pedalboards, DI Boxes, AC Outlets** | Push all the way to OFF, then back to ON |
| **9** | *Sound Rm Lights* | **Sound Booth Ceiling Lights** | Push to OFF, then ON |
| **1 & 2, 7 & 8** | *Quad Recept. Rm 110* | **Sound Booth Workstations, Outboard Racks, Desk AC** | Push to OFF, then ON |
| **11** | *TV Sanctuary* | **Front Sanctuary Presentation Display TVs** | Push to OFF, then ON |
| **13** | *Projector Sanctuary* | **Sanctuary Video Projectors** | Push to OFF, then ON |
| **29–30** | *10 R & L SUBS* | **Sanctuary Subwoofers (Low-End Punch)** | Push to OFF, then ON |

### Large Black Panel (Next to Panel S):
- **Lighting Only:** Exclusively controls sanctuary architectural illumination and theatrical stage lights. **Never use for audio, stage pocket, or video troubleshooting.**

---

## 6. Sanctuary Lighting Control Scenes (6-Button Panel)

| Button / Preset | Name | Intended Usage | Lighting Levels & Details |
| :--- | :--- | :--- | :--- |
| **Button 1** | **Before / After Service** | Gathering, fellowship, dismissal | Full house illumination + balanced warm stage light |
| **Button 2** | **Songs / Music** | Worship set & praise team | Dims house lights, atmospheric focus on worship team |
| **Button 3** | **Everything Else** | Transitions, offering, prayer | Balanced medium ambient lighting |
| **Button 4** | **Video Showing** | Video announcements, sermon clips | Darkens house for maximum TV video contrast |
| **Button 5** | **Full 100%** | Rehearsals, setup, cleaning | Maximum 100% brightness across all sanctuary fixtures |
| **Button 6** | **Spoken Word** | Sermon, preaching, podium | Platform spotlight on speaker with comfortable house |
| **Button 7** | **OFF** | End-of-day shutdown | Powers off all sanctuary & stage fixtures |

---

## 7. Stage Noise, Grounding & DI Management

- **GND / LIFT Switch:** If an acoustic guitar, bass, keyboard, or pedalboard exhibits a loud 60Hz electrical buzz or hum, flip the **GND / LIFT switch on the stage DI box to LIFT**. This breaks the ground loop between stage power and the mixer.
- **Stage Power Isolation:** Ensure all instrument pedalboards and active DIs plug into stage floor pockets powered by **Panel S Breakers 4 & 6**. Never cross-plug into ungrounded auxiliary wall strips.
- **Console High Pass Filter (HPF):** Engage the channel strip HPF at **80Hz–100Hz** on the Si Impact console for all non-subwoofer instruments to roll off AC line rumble.

---

## 8. Hardware Boot & Shutdown Sequence (Pop Prevention)

- **Power-Up Sequence (Sources First, Amps Last):**
  1. **Board (Console):** Soundcraft Si Impact
  2. **Wireless Rack:** Wireless mic receivers
  3. **ATLAS Processor:** Audio processor unit
  4. **House AMP:** Crown main amplifier
  5. **QSC Wall Speakers:** Sanctuary wall speakers
  6. **All Video ATEM:** Video switcher (if event)
  7. **AVIOM Switch:** Left side of stage
- **Power-Down Sequence (Exact Reverse):**
  `AVIOM ➔ ATEM ➔ QSC (6 switches) ➔ House AMP ➔ ATLAS ➔ Wireless Rack ➔ Board`

