"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocalizedData } from '@/utils/language';

const sectionText = {
  title: {
    en: "Projects",
    zh: "项目"
  },
  subtitle: {
    en: "My recent work",
    zh: "我的近期作品"
  },
  viewProject: {
    en: "View Project",
    zh: "查看项目"
  }
};

export default function ProjectsSection() {
  const { projects, language } = useLocalizedData();
  
  // Only show featured projects on the home page
  const featuredProjects = projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {sectionText.title[language]}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {sectionText.subtitle[language]}
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-lavender-100 dark:bg-lavender-900 text-lavender-700 dark:text-lavender-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    className="w-full px-4 py-2 bg-lavender-700 text-white rounded-lg hover:bg-lavender-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {sectionText.viewProject[language]}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}