"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Nav() {
  return (
    <motion.nav
      className="nav-pill"
      aria-label="Primary"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <Link
        className="text-gray-300 hover:text-white no-underline transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
        href="/#projects"
      >
        Projects
      </Link>
      <Link
        className="text-gray-300 hover:text-white no-underline transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
        href="/#about"
      >
        About
      </Link>
      <a
        className="text-gray-300 hover:text-white no-underline transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
        href="mailto:vicente.venegas@uc.cl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
    </motion.nav>
  )
}
