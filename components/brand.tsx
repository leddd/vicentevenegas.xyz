'use client'
import { motion } from 'framer-motion'

export default function Brand() {
  return (
    <motion.div
      className="brand"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
    >
      vicentevenegas.
    </motion.div>
  )
}
