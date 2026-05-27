import Link from "next/link";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-white [&_.text-text-secondary]:text-white/70">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10">
        <Reveal>
          <div className="mb-16 h-px w-full origin-center bg-border" />
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold">
              ARC<span className="text-accent">VERSE</span>
            </div>
            <p className="mt-4 max-w-xs text-text-secondary">We build what others can&apos;t.</p>
          </div>
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
              Navigate
            </div>
            <ul className="space-y-2">
              {[
                ["/work", "Work"],
                ["/services", "Services"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link href={to} className="hover:text-accent">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
              Contact
            </div>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@arcverse.com" className="hover:text-accent">
                  hello@arcverse.com
                </a>
              </li>
              <li className="flex gap-4 pt-2 text-text-secondary">
                {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((s) => (
                  <a key={s} href="#" className="hover:text-accent">
                    {s}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary md:flex-row">
          <span>© {new Date().getFullYear()} arcverse. All rights reserved.</span>
          <span>arcverse.com</span>
        </div>
      </div>
    </footer>
  );
}
