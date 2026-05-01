export const DOMAIN_URL = "https://harshal-ingale.vercel.app"

export const SITE_CONFIG = {
  title: "Harshal Ingale - Full Stack Developer Portfolio",
  description:
    "Portfolio of Harshal Ingale, Full Stack Developer in Navi Mumbai. MERN stack, React, Node.js, Electron, React Native, PostgreSQL, MongoDB, and secure REST APIs.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Harshal Ingale",
  keywords: [
    "Harshal Ingale",
    "Full Stack Developer",
    "MERN",
    "React",
    "Node.js",
    "Navi Mumbai",
    "TypeScript",
    "Electron",
    "React Native",
  ],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Harshal Ingale",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Harshal Ingale",
  contactTitle: "Full Stack Developer",
  email: "harshalingale26@gmail.com",
  /** Opens WhatsApp chat (same contact number; do not display raw phone on site) */
  whatsappHref: "https://wa.me/918080101085",
  addressLink: "https://www.google.com/maps/search/?api=1&query=Navi+Mumbai+Maharashtra",
  street: "",
  city: "Navi Mumbai",
  state: "Maharashtra",
  zipCode: "",
  openingHours: [{ days: "Mon - Fri", hours: "9am - 6pm" }] as const,
  googleReviewLink: "",
  profiles: {
    linkedIn: "https://www.linkedin.com/in/harshal-ingale-50613b258",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: [`${DOMAIN_URL.replace(/\/$/, "")}/assets/bg-home-poster-optimized.webp`],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-harshal-ingale",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
