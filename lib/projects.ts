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
      // H2 + paragraph
      {
        type: "text",
        heading: "Starting simple",
        body:
          "A DIY kit that lets students build a low-cost, hands-on device to explore sound recording and playback. It avoids traditional instruments or complex software and favors basic electronics and open-source tools.",
      },

      // two images side-by-side
      {
        type: "twoUp",
        images: [
          { src: "/images/projects/djavu/cover.png", alt: "Top view with pads" },
          { src: "/images/projects/djavu/cover.png", alt: "Angle view with joystick" },
        ],
      },

      // paragraph only
      {
        type: "text",
        body:
          "Designed as an educational tool to support STEAM learning, Djavu makes the technical process visible and understandable for classrooms or workshops.",
      },

      // text + image (image on the right)
      {
        type: "textImage",
        side: "right",
        heading: "Making audio tangible",
        body:
          "Students assemble the device and learn by experimenting—from wiring to basic code—connecting what they hear with how it’s built.",
        image: { src: "/images/projects/djavu/cover.png", alt: "OLED and control detail" },
      },

      // 2×2 grid
      {
        type: "grid2x2",
        images: [
          { src: "/images/projects/djavu/cover.png", alt: "Front detail" },
          { src: "/images/projects/djavu/cover.png", alt: "Back detail" },
          { src: "/images/projects/djavu/cover.png", alt: "Soldering process" },
          { src: "/images/projects/djavu/cover.png", alt: "Exploded view" },
        ],
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
  },

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
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && !p.draft);
}
