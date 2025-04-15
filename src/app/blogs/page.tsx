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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function BlogsPage() {
  const router = useRouter();
  
  const handleCardClick = (blogId) => {
    router.push(`/blogs/${blogId}`);
  };

  return (
    <div className="pt-20 pb-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Blogs</h1>
      
      <motion.div
        className="flex flex-col max-w-3xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.map((blog) => (
          // 关键修改：添加外层div预留hover空间
          <div className="mb-8 pt-1 pb-5 -mt-1" key={`container-${blog.id}`}>
            <motion.div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              variants={cardVariants}
              // 移除Framer Motion的hover动画，改用CSS
              onClick={() => handleCardClick(blog.id)}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{blog.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}