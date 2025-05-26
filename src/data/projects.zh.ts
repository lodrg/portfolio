import { Project } from '../types/project';

export const projectsZh: Project[] = [
  {
    id: "portfolio-website",
    title: "个人作品集网站",
    description: "使用 Next.js 和 Tailwind CSS 构建的响应式作品集网站。",
    thumbnail: "/images/projects/portfolio.png",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    link: "https://your-portfolio.com",
    featured: true,
    process: {
      steps: [
        {
          title: "设计",
          description: "使用 Figma 创建线框图和高质量设计。",
          image: "/images/projects/portfolio-design.jpg"
        },
        {
          title: "开发",
          description: "使用 Next.js 和 Tailwind CSS 构建网站。",
          image: "/images/projects/portfolio-dev.jpg"
        },
        {
          title: "部署",
          description: "将网站部署到 Vercel。",
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
    title: "GoDB 数据库系统",
    description: "使用 Go 语言从零构建的自定义数据库系统，具有高性能和可扩展性。",
    thumbnail: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Black.png",
    skills: ["Go", "数据库设计", "API 开发"],
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
    title: "Go Json 解析器",
    description: "一个 Go 的 Json 解析器，可以解析 Json 文件并返回 Json 文件中的数据。",
    thumbnail: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Black.png",
    skills: ["Go", "Json", "解析器"],
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
  },
  // 添加更多项目...
]; 