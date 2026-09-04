export const ROUTES = {
  home: "/",
  hunhar: "/hunhar",
  mentoria: "/mentoria",
  guild: "/the-guild",
} as const;

export const NAV_LINKS = [
  { label: "Hunhar", href: ROUTES.hunhar },
  { label: "Mentoria", href: ROUTES.mentoria },
  { label: "The Guild", href: ROUTES.guild },
] as const;

export const THREE_PARTS = [
  {
    slug: "hunhar",
    title: "Hunhar",
    link: { href: ROUTES.hunhar },
  },
  {
    slug: "mentoria",
    title: "Mentoria",
    link: { href: ROUTES.mentoria },
  },
  {
    slug: "guild",
    title: "The Guild",
    link: { href: ROUTES.guild },
  },
] as const;

export const LANDING_SECTIONS = [
  { id: "hero", label: "Surface" },
  { id: "behind-name", label: "Name" },
  { id: "ocean-theory", label: "Ocean" },
  { id: "three-parts", label: "Parts" },
  { id: "stats", label: "Stats" },
  { id: "team", label: "Team" },
  { id: "cta", label: "Call" },
  { id: "footer", label: "Floor" },
] as const;

export type SectionDef = (typeof LANDING_SECTIONS)[number];

export const STATS = [
  { label: "Student freelancers", value: "2,400+" },
  { label: "Mentors engaged", value: "180+" },
  { label: "City chapters", value: "12" },
  { label: "Project wins", value: "8,900+" },
] as const;

export const CITIES = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
] as const;

export const BRAND = {
  colors: {
    navy: "#0A1B37",
    "navy-deep": "#060f22",
    gold: "#CBA96B",
    terracotta: "#C06B3E",
    beige: "#B7AA9A",
    ivory: "#F3EFE6",
  },
} as const;
