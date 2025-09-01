// components/projects-grid.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/project-card';

export default function ProjectsGrid() {
  const testProjects = Array.from({ length: 6 }).map((_, i) => ({
    slug: `test-${i}`,
    title: 'Djavu',
    summary:
      'DIY recording station for learning the basics of composition and music production.',
    image: '/images/djavu.png',
    alt: 'Djavu device on a table',
  }));

  const left = testProjects.slice(0, 3);
  const right = testProjects.slice(3, 6);

  // Refs to measure the first card and set CSS var on the section
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!firstCardRef.current || !sectionRef.current) return;

    const updateVar = () => {
      const h = firstCardRef.current!.getBoundingClientRect().height;
      sectionRef.current!.style.setProperty('--card-h', `${h}px`);
    };

    const ro = new ResizeObserver(updateVar);
    ro.observe(firstCardRef.current);

    // Also update on load/resize for safety
    updateVar();
    window.addEventListener('resize', updateVar);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateVar);
    };
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: { delayChildren: 1.4 }, // align with subline Typewriter delay
    },
  };
  const column = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="container grid-6 pb-24 gap-6"
      style={{ ['--card-h' as any]: '0px' }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Left column: cols 2–3 */}
      <motion.div variants={column} className="col-span-6 lg:col-span-2 lg:col-start-2 flex flex-col gap-6">
        {left.map((p, i) => (
          <div key={p.slug} ref={i === 0 ? firstCardRef : undefined}>
            <ProjectCard
              href={`/projects/${p.slug}`}
              title={p.title}
              summary={p.summary}
              image={p.image}
              alt={p.alt}
              priority={i === 0}
            />
          </div>
        ))}
      </motion.div>

      {/* Right column: cols 4–5, offset = half a card */}
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
            summary={p.summary}
            image={p.image}
            alt={p.alt}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
