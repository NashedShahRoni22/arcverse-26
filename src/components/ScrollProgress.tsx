"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setW(Math.min(100, Math.max(0, scrolled * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[9999] h-[2px] bg-transparent">
      <div
        className="h-full bg-accent transition-[width] duration-100"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}
