"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { Btn } from "@/components/Btn";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ProjectCard } from "@/components/ProjectCard";
import { Plus, Minus } from "lucide-react";

const headlineLines = ["We Build Digital", "Products That Lead."];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <FeaturedWork />
      <ServicesStack />
      <ServicesAccordion />
      <Pricing />
      <FAQ />
      <CreativePlatforms />
      <Testimonials />
      <CTABand />
    </>
  );
}

function Hero() {
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
          projects · 2025
        </motion.div>

        <h1 className="font-display text-[14vw] font-bold leading-[0.95] tracking-tighter md:text-[9vw] lg:text-[140px]">
          {headlineLines.map((line, lineIdx) => {
            let charOffset = 0;
            if (lineIdx > 0)
              charOffset = headlineLines
                .slice(0, lineIdx)
                .reduce((a, l) => a + l.length, 0);
            return (
              <span key={lineIdx} className="block">
                {line.split("").map((c, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7 + (charOffset + i) * 0.018,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block whitespace-pre"
                  >
                    {c === " " ? " " : c}
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2">
          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
          <span className="h-12 w-px bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

const marqueeItems = [
  "WEB DESIGN",
  "WEB APPLICATIONS",
  "E-COMMERCE",
  "BRANDING",
  "MOTION DESIGN",
  "DIGITAL STRATEGY",
];

function Marquee() {
  return (
    <div className="group border-y border-border py-6 overflow-hidden">
      <div className="flex animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((it, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-12 font-mono text-sm uppercase tracking-[0.3em]"
          >
            <span>{it}</span>
            <span className="text-accent">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const stats = [
  { v: 48, s: "+", l: "Projects Delivered" },
  { v: 6, s: "", l: "Years Active" },
  { v: 12, s: "", l: "Team Members" },
  { v: 98, s: "%", l: "Client Satisfaction" },
];

function AboutTeaser() {
  return (
    <section className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-2 md:gap-24">
        <RevealStagger className="grid grid-cols-2 gap-10">
          {stats.map((s) => (
            <RevealItem key={s.l} variants={revealItemVariants}>
              <div className="font-display text-5xl font-bold md:text-6xl">
                <CountUp to={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                {s.l}
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
            NSR Dev is a small studio of designers and engineers who care about craft. We work
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

function FeaturedWork() {
  const featured = projects.slice(0, 8);
  const layout: { span: string; ratio: string }[] = [
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { span: "md:col-span-7", ratio: "aspect-[16/10]" },
    { span: "md:col-span-5", ratio: "aspect-[16/10]" },
    { span: "md:col-span-5", ratio: "aspect-[16/10]" },
    { span: "md:col-span-7", ratio: "aspect-[16/10]" },
    { span: "md:col-span-4", ratio: "aspect-[4/5]" },
  ];

  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Featured <span className="font-serif italic font-normal">Case Studies</span>
            </h2>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 rounded-full bg-text-primary px-6 py-3 text-bg transition-colors hover:bg-accent hover:text-white"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                View all case studies
              </span>
              <span className="grid size-7 place-items-center rounded-full border border-current/20 transition-transform group-hover:rotate-45">
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
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12">
          {featured.map((p, i) => {
            const cfg = layout[i] ?? layout[0];
            return (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} className={cfg.span}>
                <ProjectCard project={p} ratio={cfg.ratio} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesStack() {
  return (
    <section className="px-6 pb-32 md:px-10">
      <div className="mx-auto max-w-[1280px]">
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
          {services.map((s, i) => (
            <StackCard key={s.num} service={s} index={i} total={services.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <div ref={ref} className="sticky" style={{ top: `${topOffset}px`, marginBottom: isLast ? 0 : "2rem" }}>
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
              {service.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary"
                >
                  {t}
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

function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-6xl">What We Do</h2>
        </Reveal>
        <div className="border-t border-border">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={s.num} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-8 text-left transition-colors hover:text-accent"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-text-secondary">{s.num}</span>
                    <span className="font-display text-2xl font-semibold md:text-4xl">
                      {s.name}
                    </span>
                  </div>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0" />
                  ) : (
                    <Plus className="size-5 shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-10 pl-16 md:grid-cols-[1fr_auto] md:pl-24">
                        <p className="max-w-2xl text-text-secondary md:text-lg">
                          {s.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-6xl">What Clients Say</h2>
        </Reveal>
        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="font-serif text-3xl italic leading-snug md:text-5xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="size-10 rounded-full bg-accent/20 ring-1 ring-accent/40" />
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                  {t.name}, {t.role} — {t.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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

function Pricing() {
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
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-bg shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <div className="px-10 pb-12 pt-12">
                  <h3 className="font-serif text-2xl italic md:text-3xl">
                    {plan.name} — {plan.price}
                  </h3>
                  <p className="mt-4 text-text-secondary">{plan.description}</p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-text-primary">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-text-primary" />
                        <span>{f}</span>
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
                <div
                  className={`mt-auto h-64 w-full bg-gradient-to-br ${plan.gradient} md:h-72`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
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
      className="relative overflow-hidden bg-black px-6 pb-12 pt-32 text-bg md:px-10 md:pb-16 md:pt-48"
    >
      <motion.div
        aria-hidden
        style={{ y: stripesY, opacity: stripesOpacity }}
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute inset-0 [background-image:repeating-linear-gradient(115deg,transparent_0_120px,rgba(255,255,255,0.06)_120px_240px)]" />
        <div className="absolute -top-1/4 left-1/3 h-[150%] w-[60%] rotate-[18deg] bg-gradient-to-b from-white/5 via-transparent to-transparent blur-2xl" />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,107,55,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1480px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <motion.div style={{ y: headlineY }} className="w-full">
            <Reveal>
              <h2 className="font-display text-5xl font-medium leading-[1] tracking-tight text-bg md:text-7xl">
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
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ scaleY: 0, originY: 1 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + i * 0.08,
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
            className="font-display text-[16vw] font-bold leading-[0.8] tracking-tight text-bg md:text-[14vw]"
          >
            NSRDEV<span className="text-accent">.</span>
          </motion.h3>
        </div>

        <motion.div
          style={{ y: bottomY }}
          className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10"
        >
          <Reveal>
            <p className="max-w-xs text-lg text-bg/80">
              We build digital products that help brands win and lead their market.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-bg/50">
                Contact us
              </div>
              <p className="text-bg/90">330 Townsend St #212</p>
              <p className="text-bg/90">San Francisco, CA 94107</p>
              <a
                href="mailto:hello@nsrdev.com"
                className="mt-5 inline-block text-bg/90 hover:text-accent"
              >
                hello@nsrdev.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-bg/50">
                Stay up to date
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-stretch overflow-hidden rounded-sm bg-transparent ring-1 ring-bg/15 focus-within:ring-bg/40"
              >
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent px-4 py-4 text-sm text-bg placeholder:text-bg/40 focus:outline-none"
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
    q: "What Services Does NSR Dev Offer?",
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
    q: "What Makes NSR Dev Different?",
    a: "Craft, candor, and an obsession with shipping work that actually moves the needle.",
  },
];

function FAQ() {
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
                Let&apos;s talk through your goals, your timeline, and how NSR Dev can support
                your team.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-3 text-sm font-medium text-bg transition hover:bg-accent"
              >
                Book a Free Call
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
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
                  <p className="text-sm font-medium text-text-primary">hello@nsrdev.com</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="group flex w-full items-center justify-between gap-6 border-b border-black/10 py-6 text-left transition hover:border-text-primary/40"
              >
                <span className="font-display text-base font-medium text-text-primary md:text-lg">
                  {f.q}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-text-primary transition group-hover:bg-text-primary group-hover:text-bg">
                  {open === i ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-12 text-sm leading-relaxed text-text-secondary md:text-base">
                      {f.a}
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

function CreativePlatforms() {
  return (
    <section className="bg-text-primary px-6 py-24 text-bg md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Present on Top Creative Platforms
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {platforms.map((p, i) => (
            <Reveal key={p} delay={i * 0.04}>
              <div className="group relative flex h-32 items-center justify-center bg-text-primary transition hover:bg-white/5 md:h-40">
                <span aria-hidden className="absolute left-3 top-3 h-2 w-px bg-accent/60" />
                <span aria-hidden className="absolute left-3 bottom-3 h-2 w-px bg-accent/60" />
                <span className="font-display text-2xl font-semibold tracking-tight text-bg md:text-3xl">
                  {p}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
