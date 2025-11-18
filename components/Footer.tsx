"use client";

import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <section
      id="contact"
      className="min-h-screen snap-section bg-transparent flex flex-col justify-between px-6 md:px-12 lg:px-[40px] pt-24 md:pt-48 pb-12 md:pb-8 grid-overlay scroll-mt-[-220px]"
    >
      {/* Top Section */}
      <div>
        <h2 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-7xl mb-6 label-glow-soft">
          Let&rsquo;s Talk
        </h2>
        <p className="text-[#B3B3B3] text-base md:text-lg lg:text-l max-w-xl">
          Interested in working together? Have a project in mind? Let&rsquo;s connect.
        </p>
      </div>

      {/* Middle Section - Contact Info */}
      <div className="space-y-6">
        <div>
          <div
            className="text-[#00CE93] text-xs md:text-sm mb-2 uppercase tracking-wider label-glow-soft"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Email
          </div>
          <a
            href="mailto:hello@vicentevenegas.com"
            className="text-[#EDEDED] text-lg md:text-xl lg:text-xl hover:text-[#00CE93] hover:label-glow transition-all duration-200 break-all"
          >
            vicente.venegas@uc.cl
          </a>
        </div>
        <div>
          <div
            className="text-[#00CE93] text-xs md:text-sm mb-2 uppercase tracking-wider label-glow-soft"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Location
          </div>
          <div className="text-[#EDEDED] text-lg md:text-xl lg:text-l">
            Santiago, CL
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Links and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
        <div className="text-[#B3B3B3] text-xs md:text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>
          © 2025 Vicente Venegas. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="mailto:vicente.venegas@uc.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vicentevenegas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/leddd" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/studiohothand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
