import { Archive } from '../types';
import { TagBadge } from './TagBadge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Calendar, Cpu } from 'lucide-react';

interface Props {
  archive: Archive;
  index?: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  'chinese-history': '#c04030',
  'world-history': '#3a8fc8',
  'period': '#c8a840',
  'biography': '#309850',
  'event': '#c07830',
};

const CATEGORY_LABELS: Record<string, string> = {
  'chinese-history': 'CN',
  'world-history': 'WD',
  'period': 'PR',
  'biography': 'BIO',
  'event': 'EVT',
};

export function ArchiveCard({ archive, index = 0 }: Props) {
  const catColor = CATEGORY_COLORS[archive.category] || '#3a8fc8';
  const catLabel = CATEGORY_LABELS[archive.category] || '?';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay: index * 0.06, ease: [0.2, 0.8, 0.4, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.18, ease: 'easeOut' } }}
      whileTap={{ y: -4, scale: 0.99 }}
      style={{ position: 'relative' }}
    >
      {/* Card depth layers (stacked papers effect) */}
      <div
        style={{
          position: 'absolute',
          top: 4, left: 3, right: -3, bottom: -3,
          background: '#040d1a',
          border: '1px solid rgba(58,143,200,0.1)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 7, left: 5, right: -5, bottom: -5,
          background: '#030a14',
          border: '1px solid rgba(58,143,200,0.06)',
          zIndex: -1,
        }}
      />

      <Link to={`/archive/${archive.id}`} className="block" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="group overflow-hidden"
          data-bp-snappable
          data-bp-label={archive.title}
          style={{
            background: 'linear-gradient(165deg, #0c2640 0%, #081b2e 55%, #050f1e 100%)',
            border: '1px solid rgba(100,180,255,0.18)',
            borderTop: '2px solid rgba(120,190,255,0.22)',
            boxShadow: [
              '0 8px 28px rgba(0,0,0,0.6)',
              'inset 0 1px 0 rgba(120,200,255,0.08)',
              'inset 1px 0 0 rgba(100,180,255,0.04)',
              'inset -1px 0 0 rgba(0,0,0,0.3)',
              'inset 0 -2px 0 rgba(0,0,0,0.3)',
            ].join(', '),
            position: 'relative',
            transition: 'box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = [
              '0 12px 40px rgba(0,0,0,0.7)',
              '0 0 0 1px rgba(100,180,255,0.25)',
              'inset 0 1px 0 rgba(140,210,255,0.12)',
              'inset 1px 0 0 rgba(100,180,255,0.06)',
              'inset -1px 0 0 rgba(0,0,0,0.3)',
              'inset 0 -2px 0 rgba(0,0,0,0.3)',
            ].join(', ');
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = [
              '0 8px 28px rgba(0,0,0,0.6)',
              'inset 0 1px 0 rgba(120,200,255,0.08)',
              'inset 1px 0 0 rgba(100,180,255,0.04)',
              'inset -1px 0 0 rgba(0,0,0,0.3)',
              'inset 0 -2px 0 rgba(0,0,0,0.3)',
            ].join(', ');
          }}
        >
          {/* Category color stripe — left edge tab */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 4,
              background: `linear-gradient(180deg, ${catColor} 0%, ${catColor}88 100%)`,
              boxShadow: `2px 0 8px ${catColor}40`,
            }}
          />

          {/* Ruled paper lines behind content */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 22px, rgba(58,143,200,0.06) 22px, rgba(58,143,200,0.06) 23px)',
              backgroundPosition: '0 18px',
              pointerEvents: 'none',
            }}
          />

          {/* Right + bottom darkening for physical depth */}
          <div
            style={{
              position: 'absolute',
              right: 0, top: 0, bottom: 0, width: 3,
              background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.22))',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0, right: 0, bottom: 0, height: 3,
              background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.28))',
              pointerEvents: 'none',
            }}
          />

          {/* Image */}
          {archive.image && (
            <div
              style={{
                height: 130,
                overflow: 'hidden',
                position: 'relative',
                borderBottom: '1px solid rgba(58,143,200,0.15)',
              }}
            >
              <img
                src={archive.image}
                alt={archive.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'sepia(0.5) saturate(0.55) brightness(0.6) hue-rotate(180deg)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, #081b2e 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 1px, transparent 1px, transparent 3px)',
                  pointerEvents: 'none',
                }}
              />
              {/* Category stamp */}
              <div
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  padding: '3px 8px',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: catColor,
                  border: `1px solid ${catColor}60`,
                  background: 'rgba(4,11,20,0.8)',
                  boxShadow: `0 0 8px ${catColor}30`,
                }}
              >
                {catLabel}
              </div>
            </div>
          )}

          <div style={{ padding: '12px 12px 12px 16px' }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 8,
                marginBottom: 6,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  className="group-hover:text-[var(--bp-highlight)] transition-colors"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: 'var(--bp-white)',
                    fontSize: '1rem',
                    marginBottom: 2,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {archive.title}
                </h3>
                {archive.titleEn && (
                  <div
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--bp-text-dim)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {archive.titleEn}
                  </div>
                )}
              </div>

              {/* Right side badges */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 4,
                  flexShrink: 0,
                }}
              >
                {!archive.image && (
                  <div
                    style={{
                      padding: '2px 7px',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      color: catColor,
                      border: `1px solid ${catColor}50`,
                      background: `${catColor}12`,
                    }}
                  >
                    {catLabel}
                  </div>
                )}
                {archive.isAIGenerated && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      padding: '2px 6px',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '10px',
                      color: 'var(--bp-stamp-green)',
                      border: '1px solid rgba(48,152,80,0.35)',
                      background: 'rgba(48,152,80,0.08)',
                    }}
                  >
                    <Cpu size={10} /> AI
                  </div>
                )}
              </div>
            </div>

            {/* Date */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                marginBottom: 7,
              }}
            >
              <Calendar size={11} style={{ color: 'var(--bp-text-dim)', flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  color: 'var(--bp-text-dim)',
                  letterSpacing: '0.08em',
                }}
              >
                {archive.date}{archive.dateEnd ? ` — ${archive.dateEnd}` : ''}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.82rem',
                lineHeight: '1.6',
                color: 'var(--bp-text)',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: 10,
              }}
            >
              {archive.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {archive.tags.slice(0, 4).map(tag => (
                <TagBadge key={tag} tag={tag} size="sm" />
              ))}
              {archive.tags.length > 4 && (
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '10px',
                    color: 'var(--bp-text-dim)',
                  }}
                >
                  +{archive.tags.length - 4}
                </span>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                marginTop: 10,
                paddingTop: 8,
                borderTop: '1px solid rgba(58,143,200,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  color: 'var(--bp-text-dim)',
                  letterSpacing: '0.12em',
                }}
              >
                #{archive.id.toUpperCase().slice(-6)}
              </span>
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  color: 'var(--bp-accent)',
                  letterSpacing: '0.18em',
                }}
              >
                VIEW ›
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
