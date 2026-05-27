import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageCurtain } from "@/components/PageCurtain";

export const metadata: Metadata = {
  title: {
    default: "arcverse — We Build Digital Products That Lead",
    template: "%s — arcverse",
  },
  description:
    "Full-service web agency. Strategy, design, and engineering for brands that mean business.",
  openGraph: {
    title: "arcverse — Premium Web Agency",
    description:
      "Full-service web agency. Strategy, design, and engineering for brands that mean business.",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2cafa996-ce14-401d-92da-9260fc81b856/id-preview-090e582c--ccd799e6-38ba-47e8-a1e7-73539c90127a.lovable.app-1778771459595.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "arcverse — Premium Web Agency",
    description:
      "Full-service web agency. Strategy, design, and engineering for brands that mean business.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <PageCurtain />
        <ScrollProgress />
        <CustomCursor />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
