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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-white/90 mb-3">{footerLinks.quickLinks[language]}</h3>
            <ul className="space-y-1.5">
              <li><Link href="/" className="text-xs text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-xs text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/skills" className="text-xs text-white/70 hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="/projects" className="text-xs text-white/70 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-xs text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white/90 mb-3">{footerLinks.connect[language]}</h3>
            <div className="flex space-x-3 mb-3">
              {personalInfo.socialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-xs text-white/70">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-white/70 hover:text-white transition-colors no-underline"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-6 pt-6 text-center">
          <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} {personalInfo.name}. {footerLinks.rights[language]}</p>
        </div>
      </div>
    </footer>
  );
}