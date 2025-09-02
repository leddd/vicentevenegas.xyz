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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vicentevenegas.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vicente Venegas",
  description:
    "UX/UI designer creating products that unite research, interfaces, and technology.",
  openGraph: {
    url: siteUrl,
    siteName: "Vicente Venegas",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
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
