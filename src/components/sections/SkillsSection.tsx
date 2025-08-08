"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SkillCategory } from '../../types/skill';
import { FaDesktop, FaCode, FaServer, FaBrain, FaRobot } from 'react-icons/fa';
import { useLocalizedContent } from '@/hooks/useLocalizedContent';

interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number;
  description?: string;
  technologies?: string[];
}

const categoryLabels = {
  all: {
    en: "All",
    zh: "全部"
  },
  design: {
    en: "Design",
    zh: "设计"
  },
  frontend: {
    en: "Frontend",
    zh: "前端"
  },
  backend: {
    en: "Backend",
    zh: "后端"
  },
  crawler: {
    en: "Crawler",
    zh: "爬虫"
  },
  ml: {
    en: "Machine Learning",
    zh: "机器学习"
  }
};

const sectionText = {
  title: {
    en: "Skills",
    zh: "技能"
  },
  subtitle: {
    en: "A comprehensive overview of my technical expertise and professional capabilities.",
    zh: "我的技术专长和专业能力的全面概述。"
  }
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const { language } = useLanguage();
  const { skills } = useLocalizedContent();
  
  const categories = [
    { id: 'all', icon: <FaCode /> },
    { id: 'frontend', icon: <FaCode /> },
    { id: 'backend', icon: <FaServer /> },
    { id: 'crawler', icon: <FaRobot /> },
    { id: 'ml', icon: <FaBrain /> },
    { id: 'design', icon: <FaDesktop /> },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter((skill: Skill) => skill.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{sectionText.title[language]}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {sectionText.subtitle[language]}
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory | 'all')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-forest-600 text-white shadow-lg shadow-forest-200 dark:shadow-forest-900/30 scale-105'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-forest-100 dark:hover:bg-forest-900 hover:scale-105'
                }`}
              >
                {category.icon}
                <span className="font-medium">{categoryLabels[category.id as keyof typeof categoryLabels][language]}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">{skill.description}</p>
                  {skill.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-forest-50 dark:bg-forest-900/50 text-forest-700 dark:text-forest-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}