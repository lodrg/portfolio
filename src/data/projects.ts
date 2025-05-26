import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    thumbnail: "/images/projects/portfolio.png",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com/lodrg/portfolio",
    link: "https://lodrg.online",
    featured: true,
    process: {
      steps: [
        {
          title: "Design",
          description: "Created wireframes and high-fidelity designs in Figma.",
          image: "/images/projects/portfolio-design.jpg"
        },
        {
          title: "Development",
          description: "Built the website with Next.js and Tailwind CSS.",
          image: "/images/projects/portfolio-dev.jpg"
        },
        {
          title: "Deployment",
          description: "Deployed the website to Vercel.",
          image: "/images/projects/portfolio-deploy.jpg"
        }
      ]
    }
  },
  {
    id: "go-db-project",
    title: "GoDB Database System",
    description: "A custom database system built with Go from scratch, featuring high performance and scalability.",
    thumbnail: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Black.png",
    skills: ["Go", "Database Design", "API Development"],
    github: "https://github.com/lodrg/godb",
    featured: true
  },
  {
    id: "go-jsonParser",
    title: "Go Json Parser",
    description: "An parser for go, it can parse the  jsojson file and return the data in the json file.",
    thumbnail: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Black.png",
    skills: ["Go", "Json", "Parser"],
    github: "https://github.com/lodrg/go_jsonparser",
    featured: false
  }
  // 添加更多项目...
];