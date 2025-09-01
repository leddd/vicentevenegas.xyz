'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Brand() {
  return (
    <Link href="/" aria-label="Home" className="inline-block">
      <motion.span
        className="brand"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        vicentevenegas.
      </motion.span>
    </Link>
  )
}
