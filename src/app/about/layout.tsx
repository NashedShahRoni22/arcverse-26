import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Built by people who care about craft. Meet the team behind arcverse.",
  openGraph: { title: "About — arcverse" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
