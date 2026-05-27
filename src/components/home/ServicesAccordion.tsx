"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";

export function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-6xl">What We Do</h2>
        </Reveal>
        <div className="border-t border-border">
          {services.map((service, index) => {
            const isOpen = open === index;

            return (
              <div key={service.num} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-8 text-left transition-colors hover:text-accent"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-text-secondary">{service.num}</span>
                    <span className="font-display text-2xl font-semibold md:text-4xl">
                      {service.name}
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
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="h-fit rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary"
                            >
                              {tag}
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