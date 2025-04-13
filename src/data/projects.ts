import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    thumbnail: "/images/projects/portfolio.jpg",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    link: "https://your-portfolio.com",
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
    description: "A custom database system built with Go, featuring high performance and scalability.",
    thumbnail: "/images/projects/godb.jpg",
    skills: ["Go", "Database Design", "API Development"],
    github: "https://github.com/yourusername/godb",
    featured: true
  },
  {
    id: "ml-project",
    title: "Machine Learning Model",
    description: "A machine learning model for image classification built with PyTorch.",
    thumbnail: "/images/projects/ml-project.jpg",
    skills: ["Python", "PyTorch", "Machine Learning"],
    github: "https://github.com/yourusername/ml-project",
    featured: false
  }
  // 添加更多项目...
];