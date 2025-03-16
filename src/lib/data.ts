export const PERSONAL = {
  name: "Yaikob Wasihun",
  title: "Software Engineer",
  tagline: "Crafting digital experiences at the intersection of engineering and design.",
  bio: `I’m a software engineer focused on building scalable backend systems, secure APIs, and resilient digital products for real-world production environments.\n\nMy primary focus is backend engineering — designing clean architectures, real-time systems, authentication flows, and high-performance services with strong attention to scalability, reliability, and developer experience.\n\nAlongside backend development, I build mobile applications using React Native, Expo, and React Navigation creating products that feel fast, polished, and production-ready.`,
  location: "Addis Ababa, Ethiopia",
  email: "wyaikob@gmail.com",
  availability: "Open to opportunities",
};

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Yaikob92", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yaikob/", icon: "linkedin" },
  { label: "Telegram", href: "https://t.me/An_n_em", icon: "telegram" },
];

export const SKILLS = [
  {
    category: "Mobile Development",
    items: ["React Native", "Expo", "TypeScript", "React Navigation", "NativeWind", "Framer Motion (or Reanimated)", "REST APIs / GraphQL", "AsyncStorage / Secure Storage"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Go", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Vercel", "AWS", "CI/CD", "Git", "Linux"],
  },
];

export const TECH_MARQUEE = [
  "React", "Next.js", "TypeScript", "Go", "Node.js", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Vercel", "Tailwind", "Framer Motion",
  "GraphQL", "REST", "AWS", "Prisma", "Git", "Linux",
];

export const PROJECTS = [
  {
    id: "01",
    title: "AACP — Advertiser & Business Platform",
    description:
      "A full-scale B2B SaaS platform connecting advertisers with business owners through intelligent campaign management, real-time analytics, and AI-powered predictive insights.",
    longDescription:
      "Built the entire platform from scratch — from the authentication system and collaboration workflows to the AI analytics engine. Features include OAuth2, real-time WebSocket notifications, campaign lifecycle management, and a predictive ROI dashboard powered by machine learning.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Framer Motion", "TypeScript"],
    type: "SaaS Platform",
    status: "Production",
    year: "2025",
    github: "https://github.com/Yaikob92",
  },
  {
    id: "02",
    title: "EtoPay — Fintech Payment Gateway",
    description:
      "A modern Ethiopian payment gateway landing page with culturally resonant 3D illustrations, smooth micro-interactions, and a conversion-focused design system.",
    longDescription:
      "Designed and built a high-fidelity fintech landing page tailored to the Ethiopian market. Blended modern fintech aesthetics with subtle cultural motifs. Custom 3D hero illustration, animated feature reveals, and mobile-first responsive layout.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    type: "Fintech / Landing Page",
    status: "Shipped",
    year: "2025",
    github: "https://github.com/Yaikob92",
  },
  {
    id: "03",
    title: "Go REST API — Auth & Swagger",
    description:
      "A production-grade Go backend service implementing JWT authentication, token refresh flows, session management, and complete Swagger API documentation.",
    longDescription:
      "Built a robust authentication service in Go featuring secure JWT issuance and revocation, refresh token rotation, middleware guards, and full OpenAPI/Swagger documentation for interactive testing.",
    tech: ["Go", "Gin", "JWT", "PostgreSQL", "Swagger", "Docker"],
    type: "Backend Service",
    status: "Production",
    year: "2025",
    github: "https://github.com/Yaikob92",
  },
  {
    id: "04",
    title: "Cinematic Portfolio",
    description:
      "This portfolio. Designed and engineered to be a production-grade frontend artifact — dark cinematic aesthetic, Framer Motion orchestration, and editorial typography.",
    longDescription:
      "A showcase of frontend craft: parallax hero, scroll-driven animations, magnetic buttons, grain textures, custom cursor, and a cohesive dark cinematic design system built from scratch.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Portfolio",
    status: "Live",
    year: "2026",
    github: "https://github.com/Yaikob92",
  },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Engineer",
    company: "Self-Directed Projects",
    period: "2024 — Present",
    description:
      "Building production SaaS platforms, fintech interfaces, and scalable backend systems for clients and personal ventures. End-to-end ownership from architecture to deployment.",
    highlights: ["AACP SaaS Platform", "EtoPay Fintech", "Go Authentication API"],
  },
  {
    role: "Mobile Application Developer",
    company: "Self-Directed Projects",
    period: "2023 — 2024",
    description:
      "Focused on mastering modern mobile application development — React Native, Expo, TypeScript, animation libraries, and design systems. Built multiple full-featured applications.",
    highlights: ["React Native App Router", "Framer Motion", "Component Architecture"],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "Deep-dive into the problem space. Who uses this? What do they need? What does success feel like?",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design the system before the pixels. Clean data flow, sensible abstractions, and scalable structure.",
  },
  {
    number: "03",
    title: "Build",
    description: "Write production-quality code with attention to edge cases, performance, and developer experience.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Polish until the interaction feels inevitable. Every hover state, transition, and detail matters.",
  },
];
