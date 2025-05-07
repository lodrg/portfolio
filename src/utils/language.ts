"use client";

import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/personal-info';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { blogs } from '@/data/blogs';

export type Language = 'en' | 'zh';

export function useLocalizedData() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return {
    language,
    toggleLanguage,
    personalInfo,
    projects,
    skills,
    blogs,
  };
} 