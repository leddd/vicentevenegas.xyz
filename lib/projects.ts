// lib/projects.ts
import type { Block } from "@/components/project-blocks";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: string;   // path under /public
  alt: string;
  date?: string;   // "YYYY-MM"
  tags?: string[];
  draft?: boolean;
  blocks?: Block[]; // 👈 flexible page content
};

export const projects: Project[] = [
  {
    slug: "djavu",
    title: "Djavu",
    summary:
      "A DIY kit that demystifies audio as users assemble and experiment with a simple, low-cost recording device.",
    cover: "/images/projects/djavu/cover.png",
    alt: "Djavu DIY audio kit assembled with knobs and pads on a table.",
    date: "2024-11",
    tags: ["Product Design", "Interaction", "CAD/CAM", "STEAM", "Audio"],
    blocks: [
      // Big assembled unit (optional hero follow-up)

      // What it is
      {
        type: "text",
        heading: "What it is",
        body:
          "Djavu is a hands-on recording kit for learning and experimenting with sound. Designed primarily for students, but equally useful for musicians and teachers, it makes audio tangible—no DAW required.",
      },

      // How it was shaped
      {
        type: "text",
        heading: "How it was shaped",
        body:
          "I co-designed the feature set with music professors, borrowing from Ableton Live’s Session view, classic four-track recorders, and looper pedals. The goal is a minimal surface that encourages exploration while teaching core concepts—tempo, time signature, layering, and signal flow.",
      },

      // Two-up: parts + UI icons
      {
        type: "twoUp",
        images: [
          {
            src: "/images/projects/djavu/01-parts.png",
            alt: "3D-printed parts with brass inserts",
            w: 1024, h: 768,
          },
          {
            src: "/images/projects/djavu/02-ui-icons.png",
            alt: "OLED UI icon studies and screen layouts",
            w: 1024, h: 768,
          },
        ],
      },

      // Interaction model
      {
        type: "text",
        heading: "Interaction model",
        body:
          "Six loop slots to record, overdub, mute/unmute, and clear; microphone input for quick capture; setup for tempo (BPM) and time signature with optional quantization; simple transport (arm, record, play/stop); concise OLED feedback for slot states and levels.",
      },

      // Text + image (image right): field test
      {
        type: "textImage",
        side: "right",
        heading: "Making audio tangible",
        body:
          "Students assemble the device and learn by experimenting—from wiring to basic code—connecting what they hear with how it’s built.",
        image: {
          src: "/images/projects/djavu/03-field-test.png",
          alt: "Early classroom test using the prototype",
          w: 1024, h: 768,
        },
      },

      // Internals photo
      {
        type: "image",
        image: {
          src: "/images/projects/djavu/05-internals.png",
          alt: "Internals: Raspberry Pi, wiring and controls",
          w: 1024, h: 768,
        },
      },

      // Hardware prototype + roadmap
      {
        type: "text",
        heading: "Hardware prototype",
        body:
          "This prototype runs on a Raspberry Pi with a small OLED, 3D-printed controls, and a rotary/press encoder. The planned final version migrates to a Pi Zero or a smaller microcontroller with a custom PCB for durability, lower cost, and simpler assembly.",
      },

      // Why it's useful
      {
        type: "text",
        heading: "Why it’s useful",
        body:
          "Djavu turns recording into something you can see, touch, and reconfigure. It supports STEAM by exposing the electronics, code, and audio path, while remaining fun for rapid composition, sampling, and live demos.",
      },
    ],
  },

  {
    slug: "carvuk",
    title: "Carvuk",
    summary:
      "User journeys and insights shaping a clearer, confidence-building Carvuk app.",
    cover: "/images/projects/carvuk/cover.png",
    alt: "Carvuk app interface mockups and research artifacts.",
    date: "2024-11",
    tags: ["UX Research", "Service Design", "Interface"],
    // blocks: [...]  // add when ready
    blocks: [
        {
            type: "text",
            heading: "What it is",
            body:
            "A research-led project with Carvuk mapping the vehicle-maintenance journey to find where confidence drops—so the product can guide clearer, calmer decisions.",
        },

        // 01 — hero (unused)

        {
            type: "text",
            heading: "Research approach",
            body:
            "Interviews with customers and drivers, short polls, and ride-along shadowing during real services. Findings were synthesized into personas and journey maps across pre and during service.",
        },

        // 02–03 — personas + interview theme
        {
            type: "twoUp",
            images: [
            {
                src: "/images/projects/carvuk/02-personas-quadrant.png",
                alt: "Four personas positioned by knowledge and apprehension",
            },
            {
                src: "/images/projects/carvuk/03-interview-driver-comms.png",
                alt: "Communication model between cliente, driver, servicio and Carvuk",
            },
            ],
        },

        {
            type: "text",
            heading: "Key insights",
            body:
            "Trust dips at three moments: before service (vague expectations and timing), during service (opaque status and split channels), and after service (evidence and next steps scattered). The app should deliver the immediacy of face-to-face clarity without spawning off-platform chats.",
        },

        // 04–05 — journey maps
        {
            type: "twoUp",
            images: [
            {
                src: "/images/projects/carvuk/04-journey-pre-service.png",
                alt: "Pre-service journey showing emotions, touchpoints, and opportunities",
            },
            {
                src: "/images/projects/carvuk/05-journey-during-service.png",
                alt: "During-service journey with handoffs, additional services, and emotion line",
            },
            ],
        },

        // 06 — strategy pillars
        {
            type: "image",
            image: {
            src: "/images/projects/carvuk/06-strategy-pillars.png",
            alt: "Strategy pillars: mentor not assistant, contagious trust, open window on processes, spread the benefit",
            },
        },

        {
            type: "text",
            heading: "Design directions",
            body:
            "Stage-based notifications with clear next actions; a single progress tracker from pickup → workshop → return; verifiable driver/workshop profiles; photo evidence and checklists; and bite-sized explanations right at decision points.",
        },

        // 07 — recommendations (full)
        {
            type: "image",
            image: {
            src: "/images/projects/carvuk/07-concept-recommendations.png",
            alt: "Recommendations flow with scheduling and suggested workshops",
            },
        },

        // 08 — live tracking (full)
        {
            type: "image",
            image: {
            src: "/images/projects/carvuk/08-concept-live-tracking.png",
            alt: "Live status with map, service chat, and task details",
            },
        },

        {
            type: "text",
            heading: "Outcome",
            body:
            "Personas, journey maps, and interface concepts that turn scattered updates into a guided path—improving transparency and confidence for customers and drivers.",
        },
        ]

  },

  {
    slug: "wirun",
    title: "Wirun",
    summary:
      "A platformer that teaches macroalgae ecology through exploration and tangential learning.",
    cover: "/images/projects/wirun/cover.png",
    alt: "Wirun platformer screens with macroalgae environments.",
    date: "2024-11",
    tags: ["Game", "Education", "Animation", "Science Communication"],
    // blocks: [...]
    blocks: [
        // What it is
        {
            type: "text",
            heading: "What it is",
            body:
            "Wirun is a pixel-art platformer for science outreach. Players learn about macroalgae and coastal ecosystems by exploring, experimenting, and noticing patterns—knowledge emerges through play rather than pop-up tutorials (tangential learning).",
        },

        // 01 — gameplay video (autoplay, muted, loop, no controls)
        {
            type: "video",
            src: "/images/projects/wirun/01-gameplay-video.mp4",
            poster: "/images/projects/wirun/01-gameplay-video-poster.jpg",
            label: "Gameplay loop in a kelp forest area",
            autoplay: true,
            muted: true,
            loop: true,
            playsInline: true,
            // controls off by default
        },

        // Background / ECIM collaboration
        {
            type: "text",
            heading: "Background",
            body:
            "The game’s ideas were shaped after a field trip to the Estación Costera de Investigaciones Marinas (ECIM). Concepts we discussed with researchers—kelp morphology, currents, grazing, pollution, and habitat resilience—guided the mechanics, enemies, collectibles, and level goals.",
        },

        // 02–03 — ECIM exterior + classroom session
        {
            type: "twoUp",
            images: [
            { src: "/images/projects/wirun/02-ecim-station-exterior.png",  alt: "ECIM coastal research station exterior", w: 1024, h: 768 },
            { src: "/images/projects/wirun/03-ecim-classroom-workshop.png", alt: "Workshop session with students at ECIM",  w: 1024, h: 768 },
            ],
        },

        // How it teaches
        {
            type: "text",
            heading: "How it teaches",
            body:
            "Short, replayable levels reward observation. Environmental rules—like light, depth, and shelter—surface via cause-and-effect. UI and pickups mirror ecology, and players practice systems thinking: collect, protect, and restore habitats under changing conditions.",
        },

        // 04 — close-up sprite & VFX
        {
            type: "image",
            image: {
            src: "/images/projects/wirun/04-gameplay-closeup-diver-jet.png",
            alt: "Close-up of the diver character and interaction effects",
            w: 1200, h: 675,
            },
        },

        // Mechanics (concise)
        {
            type: "text",
            heading: "Core loop",
            body:
            "Move, jet, and interact to collect items, avoid or calm grazers, and complete micro-goals that restore local balance. Feedback is readable at a glance; difficulty scales with each area’s rules.",
        },

        // 05–06 — sprite sheet + wordmark
        {
            type: "twoUp",
            images: [
            { src: "/images/projects/wirun/05-sprite-run-cycle.png",  alt: "Sprite sheet with run cycle and backpack biome", w: 1200, h: 675 },
            { src: "/images/projects/wirun/06-wordmark-sprout.png",   alt: "Wirun wordmark with sprout accent",             w: 1200, h: 768 },
            ],
        },

        // Status and roadmap
        {
            type: "text",
            heading: "Status & next steps",
            body:
            "This is a working prototype used in outreach demos. Next steps: co-design lesson hooks with ECIM educators, add localized text, and expand level variety for a short classroom module and a web build.",
        },
        ]

  },

  {
    slug: "cabron",
    title: "Cabrón",
    summary:
      "Charcoal brand concept with a clear, high-contrast presence and a compact identity system.",
    cover: "/images/projects/cabron/BAG.png",
    alt: "Cabrón charcoal bag photographed on a dark background.",
    date: "2024-11",
    tags: ["Branding", "Identity", "Packaging"],
    blocks: [
      {
        type: "text",
        heading: "What it is",
        body:
          "Personal branding/packaging concept for a Chilean charcoal line. Scope: naming, customized wordmark, horn mark, color/type system, information hierarchy, and photo direction. Brand direction: bold, slightly irreverent, grounded in the essentials of fire and material.",
      },

      // Wordmark + mark (two-up)

      {
        type: "text",
        heading: "Identity",
        body:
          "Wordmark based on Hudson NY and customized for a denser rhythm with flat cuts that echo charcoal facets. The horn mark reads first as attitude and also as an ignition gesture; the pair balances recognition and utility at small sizes.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/projects/cabron/WORDMARK.png",
            alt: "Cabrón wordmark (modified Hudson NY) on black",
          },
          {
            src: "/images/projects/cabron/MARK.png",
            alt: "Cabrón horn mark used as a compact ignition cue",
          },
        ],
      },



      // Color & type (two-up)
      {
        type: "text",
        heading: "Color & type",
        body:
          "Palette: black base, red as primary, white as accent. Typography: Oswald for auxiliary/body copy; the customized Hudson NY wordmark for display and primary branding moments.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/projects/cabron/COLOR.png",
            alt: "Type specimen and claims layout",
          },
          {
            src: "/images/projects/cabron/TYPE.png",
            alt: "Palette and scale specimen (alternate crop)",
          },
        ],
      },

      // Bag — full width
      {
        type: "text",
        heading: "Packaging hero",
        body:
          "Front panel organized for quick read: brand first, weight second, then a concise promise. Minimal elements keep the shelf read clean.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/cabron/BAG.png",
          alt: "Front view of the Cabrón bag with high-contrast layout",
        },
      },



      // Matchbooks — full width
      {
        type: "text",
        heading: "Brand extensions",
        body:
          "Matchbooks test the identity at small scale. Short, direct copy keeps the tone consistent.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/cabron/MATCH.png",
          alt: "Cabrón branded matchbooks with horn mark",
        },
      },

      {
        type: "image",
        image: {
          src: "/images/projects/cabron/CLOSEUP.png",
          alt: "Label closeup showing texture and material details",
        },
      },



      // Texture — closing frame (full width)


      {
        type: "text",
        heading: "Outcome",
        body:
          "Naming, modified wordmark, symbol, color/type guidelines, and a packaging hierarchy explored through hero, macro, and accessory shots. Concept-stage work aimed at clarity, cohesion, and scalability.",
      },
      {
        type: "image",
        image: {
          src: "/images/projects/cabron/TEXTURE.png",
          alt: "Cabrón mark over a charcoal texture background",
        },
      },
    ],
  }
  , 
  {
    slug: "blitz",
    title: "Blitz",
    summary:
    "Playful snack brand for casual chess—chunky logotype, warm palette, and an unfoldable triangular pack concept.",
    cover: "/images/projects/blitz/cover.png",
    alt: "Blitz triangular box with crowned logotype and checker accents.",
    date: "2024-11",
    tags: ["Branding", "Identity", "Packaging", "Motion"],
    // blocks: [...]
    blocks: [
        {
            type: "text",
            heading: "What it is",
            body:
            "Blitz is a playful snack brand built around the speed and energy of casual chess. The identity is chunky, friendly, and instantly readable—made to feel fun on shelf and social.",
        },

        // Logo + pattern
        {
            type: "twoUp",
            images: [
            {
                src: "/images/projects/blitz/02-logotype.png",
                alt: "Blitz logotype with crowned ü and bold shadow",
            },
            {
                src: "/images/projects/blitz/03-pattern.png",
                alt: "Repeating pattern of piece-shaped letterforms used as a brand texture",
            },
            ],
        },

        {
            type: "text",
            heading: "Identity system",
            body:
            "A crown-topped “l” nods to pieces and quick wins. Warm cookie browns with cream form the core palette; simple piece-shaped glyphs become icons and repeatable patterns for packs, POS, and digital.",
        },

        // Social motion (vertical, side-by-side)
        {
            type: "twoUp",
            videos: [
            {
                src: "/images/projects/blitz/09-social-spot-logo.mp4",
                poster: "/images/projects/blitz/09-social-spot-logo.jpg",
                label: "Logo build + crown bounce",
                autoplay: true,
                muted: true,
                loop: true,
                playsInline: true,
            },
            {
                src: "/images/projects/blitz/10-social-spot-pack.mp4",
                poster: "/images/projects/blitz/10-social-spot-pack.jpg",
                label: "Pack reveal + checker motion",
                autoplay: true,
                muted: true,
                loop: true,
                playsInline: true,
            },
            ],
        },



        {
            type: "text",
            heading: "Packaging concept",
            body:
            "The triangular box is a brand moment: bold logo panel for shelf impact, checker accents for motion, and an unfold-to-board interior that invites quick play at the table.",
        },
        // Pack structure (full width)
        {
            type: "image",
            image: {
            src: "/images/projects/blitz/01-pack-unfold-board.png",
            alt: "Pack unfolded into a checkerboard surface for casual play",
            },
        },

        {
            type: "text",
            heading: "Outcome",
            body:
            "Naming, logotype, color system, icon/pattern library, and a structural pack concept—ready for mockups, POS pilots, and in-store testing.",
        },
        ]

  },

  {
      slug: "studio-hot-hand",
      title: "Studio Hot Hand",
      summary:
        "A boutique design studio I co-founded in 2025 with Javiera Melo. Creative direction, illustration, branding, motion, and 3D — a selection of commissioned and original projects.",
      cover: "/images/projects/studio-hot-hand/COVER.png",
      alt: "Studio Hot Hand flyer on hot pink paper with bold black type.",
      date: "2025-01",
      tags: ["Creative Direction", "Branding", "Illustration", "Editorial", "Motion", "3D"],
      blocks: [
        {
          type: "text",
          heading: "What it is",
          body:
            "In 2025 I co-founded Studio Hot Hand with Javiera Melo, a boutique design studio where we provide creative services and produce original work. From editorial and graphic design to animation, 3D, illustration, and creative direction — these are selected projects.",
        },

        // Brand & worldbuilding
        {
          type: "image",
          image: {
            src: "/images/projects/studio-hot-hand/FLYER.jpg",
            alt: "Hot Hand promotional flyer with bold type and satisfaction guarantee tagline.",
          },
        },
        {
          type: "text",
          heading: "Brand & worldbuilding",
          body:
            "The flyer and hand illustration are part of our own visual world — bold, direct, and slightly self-aware. Hot Hand blends humor, tactile design, and clear communication into a visual language that feels alive both online and in print.",
        },

        // Typographic hand (two-up)
        {
          type: "twoUp",
          images: [
            {
              src: "/images/projects/studio-hot-hand/HAND1.jpg",
              alt: "Typographic hand illustration built from repeating HOT/HAND letterforms.",
            },
            {
              src: "/images/projects/studio-hot-hand/HAND2.jpg",
              alt: "Process overlay showing construction of the typographic hand.",
            },
          ],
        },
        {
          type: "text",
          heading: "Micro Amarilla",
          body:
            "A risograph print made for Día del Patrimonio, illustrating the front of Santiago’s classic micros amarillas. Focused on texture, signage, and the layered graphics that define everyday city identity.",
        },
        // Micro Amarilla
        {
          type: "image",
          image: {
            src: "/images/projects/studio-hot-hand/MICRO.png",
            alt: "Risograph print of classic Santiago micro bus front.",
          },
        },


        // Rocket Man (two-up)
        {
          type: "text",
          heading: "Rocket Man",
          body:
            "Posters for Laurel Bath House’s fragrance Rocket Man. Illustration and creative direction merge ’70s retro-futurism with pulp print style — halftones, bold linework, and worn paper textures.",
        },
        {
          type: "twoUp",
          images: [
            {
              src: "/images/projects/studio-hot-hand/ROCKETMAN1.png",
              alt: "Retro comic key art for Rocket Man fragrance concept.",
            },
            {
              src: "/images/projects/studio-hot-hand/ROCKETMAN2.png",
              alt: "Campaign frame showing perfume bottle in astronaut cockpit.",
            },
          ],
        },


        // Severance
        {
          type: "text",
          heading: "Severance",
          body:
            "A poster inspired by vintage plastic model kits — the kind you assemble piece by piece. Focus on illustration and texture details, built around the theme of construction and control.",
        },
        {
          type: "image",
          image: {
            src: "/images/projects/studio-hot-hand/SEVERANCE.png",
            alt: "Poster inspired by vintage model kit packaging with computer illustration.",
          },
        },
        {
          type: "twoUp",
          images: [
            {
              src: "/images/projects/studio-hot-hand/SEVERANCE1.png",
              alt: "Closeup severance poster detail showing texture and linework.",
            },
            {
              src: "/images/projects/studio-hot-hand/SEVERANCE2.png",
              alt: "Closeup severance poster detail showing texture and linework.",
            },
          ],
        },


        // 3D Room — video loop
        {
          type: "text",
          heading: "3D Room",
          body:
            "A 3D animated room that shifts from day to night. Built to capture personality through scale and detail — textures, light, and atmosphere define its tone more than movement itself.",
        },
        {
          type: "video",
          src: "/images/projects/studio-hot-hand/ROOMVID.mp4",
          poster: "/images/projects/studio-hot-hand/final_0002_Layer-1.png",
          label: "Day ↔ Night loop",
          autoplay: true,
          muted: true,
          loop: true,
          playsInline: true,
        },
        {
          type: "twoUp",
          images: [
            {
              src: "/images/projects/studio-hot-hand/ROOM1.png",
              alt: "Closeup room detail showing texture and linework.",
            },
            {
              src: "/images/projects/studio-hot-hand/ROOM2.png",
              alt: "Closeup room detail showing texture and linework.",
            },
          ],
        },



        // Outcome
        {
          type: "text",
          heading: "Outcome",
          body:
            "Studio Hot Hand mixes commissioned and self-initiated work — balancing clear, functional design with playful experimentation across media. These projects show the mix of worlds we like to build: tactile, direct, and slightly surreal.",
        },
      ],
  }
    ,

  {
    slug: "la-piel-tejida",
    title: "La Piel Tejida",
    summary:
      "An interactive textile installation that transforms touch into audiovisual expression. I worked on bridging the physical and digital layers — programming the interactive logic, developing the sound design, and shaping how the piece responds to touch.",
    cover: "/images/projects/la-piel-tejida/COVER.png",
    alt: "Interactive textile installation showing woven surface with embedded electronics.",
    date: "2025-7",
    tags: ["Interactive Installation", "Sound Design", "Physical Computing", "Art & Technology"],
    blocks: [
      {
        type: "text",
        heading: "Overview",
        body:
          "La Piel Tejida is an interactive textile installation that transforms touch into audiovisual expression. I worked on bridging the physical and digital layers — programming the interactive logic, developing the sound design, and shaping how the piece responds to touch.",
      },

      {
        type: "text",
        heading: "Concept",
        body:
          "La Piel Tejida operates through a set of internal rules combined with external interaction. Its structure is defined by conductive zones that respond to contact, each with pre-defined behavioral parameters. Although the system follows a logical framework, it remains open — every touch alters its state in real time and reveals new sound or visual responses. Over time, this dynamic could evolve into a system that learns from interaction patterns.",
      },

      {
        type: "twoUp",
        images: [
          {
            src: "/images/projects/la-piel-tejida/CLOSEUP1.png",
            alt: "Close-up of conductive woven textile showing material transitions.",
          },
          {
            src: "/images/projects/la-piel-tejida/CLOSEUP2.png",
            alt: "Process image showing integration of sensors within textile structure.",
          },
        ],
      },
      {
        type: "text",
        heading: "Process",
        body:
          "Early explorations focused on conductive weaving and material mapping. Each woven section contained unique response parameters linked to sensors and microcontrollers, allowing the textile to function as both interface and medium.",
      },

      {
        type: "gallery",
        images: [
          {
            src: "/images/projects/la-piel-tejida/WhatsApp Image 2025-09-22 at 6.11.27 PM.png",
            alt: "Group of visitors interacting with the La Piel Tejida installation.",
          },
          {
            src: "/images/projects/la-piel-tejida/WhatsApp Image 2025-10-14 at 9.38.02 AM.png",
            alt: "Full view of installation setup with screens and woven textile.",
          },
          {
            src: "/images/projects/la-piel-tejida/photo1.jpg",
            alt: "Detail view of woven surface showing threads and color transitions.",
          },
          {
            src: "/images/projects/la-piel-tejida/photo2.jpg",
            alt: "Side view of installation structure with lighting and display setup.",
          },
        ],
      },
      {
        type: "text",
        heading: "Installation",
        body:
          "Exhibited as a tactile surface on a custom wooden frame, the piece integrates embedded circuitry and dual display feedback. Visitors activated sounds and visuals through direct contact, making each interaction distinct and unpredictable.",
      },
      
      {
        type: "image",
        image: {
          src: "/images/projects/la-piel-tejida/EXHIBITION.png",
          alt: "People at the exhibition.",
        },
      },

      {
        type: "text",
        heading: "Outcome",
        body:
          "La Piel Tejida explores the intersection between craft and computation — how a woven surface can become both interface and performer. By combining physical weaving with algorithmic behavior, the piece invites a dialogue between structure, touch, and sound.",
      },
    ],
  },


  {
      slug: "loop-bench",
      title: "Loop Bench",
      summary:
        "Two-seat CNC-cut plywood bench; zip-tie joinery for a fast, light build.",
      cover: "/images/projects/loop-bench/cover.png",
      alt: "Two-seat plywood bench assembled with zip ties.",
      date: "2024-11",
      tags: ["Industrial Design", "Prototyping", "CAD/CAM"],
      // blocks: [...]
      blocks: [
          {
            type: "text",
            heading: "What it is",
            body:
              "A two-person bench cut from 3 mm plywood and stitched together with zip ties. The flowing profile uses curvature and tension for strength while keeping the build lightweight and tool-free.",
          },

          {
            type: "text",
            heading: "Build approach",
            body:
              "Panels are CNC-routed with slotted tabs that accept standard zip ties. The geometry locks under tension, so assembly is quick, reversible, and easy to repair. Parts nest efficiently on sheets to minimize waste.",
          },

          // CAD + assembly manual
          {
            type: "twoUp",
            images: [
              {
                src: "/images/projects/loop-bench/02-cad-views.png",
                alt: "CAD renders: perspective, front elevation, and plan view of the bench.",
              },
              {
                src: "/images/projects/loop-bench/03-assembly-manual.png",
                alt: "Assembly booklet with part callouts and zip-tie count.",
              },
            ],
          },

          {
            type: "text",
            heading: "Assembly & use",
            body:
              "Flat parts + ~200 zip ties. Slot, lace, and cinch—no clamps or hardware required. The form’s waist adds stiffness and a natural hand-hold for moving the piece.",
          },

          // Companion lamp
          {
            type: "twoUp",
            images: [
              {
                src: "/images/projects/loop-bench/04-lamp-prototype.jpg",
                alt: "Desk lamp prototype with laminated wood, acrylic ring, and LEDs.",
              },
              {
                src: "/images/projects/loop-bench/05-lamp-detail.jpg",
                alt: "Detail of acrylic ring projecting soft light and curves echoing the bench.",
              },
            ],
          },

          {
            type: "text",
            heading: "Companion piece",
            body:
              "A small desk lamp explores the same language—three materials layered to cast shifting light through a rotating aluminum ring. It echoes the bench’s curves and stitched construction.",
          },
      ],
      
    },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && !p.draft);
}
