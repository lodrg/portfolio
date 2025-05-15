"use client";
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogTitle() {
  const { language } = useLanguage();
  return (
    <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
      {language === 'en' ? 'Blogs' : '博客'}
    </h1>
  );
} 