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
      <Link className="nav-link" href="/#projects">
        Projects
      </Link>
      <Link className="nav-link" href="/about">
        About
      </Link>
      <a className="nav-link" href="mailto:vicente.venegas@uc.cl" target="_blank" rel="noopener noreferrer">
        Contact
      </a>
    </motion.nav>
  )
}
