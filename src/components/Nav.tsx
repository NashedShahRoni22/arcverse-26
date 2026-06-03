"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-1000 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg md:bg-bg/85 md:backdrop-blur-xl" : "bg-bg md:bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          ARC<span className="text-accent">VERSE</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => {
            const active = pathname === l.to || pathname.startsWith(l.to + "/");
            return (
              <Link
                key={l.to}
                href={l.to}
                className="group relative font-mono text-xs uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-text-primary"
              >
                {active && (
                  <span className="absolute -top-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            );
          })}
        </nav>

        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 z-999 flex flex-col gap-8 bg-bg px-8 pt-16 md:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: i * 0.06, ease: "easeOut", duration: 0.5 },
                }}
              >
                <Link href={l.to} className="font-display text-5xl font-bold tracking-tight">
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
