"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const pricingPlans = [
  {
    name: "Startup",
    price: "$2,999",
    description: "Perfect for early-stage teams moving from idea to launch.",
    features: [
      "MVP design and build support",
      "High-converting landing pages",
      "Investor-ready pitch decks",
      "Unlimited design requests",
      "Fast turnaround in 48 hours or less",
    ],
    cta: "Start Your Project",
    gradient: "from-orange-300 via-rose-300 to-rose-400",
  },
  {
    name: "Scale-Ups & Enterprise",
    price: "$5,499",
    description: "Built for SaaS and AI teams scaling products fast.",
    features: [
      "Product design and development support",
      "Design systems and UI libraries",
      "Parallel workflows across multiple tasks",
      "Senior UX strategy and product thinking",
      "Direct Slack access to your team",
    ],
    cta: "Discuss Your Custom Plan",
    gradient: "from-emerald-200 via-teal-200 to-cyan-300",
  },
];

export function Pricing() {
  return (
    <section className="bg-surface px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-bg/60 px-5 py-2 backdrop-blur">
              <span className="grid size-4 place-items-center rounded-full border border-text-primary/40">
                <span className="size-1.5 rounded-full bg-text-primary" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-primary">
                Full Control — Pause Or Cancel Anytime
              </span>
            </div>
            <h2 className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[110px]">
              Flexible Subscription for
              <br />
              <span className="font-serif italic font-normal">Product Teams</span>
            </h2>
            <p className="mt-8 max-w-2xl text-text-secondary md:text-lg">
              Built for teams that need ongoing support across product, design, and development
              to keep shipping and growing without slowing down.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-bg shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <div className="px-10 pb-12 pt-12">
                  <h3 className="font-serif text-2xl italic md:text-3xl">
                    {plan.name} — {plan.price}
                  </h3>
                  <p className="mt-4 text-text-secondary">{plan.description}</p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-text-primary">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center gap-3 rounded-full bg-text-primary py-3 pl-6 pr-2 text-bg shadow-lg transition-colors hover:bg-accent"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.18em]">
                        {plan.cta}
                      </span>
                      <span className="grid size-9 place-items-center rounded-full bg-bg text-text-primary transition-transform group-hover/btn:rotate-45">
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
                </div>
                <div className={`mt-auto h-64 w-full bg-gradient-to-br ${plan.gradient} md:h-72`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}