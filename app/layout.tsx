import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PageTransition } from "./page-transition";
import Nav from "@/components/nav";
import Brand from "@/components/brand";
import Footer from "@/components/footer"; // 👈 add

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vicente Venegas – Portfolio",
  description: "UX/UI and Product Designer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="header">
            <div className="container">
              <Brand />
            </div>
          </header>

          {/* Nav pill */}
          <div className="nav-sticky">
            <div className="container nav-wrap">
              <Nav />
            </div>
          </div>

          {/* Main content */}
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>

          {/* Footer sticks to bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
