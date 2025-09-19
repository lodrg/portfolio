"use client";

import { motion } from "framer-motion";
import { BlogPost as BlogPostType } from "@/lib/markdown";
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface BlogPostProps {
  postZh?: BlogPostType;
  postEn?: BlogPostType;
}

interface MermaidRuntime {
  run?: (options: { querySelector: string }) => Promise<void> | void;
  init?: (a?: unknown, selector?: string) => void;
  initialize: (config: unknown) => void;
}

export default function BlogPost({ postZh, postEn }: BlogPostProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const post = language === 'en' ? (postEn ?? postZh) : (postZh ?? postEn);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mermaidInit = async () => {
      try {
        const mermaidModule = await import('mermaid');
        const mermaid = (mermaidModule.default ?? mermaidModule) as unknown as MermaidRuntime;
        mermaid.initialize({
          startOnLoad: false,
          theme: theme === 'dark' ? 'dark' : 'default',
          themeVariables: theme === 'dark' ? {
            background: 'transparent',
            primaryColor: '#3d9b6b',
            primaryTextColor: '#e5e7eb',
            primaryBorderColor: '#8dd0a8',
            lineColor: '#9ca3af',
            secondaryColor: '#374151',
            tertiaryColor: '#111827',
            noteBkgColor: '#1f2937',
            noteTextColor: '#e5e7eb',
          } : {
            background: 'transparent',
          },
        });

        // Turn code fences into div.mermaid blocks for automatic processing
        const codeBlocks = document.querySelectorAll('pre code.language-mermaid, code.language-mermaid');
        let idx = 0;
        for (const codeEl of Array.from(codeBlocks)) {
          const pre = (codeEl as HTMLElement).closest('pre');
          const code = (codeEl as HTMLElement).textContent ?? '';
          const container = document.createElement('div');
          container.className = 'mermaid';
          container.setAttribute('data-mermaid-id', `m-${idx++}`);
          container.textContent = code;
          if (pre) {
            pre.replaceWith(container);
          } else {
            (codeEl as HTMLElement).replaceWith(container);
          }
        }

        if (typeof mermaid.run === 'function') {
          await mermaid.run({ querySelector: '.mermaid' });
        } else if (typeof mermaid.init === 'function') {
          mermaid.init(undefined, '.mermaid');
        }
      } catch (e) {
        console.error('Mermaid init failed:', e);
      }
    };
    mermaidInit();
  }, [post?.content, theme]);

  if (!post) {
    return null;
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
            <div className="text-gray-600 dark:text-gray-400 mb-4">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div
            className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </motion.article>
  );
} 