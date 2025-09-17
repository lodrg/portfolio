"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/lib/markdown";
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// 简化卡片出现效果
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    y: -2,
    transition: { duration: 0.2 }
  }
};

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const router = useRouter();
  const { language } = useLanguage();

  const calculateReadTime = (content: string | undefined) => {
    if (!content) return 1;
    return Math.ceil(content.split(' ').length / 200);
  };

  const text = {
    title: language === 'en' ? 'My Blogs' : '我的博客',
    readMore: language === 'en' ? 'Read more' : '阅读更多',
    minRead: language === 'en' ? 'min read' : '分钟阅读',
  } as const;

  return (
    <div className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">{text.title}</h1>
        
        <motion.div 
          className="max-w-4xl mx-auto space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => router.push(`/blogs/${post.id}`)}
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-200 px-2 py-0.5 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
                <div className="flex items-center">
                  <CalendarDays size={12} className="mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  {calculateReadTime(post.content)} {text.minRead}
                </div>
              </div>
              
              <h2 className="text-lg font-semibold mb-2 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors duration-300">
                {post.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 text-sm">
                {post.description}
              </p>
              
              <div className="flex items-center text-forest-700 dark:text-forest-400 group-hover:text-forest-800 dark:group-hover:text-forest-300 text-sm">
                {text.readMore}
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 