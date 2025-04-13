"use client";

import Image from 'next/image';
import Link from 'next/link';
import { personalInfo } from '../../data/personal-info';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  const getIconComponent = (icon: string) => {
    switch (icon) {
      case 'github':
        return <FaGithub size={24} />;
      case 'linkedin':
        return <FaLinkedin size={24} />;
      case 'twitter':
        return <FaTwitter size={24} />;
      default:
        return null;
    }
  };

  // 增强的动画变体
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-lavender-700 to-purple-600 text-transparent bg-clip-text">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-3xl text-lavender-700 font-medium mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-700 mb-8 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-lavender-700 text-white rounded-md transition-colors relative overflow-hidden group"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-lavender-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-md"></span>                </Link>
              </motion.div>

              {personalInfo.resume && (
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all relative overflow-hidden group"
                  >
                    <span className="relative z-10">View Resume</span>
                    <span className="absolute inset-0 bg-gray-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-md"></span>                  </a>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="flex space-x-4"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
            >
              {personalInfo.socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-lavender-700 transition-colors"
                  variants={socialItemVariants}
                  whileHover="hover"
                >
                  {getIconComponent(link.icon)}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                borderColor: "#EBF5FF",
                transition: { duration: 0.5 }
              }}
            >
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-lavender-500/20 to-purple-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}