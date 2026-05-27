export type Project = {
  slug: string;
  title: string;
  category: "Web Design" | "Web App" | "E-Commerce" | "Branding";
  year: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "orbit",
    title: "Orbit",
    category: "Web App",
    year: "2024",
    description: "SaaS dashboard redesign for a B2B analytics platform.",
    image: "https://picsum.photos/seed/orbit/1200/800",
  },
  {
    slug: "kova-studio",
    title: "Kova Studio",
    category: "E-Commerce",
    year: "2024",
    description: "Brand identity and custom Shopify build for a luxury studio.",
    image: "https://picsum.photos/seed/kova/1200/900",
  },
  {
    slug: "fluxer",
    title: "Fluxer AI",
    category: "Web Design",
    year: "2023",
    description: "AI-powered landing page with generative hero section.",
    image: "https://picsum.photos/seed/fluxer/1200/700",
  },
  {
    slug: "meridian",
    title: "Meridian",
    category: "Branding",
    year: "2023",
    description: "Complete brand system for a fintech startup.",
    image: "https://picsum.photos/seed/meridian/1200/820",
  },
  {
    slug: "nova-health",
    title: "Nova Health",
    category: "Web App",
    year: "2023",
    description: "Patient dashboard and booking system for a telehealth platform.",
    image: "https://picsum.photos/seed/novahealth/1200/780",
  },
  {
    slug: "prism",
    title: "Prism",
    category: "Web Design",
    year: "2022",
    description: "Award-winning marketing site for a design agency.",
    image: "https://picsum.photos/seed/prism/1200/850",
  },
  {
    slug: "bloom-co",
    title: "Bloom Co.",
    category: "E-Commerce",
    year: "2022",
    description: "Direct-to-consumer e-commerce for a sustainable beauty brand.",
    image: "https://picsum.photos/seed/bloomco/1200/800",
  },
  {
    slug: "atlas",
    title: "Atlas",
    category: "Web App",
    year: "2022",
    description: "Real-time collaboration tool for distributed teams.",
    image: "https://picsum.photos/seed/atlas/1200/770",
  },
];
