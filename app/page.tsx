'use client'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

const parent = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.08}} }
const child  = { hidden:{y:12,opacity:0}, show:{y:0,opacity:1, transition:{duration:0.3}} }

export default function Home(){
  return (
    <>
      <Section className="mt-16">
        <motion.div variants={parent} initial="hidden" animate="show" className="grid gap-6">
          <motion.h1 variants={child} className="text-[48px] font-bold leading-[1.1] max-w-[16ch]">UX/UI designer creating products from research to interface.</motion.h1>
          <motion.p variants={child} className="text-[32px] font-medium text-textSecondary max-w-[32ch]">Exploring the intersection of interfaces, code, and tangible design.</motion.p>
        </motion.div>
      </Section>

      <Section className="mt-16 hidden xl:block">
        {/* Desktop 6‑column grid with 220px side margins, 20px gutters, 230px columns */}
        <div className="grid-6">
          {/* 3 columns wide cards by default (spanning) */}
          {projects.map((p) => (
            <div key={p.slug} className="col-span-3">
              <ProjectCard href={`/projects/${p.slug}`} title={p.title} description={p.description} image={p.image} />
            </div>
          ))}
        </div>
      </Section>

      {/* Mobile/Tablet responsive grid (stack → 2 cols) */}
      <Section className="mt-10 xl:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} href={`/projects/${p.slug}`} title={p.title} description={p.description} image={p.image} />
          ))}
        </div>
      </Section>
    </>
  )
}
