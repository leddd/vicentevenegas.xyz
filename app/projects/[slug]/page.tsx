// app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import { ProjectBlocks } from "@/components/project-blocks";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.filter(p => !p.draft).map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: `${p.title} – Case Study`, description: p.summary, openGraph: { images: [p.cover] } };
}

export default function ProjectPage({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  return (
    <article className="container grid-6 gap-y-12 pb-24">
      {/* Hero */}
      <h1 className="col-span-6 lg:col-span-4 lg:col-start-2 text-[52px] font-bold text-center lg:text-left">{p.title}</h1>
      <p className="col-span-6 lg:col-span-4 lg:col-start-2 text-center lg:text-left text-[20px] text-white/70 -mt-12">
        {p.summary}
      </p>

      {/* Cover */}
      <div className="col-span-6 lg:col-span-4 lg:col-start-2">
        <div className="relative rounded-2xl border border-[#2A2A2A] overflow-hidden">
          <Image
            src={p.cover}
            alt={p.alt}
            width={1600}
            height={1200}
            className="w-full h-auto object-cover"
            sizes="(min-width:1024px) 896px, 100vw"
          />
        </div>
      </div>

      {/* Flexible content */}
      {p.blocks && <ProjectBlocks blocks={p.blocks} />}
    </article>
  );
}
