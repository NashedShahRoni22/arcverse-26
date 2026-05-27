"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

const filters = ["All", "Web Design", "Web App", "E-Commerce", "Branding"] as const;

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            {projects.length} Projects
          </div>
          <h1 className="font-display text-[14vw] font-bold leading-[0.95] tracking-tighter md:text-[10vw] lg:text-[160px]">
            {"Our Work".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 + i * 0.04,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block whitespace-pre"
              >
                {c}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-12 flex flex-wrap gap-2 border-y border-border py-6">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                    filter === f
                      ? "border-accent bg-accent text-white"
                      : "border-border text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
