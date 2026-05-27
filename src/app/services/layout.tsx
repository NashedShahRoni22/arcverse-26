import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, web apps, e-commerce, motion, brand identity, and digital strategy.",
  openGraph: { title: "Services — arcverse" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
