import { Country } from '../types';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

interface Props {
  country: Country;
  index: number;
}

// Stagger tab positions like a real card file
const TAB_POSITIONS = [
  { left: 12, right: 'auto' as const },
  { left: 54, right: 'auto' as const },
  { left: 96, right: 'auto' as const },
];

export function CountryDrawer({ country, index }: Props) {
  const navigate = useNavigate();
  const isEmpty = country.archiveCount === 0;
  const tabPos = TAB_POSITIONS[index % 3];

  return (
    <motion.div
      className="relative select-none"
      style={{ paddingTop: 32, cursor: isEmpty ? 'default' : 'pointer', width: 210 }}
      onClick={() => !isEmpty && navigate(`/country/${country.code}`)}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.2, 0.8, 0.4, 1] }}
      whileHover={isEmpty ? {} : { y: -12, transition: { duration: 0.2, ease: 'easeOut' } }}
      whileTap={isEmpty ? {} : { y: -6, scale: 0.99 }}
      data-bp-snappable
      data-bp-label={country.name}
    >
      {/* Physical index card tab */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: tabPos.left,
          width: 94,
          height: 34,
          background: isEmpty
            ? 'linear-gradient(180deg, #04111e 0%, #030d18 100%)'
            : 'linear-gradient(180deg, #0e2d4a 0%, #091f36 100%)',
          border: `1px solid ${isEmpty ? 'rgba(58,143,200,0.12)' : 'rgba(100,180,255,0.28)'}`,
          borderBottom: 'none',
          borderRadius: '5px 5px 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 9px',
          boxShadow: isEmpty
            ? 'none'
            : 'inset 0 1px 0 rgba(140,200,255,0.12), inset 1px 0 0 rgba(100,160,220,0.06)',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        {/* Tab highlight shimmer */}
        {!isEmpty && (
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(160,220,255,0.25), transparent)',
            }}
          />
        )}
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: isEmpty ? 'rgba(42,104,136,0.3)' : 'var(--bp-highlight)',
            textTransform: 'uppercase',
          }}
        >
          {country.code.toUpperCase()}
        </span>
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            color: isEmpty ? 'rgba(42,104,136,0.22)' : 'var(--bp-text)',
            letterSpacing: '0.08em',
            background: isEmpty ? 'transparent' : 'rgba(58,143,200,0.12)',
            padding: '1px 5px',
            borderRadius: 2,
          }}
        >
          {country.archiveCount.toString().padStart(3, '0')}
        </span>
      </div>

      {/* Stacked depth layers — cards behind the main card */}
      {!isEmpty && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 32, left: 4, right: -4, bottom: -4,
              background: 'linear-gradient(165deg, #060f1c 0%, #040b16 100%)',
              border: '1px solid rgba(58,143,200,0.13)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 32, left: 7, right: -7, bottom: -7,
              background: 'linear-gradient(165deg, #050c18 0%, #030a12 100%)',
              border: '1px solid rgba(58,143,200,0.07)',
              zIndex: -1,
            }}
          />
        </>
      )}

      {/* Main card face */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: isEmpty
            ? 'linear-gradient(165deg, #06101e 0%, #040d1a 100%)'
            : 'linear-gradient(165deg, #0c2640 0%, #081b2e 55%, #050f1e 100%)',
          border: isEmpty
            ? '1px solid rgba(58,143,200,0.1)'
            : '1px solid rgba(100,180,255,0.2)',
          borderTop: isEmpty
            ? '1px solid rgba(58,143,200,0.1)'
            : '2px solid rgba(120,190,255,0.22)',
          boxShadow: isEmpty
            ? '2px 5px 14px rgba(0,0,0,0.45)'
            : [
                '0 10px 35px rgba(0,0,0,0.65)',
                '0 4px 12px rgba(0,0,0,0.4)',
                'inset 0 1px 0 rgba(120,200,255,0.09)',
                'inset 1px 0 0 rgba(100,180,255,0.05)',
                'inset -1px 0 0 rgba(0,0,0,0.35)',
                'inset 0 -2px 0 rgba(0,0,0,0.35)',
              ].join(', '),
          overflow: 'hidden',
        }}
      >
        {/* Right edge darkening (physical card thickness feel) */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.25))',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom edge darkening */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 3,
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
            pointerEvents: 'none',
          }}
        />

        <div style={{ padding: '12px 14px 12px 14px' }}>
          {/* Country name */}
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.15rem',
              color: isEmpty ? 'rgba(42,104,136,0.28)' : 'var(--bp-white)',
              letterSpacing: '0.03em',
              marginBottom: 2,
            }}
          >
            {country.name}
          </div>
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: isEmpty ? 'rgba(42,104,136,0.2)' : 'var(--bp-text)',
              marginBottom: 9,
            }}
          >
            {country.nameEn}
          </div>

          {country.description && (
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                lineHeight: '1.65',
                color: isEmpty ? 'rgba(42,104,136,0.16)' : 'var(--bp-text-dim)',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: 10,
              }}
            >
              {country.description}
            </div>
          )}

          {/* Footer */}
          <div
            style={{
              paddingTop: 8,
              borderTop: `1px solid ${isEmpty ? 'rgba(58,143,200,0.06)' : 'rgba(58,143,200,0.12)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: isEmpty ? 'center' : 'space-between',
            }}
          >
            {isEmpty ? (
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '9px',
                  letterSpacing: '0.35em',
                  color: 'rgba(42,104,136,0.18)',
                  textTransform: 'uppercase',
                }}
              >
                — RESERVED —
              </span>
            ) : (
              <>
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '10px',
                    color: 'var(--bp-text-dim)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {country.archiveCount} 档案
                </span>
                <motion.span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '10px',
                    color: 'var(--bp-accent)',
                    letterSpacing: '0.2em',
                  }}
                  animate={{ x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: index * 0.3 }}
                >
                  OPEN ›
                </motion.span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
