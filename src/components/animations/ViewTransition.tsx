// src/components/animations/ViewTransition.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

export default function ViewTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  useEffect(() => {
    // 使用 View Transitions API (如果可用)
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // React 18 在这里会自动更新 DOM
      });
    }
  }, [pathname]);
  
  return children;
}