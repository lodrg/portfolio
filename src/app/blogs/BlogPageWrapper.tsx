"use client";

import { useState } from 'react';
import type { BlogPost } from '@/lib/markdown';
import BlogList from '@/app/blogs/BlogList';
import BlogSidebar from '@/app/blogs/BlogSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPageWrapper({ posts }: { posts: BlogPost[] }) {
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchYear = selectedYear ? post.date.startsWith(selectedYear) : true;
    const matchTag = selectedTag ? post.tags.includes(selectedTag) : true;
    const matchSearch = searchQuery ? (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    ) : true;
    return matchYear && matchTag && matchSearch;
  });

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-8">
      <div className="flex-1">
        <div className="mb-6">
          <input
            type="text"
            placeholder={language === 'en' ? "Search blogs..." : "搜索博客..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lavender-500"
          />
        </div>
        <BlogList posts={filteredPosts} />
      </div>
      <BlogSidebar
        posts={posts}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
    </div>
  );
} 