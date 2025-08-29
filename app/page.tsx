import { ProjectCard, Project } from "@/components/ProjectCard";
import { Section } from "@/components/Section";

const projects: Project[] = [
  {
    title: "Ojiou",
    description: "Modular play system",
    image: "/images/ojiou.svg",
    tags: ["Hardware"],
  },
  {
    title: "Caruk",
    description: "Mobile banking app",
    image: "/images/caruk.svg",
    tags: ["UI"],
  },
  {
    title: "Cabrón",
    description: "Brand identity",
    image: "/images/cabron.svg",
    tags: ["Branding"],
  },
  {
    title: "Winun",
    description: "Ocean monitoring platform",
    image: "/images/winun.svg",
    tags: ["Research"],
  },
  {
    title: "Banco",
    description: "Furniture concept",
    image: "/images/banco.svg",
    tags: ["Industrial"],
  },
];

export default function Home() {
  return (
    <Section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <div className="col-span-1 md:col-span-3 lg:col-span-3 flex flex-col gap-6">
          <h1 className="text-[48px] font-bold leading-tight">
            UX/UI designer creating products that unite research, interfaces, and technology.
          </h1>
          <p className="text-[32px] font-medium text-textSecondary">
            Exploring the intersection of interfaces, code, and tangible design.
          </p>
        </div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            className="col-span-1 md:col-span-3 lg:col-span-3"
          />
        ))}
      </div>
    </Section>
  );
}
