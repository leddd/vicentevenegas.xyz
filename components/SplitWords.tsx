'use client'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

type SplitWordsProps = {
  text: string
  className?: string
  /** delay (s) before starting the cascade */
  delay?: number
  /** time (s) between words */
  stagger?: number
  /** per-word duration (s) */
  duration?: number
  /** initial translateY (px) */
  y?: number
  /** initial blur (px) */
  blur?: number
  /** animate when scrolled into view (true) or on mount (false) */
  inView?: boolean
}

/**
 * Split text into words while preserving spaces and \n line breaks.
 * Each word animates from {opacity:0, y, blur} -> {opacity:1, 0, 0}.
 */
export default function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  duration = 0.38,
  y = 14,
  blur = 0,
  inView = false,
}: SplitWordsProps) {
  // Split into tokens, keeping spaces and newlines as separate parts
  const parts = useMemo(() => {
    // Capture groups keep delimiters: spaces and newlines
    return text.split(/(\n| +)/g).filter((p) => p !== '')
  }, [text])

  // Motion variants
  const container = {
    hidden: { opacity: 1 }, // keep layout height stable
    show: {
      opacity: 1,
      transition: { delay, staggerChildren: stagger },
    },
  }

  const child = {
    hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, ease: 'easeOut' } },
  }

  // Reduced motion support
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const m = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const update = () => setReduce(!!m?.matches)
    update()
    m?.addEventListener?.('change', update)
    return () => m?.removeEventListener?.('change', update)
  }, [])

  const MotionRoot = motion.span

  return (
    <MotionRoot
      className={className}
      variants={container}
      initial="hidden"
      {...(inView
        ? { whileInView: 'show', viewport: { once: true, amount: 0.3 } }
        : { animate: 'show' })}
    >
      {parts.map((part, i) => {
        // Newline token → actual <br/>
        if (part === '\n') {
          return <br key={`br-${i}`} />
        }
        // Space token → regular space (NBSP helps avoid collapse at edges)
        if (/^ +$/.test(part)) {
          return <span key={`sp-${i}`}>{part.replace(/ /g, '\u00A0')}</span>
        }
        // Word token → animate
        return (
            <motion.span
            key={`w-${i}`}
            // ↓ line-height set to 0 so wrapper doesn't add extra vertical space
            className="inline-block leading-[1.1] align-baseline overflow-hidden"
            variants={reduce
                ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }
                : child}
            >
            {/* inner span restores normal line-height */}
            <span className="inline align-baseline">{part}</span>
            </motion.span>
        )
      })}
    </MotionRoot>
  )
}
