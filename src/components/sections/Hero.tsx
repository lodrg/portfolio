"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiBilibili } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedContent } from '@/hooks/useLocalizedContent';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export default function Hero() {
  // 状态控制设计辅助线的显示
  const [showDesignGuides, setShowDesignGuides] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isFading] = useState(false);
  const { language } = useLanguage();
  const { personalInfo } = useLocalizedContent();

  // 使用ref获取实际元素位置，添加正确的类型
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const btnGroupRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasShown) {
      const timer1 = setTimeout(() => {
        setShowDesignGuides(true);
        setHasShown(true);
      }, 1500);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [hasShown]);

  // 第二个 useEffect 处理隐藏
  useEffect(() => {
    if (showDesignGuides) {
      const timer3 = setTimeout(() => {
        setShowDesignGuides(false);
      }, 1500);

      return () => {
        clearTimeout(timer3);
      };
    }
  }, [showDesignGuides]);

  // 单独处理滚动事件
  useEffect(() => {
    // 监听滚动事件，滚动时慢慢隐藏辅助线
    const handleScroll = () => {
      if (showDesignGuides) {
        setShowDesignGuides(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showDesignGuides]);

  // 监听语言变化，更新辅助线位置
  useEffect(() => {
    if (showDesignGuides) {
      // 重新计算辅助线位置
      const updateGuides = () => {
        if (h1Ref.current) {
          const h1Rect = h1Ref.current.getBoundingClientRect();
          const h1Guide = document.querySelector('.h1-guide') as HTMLElement;
          if (h1Guide) {
            h1Guide.style.width = `${h1Rect.width + 8}px`;
            h1Guide.style.height = `${h1Rect.height + 8}px`;
          }
        }
        if (h2Ref.current) {
          const h2Rect = h2Ref.current.getBoundingClientRect();
          const h2Guide = document.querySelector('.h2-guide') as HTMLElement;
          if (h2Guide) {
            h2Guide.style.width = `${h2Rect.width + 8}px`;
            h2Guide.style.height = `${h2Rect.height + 8}px`;
          }
        }
        if (pRef.current) {
          const pRect = pRef.current.getBoundingClientRect();
          const pGuide = document.querySelector('.p-guide') as HTMLElement;
          if (pGuide) {
            pGuide.style.width = `${pRect.width + 8}px`;
            pGuide.style.height = `${pRect.height + 8}px`;
          }
        }
      };

      // 使用 requestAnimationFrame 确保在下一帧更新
      requestAnimationFrame(updateGuides);
    }
  }, [language, showDesignGuides]);

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case 'github':
        return <FaGithub className="w-5 h-5" />;
      case 'linkedin':
        return <FaLinkedin className="w-5 h-5" />;
      case 'twitter':
        return <FaTwitter className="w-5 h-5" />;
      case 'bilibili':
        return <SiBilibili className="w-5 h-5" />;
      default:
        return null;
    }
  };

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

// 动画变体 - 调整动画时间为2秒
const designGuideVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden" ref={sectionRef}>
      {/* 设计辅助系统 */}
      <AnimatePresence>
        {showDesignGuides && (
          <>
            {/* 全局布局网格系统 */}
            <motion.div
              className="absolute -inset-1 border border-dashed border-lavender-500/40 rounded-sm pointer-events-none"
              variants={designGuideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* 主要网格 */}
              <div className="absolute inset-0 grid grid-cols-12 opacity-20">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-full border-r border-lavender-500/40" />
                ))}
              </div>

              {/* 水平内边距标记 */}
              <div className="absolute h-[1px] w-full bg-lavender-500/30 top-20" />
              <div className="absolute h-[1px] w-full bg-lavender-500/30 bottom-16" />

              {/* 容器边界 */}
              <div className="absolute w-full max-w-screen-xl mx-auto inset-x-0 top-0 bottom-0">
                <div className="w-full h-full border-x border-lavender-500/30 px-4" />
              </div>

              {/* 黄金分割线 */}
              <div className="absolute left-0 w-full h-px bg-lavender-500/30" style={{ top: '38.2%' }} />
              <div className="absolute left-0 w-full h-px bg-lavender-500/30" style={{ top: '61.8%' }} />
              <div className="absolute top-0 h-full w-px bg-lavender-500/30" style={{ left: '38.2%' }} />
              <div className="absolute top-0 h-full w-px bg-lavender-500/30" style={{ left: '61.8%' }} />
            </motion.div>

            {/* 精确内容网格 */}
            <motion.div
              className="container mx-auto px-4 absolute inset-0 pt-20 pb-16 flex items-center pointer-events-none z-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={designGuideVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full h-full">
                {/* 双栏布局标记 */}
                <div className="border-r border-dashed border-lavender-500/30 relative h-full hidden md:block" />
                <div className="border-l border-dashed border-lavender-500/30 relative h-full hidden md:block" />
              </div>
            </motion.div>

            {/* 间距标记 */}
            <motion.div
              className="fixed inset-0 z-0 pointer-events-none"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={designGuideVariants}
            >
              {/* 顶部内边距 */}
              <div className="absolute top-0 left-1/2 h-20 w-[1px] bg-lavender-500/40" />
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[10px] text-lavender-500/70 font-mono whitespace-nowrap">
                pt-20
              </div>

              {/* 底部内边距 */}
              <div className="absolute bottom-0 left-1/2 h-16 w-[1px] bg-lavender-500/40" />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] text-lavender-500/70 font-mono whitespace-nowrap">
                pb-16
              </div>
            </motion.div>

            {/* 设计系统信息 */}
            <motion.div
              className="fixed bottom-6 right-6 px-3 py-1.5 bg-white/20 border border-lavender-300/30 rounded text-xs text-lavender-700/80 font-medium backdrop-blur-sm z-20 pointer-events-none"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={designGuideVariants}
            >
              Design System
            </motion.div>

            {/* 响应式断点标记 */}
            <motion.div
              className="fixed top-6 right-6 px-3 py-1.5 bg-white/20 border border-lavender-300/30 rounded text-xs text-lavender-700/80 font-medium backdrop-blur-sm z-20 pointer-events-none"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={designGuideVariants}
            >
              md:grid-cols-2 | Responsive Layout
            </motion.div>

            {/* 黄金比例标记 */}
            <motion.div
              className="fixed top-1/2 transform -translate-y-1/2 left-2 px-2 py-1 bg-white/20 border-l-2 border-lavender-500/40 text-xs text-lavender-700/80 font-medium z-20 pointer-events-none"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={designGuideVariants}
            >
              1.618
            </motion.div>

            {/* 垂直平衡线 */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={designGuideVariants}
            >
              <div className="w-full h-[1px] bg-lavender-500/15" />
            </motion.div>

            {/* 滚动提示 */}
            <motion.div
              className="fixed bottom-20 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-white/20 border border-lavender-300/30 rounded text-xs text-lavender-700/80 font-medium backdrop-blur-sm z-20 pointer-events-none"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={designGuideVariants}
            >
              {language === 'en' ? "Scroll to hide guides" : "滚动隐藏辅助线"}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 实际内容部分 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* 标题 - 添加了ref和相对定位以准确放置辅助线 */}
            <div className="relative">
              <motion.h1
                ref={h1Ref}
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block"
              >
                {language === 'en' ? "Hi, I'm" : "你好，我是"}{" "}
                <span className="bg-gradient-to-r from-lavender-700 to-purple-600 text-transparent bg-clip-text">
                  {personalInfo.name}
                </span>
              </motion.h1>

              {/* 标题辅助线 - 使用 ResizeObserver 监听尺寸变化 */}
              {showDesignGuides && (
                <motion.div
                  className="absolute -inset-1 border border-dashed border-lavender-500/40 rounded-sm pointer-events-none"
                  variants={designGuideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    width: h1Ref.current ? h1Ref.current.offsetWidth + 8 : 'auto',
                    height: h1Ref.current ? h1Ref.current.offsetHeight + 8 : 'auto'
                  }}
                >
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-[10px] text-lavender-500/70 font-mono">h1</div>
                  <div className="absolute right-0 -bottom-4 text-[10px] text-lavender-500/70 font-mono">mb-4</div>
                  <div className="absolute -top-4 left-0 text-[10px] text-lavender-500/70 font-mono">text-4xl md:text-5xl</div>
                </motion.div>
              )}
            </div>

            {/* 副标题 - 添加了ref和相对定位 */}
            <div className="relative">
              <motion.h2
                ref={h2Ref}
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-2xl md:text-3xl text-lavender-700 font-medium mb-6"
              >
                {personalInfo.title}
              </motion.h2>

              {/* 副标题辅助线 - 使用 ResizeObserver 监听尺寸变化 */}
              {showDesignGuides && (
                <motion.div
                  className="absolute -inset-1 border border-dashed border-lavender-500/40 rounded-sm pointer-events-none"
                  variants={designGuideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    width: h2Ref.current ? h2Ref.current.offsetWidth + 8 : 'auto',
                    height: h2Ref.current ? h2Ref.current.offsetHeight + 8 : 'auto'
                  }}
                >
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-[10px] text-lavender-500/70 font-mono">h2</div>
                  <div className="absolute right-0 -bottom-4 text-[10px] text-lavender-500/70 font-mono">mb-6</div>
                  <div className="absolute -top-4 left-0 text-[10px] text-lavender-500/70 font-mono">text-lavender-700</div>
                </motion.div>
              )}
            </div>

            {/* 段落内容 - 使用相对定位包装器 */}
            <div className="relative">
              <motion.p
                ref={pRef}
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg text-gray-700 mb-8 max-w-lg"
              >
                {personalInfo.bio}
              </motion.p>

              {/* 段落辅助线 - 使用 ResizeObserver 监听尺寸变化 */}
              {showDesignGuides && (
                <motion.div
                  className="absolute -inset-1 border border-dashed border-lavender-500/40 rounded-sm pointer-events-none"
                  variants={designGuideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    width: pRef.current ? pRef.current.offsetWidth + 8 : 'auto',
                    height: pRef.current ? pRef.current.offsetHeight + 8 : 'auto'
                  }}
                >
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-[10px] text-lavender-500/70 font-mono">p</div>
                  <div className="absolute right-0 -bottom-4 text-[10px] text-lavender-500/70 font-mono">mb-8</div>
                  <div className="absolute -bottom-4 left-0 text-[10px] text-lavender-500/70 font-mono">max-w-lg</div>
                </motion.div>
              )}
            </div>

            {/* 按钮组 - 添加了ref和相对定位 */}
            <div className="relative">
              <motion.div
                ref={btnGroupRef}
                className="flex flex-wrap gap-4 mb-8"
                variants={buttonVariants}
                initial="hidden"
                animate={isFading ? "exit" : "visible"}
              >
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Link
                    href="/#contact"
                    className="px-6 py-3 bg-lavender-700 text-white rounded-md transition-colors relative overflow-hidden group"
                  >
                    <span className="relative z-10">{language === 'en' ? "Get in Touch" : "联系我"}</span>
                    <span className="absolute inset-0 bg-lavender-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-md"></span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Link
                    href="/blogs"
                    className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all relative overflow-hidden group"
                  >
                    <span className="relative z-10">{language === 'en' ? "View Blogs" : "查看博客"}</span>
                    <span className="absolute inset-0 bg-gray-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-md"></span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* 按钮组辅助线 */}
              {showDesignGuides && (
                <motion.div
                  className="absolute -inset-1 border border-dashed border-lavender-500/40 rounded-sm pointer-events-none"
                  variants={designGuideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-[10px] text-lavender-500/70 font-mono">buttons</div>
                  <div className="absolute right-0 -bottom-4 text-[10px] text-lavender-500/70 font-mono">mb-8</div>
                  <div className="absolute -top-4 left-0 text-[10px] text-lavender-500/70 font-mono">gap-4</div>
                  <div className="absolute inset-0 flex">
                    <div className="border-r border-dashed border-lavender-500/40" style={{ width: 'calc(50% - 8px)' }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* 社交链接 - 添加了ref和相对定位 */}
            <div className="relative">
              <motion.div
                ref={socialRef}
                className="flex space-x-4"
                variants={socialVariants}
                initial="hidden"
                animate={isFading ? "exit" : "visible"}
              >
                {personalInfo.socialLinks.map((link: SocialLink) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-lavender-700 dark:hover:text-lavender-400 transition-colors"
                    variants={socialItemVariants}
                    whileHover="hover"
                  >
                    {getIconComponent(link.icon)}
                  </motion.a>
                ))}
              </motion.div>

              {/* 社交链接辅助线 */}
              {showDesignGuides && (
                <motion.div
                  className="absolute -inset-1 border border-dashed border-lavender-500/40 rounded-sm pointer-events-none"
                  variants={designGuideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-[10px] text-lavender-500/70 font-mono">social</div>
                  <div className="absolute -top-4 left-0 text-[10px] text-lavender-500/70 font-mono">space-x-4</div>
                  {/* 社交图标间距标记 */}
                  <div className="absolute inset-0">
                    {personalInfo.socialLinks.map((_: SocialLink, i: number) => (
                      <div
                        key={i}
                        className="absolute top-0 bottom-0 border-r border-dashed border-lavender-500/30"
                        style={{ left: `${(i + 1) * 40}px` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* 图像区域 - 添加了ref和相对定位 */}
          <div className="relative flex justify-center ml-14">
            <motion.div
              ref={imageRef}
              variants={imageVariants}
              initial="hidden"
              animate={isFading ? "exit" : "visible"} // 根据 isFading 动态设置动画
              className="relative"
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
                  className="absolute inset-0 "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </motion.div>

              {/* 图像辅助线 */}
              {showDesignGuides && (
                <motion.div
                  className="absolute -inset-2 border-2 border-dashed border-lavender-500/40 rounded-full pointer-events-none"
                  variants={designGuideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* 十字中心线 */}
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-lavender-500/40"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-lavender-500/40"></div>

                  {/* 图像尺寸标注 */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-lavender-500/70 font-mono whitespace-nowrap">
                    md:w-96 md:h-96
                  </div>

                  <div className="absolute -right-36 top-1/2 -translate-y-1/2 text-[10px] text-lavender-500/70 font-mono whitespace-nowrap">
                    <span className="inline-block w-6 h-[1px] bg-lavender-500/40 mr-1 align-middle"></span>
                    border-4 border-white shadow-xl
                  </div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-lavender-500/70 font-mono whitespace-nowrap">
                    rounded-full
                  </div>

                  {/* 对齐标记 */}
                  <div className="absolute top-1/2 -left-[200px] w-[200px] h-[1px] border-t border-dashed border-lavender-500/40"></div>
                  <div className="absolute -left-[250px] top-1/2 -translate-y-1/2 text-[10px] text-lavender-500/70 font-mono">
                    items-center
                  </div>
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-[10px] text-lavender-500/70 font-mono">
                    <span className="inline-block w-1 h-4 border-l border-lavender-500/40 mr-1"></span>
                    justify-center
                  </div>

                  {/* 渐变叠加层标注 */}
                  <div className="absolute -left-10 -top-16 text-[10px] text-lavender-500/70 font-mono">
                    gradient-overlay
                    <svg className="inline-block ml-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 19L19 5M5 5L19 19" stroke="rgba(122, 90, 248, 0.6)" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* 悬停状态指示 */}
                  <div className="absolute -left-32 -bottom-12 text-[10px] text-lavender-500/70 font-mono">
                    hover: scale + shadow
                    <svg className="inline-block ml-1" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L10 10L19 1" stroke="rgba(122, 90, 248, 0.6)" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* 添加周围的尺寸比例辅助线 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-dashed border-lavender-500/20 rounded-full">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] text-lavender-500/50 font-mono">75%</div>
                    </div>
                  </div>

                  {/* 图像内容对象拟合标注 */}
                  <div className="absolute bottom-4 right-4 text-[8px] text-lavender-500/70 font-mono px-1 py-0.5 bg-white/10 rounded-sm backdrop-blur-sm">
                    object-cover
                  </div>

                  {/* 图像和布局之间的关系 */}
                  <div className="absolute right-1/2 -top-10 transform translate-x-1/2 rotate-320 text-[10px] text-lavender-500/70 font-mono">
                    <span className="inline-block w-12 h-[1px] bg-lavender-500/30 mr-1 align-middle"></span>
                    z-stacking
                  </div>

                  {/* 响应式设计标注 */}
                  <div className="absolute -top-12 -right-12 text-[10px] text-lavender-500/70 font-mono">
                    w-80 → md:w-96
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}