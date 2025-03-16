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
    title: "Et-Pulse — Telegram News Aggregator",
    description:
      "A real-time news aggregation platform that scrapes and curates content from public Telegram channels, delivering organized Ethiopian news in a clean, searchable interface.",
    longDescription:
      "Built a full-stack web application that scrapes public Telegram channels for news content, processes and categorizes articles, and presents them through an intuitive frontend. Features include real-time content updates, channel management, search and filtering, and a responsive reading experience.",
    tech: ["React", "TypeScript", "Node.js", "Telegram API", "Tailwind CSS"],
    type: "News Aggregator",
    status: "Production",
    year: "2025",
    github: "https://github.com/Yaikob92/Et-Pulse-frontend",
  },
  {
    id: "03",
    title: "Go Authentication & Authorization",
    description:
      "A secure backend service built in Go implementing JWT-based authentication and role-based authorization, designed for production-grade API security.",
    longDescription:
      "Engineered a standalone authentication and authorization backend using Go and the Gin framework. Features include JWT token issuance, refresh token rotation, middleware-based route protection, role-based access control, and secure password hashing — built as a reusable auth foundation for any Go project.",
    tech: ["Go", "Gin", "JWT", "PostgreSQL", "Docker"],
    type: "Backend Service",
    status: "Production",
    year: "2025",
    github: "https://github.com/Yaikob92/jwt-Authentication",
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
    highlights: ["AACP SaaS Platform", "Et-Pulse News Aggregator", "Go Authentication API"],
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

