// components/footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: "mailto:vicente.venegas@uc.cl", label: "Email", icon: "/icons/mail.svg" },
    { href: "https://www.linkedin.com/in/vicentevenegas", label: "LinkedIn", icon: "/icons/linkedin.svg" },
    { href: "https://github.com/leddd", label: "GitHub", icon: "/icons/github.svg" },
    { href: "https://instagram.com/studiohothand", label: "Instagram", icon: "/icons/ig.svg" },
  ];

  return (
    <footer className="mt-auto">
      <div className="container grid-6 items-center py-6">
        {/* Left: copyright */}
        <p className="col-span-6 lg:col-span-3 text-[16px] text-[white]/70">
          © {year} Vicente Venegas
        </p>

        {/* Right: social */}
        <nav
          aria-label="Social links"
          className="col-span-6 lg:col-span-3 flex justify-start lg:justify-end"
        >
          <ul className="flex gap-4">
            {links.map(({ href, label, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex h-10 w-8 items-center justify-center
                             text-[white]/70 hover:text-white transition"
                >
                  {/* Use the SVG as a mask so it follows text color */}
                  <span
                    aria-hidden="true"
                    className="h-6 w-6"
                    style={{
                      WebkitMask: `url(${icon}) no-repeat center / contain`,
                      mask: `url(${icon}) no-repeat center / contain`,
                      backgroundColor: "currentColor",
                      display: "inline-block",
                    }}
                  />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
