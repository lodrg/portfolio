"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { personalInfo } from '../../data/personal-info';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  

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

  return (
    <motion.header 
      className={`fixed w-full z-50 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white/80 backdrop-blur-[2px] py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        // 只执行一次入场动画，不是每次路由变化都执行
        once: true
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {personalInfo.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  prefetch={true}
                  className={`relative py-2 ${
                    pathname === link.href 
                      ? 'text-lavender-700 font-medium' 
                      : 'text-gray-700 hover:text-lavender-700 transition-colors duration-200'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-lavender-700 bottom-0" 
                      transition={{ 
                        type: 'spring', 
                        stiffness: 300, 
                        damping: 30,
                        duration: 0.3
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className="md:hidden overflow-hidden bg-white shadow-sm"
        initial={false}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
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
                    ? 'text-lavender-700 font-medium' 
                    : 'text-gray-700 hover:text-lavender-700 transition-colors duration-200'
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="mobileUnderline"
                    className="h-0.5 w-full bg-lavender-700 mt-1" 
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}