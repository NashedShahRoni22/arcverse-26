"use client";

import { motion } from "framer-motion";
import { Btn } from "@/components/Btn";

const headlineLines = ["We Build Digital", "Products That Lead."];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 md:px-10">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(108,99,255,0.18),transparent_60%),radial-gradient(60%_50%_at_85%_85%,rgba(255,107,107,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:3px_3px]" />
      </div>

      <div className="mx-auto w-full max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-text-secondary"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-accent" /> Available for
          projects
        </motion.div>

        <h1 className="font-display text-[14vw] font-bold leading-[0.95] tracking-tighter md:text-[9vw] lg:text-[140px]">
          {headlineLines.map((line, lineIdx) => {
            let charOffset = 0;
            if (lineIdx > 0) {
              charOffset = headlineLines.slice(0, lineIdx).reduce((sum, current) => sum + current.length, 0);
            }

            return (
              <span key={lineIdx} className="block">
                {line.split("").map((character, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7 + (charOffset + index) * 0.018,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block whitespace-pre"
                  >
                    {character === " " ? " " : character}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 max-w-xl text-lg text-text-secondary md:text-xl"
        >
          Full-service web agency. Strategy, design, and engineering for brands that mean
          business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Btn to="/work">View Our Work</Btn>
          <Btn to="/contact" variant="ghost">
            Get in Touch
          </Btn>
        </motion.div>
      </div>
    </section>
  );
}