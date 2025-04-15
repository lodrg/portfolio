
import { Blog } from '../types/blog';

export const blogs: Blog[] = [
  {
    id: "portfolio-website",
    title: "Blog 1",
    description: "get started with blog 1",
    thumbnail: "/images/projects/portfolio.jpg",
    content: "content of blog 1",
  },
  {
    id: "go-db-project",
    title: "GoDB Database System",
    description: "A custom database system built with Go from scratch, featuring high performance and scalability.",
    thumbnail: "/images/projects/godb.jpg",
    content: "content of blog 2",
  },
  {
    id: "ml-project",
    title: "Machine Learning Model",
    description: "A machine learning model for image classification built with PyTorch.",
    thumbnail: "/images/projects/ml-project.jpg",
    content: "content of blog 3",
  }
  // 添加更多项目...
];