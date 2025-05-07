"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedContent } from '@/hooks/useLocalizedContent';

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
  },
  nav: {
    home: {
      en: "Home",
      zh: "首页"
    },
    about: {
      en: "About",
      zh: "关于"
    },
    projects: {
      en: "Projects",
      zh: "项目"
    },
    contact: {
      en: "Contact",
      zh: "联系"
    }
  }
};

function getIconComponent(icon: string) {
  switch (icon) {
    case 'github':
      return <FaGithub className="w-5 h-5" />;
    case 'linkedin':
      return <FaLinkedin className="w-5 h-5" />;
    case 'twitter':
      return <FaTwitter className="w-5 h-5" />;
    default:
      return null;
  }
}

export default function Footer() {
  const { language } = useLanguage();
  const { personalInfo } = useLocalizedContent();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-white/90 tracking-wide uppercase">{footerLinks.quickLinks[language]}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  {footerLinks.nav.home[language]}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  {footerLinks.nav.about[language]}
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  {footerLinks.nav.projects[language]}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  {footerLinks.nav.contact[language]}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-white/90 tracking-wide uppercase">{footerLinks.connect[language]}</h3>
            <div className="flex space-x-4 mb-4">
              {personalInfo.socialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={link.platform}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-sm text-white/70">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-white/70 hover:text-white transition-colors duration-300 hover:underline"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {personalInfo.name}. {footerLinks.rights[language]}
          </p>
        </div>
      </div>
    </footer>
  );
}