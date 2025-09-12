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
    description: "开发服务端渲染和静态生成的 React 应用程序，在我看来使用 Next.js 开发网站的效率是不错的，生态也很全面。",
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
    id: "backend-python",
    name: "Python",
    category: "backend",
    icon: "python",
    proficiency: 5,
    description: "主要用于脚本编写和快速验证。自从 AI 兴起后，我使用 Python 的频率更高了，之前也使用 django 和 flask 写过一些后端。",
    technologies: ["Python", "Django", "Flask", "FastAPI", "Pandas", "NumPy"]
  },
  {
    id: "backend-java",
    name: "Java",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "我的大部分公司项目的后端几乎都是 Java 生态的，它甚至在技术选型上影响到了机器学习的领域。我认为 Java 是全面和强大的，它非常适合大公司项目，进行标准化，模块划分以及容易找到替代的技术人员，但对于公司或者个人开发者来说，它有点重了。说实话我不是很喜欢它。",
    technologies: ["Java", "Spring Boot", "Spring MVC", "MyBatis", "Wake", "Velocity"]
  },
  {
    id: "bigdata-java",
    name: "大数据",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "常用的大数据解决方案包括 flink、spark 作为分布式数据处理框架，kafka 作为分布式消息队列，以及 pgsql、mysql、clickhouse 等多种主流数据库。OLAP 领域的解决方案大多是类似的。",
    technologies: ["Flink", "Spark", "Kafka", "ClickHouse", "PostgreSQL", "MySQL"]
  },
  {
    id: "backend-go",
    name: "Go",
    category: "backend",
    icon: "go",
    proficiency: 4,
    description: "我拥有一个 Go 版本的数据库项目。在我看来使用 go 编写一下底层服务是很舒适的。我打算完善一下我的数据库让它在支撑我的一些小的项目。",
    technologies: ["Go", "Gin", "GORM", "PostgreSQL"]
  },
  {
    id: "ml-pytorch",
    name: "PyTorch",
    category: "ml",
    icon: "pytorch",
    proficiency: 4,
    description: "有 Python 和 R 的机器学习经验。但实际上，我之前项目中使用的是 weka（Java 生态系统的机器学习解决方案）。",
    technologies: ["PyTorch", "TensorFlow", "Weka", "scikit-learn"]
  },
  {
    id: "crawler",
    name: "crawler",
    category: "crawler",
    icon: "crawler",
    proficiency: 5,
    description: "之前的项目有对多个大型的社交媒体进行解析的需求，这块积累了很多经验。这里面包括 Twitter，Facebook，Youtube， 以及 Tiktok 等。",
    technologies: ["JsonPath", "Xpath","WebRequest Rules"]
  },
  // 添加更多技能...
]; 