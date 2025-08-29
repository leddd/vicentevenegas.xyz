import Link from "next/link";
import { Section } from "./Section";

export function Nav() {
  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Section className="py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-[24px] font-semibold">
          vicentevenegas.
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium text-textSecondary hover:text-textPrimary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </Section>
  );
}
