// app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.filter(p => !p.draft).map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} – Case Study`,
    description: p.summary,
    openGraph: { images: [p.cover] },
  };
}

export default function ProjectPage({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  return (
    <article className="container grid-6 gap-y-8 pb-24">
      <h1 className="col-all text-[48px] font-bold">{p.title}</h1>

      <p className="col-span-6 lg:col-span-3 lg:col-start-2 text-[20px] text-white/80">
        {p.summary}
      </p>

      <div className="col-span-6 lg:col-span-4 lg:col-start-2">
        <Image
          src={p.cover}
          alt={p.alt}
          width={1600}
          height={1200}
          className="rounded-xl border border-[#2A2A2A] object-cover"
        />
      </div>

      {/* Replace with your real sections */}
      <section className="col-span-6 lg:col-span-4 lg:col-start-2 prose prose-invert max-w-none">
        <h2>Overview</h2>
        <p>Context, goals, constraints.</p>
        <h2>Process</h2>
        <p>Research, decisions, iterations.</p>
        <h2>Outcome</h2>
        <p>Impact, what shipped, metrics, learnings.</p>
      </section>
    </article>
  );
}
