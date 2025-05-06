// src/components/animations/PageTransition.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // 只有当路径真正改变时才触发动画
    if (pathname !== prevPath) {
      setShouldAnimate(true);
      setPrevPath(pathname);
    }
  }, [pathname, prevPath]);
  
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        initial={shouldAnimate ? "hidden" : false}
        animate="visible"
        exit="exit"
        variants={pageVariants}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}