import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project. We'll get back within 24 hours.",
  openGraph: { title: "Contact — arcverse" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
