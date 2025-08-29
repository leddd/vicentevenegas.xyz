import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PageTransition } from "./page-transition"; // ✅ you’ll create this file
import Providers from "./providers";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vicente Venegas – Portfolio",
  description: "UX/UI and Product Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space.variable} font-sans antialiased bg-black text-[#ededed]`}>
        <Providers>
          <header className="header-sticky">
            <div className="container header-row">
              <div className="brand">vicentevenegas.</div>
              <nav className="nav-pill nav-center" aria-label="Primary">
                <a href="#projects">Project</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </header>
          <PageTransition>{children}</PageTransition>
        </Providers>
        {/* Add footer here if you want */}
      </body>
    </html>
  );
}
