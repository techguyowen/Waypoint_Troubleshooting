// Soundboard, Stage Patch, AV System & Troubleshooting Data
const AV_DATA = {
  // Wi-Fi Credentials for Waypoint Guest
  wifiCredentials: {
    ssid: "Waypoint Guest",
    password: "Psalm27:4!",
    qrString: "WIFI:S:Waypoint Guest;T:WPA;P:Psalm27:4!;;"
  },

  // 1. Stage Boxes & Physical Tie-Lines
  stageBoxes: [
    {
      id: "far-left",
      name: "Far Left Box",
      location: "Stage Far Left",
      color: "#3b82f6", // blue
      inputs: [
        {
          boxInput: 1,
          destination: "Si Impact Local Preamp: Input 1",
          soundboardInput: 1,
          label: "Violin",
          faderLayer: "A",
          faderNum: 19,
          scribble: "Violin <1>",
          notes: "Soft-patched to Layer A, Fader 19. Also routed to Mix 6 (Flex 1)."
        }
      ],
      networkPorts: [
        { port: "Aviom 1", type: "Aviom / Network", notes: "Standard network tie-line" }
      ]
    },
    {
      id: "front-left",
      name: "Front Left Box (Vocal 1)",
      location: "Stage Front Left",
      color: "#10b981", // emerald
      inputs: [
        {
          boxInput: 2,
          destination: "Si Impact Local Preamp: Input 2",
          soundboardInput: 2,
          label: "V1 (Vocal 1)",
          faderLayer: "A",
          faderNum: 1,
          scribble: "Voc 1",
          notes: "Lead vocal 1 position"
        },
        {
          boxInput: 3,
          destination: "Si Impact Local Preamp: Input 3",
          soundboardInput: 3,
          label: "Aux 1 (Guest / Utility)",
          faderLayer: "B",
          faderNum: 17,
          scribble: "Aux 1",
          notes: "Primary guest instrument port (Cello, Flute, Horn, etc.)"
        },
        {
          boxInput: 4,
          destination: "Si Impact Local Preamp: Input 4",
          soundboardInput: 4,
          label: "Stomp",
          faderLayer: "B",
          faderNum: 18,
          scribble: "Stomp",
          notes: "Front left stomp box input"
        },
        {
          boxInput: 5,
          destination: "Si Impact Local Preamp: Input 5",
          soundboardInput: 5,
          label: "Choir L",
          faderLayer: "B",
          faderNum: 14,
          scribble: "Choir L",
          notes: "Label tape is below the port on stage box"
        },
        {
          boxInput: 6,
          destination: "Si Impact Local Preamp: Input 6",
          soundboardInput: 6,
          label: "Choir R",
          faderLayer: "B",
          faderNum: 15,
          scribble: "Choir R",
          notes: "Label tape is below the port on stage box"
        }
      ],
      networkPorts: [
        { port: "Aviom 5", type: "Aviom / Network", notes: "Ethercon port labeled 5" }
      ]
    },
    {
      id: "back-left",
      name: "Back Left Box (Keyboard)",
      location: "Stage Back Left (Keyboard Station)",
      color: "#8b5cf6", // violet
      inputs: [
        {
          boxInput: 7,
          destination: "Si Impact Local Preamp: Input 7",
          soundboardInput: 7,
          label: "Keys R",
          faderLayer: "A",
          faderNum: 9,
          scribble: "KeysR<8>",
          notes: "Keyboard Right channel"
        },
        {
          boxInput: 8,
          destination: "Si Impact Local Preamp: Input 8",
          soundboardInput: 8,
          label: "Keys L",
          faderLayer: "A",
          faderNum: 8,
          scribble: "KeysL<7>",
          notes: "Keyboard Left channel"
        },
        {
          boxInput: 9,
          destination: "Si Impact Local Preamp: Input 9",
          soundboardInput: 9,
          label: "Folk",
          faderLayer: "B",
          faderNum: 18,
          scribble: "Folk",
          notes: "Matches Folk input on back left stage box"
        }
      ],
      networkPorts: [
        { port: "Aviom 6", type: "Aviom / Network", notes: "Ethercon port" },
        { port: "Aviom 7", type: "Aviom / Network", notes: "Ethercon port" }
      ]
    },
    {
      id: "center-front",
      name: "Center Front Box (Leader)",
      location: "Stage Center Front",
      color: "#f59e0b", // amber
      inputs: [
        {
          boxInput: 10,
          destination: "Si Impact Local Preamp: Input 10",
          soundboardInput: 10,
          label: "V2 (Worship Leader Vocal)",
          faderLayer: "A",
          faderNum: 2,
          scribble: "Voc 2",
          notes: 'Worship leader vocal. Tape on fader: "Click / Front: 12 / Drums: 20"'
        },
        {
          boxInput: 11,
          destination: "Si Impact Local Preamp: Input 11",
          soundboardInput: 11,
          label: "E.G. (Electric Guitar 1)",
          faderLayer: "A",
          faderNum: 10,
          scribble: "Elec1<11>",
          notes: "Electric Guitar 1 from center stage"
        },
        {
          boxInput: 12,
          destination: "Si Impact Local Preamp: Input 12",
          soundboardInput: 12,
          label: "Click (Front Click)",
          faderLayer: "B",
          faderNum: 2,
          scribble: "Click",
          notes: "Front Stage Click Track feed. Patched to Layer B Fader 2 when using front click."
        },
        {
          boxInput: 13,
          destination: "Si Impact Local Preamp: Input 13",
          soundboardInput: 13,
          label: "AG2 (Acoustic Guitar 2)",
          faderLayer: "A",
          faderNum: 7,
          scribble: "Acou2<13>",
          notes: "Acoustic Guitar 2"
        }
      ],
      networkPorts: [
        { port: "Aviom 4", type: "Aviom / Network", notes: "Ethercon port for Worship Leader" }
      ]
    },
    {
      id: "front-right",
      name: "Front Right Box",
      location: "Stage Front Right",
      color: "#ec4899", // pink
      inputs: [
        {
          boxInput: 14,
          destination: "Si Impact Local Preamp: Input 14",
          soundboardInput: 14,
          label: "V3 (Vocal 3)",
          faderLayer: "A",
          faderNum: 3,
          scribble: "Voc 3",
          notes: "Vocalist 3"
        },
        {
          boxInput: 15,
          destination: "Si Impact Local Preamp: Input 15",
          soundboardInput: 15,
          label: "AG1 (Acoustic Guitar 1)",
          faderLayer: "A",
          faderNum: 6,
          scribble: "Acou1<15>",
          notes: "Acoustic Guitar 1"
        },
        {
          boxInput: 16,
          destination: "Si Impact Local Preamp: Input 16",
          soundboardInput: 16,
          label: "MD (Music Director)",
          faderLayer: "B",
          faderNum: 20,
          scribble: "M.D.",
          notes: "Music Director mic / cue"
        },
        {
          boxInput: 17,
          destination: "Si Impact Local Preamp: Input 17",
          soundboardInput: 17,
          label: "Djembe / Unlabeled",
          faderLayer: "A",
          faderNum: 20,
          scribble: "Djem<17>",
          notes: "Overlaps with Drum Stagebox plate number. Soft-patched to Djembe."
        },
        {
          boxInput: 18,
          destination: "Si Impact Local Preamp: Input 18",
          soundboardInput: 18,
          label: "Cajon / Stomp / Unlabeled",
          faderLayer: "A",
          faderNum: 21,
          scribble: "CjnStmp18",
          notes: "Overlaps with Drum Stagebox plate number. Soft-patched to Cajon/Stomp."
        }
      ],
      networkPorts: [
        { port: "Aviom 3", type: "Aviom / Network", notes: "Loose black Ethernet keystone jack" }
      ]
    },
    {
      id: "far-right",
      name: "Far Right Box",
      location: "Stage Far Right",
      color: "#06b6d4", // cyan
      inputs: [
        {
          boxInput: 22,
          destination: "Si Impact Local Preamp: Input 22",
          soundboardInput: 22,
          label: "EG2 (Electric Guitar 2)",
          faderLayer: "A",
          faderNum: 11,
          scribble: "Elec2<22>",
          notes: "Electric Guitar 2"
        },
        {
          boxInput: 23,
          destination: "Si Impact Local Preamp: Input 23",
          soundboardInput: 23,
          label: "V4 (Vocal 4)",
          faderLayer: "A",
          faderNum: 4,
          scribble: "Voc4<23>",
          notes: "Vocal 4 position"
        }
      ],
      networkPorts: [
        { port: "Aviom 2", type: "Aviom / Network", notes: "Standard network tie-line" }
      ]
    },
    {
      id: "drum-cage-left",
      name: "Drum Cage (Left Plate)",
      location: "Stage Back Right - Inside Drum Cage (Left Wall)",
      color: "#ef4444", // red
      inputs: [
        {
          boxInput: 19,
          destination: "Si Impact Local Preamp: Input 19",
          soundboardInput: 19,
          label: "Pad (Electronic Drum / Synth Pad)",
          faderLayer: "B",
          faderNum: 16,
          scribble: "Pad",
          notes: "Drum pad / SPD-SX input"
        },
        {
          boxInput: 20,
          destination: "Si Impact Local Preamp: Input 20",
          soundboardInput: 20,
          label: "Click (Drum Click)",
          faderLayer: "B",
          faderNum: 2,
          scribble: "Click",
          notes: "Drummer click track feed. Patched to Layer B Fader 2 when using drum click."
        },
        {
          boxInput: 21,
          destination: "Si Impact Local Preamp: Input 21",
          soundboardInput: 21,
          label: "(Unlabeled Spare)",
          faderLayer: "B",
          faderNum: 21,
          scribble: "Drum talk back / Spare",
          notes: "Console local input 21"
        }
      ],
      networkPorts: [
        { port: "Aviom 8", type: "Aviom / Network", notes: "Located on back wall panel below Pad" }
      ]
    },
    {
      id: "drum-cage-right",
      name: "Drum Cage (Right Plate - Mini Stagebox 32i)",
      location: "Stage Back Right - Inside Drum Cage (Right Wall)",
      color: "#14b8a6", // teal
      badge: "MADI Digital Snake",
      description: "Bypasses console analog inputs entirely. Routes via multi-colored snake directly into Mini Stagebox 32i (MADI inputs).",
      inputs: [
        { boxInput: 17, destination: "Mini Stagebox 32i: Input 17", cableColor: "Brown Cable", colorHex: "#8B4513", label: "Drum Mic / In 17" },
        { boxInput: 18, destination: "Mini Stagebox 32i: Input 18", cableColor: "Red Cable", colorHex: "#EF4444", label: "Drum Mic / In 18" },
        { boxInput: 19, destination: "Mini Stagebox 32i: Input 19", cableColor: "Orange Cable", colorHex: "#F97316", label: "Drum Mic / In 19" },
        { boxInput: 20, destination: "Mini Stagebox 32i: Input 20", cableColor: "Yellow Cable", colorHex: "#EAB308", label: "Drum Mic / In 20" },
        { boxInput: 21, destination: "Mini Stagebox 32i: Input 21", cableColor: "Green Cable", colorHex: "#22C55E", label: "Drum Mic / In 21" },
        { boxInput: 22, destination: "Mini Stagebox 32i: Input 22", cableColor: "Blue Cable", colorHex: "#3B82F6", label: "Drum Mic / In 22" },
        { boxInput: 23, destination: "Mini Stagebox 32i: Input 23", cableColor: "Purple Cable", colorHex: "#A855F7", label: "Drum Mic / In 23" },
        { boxInput: 24, destination: "Mini Stagebox 32i: Input 24", cableColor: "Grey Cable", colorHex: "#9CA3AF", label: "Drum Mic / In 24" }
      ],
      networkPorts: []
    }
  ],

  // 2. Console Fader Layers (Soundcraft Si Impact)
  consoleLayers: {
    A: {
      name: "Layer A (Main Instruments & Primary Vocals)",
      faders: [
        { fader: 1, scribble: "Voc 1", source: "Vocal 1", category: "vocal", patch: "Front Left Box (Input 2)" },
        { fader: 2, scribble: "Voc 2", source: "Vocal 2 (Worship Leader)", category: "vocal", patch: "Center Front Box (Input 10)", note: 'Tape: "Click / Front: 12 / Drums: 20"' },
        { fader: 3, scribble: "Voc 3", source: "Vocal 3", category: "vocal", patch: "Front Right Box (Input 14)" },
        { fader: 4, scribble: "Voc4<23>", source: "Vocal 4", category: "vocal", patch: "Far Right Box (Input 23)" },
        { fader: 5, scribble: "Bass", source: "Bass Guitar", category: "instrument", patch: "Local Input 5 / Stage", subBus: "Mix 8 (Sub)" },
        { fader: 6, scribble: "Acou1<15>", source: "Acoustic Guitar 1", category: "instrument", patch: "Front Right Box (Input 15)" },
        { fader: 7, scribble: "Acou2<13>", source: "Acoustic Guitar 2", category: "instrument", patch: "Center Front Box (Input 13)" },
        { fader: 8, scribble: "KeysL<7>", source: "Keyboard Left", category: "instrument", patch: "Back Left Box (Input 7)", subBus: "Mix 8 (Sub)" },
        { fader: 9, scribble: "KeysR<8>", source: "Keyboard Right", category: "instrument", patch: "Back Left Box (Input 8)", subBus: "Mix 8 (Sub)" },
        { fader: 10, scribble: "Elec1<11>", source: "Electric Guitar 1", category: "instrument", patch: "Center Front Box (Input 11)" },
        { fader: 11, scribble: "Elec2<22>", source: "Electric Guitar 2", category: "instrument", patch: "Far Right Box (Input 22)" },
        { fader: 12, scribble: "OH L", source: "Drum - Overhead Left", category: "drum", patch: "Mini Stagebox / Local", mixBus: "Mix 13 (Stereo Drums)" },
        { fader: 13, scribble: "OH R", source: "Drum - Overhead Right", category: "drum", patch: "Mini Stagebox / Local", mixBus: "Mix 13 (Stereo Drums)" },
        { fader: 14, scribble: "Kick", source: "Drum - Kick", category: "drum", patch: "Mini Stagebox / Local", mixBus: "Mix 13 (Stereo Drums)", subBus: "Mix 8 (Sub)" },
        { fader: 15, scribble: "Snare", source: "Drum - Snare", category: "drum", patch: "Mini Stagebox / Local", mixBus: "Mix 13 (Stereo Drums)", subBus: "Mix 8 (Sub)" },
        { fader: 16, scribble: "Hi tom", source: "Drum - High Tom", category: "drum", patch: "Mini Stagebox / Local", mixBus: "Mix 13 (Stereo Drums)" },
        { fader: 17, scribble: "Mid tom", source: "Drum - Mid Tom", category: "drum", patch: "Mini Stagebox / Local", mixBus: "Mix 13 (Stereo Drums)" },
        { fader: 18, scribble: "Low tom", source: "Drum - Low Tom", category: "drum", patch: "Mini Stagebox / Local", mixBus: "Mix 13 (Stereo Drums)", subBus: "Mix 8 (Sub)" },
        { fader: 19, scribble: "Violin <1>", source: "Violin", category: "instrument", patch: "Far Left Box (Input 1)", flexBus: "Mix 6 (Flex 1)" },
        { fader: 20, scribble: "Djem<17>", source: "Djembe", category: "percussion", patch: "Front Right Box (Input 17)" },
        { fader: 21, scribble: "CjnStmp18", source: "Cajon / Stomp Box", category: "percussion", patch: "Front Right Box (Input 18)", subBus: "Mix 8 (Sub)" },
        { fader: 22, scribble: "PC", source: "PC Audio", category: "playback", patch: "Sound Booth Computer Line In" },
        { fader: 23, scribble: "Mac", source: "Mac Audio", category: "playback", patch: "Mac Presentation Computer Line In" },
        { fader: 24, scribble: "Foyer", source: "Foyer Audio / Mic", category: "utility", patch: "Foyer Preamp / Feed" }
      ]
    },
    B: {
      name: "Layer B (Wireless Mics, Clicks, Choir & Utility)",
      faders: [
        { 
          fader: 1, 
          scribble: "Ambient", 
          source: "Ambient / Room Mic", 
          category: "utility", 
          patch: "Sanctuary Ambience",
          destination: "Mix 14 (Live Stream Broadcast) ONLY",
          houseRouting: false,
          note: "CRITICAL: Ambient room mic is routed ONLY to Mix 14 (Live Stream) for room/congregation atmosphere. NEVER route to Mix 12 (House) or Master LR to prevent feedback/echo."
        },
        { 
          fader: 2, 
          scribble: "Click", 
          source: "Click Track", 
          category: "click", 
          patch: "Input 12 (Front Click) OR Input 20 (Drum Click)", 
          destination: "Aviom In-Ear Monitors ONLY",
          houseRouting: false,
          note: 'CRITICAL: Click track is routed ONLY to Aviom In-Ears. NEVER route to Mix 12 (House) or Master LR so the congregation does not hear the metronome.' 
        },
        { fader: 3, scribble: "Pastor", source: "Pastor Mic", category: "vocal", patch: "Wireless Receiver" },
        { fader: 4, scribble: "Wht Mic", source: "White Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 5, scribble: "Blu Mic", source: "Blue Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 6, scribble: "Headset", source: "Headset Mic", category: "vocal", patch: "Wireless Headset Receiver" },
        { fader: 7, scribble: "(Blank)", source: "(Blank / Off)", category: "blank", patch: "-" },
        { fader: 8, scribble: "GRAY MIC", source: "Gray Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 9, scribble: "RED MIC", source: "Red Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 10, scribble: "ORANGE M", source: "Orange Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 11, scribble: "YEL-GRE", source: "Yellow-Green Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 12, scribble: "GREEN MIC", source: "Green Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 13, scribble: "YELLOWM", source: "Yellow Wireless Mic", category: "vocal", patch: "Wireless Mic Rack" },
        { fader: 14, scribble: "Choir L", source: "Choir Left Mic", category: "choir", patch: "Front Left Box (Input 5)" },
        { fader: 15, scribble: "Choir R", source: "Choir Right Mic", category: "choir", patch: "Front Left Box (Input 6)" },
        { fader: 16, scribble: "Pad", source: "Synth / Drum Pad", category: "instrument", patch: "Drum Cage Left Plate (Input 19)", subBus: "Mix 8 (Sub)" },
        { fader: 17, scribble: "Aux 1", source: "Guest Instrument / Utility", category: "utility", patch: "Front Left Box (Input 3)", note: "Default soft patch for guest instruments (Cello, etc.)" },
        { fader: 18, scribble: "Folk", source: "Folk / Stomp Box", category: "instrument", patch: "Back Left Box (Input 9) OR Front Left (Input 4)" },
        { fader: 19, scribble: "Talk back", source: "Talkback Mic", category: "utility", patch: "Sound Booth Talkback" },
        { fader: 20, scribble: "M.D.", source: "Music Director Talkback", category: "utility", patch: "Front Right Box (Input 16)" },
        { fader: 21, scribble: "Drum talk", source: "Drum Talkback Mic", category: "utility", patch: "Drum Cage (Input 21)" },
        { fader: 22, scribble: "(Blank)", source: "(Blank / Off)", category: "blank", patch: "-" },
        { fader: 23, scribble: "(Blank)", source: "(Blank / Off)", category: "blank", patch: "-" },
        { fader: 24, scribble: "(Blank)", source: "(Blank / Off)", category: "blank", patch: "-" }
      ]
    },
    C: {
      name: "Layer C (VCAs, DAW Reaper Routing & FX Returns)",
      faders: [
        { fader: 1, scribble: "VOCALS", source: "Vocals VCA Master", category: "vca", type: "VCA Group" },
        { fader: 2, scribble: "BAND", source: "Band VCA Master", category: "vca", type: "VCA Group" },
        { fader: 3, scribble: "DRUMS", source: "Drums VCA Master", category: "vca", type: "VCA Group" },
        { fader: 4, scribble: "COMPUTER", source: "Computer Audio VCA", category: "vca", type: "VCA Group" },
        { fader: 5, scribble: "Pastor/Etc", source: "Pastor / Spoken Word VCA", category: "vca", type: "VCA Group" },
        { fader: 6, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 7, scribble: "Toms", source: "Toms VCA Master", category: "vca", type: "VCA Group" },
        { fader: 8, scribble: "Overheads", source: "Overheads VCA Master", category: "vca", type: "VCA Group" },
        { fader: 9, scribble: "Musicians&L", source: "Musicians & Leaders VCA", category: "vca", type: "VCA Group" },
        { fader: 10, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 11, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 12, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 13, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 14, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 15, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 16, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 17, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 18, scribble: "To Reaper", source: "Routing Send to DAW", category: "daw", note: "Feeds Reaper DAW on Booth PC" },
        { fader: 19, scribble: "From Reap", source: "Routing Return from DAW", category: "daw", note: "Audio return from Reaper DAW / Wavecast" },
        { fader: 20, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 21, scribble: "Voc Reverb", source: "FX Return 1 (Vocal Reverb)", category: "fx", type: "Stereo FX Return" },
        { fader: 22, scribble: "Drum Plate", source: "FX Return 2 (Drum Plate Reverb)", category: "fx", type: "Stereo FX Return" },
        { fader: 23, scribble: "SnareVerb*", source: "FX Return 3 (Snare Reverb)", category: "fx", type: "Stereo FX Return" },
        { fader: 24, scribble: "Acou/Pad", source: "FX Return 4 (Acoustic/Pad FX)", category: "fx", type: "Stereo FX Return" }
      ]
    },
    D: {
      name: "Layer D (Aviom Bus Masters, House/Drums Masters & Livestream)",
      faders: [
        { fader: 1, scribble: "DrumsAvio", source: "Drums Aviom Mix (Mix 1)", category: "mixbus", destination: "Aviom Monitor System" },
        { fader: 2, scribble: "BassAviom", source: "Bass Aviom Mix (Mix 2)", category: "mixbus", destination: "Aviom Monitor System", note: 'Tape: "Click/Front LR/DrumsL&R"' },
        { fader: 3, scribble: "TalkAviom", source: "Talkback Aviom Mix (Mix 3)", category: "mixbus", destination: "Aviom Monitor System" },
        { fader: 4, scribble: "KeysAviom", source: "Keys Aviom Mix (Mix 4)", category: "mixbus", destination: "Aviom Monitor System" },
        { fader: 5, scribble: "ElecAviom", source: "Electric Guitar Aviom Mix (Mix 5)", category: "mixbus", destination: "Aviom Monitor System" },
        { fader: 6, scribble: "Flex1", source: "Flex / Utility Mix 1 (Mix 6)", category: "mixbus", destination: "Violin / Guest Aviom Feed" },
        { fader: 7, scribble: "Flex2", source: "Flex / Utility Mix 2 (Mix 7)", category: "mixbus", destination: "Utility / Flex Mix" },
        { fader: 8, scribble: "Sub", source: "Subwoofer Subgroup (Mix 8)", category: "subgroup", destination: "Sanctuary Subwoofers", note: "Contains: Bass, Keys, Kick, Snare, Low Tom, Cajon, Pad" },
        { fader: 9, scribble: "V1/V2Avio", source: "Vocals 1 & 2 Aviom Mix (Mix 9)", category: "mixbus", destination: "Aviom Monitor System" },
        { fader: 10, scribble: "V3/V4Avio", source: "Vocals 3 & 4 Aviom Mix (Mix 10)", category: "mixbus", destination: "Aviom Monitor System" },
        { fader: 11, scribble: "Acou1/2Av", source: "Acoustic Guitars 1 & 2 Aviom Mix (Mix 11)", category: "mixbus", destination: "Aviom Monitor System" },
        { fader: 12, scribble: "HouseSter", source: "Stereo House Mix (Mix 12)", category: "mainbus", destination: "Sanctuary Main Speakers (Non-Drums)", note: "Assigned to Master LR via LR button" },
        { fader: 13, scribble: "DrumsHous", source: "Stereo Drums House Mix (Mix 13)", category: "mainbus", destination: "Sanctuary Main Speakers (Drums Only)", note: "Assigned to Master LR via LR button" },
        { fader: 14, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 15, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 16, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 17, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 18, scribble: "(Blank)", source: "(Blank / Off)", category: "blank" },
        { fader: 19, scribble: "na", source: "N/A", category: "blank" },
        { fader: 20, scribble: "chr inpt L", source: "Choir Input Left", category: "choir", destination: "Choir Processing Bus" },
        { fader: 21, scribble: "chr inpt R", source: "Choir Input Right", category: "choir", destination: "Choir Processing Bus" },
        { fader: 22, scribble: "LIVESTREA", source: "Livestream Master Mix (Mix 14)", category: "broadcast", destination: "OBS / Broadcast Output", note: "Mix 14 Master Send" },
        { fader: 23, scribble: "Stream L", source: "Stream Left Direct Send", category: "broadcast", destination: "Broadcast Feed L" },
        { fader: 24, scribble: "Stream R", source: "Stream Right Direct Send", category: "broadcast", destination: "Broadcast Feed R" }
      ]
    }
  },

  // 3. Complete Mix Bus Routing & Master LR System
  mixBuses: [
    {
      busNumber: 1,
      tapeLabel: "Drum Aviom",
      function: "Personal Monitoring",
      destination: "Drum Aviom monitor mix (Mix 1)",
      description: "Dedicated monitor mix feeding the drummer's personal Aviom station."
    },
    {
      busNumber: 2,
      tapeLabel: "Bass Aviom",
      function: "Personal Monitoring",
      destination: "Bass Aviom monitor mix (Mix 2)",
      description: "Dedicated monitor mix for the bass guitarist."
    },
    {
      busNumber: 3,
      tapeLabel: "Talk Aviom",
      function: "Personal Monitoring",
      destination: "Talkback Aviom monitor mix (Mix 3)",
      description: "Carries sound booth & leader talkback lines to all in-ear monitors."
    },
    {
      busNumber: 4,
      tapeLabel: "Keys Aviom",
      function: "Personal Monitoring",
      destination: "Keys Aviom monitor mix (Mix 4)",
      description: "Dedicated monitor mix for keyboard players."
    },
    {
      busNumber: 5,
      tapeLabel: "Elec. Aviom",
      function: "Personal Monitoring",
      destination: "Electric Guitar Aviom monitor mix (Mix 5)",
      description: "Dedicated monitor mix for electric guitarists."
    },
    {
      busNumber: 6,
      tapeLabel: "Flex 1",
      function: "Utility / In-Ear Feed",
      destination: "Utility / Flex mix (Contains: Violin / Guest)",
      description: "Handles Violin and guest instruments (e.g., Cello) monitor routing."
    },
    {
      busNumber: 7,
      tapeLabel: "Flex 2",
      function: "Utility Mix",
      destination: "Utility / Flex mix 2",
      description: "Secondary flexible utility send for special service elements."
    },
    {
      busNumber: 8,
      tapeLabel: "Sub",
      function: "Low-End Management",
      destination: "Dedicated Subwoofer Bus",
      description: "Subwoofer group. CONTAINS: Bass, Keys, Kick, Snare, Low Tom, Cajon/Stomp (Cjn), Pad. (Do NOT route general vocals or high instruments here)."
    },
    {
      busNumber: 9,
      tapeLabel: "V1/V2 Aviom",
      function: "Personal Monitoring",
      destination: "Vocals 1 & 2 Aviom monitor mix",
      description: "Monitor feed for lead vocalists 1 and 2."
    },
    {
      busNumber: 10,
      tapeLabel: "V3/V4 Aviom",
      function: "Personal Monitoring",
      destination: "Vocals 3 & 4 Aviom monitor mix",
      description: "Monitor feed for vocalists 3 and 4."
    },
    {
      busNumber: 11,
      tapeLabel: "Acou1 Acou2 Aviom",
      function: "Personal Monitoring",
      destination: "Acoustic Guitars 1 & 2 Aviom monitor mix",
      description: "Monitor feed for acoustic guitarists."
    },
    {
      busNumber: 12,
      tapeLabel: "Stereo House",
      function: "Primary Sanctuary Speaker Output",
      destination: "Main House Mix (Non-Drums)",
      description: "Routes general music & speech to main sanctuary speakers. Assigned to Master LR via 'LR' button. (STRICT RULE: Click Track and Ambient Mics NEVER route to Mix 12 / House)."
    },
    {
      busNumber: 13,
      tapeLabel: "Stereo Drums House",
      function: "Primary Sanctuary Speaker Output",
      destination: "Main House Mix (Drums Only)",
      description: "Routes ALL drum-related inputs to main sanctuary speakers. Assigned to Master LR via 'LR' button."
    },
    {
      busNumber: 14,
      tapeLabel: "Live Stream",
      function: "Broadcast Output",
      destination: "Livestream Broadcast Mix (OBS / Reaper)",
      description: "Independent broadcast mix feeding the live stream feed and assistive listening Reaper input. (NOTE: Includes Ambient room/crowd mics for congregation atmosphere, while excluding Click Track)."
    }
  ],

  masterOutputNotes: {
    title: "Master Output Routing (LR Bus & AES Out 01)",
    details: "Individual channels are routed to subgroup mix buses (Mix 12 Stereo House & Mix 13 Stereo Drums House), which are assigned to Master LR via the 'LR' button. The physical main sanctuary output is sent via AES Out 01 digital output."
  },

  // 3b. Complete System Architecture & Engineering Specifications
  systemArchitecture: {
    houseRouting: {
      title: "House & Output Routing Architecture",
      icon: "🔊",
      points: [
        {
          label: "Bus-to-Master Routing",
          desc: "In standard workflow, input channels do not directly feed the physical Left/Right main outputs. They route to subgroup mix buses—specifically <strong>Mix 12 (Stereo House)</strong> for non-drums and <strong>Mix 13 (Stereo Drums House)</strong>. These buses are then assigned to the main LR bus via the physical <strong>'LR'</strong> button to the left of the touchscreen."
        },
        {
          label: "Physical Main Output (AES Out 01)",
          desc: "The console's master stereo audio is physically sent via the <strong>AES Out 01</strong> digital output rather than standard local analogue XLR 15/16 outputs."
        }
      ]
    },
    subwooferManagement: {
      title: "Subwoofer & Low-End Management (Aux-Fed Sub)",
      icon: "🔉",
      points: [
        {
          label: "Aux-Fed Sub Architecture",
          desc: "Low frequencies are isolated using <strong>Mix 8 (Sub)</strong> rather than an internal crossover or master mono send."
        },
        {
          label: "Strictly Assigned Sub Sources (7)",
          desc: "Only send low-frequency heavy channels into Mix 8: <strong>Bass Guitar, Keys, Kick Drum, Snare Drum, Low / Floor Tom, Cajon / Stomp Box, and Synth Pad</strong>."
        },
        {
          label: "Excluded from Sub",
          desc: "General vocals, acoustic guitars, speech mics, and ambient mics MUST NOT be assigned to Mix 8."
        }
      ]
    },
    stageSplit: {
      title: "Stage Box vs. Local Preamp Split",
      icon: "🔌",
      points: [
        {
          label: "Dual Routing Paths",
          desc: "The system utilizes a hybrid split between local analog tie-lines and digital MADI lines."
        },
        {
          label: "Local Analog Inputs (1–23)",
          desc: "Standard stage boxes (Far Left, Front Left, Center Front, Front Right, Far Right, and Drum Left Plate) map directly 1:1 to local Si Impact preamps <strong>1–23</strong>."
        },
        {
          label: "Drum Cage Digital Snake (MADI 17–24)",
          desc: "The wall plate on the right side of the drum cage bypasses local analog preamps entirely and feeds directly into the <strong>Mini Stagebox 32i</strong> via the multi-color MADI snake (Inputs 17–24: Brown, Red, Orange, Yellow, Green, Blue, Purple, Grey)."
        }
      ]
    },
    aviomMapping: {
      title: "Aviom Personal Monitor Mapping",
      icon: "🎧",
      points: [
        {
          label: "Dedicated Aviom Mix Buses (Mixes 1–5 & 9–11)",
          desc: "<strong>Mix 1:</strong> Drums • <strong>Mix 2:</strong> Bass • <strong>Mix 3:</strong> Talkback • <strong>Mix 4:</strong> Keys • <strong>Mix 5:</strong> Electric Guitar • <strong>Mix 9:</strong> Vocals 1 & 2 • <strong>Mix 10:</strong> Vocals 3 & 4 • <strong>Mix 11:</strong> Acoustic Guitars 1 & 2."
        },
        {
          label: "Flex Sends (Mix 6 & 7)",
          desc: "<strong>Mix 6 (Flex 1)</strong> handles guest instruments/utility monitoring (such as Violin / Cello), while <strong>Mix 7 (Flex 2)</strong> remains an open utility send."
        }
      ]
    },
    broadcastFeed: {
      title: "Live Stream & Broadcast Feed (Mix 14)",
      icon: "📡",
      points: [
        {
          label: "Dedicated Stream Mix",
          desc: "<strong>Mix 14</strong> functions as the independent broadcast mix feeding the live stream audio and Reaper DAW."
        },
        {
          label: "tOTEM Follow Mode Rule",
          desc: "Any new stage source or guest input must be manually fed into Mix 14 via <strong>tOTEM follow mode</strong> (press MIX 14 button ➔ raise fader) in addition to Mix 12/13."
        },
        {
          label: "Ambient Room Mics Included",
          desc: "Mix 14 includes ambient congregation room mics for live broadcast atmosphere (which are excluded from the sanctuary house mix)."
        }
      ]
    },
    dawAndFx: {
      title: "DAW & Lexicon FX Routing (Layer C)",
      icon: "🎛️",
      points: [
        {
          label: "DAW Tracking",
          desc: "Layer C contains dedicated routing channels to and from Reaper: <strong>Fader 18: To Reaper</strong> (DAW Send) and <strong>Fader 19: From Reap</strong> (DAW Return)."
        },
        {
          label: "Internal Lexicon FX Returns (Faders 21–24)",
          desc: "Faders 21–24 on Layer C control internal stereo Lexicon processor returns: <strong>Fader 21: Vocal Reverb</strong> • <strong>Fader 22: Drum Plate</strong> • <strong>Fader 23: Snare Verb</strong> • <strong>Fader 24: Acoustic / Pad Reverb</strong>."
        }
      ]
    },
    embraceExtender: {
      title: "Embrace Room TV & Video Extender System",
      icon: "📺",
      points: [
        {
          label: "Dedicated HDMI-over-Ethernet System",
          desc: "The Embrace Conference Room TV receives its video feed via a dedicated HDMI-over-Ethernet extender system transmitting high-definition video from the sound booth across Cat6 network lines."
        },
        {
          label: "Transmitter (TX) — Sound Booth",
          desc: "Located <strong>underneath the desk inside the main sound booth</strong>. Receives HDMI video from the presentation/broadcast computer and sends it over Ethernet to the side room."
        },
        {
          label: "Receiver (RX) — Behind TV",
          desc: "A small receiver box mounted <strong>directly behind the Embrace Room TV</strong>, connected to HDMI (out to TV), Ethernet (input from booth), and power."
        },
        {
          label: "Power Source (Nest Camera Outlet Timer)",
          desc: "The receiver is powered by the <strong>same wall outlet timer that controls the room's Nest camera</strong>. If the timer is inactive or off, both the Nest camera and TV receiver lose power."
        }
      ]
    },
    breakerPanels: {
      title: "Sound Booth Electrical Panels (Panel S & Lighting Panel)",
      icon: "⚡",
      points: [
        {
          label: "Gray Metal Electrical Panel (Panel S)",
          desc: "Located inside the back sound booth. Supplies AC power to stage floor pockets, platform receptacles, sound booth quad outlets, sanctuary displays, projectors, and subwoofers."
        },
        {
          label: "Large Black Lighting Panel",
          desc: "Located directly next to Panel S. Dedicated exclusively to sanctuary and stage lighting control."
        },
        {
          label: "Stage Floor Pocket Reset (Breakers 4 & 6)",
          desc: "If musician pedalboards or stage floor pockets lose AC power, locate <strong>breakers 4 and 6 ('Floor Recept. Stage')</strong> in Panel S and cycle them OFF and back ON."
        },
        {
          label: "Sound Booth Lights (Breaker 9)",
          desc: "If sound booth lights do not turn on, check <strong>breaker 9 ('Sound Rm Lights')</strong> in Panel S."
        }
      ]
    }
  },

  // 4. Interactive Guided Troubleshooting Scenarios
  troubleshootingScenarios: [
    {
      id: "sanctuary-tvs",
      title: "Front Sanctuary TVs Display Issues (Blank / No Signal)",
      icon: "tv",
      category: "Video / Proclaim / TVs",
      severity: "high",
      summary: "Follow these sequential steps from the 90% quick fix (ceiling splitter) to source & TV input checks.",
      phases: [
        {
          phase: "Phase 1: Primary Hardware Reset",
          badge: "Resolves 90% of issues",
          stepNumber: 1,
          title: "Restart the Ceiling HDMI Splitter",
          location: "Choir Closets: Above ceiling tiles behind right side of stage-left choir closet.",
          actionSteps: [
            "Locate the power cable for the HDMI splitter above the ceiling tiles.",
            "Unplug it completely from the power source.",
            "Wait 10 to 15 seconds to ensure residual power drains completely.",
            "Plug the power cable securely back in. Allow 15-30s for the splitter to boot and TVs to handshake."
          ],
          tip: "This is the most common single failure point when sanctuary screens go black."
        },
        {
          phase: "Phase 2: Source and Power Verification",
          badge: "Mac & Booth Power",
          stepNumber: 2,
          title: "Verify Mac Presentation Computer Connections & Under-Desk Splitter",
          location: "Sound Booth: Behind the main presentation Mac & under desk.",
          actionSteps: [
            "Inspect the back of the Mac: Ensure the HDMI cable is pushed all the way firmly into its port (not hanging loosely).",
            "Locate the power strip directly behind the Mac: Confirm it is switched ON (the switch light must be illuminated).",
            "Locate the secondary HDMI splitter underneath the main desk inside the booth. Unplug power cable for 10 seconds and replug to power cycle it."
          ]
        },
        {
          phase: "Phase 3: Proclaim 'On Air' & TV Remote Input",
          badge: "Proclaim & TV Remote",
          stepNumber: 3,
          title: "Verify Proclaim 'On Air' & TV Remote Input (HDMI 1)",
          location: "Sound Booth Presentation Mac & Sanctuary TVs",
          actionSteps: [
            "Open Proclaim presentation software on the Mac: Verify the presentation is active and set to red <strong>'On Air'</strong>.",
            "Confirm both front TVs are physically turned ON (no red standby dot).",
            "<strong>TV Remote Check:</strong> Using the TV remote, verify the TV input is set to <strong>HDMI 1</strong> (remote clicks or power glitches frequently reset TVs to HDMI 2 or TV Tuner)."
          ],
          tip: "The system relies on direct HDMI runs. Power glitches frequently reset TVs back to HDMI 2."
        }
      ]
    },
    {
      id: "embrace-obs",
      isEmbrace: true,
      title: "Embrace Room TV & Video Extender ('No Signal' / Blank)",
      icon: "tv",
      category: "Embrace Group / TV & Video Extender",
      severity: "medium",
      summary: "Troubleshooting guide for the Embrace Conference Room TV HDMI extender system (RX/TX), Nest camera outlet timer, and Sanctuary AV Controller 1-click screen restore.",
      phases: [
        {
          phase: "Phase 1: 1-Click Screen Restore & Receiver Check",
          badge: "1-Click Quick Fix",
          stepNumber: 1,
          title: "Use AV Controller 'Reopen Screen' & Check Behind-TV Receiver",
          location: "Sound Booth (Port 3050) & Embrace Conference Room (Behind TV)",
          actionSteps: [
            "<strong>⚡ 1-Click Fast Restore (Recommended):</strong> On the sound booth iPad or computer, open <strong>Sanctuary AV Controller (http://localhost:3050/captions)</strong> and tap <strong>'📺 Reopen Screen'</strong> (or run <code>POST /api/control/reopen-screen</code>). This automatically forces OBS Fullscreen Video Projector to the <strong>LONTIUM</strong> stage monitor and restarts captions.",
            "<strong>Inspect Behind-TV Receiver (RX):</strong> If the TV still displays 'No Signal', check the small HDMI receiver box mounted behind the Embrace Room TV. Ensure the HDMI cable is firmly seated into the TV input.",
            "<strong>Check Shared Outlet Timer:</strong> Verify the receiver box power LEDs are lit. If the room's Nest camera is also offline, the shared wall outlet timer is switched OFF. Toggle or override the timer to restore power."
          ],
          tip: "90% of OBS projector window drops are restored instantly by tapping 'Reopen Screen' on the Sanctuary AV Controller."
        },
        {
          phase: "Phase 2: Sound Booth Transmitter & OBS Manual Projector",
          badge: "Sound Booth & OBS",
          stepNumber: 2,
          title: "Check Booth Transmitter (TX) & Manual OBS Projector Fallback",
          location: "Sound Booth: Underneath desk & OBS Studio computer",
          actionSteps: [
            "<strong>Inspect Transmitter Unit (TX):</strong> Underneath the booth desk, confirm transmitter power is ON, HDMI input cable is fully inserted, and Cat6 link status LEDs are lit.",
            "<strong>Manual OBS Fallback:</strong> If the automated API button didn't engage, right-click anywhere on the OBS main video preview ➔ hover over <strong>'Fullscreen Projector (Preview)'</strong> ➔ select <strong>'LONTIUM'</strong>.",
            "The OBS program feed will immediately project onto the Embrace conference room TV screen."
          ],
          tip: "An active link light on both TX (booth) and RX (room) confirms the Cat6 network video bridge is healthy."
        }
      ]
    },
    {
      id: "obs-captions",
      title: "VoxStream Live Captions & Accessibility Captions View: Troubleshooting",
      icon: "captions",
      category: "Livestream / Captions / Overlays",
      severity: "high",
      summary: "Troubleshoot VoxStream PRO live stream captions (AI transcription on port 8765) and Accessibility Captions View: verify the VoxStream service, check audio device input meter, switch to low-latency Moonshine/Vosk engine, confirm the Accessibility Captions View on attendee devices, and trigger 1-click Panic Drop.",
      phases: [
        {
          phase: "Phase 1: Verify VoxStream Service & Emergency Launch",
          badge: "Port 8765 / Service Check",
          stepNumber: 1,
          title: "Confirm VoxStream Status & Emergency Start If Closed",
          location: "Broadcast Workstation (http://localhost:8765/dashboard)",
          actionSteps: [
            "<strong>Auto-Start on Boot:</strong> VoxStream is configured to automatically launch when the sound booth Windows PC starts up. Look for the black terminal window running in the background.",
            "<strong>Check Web Dashboard:</strong> Open Chrome or Edge and navigate to <strong>http://localhost:8765/dashboard</strong> (or click 'Live Apps ▾' in the top header).",
            "<strong>Verify Engine Status:</strong> Check the top-left status pill. It should read <strong style='color:#4ade80;'>'Capturing' (Green)</strong>. If it says 'Stopped' or 'Paused', click the green <strong>'▶ Start Captions'</strong> button.",
            "<strong>Emergency Start (If Closed):</strong> If the dashboard won't load at all, double-click the <strong>VoxStream</strong> shortcut on the Windows desktop or run <code>run_captioner.bat</code> in the app folder. Keep the black terminal window open in the background."
          ],
          tip: "Never close the black VoxStream command window while broadcasting — minimize it to the taskbar instead."
        },
        {
          phase: "Phase 2: OBS Stream Overlay & Microphone Input",
          badge: "OBS Source & Mic VU",
          stepNumber: 2,
          title: "Inspect OBS Browser Source & Audio Capture Meter",
          location: "OBS Studio & VoxStream Dashboard",
          actionSteps: [
            "<strong>Check OBS Browser Source:</strong> In OBS Studio, find the <strong>'Live Captions'</strong> (or 'Captions Overlay') browser source in your active scene. Double-click it and verify:",
            "• <strong>URL:</strong> <code>http://127.0.0.1:8765/</code> (or <code>http://localhost:8765/</code>)",
            "• <strong>Resolution:</strong> Width <code>1920</code>, Height <code>1080</code> (or match your canvas size)",
            "• <strong>Settings:</strong> Ensure <em>'Shutdown source when not visible'</em> and <em>'Refresh browser when scene becomes active'</em> are checked.",
            "<strong>Check Microphone VU Meter:</strong> In the VoxStream dashboard header, observe the <strong>MIC VU Meter</strong> while the pastor or speaker talks. It should bounce comfortably between <strong>-18 dBFS and -6 dBFS</strong>.",
            "<strong>If VU Meter reads -∞ dB:</strong> Go to the <strong>🎙️ Audio & Engine</strong> tab. Verify the correct audio input device is selected (e.g. <em>Soundcraft Si Impact USB</em>, <em>Focusrite</em>, or <em>Broadcast Lapel</em>). Click <strong>'💾 Save Audio & Engine Settings'</strong>.",
            "<strong>Restart Audio Worker:</strong> If the meter stays dead, click <strong>'⏹ Stop Captions'</strong> and then <strong>'▶ Start Captions'</strong> to re-initialize the audio capture stream.",
            "<strong>Accessibility Captions View (iPads & Mobile):</strong> Open <code>http://192.168.1.145:8765/display</code> (or scan the QR code at the booth) on any phone or tablet connected to the <strong>Waypoint Guest</strong> Wi-Fi to see captions in large-format read-along mode. Features include <strong>Bionic Reading</strong> mode (bold first half of each word), <strong>OpenDyslexic</strong> font toggle, and <strong>automatic Scripture detection</strong> (highlights verse references). The QR code handout is available at the sound booth."
          ],
          tip: "If OBS captions freeze, right-click the 'Live Captions' source in OBS and select 'Refresh' (or press Ctrl+R)."
        },
        {
          phase: "Phase 3: Engine Lag, Inaccurate Text & Emergency Panic Drop",
          badge: "Engine Lag & Panic Drop",
          stepNumber: 3,
          title: "Switch to Low-Latency Engine & Emergency Panic Drop",
          location: "VoxStream Dashboard (🎙️ Audio & Engine) & AV Controller",
          actionSteps: [
            "<strong>Fix Speech Lag (>1 Second Delay):</strong> In the dashboard <strong>🎙️ Audio & Engine</strong> tab, switch the Speech-to-Text engine to:",
            "• <strong>🥇 Local Faster-Whisper:</strong> ~400–600ms latency, 91.7% accuracy with superior biblical name recognition.",
            "• <strong>🌙 Local Moonshine (Recommended for Fast Pacing):</strong> ~120–200ms latency, lightweight neural transformer.",
            "• <strong>⚡ Local Vosk:</strong> Ultra-fast ~20–40ms latency with syllable-by-syllable instant response on any CPU.",
            "<strong>Emergency Blanking (Panic Drop):</strong> If an inappropriate word, cough, or erroneous text gets transcribed on stream, immediately click <strong>'🚨 Panic Drop'</strong> in Sanctuary AV Controller (or send <code>POST http://127.0.0.1:8765/api/control/panic</code>, or press <code>C</code> on the dashboard) to instantly clear all broadcast screens.",
            "<strong>Music Suppression:</strong> If captions output gibberish while the worship band plays, toggle on <strong>'Suppress Music & Organ'</strong> in the Audio tab to prevent instrumental noise from triggering speech recognition."
          ],
          tip: "The Accessibility Captions View at /display works even if the OBS stream captions overlay stops — iPads and phones auto-reconnect via WebSocket."
        }
      ]
    },
    {
      id: "embrace-captions-view",
      isEmbrace: true,
      title: "Embrace Room & Mobile Read-Along Captions (VoxStream /display)",
      icon: "tablet",
      category: "Embrace Group / Mobile Accessibility",
      severity: "high",
      summary: "Triage live read-along captions on congregation phones, Embrace room TV, and stage prompter: fix Wi-Fi QR connection, Windows Firewall port 8765, and Screen Wake Lock.",
      phases: [
        {
          phase: "Phase 1: Verify VoxStream Service & Web Display Link",
          badge: "Port 8765 /display",
          stepNumber: 1,
          title: "Confirm Service Running & Test /display Link Locally",
          location: "Sound Booth PC & Mobile Devices",
          actionSteps: [
            "<strong>Auto-Start on Boot:</strong> VoxStream runs automatically in the background on the sound booth PC. Confirm the black terminal window is active.",
            "<strong>Test Local Display Link:</strong> Open <strong>http://localhost:8765/display</strong> in Chrome or Edge on the booth PC. You should see the dark read-along prompter screen with a green 'LIVE' badge.",
            "<strong>Emergency Start (If Offline):</strong> If the page fails to connect, double-click the <strong>VoxStream</strong> shortcut on the Windows desktop or launch <code>run_captioner.bat</code>.",
            "<strong>Display Mode Selection:</strong> In the top bar of <code>/display</code>, select between:",
            "• <strong>📜 Scrollable History (Default):</strong> Viewers can scroll back to re-read earlier scripture or sermon notes.",
            "• <strong>⚡ Live Prompter:</strong> Shows only current 2 sentences, fading out on silence for clean teleprompting."
          ],
          tip: "Click the '⛶ Fullscreen' button or press F11 for a clean borderless teleprompter display."
        },
        {
          phase: "Phase 2: Mobile Wi-Fi & QR Connection Triage",
          badge: "Wi-Fi & Firewall",
          stepNumber: 2,
          title: "Connect to 'Waypoint Guest' Wi-Fi & Check Windows Firewall",
          location: "Congregation Phones, Embrace Room Table & Booth PC",
          actionSteps: [
            "<strong>Phone Must Join Church Wi-Fi:</strong> Mobile devices scanning the QR code must be connected to <strong>'Waypoint Guest'</strong> (Password: <code>Psalm27:4!</code>). Phones on cellular 5G/LTE cannot reach the local sound booth IP.",
            "<strong>QR Code Generation:</strong> On the dashboard header, click <strong>'📲 Share Captions QR'</strong> (or click '📱 Share' on <code>/display</code>). A QR code modal appears with the booth machine's local Wi-Fi IP (e.g. <code>http://192.168.1.150:8765/display</code>).",
            "<strong>Windows Firewall Check (If Phones Time Out):</strong> If phones on Wi-Fi get 'Server not found' or infinite spinning:",
            "1. On the booth PC, open <strong>Windows Defender Firewall</strong> ➔ <em>Allow an app through firewall</em>.",
            "2. Ensure <strong>python.exe</strong> (or port <code>8765</code>) is checked for <strong>Private Networks</strong>.",
            "<strong>Install as PWA:</strong> On iPhone/iPad (Safari) or Android (Chrome), tap <strong>Share ➔ Add to Home Screen</strong> to install the Stage Display as a full-screen app."
          ],
          tip: "The QR code automatically embeds the host PC's current local IP address so scanning works seamlessly on any device."
        },
        {
          phase: "Phase 3: Stage Prompter, Screen Wake Lock & Reading Aids",
          badge: "Wake Lock & Reading Aids",
          stepNumber: 3,
          title: "Configure Screen Wake Lock, Bionic Reading & Stage TV",
          location: "Podium iPad, Stage Confidence TV & Embrace Room",
          actionSteps: [
            "<strong>Screen Wake Lock (No Dimming):</strong> The <code>/display</code> web app automatically engages the browser's <strong>Screen Wake Lock API</strong>. Keep the browser tab visible and the tablet will never dim or sleep during preaching.",
            "<strong>⚡ Bionic Reading (ADHD & Dyslexia Aid):</strong> In <code>/display</code>, tap <strong>⚙️ Settings</strong> and toggle <strong>Bionic Reading</strong>. It dynamically bolds the opening letters of words (e.g. <b>Wel</b>come <b>t</b>o <b>our</b> <b>ser</b>vice) to create visual fixation anchors that guide the eye.",
            "<strong>High-Contrast Color Palettes:</strong> Choose from <strong>🌙 OLED Black</strong>, <strong>🟨 High Vis (Yellow on Black)</strong> for low vision, or <strong>🟡 Stage Amber</strong> for low glare under stage lights.",
            "<strong>Restore LONTIUM Stage Confidence TV:</strong> If the stage TV loses its prompter feed, open <strong>Sanctuary AV Controller (http://localhost:3050/captions)</strong> and tap <strong>'📺 Reopen Screen'</strong> (or in OBS, right-click preview ➔ <em>Fullscreen Projector</em> ➔ <em>LONTIUM</em>)."
          ],
          tip: "Use keyboard shortcuts on /display: '+' to increase font, '-' to decrease font, 'C' to clear history, 'S' for settings."
        }
      ]
    },
    {
      id: "williams-av-wavecast",
      isEmbrace: true,
      title: "Williams AV / Wavecast Assistive Listening",
      icon: "hearing",
      category: "Embrace Group / WaveCAST Assistive Audio",
      severity: "high",
      summary: "Guest connection setup, Wi-Fi QR, Reaper DAW audio meters, and distortion troubleshooting.",
      guestInstructions: [
        "1. Connect smartphone to Wi-Fi 'Waypoint Guest' (Password: Psalm27:4!).",
        "2. Download & open the WaveCAST App from Apple App Store or Google Play Store.",
        "3. Once the app opens, tap on the 'Waypoint church' channel to begin listening."
      ],
      phases: [
        {
          phase: "Phase 1: Guest Wi-Fi Verification & App Setup",
          badge: "Wi-Fi & App",
          stepNumber: 1,
          title: "Connect to 'Waypoint Guest' & Launch WaveCAST App",
          location: "Guest Phone / Sound Booth Hardware",
          actionSteps: [
            "<strong>Verify Wi-Fi:</strong> Phone must be on <strong>'Waypoint Guest'</strong> (Password: <code>Psalm27:4!</code>) and NOT on cellular 5G/LTE.",
            "<strong>Restart WaveCAST App:</strong> Have guest force-close the app (swipe up to kill) and reopen it while connected to Waypoint Guest Wi-Fi.",
            "<strong>Hardware Check:</strong> Check Williams AV unit on top of computer in sound booth. Ensure rear Ethernet cable is securely clicked in.",
            "<strong>Unit Restart:</strong> If still not broadcasting, press the front power button on Williams AV unit to reboot."
          ]
        },
        {
          phase: "Phase 2: Sound Booth Reaper DAW Volume Meters",
          badge: "Audio Signal Flow",
          stepNumber: 2,
          title: "Check Reaper Software Meters & Audio Patch Cables",
          location: "Sound Booth PC (Reaper DAW) & Soundcraft Console",
          actionSteps: [
            "<strong>Check Reaper Meters:</strong> Look at the computer screen with Reaper DAW open. Are green volume bars bouncing? If NOT, the computer is not receiving audio from the Soundcraft console.",
            "<strong>Check Console DAW Sends:</strong> On the Si Impact, verify Layer C Fader 18 ('To Reaper') is up and unmuted, or Mix 14 broadcast bus is feeding Reaper.",
            "<strong>Check Physical Cables:</strong> Ensure audio cables from the soundboard into the PC interface, and from PC to the Williams AV unit, are firmly pushed in."
          ]
        },
        {
          phase: "Phase 3: Fix Distorted Audio or Frozen DAW",
          badge: "Distortion & Reset",
          stepNumber: 3,
          title: "Lower Clipping Levels & Reaper Force Restart",
          location: "Soundcraft Si Impact & Reaper DAW",
          actionSteps: [
            "<strong>Fix Distortion / Blown-Out Audio:</strong> If audio is distorted, the signal is clipping. Lower the master send fader on the soundboard (Mix 14 / Layer C Fader 18) or lower main output fader in Reaper into the green/yellow zone.",
            "<strong>Reaper Frozen / Unresponsive:</strong> Close / Force Quit Reaper and reopen it (or restart the PC—Reaper auto-launches on boot)."
          ]
        }
      ]
    },
    {
      id: "soundboard-dead-channel",
      title: "Soundboard Channel Has No Sound / Dead Stage Input",
      icon: "mixer",
      category: "Audio Console / Stage Patch",
      severity: "high",
      summary: "Systematic 3-phase signal path diagnostic to trace missing audio in 60 seconds.",
      phases: [
        {
          phase: "Phase 1: Physical Stage Box & DI Check",
          badge: "Stage Box",
          stepNumber: 1,
          title: "Verify Stage Box Port, XLR Cable & DI Phantom Power",
          location: "Stage Floor Boxes",
          actionSteps: [
            "Confirm performer is plugged into the correct stage box input (e.g. Center Front Input 11 for Electric Guitar, Input 13 for Acoustic Guitar 2, Far Left Input 1 for Violin).",
            "Check XLR cable: Test with a known good XLR cable.",
            "Check DI box: Ensure active DI boxes are switched ON with +48V phantom power engaged on console."
          ]
        },
        {
          phase: "Phase 2: Soft Patch Assignment on Touchscreen",
          badge: "Si Impact Soft Patch",
          stepNumber: 2,
          title: "Verify Digital Soft Patching (SEL Button ➔ Inputs)",
          location: "Soundcraft Si Impact Console (Layer A or B)",
          actionSteps: [
            "Navigate to the correct fader layer (Layer A for main instruments, Layer B for wireless/utility).",
            "Press the illuminated <strong>SEL</strong> (Select) button above the channel fader.",
            "On the main touchscreen menu, tap <strong>Inputs</strong>.",
            "Verify that the digital channel is patched to the correct physical hardware input number (e.g. Violin ➔ Input 1, Acou1 ➔ Input 15, Aux 1 ➔ Input 3)."
          ]
        },
        {
          phase: "Phase 3: Preamp Gain & Mix 12 House Routing",
          badge: "Gain & Routing",
          stepNumber: 3,
          title: "Set Preamp Gain, Check Mutes & Verify Mix 12 (House) Fader",
          location: "Si Impact Channel Strip & Mix Buttons",
          actionSteps: [
            "With channel selected, adjust the <strong>Preamp Gain knob</strong> until input meter bounces comfortably (<strong>-8 to -10 dB</strong>).",
            "For condenser/choir mics or active DIs: ensure red <strong>+48V</strong> button is engaged.",
            "Verify channel <strong>MUTE</strong> is OFF (not glowing red).",
            "Press <strong>MIX 12 (Stereo House)</strong>: ensure channel fader is raised to 0 dB, and press <strong>LR</strong> to verify Master LR routing."
          ]
        }
      ]
    },
    {
      id: "load-show-file",
      title: "Load Sunday Show File (Soundcraft Si Impact)",
      icon: "folder",
      category: "Soundboard / Startup",
      severity: "medium",
      summary: "Sequence to load the primary Sunday show file from internal memory (MMC) or USB without overwriting 1NormalSunday.",
      phases: [
        {
          phase: "Step-by-Step Procedure",
          badge: "Show Storage",
          stepNumber: 1,
          title: "Menu ➔ Show ➔ Load ➔ Scroll to File ➔ Press Apply",
          location: "Physical Console Controls & Main Touchscreen",
          actionSteps: [
            "Press the physical <strong>MENU</strong> button next to the touchscreen to open the Main Menu.",
            "Tap <strong>SHOW</strong> on the touchscreen, then tap <strong>LOAD</strong> to open the storage list.",
            "Turn the physical <strong>SCROLL encoder knob</strong> (right of screen) to highlight the primary Sunday show file on internal memory (MMC) or USB.",
            "Press the illuminated physical <strong>APPLY</strong> button and tap <strong>YES / CONFIRM</strong> when prompted to load the show.",
            "Wait 3-5 seconds while motorized faders calibrate and digital patches engage.",
            "<strong>🛑 GOLDEN RULE: NEVER OVERWRITE '1NormalSunday'</strong> — It is the master baseline reference template. Always save custom adjustments under a separate dated name (Menu ➔ Show ➔ Save As ➔ [Date].show)."
          ],
          tip: "Never overwrite 1NormalSunday! Keeping it clean ensures the church can always recover a working state in seconds."
        }
      ]
    },
    {
      id: "wireless-mic-issues",
      title: "Wireless Microphone Cuts Out, Crackles, or is Dead",
      icon: "mic",
      category: "Audio / Wireless Mics / Stage",
      severity: "high",
      summary: "Step-by-step fix: fresh rechargeable AA battery swap, color-match mic to receiver rack box, and soundboard Layer B unmuting.",
      phases: [
        {
          phase: "Phase 1: Swap Fresh Rechargeable AA Batteries (#1 Fix)",
          badge: "Rechargeable AA Swap",
          stepNumber: 1,
          title: "Swap with 2 Fresh Rechargeable AA Batteries",
          location: "Stage Battery Charger / Sound Booth Drawer",
          actionSteps: [
            "<strong>RF Interference is Rare:</strong> In our sanctuary, signal dropouts or audio crackles are almost always caused by a dying battery, not RF frequency interference.",
            "Open the transmitter battery compartment (slide latch on bodypack or unscrew lower half of handheld mic).",
            "Remove existing batteries and place them into the recharge tray above the sound booth.",
            "Insert <strong>two fresh rechargeable AA batteries</strong> from the green 'Ready' charger dock, observing positive (<code>+</code>) and negative (<code>-</code>) polarity.",
            "Power on the transmitter and confirm the battery gauge illuminates with full bars."
          ],
          tip: "Always grab fresh rechargeable AAs from the charging station before each service or rehearsal."
        },
        {
          phase: "Phase 2: Color Match Mic Body to Receiver Rack Box",
          badge: "Color-Code Match",
          stepNumber: 2,
          title: "Match Color Band on Mic to Color on Receiver Box",
          location: "Sound Booth / AV Wireless Receiver Rack",
          actionSteps: [
            "<strong>Wrong Channel / Mismatched Mic Check:</strong> Microphones sometimes get mixed up or handed to the wrong speaker.",
            "Look at the <strong>color tape / band on the bottom of the handheld mic or bodypack</strong> (e.g. <em>White, Blue, Gray, Red, Orange, Yellow-Green, Green, Yellow, or Pastor/Headset</em>).",
            "Locate the wireless receiver boxes in the sound booth equipment rack.",
            "<strong>Compare color on mic to color label on receiver box:</strong> Ensure the receiver with the matching color has green/blue RF signal LEDs lit.",
            "Tap or speak into the mic: confirm AF (Audio) green meter bars bounce on that specific colored receiver unit."
          ],
          tip: "Each wireless mic has a matching color-labeled receiver in the rack. If AF meters bounce on the receiver, the mic is 100% working!"
        },
        {
          phase: "Phase 3: Soundboard Layer B Fader & Unmute",
          badge: "Si Impact Layer B",
          stepNumber: 3,
          title: "Verify Soundboard Layer B Fader, Preamp & House Routing",
          location: "Soundcraft Si Impact Console (Layer B)",
          actionSteps: [
            "Press <strong>Layer B</strong> on the Si Impact console (all wireless mics live on Layer B Faders 3–13).",
            "Locate the corresponding fader (Pastor Fader 3, Wht Mic 4, Blu Mic 5, Headset 6, Gray/Red/Orange/Yel-Gre/Green/Yellow 8–13).",
            "Verify channel <strong>MUTE</strong> is NOT glowing red.",
            "Push fader up to nominal level (<strong>0 dB</strong> or designated tape mark).",
            "Press <strong>SEL</strong> above fader: check <strong>Preamp Gain knob</strong> so meter bounces.",
            "Press <strong>MIX 12 (Stereo House)</strong>: ensure fader is raised to send audio to sanctuary speakers."
          ]
        }
      ]
    },
    {
      id: "proclaim-slides-freeze",
      title: "Proclaim Presentation Freezes or Slides Show on Wrong Screen",
      icon: "presentation",
      category: "Video / Presentation / Proclaim",
      severity: "high",
      summary: "Cycle Off/On Air, check Quick Screen buttons, verify Proclaim Virtual Screen Display output, check macOS Extended Desktop, or Force Quit.",
      phases: [
        {
          phase: "Phase 1: Quick 'On Air' Cycle & Slide Unfreeze",
          badge: "Proclaim Controls",
          stepNumber: 1,
          title: "Cycle Off Air / On Air & Check Quick Screen Mode",
          location: "Sound Booth Presentation Mac (Proclaim)",
          actionSteps: [
            "Look at top right of Proclaim: verify whether red <strong>On Air</strong> button is illuminated.",
            "If slides are stuck: click <strong>Off Air</strong>, wait 3 seconds, then click <strong>On Air</strong> again to reboot GPU slide rendering.",
            "Test slide advance: click a slide thumbnail in the middle preview pane or press <strong>Spacebar</strong>.",
            "<strong>Check Quick Screen Buttons:</strong> Look at bottom right corner of Proclaim: make sure <strong>Blank (F10)</strong> or <strong>Clear (F11)</strong> wasn't accidentally triggered. Click <strong>Normal (F9)</strong> or <strong>Logo (F12)</strong>."
          ],
          tip: "Toggling Off Air and back On Air clears cached GPU slide buffers and re-syncs video output instantly."
        },
        {
          phase: "Phase 2: Proclaim Displays & macOS Extended Desktop",
          badge: "Display Configuration",
          stepNumber: 2,
          title: "Configure Virtual Screens & Verify 'Extend Desktop'",
          location: "Proclaim ➔ Settings ➔ Display & Apple Menu ",
          actionSteps: [
            "In Proclaim, click <strong>Settings ➔ Display</strong>:",
            "• <strong>Application:</strong> Must be assigned to <em>Primary Display (Built-in Mac screen)</em>.",
            "• <strong>Virtual Screen: Slides:</strong> Must be assigned to <em>External Display (HDMI Splitter)</em>.",
            "• <strong>Virtual Screen: Confidence:</strong> Assign to <em>Secondary External Display</em>.",
            "<strong>macOS Extended Desktop:</strong> If TVs show Mac wallpaper, open <strong> ➔ System Settings ➔ Displays</strong> and ensure external display is set to <strong>'Stop Mirroring' / 'Use as Separate Display'</strong> (Extended Desktop)."
          ]
        },
        {
          phase: "Phase 3: Force Quit & Emergency Restart",
          badge: "Emergency Restart",
          stepNumber: 3,
          title: "Force Quit Proclaim & Relaunch Presentation",
          location: "Sound Booth Presentation Mac",
          actionSteps: [
            "If Proclaim displays the macOS spinning rainbow beach ball and does not respond:",
            "Press <strong>Cmd + Option + Esc</strong> (⌘⌥Esc) ➔ Select <strong>Proclaim</strong> ➔ Click <strong>Force Quit</strong>.",
            "Relaunch Proclaim from macOS Dock ➔ Click <strong>Open Service</strong> ➔ Select today's service ➔ Click <strong>On Air</strong>."
          ],
          tip: "Because Proclaim caches service files locally on the Mac SSD, relaunching takes under 15 seconds."
        }
      ]
    },
    {
      id: "stage-power-breakers",
      title: "Stage Floor Pockets / Sound Booth Lost AC Power (Panel S)",
      icon: "power",
      category: "Power / Electrical / Panel S",
      severity: "high",
      summary: "Reset tripped circuit breakers in gray Panel S inside the sound booth for stage pockets, platform outlets, TVs, subs, or booth lights.",
      phases: [
        {
          phase: "Step-by-Step Reset",
          badge: "Panel S Breakers",
          stepNumber: 1,
          title: "Reset Tripped Breakers in Gray Electrical Panel S",
          location: "Sound Booth: Gray Panel S on the back wall",
          actionSteps: [
            "<strong>Locate Gray Panel S:</strong> Open the metal door of <strong>Panel S</strong> on the back sound booth wall. (Note: Do NOT touch the adjacent black lighting panel).",
            "<strong>Stage Floor Pockets (Pedalboards/Keyboards Dead):</strong> Locate <strong>Breakers 4 & 6</strong> (labeled <em>'Floor Recept. Stage'</em>). Push firmly all the way to <strong>OFF</strong>, then push back to <strong>ON</strong>.",
            "<strong>Sound Booth Lights / Desk Power:</strong> Check <strong>Breaker 9</strong> (<em>Sound Rm Lights</em>) or <strong>Breakers 1, 2, 7, 8</strong> (<em>Quad Recept. Rm 110</em>).",
            "<strong>Sanctuary TVs & Subwoofers:</strong> Check <strong>Breaker 11</strong> (<em>TV Sanctuary</em>) or <strong>Breakers 29–30</strong> (<em>10 R & L SUBS</em>).",
            "<strong>Resetting Tip:</strong> A tripped breaker resting in the middle position will NOT reset unless pushed completely to OFF first before flipping to ON."
          ],
          tip: "Always push the breaker firmly to OFF first, then firmly to ON."
        }
      ]
    },
    {
      id: "click-track-patch",
      title: "Click Track Patch Switcher (Front vs Drum Cage)",
      icon: "clock",
      category: "Soundboard / In-Ears / Click",
      severity: "medium",
      summary: "Soft-patch click track between Front Stage (Input 12) and Drum Cage (Input 20) on Layer B Fader 2, send to Avioms, and keep muted in House.",
      phases: [
        {
          phase: "Step-by-Step Patching",
          badge: "Layer B Fader 2",
          stepNumber: 1,
          title: "Select Click Channel, Patch Input Source & Route to Avioms",
          location: "Soundcraft Si Impact (Layer B Fader 2)",
          actionSteps: [
            "<strong>1. Select Click Channel:</strong> Press <strong>Layer B</strong> on the console ➔ press <strong>SEL</strong> above <strong>Fader 2 ('Click')</strong>.",
            "<strong>2. Soft Patch Input Source:</strong> On the main touchscreen menu, tap <strong>Inputs</strong>:",
            "   • <strong>Front Stage Click:</strong> Tap <strong>Input 12</strong> (Center Front stage box / FX1 recorder).",
            "   • <strong>Drum Cage Click:</strong> Tap <strong>Input 20</strong> (Drum Cage Left wall plate).",
            "   • Press <strong>Menu twice</strong> to exit.",
            "<strong>3. Route to Aviom In-Ears:</strong> Press Aviom mix buttons (Mix 1 Drums, Mix 4 Keys, Mix 5 Elec, etc.) and raise Fader 2 to musicians' desired level.",
            "<strong>4. Strict House Mute Rule:</strong> Verify Fader 2 is fully DOWN on <strong>MIX 12 (Stereo House)</strong> and Master LR so the metronome is NEVER heard in the sanctuary!"
          ],
          tip: "Click is always on Layer B Fader 2. Never route Click to Mix 12 House or Master LR."
        }
      ]
    },
    {
      id: "mixing-station-disconnect",
      title: "Mixing Station Tablet / iPad Disconnected / Offline",
      icon: "tablet",
      category: "Tablet / iPad / Mixing Station / Network",
      severity: "high",
      summary: "Reconnect Mixing Station tablet or iPad app to the Soundcraft console using Backup Search, verify Wi-Fi, and check rear Ethernet cable.",
      phases: [
        {
          phase: "Step-by-Step Reconnect",
          badge: "Backup Search",
          stepNumber: 1,
          title: "Run 'Backup Search', Verify Wi-Fi & Soundboard Network Cable",
          location: "Tablet / iPad (Mixing Station App) & Sound Booth",
          actionSteps: [
            "<strong>1. Run 'Backup Search':</strong> In the Mixing Station app on the tablet / iPad, tap the <strong>Back Arrow (←)</strong> or <strong>Home</strong> icon in the top left corner to exit the disconnected screen. Tap <strong>'Backup search'</strong>. When the Soundcraft Si Impact appears in the list, tap it to reconnect.",
            "<strong>2. Check Tablet / iPad Wi-Fi:</strong> Open tablet / iPad <strong>Settings ➔ Wi-Fi</strong>. Confirm connected to <strong>Waypoint Guest</strong> (Password: <code>Psalm27:4!</code>) or production Wi-Fi. Toggle Wi-Fi OFF for 5s and back ON if needed.",
            "<strong>3. Check Console Ethernet Cable:</strong> Inspect the rear of the Soundcraft Si Impact console: verify the <strong>HiQnet / Network Ethernet cable</strong> is firmly clicked in and booth network switch LEDs are blinking."
          ],
          tip: "'Backup search' performs direct broadcast discovery and reconnects the tablet or iPad in seconds."
        }
      ]
    },
    {
      id: "aviom-sends-volume",
      title: "Aviom In-Ear Monitor Sends (Tablet & Soundboard)",
      icon: "headphones",
      category: "Audio / Monitors / Aviom",
      severity: "medium",
      summary: "Adjust channel volumes in musician Aviom in-ears using the Mixing Station tablet app ('Sends' tab) or physical soundboard mix buses, with gain staging rules.",
      phases: [
        {
          phase: "Phase 1: Tablet App (Sends Panel) & Gain Staging Rule",
          badge: "Tablet / Mixing Station",
          stepNumber: 1,
          title: "Adjust Sends on Tablet & Add Preamp Gain if Maxed Out",
          location: "iPad / Tablet (Mixing Station App)",
          actionSteps: [
            "On the tablet Mixing Station mixer screen, <strong>click / tap the channel</strong> you want to adjust (e.g. Lead Vocal, Keys, Acoustic Guitar).",
            "Look at the <strong>right side of the screen</strong> to locate the <strong>'Sends'</strong> panel displaying the mix bus send sliders.",
            "Find the specific <strong>Aviom channel / mix bus</strong> for the musician requesting the change (Mix 1 Drums, Mix 2 Bass, Mix 4 Keys, Mix 5 Elec, Mix 6 Flex 1/Violin, Mix 9 Vocals 1&2, Mix 11 Acoustic) and <strong>push up the volume slider</strong>.",
            "<strong>Gain Staging Rule (If Send is Maxed Out):</strong> If the Aviom send is already at maximum (<strong>+10 dB</strong>) and the musician still cannot hear enough, <strong>increase channel Preamp Gain slightly (+2 to +4 dB)</strong>. Pull down the channel fader on MIX 12 (House) slightly to keep room balance."
          ],
          tip: "The 'Sends' panel on the right lets you adjust any individual mix send without changing the house mix."
        },
        {
          phase: "Phase 2: Physical Soundcraft Console (tOTEM Mode)",
          badge: "Si Impact Console",
          stepNumber: 2,
          title: "Adjust Aviom Sends on Physical Soundboard & Check Layer D",
          location: "Soundcraft Si Impact Console (Mix Bus Buttons)",
          actionSteps: [
            "On the physical Soundcraft Si Impact soundboard, <strong>press the target Aviom MIX button</strong> (e.g. <strong>MIX 1</strong> Drums, <strong>MIX 4</strong> Keys, <strong>MIX 5</strong> Elec, <strong>MIX 6</strong> Violin, <strong>MIX 9</strong> Vocals, <strong>MIX 11</strong> Acoustic).",
            "The console enters <strong>Sends on Faders (tOTEM)</strong> mode — faders illuminate with the mix bus color.",
            "Locate the instrument / vocal channel fader and <strong>push up the channel fader</strong> to the desired monitoring volume.",
            "When finished, <strong>press the active MIX button again</strong> (or MIX 12 / LR) to exit Sends on Faders and return to the house mix.",
            "<strong>Layer D Master Check:</strong> Press <strong>Layer D</strong> on the console. Confirm Aviom Master faders (1–11) are at <strong>0 dB</strong> and unmuted."
          ]
        }
      ]
    },
    {
      id: "aviom-dead-station",
      title: "Aviom In-Ear Monitors: 'Nothing in My Ears' / Dead Station",
      icon: "headphones",
      category: "Audio / Aviom In-Ears / Monitoring",
      severity: "high",
      summary: "Systematic diagnostic to fix silent or dead personal Aviom in-ear monitor stations before and during rehearsal.",
      phases: [
        {
          phase: "Phase 1: Headphone Extender Cable, 1/4\" Adapter & Volume Knob",
          badge: "Musician Station & Cables",
          stepNumber: 1,
          title: "Bypass Headphone Extender Cable (#1 Failure Point), Check Adapter & Knob",
          location: "On-Stage Musician Aviom Station",
          actionSteps: [
            "<strong>Bypass Headphone Extender Cable (#1 Failure Point):</strong> Headphone extension cables frequently fail due to bending, strain, or being stepped on. Unplug the musician's in-ears from the extension cable and plug them <strong>directly into the Aviom unit's Phones jack</strong>. If audio returns, replace the bad extension cable with a spare from the booth.",
            "<strong>Check 1/4\" Screw-On Adapter & Jack:</strong> Ensure cable is plugged into <strong>Phones output jack</strong> (not Aux Out). Check if screw-on 1/8\" to 1/4\" adapter has loosened.",
            "<strong>Master Volume Knob:</strong> Turn physical <strong>Master Volume knob</strong> on the right side of the Aviom unit clockwise (often accidentally turned down to 0).",
            "<strong>Check Power LED:</strong> Look at front face of the Aviom mixer. If blue/green power LED is dark, the unit is not receiving PoE power over Ethernet (proceed to Phase 2).",
            "<strong>Channel Mutes / Levels:</strong> Select the channel button on the Aviom (e.g. Channel 1 Vocal, Channel 2 Guitar), check volume meter LEDs, and ensure <strong>MUTE</strong> is NOT active."
          ],
          tip: "Headphone extension cables fail more than any other in-ear component. Always test by plugging earbuds directly into the Aviom unit first!"
        },
        {
          phase: "Phase 2: Stage-Left Aviom Network Switch & Cat5 Drops",
          badge: "Stage-Left Switch",
          stepNumber: 2,
          title: "Verify Aviom Network Switch (Stage Left) & Ethernet Drops",
          location: "Stage Left Floor / Behind Speaker (Aviom Network Hub)",
          actionSteps: [
            "<strong>Locate Network Switch:</strong> Locate the dedicated Aviom network distribution switch on the <strong>left side of the stage with a bundle of Ethernet cables coming out</strong>.",
            "<strong>Power Status:</strong> Verify power cable is firmly seated and front status LEDs are illuminated.",
            "<strong>Cable Reseat:</strong> Locate the Cat5/Cat6 cable running to the musician's stage position. Unplug RJ45 connector from stage floor pocket and back of Aviom mixer, then click firmly back in.",
            "<strong>Entire Band Outage:</strong> If ALL Aviom stations on stage are dead/dark, <strong>unplug the main power cord from the stage-left switch, wait 10 seconds, and plug back in</strong> to reboot the Aviom network."
          ],
          tip: "The stage-left switch distributes both digital A-Net audio channels and Power-over-Ethernet (PoE) down a single Cat5/Cat6 cable."
        },
        {
          phase: "Phase 3: Soundcraft Console Sends, Layer D Masters & Preamp Gain",
          badge: "Console & Tablet",
          stepNumber: 3,
          title: "Verify Channel Mix Sends, Layer D Masters & Raw Preamp Gain",
          location: "Soundcraft Si Impact / Mixing Station Tablet",
          actionSteps: [
            "<strong>On Mixing Station Tablet:</strong> Tap the requested channel ➔ look at <strong>'Sends' on the right side</strong> ➔ verify the slider for that musician's mix (Mix 1 Drums, Mix 2 Bass, Mix 4 Keys, Mix 5 Elec, Mix 6 Flex 1/Violin, Mix 9 Vocals 1&2, Mix 11 Acoustic) is turned UP.",
            "<strong>On Physical Console (tOTEM Mode):</strong> Press target Aviom <strong>MIX button</strong> ➔ confirm channel faders are pushed up ➔ press MIX button again to exit.",
            "<strong>Layer D Master Faders Check:</strong> Press <strong>Layer D</strong> on the console. Verify the master fader for that Aviom mix (Faders 1–11) is pushed up to <strong>0 dB</strong> and is NOT muted.",
            "<strong>Check Raw Preamp Gain:</strong> Verify channel input meter is bouncing (-8 to -10 dB). If console meter is dead, check stage instrument volume, battery, DI box phantom power, or wireless bodypack."
          ],
          tip: "Aviom in-ears receive signal directly after the console Preamp Gain stage. If there is no gain on the board, the in-ears will receive zero sound."
        }
      ]
    },
    {
      id: "feedback-triage",
      title: "Microphone Feedback & Stage Ringing (Pastor Lapel & Cajon Mic)",
      icon: "alert-triangle",
      category: "Audio / Microphones / Feedback",
      severity: "high",
      summary: "Fast triage for stage squeals: Pastor lapel preset recall & front cajon mic muting on Fader 21 in Band Group.",
      phases: [
        {
          phase: "Fast Feedback Triage",
          badge: "Preset Recall & Cajon Mute",
          stepNumber: 1,
          title: "Pastor Lapel Preset Recall & Front Cajon Mic Mute (Fader 21)",
          location: "Soundcraft Si Impact / Mixing Station (Layer B Fader 3 & Layer A Fader 21)",
          actionSteps: [
            "<strong>1. Pastor Lapel Feedback (Reduce dB & Recall Preset):</strong> Immediately pull Pastor Lapel fader down 2–4 dB. <em>The core problem is usually volunteers manually over-EQing this mic!</em> On Mixing Station: Select Pastor channel ➔ tap <strong>Folder</strong> ➔ tap <strong>Local Presets</strong> ➔ recall the saved <strong>'Pastor Lapel' preset</strong> to instantly restore balanced gain, compression, and calibrated EQ. Ensure High Pass Filter (HPF) is at 80Hz–100Hz.",
            "<strong>2. Front Cajon Mic Feedback (Mute on Fader 21):</strong> The Front Cajon mic (Input 18 / Fader 21 'CjnStmp18') is a high-gain acoustic boundary mic. It <strong>MUST be muted whenever the cajon is not actively being played</strong>.",
            "<strong>3. Band Group / VCA Confusion:</strong> The Cajon channel is assigned inside the main <strong>Band Group</strong>. Make sure you mute its individual channel fader directly on <strong>Layer A, Fader 21</strong> (red glow) rather than relying only on group mutes.",
            "<strong>4. Stage Monitor Check:</strong> Confirm speaker/pastor is not standing directly in front of a loud house speaker or stage floor wedge."
          ],
          tip: "Recalling the Pastor Lapel channel preset stops 95% of lapel feedback instantly. Mute Cajon on Fader 21 when not playing."
        }
      ]
    },
    {
      id: "sanctuary-speakers-quiet",
      title: "Sanctuary Speakers Completely Silent (Venue Live 360 & Master Check)",
      icon: "speaker",
      category: "Audio Console / Speakers / Processing",
      severity: "high",
      summary: "Power cycle Venue Live 360 speaker box in rack (unplug/replug until it boots), check Master LR fader and amplifier power.",
      phases: [
        {
          phase: "Step-by-Step Fix",
          badge: "Venue Live 360 & Master LR",
          stepNumber: 1,
          title: "Power Cycle Venue Live 360 Box & Verify Red Master LR Fader",
          location: "Sound Booth Equipment Rack & Soundcraft Si Impact",
          actionSteps: [
            "<strong>1. Power Cycle Venue Live 360 Box (#1 Failure Point):</strong> If meters bounce on the soundboard but the sanctuary is dead silent, the <strong>Venue Live 360 speaker processor box is NOT on</strong>. Reach to the Venue Live 360 unit in the equipment rack, <strong>unplug the power cord, wait 5 seconds, and plug it back in</strong>. <em>If it doesn't power up on the first try, unplug and replug again until it turns on — it will eventually turn on!</em>",
            "<strong>2. Check Red Master Left-Right (LR) Fader:</strong> Look at the dedicated <strong>red Master LR fader</strong> on the far right of the console: ensure it is pushed up to <strong>0 dB</strong> (nominal tape mark) and its red <strong>MUTE button is OFF</strong>.",
            "<strong>3. Check Mix 12 (Stereo House):</strong> Ensure Mix 12 is active and assigned to the Master LR bus, and sweep channel mutes on Layer A and B.",
            "<strong>4. Check Crown House Amp & Atlas Processor:</strong> Verify blue power LEDs are lit on the Crown main amplifier in the rack and fault lights are OFF."
          ],
          tip: "The Venue Live 360 speaker box is the main gatekeeper to sanctuary sound. Power cycling its cord gets it to boot every time."
        }
      ]
    },
    {
      id: "atem-no-video",
      title: "ATEM Switcher: Camera Video Feeds Black / Missing",
      icon: "camera",
      category: "Livestream / ATEM / Cameras",
      severity: "high",
      summary: "Both cameras black = Ubiquiti white switch under desk. One camera black = restart camera on switch or under-desk SDI box.",
      phases: [
        {
          phase: "Step-by-Step Diagnostic",
          badge: "Under-Desk Switch / SDI",
          stepNumber: 1,
          title: "Check Ubiquiti Switch Under Desk, Labeled SDI Box & Camera Cables",
          location: "Sound Booth (Under Desk) & Sanctuary Cameras",
          actionSteps: [
            "<strong>Golden Diagnostic Rule:</strong> It is almost NEVER both camera feeds failing at the same time independently.",
            "<strong>Check Camera Ping Telemetry:</strong> Open <strong>Sanctuary AV Controller (http://localhost:3050/broadcast)</strong>. Check the latency matrix to see if Cam 1 (<code>192.168.1.101</code>) or Cam 2 (<code>192.168.1.102</code>) are responding to network pings.",
            "<strong>IF BOTH CAMERAS ARE BLACK:</strong> The issue is the <strong>Ubiquiti white network switch located underneath the sound booth desk</strong>. Check power and power cycle the switch to restore both camera network streams.",
            "<strong>IF ONLY ONE CAMERA IS BLACK:</strong>",
            "• Unplug that camera's data cable from the <strong>Ubiquiti white switch under the desk</strong> and replug to restart the stream, OR",
            "• Check that camera's <strong>labeled SDI converter box underneath the desk</strong> (unplug the power barrel connector, wait 5 seconds, and replug).",
            "<strong>Check Physical Cable on Camera Tripod:</strong> Physical panning/movement sometimes loosens the video cable directly on the camera body. Walk to the camera and firmly push the HDMI/SDI cable in.",
            "<strong>Check ATEM Input Buttons:</strong> On the ATEM Mini switcher (or on AV Controller at <code>http://localhost:3050/cameras</code>), verify Input 1 (Wide) or Input 2 (Close) is selected (not switched to Black or Color)."
          ],
          tip: "Both cameras black = Ubiquiti white switch. Single camera black = labeled SDI box under desk or camera port."
        }
      ]
    },
    {
      id: "sanctuary-av-controller-issues",
      title: "Sanctuary AV Controller: Telemetry Down or Silence Alarm Misfiring",
      icon: "alert",
      category: "Livestream / ATEM / Cameras",
      severity: "medium",
      summary: "Troubleshooting guide for Sanctuary AV Controller (Port 3050): Node service recovery, REAPER OSC VU stream, and false silence alert reset.",
      phases: [
        {
          phase: "Step-by-Step Diagnostic",
          badge: "Port 3050 / OSC",
          stepNumber: 1,
          title: "Check Node Server, Silence Thresholds & REAPER OSC Feed",
          location: "Sound Booth Computer (Port 3050)",
          actionSteps: [
            "<strong>If Web Controller is Offline (http://localhost:3050 not loading):</strong> Open Terminal and restart the controller daemon: <code>cd /Users/techguyowen/Downloads/AV_Controller && npm start</code> (or <code>pm2 restart sanctuary-av</code>).",
            "<strong>If Silence Watchdog Alarm is Flashing Red:</strong> Verify that the FOH Soundcraft Si Impact broadcast send (Layer D, Fader 22: Mix 14 Broadcast) is active and unmuted. Then check REAPER DAW master track output fader.",
            "<strong>Verify REAPER OSC VU Meter Stream:</strong> In REAPER, navigate to Preferences ➔ Control/OSC/web. Confirm the OSC device is active, sending on port <code>8000</code> and receiving on port <code>9000</code>.",
            "<strong>False Silence Alerts During Service Transitions:</strong> AV Controller is configured with a 15-second grace period. If extended prayer or quiet transition triggers the alarm, acknowledge it directly on the Master Hub or adjust the silence threshold in ⚙️ Settings."
          ],
          tip: "Sanctuary AV Controller automatically alerts GroupMe Tech Leads if master broadcast audio drops below -50 dBFS during scheduled service hours."
        }
      ]
    },
    {
      id: "confidence-monitor-switch",
      title: "Stage Confidence Monitor: Wrong View / Static Slide vs. BirdDog",
      icon: "tv",
      category: "Video / Proclaim / Stage Display",
      severity: "medium",
      summary: "Press the physical push button underneath the sound booth desk (labeled on top) to toggle between Static Slide & BirdDog view.",
      phases: [
        {
          phase: "1-Click Switch",
          badge: "Under-Desk Button",
          stepNumber: 1,
          title: "Press the Toggle Button Underneath the Sound Booth Desk",
          location: "Sound Booth: Underneath Desk (Labeled on Top of Desk)",
          actionSteps: [
            "<strong>The Two Display Modes:</strong> The rear stage confidence TV for the pastor and worship team can display two different views:",
            "1. <strong>Full Static View:</strong> Shows the exact slide currently on the front sanctuary TVs.",
            "2. <strong>BirdDog View:</strong> The true confidence monitor showing current lyrics, next upcoming lyric line, elapsed time, and countdown clock.",
            "<strong>How to Switch:</strong> Locate the <strong>labeled spot on top of the sound booth desk</strong>.",
            "Reach directly <strong>underneath the desk</strong> at that spot to find the physical push-button switch.",
            "<strong>Press the button once</strong> to toggle the video feed between the static slide and the BirdDog dynamic confidence view.",
            "<strong>Proclaim Virtual Screen Check:</strong> In Proclaim ➔ Settings ➔ Display, verify <em>Virtual Screen: Confidence</em> is assigned to the connected external stage display."
          ],
          tip: "Musicians or pastors asking 'the rear TV is just showing the normal slide without the clock/lyrics' just need this under-desk button pressed once!"
        }
      ]
    },
    {
      id: "computer-audio-no-sound",
      title: "Computer Audio / Mac Video Has No Sound in Sanctuary",
      icon: "speaker",
      category: "Audio / Playback / Mac & PC",
      severity: "high",
      summary: "Step-by-step fix when Mac sermon video clips, Proclaim media, or PC background music play on screen but produce no sound in the sanctuary.",
      phases: [
        {
          phase: "Phase 1: Mac / PC System Sound Output & 3.5mm Cable",
          badge: "Computer Settings",
          stepNumber: 1,
          title: "Verify Computer Output Device & Physical Audio Cable",
          location: "Sound Booth: Main Presentation Mac / PC",
          actionSteps: [
            "<strong>macOS Sound Output:</strong> On the Mac, click <strong>Control Center</strong> (top right menu bar) ➔ tap <strong>Sound</strong> ➔ confirm output is set to the <strong>Sound Booth Audio Interface / Line Out</strong> (NOT 'MacBook Pro Speakers').",
            "<strong>Inspect Physical 3.5mm Cable:</strong> Ensure the headphone audio cable is pushed completely and firmly into the computer's audio jack and routed into the sound booth patch rack.",
            "<strong>Check App & System Volume:</strong> Ensure macOS / Windows system volume is set to <strong>80–90%</strong> and the video player / browser / Spotify is unmuted.",
            "<strong>Proclaim Audio Settings:</strong> In Proclaim, go to <strong>Proclaim ➔ Preferences ➔ Audio</strong> and verify the Audio Output device is assigned to the connected booth sound interface."
          ],
          tip: "macOS frequently resets audio output back to built-in laptop speakers when external cables are reconnected."
        },
        {
          phase: "Phase 2: Soundcraft Console Layer A Faders (Mac / PC)",
          badge: "Si Impact Layer A",
          stepNumber: 2,
          title: "Un-mute Fader 23 (Mac) or Fader 22 (PC) & Set Preamp Gain",
          location: "Soundcraft Si Impact Console (Layer A)",
          actionSteps: [
            "Press <strong>Layer A</strong> on the console (computer audio channels live on the far right of Layer A).",
            "Locate <strong>Fader 23 ('Mac')</strong> for the presentation computer, or <strong>Fader 22 ('PC')</strong> for the booth PC.",
            "Verify the channel <strong>MUTE button is OFF</strong> (must NOT be glowing red).",
            "Push the fader up to nominal level (<strong>0 dB</strong> or marked tape line).",
            "Press the illuminated <strong>SEL</strong> button above the fader: adjust the <strong>Preamp Gain knob</strong> until the input meter bounces in the green/yellow zone (<strong>-8 to -10 dB</strong>)."
          ],
          tip: "Computer audio is split between Fader 22 (PC) and Fader 23 (Mac) on Layer A."
        },
        {
          phase: "Phase 3: Verify Mix 12 (Stereo House) & Master LR",
          badge: "House Bus Routing",
          stepNumber: 3,
          title: "Ensure Channel Feeds Mix 12 (House) & Master LR Fader is Up",
          location: "Si Impact Channel Strip & Master Section",
          actionSteps: [
            "With Fader 23 (Mac) or Fader 22 (PC) selected via <strong>SEL</strong>, press <strong>MIX 12 (Stereo House)</strong>.",
            "Confirm the channel fader is raised to <strong>0 dB</strong> within Mix 12 so audio passes to the sanctuary speakers.",
            "Press <strong>MIX 12 again</strong> (or LR) to exit Sends on Faders mode.",
            "Check the <strong>red Master LR fader</strong> on the far right of the console: ensure it is pushed up to <strong>0 dB</strong> and its red MUTE is OFF."
          ]
        }
      ]
    },
    {
      id: "ground-hum-buzz",
      title: "Loud Buzz, Hum, or Ground Loop on Stage (DI Box & Ground Lift)",
      icon: "alert-triangle",
      category: "Audio / Stage Noise / Ground Loop",
      severity: "high",
      summary: "Fast 3-step triage to eliminate 60Hz buzzing or humming on acoustic guitars, keyboards, bass, or pedalboards in under 30 seconds.",
      phases: [
        {
          phase: "Phase 1: Flip the GND / LIFT Switch on Stage DI Box (#1 Fix)",
          badge: "DI Box Ground Lift",
          stepNumber: 1,
          title: "Flip the GND / LIFT Switch on the Stage Direct Box",
          location: "On-Stage: Musician's DI Box / Pedalboard",
          actionSteps: [
            "<strong>Locate the DI Box:</strong> Walk to the direct box (DI box) on stage connected to the buzzing instrument (Acoustic Guitar, Bass, Keys, or Stomp Box).",
            "<strong>Find the GND / LIFT Switch:</strong> Look for the small slide switch labeled <strong>GND / LIFT</strong> (Ground Lift) on the side or end of the DI box.",
            "<strong>Flip to LIFT:</strong> Slide the switch to the <strong>LIFT</strong> position. In 95% of church stage buzz cases, lifting the ground breaks the electrical ground loop and silences the buzz immediately!",
            "<strong>Swap DI Box if Needed:</strong> If buzz persists, grab a spare active/passive DI box from the stage storage in the <strong>closet to the right of the stage</strong> and replace it."
          ],
          tip: "Flipping the Ground Lift switch isolates the electrical ground between stage power and the soundboard without losing audio signal."
        },
        {
          phase: "Phase 2: Check AC Power Circuits & Stage Floor Pockets",
          badge: "Stage AC Power",
          stepNumber: 2,
          title: "Plug All Stage Gear into Same Pocket (Panel S Breakers 4 & 6)",
          location: "Stage Floor Boxes & Musician Outlets",
          actionSteps: [
            "<strong>Same Circuit Rule:</strong> Ensure the musician's pedalboard, keyboard, and amplifiers are plugged into the <strong>stage floor pocket AC receptacles</strong> (powered by <strong>Panel S Breakers 4 & 6</strong>), NOT an extension cord run to an ungrounded wall outlet across the room.",
            "<strong>Disconnect Phone Chargers:</strong> Make sure no unshielded phone or tablet chargers are plugged into the same power strip as guitar pedalboards or DI boxes.",
            "<strong>Check Pedalboard Power Supply:</strong> Ensure digital effects pedals are powered by an isolated power supply (e.g. Voodoo Lab / Strymon) rather than a noisy daisy-chain wall adapter."
          ]
        },
        {
          phase: "Phase 3: Console High Pass Filter (HPF) & Cable Swap",
          badge: "Si Impact HPF & Cables",
          stepNumber: 3,
          title: "Engage 80Hz High Pass Filter & Test Shielded Cable",
          location: "Soundcraft Si Impact & Stage Floor",
          actionSteps: [
            "<strong>Engage Console HPF:</strong> On the Si Impact console, select the buzzing channel (<strong>SEL</strong> button) and press the illuminated <strong>HPF (High Pass Filter)</strong> button in the channel strip. Set to <strong>80Hz–100Hz</strong> to roll off low-frequency AC power line hum.",
            "<strong>Swap 1/4\" Instrument Cable:</strong> Bad shielding on unbalanced 1/4\" TS guitar cables acts like an antenna for lighting dimmer noise. Replace with a heavy-duty shielded cable.",
            "<strong>Check XLR Tie-Line:</strong> Ensure the XLR cable from the DI box is clicked firmly into the correct stage floor pocket port."
          ]
        }
      ]
    },
    {
      id: "system-boot-order",
      title: "Sound Booth Morning System Startup & Boot Order (Pop Prevention)",
      icon: "power",
      category: "Soundboard / Startup / Power",
      severity: "medium",
      summary: "Strict hardware power-up sequence to prevent damaging speaker pops, protect amplifiers, and calibrate digital sync.",
      phases: [
        {
          phase: "Phase 1: Strict Hardware Boot Order (Sources First, Amps Last)",
          badge: "Sources ➔ Amps",
          stepNumber: 1,
          title: "Power ON Hardware in Exact 7-Step Sequence",
          location: "Sound Booth & Stage Left",
          actionSteps: [
            "<strong>Golden Rule: Sources First, Amps Last!</strong> Turning amplifiers on before the console sends an electrical pop that can destroy speaker drivers.",
            "<strong>1. Board (Console):</strong> Power ON the <strong>Soundcraft Si Impact console</strong> first and allow it to boot completely.",
            "<strong>2. Wireless Rack:</strong> Turn ON the wireless microphone receivers rack.",
            "<strong>3. ATLAS Processor:</strong> Turn ON the Atlas audio processor unit in the equipment rack.",
            "<strong>4. House AMP:</strong> Power ON the <strong>Crown main house amplifier</strong>.",
            "<strong>5. QSC Wall Speakers:</strong> Turn ON the active sanctuary wall speakers.",
            "<strong>6. All Video ATEM:</strong> Power ON the ATEM video switcher (if broadcasting/recording).",
            "<strong>7. AVIOM Switch:</strong> Power ON the Aviom monitor switch located on the <strong>left side of the stage with the ethernet bundle</strong>."
          ],
          tip: "Always power amplifiers and powered speakers ON last, and turn them OFF first!"
        },
        {
          phase: "Phase 2: Venue Live 360 & Load 1NormalSunday Show File",
          badge: "Venue Live 360 & Show",
          stepNumber: 2,
          title: "Verify Venue Live 360 Processor & Load Sunday Show File",
          location: "Equipment Rack & Si Impact Touchscreen",
          actionSteps: [
            "<strong>Check Venue Live 360 Box:</strong> Look at the Venue Live 360 speaker box in the equipment rack. If unpowered/dark, unplug the power cord, wait 5 seconds, and replug until it boots.",
            "<strong>Load Sunday Show:</strong> On the console touchscreen, press <strong>Menu ➔ Show ➔ Load ➔ 1NormalSunday ➔ Apply</strong> (confirm prompt).",
            "<strong>🛑 NEVER OVERWRITE 1NormalSunday:</strong> It is the golden master reference. Always save changes under a dated file (<code>MM.DD.YYYY.show</code>) in <em>MMC ➔ Other Folder</em>.",
            "<strong>Unmute Master LR:</strong> Ensure the red Master LR fader on the far right of the console is raised to <strong>0 dB</strong> and unmuted before service starts."
          ]
        }
      ]
    },
    {
      id: "foyer-tv-audio",
      title: "Foyer TV & Lobby Audio Feed Not Working",
      icon: "tv",
      category: "Screens / Video / Foyer",
      severity: "medium",
      summary: "Restore lobby presentation display and foyer speaker audio. (Note: Foyer audio comes exclusively from the Foyer bus).",
      phases: [
        {
          phase: "Phase 1: Foyer TV Display & ATEM Switcher Wide View",
          badge: "Foyer TV Display",
          stepNumber: 1,
          title: "Check Foyer TV Power, HDMI Input & ATEM Key Output",
          location: "Church Foyer / Lobby & Sound Booth ATEM Switcher",
          actionSteps: [
            "<strong>Foyer TV Power & Input:</strong> Verify the Foyer TV is turned ON (no red standby light) and the TV input is set to <strong>HDMI 1</strong>.",
            "<strong>ATEM Switcher Configuration:</strong> On the ATEM Mini video switcher in the sound booth, leave the switcher on a <strong>wide view of the stage with the key on</strong> for the foyer TV during the second service and gathering times.",
            "<strong>Inspect HDMI Distribution:</strong> If the screen shows 'No Signal', check the HDMI splitter and video distribution box behind the booth video desk."
          ]
        },
        {
          phase: "Phase 2: Foyer Audio Feed (Exclusively from Foyer Bus)",
          badge: "Foyer Audio Bus",
          stepNumber: 2,
          title: "Verify Fader 24 ('Foyer') on Console Layer A & Rack Amp",
          location: "Soundcraft Si Impact (Layer A Fader 24) & AV Rack",
          actionSteps: [
            "<strong>Exclusive Routing Rule:</strong> The foyer audio comes <strong>exclusively from the foyer bus (Layer A, Fader 24 'Foyer')</strong>.",
            "<strong>Navigate to Layer A:</strong> Press <strong>Layer A</strong> on the Soundcraft console.",
            "<strong>Check Fader 24 ('Foyer'):</strong> Ensure <strong>Fader 24 ('Foyer')</strong> is <strong>UNMUTED</strong> (MUTE button must NOT glow red) and the fader is raised to nominal volume.",
            "<strong>Press SEL:</strong> Press illuminated <strong>SEL</strong> above Fader 24 to verify green input audio meters are bouncing.",
            "<strong>Check Foyer Amplifier in Rack:</strong> In the sound booth equipment rack, confirm the foyer amplifier channel is powered ON and volume knob is turned up to its marked level."
          ],
          tip: "Because foyer audio comes exclusively from the dedicated Foyer bus, you can independently adjust lobby volume without changing sanctuary volume."
        }
      ]
    }
  ],

  // 5. Specific Step-by-Step Patching Procedures
  patchingProcedures: {
    mixingStationReconnect: {
      title: "Mixing Station Tablet / iPad Reconnect Procedure",
      steps: [
        "1. On the iPad / tablet: Tap the Back Arrow (←) or Home button in the top left corner to return to the connection screen.",
        "2. Tap 'Backup search' to broadcast and locate the Soundcraft Si Impact console.",
        "3. Tap the mixer when discovered to reconnect.",
        "4. If not found, verify tablet / iPad Wi-Fi is connected to 'Waypoint Guest' (Password: Psalm27:4!) and inspect the HiQnet network Ethernet cable on the rear of the soundboard."
      ]
    },
    aviomSends: {
      title: "Aviom In-Ear Monitor Sends (Tablet & Soundboard)",
      steps: [
        "1. On Tablet (Mixing Station): Tap the channel ➔ locate 'Sends' on the right side of the screen ➔ raise the volume slider for the target Aviom mix.",
        "2. Gain Staging Rule: If the Aviom send fader is maxed out (+10dB) and still too quiet, add Preamp Gain to the channel instead (pull House fader down slightly to compensate).",
        "3. On Physical Soundboard: Press the target Aviom MIX button (e.g. MIX 1 Drums, MIX 4 Keys, MIX 5 Elec, MIX 6 Violin, MIX 9 Vocals, MIX 11 Acoustic) ➔ push up the channel fader ➔ press the MIX button again to exit."
      ]
    },
    loadShowFile: {
      title: "How to Load the Sunday Show File",
      steps: [
        "1. Press the MENU button next to the touch screen to open the Main Menu.",
        "2. Tap SHOW on the touch screen.",
        "3. Tap LOAD to open the storage navigation screen.",
        "4. Use the SCROLL encoder to locate and highlight the primary Sunday show file on internal memory (MMC) or connected USB key.",
        "5. Press the illuminated APPLY button to load the show (confirm the overwrite prompt if displayed).",
        "⚠️ CRITICAL: Do NOT overwrite 1NormalSunday (golden master template)!"
      ]
    },
    clickTrack: {
      title: "Click Track Patching (Front vs Drum Cage)",
      steps: [
        "1. On the Si Impact console, navigate to Layer B.",
        "2. Press the SEL (Select) button above Fader 2 (labeled 'Click').",
        "3. On the main touchscreen menu, tap Inputs.",
        "4. Patch the input according to the active click source location:",
        "   • Input 12: Select this for Front Stage Click (Center Front Box).",
        "   • Input 20: Select this for Drum Cage Click (Back Right Drum Cage Left Plate)."
      ]
    },
    violin: {
      title: "Violin Patching (Far Left Box)",
      steps: [
        "1. Stage Connection: Plug violin XLR/DI into Far Left Box (Input 1).",
        "2. Console Layer: Navigate to Layer A on the Si Impact.",
        "3. Select Channel: Press SEL button above Fader 19 (labeled 'Violin <1>').",
        "4. Soft Patch: On the touchscreen, tap Inputs and select Input 1.",
        "5. Aviom Routing: To send violin to in-ears, press MIX 6 (Flex 1) and push up Fader 19."
      ]
    },
    stompBoxFrontLeft: {
      title: "Stomp Box Patching (Front Left Box)",
      steps: [
        "1. Stage Connection: Plug stomp box into Front Left Box (Input 4).",
        "2. Console Layer: Navigate to Layer B on the Si Impact.",
        "3. Select Channel: Press SEL button above Fader 18 (labeled 'Stomp').",
        "4. Soft Patch: On the touchscreen, tap Inputs and select Input 4.",
        "5. Subwoofer Routing: Verify routed to MIX 8 (Sub) if low punch is needed."
      ]
    },
    cajonFrontRight: {
      title: "Cajon / Stomp Patching (Front Right Box)",
      steps: [
        "1. Stage Connection: Plug into Front Right Box (Input 18).",
        "2. Console Layer: Navigate to Layer A.",
        "3. Select Channel: Press SEL button above Fader 21 (labeled 'CjnStmp18').",
        "4. Soft Patch: On the touchscreen, tap Inputs and select Input 18.",
        "5. Subwoofer Routing: Mix 8 (Sub) active for low-end bass resonance."
      ]
    },
    guitarsAndKeys: {
      title: "General Guitars & Keys Soft-Patching",
      steps: [
        "1. Navigate to Layer A.",
        "2. Press SEL button for desired instrument (e.g., Fader 6 for 'Acou1<15>', Fader 7 for 'Acou2<13>', Fader 8 for 'KeysL<7>').",
        "3. On the touchscreen menu, press Inputs.",
        "4. Select the soundboard input number that matches the bracketed number on the scribble strip (e.g. Input 15 for Acou1, Input 13 for Acou2, Input 7 for KeysL)."
      ]
    },
    ipadPlaybackRouting: {
      title: "iPad & Mobile Audio Playback (Through Aviom & House)",
      usage: "Rehearsals, Saturday practices, song reference playback, track rehearsals, and pre-service prep.",
      serviceCaution: "⚠️ CAUTION FOR SUNDAY SERVICES: While this routing is ideal for practices and rehearsals, exercise caution during live Sunday service! If you route through the Click channel or modify sends, ensure Click is NEVER routed to House (Mix 12 / Master LR) during a service so metronome clicks do not broadcast to the congregation.",
      method1Physical: {
        title: "Method 1: Physical Patching (Recommended & Easiest)",
        steps: [
          "1. On stage, take the 1/8\" (3.5mm) click track cable and plug it into the iPad / phone headphone adapter.",
          "2. Instead of plugging into the dedicated click stage input, plug the cable into ANY spare instrument port (e.g. Aux 1 on Front Left Box / Input 3) or an unused vocal port on the stage box.",
          "3. On the console (Layer A) or Mixing Station app, navigate to that corresponding instrument / vocal fader.",
          "4. Control the fader like a normal instrument: push up the main fader for House sound (Mix 12 / Master LR), and adjust channel sends to route to the band's Aviom in-ears."
        ]
      },
      method2Advanced: {
        title: "Method 2: Advanced Console Routing (Modifying Click Channel Sends)",
        steps: [
          "1. Keep the iPad / playback device plugged into the standard Click cable on Layer B (Fader 2 'Click').",
          "2. On the Si Impact console or Mixing Station app, select the Click channel and view its Sends / Bus assignments.",
          "3. Raise the send from the Click channel to Mix 12 (House) and uncheck/unmute any House routing restrictions.",
          "4. Audio from the iPad will now broadcast simultaneously to the sanctuary House speakers and all musicians' Aviom in-ears.",
          "⚠️ POST-REHEARSAL CHECK: Always reset the Click channel's House send back to -∞ (OFF) before Sunday morning service!"
        ]
      }
    }
  },

  // 6. Power & Electrical Panels (Sound Booth Panel S & Lighting Panel)
  electricalPanels: {
    panelS: {
      name: "Gray Metal Electrical Panel (Panel S)",
      panelCode: "Panel S",
      location: "Inside back sound booth",
      color: "#64748b",
      description: "Supplies AC power to stage floor pockets, platform receptacles, sound booth quad outlets, sanctuary displays, projectors, and subwoofers.",
      troubleshooting: [
        {
          issue: "Stage Floor Boxes / Pockets Lost AC Power",
          action: "Reset Stage Power: Locate breakers 4 and 6 ('Floor Recept. Stage') and cycle them OFF and back ON.",
          breakers: ["4", "6"],
          critical: true
        },
        {
          issue: "Sound Room / Booth Lights Not Working",
          action: "Check breaker 9 ('Sound Rm Lights') in Panel S to ensure it hasn't tripped. Cycle OFF then ON.",
          breakers: ["9"],
          critical: true
        },
        {
          issue: "Sound Booth Outlets / Desk Power Lost",
          action: "Check breakers 1 & 2 or 7 & 8 ('Quad Recept. Rm 110').",
          breakers: ["1 & 2", "7 & 8"]
        },
        {
          issue: "Sanctuary Front TVs No AC Power",
          action: "Check breaker 11 ('TV Sanctuary').",
          breakers: ["11"]
        },
        {
          issue: "Sanctuary Subwoofers No Power / Dead Subs",
          action: "Check breakers 29–30 ('10 R & L SUBS').",
          breakers: ["29–30"]
        },
        {
          issue: "Sanctuary Projectors No Power",
          action: "Check breaker 13 ('Projector Sanctuary').",
          breakers: ["13"]
        }
      ],
      circuits: [
        { circuit: "1 & 2", label: "Quad Recept. Rm 110", assignment: "Sound Booth / Rm 110 outlets", category: "booth", icon: "🔌", notes: "Booth computer workstations, audio racks & quad outlets" },
        { circuit: "3", label: "Spare (Floor Recept)", assignment: "Platform/Floor utility", category: "spare", icon: "📦", notes: "Unassigned floor receptacle spare" },
        { circuit: "4", label: "Floor Recept. Stage", assignment: "Stage floor pockets / platform power", category: "stage", icon: "⚡", critical: true, notes: "Stage floor boxes, musician pedalboards & instruments (Cycle with Breaker 6)" },
        { circuit: "5", label: "Spare (Floor Recepts)", assignment: "Platform/Floor utility", category: "spare", icon: "📦", notes: "Unassigned floor receptacle spare" },
        { circuit: "6", label: "Floor Recept. Stage", assignment: "Stage floor pockets / platform power", category: "stage", icon: "⚡", critical: true, notes: "Stage floor boxes, musician pedalboards & instruments (Cycle with Breaker 4)" },
        { circuit: "7 & 8", label: "Quad Recep. Rm 110 / Quad Recept.", assignment: "Sound Booth / Rm 110 outlets", category: "booth", icon: "🔌", notes: "Sound booth quad receptacles & desk power" },
        { circuit: "9", label: "Sound Rm Lights", assignment: "Sound booth lighting", category: "lighting", icon: "💡", critical: true, notes: "Dedicated lighting circuit for sound booth room" },
        { circuit: "10", label: "Platform Recepts.", assignment: "Stage platform receptacles", category: "stage", icon: "⚡", notes: "Stage platform receptacles" },
        { circuit: "11", label: "TV Sanctuary", assignment: "Front sanctuary display TVs", category: "video", icon: "📺", critical: true, notes: "Supplies AC power to front sanctuary presentation TVs" },
        { circuit: "12", label: "Platform Recept. Stairs", assignment: "Platform stair receptacles", category: "stage", icon: "⚡", notes: "Platform stair receptacles" },
        { circuit: "13", label: "Projector Sanctuary", assignment: "Sanctuary projectors", category: "video", icon: "📽️", notes: "Sanctuary video projectors" },
        { circuit: "14", label: "Spare", assignment: "Unassigned", category: "spare", icon: "⚪", notes: "Unassigned spare breaker" },
        { circuit: "29–30", label: "10 R & L SUBS", assignment: "Sanctuary subwoofers", category: "audio", icon: "🔉", critical: true, notes: "Sanctuary subwoofers (Left & Right subs)" }
      ]
    },
    lightingPanel: {
      name: "Large Black Electrical Panel (Lighting)",
      location: "Inside back sound booth, directly next to Panel S",
      color: "#1e293b",
      description: "Dedicated exclusively to sanctuary and stage lighting control.",
      notes: "Controls theatrical stage lights and sanctuary architectural lighting. Do not use for stage audio/instrument AC power troubleshooting."
    }
  },

  // 7. Weekend Standard Pre-Service Readiness Checklist
  preServiceChecklist: [
    // Audio & Console
    { id: "chk-pwr-console", label: "Turn ON sound booth power & boot Soundcraft Si Impact console", category: "Audio & Console" },
    { id: "chk-load-show", label: "Load Sunday show file: 1NormalSunday (Apply show)", category: "Audio & Console" },
    { id: "chk-wireless-mics", label: "Check wireless mic batteries & test audio (Pastor & Worship Team)", category: "Audio & Console" },
    { id: "chk-computer-audio", label: "Line check Mac/PC audio for sermon videos & background music (Layer A Faders 22 & 23)", category: "Audio & Console" },
    { id: "chk-aviom-monitors", label: "Verify Aviom in-ear monitor signals with worship band", category: "Audio & Console" },
    { id: "chk-master-fader", label: "Unmute Master LR fader before service starts", category: "Audio & Console" },

    // Visuals & Screens
    { id: "chk-proclaim-onair", label: "Open Proclaim slides and click 'On Air'", category: "Visuals & Screens" },
    { id: "chk-sanctuary-tvs", label: "Turn ON Front Sanctuary TVs & verify slide display (HDMI 1)", category: "Visuals & Screens" },
    { id: "chk-foyer-tv", label: "Turn ON Foyer TV & verify lobby audio feed (Layer A Fader 24)", category: "Visuals & Screens" },

    // Broadcast & Livestream
    { id: "chk-laptop-yt", label: "Open YouTube Studio (studio.youtube.com) on broadcast laptop & verify preview", category: "Broadcast & Stream" },
    { id: "chk-av-controller", label: "Run automated pre-flight sweep on Sanctuary AV Controller (http://localhost:3050/checklist)", category: "Broadcast & Stream" },
    { id: "chk-atem-onair-rec", label: "Press 'ON AIR' & 'REC' backup recording on ATEM switcher board", category: "Broadcast & Stream" },
    { id: "chk-go-live", label: "Click 'Go Live' in YouTube Studio ~15 minutes before service", category: "Broadcast & Stream" },
    { id: "chk-phone-verify", label: "Check public YouTube stream on phone (verify video & audio)", category: "Broadcast & Stream" },

    // Embrace & Accessibility
    { id: "chk-embrace-tv", label: "Turn ON Embrace Room TV & verify video feed", category: "Embrace & Accessibility" },
    { id: "chk-obs-captions", label: "Live Captions: Confirm VoxStream PRO dashboard is green at http://localhost:8765/dashboard, click 📺 Captions View (or open http://localhost:8765/display) to confirm captions view loads, audio meter bounces, and Accessibility Captions QR handout is at the booth", category: "Embrace & Accessibility", detail: "Confirm VoxStream PRO dashboard is green at http://localhost:8765/dashboard. Click 📺 Captions View button or navigate to http://localhost:8765/display to confirm the captions view loads on screen. Confirm Accessibility Captions QR handout is at the booth for attendees with iPads." },
    { id: "chk-wavecast-test", label: "Verify WaveCAST assistive listening audio on phone (Waypoint Guest Wi-Fi)", category: "Embrace & Accessibility" },

    // Lighting & Atmosphere
    { id: "chk-lighting-start", label: "Set booth lighting panel to Level 1 (switch to Level 2 for worship songs)", category: "Booth & Lighting" }
  ],

  // 8. Livestream & Presentation Operations
  livestreamSetup: {
    youtubeSite: "studio.youtube.com",
    youtubeUrl: "https://studio.youtube.com",
    note: "See the Google Keep note for more details and login credentials",
    setupSteps: [
      { step: "a", title: "Unlock Laptop", action: "Power on and unlock the sound booth broadcast laptop." },
      { step: "b", title: "Open Livestream Site", action: "Go to studio.youtube.com in Google Chrome / browser." },
      { step: "c", title: "Access Live Control Room", action: "Click 'Create' in the top right or go to 'Live control room'." },
      { step: "d", title: "Hit 'ON AIR' on ATEM Board", action: "Hit 'ON AIR' on the physical ATEM switcher board." },
      { step: "e", title: "Verify Video Preview", action: "Ensure preview of video shows correctly in YouTube Studio." },
      { step: "f", title: "Go Live (~15 min before)", action: "Click 'Go Live' ~15 minutes before the service starts." },
      { step: "g", title: "Public Stream Verification", action: "At the beginning and throughout the service, use your phone to view the public livestream to ensure video and audio are working properly. (If no audio: verify PC to the left of the stage is ON and the red tape audio cord is plugged into the back of the ATEM board)." },
      { step: "h", title: "Start ATEM Backup Recording", action: "Hit 'REC' on the ATEM board in the top right as a backup recording." }
    ],
    shutdownSteps: [
      { step: "a", title: "Stop Backup Recording", action: "Press 'STOP' recording on the top right of the ATEM board." },
      { step: "b", title: "End Stream on YouTube", action: "End the YouTube stream ~2 minutes after the end of service." },
      { step: "c", title: "Foyer TV Wide Stage View", action: "Leave the stream/switcher on a wide view of the stage with the key on for the foyer TV during the second service." }
    ],
    lightingControls: {
      levels: [
        { level: "Level 1", name: "Before / After Service", button: 1, usage: "Before, after, and during regular service gathering & dismissal.", details: "Full house architectural illumination + balanced stage lighting." },
        { level: "Level 2", name: "Songs / Music", button: 2, usage: "Worship set, congregational singing & praise team.", details: "Dims house lights, warm atmospheric focus on worship team & stage." },
        { level: "Level 3", name: "Everything Else", button: 3, usage: "General service flow, transitions, offering.", details: "Comfortable balanced lighting for transitions." },
        { level: "Level 4", name: "Video Showing", button: 4, usage: "Video announcements, mission spotlights, sermon video clips.", details: "Darkens house for maximum video contrast on sanctuary TVs." },
        { level: "Level 5", name: "Full 100%", button: 5, usage: "Rehearsals, setup, cleaning, and maintenance.", details: "100% maximum brightness on all sanctuary & stage fixtures." },
        { level: "Level 6", name: "Spoken Word", button: 6, usage: "Sermon, preaching, announcements, scripture reading.", details: "Platform spotlighting on pulpit / podium speaker with ambient house." },
        { level: "Level 7", name: "OFF", button: 7, usage: "End of service shutdown.", details: "Powers off all theatrical and architectural lighting." }
      ],
      quickCheatSheet: [
        "1. BEFORE/AFTER SERVICE (Before, After, During) ➔ Button 1",
        "2. SONGS/MUSIC (Worship Songs) ➔ Button 2",
        "3. EVERYTHING ELSE ➔ Button 3",
        "4. VIDEO SHOWING (Show Video) ➔ Button 4",
        "5. FULL 100% (All Lights Full) ➔ Button 5",
        "6. SPOKEN WORD (Sermon / Preaching) ➔ Button 6",
        "7. OFF (Shutdown All) ➔ Button 7"
      ]
    },
    proclaimGuide: {
      title: "Proclaim Presentation & Slides Quick Guide",
      onAirInstructions: "1. Open Proclaim ➔ 2. Select today's service ➔ 3. Tap 'On Air' (top right).",
      quickScreens: [
        { key: "Normal", label: "Normal presentation mode with full lyrics / slides" },
        { key: "Blank (F10)", label: "Blanks output to solid black screen" },
        { key: "Clear (F11)", label: "Clears lyric text overlay while preserving background media" },
        { key: "Logo (F12)", label: "Displays church logo slide immediately" }
      ],
      displayRouting: "Virtual Screen: Slides ➔ External HDMI Splitter (Sanctuary TVs) &bull; Virtual Screen: Confidence ➔ Stage Display &bull; macOS Displays ➔ Extended Desktop (Use as Separate Display)."
    }
  },

  // 9. Saturday Line Check & Rehearsal Workflow
  saturdayRehearsalWorkflow: {
    title: "Saturday Line Check & Rehearsal Workflow",
    goal: "To efficiently set the technical foundation for rehearsal while relationally supporting the worship team with a systematic, encouraging, and clear line check.",
    bootOrder: [
      { step: 1, name: "Board (Console)", desc: "Power ON Soundcraft Si Impact console." },
      { step: 2, name: "Wireless Rack", desc: "Turn ON wireless mic receivers rack." },
      { step: 3, name: "ATLAS", desc: "Turn ON Atlas audio processor unit." },
      { step: 4, name: "House AMP", desc: "Power ON Crown main house amplifier." },
      { step: 5, name: "QSC Wall Speakers", desc: "Turn ON active QSC wall speakers." },
      { step: 6, name: "All Video ATEM", desc: "Power ON ATEM switcher (only if there is an event)." },
      { step: 7, name: "AVIOM", desc: "Turn ON Aviom personal monitor switch (located on stage left with ethernet bundle)." }
    ],
    shutdownOrder: [
      { step: 1, name: "AVIOM", desc: "Leave Aviom ON after set rehearsal if Sunday service is next." },
      { step: 2, name: "ATEM", desc: "Power off video switcher if powered." },
      { step: 3, name: "QSC Wall Speakers", desc: "Flip all 6 switches off." },
      { step: 4, name: "House AMP", desc: "Power off main amplifier." },
      { step: 5, name: "ATLAS", desc: "Power off Atlas processor." },
      { step: 6, name: "Wireless Rack", desc: "Power off wireless receivers." },
      { step: 7, name: "Board (Console)", desc: "Shut down Soundcraft console last." }
    ],
    preArrivalSteps: [
      "Load Scene & Power Up: Turn on system following boot order and load 1NormalSunday scene (Show -> Save As Date.show).",
      "Confirm the Roster: Review this week's Planning Center services list for roster and stage setup changes.",
      "Mute Foyer Feeds: Ensure foyer feeds are muted during setup phase (speakers only, Layer A).",
      "PC Setup: Turn on PC (only open/start Reaper if track recording today).",
      "Check Inputs: Check click track input.",
      "Prep Talkback Mic: Ensure wireless pastor mic on 'Owens layer' (White or Blue Wireless) has fresh battery."
    ],
    teamArrivalTips: [
      "Greet everyone by name: Build community and relational connection.",
      "Help them settle in: Assist with direct boxes (in closet to the right of stage), locate stage box ports, and ask 'Do you have everything you need?'."
    ],
    clickTrackPatching: {
      layer: "Layer B",
      fader: "Fader 2 ('Click')",
      steps: [
        "Navigate to Layer B on the console.",
        "Press the SEL button above Fader 2 (labeled 'Click').",
        "On main soundboard touch screen menu, press 'Inputs'.",
        "Patch input: Front Click = FX1 -> recorder (Mic 12 / Input 12) | Drum Cage Click = Mic 20 (Input 20).",
        "Press 'Menu' twice to exit."
      ]
    },
    lineCheckProcess: {
      gainTarget: "-8 to -10 dB (Meter to right of volume fader on Mixing Station app. Sets in-ear and house baseline).",
      tonePresets: "Mixing Station App: Select Channel -> Folder Icon -> Local Presets. Copy/Paste: Folder -> Copy -> Paste (⚠️ check +48V red phantom power, gain & routing!).",
      aviomCheck: "Ask: 'Are you getting a good signal of yourself in your Aviom?'",
      standardOrder: [
        { instrument: "Drums", action: "Individual mics (kick, snare, toms) -> Tom balance check -> Simple steady beat for full kit." },
        { instrument: "Bass", action: "Verify sub-bass and house levels." },
        { instrument: "Keyboards / Piano", action: "Level balance, stereo imaging, and patch consistency." },
        { instrument: "Violin / Special Instruments", action: "Extra setup time, EQ shaping, and DI check." },
        { instrument: "Guitars (Acoustic & Electric)", action: "Acoustic: clean signal. Electric: main rhythm sound + engage lead/boost pedal to test volume jump." },
        { instrument: "Vocals", action: "Background vocalists first, worship leader last. Sing a line from a worship song (not 'test 1, 2')." }
      ]
    },
    massProtocol: [
      { letter: "M", title: "Mix", desc: "Mix the band together in the main room." },
      { letter: "A", title: "Around the Room", desc: "Walk around the sanctuary to verify coverage and sound consistency." },
      { letter: "S", title: "Songs", desc: "Learn arrangements, cues, dynamics, and vocal leads." },
      { letter: "S", title: "Subs", desc: "Check sub-bass performance and low-end definition." }
    ],
    saveShowFileProtocol: [
      "Go to Touchscreen Menu -> Show",
      "Press 'Save As'",
      "Set show name using date: [MM.DD.YYYY] (e.g. 08.23.2026)",
      "Press 'Apply'",
      "Select 'MMC' -> 'Other Folder'",
      "Press 'OK' to confirm. ⚠️ NEVER overwrite '1NormalSunday'!"
    ]
  },

  // 10. 1-Tap SOS Emergency Quick-Fix Actions (Extensible)
  sosQuickFixes: [
    {
      id: "sanctuary-tvs",
      title: "Front TVs Blank",
      badge: "🚨 Urgent Display Fix",
      subtitle: "Choir closet ceiling splitter & Mac power strip reset",
      icon: "📺",
      accentColor: "#ef4444"
    }
  ],

  // 11. Popular Quick-Search Suggestion Chips
  popularSearchChips: [
    { label: "📺 TVs Blank", query: "sanctuary-tvs", type: "scenario" },
    { label: "⚡ Stage Buzz", query: "ground-hum-buzz", type: "scenario" },
    { label: "🎤 Dead Mic", query: "soundboard-dead-channel", type: "scenario" },
    { label: "💻 Mac Audio", query: "computer-audio-no-sound", type: "scenario" },
    { label: "🔌 Boot Order", query: "system-boot-order", type: "scenario" },
    { label: "📱 Tablet / iPad", query: "mixing-station-disconnect", type: "scenario" },
    { label: "💾 Load Show", query: "load-show-file", type: "scenario" },
    { label: "📺 Foyer TV", query: "foyer-tv-audio", type: "scenario" }
  ],

  // 12. Printable Physical Station QR Placards
  boothPlacards: [
    {
      id: "placard-tvs",
      qrSlug: "tvs",
      title: "Sanctuary TVs Splitter",
      station: "Choir Closet Ceiling (Stage-Left)",
      targetRoute: "#q/tvs",
      resolvedRoute: "#scenario/sanctuary-tvs",
      instruction: "Unplug ceiling HDMI power cord for 10s and replug",
      icon: "📺",
      color: "#ef4444"
    },
    {
      id: "placard-confidence",
      qrSlug: "conf",
      title: "Stage Confidence TV Toggle",
      station: "Underneath Sound Booth Desk",
      targetRoute: "#q/conf",
      resolvedRoute: "#scenario/confidence-monitor-switch",
      instruction: "Press button under desk to toggle Static Slide vs BirdDog view",
      icon: "🖥️",
      color: "#0ea5e9"
    },
    {
      id: "placard-captions-view",
      qrSlug: "captions",
      title: "Accessibility Captions View — Read Along on Your Device",
      subtitle: "Powered by Waypoint VoxStream PRO",
      station: "Embrace Room Table & Guest Wi-Fi",
      targetRoute: "#q/captions",
      resolvedRoute: "#tab/embrace-hub/sub-captions",
      instruction: "Connect to Waypoint Guest Wi-Fi, open 192.168.1.145:8765/display or scan this QR, then tap Aa for Bionic Reading or Dy for OpenDyslexic font — Scripture references highlight in gold",
      steps: [
        "Connect to the **Waypoint Guest** Wi-Fi",
        "Open your browser and go to **192.168.1.145:8765/display** OR scan the QR code on this card",
        "Tap the **Aa** button to toggle **Bionic Reading** mode (bolds the first half of each word to help reading speed)",
        "Tap the **Dy** button to switch to the **OpenDyslexic** font",
        "Scripture references (like 'John 3:16') are automatically highlighted in gold"
      ],
      icon: "♿",
      color: "#3b82f6"
    },
    {
      id: "placard-panel-s",
      qrSlug: "panel-s",
      title: "Sound Booth Electrical Panel S",
      station: "Inside Gray Breaker Door",
      targetRoute: "#q/panel-s",
      resolvedRoute: "#tab/audio-hub/sub-power",
      instruction: "Breakers 4 & 6 for stage pockets, Breaker 9 for booth lights",
      icon: "⚡",
      color: "#eab308"
    },
    {
      id: "placard-ground-lift",
      qrSlug: "buzz",
      title: "Stage DI Ground Lift & Stage Map",
      station: "Stage Floor Boxes & DI Storage",
      targetRoute: "#q/buzz",
      resolvedRoute: "#scenario/ground-hum-buzz",
      instruction: "Flip GND/LIFT switch on DI to kill 60Hz guitar/keys buzz",
      icon: "⚡",
      color: "#f97316"
    },
    {
      id: "placard-lighting",
      qrSlug: "lights",
      title: "7-Scene Lighting Wall Keypad",
      station: "Sanctuary Lighting Wall Pad",
      targetRoute: "#q/lights",
      resolvedRoute: "#tab/livestream-hub/sub-lights",
      instruction: "Level 1: Before/After • Level 2: Songs • Level 4: Video",
      icon: "💡",
      color: "#eab308"
    },
    {
      id: "placard-boot-order",
      qrSlug: "boot",
      title: "Morning System Boot Order",
      station: "Main Sound Equipment Rack",
      targetRoute: "#q/boot",
      resolvedRoute: "#scenario/system-boot-order",
      instruction: "1. Board ➔ 2. Wireless ➔ 3. Atlas ➔ 4. Amps ➔ 5. Speakers",
      icon: "🔌",
      color: "#10b981"
    },
    {
      id: "placard-show-file",
      qrSlug: "show",
      title: "Soundcraft Show File Rule",
      station: "Si Impact Soundboard Bridge",
      targetRoute: "#q/show",
      resolvedRoute: "#scenario/load-show-file",
      instruction: "🛑 NEVER overwrite 1NormalSunday! Save as MM.DD.YYYY.show",
      icon: "💾",
      color: "#a855f7"
    },
    {
      id: "placard-wavecast",
      qrSlug: "wave",
      title: "WaveCAST Assistive Listening",
      station: "Sound Desk & Greeter Stand",
      targetRoute: "#q/wave",
      resolvedRoute: "#tab/embrace-hub/sub-wavecast",
      instruction: "SSID: Waypoint Guest • Password: Psalm27:4!",
      icon: "🎧",
      color: "#10b981"
    }
  ],

  // 13. Permanent Short QR Slugs & Backward-Compatibility Routing Map
  permanentSlugMap: {
    'tvs': 'scenario/sanctuary-tvs',
    'conf': 'scenario/confidence-monitor-switch',
    'panel-s': 'tab/audio-hub/sub-power',
    'pwr': 'tab/audio-hub/sub-power',
    'power': 'tab/audio-hub/sub-power',
    'buzz': 'scenario/ground-hum-buzz',
    'di': 'scenario/ground-hum-buzz',
    'lights': 'tab/livestream-hub/sub-lights',
    'boot': 'scenario/system-boot-order',
    'show': 'scenario/load-show-file',
    'wave': 'tab/embrace-hub/sub-wavecast',
    'foyer': 'scenario/foyer-tv-audio',
    'mac': 'scenario/computer-audio-no-sound',
    'pc': 'scenario/computer-audio-no-sound',
    'checklist': 'tab/checklist',
    'log': 'tab/logbook',
    'click': 'tab/click-hub',
    'tablet': 'scenario/mixing-station-disconnect',
    'ipad': 'scenario/mixing-station-disconnect',
    'mixingstation': 'scenario/mixing-station-disconnect',
    'captions': 'tab/embrace-hub/sub-captions',
    'stream-captions': 'scenario/obs-captions',
    'streamcc': 'scenario/obs-captions',
    'readalong': 'scenario/embrace-captions-view',
    'display': 'scenario/embrace-captions-view'
  },

  // 14. Application Settings Defaults
  defaultAppSettings: {
    publicBaseUrl: "", // Empty string defaults to current window.location origin + pathname
    voxstreamDeviceIp: "192.168.1.150" // Sound booth PC local Wi-Fi IP for VoxStream /display QR
  }
};
