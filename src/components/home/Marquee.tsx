"use client";

const marqueeItems = [
  "WEB DESIGN",
  "WEB APPLICATIONS",
  "E-COMMERCE",
  "BRANDING",
  "MOTION DESIGN",
  "DIGITAL STRATEGY",
];

export function Marquee() {
  return (
    <div className="group overflow-hidden border-y border-border py-6">
      <div className="flex animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-12 font-mono text-sm uppercase tracking-[0.3em]"
          >
            <span>{item}</span>
            <span className="text-accent">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}