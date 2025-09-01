"use client"
import React from 'react'
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
      <a className="text-gray-300 hover:text-white no-underline" href="#projects">Project</a>
      <a className="text-gray-300 hover:text-white no-underline" href="#about">About</a>
      <a className="text-gray-300 hover:text-white no-underline" href="#contact">Contact</a>
    </motion.nav>
  )
}