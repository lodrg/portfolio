'use client';

import Image from 'next/image';
import { personalInfo } from '@/data/personal-info';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const sectionText = {
  title: {
    en: 'About Me',
    zh: '关于我'
  },
  journey: {
    title: {
      en: 'My Journey',
      zh: '我的历程'
    }
  },
  bio: {
    en: [
      "I'm a passionate full-stack developer with expertise in design, frontend, backend, and machine learning technologies. With a strong foundation in both creative and technical aspects of development, I bring a unique perspective to every project.",
      "My journey in technology began with a fascination for creating beautiful, functional interfaces. This led me to explore the world of design before diving deep into frontend development with React and Next.js.",
      "As my skills evolved, I expanded into backend development with Node.js and Go, building robust and scalable systems. Recently, I've been exploring machine learning and artificial intelligence, adding yet another dimension to my technical toolkit.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and mentoring."
    ],
    zh: [
      "我是一名充满激情的全栈开发工程师，擅长设计、前端、后端和机器学习技术。凭借在开发创意和技术方面的坚实基础，我为每个项目带来独特的视角。",
      "我的技术之旅始于对创建美观、功能强大的界面的着迷。这让我在深入 React 和 Next.js 前端开发之前，先探索了设计领域。",
      "随着技能的提升，我扩展到了 Node.js 和 Go 的后端开发，构建健壮且可扩展的系统。最近，我一直在探索机器学习和人工智能，为我的技术工具箱增添了新的维度。",
      "当我不在编码时，你可以发现我在探索新技术、为开源项目做贡献，或者通过写作和指导来分享我的知识。"
    ]
  }
};

// 淡入和向上动画效果
const fadeInUp = {
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

// 交错动画的容器
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const bioRef = useRef(null);
  const journeyRef = useRef(null);
  const bioInView = useInView(bioRef, { once: true, margin: "0px 0px -100px 0px" });
  const journeyInView = useInView(journeyRef, { once: true, margin: "0px 0px -100px 0px" });
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {sectionText.title[language]}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20" ref={bioRef}>
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: bioInView ? 1 : 0, 
              scale: bioInView ? 1 : 0.95 
            }}
            transition={{ 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width={300}
                height={300}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
          
          <div className="md:col-span-2">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: bioInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl font-bold mb-4"
            >
              {personalInfo.name}
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: bioInView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-xl text-lavender-700 mb-6"
            >
              {personalInfo.title}
            </motion.h3>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
              className="prose max-w-none"
            >
              {sectionText.bio[language].map((paragraph, index) => (
                <motion.p key={index} variants={fadeInUp} className="mb-6">
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mb-20"
          ref={journeyRef}
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: journeyInView ? 1 : 0, 
              y: journeyInView ? 0 : 10 
            }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            {sectionText.journey.title[language]}
          </motion.h2>
          
          <motion.div 
            className="space-y-12 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
          >
            <TimelineItem 
              title={language === 'en' ? "Senior Full Stack Developer" : "高级全栈开发工程师"}
              period={language === 'en' ? "ABC Company • 2020 - Present" : "ABC公司 • 2020 - 至今"}
              description={language === 'en' 
                ? "Leading development of web applications using Next.js, TypeScript, and Go. Implemented machine learning features to enhance user experience."
                : "使用 Next.js、TypeScript 和 Go 领导 Web 应用程序开发。实现机器学习功能以提升用户体验。"
              }
            />
            
            <TimelineItem 
              title={language === 'en' ? "Frontend Developer" : "前端开发工程师"}
              period={language === 'en' ? "XYZ Agency • 2018 - 2020" : "XYZ机构 • 2018 - 2020"}
              description={language === 'en'
                ? "Developed responsive web applications using React and Redux. Collaborated with designers to implement pixel-perfect UI components."
                : "使用 React 和 Redux 开发响应式 Web 应用程序。与设计师合作实现像素级完美的 UI 组件。"
              }
            />
            
            <TimelineItem 
              title={language === 'en' ? "UI/UX Designer" : "UI/UX 设计师"}
              period={language === 'en' ? "Design Studio • 2016 - 2018" : "设计工作室 • 2016 - 2018"}
              description={language === 'en'
                ? "Created user-centered designs for web and mobile applications. Conducted user research and developed design systems."
                : "为 Web 和移动应用程序创建以用户为中心的设计。进行用户研究并开发设计系统。"
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

interface TimelineItemProps {
    title: string;
    period: string;
    description: string;
  }

// 时间轴项组件
function TimelineItem({ title, period, description }: TimelineItemProps) {
    return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className="relative pl-10 border-l-2 border-gray-200"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.4, 
          delay: 0.2,
          type: "spring",
          stiffness: 200 
        }}
        className="absolute left-[-8px] top-0 w-4 h-4 bg-lavender-700 rounded-full"
      />
      <div>
        <motion.h3 
          variants={fadeInUp}
          className="text-xl font-bold"
        >
          {title}
        </motion.h3>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600 mb-2"
        >
          {period}
        </motion.p>
        <motion.p 
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}