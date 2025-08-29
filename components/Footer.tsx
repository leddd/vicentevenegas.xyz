import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

export function Footer() {
  const year = new Date().getFullYear();
  const icons = [
    { href: "https://github.com", src: "/file.svg", alt: "GitHub" },
    { href: "https://linkedin.com", src: "/globe.svg", alt: "LinkedIn" },
    { href: "https://dribbble.com", src: "/window.svg", alt: "Dribbble" },
    { href: "mailto:hello@example.com", src: "/vercel.svg", alt: "Email" },
  ];

  return (
    <Section className="py-10">
      <footer className="flex items-center justify-between text-textSecondary text-[20px] font-normal">
        <p>© {year} / Vicente Venegas.</p>
        <div className="flex gap-4">
          {icons.map((icon) => (
            <Link key={icon.href} href={icon.href} aria-label={icon.alt}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="opacity-70 hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </footer>
    </Section>
  );
}
