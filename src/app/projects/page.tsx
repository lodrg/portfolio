"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedContent } from '@/hooks/useLocalizedContent';

const sectionText = {
  title: {
    en: "Projects",
    zh: "项目"
  },
  subtitle: {
    en: "A showcase of my recent work and personal projects.",
    zh: "展示我最近的工作和个人项目。"
  },
  viewDetails: {
    en: "View Details",
    zh: "查看详情"
  }
};

export default function ProjectsPage() {
  // 添加主要动画效果变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // 创建参考以检测滚动视图
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px 0px" });
  const { language } = useLanguage();
  const { projects } = useLocalizedContent();

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 relative text-gray-900 dark:text-white">
          {sectionText.title[language]}
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-lavender-700 dark:bg-lavender-500"
            initial={{ width: 0 }}
            animate={headerInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {sectionText.subtitle[language]}
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={projectVariants}
            whileHover="hover"
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={imageVariants}
              className="relative h-60 w-full"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center gap-4 opacity-0 hover:opacity-100">
                {project.github && (
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full text-lavender-700 dark:text-lavender-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                )}
                
                {project.link && (
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-700 rounded-full text-lavender-700 dark:text-lavender-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                )}
              </div>
            </motion.div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                variants={skillsVariants}
              >
                {project.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-lavender-100 dark:bg-lavender-900 text-lavender-700 dark:text-lavender-300 text-sm rounded-full"
                    variants={skillItemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <motion.span
                    className="text-lavender-700 dark:text-lavender-400 font-medium inline-flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sectionText.viewDetails[language]}
                    <motion.span
                      className="inline-block ml-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}