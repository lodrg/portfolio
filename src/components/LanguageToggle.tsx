"use client";

import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  console.log('Current language:', language);

  return (
    <motion.div 
      className="relative w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <motion.div
        className="absolute w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md"
        animate={{
          x: language === 'en' ? 0 : 48,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
      <div className="relative flex justify-between items-center h-full px-2">
        <span className={`text-sm font-medium ${language === 'en' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
          EN
        </span>
        <span className={`text-sm font-medium ${language === 'zh' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
          中
        </span>
      </div>
    </motion.div>
  );
} 