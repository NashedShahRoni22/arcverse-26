"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-6xl">What Clients Say</h2>
        </Reveal>
        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="font-serif text-3xl italic leading-snug md:text-5xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="size-10 rounded-full bg-accent/20 ring-1 ring-accent/40" />
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                  {testimonial.name}, {testimonial.role} — {testimonial.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex gap-2">
          {testimonials.map((_, buttonIndex) => (
            <button
              key={buttonIndex}
              onClick={() => setIndex(buttonIndex)}
              aria-label={`Show testimonial ${buttonIndex + 1}`}
              className={`h-1.5 rounded-full transition-all ${buttonIndex === index ? "w-8 bg-accent" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}