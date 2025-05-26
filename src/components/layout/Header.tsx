"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

type NavLink = {
  href: string;
  label: {
    en: string;
    zh: string;
  };
};

const navLinks: NavLink[] = [
  { href: '/', label: { en: 'Home', zh: '首页' } },
  { href: '/about', label: { en: 'About', zh: '关于' } },
  { href: '/projects', label: { en: 'Projects', zh: '项目' } },
  { href: '/blogs', label: { en: 'Blogs', zh: '博客' } },
  { href: '/gallery', label: { en: 'Gallery', zh: '画廊' } },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  // 监听滚动事件，改变 header 样式
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageToggle = (targetLang: 'en' | 'zh') => {
    if (language !== targetLang) {
      toggleLanguage();
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-[2px] py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        David's Space
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`relative py-2 ${
                    pathname === link.href 
                      ? 'text-lavender-700 dark:text-lavender-400 font-medium after:scale-x-100' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-lavender-700 dark:hover:text-lavender-400'
                  } after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-lavender-700 dark:after:bg-lavender-400 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out`}
                >
                  {link.label[language]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {/* 语言切换按钮 */}
            <div className="relative flex items-center">
              <motion.div
                className="relative flex items-center bg-gray-100 dark:bg-gray-800/30 rounded-full p-0.5 shadow-sm"
                initial={false}
                animate={{
                  backgroundColor: scrolled 
                    ? 'rgba(243, 244, 246, 0.95)' 
                    : 'rgba(243, 244, 246, 0.9)',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className={`relative z-10 w-10 py-1 text-sm font-medium rounded-full transition-colors ${
                    language === 'en'
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  onClick={() => handleLanguageToggle('en')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EN
                </motion.button>
                <motion.button
                  className={`relative z-10 w-10 py-1 text-sm font-medium rounded-full transition-colors ${
                    language === 'zh'
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  onClick={() => handleLanguageToggle('zh')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  中
                </motion.button>
                <motion.div
                  className="absolute inset-0 bg-white/90 dark:bg-gray-700/50 rounded-full shadow-sm"
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                  style={{
                    width: '50%',
                    left: language === 'en' ? '0%' : '50%'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          {/* 移动端语言切换按钮 */}
          <div className="relative flex items-center">
            <motion.div
              className="relative flex items-center bg-gray-100 dark:bg-gray-800/30 rounded-full p-0.5 shadow-sm"
              initial={false}
              animate={{
                backgroundColor: scrolled 
                  ? 'rgba(243, 244, 246, 0.95)' 
                  : 'rgba(243, 244, 246, 0.9)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className={`relative z-10 w-10 py-1 text-sm font-medium rounded-full transition-colors ${
                  language === 'en'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={() => handleLanguageToggle('en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
              <motion.button
                className={`relative z-10 w-10 py-1 text-sm font-medium rounded-full transition-colors ${
                  language === 'zh'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={() => handleLanguageToggle('zh')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                中
              </motion.button>
              <motion.div
                className="absolute inset-0 bg-white/90 dark:bg-gray-700/50 rounded-full shadow-sm"
                layout
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
                style={{
                  width: '50%',
                  left: language === 'en' ? '0%' : '50%'
                }}
              />
            </motion.div>
          </div>
          <button 
            className="text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-sm"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2 }
            }}
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={
                      pathname === link.href 
                        ? 'text-lavender-700 dark:text-lavender-400 font-medium' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-lavender-700 dark:hover:text-lavender-400 transition-colors duration-200'
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}