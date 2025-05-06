import { Project } from '../types/project';

export const projectsZh: Project[] = [
  {
    id: "portfolio-website",
    title: "个人作品集网站",
    description: "使用 Next.js 和 Tailwind CSS 构建的响应式作品集网站。",
    thumbnail: "/images/projects/portfolio.jpg",
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
    }
  },
  {
    id: "go-db-project",
    title: "GoDB 数据库系统",
    description: "使用 Go 语言从零构建的自定义数据库系统，具有高性能和可扩展性。",
    thumbnail: "/images/projects/godb.jpg",
    skills: ["Go", "数据库设计", "API 开发"],
    github: "https://github.com/lodrg/godb",
    featured: true
  },
  {
    id: "ml-project",
    title: "机器学习模型",
    description: "使用 PyTorch 构建的图像分类机器学习模型。",
    thumbnail: "/images/projects/ml-project.jpg",
    skills: ["Python", "PyTorch", "机器学习"],
    github: "https://github.com/yourusername/ml-project",
    featured: false
  }
  // 添加更多项目...
]; 