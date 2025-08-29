import Typewriter from "@/components/Typewriter";

export default function Page() {
  return (
    <main>
      <section className="container pt-16 pb-8">
        <h1 className="max-w-[28ch] text-[48px] leading-[1.1] font-semibold caret">
          <Typewriter text="UX/UI designer creating products that unite research, interfaces, and technology." speed={20} />
        </h1>

        <p className="mt-6 max-w-[46ch] text-[32px] leading-[1.35] text-white/70">
          <Typewriter text="Exploring the intersection of interfaces, code, and tangible design." speed={18} startDelay={1400} />
        </p>
      </section>

      <section id="projects" className="container pb-24">
        {/* grid… */}
      </section>
    </main>
  );
}
