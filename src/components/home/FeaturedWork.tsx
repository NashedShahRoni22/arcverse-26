"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function FeaturedWork() {
  const featured = projects.slice(0, 8);
  const layout: { span: string; ratio: string }[] = [
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { span: "md:col-span-7", ratio: "aspect-[16/10]" },
    { span: "md:col-span-5", ratio: "aspect-[16/10]" },
    { span: "md:col-span-5", ratio: "aspect-[16/10]" },
    { span: "md:col-span-7", ratio: "aspect-[16/10]" },
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
  ];

  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Featured <span className="font-serif italic font-normal">Case Studies</span>
            </h2>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 rounded-full bg-text-primary px-6 py-3 text-bg transition-colors hover:bg-accent hover:text-white"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                View all case studies
              </span>
              <span className="grid size-7 place-items-center rounded-full border border-current/20 transition-transform group-hover:rotate-45">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M2 10L10 2M10 2H4M10 2V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12">
          {featured.map((project, index) => {
            const config = layout[index] ?? layout[0];

            return (
              <Reveal key={project.slug} delay={(index % 3) * 0.08} className={config.span}>
                <ProjectCard project={project} ratio={config.ratio} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}