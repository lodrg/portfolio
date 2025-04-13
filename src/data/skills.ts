import { Skill } from '../types/skill';

export const skills: Skill[] = [
  {
    id: "frontend-react",
    name: "React",
    category: "frontend",
    icon: "react",
    proficiency: 5,
    description: "Building interactive user interfaces with React and its ecosystem."
  },
  {
    id: "frontend-nextjs",
    name: "Next.js",
    category: "frontend",
    icon: "nextjs",
    proficiency: 5,
    description: "Developing server-side rendered and statically generated React applications."
  },
  {
    id: "backend-node",
    name: "Node.js",
    category: "backend",
    icon: "nodejs",
    proficiency: 4,
    description: "Building scalable backend services with JavaScript."
  },
  {
    id: "backend-go",
    name: "Go",
    category: "backend",
    icon: "go",
    proficiency: 4,
    description: "Developing high-performance backend services with Go. Have a go version DB."
  },
  {
    id: "backend-java",
    name: "Java",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "Developing high-performance backend services with Java ecosystem, like SSM SpringBoot. But I don't like it really."
  },
  {
    id: "bigdata-java",
    name: "Bigdata",
    category: "backend",
    icon: "java",
    proficiency: 5,
    description: "Commonly used solutions for big data include flink spark as a distributed data processing framework, kafka as a distributed message queue, and many other mainstream databases like pgsql, mysql, clickhouse."
  },
  {
    id: "backend-python",
    name: "Python",
    category: "backend",
    icon: "python",
    proficiency: 5,
    description: "Mainly use it for scripting and quick validation. I've been using python a lot more since AI came out, and I've written some backends in django and flask before.."
  },
  {
    id: "ml-pytorch",
    name: "PyTorch",
    category: "ml",
    icon: "pytorch",
    proficiency: 4,
    description: "Implementing deep learning models for various applications. In fact, the machine learning framework I used in my previous project was weka (a machine learning solution for the java ecosystem)"
  },
  {
    id: "design-ui-ux",
    name: "UI/UX Design",
    category: "design",
    icon: "figma",
    proficiency: 5,
    description: "Creating user-centered designs with a focus on intuitive interfaces and delightful experiences."
  },
  // 添加更多技能...
];