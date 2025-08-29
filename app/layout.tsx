import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PageTransition } from "./page-transition"; // ✅ you’ll create this file

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-offblack text-textPrimary`}
      >
        {/* Add navbar here if you want */}
        <PageTransition>{children}</PageTransition>
        {/* Add footer here if you want */}
      </body>
    </html>
  );
}
