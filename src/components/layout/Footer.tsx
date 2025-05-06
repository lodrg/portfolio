"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useLocalizedData } from '@/utils/language';

const footerLinks = {
  quickLinks: {
    en: "Quick Links",
    zh: "快速链接"
  },
  connect: {
    en: "Connect",
    zh: "联系方式"
  },
  rights: {
    en: "All rights reserved.",
    zh: "保留所有权利。"
  }
};

export default function Footer() {
  const { personalInfo, language } = useLocalizedData();

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case 'github':
        return <FaGithub size={20} />;
      case 'linkedin':
        return <FaLinkedin size={20} />;
      case 'twitter':
        return <FaTwitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl text-lavender-100 dark:text-lavender-200 font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-lavender-100 dark:text-lavender-200 mb-4">{personalInfo.title}</p>
            <p className="text-lavender-100 dark:text-lavender-200">{personalInfo.bio}</p>
          </div>
          
          <div>
            <h3 className="text-xl text-lavender-100 dark:text-lavender-200 font-bold mb-4">{footerLinks.quickLinks[language]}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-lavender-200 dark:text-lavender-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-lavender-200 dark:text-lavender-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/skills" className="text-lavender-200 dark:text-lavender-300 hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="/projects" className="text-lavender-200 dark:text-lavender-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-lavender-200 dark:text-lavender-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-lavender-100 dark:text-lavender-200 font-bold mb-4">{footerLinks.connect[language]}</h3>
            <div className="flex space-x-4 mb-4">
              {personalInfo.socialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lavender-300 dark:text-lavender-400 hover:text-white transition-colors"
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-lavender-100 dark:text-lavender-200">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-lavender-100 dark:text-lavender-200 hover:text-white transition-colors no-underline"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-lavender-800 dark:border-lavender-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. {footerLinks.rights[language]}</p>
        </div>
      </div>
    </footer>
  );
}