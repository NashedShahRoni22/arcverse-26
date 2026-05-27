"use client";

import { Btn } from "@/components/Btn";
import { CountUp } from "@/components/CountUp";
import { Reveal, RevealItem, RevealStagger, revealItemVariants } from "@/components/Reveal";

const stats = [
  { v: 48, s: "+", l: "Projects Delivered" },
  { v: 6, s: "", l: "Years Active" },
  { v: 12, s: "", l: "Team Members" },
  { v: 98, s: "%", l: "Client Satisfaction" },
];

export function AboutTeaser() {
  return (
    <section className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-2 md:gap-24">
        <RevealStagger className="grid grid-cols-2 gap-10">
          {stats.map((stat) => (
            <RevealItem key={stat.l} variants={revealItemVariants}>
              <div className="font-display text-5xl font-bold md:text-6xl">
                <CountUp to={stat.v} suffix={stat.s} />
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                {stat.l}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <p className="font-serif text-2xl italic leading-snug text-text-primary md:text-3xl">
            &ldquo;We don&apos;t make websites. We build the version of your digital product you
            didn&apos;t know was possible.&rdquo;
          </p>
          <p className="mt-8 max-w-md text-text-secondary">
            ARCVERSE is a small studio of designers and engineers who care about craft. We work
            with founders and product teams to ship work that earns attention. No filler, no
            fluff — just the version of the product worth shipping.
          </p>
          <div className="mt-8">
            <Btn to="/about" variant="text">
              Our Story
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}