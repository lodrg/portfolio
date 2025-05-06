import { Blog } from '../types/blog';

export const blogsZh: Blog[] = [
  {
    id: "1",
    title: "博客 1",
    description: "开始写博客 1",
    thumbnail: "/images/projects/portfolio.jpg",
    content: "博客 1 的内容",
  },
  {
    id: "2",
    title: "GoDB 数据库系统",
    description: "使用 Go 语言从零构建的自定义数据库系统，具有高性能和可扩展性。",
    thumbnail: "/images/projects/godb.jpg",
    content: "博客 2 的内容",
  },
  {
    id: "3",
    title: "机器学习模型",
    description: "使用 PyTorch 构建的图像分类机器学习模型。",
    thumbnail: "/images/projects/ml-project.jpg",
    content: "博客 3 的内容",
  }
  // 添加更多项目...
]; 