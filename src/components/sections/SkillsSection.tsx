"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalizedData } from '@/utils/language';
import { SkillCategory } from '../../types/skill';
import { FaDesktop, FaCode, FaServer, FaBrain } from 'react-icons/fa';

const sectionText = {
  title: {
    en: "My Skills",
    zh: "我的技能"
  },
  subtitle: {
    en: "I'm proficient in a wide range of technologies across design, frontend, backend, and machine learning.",
    zh: "我精通设计、前端、后端和机器学习等多个领域的技术。"
  },
  categories: {
    all: {
      en: "All Skills",
      zh: "所有技能"
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
    ml: {
      en: "Machine Learning",
      zh: "机器学习"
    }
  }
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const { skills, language } = useLocalizedData();
  
  const categories = [
    { id: 'all', icon: <FaCode /> },
    { id: 'design', icon: <FaDesktop /> },
    { id: 'frontend', icon: <FaCode /> },
    { id: 'backend', icon: <FaServer /> },
    { id: 'ml', icon: <FaBrain /> }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {sectionText.title[language]}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {sectionText.subtitle[language]}
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory | 'all')}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-lavender-700 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {sectionText.categories[category.id as keyof typeof sectionText.categories][language]}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                
                <div className="mb-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(skill.proficiency / 5) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-lavender-700 dark:bg-lavender-500 h-2.5 rounded-full"
                    />
                  </div>
                </div>
                
                {skill.description && (
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                )}

                {skill.technologies && skill.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-3 py-1 text-sm font-medium text-lavender-700 dark:text-lavender-300 border border-lavender-200 dark:border-lavender-700 rounded-full hover:bg-lavender-50 dark:hover:bg-lavender-900/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}