"use client";

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedContent } from '@/hooks/useLocalizedContent';

const sectionText = {
  title: {
    en: "Contact Me",
    zh: "联系我"
  },
  subtitle: {
    en: "Let's work together",
    zh: "让我们一起合作"
  },
  contactInfo: {
    en: "Contact Information",
    zh: "联系方式"
  },
  form: {
  name: {
    en: "Name",
    zh: "姓名"
  },
  email: {
      en: "Email",
      zh: "邮箱"
  },
  message: {
    en: "Message",
      zh: "留言"
  },
  send: {
    en: "Send Message",
    zh: "发送消息"
  },
    sending: {
      en: "Sending...",
      zh: "发送中..."
    },
    success: {
      en: "Message sent successfully!",
      zh: "消息发送成功！"
  },
    error: {
      en: "Failed to send message. Please try again.",
      zh: "发送失败，请重试。"
    }
  }
};

export default function ContactSection() {
  const { language } = useLanguage();
  const { personalInfo } = useLocalizedContent();
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
              <div className="w-12 h-12 bg-forest-100 dark:bg-forest-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-forest-700 dark:text-forest-400" />
                </div>
                <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-forest-100 dark:bg-forest-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-forest-700 dark:text-forest-400" />
                </div>
                <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {sectionText.form.name[language]}
                  </label>
                  <input
                    type="text"
                    id="name"
                  name="user_name"
                    required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {sectionText.form.email[language]}
                  </label>
                  <input
                    type="email"
                    id="email"
                  name="user_email"
                    required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {sectionText.form.message[language]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
                </div>
                
              <button
                  type="submit"
                disabled={status.loading}
                className="w-full px-6 py-3 bg-forest-700 text-white rounded-lg hover:bg-forest-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? sectionText.form.sending[language] : sectionText.form.send[language]}
              </button>

              {status.success && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  {sectionText.form.success[language]}
                </p>
              )}

              {status.error && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  {sectionText.form.error[language]}
                </p>
              )}
              </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}