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
      summary: "Follow these 4 sequential phases ordered from most common quick fix to system checks.",
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
          title: "Verify Mac Presentation Computer Connections and Power Strip",
          location: "Sound Booth: Behind the main presentation Mac.",
          actionSteps: [
            "Inspect the back of the Mac: Ensure the HDMI cable is pushed all the way firmly into its port (not hanging loosely).",
            "Locate the power strip directly behind the Mac: Confirm it is switched ON (the switch light must be illuminated) and the circuit breaker has not tripped.",
            "Perform a booth sweep: Verify all computer monitors, converters, and distribution boxes have power LEDs lit."
          ]
        },
        {
          phase: "Phase 3: Booth Routing & Proclaim Software",
          badge: "Booth Desk Splitter & Proclaim",
          stepNumber: 3,
          title: "Restart Booth Splitter & Check Proclaim 'On Air'",
          location: "Sound Booth: Underneath the main sound booth desk.",
          actionSteps: [
            "Locate the secondary HDMI splitter underneath the main desk inside the booth.",
            "Unplug the power cable, wait 10 seconds, and plug it back in to power cycle it.",
            "Open Proclaim presentation software on the Mac.",
            "Verify the presentation is active and set to 'On Air' (top right button in Proclaim).",
            "Check Proclaim display settings: Ensure the presentation output feed is routed to the external displays (Sanctuary Screens) rather than just previewing on the local operator screen."
          ]
        },
        {
          phase: "Phase 4: Final Cable Reseating & TV Remote Input",
          badge: "Endpoints & TV Input",
          stepNumber: 4,
          title: "Inspect Booth HDMI Cables & Verify TV Input (HDMI 1)",
          location: "Sanctuary Front Wall & Booth Desk.",
          actionSteps: [
            "Booth HDMI Cable Check: Trace the HDMI cables running from the Mac to the under-desk splitter. Disconnect each end and plug back in firmly.",
            "Verify Sanctuary TVs Power: Confirm both TVs at the front of the sanctuary are physically turned on (no standby red dot).",
            "TV Input Remote Check: Using the TV remote, verify the TV input is set to HDMI 1.",
            "Important note: The system relies purely on direct HDMI cable runs (no network signal extenders). Remote button clicks or power glitches frequently reset TVs to HDMI 2 or TV Tuner."
          ]
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
      summary: "Troubleshooting guide for the Embrace Conference Room TV HDMI-over-Ethernet extender system (TX/RX), Nest camera outlet timer, and OBS fullscreen projection.",
      phases: [
        {
          phase: "Phase 1: Inspect HDMI Cable (Behind TV)",
          badge: "Behind Embrace TV",
          stepNumber: 1,
          title: "Inspect HDMI Cable on Receiver Box (Behind TV)",
          location: "Embrace Conference Room: Mounted directly behind the Embrace Room TV.",
          actionSteps: [
            "Locate the small HDMI receiver box (RX) mounted directly behind the Embrace Room TV.",
            "Check the HDMI cable connected to the small receiver box behind the TV.",
            "Make sure both ends (receiver HDMI out to TV HDMI input) are fully seated, as this cable often gets bumped, strained, or unplugged."
          ],
          tip: "Because the TV is wall-mounted, cable strain or physical movement frequently unseats the HDMI connector."
        },
        {
          phase: "Phase 2: Check Power & Outlet Timer",
          badge: "Power & Nest Camera Timer",
          stepNumber: 2,
          title: "Check Power & Nest Camera Outlet Timer",
          location: "Embrace Conference Room: Wall outlet timer controlling Nest camera & TV receiver.",
          actionSteps: [
            "Verify that the small receiver box (RX) behind the TV has power lights on.",
            "Check the shared power source: Because the receiver shares an outlet timer with the Nest camera, ensure the timer is active and currently supplying power to the outlet.",
            "If the timer is currently in an 'OFF' state or cycle, toggle or override the timer to restore AC power to both the receiver box and Nest camera."
          ],
          tip: "Quick Indicator: If the room's Nest camera is also unpowered / offline, the shared outlet timer is switched OFF."
        },
        {
          phase: "Phase 3: Inspect Transmitter (Sound Booth)",
          badge: "Sound Booth TX Unit",
          stepNumber: 3,
          title: "Inspect Transmitter Unit (Under Sound Booth Desk)",
          location: "Sound Booth: Underneath the desk inside the main sound booth.",
          actionSteps: [
            "Locate the transmitter unit (TX) situated underneath the desk in the sound room.",
            "Confirm that the power cable is firmly plugged in and the power LED is illuminated.",
            "Check the HDMI input cable (feeding video from the computer / video switcher) and ensure it is fully inserted.",
            "Inspect the Ethernet cable run and confirm that the active link / power status LEDs are lit and communicating."
          ],
          tip: "An active link light on both TX (booth) and RX (room) confirms the Cat6 network video bridge is healthy."
        },
        {
          phase: "Phase 4: OBS Studio Fullscreen Projection Setup",
          badge: "OBS Studio / LONTIUM",
          stepNumber: 4,
          title: "Project OBS Video Preview to LONTIUM External Display",
          location: "Sound Booth Broadcast Computer (OBS Studio)",
          actionSteps: [
            "Open OBS Studio on the broadcast computer.",
            "Locate the main video preview window (where your stream / recording is visible).",
            "Right-click anywhere on the video preview window.",
            "In the context menu, hover over 'Fullscreen Projector (Preview)'.",
            "Select 'LONTIUM' from the list of available displays.",
            "The OBS feed will instantly project onto the Embrace conference room TV screen."
          ],
          tip: "Quick Tip: If you ever need the preview in a movable window instead of full screen, choose 'Windowed Projector (Preview)' from that same right-click menu."
        }
      ]
    },
    {
      id: "obs-captions",
      isEmbrace: true,
      title: "OBS Cloud Closed Captions Setup & Troubleshooting",
      icon: "captions",
      category: "Embrace Group / Closed Captions",
      severity: "medium",
      summary: "How to enable the Cloud Closed Captions plugin in OBS Studio and resolve blank preview, ASIO driver disconnects, and text lag.",
      phases: [
        {
          phase: "Phase 1: How to Enable the Plugin",
          badge: "Plugin Startup",
          stepNumber: 1,
          title: "Launch Caption Dock & Turn On Captioning",
          location: "Sound Booth Broadcast Computer (OBS Studio)",
          actionSteps: [
            "<strong>Open the Plugin Menu:</strong> In the top OBS menu bar, click <strong>Tools ➔ Cloud Closed Captions</strong>.",
            "<strong>Turn On Captioning:</strong> In the Caption Preview dock/window, make sure the <strong>Captioning Enabled</strong> box is checked.",
            "<strong>Click the Preview Box:</strong> Click the preview box inside the caption dock to make it turn on and start transcribing."
          ],
          tip: "Ensure the Caption Preview dock is docked or visible in OBS for quick monitoring during service."
        },
        {
          phase: "Phase 2: No Captions Generating (Preview Blank)",
          badge: "Audio & Network Check",
          stepNumber: 2,
          title: "Verify Active Scene, ASIO Input & Internet Connection",
          location: "OBS Audio Mixer & Status Bar",
          actionSteps: [
            "<strong>Active Scene Check:</strong> The plugin only transcribes audio when the selected audio source is active and unmuted in the currently active scene. Ensure the microphone fader is unmuted in the OBS Audio Mixer.",
            "<strong>Red Indicator Dot:</strong> If the status line at the bottom displays a <strong>red dot next to CC (ASIO Input Capture) for Preview</strong>, verify that the ASIO interface / Soundcraft soundboard USB driver is connected and receiving audio signal.",
            "<strong>Internet Connection:</strong> The plugin uses the <strong>Google Cloud Speech Recognition API</strong>, which requires an active internet connection to transcribe in real time. Verify the booth PC has internet access."
          ],
          tip: "A green status dot indicates active ASIO streaming to Google Cloud Speech API."
        },
        {
          phase: "Phase 3: Captions Cutting Off or Lagging",
          badge: "Formatting & Stream Reset",
          stepNumber: 3,
          title: "Fix Text Formatting & Restart Recognition Stream",
          location: "OBS ➔ Tools ➔ Cloud Closed Captions ➔ Caption Settings",
          actionSteps: [
            "<strong>Text Formatting:</strong> In <strong>Caption Settings ➔ File Output</strong>, verify <strong>Line Length</strong> (default ~32) and <strong>Lines</strong> (default ~3) are set appropriately so lines do not overflow the screen boundary.",
            "<strong>Restart Plugin Session:</strong> Uncheck and recheck <strong>Captioning Enabled</strong> at the top of the settings window to restart the cloud recognition stream and clear any accumulated network lag."
          ],
          tip: "If text is running off the stream canvas, reducing Line Length to 30-32 will wrap phrases onto clean new lines."
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
      summary: "Guest connection setup and troubleshooting for deaf / hard-of-hearing assistive listening app.",
      guestInstructions: [
        "1. Connect smartphone to Wi-Fi 'Waypoint Guest' (Password: Psalm27:4!).",
        "2. Download & open the WaveCAST App from Apple App Store or Google Play Store.",
        "3. Once the app opens, tap on the 'Waypoint church' channel to begin listening."
      ],
      phases: [
        {
          phase: "Scenario 1: Guests Can't See 'Waypoint Church' in App",
          badge: "WiFi / App Issue",
          stepNumber: 1,
          title: "Guest Device Wi-Fi Verification & Force Restart",
          location: "Guest Phone / Sound Booth Hardware",
          actionSteps: [
            "Verify Wi-Fi: Phone must be on 'Waypoint Guest' (Password: Psalm27:4!) and NOT on cellular 5G/LTE.",
            "Restart WaveCAST App: Have guest completely force-close the app (swipe up to kill) and reopen it while connected to Waypoint Guest Wi-Fi.",
            "Hardware Check: Check Williams AV unit on top of computer in sound booth. Ensure rear Ethernet cable is securely clicked in.",
            "Unit Restart: If still not broadcasting, press front power button on Williams AV unit to reboot."
          ]
        },
        {
          phase: "Scenario 2: No Audio Playing on App (Shows Connected)",
          badge: "Audio Signal Flow",
          stepNumber: 2,
          title: "Check Reaper Software Meters & Audio Patch Cables",
          location: "Sound Booth PC (Reaper DAW)",
          actionSteps: [
            "Check Reaper Meters: Look at the computer screen with Reaper DAW open. Are green volume bars bouncing? If NOT, the computer is not receiving audio from the Soundcraft console.",
            "Check Console DAW Sends: On the Si Impact, verify Layer C Fader 18 ('To Reaper') is up and unmuted, or Mix 14 broadcast bus is feeding Reaper.",
            "Check Physical Audio Cables: Ensure the audio cables from the soundboard into the PC interface, and from PC to the Williams AV unit, are firmly pushed in.",
            "Check Smartphone Volume: Remind the guest to check physical volume rocker buttons on the side of their phone and unmute headphones."
          ]
        },
        {
          phase: "Scenario 3: Audio Sounds Distorted, Scratchy, or 'Blown Out'",
          badge: "Gain Staging / Clipping",
          stepNumber: 3,
          title: "Lower Clipping Master / DAW Levels",
          location: "Soundcraft Si Impact & Reaper DAW",
          actionSteps: [
            "The audio signal entering the Williams AV transmitter is clipping.",
            "Lower the master send fader on your soundboard feeding the DAW (or Layer C Fader 18 / Mix 14).",
            "Lower the main output fader inside Reaper until the meters stay in the green/yellow zone (never hitting red 0dBFS clipping)."
          ]
        },
        {
          phase: "Scenario 4: Reaper is Frozen or Unresponsive",
          badge: "Software / PC Lockup",
          stepNumber: 4,
          title: "Reaper Force Restart & PC Reboot Protocol",
          location: "Sound Booth Computer",
          actionSteps: [
            "Restart Software: Close / Force Quit Reaper and reopen it.",
            "Full Reboot: If the PC itself is lagging, perform a quick system restart of the PC.",
            "Note: Reaper is configured to start up automatically when Windows boots."
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
      summary: "Systematic 4-point signal path diagnostic to trace missing audio in 60 seconds.",
      phases: [
        {
          phase: "Point 1: Physical Stage Connection",
          badge: "Stage Box",
          stepNumber: 1,
          title: "Verify Stage Box Port & Cable",
          location: "Stage Floor Boxes",
          actionSteps: [
            "Identify the physical box (Far Left, Front Left, Back Left, Center Front, Front Right, Far Right, or Drum Cage).",
            "Confirm the performer is plugged into the correct input number (e.g. Center Front Box Input 11 for Electric Guitar, Input 13 for Acoustic Guitar 2).",
            "Check XLR / DI box: Test with a known good XLR cable, make sure DI boxes are switched ON with 48V phantom power if active."
          ]
        },
        {
          phase: "Point 2: Soft Patch Assignment (SEL Button)",
          badge: "Si Impact Soft Patching",
          stepNumber: 2,
          title: "Verify Digital Soft Patching on Touchscreen",
          location: "Soundcraft Si Impact Console",
          actionSteps: [
            "Navigate to the correct fader layer (Layer A for main instruments, Layer B for wireless/utility).",
            "Press the 'SEL' (Select) button above the channel's fader (button illuminates).",
            "On the main touchscreen menu, press 'Inputs'.",
            "Verify that the digital channel is patched to the correct physical hardware input number (e.g., Violin -> Input 1, Acou1 -> Input 15, Aux 1 -> Input 3)."
          ]
        },
        {
          phase: "Point 3: Preamp Gain & 48V Phantom Power",
          badge: "Console Channel Strip",
          stepNumber: 3,
          title: "Check Preamp Gain, 48V Phantom & High Pass Filter",
          location: "Si Impact Channel Strip Controls",
          actionSteps: [
            "With channel selected, check the Preamp Gain knob. Ensure gain is set adequately so the input meter LED bounces during playing.",
            "For condenser microphones, choir mics (Front Left Box 5 & 6), or active DI boxes: ensure the 48V phantom button is engaged.",
            "Ensure the channel MUTE button is not engaged (red glow)."
          ]
        },
        {
          phase: "Point 4: Mix Bus Routing (House & Monitors)",
          badge: "Routing & Masters",
          stepNumber: 4,
          title: "Verify Channel Routing to Mix 12 (House) and Aviom Sends",
          location: "Si Impact Mix Buttons",
          actionSteps: [
            "With the channel SEL button on, press MIX 12 (Stereo House). Ensure the fader is raised to nominal (0dB).",
            "Press the 'LR' button next to the screen to confirm the Stereo House bus is feeding the Master LR bus.",
            "For monitors: Press the target Aviom mix button (e.g. MIX 1 for Drums, MIX 4 for Keys, MIX 6 for Violin/Guest) and push up the channel fader to send level to their in-ears."
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
      summary: "Follow this exact sequence to load the primary Sunday show file from internal memory (MMC) or USB key without overwriting 1NormalSunday.",
      phases: [
        {
          phase: "Phase 1: Open Show Navigation",
          badge: "Menu & Touchscreen",
          stepNumber: 1,
          title: "Press MENU Button & Access SHOW Storage",
          location: "Physical Console Controls (Left of Touchscreen)",
          actionSteps: [
            "Press the physical <strong>MENU</strong> button located next to the touchscreen to open the Main Menu.",
            "Tap <strong>SHOW</strong> on the touchscreen.",
            "Tap <strong>LOAD</strong> to open the show file storage navigation screen."
          ],
          tip: "The screen will display available show files stored on internal memory (MMC) or any connected USB thumb drive."
        },
        {
          phase: "Phase 2: Locate & Highlight Show File",
          badge: "Scroll Encoder",
          stepNumber: 2,
          title: "Use SCROLL Encoder to Highlight Primary Sunday Show",
          location: "Physical Rotary Encoder (Right of Touchscreen)",
          actionSteps: [
            "Turn the physical <strong>SCROLL encoder knob</strong> to browse through available files.",
            "Highlight the primary Sunday show file on the internal memory (MMC) or connected USB key.",
            "Verify the selected file name matches the current service or default Sunday template."
          ],
          tip: "Do not rush—ensure the correct show file is distinctly highlighted on screen."
        },
        {
          phase: "Phase 3: Apply & Load Show",
          badge: "Apply Button",
          stepNumber: 3,
          title: "Press APPLY Button & Confirm Overwrite Prompt",
          location: "Physical Console Buttons",
          actionSteps: [
            "Press the illuminated physical <strong>APPLY</strong> button.",
            "When the console asks for confirmation to overwrite current memory, tap <strong>YES / CONFIRM</strong>.",
            "Wait 3-5 seconds while motorized faders calibrate and digital soft-patches load."
          ]
        },
        {
          phase: "Phase 4: Golden Master Protection Rule",
          badge: "Crucial Warning",
          stepNumber: 4,
          title: "NEVER Overwrite '1NormalSunday'",
          location: "Show File Safety Protocol",
          actionSteps: [
            "<strong>STRICT PROTECTION RULE:</strong> Do <strong>NOT</strong> overwrite the <code>1NormalSunday</code> show file.",
            "<code>1NormalSunday</code> is the church's master reference baseline template with all default gain structures, Aviom sends, and routing.",
            "If making permanent adjustments for a special event or guest artist, always save under a new custom name (e.g. <em>2026-Sunday-Special</em>)."
          ],
          tip: "Keeping 1NormalSunday clean and pristine guarantees the team can always recover a working Sunday state in seconds."
        }
      ]
    },
    {
      id: "wireless-mic-issues",
      title: "Wireless Microphone Cuts Out, Crackles, or is Dead",
      icon: "mic",
      category: "Audio / Wireless Mics / Stage",
      severity: "high",
      summary: "Sequential 4-phase fix for dead audio, RF dropouts, physical mutes, and dead batteries during service.",
      phases: [
        {
          phase: "Phase 1: Physical Mute Switch & Power Check",
          badge: "Handheld & Bodypack Check",
          stepNumber: 1,
          title: "Check Physical Mute Switch & Power on Mic Body",
          location: "On-Stage / In Speaker's Hand",
          actionSteps: [
            "Inspect the handheld mic or beltpack transmitter body: verify the power switch is in the <strong>ON</strong> position (not in <strong>MUTE / STANDBY</strong>).",
            "<strong>Beltpack slide switch check:</strong> Many bodypacks have a top slide mute switch that gets bumped by clothing when clipped to a belt.",
            "Check the small LCD screen on the mic body: confirm the backlight turns on and shows an active channel number without flashing <code>MUTE</code> or <code>LOW BATT</code>.",
            "On handheld mics, ensure the power/mute button LED is <strong>solid green</strong> (not solid amber or flashing red)."
          ],
          tip: "9 times out of 10 during pre-service, the speaker accidentally bumped the top physical mute switch while pinning the bodypack to their belt or collar."
        },
        {
          phase: "Phase 2: Instant Battery Replacement Protocol",
          badge: "Battery Replacement",
          stepNumber: 2,
          title: "Swap with 2 Fresh AA Alkaline Batteries",
          location: "Sound Booth Drawer / Stage Battery Station",
          actionSteps: [
            "Open the transmitter battery compartment (slide open latch on bodypack or unscrew bottom half of handheld mic).",
            "Remove existing batteries and discard immediately into the used battery bin to avoid re-use.",
            "Insert <strong>two fresh AA Alkaline batteries</strong>, observing positive (<code>+</code>) and negative (<code>-</code>) polarity orientation.",
            "Power on the transmitter: confirm battery indicator shows a full 3 or 4 bars. (Note: A dying battery may show 1 bar in idle but immediately collapses to 0 bars under RF transmission load)."
          ],
          tip: "Always use brand-new AA alkaline batteries from the fresh battery drawer before Sunday morning rehearsal."
        },
        {
          phase: "Phase 3: Wireless Receiver Rack & RF Meter Verification",
          badge: "Wireless Receiver Rack",
          stepNumber: 3,
          title: "Check RF & Audio Level on Wireless Rack",
          location: "Sound Booth / AV Equipment Rack (Wireless Receivers)",
          actionSteps: [
            "Locate the wireless receiver unit corresponding to the active mic (Pastor, Headset, White, Blue, Gray, Red, Orange, Yel-Gre, Green, Yellow).",
            "<strong>RF Signal Bars:</strong> Check if solid blue/green RF bars illuminate when the mic is turned on. If NO RF bars appear, the mic and receiver are on mismatched frequency groups or the mic is powered off.",
            "<strong>Audio Meter (AF):</strong> Tap or speak into the mic. Do the green AF (Audio Frequency) level meters bounce on the receiver unit? If AF bounces on the rack unit, the wireless link and mic capsule are 100% working—the issue is downstream at the soundboard.",
            "<strong>Antennas:</strong> Confirm the dual antenna cables on the back of the receiver rack are securely fastened and pointing in a 45° 'V' shape towards the stage."
          ],
          tip: "If AF level meters bounce on the receiver rack screen, the wireless microphone is functioning perfectly. Direct your attention immediately to the soundboard fader on Layer B."
        },
        {
          phase: "Phase 4: Soundboard Layer B Fader & Routing",
          badge: "Si Impact Layer B",
          stepNumber: 4,
          title: "Verify Soundboard Layer B Fader, Preamp & House Routing",
          location: "Soundcraft Si Impact Console (Layer B)",
          actionSteps: [
            "Press the <strong>Layer B</strong> button on the Si Impact console (all wireless mics live on Layer B Faders 3–13).",
            "Locate the corresponding fader: <em>Fader 3 (Pastor)</em>, <em>Fader 4 (Wht Mic)</em>, <em>Fader 5 (Blu Mic)</em>, <em>Fader 6 (Headset)</em>, or <em>Faders 8–13 (Gray, Red, Orange, Yel-Gre, Green, Yellow)</em>.",
            "Verify the channel <strong>MUTE</strong> button is NOT glowing red.",
            "Push the fader up to nominal level (<strong>0 dB</strong> or designated tape mark).",
            "Press <strong>SEL</strong> above the fader: check <strong>Preamp Gain</strong> knob to ensure input meter bounces when speaking.",
            "Press <strong>MIX 12 (Stereo House)</strong>: ensure the fader is raised to send audio to the sanctuary speakers."
          ],
          tip: "If the speaker was handed a different colored mic than usual (e.g. Blue Mic instead of White Mic), simply navigate to Layer B and un-mute that specific colored fader."
        }
      ]
    },
    {
      id: "proclaim-slides-freeze",
      title: "Proclaim Presentation Freezes or Slides Show on Wrong Screen",
      icon: "presentation",
      category: "Video / Presentation / Proclaim",
      severity: "high",
      summary: "Fast troubleshooting for stuck lyric slides, frozen presentation Mac, desktop showing on sanctuary TVs, and display output misconfiguration.",
      phases: [
        {
          phase: "Phase 1: Quick 'On Air' Cycle & Slide Unfreeze",
          badge: "Proclaim Controls",
          stepNumber: 1,
          title: "Cycle Off Air / On Air & Check Quick Screen Mode",
          location: "Sound Booth Presentation Mac (Proclaim)",
          actionSteps: [
            "Look at the top right corner of Proclaim: verify whether the red <strong>On Air</strong> button is illuminated.",
            "If slides are stuck or unresponsive: click <strong>Off Air</strong>, wait 3 seconds, then click <strong>On Air</strong> again to reboot the slide rendering pipeline.",
            "Test slide advance: click a slide thumbnail in the middle preview pane, or press the <strong>Right Arrow (➔)</strong> / <strong>Spacebar</strong> key.",
            "<strong>Check Quick Screen Buttons:</strong> Look at the bottom right corner of Proclaim to ensure <strong>Blank (F10)</strong> or <strong>Clear (F11)</strong> wasn't accidentally triggered. If active, click <strong>Normal</strong> or <strong>Logo</strong> to restore lyrics."
          ],
          tip: "Toggling Off Air and back On Air forces Proclaim's GPU slide engine to clear its cache and re-establish video display sync."
        },
        {
          phase: "Phase 2: Display Output Assignment Verification",
          badge: "Proclaim Settings",
          stepNumber: 2,
          title: "Configure Virtual Screen Displays in Proclaim Settings",
          location: "Proclaim ➔ Settings ➔ Display",
          actionSteps: [
            "In Proclaim, click <strong>Settings</strong> (gear icon in the top right / menu bar) and select <strong>Display</strong>.",
            "Inspect the Virtual Screen assignments:",
            "• <strong>Application (Operator Screen):</strong> Must be assigned to <em>Custom / Primary Display (Built-in Mac monitor / Desk screen)</em>.",
            "• <strong>Virtual Screen: Slides (Sanctuary TVs):</strong> Must be assigned to <em>External Display (HDMI Splitter)</em>.",
            "• <strong>Virtual Screen: Confidence (Stage Display):</strong> If using confidence monitors, assign to <em>Secondary External Display</em>.",
            "If an output displays <em>'Not Connected'</em> or <em>'Desktop'</em>, click the dropdown menu and re-select the connected HDMI display.",
            "Click <strong>Save / Close Settings</strong>, then click <strong>On Air</strong>."
          ],
          tip: "If an HDMI cable was disconnected and reconnected, macOS may re-index the display (e.g. Display 2 became Display 3). Re-selecting it in Proclaim Display settings resolves this in seconds."
        },
        {
          phase: "Phase 3: macOS Displays & Mirroring Configuration",
          badge: "macOS System Settings",
          stepNumber: 3,
          title: "Verify 'Extend Desktop' (Turn Off Screen Mirroring)",
          location: "Mac Desktop ➔ Apple Menu  ➔ System Settings ➔ Displays",
          actionSteps: [
            "If the front sanctuary TVs show the Mac desktop wallpaper, dock, or mouse cursor instead of full slides, macOS display arrangement may have reset to Mirroring.",
            "Click the <strong>Apple menu () ➔ System Settings ➔ Displays</strong>.",
            "Ensure the external display is set to <strong>'Stop Mirroring' / 'Use as Separate Display' (Extended Desktop)</strong>, NOT 'Mirror Built-in Display'.",
            "Verify all external screens appear in the display arrangement preview. If a screen is missing, click <strong>Detect Displays</strong> (hold Option key if needed)."
          ],
          tip: "Proclaim requires macOS Extended Desktop mode so it can project full-screen slides to the TVs while keeping the operator control grid on the booth desk monitor."
        },
        {
          phase: "Phase 4: Force Quit & Emergency Restart Sequence",
          badge: "Emergency Restart",
          stepNumber: 4,
          title: "Force Quit Proclaim & Relaunch Presentation",
          location: "Sound Booth Presentation Mac",
          actionSteps: [
            "If Proclaim displays the macOS spinning rainbow beach ball and does not respond to mouse clicks:",
            "Press <strong>Cmd + Option + Esc</strong> (⌘⌥Esc) on the keyboard to bring up the <em>Force Quit Applications</em> dialogue.",
            "Select <strong>Proclaim</strong> from the list and click <strong>Force Quit</strong>.",
            "Relaunch Proclaim from the macOS Dock or Applications folder.",
            "Click <strong>Open Service</strong> and choose today's service (Proclaim automatically saves state to the cloud and local disk with every slide change).",
            "Click <strong>On Air</strong> to immediately resume the presentation."
          ],
          tip: "Because Proclaim caches service files locally on the Mac SSD, relaunching after a force quit takes under 15 seconds."
        }
      ]
    },
    {
      id: "stage-power-breakers",
      title: "Stage Floor Pockets / Sound Booth Lost AC Power (Panel S)",
      icon: "power",
      category: "Power / Electrical / Panel S",
      severity: "high",
      summary: "How to locate the gray electrical panel inside the sound booth and reset tripped breakers for stage floor pockets, platform outlets, TVs, subs, or booth lights.",
      phases: [
        {
          phase: "Phase 1: Identify Sound Booth Electrical Panels",
          badge: "Sound Booth Panel S",
          stepNumber: 1,
          title: "Locate Gray Panel S & Black Lighting Panel",
          location: "Sound Booth: Inside the back sound booth wall.",
          actionSteps: [
            "Enter the back sound booth and locate the two main electrical panels on the wall.",
            "<strong>Gray Metal Electrical Panel (Panel S):</strong> Supplies AC power to stage floor pockets, platform receptacles, sound booth quad outlets, sanctuary displays (TVs), projectors, and subwoofers.",
            "<strong>Large Black Panel:</strong> Located directly next to Panel S — this is dedicated exclusively to sanctuary and stage lighting control (do not touch for stage audio/power issues)."
          ],
          tip: "For any stage audio, musician pedalboard, TV display, subwoofer, or booth outlet power problem, always use the Gray Panel S."
        },
        {
          phase: "Phase 2: Reset Stage Floor Pocket Power (Breakers 4 & 6)",
          badge: "Breakers 4 & 6",
          stepNumber: 2,
          title: "Reset Stage Floor Receptacle Breakers (Circuits 4 & 6)",
          location: "Gray Electrical Panel (Panel S) ➔ Breakers 4 & 6",
          actionSteps: [
            "Open the metal door of <strong>Panel S</strong> inside the sound booth.",
            "Locate <strong>Breaker 4</strong> and <strong>Breaker 6</strong>, labeled <em>'Floor Recept. Stage'</em>.",
            "Check if either breaker switch is resting in the middle 'tripped' position or turned OFF.",
            "To reset: Firmly push the breaker handle all the way to the <strong>OFF</strong> position first, then push firmly back to <strong>ON</strong>.",
            "Confirm that stage pedalboards, keyboard power supplies, DI boxes, and stage box AC outlets power back on."
          ],
          tip: "A tripped circuit breaker will not reset unless you push it fully to OFF before switching it back to ON."
        },
        {
          phase: "Phase 3: Sound Booth Lights & Outlets Check",
          badge: "Breakers 9, 1, 2, 7, 8",
          stepNumber: 3,
          title: "Check Booth Lights (Breaker 9) & Outlets (1, 2, 7, 8)",
          location: "Gray Electrical Panel (Panel S) ➔ Circuits 1, 2, 7, 8, 9",
          actionSteps: [
            "<strong>Sound Booth Lights Not Working:</strong> Locate <strong>Breaker 9</strong> (labeled <em>'Sound Rm Lights'</em>). If tripped, cycle OFF then ON.",
            "<strong>Sound Booth Outlets / Desk Power Loss:</strong> Check <strong>Breakers 1 & 2</strong> and <strong>Breakers 7 & 8</strong> (labeled <em>'Quad Recept. Rm 110'</em>).",
            "<strong>Stage Platform & Stair Receptacles:</strong> Check <strong>Breaker 10</strong> (<em>Platform Recepts.</em>) and <strong>Breaker 12</strong> (<em>Platform Recept. Stairs</em>)."
          ],
          tip: "Breakers 1, 2, 7, and 8 power the primary sound booth computer workstations and outboard audio equipment."
        },
        {
          phase: "Phase 4: Sanctuary TVs, Projectors & Subwoofers",
          badge: "Breakers 11, 13, 29–30",
          stepNumber: 4,
          title: "Verify TV Displays, Projectors & Subwoofer Breakers",
          location: "Gray Electrical Panel (Panel S) ➔ Circuits 11, 13, 29–30",
          actionSteps: [
            "<strong>Front Sanctuary TVs Dead:</strong> Check <strong>Breaker 11</strong> (labeled <em>'TV Sanctuary'</em>).",
            "<strong>Sanctuary Video Projectors Dead:</strong> Check <strong>Breaker 13</strong> (labeled <em>'Projector Sanctuary'</em>).",
            "<strong>Sanctuary Subwoofers (No Low End / Dead Subs):</strong> Check <strong>Breakers 29–30</strong> (labeled <em>'10 R & L SUBS'</em>).",
            "Cycle any tripped breaker firmly to OFF and back to ON."
          ],
          tip: "If breakers 29–30 trip repeatedly, check the mixer gain structure to ensure subwoofers are not being overdriven."
        }
      ]
    },
    {
      id: "click-track-patch",
      title: "Click Track Patch Switcher (Front vs Drum Cage)",
      icon: "clock",
      category: "Soundboard / In-Ears / Click",
      severity: "medium",
      summary: "How to soft-patch the metronome click track between Front Stage Click (Input 12) and Drum Cage Click (Input 20) on Layer B Fader 2.",
      phases: [
        {
          phase: "Phase 1: Select Console Layer B & Click Fader",
          badge: "Layer B Fader 2",
          stepNumber: 1,
          title: "Select Click Channel on Soundcraft Si Impact",
          location: "Soundcraft Si Impact Console (Layer B, Fader 2)",
          actionSteps: [
            "Press the illuminated <strong>Layer B</strong> button on the left of the faders.",
            "Locate <strong>Fader 2</strong> (labeled <em>'Click'</em> on the scribble strip).",
            "Press the illuminated <strong>SEL</strong> (Select) button above Fader 2 to highlight the click channel."
          ],
          tip: "Click track is always routed through Layer B Fader 2 regardless of whether the worship leader or drummer feeds the signal."
        },
        {
          phase: "Phase 2: Soft-Patch Input Source",
          badge: "Inputs Menu",
          stepNumber: 2,
          title: "Patch to Front Stage (Input 12) or Drum Cage (Input 20)",
          location: "Si Impact Main Touchscreen ➔ Inputs",
          actionSteps: [
            "On the touchscreen menu, tap <strong>Inputs</strong>.",
            "<strong>For Front Stage Click:</strong> Tap <strong>Input 12</strong> (hardwired from Center Front stage box).",
            "<strong>For Drum Cage Click:</strong> Tap <strong>Input 20</strong> (hardwired from Drum Cage Left wall plate).",
            "Confirm the input indicator switches to the selected hardware channel."
          ],
          tip: "Use the Click Track Patch Switcher tab for an interactive 1-click routing guide."
        },
        {
          phase: "Phase 3: In-Ear Monitor Routing & House Mute Rule",
          badge: "Aviom & House Mute",
          stepNumber: 3,
          title: "Send Click to Avioms & Verify Muted in House Mix 12",
          location: "Si Impact Mix Bus Buttons (Mix 1–5, 9–11 vs Mix 12)",
          actionSteps: [
            "<strong>Aviom In-Ear Monitors:</strong> Press Aviom mix buttons (Mix 1 Drums, Mix 4 Keys, Mix 5 Elec Guitar, etc.) and raise Fader 2 to the musicians' preferred monitoring volume.",
            "<strong>STRICT HOUSE RULE:</strong> Verify that Fader 2 is fully DOWN (or unassigned) on <strong>MIX 12 (Stereo House)</strong> and <strong>Master LR</strong> so the metronome is NEVER audible to the congregation."
          ],
          tip: "⚠️ CRITICAL: Never route Click to Mix 12 or Master LR."
        }
      ]
    }
  ],

  // 5. Specific Step-by-Step Patching Procedures
  patchingProcedures: {
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

  // 7. Pre-Service Sound Booth Verification Checklist
  preServiceChecklist: [
    { id: "chk-pwr-booth", label: "Sound booth power strip turned ON (Switch light glowing)", category: "Power & Systems" },
    { id: "chk-panel-s-stage-pwr", label: "Stage floor pocket AC power active (Panel S Breakers 4 & 6 ON, pedals/keys powered)", category: "Power & Systems" },
    { id: "chk-console-aes", label: "Soundcraft Si Impact powered on & Master LR fader unmuted (AES Out 01)", category: "Soundboard" },
    { id: "chk-load-show", label: "Sunday show file loaded (MENU ➔ SHOW ➔ LOAD ➔ APPLY. Do NOT overwrite 1NormalSunday)", category: "Soundboard" },
    { id: "chk-proclaim-onair", label: "Proclaim presentation software open, signed in, and set to 'On Air'", category: "Video & Screens" },
    { id: "chk-sanctuary-tvs", label: "Front Sanctuary TVs powered on and displaying Proclaim feed on HDMI 1", category: "Video & Screens" },
    { id: "chk-obs-embrace", label: "Embrace Room TV powered on & OBS Fullscreen Projector sent to 'LONTIUM' (check TX under desk & Nest camera RX timer)", category: "Conference Room" },
    { id: "chk-obs-captions", label: "OBS Cloud Closed Captions enabled & transcribing (Tools ➔ Cloud Closed Captions ➔ Captioning Enabled)", category: "Broadcast & Stream" },
    { id: "chk-reaper-running", label: "Reaper DAW open on PC with meters responding to soundboard audio", category: "Assistive Listening" },
    { id: "chk-williams-av", label: "Williams AV unit on top of PC powered ON with Ethernet connected", category: "Assistive Listening" },
    { id: "chk-wavecast-wifi", label: "Wavecast test on phone connected to 'Waypoint Guest' Wi-Fi (Password: Psalm27:4!)", category: "Assistive Listening" },
    { id: "chk-wireless-mics", label: "Wireless microphones fresh batteries & tested (Pastor, Lead Vocals)", category: "Mics & Stage" },
    { id: "chk-aviom-monitors", label: "Aviom personal monitor stations receiving signals (Drums, Keys, Leader)", category: "Monitors" },
    { id: "chk-click-track", label: "Click track soft-patched correctly on Layer B Fader 2 (In 12 Front or In 20 Drums)", category: "Soundboard" }
  ]
};
