"use client";

import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// 简化的动画变量
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// 卡片出现效果 - 模拟 SkillsPage 风格
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,         // 从下方50px的位置开始
    scale: 0.97    // 稍微缩小的初始状态
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7,        // 稍长的动画持续时间
      ease: [0.25, 0.1, 0.25, 1], // 自定义缓动函数，模拟优雅的入场
    }
  },
  hover: {
    y: -4,
    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
    transition: { duration: 0.2 }
  }
};

export default function BlogsPage() {
  const router = useRouter();
  
  return (
    <div className="pt-20 pb-10">
      <h1 className="text-3xl font-bold mb-12 text-center">My Blogs</h1>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {blogs.map((blog, index) => (
            // 每个卡片独立控制其动画
            <motion.div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              // 使用 whileInView 实现滚动触发
              whileInView="visible"
              // 视口设置
              viewport={{ 
                once: true,           // 动画只播放一次
                margin: "0px 0px -150px 0px"  // 当距离视口底部150px时就开始动画
              }}
              // 添加基于索引的延迟，实现错开效果
              transition={{
                delay: index * 0.15,  // 每个卡片延迟0.15秒
              }}
              whileHover="hover"
              onClick={() => router.push(`/blogs/${blog.id}`)}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{blog.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}