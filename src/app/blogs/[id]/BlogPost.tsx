"use client";

import { motion } from "framer-motion";
import { BlogPost as BlogPostType } from "@/lib/markdown";

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
            <div className="text-gray-600 dark:text-gray-400 mb-4">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-lavender-100 dark:bg-lavender-900 text-lavender-800 dark:text-lavender-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div
            className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </motion.article>
  );
} 