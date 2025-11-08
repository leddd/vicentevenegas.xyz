"use client";

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleSectionNav = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
      setIsMobileMenuOpen(false);
      return;
    }
    scrollToSection(id);
  };

  const handleHomeNav = () => {
    if (pathname !== '/') {
      router.push('/');
      setIsMobileMenuOpen(false);
      return;
    }
    scrollToSection('home');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#000000]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{ fontFamily: 'Space Mono, monospace' }}
    >
      <div className="mx-auto px-6 md:px-12 lg:px-[220px] py-6">
        <div className="flex justify-between items-center">
          <button
            onClick={handleHomeNav}
            className="text-[#EDEDED] hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm"
          >
            VV
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            <button
              onClick={() => handleSectionNav('work')}
              className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm"
            >
              Work
            </button>
            <Link
              href="/about"
              className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm"
            >
              About
            </Link>
            <button
              onClick={() => handleSectionNav('contact')}
              className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#EDEDED] hover:text-[#00CE93] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#151515]/95 backdrop-blur-md border-t border-[#00CE93]/20">
          <div className="px-6 py-8 flex flex-col gap-6">
            <button
              onClick={() => handleSectionNav('work')}
              className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm text-left"
            >
              Work
            </button>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm text-left"
            >
              About
            </Link>
            <button
              onClick={() => handleSectionNav('contact')}
              className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
