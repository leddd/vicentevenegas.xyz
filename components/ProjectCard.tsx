import Image from "next/image";
import { motion } from "framer-motion";
import { Tag } from "./Tag";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
};

export function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className={`flex flex-col overflow-hidden rounded-2xl border border-stroke bg-tile ${className}`}
    >
      <div className="relative w-full aspect-[4/3]">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-[24px] font-semibold text-textPrimary">{project.title}</h3>
        <p className="text-[16px] font-medium text-textSecondary">{project.description}</p>
        {project.tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
