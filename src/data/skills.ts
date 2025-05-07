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
    description: "Developing server-side rendered and statically generated React applications.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "design-ui-ux",
    name: "UI/UX Design",
    category: "design",
    icon: "figma",
    proficiency: 5,
    description: "Creating user-centered designs with a focus on intuitive interfaces and delightful experiences.",
    technologies: ["Figma", "Adobe XD", "Sketch"]
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
    description: "Developing high-performance backend services with Go.",
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
    description: "Developing enterprise applications with Java ecosystem.",
    technologies: ["Java", "Spring Boot", "Spring MVC", "MyBatis"]
  },
  {
    id: "bigdata-java",
    name: "Big Data",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "Building distributed data processing systems and data pipelines.",
    technologies: ["Flink", "Spark", "Kafka", "ClickHouse", "PostgreSQL", "MySQL"]
  },
  {
    id: "ml-pytorch",
    name: "Machine Learning",
    category: "ml",
    icon: "pytorch",
    proficiency: 4,
    description: "Implementing machine learning solutions for various applications.",
    technologies: ["PyTorch", "TensorFlow", "Weka", "scikit-learn"]
  }
];