"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/personal-info';
import { personalInfoZh } from '@/data/personal-info.zh';
import { projects } from '@/data/projects';
import { projectsZh } from '@/data/projects.zh';
import { skills } from '@/data/skills';
import { skillsZh } from '@/data/skills.zh';
import { blogs } from '@/data/blogs';
import { blogsZh } from '@/data/blogs.zh';

export function useLocalizedContent() {
  const { language } = useLanguage();

  const content = {
    personalInfo: language === 'en' ? personalInfo : personalInfoZh,
    projects: language === 'en' ? projects : projectsZh,
    skills: language === 'en' ? skills : skillsZh,
    blogs: language === 'en' ? blogs : blogsZh,
  };

  return content;
} 