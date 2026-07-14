import { TimelineEntry } from '../types';
import { motion } from 'motion/react';

interface Props {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: Props) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-[90px] top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, var(--bp-accent), transparent)' }}
      />

      <div className="space-y-4">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            className="flex gap-4"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
          >
            {/* Year label */}
            <div
              className="w-[82px] shrink-0 text-right font-mono text-[13px] pt-0.5"
              style={{ color: 'var(--bp-accent)' }}
            >
              {entry.year}
            </div>

            {/* Node */}
            <div className="relative flex items-start pt-1.5 shrink-0">
              <div
                className="w-2.5 h-2.5 relative z-10"
                style={{
                  background: 'var(--bp-bg)',
                  border: '1.5px solid var(--bp-highlight)',
                  transform: 'rotate(45deg)',
                }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 pb-3">
              <div
                className="font-mono text-[15px] leading-snug mb-0.5"
                style={{ color: 'var(--bp-text-bright)' }}
              >
                {entry.event}
              </div>
              {entry.significance && (
                <div
                  className="font-mono text-[16px] tracking-wide"
                  style={{ color: 'var(--bp-text-dim)' }}
                >
                  ↳ {entry.significance}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
