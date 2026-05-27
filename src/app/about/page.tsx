"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const stats = [
  { v: 48, s: "+", l: "Projects" },
  { v: 6, s: "", l: "Years" },
  { v: 12, s: "", l: "Team" },
  { v: 98, s: "%", l: "Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      <section className="flex min-h-[80vh] items-end px-6 pb-16 pt-40 md:px-10">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            About · arcverse
          </div>
          <h1 className="font-display text-[10vw] font-bold leading-[0.95] tracking-tighter md:text-[8vw] lg:text-[120px]">
            {"Built by People Who Care About Craft".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 + i * 0.06,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.25em] inline-block"
              >
                {w}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-3">
          {[
            "arcverse started in 2019 with a simple frustration: most agency work feels generic. We wanted to build a studio where every project earns its visual language, not borrows it.",
            "We're a tight team of designers and engineers — no account managers, no layers between you and the work. The people you meet on the kickoff are the people shipping the build.",
            "Our north star is craft. We say no to projects we can't make extraordinary, and yes to the ones where we can show what's possible when product, design, and engineering are one conversation.",
          ].map((p, i) => (
            <Reveal key={i}>
              <p className="text-text-secondary md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border px-6 py-16 md:px-10">
        <RevealStagger className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.l} variants={revealItemVariants} className="text-center md:text-left">
              <div className="font-display text-5xl font-bold md:text-6xl">
                <CountUp to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                {s.l}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="mb-16 font-display text-4xl md:text-6xl">The Team</h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group rounded-xl border border-border bg-surface p-8 transition-all hover:scale-[1.02] hover:border-accent">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="mb-6 size-24 rounded-full object-cover"
                  />
                  <h3 className="font-display text-xl">{m.name}</h3>
                  <div className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {m.role}
                  </div>
                  <p className="mt-4 text-sm text-text-secondary">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="mb-16 font-display text-4xl md:text-6xl">What We Believe</h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              [
                "Craft over speed",
                "We will not ship work we are not proud of. Speed is a side effect of clarity, not a goal.",
              ],
              [
                "Honesty always",
                "If a feature shouldn't ship, we say so. If a deadline is unrealistic, we say so. The relationship matters.",
              ],
              [
                "Impact that lasts",
                "We measure ourselves on whether the work still feels right two years later. Trends are not the brief.",
              ],
            ].map(([t, b]) => (
              <Reveal key={t}>
                <h3 className="font-display text-2xl md:text-3xl">{t}</h3>
                <p className="mt-4 text-text-secondary">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
