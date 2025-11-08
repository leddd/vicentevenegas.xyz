// components/projects-grid.tsx
'use client'
import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/projects';

export default function ProjectsGrid() {
  const list = projects
    .filter(p => !p.draft)
    .sort((a, b) =>
      // optional: newest first by date
      (b.date ?? '').localeCompare(a.date ?? '')
    );

  // unlimited items: alternate into two columns
  const left  = list.filter((_, i) => i % 2 === 0);
  const right = list.filter((_, i) => i % 2 === 1);

  const sectionRef = useRef<HTMLElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateVar = () => {
      const cardEl = firstCardRef.current;
      const sectionEl = sectionRef.current;
      if (!cardEl || !sectionEl) return;
      sectionEl.style.setProperty('--card-h', `${cardEl.getBoundingClientRect().height}px`);
    };

    const cardEl = firstCardRef.current;
    const sectionEl = sectionRef.current;
    if (!cardEl || !sectionEl) return;

    updateVar();
    const ro = new ResizeObserver(updateVar);
    ro.observe(cardEl);
    const onResize = () => updateVar();
    window.addEventListener('resize', onResize);
    return () => { ro.disconnect(); window.removeEventListener('resize', onResize); };
  }, []);

  const container = { hidden: {}, show: { transition: { delayChildren: 0.3 } } };
  const column = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

  const sectionStyle: CSSProperties & { ['--card-h']: string } = { ['--card-h']: '0px' };

  return (
    <motion.section
      ref={sectionRef}
      id="work"
      className="container grid-6 pb-24 gap-6"
      style={sectionStyle}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Left column */}
      <motion.div variants={column} className="col-span-6 lg:col-span-2 lg:col-start-2 flex flex-col gap-6">
        {left.map((p, i) => (
          <div key={p.slug} ref={i === 0 ? firstCardRef : undefined}>
            <ProjectCard
              href={`/projects/${p.slug}`}
              title={p.title}
              tags={p.tags}
              image={p.cardImage ?? p.cover}
              alt={p.alt}
              priority={i === 0} // only the very first gets priority
            />
          </div>
        ))}
      </motion.div>

      {/* Right column, offset by half a card */}
      <motion.div
        variants={column}
        className="col-span-6 lg:col-span-2 lg:col-start-4 flex flex-col gap-6"
        style={{ marginTop: 'calc(var(--card-h) / 2)' }}
      >
        {right.map((p) => (
          <ProjectCard
            key={p.slug}
            href={`/projects/${p.slug}`}
            title={p.title}
            tags={p.tags}
            image={p.cardImage ?? p.cover}
            alt={p.alt}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
