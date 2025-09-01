// lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: string;   // path under /public
  alt: string;
  date?: string;   // "YYYY-MM"
  tags?: string[];
  draft?: boolean;
};

export const projects: Project[] = [
  {
    slug: "djavu",
    title: "Djavu",
    summary:
      "A DIY kit that demystifies audio as users assemble and experiment with a simple, low-cost recording device.",
    cover: "/images/projects/djavu/cover.png", // keep if you have this file in the djavu folder
    alt: "Djavu DIY audio kit assembled with knobs and pads on a table.",
    date: "2024-11",
    tags: ["Product Design", "Interaction", "CAD/CAM", "STEAM", "Audio"],
  },

  {
    slug: "carvuk",
    title: "Carvuk",
    summary:
      "User journeys and insights shaping a clearer, confidence-building Carvuk app.",
    cover: "/images/projects/carvuk/cover.png", // matches your current flat file
    alt: "Carvuk app interface mockups and research artifacts.",
    date: "2024-11",
    tags: ["UX Research", "Service Design", "Interface"],
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
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && !p.draft);
}
