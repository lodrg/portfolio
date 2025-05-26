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
    },
    takeaways: {
      en: [
        "Mastered the Next.js App Router and its new features",
        "Developed efficient data fetching strategies",
        "Implemented advanced routing patterns",
        "Enhanced understanding of responsive design principles"
      ],
      zh: [
        "掌握了 Next.js App Router 及其新特性",
        "开发了高效的数据获取策略",
        "实现了高级路由模式",
        "加深了对响应式设计原则的理解"
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
    featured: true,
    takeaways: {
      en: [
        "Built a scalable database system from scratch",
        "Implemented efficient data structures and algorithms",
        "Developed robust error handling and recovery mechanisms",
        "Gained deep understanding of database internals"
      ],
      zh: [
        "从零构建了可扩展的数据库系统",
        "实现了高效的数据结构和算法",
        "开发了健壮的错误处理和恢复机制",
        "深入理解了数据库内部原理"
      ]
    }
  },
  {
    id: "go-jsonParser",
    title: "Go Json Parser",
    description: "An parser for go, it can parse the  jsojson file and return the data in the json file.",
    thumbnail: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Black.png",
    skills: ["Go", "Json", "Parser"],
    github: "https://github.com/lodrg/go_jsonparser",
    featured: true,
    takeaways: {
      en: [
        "Implemented efficient JSON parsing algorithms",
        "Developed robust error handling for malformed JSON",
        "Created a user-friendly API for JSON manipulation",
        "Optimized performance for large JSON files"
      ],
      zh: [
        "实现了高效的 JSON 解析算法",
        "开发了对错误 JSON 格式的健壮处理",
        "创建了用户友好的 JSON 操作 API",
        "优化了大文件 JSON 的性能"
      ]
    }
  }
  // 添加更多项目...
];