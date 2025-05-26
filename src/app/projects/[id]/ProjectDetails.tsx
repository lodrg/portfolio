'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Project } from '@/types/project';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedContent } from '@/hooks/useLocalizedContent';

const pageText = {
  backToProjects: {
    en: "Back to Projects",
    zh: "返回项目"
  },
  overview: {
    en: "Overview",
    zh: "项目概述"
  },
  developmentProcess: {
    en: "Development Process",
    zh: "开发过程"
  },
  keyTakeaways: {
    en: "Key Takeaways",
    zh: "主要收获"
  },
  viewOnGithub: {
    en: "View on GitHub",
    zh: "在 GitHub 上查看"
  },
};

interface LocalizedProject extends Project {
  longDescription?: string;
  github?: string;
}

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { language } = useLanguage();
  const { projects } = useLocalizedContent();
  const localizedProject = projects.find(p => p.id === project.id) as LocalizedProject | undefined;
  
  const processRef = useRef(null);
  const takeawaysRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "0px 0px -100px 0px" });
  const takeawaysInView = useInView(takeawaysRef, { once: true, margin: "0px 0px -100px 0px" });

  // 动画变体
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link 
          href="/projects"
          className="inline-flex items-center text-lavender-700 dark:text-lavender-400 hover:text-lavender-700 dark:hover:text-lavender-300 mb-8 transition-colors relative group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            <FaArrowLeft className="mr-2" />
          </span>
          <span>{pageText.backToProjects[language]}</span>
          <span className="absolute -bottom-1 left-5 w-0 h-0.5 bg-lavender-700 dark:bg-lavender-500 group-hover:w-[calc(100%-20px)] transition-all duration-300"></span>
        </Link>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {localizedProject?.title || project.title}
          </motion.h1>

          {(localizedProject?.github || project.github) && (
            <motion.a
              href={localizedProject?.github || project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span>{pageText.viewOnGithub[language]}</span>
            </motion.a>
          )}
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.skills.map((skill: string, index: number) => (
            <motion.span 
              key={skill}
              variants={fadeIn}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="px-3 py-1 bg-lavender-100 dark:bg-lavender-900 text-lavender-700 dark:text-lavender-300 text-sm rounded-full hover:bg-lavender-200 dark:hover:bg-lavender-800 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 w-full rounded-lg overflow-hidden mb-8 shadow-lg"
        >
          <Image
            src={project.thumbnail}
            alt={localizedProject?.title || project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="prose dark:prose-invert max-w-none mb-12"
        >
          <motion.h2 variants={fadeInUp}>{pageText.overview[language]}</motion.h2>
          <motion.p variants={fadeInUp}>
            {localizedProject?.longDescription || localizedProject?.description || project.description}
          </motion.p>
        </motion.div>
        
        {project.process && (
          <motion.div 
            className="mb-12"
            ref={processRef}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6"
            >
              {pageText.developmentProcess[language]}
            </motion.h2>
            
            <div className="space-y-12">
              {(localizedProject?.process?.steps || project.process.steps).map((step : {
                title: string;
                description: string;
                image?: string;
              }, index: number) => (
                <ProcessStep 
                  key={index} 
                  step={step} 
                  index={index} 
                  inView={processInView}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>
        )}
        
        <motion.div 
          ref={takeawaysRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: takeawaysInView ? 1 : 0, 
            y: takeawaysInView ? 0 : 20 
          }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: takeawaysInView ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {pageText.keyTakeaways[language]}
          </motion.h2>
          
          <motion.ul 
            variants={staggerContainer}
            initial="hidden"
            animate={takeawaysInView ? "visible" : "hidden"}
            className="space-y-3"
          >
            {(localizedProject?.takeaways?.[language] || []).map((text: string, index: number) => (
              <TakeawayItem key={index} number={index + 1} text={text} />
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}
  
  // ProcessStep 组件参数类型
  interface ProcessStepProps {
    step: {
      title: string;
      description: string;
      image?: string;
    };
    index: number;
    inView: boolean;
    delay: number;
  }
  
  // TakeawayItem 组件参数类型
  interface TakeawayItemProps {
    number: number;
    text: string;
  }

// 开发流程步骤组件
function ProcessStep({ step, index, inView, delay }: ProcessStepProps) {
    return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: inView ? 1 : 0, 
        y: inView ? 0 : 30 
      }}
      transition={{ 
        duration: 0.5, 
        delay: delay 
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
        <h3 className="text-xl font-bold mb-3">
          <span className="text-lavender-700">{index + 1}.</span> {step.title}
        </h3>
        <p className="text-gray-700">{step.description}</p>
      </div>
      
      {step.image && (
        <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: inView ? 1 : 0.9, 
              opacity: inView ? 1 : 0 
            }}
            transition={{ 
              duration: 0.6, 
              delay: delay + 0.1 
            }}
            className="relative h-64 w-full rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

// 要点项组件
function TakeawayItem({ number, text }: TakeawayItemProps) {
    return (
    <motion.li 
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className="flex items-start"
    >
      <motion.span 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: 0.3 + number * 0.1 
        }}
        className="bg-lavender-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5"
      >
        {number}
      </motion.span>
      <p className="text-gray-700 dark:text-gray-300">{text}</p>
    </motion.li>
  );
}