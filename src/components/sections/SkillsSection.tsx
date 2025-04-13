"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import { SkillCategory } from '../../types/skill';
import { FaDesktop, FaCode, FaServer, FaBrain } from 'react-icons/fa';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaCode /> },
    { id: 'design', name: 'Design', icon: <FaDesktop /> },
    { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
    { id: 'backend', name: 'Backend', icon: <FaServer /> },
    { id: 'ml', name: 'Machine Learning', icon: <FaBrain /> }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm proficient in a wide range of technologies across design, frontend, backend, and machine learning.
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
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
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
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-lavender-700 h-2.5 rounded-full" 
                      style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {skill.description && (
                  <p className="text-gray-600">{skill.description}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}