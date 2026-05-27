"use client";

import { Reveal } from "@/components/Reveal";

const platforms = [
  "Webflow",
  "Framer",
  "Dribbble",
  "Behance",
  "Fiverr",
  "Clutch",
  "Goodfirms",
  "DesignRush",
];

export function CreativePlatforms() {
  return (
    <section className="bg-text-primary px-6 py-24 text-bg md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Present on Top Creative Platforms
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {platforms.map((platform, index) => (
            <Reveal key={platform} delay={index * 0.04}>
              <div className="group relative flex h-32 items-center justify-center bg-text-primary transition hover:bg-white/5 md:h-40">
                <span aria-hidden className="absolute left-3 top-3 h-2 w-px bg-accent/60" />
                <span aria-hidden className="absolute left-3 bottom-3 h-2 w-px bg-accent/60" />
                <span className="font-display text-2xl font-semibold tracking-tight text-bg md:text-3xl">
                  {platform}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}