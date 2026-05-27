"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ArrowRight } from "lucide-react";

type Project = (typeof projects)[number];

const meta = {
  client: "Orbit Technologies",
  timeline: "8 weeks",
  role: "UX Research · UI Design · Frontend",
};

const process = [
  {
    num: "01",
    title: "Research",
    body: "We interviewed 14 active users and audited 6 competitor dashboards before touching pixels.",
  },
  {
    num: "02",
    title: "Architecture",
    body: "A new sidebar IA mapped 23 features into 5 jobs-to-be-done categories.",
  },
  {
    num: "03",
    title: "Design",
    body: "A unified data-viz library replaced 4 inconsistent chart styles across the product.",
  },
  {
    num: "04",
    title: "Development",
    body: "Shipped in 8 weeks on Next.js + TypeScript with a fully typed component system.",
  },
];

export function CaseStudyClient({ project, next }: { project: Project; next: Project }) {
  return (
    <article className="pb-32">
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={project.image.replace("/1200/", "/1600/")}
          alt={project.title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/30" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
              <span>{project.category}</span>
              <span className="text-accent">·</span>
              <span>{project.year}</span>
            </div>
            <h1 className="font-display text-[14vw] font-bold leading-[0.9] tracking-tighter md:text-[10vw] lg:text-[160px]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-3">
          {[
            ["Client", meta.client],
            ["Timeline", meta.timeline],
            ["Role", meta.role],
          ].map(([k, v]) => (
            <Reveal key={k}>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                {k}
              </div>
              <div className="mt-3 font-display text-xl">{v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[1fr_2fr] md:gap-24">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">The Challenge</h2>
          </Reveal>
          <Reveal>
            <p className="text-lg text-text-secondary md:text-xl">{project.description}</p>
            <p className="mt-6 border-l-2 border-accent pl-6 font-serif text-2xl italic text-text-primary md:text-3xl">
              &ldquo;Orbit&apos;s legacy dashboard had a 68% drop-off rate on first use. Users
              couldn&apos;t find core features.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="mb-16 font-display text-3xl md:text-5xl">Process</h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            {process.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.05}>
                <div className="aspect-[16/10] overflow-hidden rounded-lg bg-surface">
                  <img
                    src={`https://picsum.photos/seed/${project.slug}-${p.num}/800/500`}
                    alt=""
                    className="size-full object-cover opacity-80"
                  />
                </div>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-text-secondary">{p.num}</span>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                </div>
                <p className="mt-3 max-w-md text-text-secondary">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="mb-12 font-display text-3xl md:text-5xl">Results</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { v: 340, s: "%", l: "DAU growth" },
              { v: 22, s: "%", l: "Drop-off (from 68%)" },
              { v: 71, s: "", l: "NPS (from 24)" },
            ].map((r) => (
              <Reveal key={r.l}>
                <div className="rounded-lg border border-border bg-surface p-10">
                  <div className="font-display text-6xl font-bold text-accent">
                    +<CountUp to={r.v} suffix={r.s} />
                  </div>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {r.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Link
        href={`/work/${next.slug}`}
        className="group relative block h-[60vh] min-h-[400px] overflow-hidden"
      >
        <img
          src={next.image}
          alt={next.title}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-bg/60 transition-colors group-hover:bg-bg/40" />
        <div className="relative flex h-full flex-col items-center justify-center gap-4 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
            Next Project
          </div>
          <div className="flex items-center gap-6 font-display text-5xl md:text-7xl">
            {next.title}{" "}
            <ArrowRight className="size-10 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </article>
  );
}
