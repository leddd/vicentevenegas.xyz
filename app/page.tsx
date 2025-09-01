import SplitWords from "@/components/SplitWords";
import ProjectsGrid from "@/components/projects-grid";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="container grid-6 gap-y-0 pt-12 pb-8 mb-48">
        {/* Headline (cols 2–4 left aligned; change to col-start-3 for centered) */}
        <h1 className="col-span-6 lg:col-span-3 lg:col-start-2 max-w-[28ch] text-[52px] leading-[0.9] font-bold text-white">
          <SplitWords
            text={"I design user experiences from research to interface."}
            stagger={0.06}
            duration={0.6}
            y={14}
            blur={0}
          />
        </h1>

        {/* Subline */}
        <p className="col-span-6 lg:col-span-2 lg:col-start-2 lg:row-start-2 mt-6 max-w-[46ch] text-[32px] leading-[1.25] text-white/70">
          <SplitWords
            text="Blending interaction, code, and tangible design."
            delay={0.38}
            stagger={0.05}
            duration={0.5}
            y={12}
            blur={0}
          />
        </p>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid />
    </>
  );
}
