import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from arcverse — case studies in product design, engineering, and brand.",
  openGraph: { title: "Work — arcverse" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
