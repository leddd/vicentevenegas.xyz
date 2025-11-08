import Link from "next/link";

import { getRelatedProjects } from "@/lib/projects";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

type Props = {
  currentSlug: string;
};

const formatYear = (date?: string) => {
  if (!date) return "Case Study";
  const [year] = date.split("-");
  return year ?? "Case Study";
};

export function MoreProjects({ currentSlug }: Props) {
  const relatedProjects = getRelatedProjects(currentSlug, 3);
  if (!relatedProjects.length) return null;

  return (
    <section className="mt-12 md:mt-16 border-t border-[#00CE93]/20 pt-8 md:pt-12">
      <div className="mb-12 md:mb-16">
        <div className="text-[#00CE93] uppercase tracking-wider text-xs md:text-sm mb-4 label-glow font-mono">
          More Work
        </div>
        <h2 className="text-[#EDEDED] text-3xl md:text-4xl lg:text-5xl">Other Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
        {relatedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#002820]">
              <ImageWithFallback
                src={project.cardImage ?? project.cover}
                alt={project.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-[#00CE93] mix-blend-hard-light opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
            <div className="mt-4 font-mono">
              <h3 className="text-[#EDEDED] mb-1 text-base md:text-lg group-hover:text-[#00CE93] transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-[#B3B3B3] text-xs md:text-sm flex-wrap">
                <span>{project.tags?.split(",")[0] ?? "Case Study"}</span>
                <span className="text-[#00CE93]">•</span>
                <span>{formatYear(project.date)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
