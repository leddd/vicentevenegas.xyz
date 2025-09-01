import Typewriter from "@/components/Typewriter";

export default function Page() {
  return (
    <>
      <section className="container grid-6 gap-y-6 pt-16 pb-8">
        <h1 className="col-span-6 lg:col-span-5 max-w-[28ch] text-[48px] leading-[1.1] font-semibold text-white">
          <Typewriter text="UX/UI designer creating products that unite research, interfaces, and technology." speed={20} />
        </h1>
        <p className="col-span-6 lg:col-span-4 mt-6 max-w-[46ch] text-[32px] leading-[1.35] text-white/70">
          <Typewriter text="Exploring the intersection of interfaces, code, and tangible design." speed={18} startDelay={1400} />
        </p>
      </section>

      <section id="projects" className="container grid-6 gap-y-12 pb-24">
        {/* ...cards go here using col-span-* */}
      </section>
    </>
  );
}
