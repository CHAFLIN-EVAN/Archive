import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { BlueprintCursor } from './components/BlueprintCursor';
import { CodeRain } from './components/CodeRain';
import { motion, AnimatePresence } from 'motion/react';
import { initArchives } from './store/archiveStore';

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    initArchives();
  }, []);

  return (
    <>
      {/* 最底层：代码雨背景装饰（独立于根 div，避免被背景色盖住） */}
      <CodeRain />

      <div
        className="relative min-h-screen"
        style={{ color: 'var(--bp-text)' }}
      >
        <BlueprintCursor />
        <Navigation />

        {/* Animated page transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        {/* Persistent corner decorations */}
        <div
          className="bp-corner-deco fixed bottom-3 left-4 pointer-events-none"
          style={{ opacity: 0.15 }}
        >
          <div className="font-mono text-[15px] tracking-widest" style={{ color: 'var(--bp-accent)' }}>
            HAS-BLUEPRINT // {new Date().getFullYear()}
          </div>
        </div>
        <div
          className="bp-corner-deco fixed bottom-3 right-4 pointer-events-none"
          style={{ opacity: 0.15 }}
        >
          <div className="font-mono text-[15px] tracking-widest" style={{ color: 'var(--bp-accent)' }}>
            PERSONAL USE ONLY // CLASSIFIED
          </div>
        </div>
      </div>
    </>
  );
}
