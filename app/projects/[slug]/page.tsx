// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import { ProjectBlocks } from "@/components/project-blocks";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { MoreProjects } from "@/components/MoreProjects";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.filter(p => !p.draft).map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: `${p.title} - Case Study`, description: p.tags, openGraph: { images: [p.cover] } };
}

export default function ProjectPage({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) return notFound();
  const tagList = p.tags?.split(",").map((tag) => tag.trim()).filter(Boolean) ?? [];

  return (
    <main>
      <section className="min-h-screen snap-section py-20 md:py-32 grid-overlay">
        <div className="container grid-6 gap-y-10">
          {/* Header */}
          <div className="col-span-6 lg:col-span-4 lg:col-start-2">
            <div className="text-[#00CE93] uppercase tracking-wider text-xs md:text-sm mb-4 label-glow font-mono">
              Case Study
            </div>
            <h1 className="text-[#EDEDED] text-3xl md:text-4xl lg:text-5xl mb-0">{p.title}</h1>
            {tagList.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tagList.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-[#00CE93]/30 text-[#00CE93] text-xs md:text-sm hover:border-[#00CE93]/60 hover:mint-glow transition-all duration-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="col-span-6 lg:col-span-4 lg:col-start-2 mt-4 md:mt-0">
            <div className="aspect-[3/2] overflow-hidden bg-[#1D3C31] border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.45)]">
              <ImageWithFallback src={p.cover} alt={p.alt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Flexible content */}
      {p.blocks && (
        <section className="container grid-6 gap-y-24 pb-40">
          <ProjectBlocks blocks={p.blocks} />
        </section>
      )}
      <div className="container pb-24">
        <MoreProjects currentSlug={p.slug} />
      </div>
    </main>
  );
}
