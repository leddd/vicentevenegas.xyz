import Typewriter from "@/components/Typewriter";

export default function Page() {
  return (
    <>
      <section className="container grid-6 gap-y-0 pt-16 pb-8">
        <h1 className="col-span-6 lg:col-span-3 lg:col-start-1 max-w-[28ch] text-[48px] leading-[1.1] font-bold text-white">
          <Typewriter text="I design user experiences from research to interface." speed={20} />
        </h1>
        <p className="col-span-6 lg:col-span-2 lg:col-start-1 lg:row-start-2 mt-6 max-w-[46ch] text-[32px] leading-[1.35] text-white/70">
          <Typewriter text="Blending interaction, code, and tangible design." speed={18} startDelay={1400} />
        </p>
      </section>


      <section id="projects" className="container grid-6 gap-y-12 pb-24">
        {/* ...cards go here using col-span-* */}
      </section>
    </>
  );
}
