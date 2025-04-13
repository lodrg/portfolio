'use client';

import Image from 'next/image';
import { personalInfo } from '@/data/personal-info';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" ref={bioRef}>
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
            <div className="rounded-lg overflow-hidden">
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
              className="text-xl text-lavender-700 mb-4"
            >
              {personalInfo.title}
            </motion.h3>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
              className="prose max-w-none"
            >
              <motion.p variants={fadeInUp} className="mb-4">
                I'm a passionate full-stack developer with expertise in design, frontend, backend, and machine learning technologies. With a strong foundation in both creative and technical aspects of development, I bring a unique perspective to every project.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="mb-4">
                My journey in technology began with a fascination for creating beautiful, functional interfaces. This led me to explore the world of design before diving deep into frontend development with React and Next.js.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="mb-4">
                As my skills evolved, I expanded into backend development with Node.js and Go, building robust and scalable systems. Recently, I've been exploring machine learning and artificial intelligence, adding yet another dimension to my technical toolkit.
              </motion.p>
              
              <motion.p variants={fadeInUp}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and mentoring.
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-16"
          ref={journeyRef}
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: journeyInView ? 1 : 0, 
              y: journeyInView ? 0 : 10 
            }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6"
          >
            My Journey
          </motion.h2>
          
          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
          >
            <TimelineItem 
              title="Senior Full Stack Developer"
              period="ABC Company • 2020 - Present"
              description="Leading development of web applications using Next.js, TypeScript, and Go. Implemented machine learning features to enhance user experience."
            />
            
            <TimelineItem 
              title="Frontend Developer"
              period="XYZ Agency • 2018 - 2020"
              description="Developed responsive web applications using React and Redux. Collaborated with designers to implement pixel-perfect UI components."
            />
            
            <TimelineItem 
              title="UI/UX Designer"
              period="Design Studio • 2016 - 2018"
              description="Created user-centered designs for web and mobile applications. Conducted user research and developed design systems."
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