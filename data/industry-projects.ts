export interface IndustryProject {
  number: string;
  title: string;
  website: string;
  category: string;
  technologies: string[];
  description: string;
  highlight?: string;
  statusBadge?: string;
  image: string;
}

export const industryProjects: IndustryProject[] = [
  {
    number: "01",
    title: "High Horse",
    website: "https://www.highhorse.in/",
    category: "Web Development / Digital Experience",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "CMS",
      "SEO",
      "AEO",
      "GEO",
    ],
    description:
      "A modern digital experience for High Horse, a search marketing agency focused on turning search intent into measurable business growth.",
    image: "/projects/highhorse.jpg",
  },
  {
    number: "02",
    title: "Party Rack India",
    website: "https://partyrackindia.com/",
    category: "Shopify / E-commerce",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "E-commerce",
      "SEO",
    ],
    description:
      "A Shopify e-commerce experience for Party Rack India, featuring product discovery, collections, responsive storefront experiences and SEO-focused content.",
    image: "/projects/partyrack.jpg",
  },
  {
    number: "03",
    title: "Bawa Polymers",
    website: "https://bawapolymers.com/",
    category: "Web Development / Industrial Website",
    technologies: [
      "Web Development",
      "UI/UX",
      "SEO",
      "Responsive Design",
      "CMS",
    ],
    description:
      "A modern industrial website for Bawa Polymers, presenting electrical insulation materials, products and manufacturing capabilities through a structured digital experience.",
    image: "/projects/bawapolymers.jpg",
  },
  {
    number: "04",
    title: "Terra Curtains",
    website: "https://www.terracurtains.com/",
    category: "Web Development / Product Website / SEO",
    technologies: [
      "Web Development",
      "SEO",
      "Responsive UI",
      "CMS",
      "Product Pages",
    ],
    description:
      "A product-focused website for Terra Curtains, showcasing motorized curtain solutions through responsive product experiences and SEO-driven content.",
    image: "/projects/terracurtains.jpg",
  },
  {
    number: "05",
    title: "SKYLIVE",
    website: "https://ptmfxi-xw.myshopify.com/",
    category: "Shopify / E-commerce / Interactive 3D",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "GSAP",
      "Three.js",
    ],
    description:
      "A premium TV brand experience focused on product presentation, e-commerce and interactive product storytelling.",
    highlight: "Scroll-driven 3D TV product experience",
    statusBadge: "Currently Building",
    image: "/projects/skylive-tv.png",
  },
];
