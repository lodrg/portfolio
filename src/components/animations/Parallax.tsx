// src/components/animations/Parallax.tsx
'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // 1 = normal, 2 = 2x slower, 0.5 = 2x faster
  className?: string;
  direction?: 'up' | 'down';
}

export default function Parallax({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const factor = direction === 'up' ? -100 : 100;
  const y = useTransform(scrollYProgress, [0, 1], [0, factor * speed]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}