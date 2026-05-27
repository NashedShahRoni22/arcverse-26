"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { Btn } from "@/components/Btn";

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-24 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            Services · 06
          </div>
          <h1 className="font-display text-[14vw] font-bold leading-[0.9] tracking-tighter md:text-[10vw] lg:text-[160px]">
            {"What We Do".split("").map((c, i) => (
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

      <section className="border-t border-border">
        {services.map((s, i) => (
          <Reveal key={s.num}>
            <div
              className={`grid items-center gap-12 border-b border-border px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="mx-auto max-w-xl">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                  {s.num}
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-6xl">{s.name}</h2>
                <p className="mt-6 text-text-secondary md:text-lg">{s.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-surface">
                <div className="relative size-full">
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(108,99,255,0.4),transparent_70%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_75%_75%,rgba(255,107,107,0.3),transparent_70%)]" />
                  <div className="absolute inset-8 flex items-end p-4 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {s.tags.join(" · ")}
                  </div>
                  <div className="absolute right-6 top-6 font-display text-9xl text-text-primary/10">
                    {s.num}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="px-6 py-32 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl">Ready to discuss your project?</h2>
          <div className="mt-10 flex justify-center">
            <Btn to="/contact">Start a Project</Btn>
          </div>
        </Reveal>
      </section>
    </>
  );
}
