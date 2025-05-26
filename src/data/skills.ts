import { Skill } from '../types/skill';

export const skills: Skill[] = [
  {
    id: "frontend-react",
    name: "React",
    category: "frontend",
    icon: "react",
    proficiency: 5,
    description: "Building interactive user interfaces with React and its ecosystem.",
    technologies: ["React", "Redux", "React Router", "React Query"]
  },
  {
    id: "frontend-nextjs",
    name: "Next.js",
    category: "frontend",
    icon: "nextjs",
    proficiency: 5,
    description: "The efficiency of developing websites with Next.js is good in my opinion and the ecology is comprehensive.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "crawler",
    name: "crawler",
    category: "crawler",
    icon: "crawler",
    proficiency: 5,
    description: "I have accumulated a lot of experience in parsing multiple large social media.",
    technologies: ["JsonPath", "Xpath","WebRequest Rules"]
  },
  {
    id: "backend-node",
    name: "Node.js",
    category: "backend",
    icon: "nodejs",
    proficiency: 4,
    description: "Building scalable backend services with JavaScript.",
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    id: "backend-go",
    name: "Go",
    category: "backend",
    icon: "go",
    proficiency: 4,
    description: "I have a Go version of the database project. In my opinion, it is comfortable to write some underlying services with Go. I plan to improve my database to support my small projects.",
    technologies: ["Go", "Gin", "GORM", "PostgreSQL"]
  },
  {
    id: "backend-python",
    name: "Python",
    category: "backend",
    icon: "python",
    proficiency: 5,
    description: "Developing backend services and AI applications with Python.",
    technologies: ["Python", "Django", "Flask", "FastAPI", "Pandas", "NumPy"]
  },
  {
    id: "backend-java",
    name: "Java",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "Although the Java ecosystem is comprehensive and well-standardized, making it suitable for large enterprise projects, it's rather cumbersome for small companies and individual developers.",
    technologies: ["Java", "Spring Boot", "Spring MVC", "MyBatis"]
  },
  {
    id: "bigdata-java",
    name: "Big Data",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "Common big data solutions include flink, spark as distributed data processing frameworks, kafka as distributed message queues, and various mainstream databases such as pgsql, mysql, clickhouse. Solutions in the OLAP field are similar.",
    technologies: ["Flink", "Spark", "Kafka", "ClickHouse", "PostgreSQL", "MySQL"]
  },
  {
    id: "ml-pytorch",
    name: "Machine Learning",
    category: "ml",
    icon: "pytorch",
    proficiency: 4,
    description: "I have Python and R machine learning experience. But in fact, I used weka (machine learning solution in the Java ecosystem) in my previous projects.",
    technologies: ["PyTorch", "TensorFlow", "Weka", "scikit-learn"]
  }
];