"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";

function StackCard({
  service,
  index,
  total,
}: {
  service: (typeof services)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const isLast = index === total - 1;
  const topOffset = 80 + index * 24;

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${topOffset}px`, marginBottom: isLast ? 0 : "2rem" }}
    >
      <motion.div
        style={{ scale }}
        className="origin-top overflow-hidden rounded-3xl border border-border bg-surface"
      >
        <div className="grid gap-10 p-10 md:grid-cols-[auto_1fr_auto] md:gap-16 md:p-14">
          <div className="font-mono text-sm text-accent">{service.num}</div>
          <div>
            <h3 className="font-display text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              {service.name}
            </h3>
            <p className="mt-6 max-w-xl text-text-secondary md:text-lg">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <motion.div style={{ opacity }} className="hidden md:block">
            <div className="grid size-16 place-items-center rounded-full border border-border text-text-secondary">
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesStack() {
  return (
    <section className="px-6 pb-32 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">
                [ Services ]
              </div>
              <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                What we <span className="font-serif italic font-normal">offer</span>
              </h2>
            </div>
            <p className="max-w-sm text-text-secondary md:text-lg">
              Every engagement is a tight loop of strategy, design, and engineering — built to
              ship and built to last.
            </p>
          </div>
        </Reveal>

        <div>
          {services.map((service, index) => (
            <StackCard key={service.num} service={service} index={index} total={services.length} />
          ))}
        </div>
      </div>
    </section>
  );
}