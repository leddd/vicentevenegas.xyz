'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

type Props = {
  href: string
  title: string
  tags: string
  image?: string
  alt: string
  priority?: boolean
}

export default function ProjectCard({ href, title, tags, image, alt, priority }: Props) {
  const variants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  }
  return (
    <motion.article
      style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
      whileHover={{
        backgroundColor: 'color-mix(in srgb, var(--card) 90%, var(--vv-accent) 10%)',
        borderColor: 'color-mix(in srgb, var(--border) 60%, var(--vv-accent) 40%)',
      }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-border bg-card overflow-hidden"
      variants={variants}
    >
      <Link
        href={href}
        className="block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--vv-accent)] focus-visible:outline-offset-4"
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
          <h3 className="text-[24px] font-semibold text-[var(--vv-text-primary)]">{title}</h3>
          <p className="mt-1 text-[16px] leading-[1.5] text-[color:var(--vv-text-secondary)] line-clamp-2">
            {tags}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
