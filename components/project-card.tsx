'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

type Props = {
  href: string
  title: string
  summary: string
  image?: string
  alt: string
  priority?: boolean
}

export default function ProjectCard({ href, title, summary, image, alt, priority }: Props) {
  const variants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  }
  return (
    <motion.article
      style={{ backgroundColor: '#111111', borderColor: '#2A2A2A' }}
      whileHover={{ backgroundColor: '#252525ff', borderColor: '#3A3A3A' }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border overflow-hidden"
      variants={variants}
    >
      <Link
        href={href}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
      >
        {/* Image: only render when provided to avoid empty src */}
        {image ? (
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={alt}
              fill
              priority={priority}
              className="object-cover"
              sizes="(min-width:1280px) 440px, 100vw" /* ~2 cols wide */
            />
          </div>
        ) : null}

        {/* Text: title + exactly two lines */}
        <div className="px-4 pb-4 pt-3">
          <h3 className="text-[24px] font-semibold text-white">{title}</h3>
          <p className="mt-1 text-[16px] leading-[1.5] text-[#9C9C9C] line-clamp-2">
            {summary}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
