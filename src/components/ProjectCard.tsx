import Link from "next/link";
import type { projects } from "@/data/projects";

export function ProjectCard({
  project,
  ratio = "aspect-[4/3]",
}: {
  project: (typeof projects)[number];
  ratio?: string;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className={`relative ${ratio} overflow-hidden rounded-2xl bg-surface`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg/80 via-bg/0 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="max-w-md font-serif text-lg italic text-text-primary">
            {project.description}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="font-display text-xl font-semibold md:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-text-secondary">{project.category}</p>
      </div>
    </Link>
  );
}
