import Link from 'next/link';
import { personalInfo } from '../../data/personal-info';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
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
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 mb-4">{personalInfo.title}</p>
            <p className="text-gray-300">{personalInfo.bio}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/skills" className="text-gray-300 hover:text-white">Skills</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {personalInfo.socialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-gray-300">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}