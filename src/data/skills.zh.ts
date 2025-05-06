import { Skill } from '../types/skill';

export const skillsZh: Skill[] = [
  {
    id: "frontend-react",
    name: "React",
    category: "frontend",
    icon: "react",
    proficiency: 5,
    description: "使用 React 及其生态系统构建交互式用户界面。",
    technologies: ["React", "Redux", "React Router", "React Query"]
  },
  {
    id: "frontend-nextjs",
    name: "Next.js",
    category: "frontend",
    icon: "nextjs",
    proficiency: 5,
    description: "开发服务端渲染和静态生成的 React 应用程序。",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "backend-node",
    name: "Node.js",
    category: "backend",
    icon: "nodejs",
    proficiency: 4,
    description: "使用 JavaScript 构建可扩展的后端服务。",
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    id: "backend-go",
    name: "Go",
    category: "backend",
    icon: "go",
    proficiency: 4,
    description: "使用 Go 语言开发高性能后端服务。拥有一个 Go 版本的数据库项目。",
    technologies: ["Go", "Gin", "GORM", "PostgreSQL"]
  },
  {
    id: "backend-java",
    name: "Java",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "使用 Java 生态系统（如 SSM、SpringBoot）开发高性能后端服务。不过说实话我不是很喜欢它。",
    technologies: ["Java", "Spring Boot", "Spring MVC", "MyBatis"]
  },
  {
    id: "bigdata-java",
    name: "大数据",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "常用的大数据解决方案包括 flink、spark 作为分布式数据处理框架，kafka 作为分布式消息队列，以及 pgsql、mysql、clickhouse 等多种主流数据库。",
    technologies: ["Flink", "Spark", "Kafka", "ClickHouse", "PostgreSQL", "MySQL"]
  },
  {
    id: "backend-python",
    name: "Python",
    category: "backend",
    icon: "python",
    proficiency: 5,
    description: "主要用于脚本编写和快速验证。自从 AI 兴起后，我使用 Python 的频率更高了，之前也使用 django 和 flask 写过一些后端。",
    technologies: ["Python", "Django", "Flask", "FastAPI", "Pandas", "NumPy"]
  },
  {
    id: "ml-pytorch",
    name: "PyTorch",
    category: "ml",
    icon: "pytorch",
    proficiency: 4,
    description: "实现各种应用的深度学习模型。实际上，我之前项目中使用的是 weka（Java 生态系统的机器学习解决方案）。",
    technologies: ["PyTorch", "TensorFlow", "Weka", "scikit-learn", "OpenCV"]
  },
  {
    id: "design-ui-ux",
    name: "UI/UX 设计",
    category: "design",
    icon: "figma",
    proficiency: 5,
    description: "创建以用户为中心的设计，注重直观的界面和愉悦的体验。",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "原型设计"]
  },
  // 添加更多技能...
]; 