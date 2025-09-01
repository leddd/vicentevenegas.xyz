import Typewriter from "@/components/Typewriter";
import ProjectsGrid from "@/components/projects-grid";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="container grid-6 gap-y-0 pt-16 pb-8 mb-48">
        {/* Headline wrapper */}
        <div className="col-span-6 lg:col-span-3 lg:col-start-2 relative">
          {/* Ghost headline to reserve space */}
          <h1 className="invisible max-w-[28ch] text-[48px] leading-[1.1] font-bold">
            I design user experiences
            <br className="hidden lg:block" />
            from research to interface.
          </h1>

          {/* Positioned typewriter */}
          <h1 className="absolute inset-0 max-w-[28ch] text-[48px] leading-[1.1] font-bold text-white">
            <Typewriter
              text={"I design user experiences\nfrom research to interface."}
              speed={20}
            />
          </h1>
        </div>

        {/* Subline wrapper */}
        <div className="col-span-6 lg:col-span-2 lg:col-start-2 lg:row-start-2 relative mt-6">
          {/* Ghost subline */}
          <p className="invisible max-w-[46ch] text-[32px] leading-[1.35]">
            Blending interaction, code, and tangible design.
          </p>

          {/* Positioned typewriter */}
          <p className="absolute inset-0 max-w-[46ch] text-[32px] leading-[1.35] text-white/70">
            <Typewriter
              text="Blending interaction, code, and tangible design."
              speed={18}
              startDelay={1400}
            />
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid />
    </>
  );
}
