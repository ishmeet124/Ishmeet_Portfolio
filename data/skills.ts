export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript"],
  },
  {
    category: "E-commerce",
    skills: ["Shopify", "Shopify Liquid"],
  },
  {
    category: "Backend",
    skills: ["Python", "Flask", "Java"],
  },
  {
    category: "Database / Backend Services",
    skills: ["Supabase"],
  },
  {
    category: "CMS",
    skills: ["Sanity", "Wix"],
  },
  {
    category: "Animation & Interactive Web",
    skills: ["GSAP", "Three.js"],
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "Android Studio"],
  },
  {
    category: "Programming Concepts",
    skills: ["Object-Oriented Programming", "Java Programming"],
  },
  {
    category: "SEO",
    skills: ["SEO", "AEO", "GEO"],
  },
];
