"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";

export function CTABand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const stripesY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const stripesOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.15, 0.35, 0.2]);
  const headlineY = useTransform(scrollYProgress, [0, 1], ["40%", "-20%"]);
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["20%", "-25%"]);
  const wordmarkScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const markX = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
  const bottomY = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black px-6 pb-12 pt-32 text-white md:px-10 md:pb-16 md:pt-48"
    >
      <motion.div
        aria-hidden
        style={{ y: stripesY, opacity: stripesOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,transparent_0_120px,rgba(255,255,255,0.06)_120px_240px)]" />
        <div className="absolute -top-1/4 left-1/3 h-[150%] w-[60%] rotate-18 bg-linear-to-b from-white/5 via-transparent to-transparent blur-2xl" />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,107,55,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-370">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <motion.div style={{ y: headlineY }} className="w-full">
            <Reveal>
              <h2 className="font-display text-5xl font-medium leading-none tracking-tight text-white md:text-7xl">
                Get started today
              </h2>
            </Reveal>
          </motion.div>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-stretch overflow-hidden rounded-md font-mono text-xs uppercase tracking-[0.2em]"
            >
              <span className="flex items-center bg-accent px-7 py-5 text-primary-foreground transition-colors group-hover:bg-accent/90">
                Book a Demo
              </span>
              <span className="flex items-center justify-center bg-accent px-5 py-5 text-primary-foreground ring-1 ring-inset ring-bg/10 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="relative mt-20 flex items-end gap-6 md:mt-28 md:gap-12">
          <motion.div
            style={{ x: markX }}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex shrink-0 items-end gap-2 md:gap-3"
          >
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                initial={{ scaleY: 0, originY: 1 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + index * 0.08,
                }}
                className="block h-[14vw] w-[3vw] origin-bottom skew-x-[-18deg] bg-accent md:h-[12vw] md:w-[2.4vw]"
              />
            ))}
          </motion.div>

          <motion.h3
            style={{ y: wordmarkY, scale: wordmarkScale }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[16vw] font-bold leading-[0.8] tracking-tight text-white md:text-[14vw]"
          >
            arc<span className="text-accent">verse</span>
          </motion.h3>
        </div>

        <motion.div
          style={{ y: bottomY }}
          className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10"
        >
          <Reveal>
            <p className="max-w-xs text-lg text-white/80">
              We build digital products that help brands win and lead their market.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                Contact us
              </div>
              <p className="text-white/90">330 Townsend St #212</p>
              <p className="text-white/90">San Francisco, CA 94107</p>
              <a href="mailto:hello@arcverse.com" className="mt-5 inline-block text-white/90 hover:text-accent">
                hello@arcverse.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                Stay up to date
              </div>
              <form
                onSubmit={(event) => event.preventDefault()}
                className="flex items-stretch overflow-hidden rounded-sm bg-transparent ring-1 ring-bg/15 focus-within:ring-bg/40"
              >
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent px-4 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button className="bg-bg px-6 font-mono text-xs uppercase tracking-[0.2em] text-text-primary transition-colors hover:bg-bg/90">
                  Submit
                </button>
              </form>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}