"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocalizedData } from '@/utils/language';
import emailjs from '@emailjs/browser';

const sectionText = {
  title: {
    en: "Contact",
    zh: "联系"
  },
  subtitle: {
    en: "Get in touch with me",
    zh: "与我取得联系"
  },
  name: {
    en: "Name",
    zh: "姓名"
  },
  email: {
    en: "Your Email",
    zh: "您的邮箱"
  },
  message: {
    en: "Message",
    zh: "消息"
  },
  send: {
    en: "Send Message",
    zh: "发送消息"
  },
  contactInfo: {
    en: "Contact Information",
    zh: "联系信息"
  },
  location: {
    en: "Location",
    zh: "位置"
  }
};

export default function ContactSection() {
  const { personalInfo, language } = useLocalizedData();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    emailjs.sendForm(
      'service_8prq67g',
      'template_ul62pre',
      e.currentTarget,
      'y_t2R12Gq-NpAfxv7'
    )
      .then((result: { text: string }) => {
        console.log('Success:', result.text);
        setStatus({ loading: false, success: true, error: false });
        formRef.current?.reset();
      }, (error: { text: string }) => {
        console.error('Error:', error.text);
        setStatus({ loading: false, success: false, error: true });
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {sectionText.title[language]}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {sectionText.subtitle[language]}
          </p>
        </motion.div>
        
          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
            viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {sectionText.contactInfo[language]}
            </h3>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-lavender-100 dark:bg-lavender-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-lavender-700 dark:text-lavender-400" />
                </div>
                <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-lavender-700 dark:hover:text-lavender-400 transition-colors"
                >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-lavender-100 dark:bg-lavender-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-lavender-700 dark:text-lavender-400" />
                </div>
                <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-lavender-700 dark:hover:text-lavender-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-lavender-100 dark:bg-lavender-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-lavender-700 dark:text-lavender-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  {sectionText.location[language]}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {sectionText.name[language]}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {sectionText.email[language]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {sectionText.message[language]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  ></textarea>
                </div>
                
              <motion.button
                  type="submit"
                disabled={status.loading}
                className={`w-full px-6 py-3 bg-lavender-700 text-white rounded-lg hover:bg-lavender-800 transition-colors ${
                  status.loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                whileHover={{ scale: status.loading ? 1 : 1.02 }}
                whileTap={{ scale: status.loading ? 1 : 0.98 }}
              >
                {status.loading ? 'Sending...' : sectionText.send[language]}
              </motion.button>

              {status.success && (
                <p className="text-green-500 text-sm text-center">
                  Message sent successfully!
                </p>
              )}

              {status.error && (
                <p className="text-red-500 text-sm text-center">
                  An error occurred. Please try again later.
                </p>
              )}
              </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}