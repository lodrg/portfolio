"use client";

import type { BlogPost } from '@/lib/markdown';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogSidebarProps {
  posts: BlogPost[];
  selectedYear: string | null;
  setSelectedYear: (year: string | null) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

export default function BlogSidebar({ posts, selectedYear, setSelectedYear, selectedTag, setSelectedTag }: BlogSidebarProps) {
  const { language } = useLanguage();
  // 提取所有年份和所有标签
  const years = Array.from(new Set(posts.map(post => post.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));
  const tags = Array.from(new Set(posts.flatMap(post => post.tags))).sort();

  // 多语言文本
  const text = {
    filter: language === 'en' ? 'Filter Blogs' : '筛选博客',
    byYear: language === 'en' ? 'By Year' : '按时间',
    byTag: language === 'en' ? 'By Category' : '按类别',
    all: language === 'en' ? 'All' : '全部',
  };

  return (
    <aside className="w-full md:w-64 lg:w-72 xl:w-80 mb-8 md:mb-0 md:ml-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{text.filter}</h3>
        <div className="mb-6">
          <div className="font-medium text-gray-700 dark:text-gray-300 mb-2">{text.byYear}</div>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded-full text-sm border ${selectedYear === null ? 'bg-forest-700 text-white border-forest-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'}`}
              onClick={() => setSelectedYear(null)}
            >{text.all}</button>
            {years.map(year => (
              <button
                key={year}
                className={`px-3 py-1 rounded-full text-sm border ${selectedYear === year ? 'bg-forest-700 text-white border-forest-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'}`}
                onClick={() => setSelectedYear(year)}
              >{year}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="font-medium text-gray-700 dark:text-gray-300 mb-2">{text.byTag}</div>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded-full text-sm border ${selectedTag === null ? 'bg-forest-700 text-white border-forest-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'}`}
              onClick={() => setSelectedTag(null)}
            >{text.all}</button>
            {tags.map(tag => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-sm border ${selectedTag === tag ? 'bg-forest-700 text-white border-forest-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'}`}
                onClick={() => setSelectedTag(tag)}
              >{tag}</button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
} 