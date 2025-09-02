// app/about/page.tsx
import Image from "next/image";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="grid grid-cols-6 gap-x-6 gap-y-12">
      {/* Photo (2 cols) + Bio (4 cols) */}
      <section className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-6 gap-6 items-start">
        {/* Left: photo + socials */}
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4">
          <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
            <Image
              src="/images/about/me.jpg" // adjust if needed
              alt="Portrait of Vicente Venegas"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <ul className="flex items-center gap-4">
            <li>
              <a
                href="https://github.com/leddd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Image src="/icons/github.svg" alt="" width={32} height={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vicentevenegas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Image src="/icons/linkedin.svg" alt="" width={32} height={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/StudioHotHand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Image src="/icons/ig.svg" alt="" width={32} height={32} />
              </a>
            </li>
            <li>
              <a
                href="mailto:vicente.venegas@uc.cl"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Image src="/icons/mail.svg" alt="" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>

        {/* Right: bio */}
        <header className="col-span-6 md:col-span-4">
          <h1 className="text-[40px] font-semibold mb-4">About</h1>
          <p className="text-[18px] leading-[1.7] text-white/80">
            UX/UI designer with experience in innovation, branding, and user research, with a comprehensive approach
            that combines service design, industrial design, and the development of human-centered digital interfaces.
            I’ve worked on public sector projects focused on user research and data gathering to design inclusive,
            evidence-based solutions. In the private sector, I’ve collaborated with branding agencies, contributing
            to consistent graphic systems and brand strategies across digital formats. My background in engineering
            and web development lets me integrate into interdisciplinary teams, ensuring visual and functional
            coherence—from concept and prototyping to design QA alongside developers.
          </p>
        </header>
      </section>

      {/* Experience / Education */}
      <section className="col-span-6 lg:col-span-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        <div>
          <h2 className="text-[20px] font-semibold mb-4">Experience</h2>
          <div className="space-y-6 text-white/80">
            <div>
              <p className="font-medium">Design Intern — Public Sector</p>
              <p>National Disability Service (SENADIS)</p>
              <p className="text-sm">July 2023 — November 2023</p>
            </div>
            <div>
              <p className="font-medium">Design Intern — Brand Strategy</p>
              <p>Almabrands</p>
              <p className="text-sm">July 2022 — November 2022</p>
            </div>
            <div>
              <p className="font-medium">Designer — Freelance</p>
              <p>Studio Hot Hand</p>
              <p className="text-sm">January 2025 — Present</p>
            </div>
            <div>
              <p className="font-medium">Teaching Assistant</p>
              <p>Pontificia Universidad Católica</p>
              <p className="text-sm">March 2024 — July 2025</p>
            </div>
            <div>
              <p className="font-medium">Designer — Freelance</p>
              <p>Transmutaciones (Fondart 2024)</p>
              <p className="text-sm">May 2025 — July 2025</p>
            </div>
            <div>
              <p className="font-medium">Designer — Freelance</p>
              <p>INNOVALABS</p>
              <p className="text-sm">January 2021 — December 2023</p>
            </div>
            <div>
              <p className="font-medium">Finalist</p>
              <p>OpenBeauchef, IBM Innovation Tournament</p>
              <p className="text-sm">May 2016 — September 2017</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold mb-4">Education</h2>
          <div className="space-y-6 text-white/80">
            <div>
              <p className="font-medium">Bachelor’s Degree in Design — Pontificia Universidad Católica</p>
              <p className="text-sm">August 2019 — July 2024</p>
            </div>
            <div>
              <p className="font-medium">Engineering Coursework (CS) — Universidad de Chile</p>
              <p className="text-sm">March 2016 — July 2017</p>
            </div>
            <div>
              <p className="font-medium">CODERHOUSE — Advanced UX/UI Design</p>
              <p className="text-sm">August 2025 – October 2025</p>
            </div>
            <div>
              <p className="font-medium">AI Alignment Course – AI Safety Fundamentals</p>
              <p className="text-sm">September 2023 – January 2024</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
