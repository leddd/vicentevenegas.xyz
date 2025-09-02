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

/*
  {
    slug: "cabron",
    title: "Cabrón",
    summary:
      "Bold charcoal brand with a punchy logo and cohesive, shelf-ready packaging.",
    cover: "/images/projects/cabron/cover.png",
    alt: "Cabrón charcoal packaging and logotype compositions.",
    date: "2024-11",
    tags: ["Branding", "Identity", "Packaging"],
    // blocks: [...]
  },
*/
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
