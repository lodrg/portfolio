import { Skill } from '../types/skill';

export const skills: Skill[] = [
  {
    id: "design-ui-ux",
    name: "UI/UX Design",
    category: "design",
    icon: "figma",
    proficiency: 5,
    description: "Creating user-centered designs with a focus on intuitive interfaces and delightful experiences."
  },
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
    id: "frontend-tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "tailwind",
    proficiency: 4,
    description: "Creating custom designs efficiently with utility-first CSS."
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
    description: "Developing high-performance backend services with Go."
  },
  {
    id: "ml-pytorch",
    name: "PyTorch",
    category: "ml",
    icon: "pytorch",
    proficiency: 3,
    description: "Implementing deep learning models for various applications."
  }
  // 添加更多技能...
];