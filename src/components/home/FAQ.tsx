"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "What Kind Of Companies Do You Work With?",
    a: "We partner with ambitious startups, scale-ups, and established brands across SaaS, fintech, e-commerce, and creative industries.",
  },
  {
    q: "What Is Your Starting Price?",
    a: "Engagements typically start at $2,999/mo for our Startup plan. Custom scopes are quoted after a discovery call.",
  },
  {
    q: "How Long Does A Project Usually Take?",
    a: "Most engagements run 4–12 weeks depending on scope. Subscriptions deliver continuously, week over week.",
  },
  {
    q: "Do You Only Do Design, Or Development Too?",
    a: "Both. We're a full-stack studio — strategy, design, and engineering under one roof.",
  },
  {
    q: "How Do You Communicate During Projects?",
    a: "Async via Slack and Linear, with weekly syncs. You always know what's shipping next.",
  },
  {
    q: "What Services Does ARCVERSE Offer?",
    a: "Brand & product design, web development, mobile apps, and ongoing growth engineering.",
  },
  {
    q: "Do You Work With Teams In Different Time Zones?",
    a: "Yes. We operate async-first and have shipped with teams from SF to Singapore.",
  },
  {
    q: "Why Hire An Agency Instead Of A Freelancer?",
    a: "Velocity, accountability, and a multidisciplinary team — without the overhead of hiring.",
  },
  {
    q: "Can You Redesign An Existing Product?",
    a: "Absolutely. We've rebooted dozens of products without breaking what already works.",
  },
  {
    q: "What Makes ARCVERSE Different?",
    a: "Craft, candor, and an obsession with shipping work that actually moves the needle.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-text-primary md:text-7xl">
              Got Questions?
            </h2>
            <p className="mt-3 font-serif text-3xl italic text-text-primary/80 md:text-5xl">
              We&apos;ve Got Answers
            </p>
            <p className="mt-8 max-w-md text-base text-text-secondary">
              If you&apos;re unsure where to start or want to see how we can help, reach out,
              and we&apos;ll walk you through it.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 max-w-md rounded-3xl bg-gradient-to-br from-bg to-surface p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface ring-1 ring-black/5">
                <span className="font-display text-xl font-bold text-text-primary">N</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-text-primary">
                Book an Intro Call
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Let&apos;s talk through your goals, your timeline, and how ARCVERSE can support
                your team.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-3 text-sm font-medium text-bg transition hover:bg-accent"
              >
                Book a Free Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </Link>
              <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-text-primary"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Prefer Email Instead?</p>
                  <p className="text-sm font-medium text-text-primary">hello@arcverse.com</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 0.04}>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="group flex w-full items-center justify-between gap-6 border-b border-black/10 py-6 text-left transition hover:border-text-primary/40"
              >
                <span className="font-display text-base font-medium text-text-primary md:text-lg">
                  {faq.q}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-text-primary transition group-hover:bg-text-primary group-hover:text-bg">
                  {open === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-12 text-sm leading-relaxed text-text-secondary md:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}