"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageCurtain() {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShown(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (!shown) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[10000]">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-bg"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-bg"
      />
    </div>
  );
}
