import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { CountryDrawer } from '../components/CountryDrawer';
import { getCountriesWithCounts, getArchives } from '../store/archiveStore';
import { Country } from '../types';
import { Link } from 'react-router';
import { Archive, Clock, BookOpen } from 'lucide-react';

const FUTURE_SECTIONS = [
  { id: 'period', label: '特定时期', labelEn: 'SPECIFIC PERIODS', icon: Clock },
  { id: 'biography', label: '人物传记', labelEn: 'BIOGRAPHIES', icon: BookOpen },
  { id: 'event', label: '事件档案', labelEn: 'EVENT ARCHIVES', icon: Archive },
];

function DrawerTray({
  title,
  titleEn,
  subtitle,
  count,
  children,
  delay = 0,
}: {
  title: string;
  titleEn: string;
  subtitle: string;
  count: number;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.2, 0.8, 0.4, 1] }}
    >
      {/* Drawer label plate */}
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          marginBottom: 0,
        }}
      >
        {/* Main label */}
        <div
          style={{
            background: 'linear-gradient(180deg, #0a2035 0%, #061526 100%)',
            border: '1px solid rgba(100,180,255,0.22)',
            borderBottom: 'none',
            borderRight: 'none',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow: 'inset 0 1px 0 rgba(140,210,255,0.1)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.25rem',
                color: 'var(--bp-white)',
                letterSpacing: '0.04em',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: 'var(--bp-text-dim)',
                textTransform: 'uppercase',
              }}
            >
              {titleEn} // {subtitle}
            </div>
          </div>
        </div>

        {/* Record count badge */}
        <div
          style={{
            background: 'linear-gradient(180deg, #061420 0%, #040f18 100%)',
            border: '1px solid rgba(100,180,255,0.22)',
            borderBottom: 'none',
            borderLeft: '1px solid rgba(58,143,200,0.15)',
            padding: '10px 18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 1px 0 rgba(140,210,255,0.06)',
          }}
        >
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '1.6rem',
              color: 'var(--bp-highlight)',
              lineHeight: 1,
            }}
          >
            {count.toString().padStart(3, '0')}
          </div>
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: 'var(--bp-text-dim)',
              marginTop: 3,
            }}
          >
            RECORDS
          </div>
        </div>

        {/* Filler line to right edge */}
        <div
          style={{
            flex: 1,
            borderBottom: '1px solid rgba(100,180,255,0.22)',
            position: 'relative',
          }}
        >
          {/* Ruler ticks along the top */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              paddingTop: 8,
              paddingLeft: 12,
              gap: 0,
              overflow: 'hidden',
            }}
          >
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: i % 10 === 0 ? 8 : i % 5 === 0 ? 5 : 3,
                  borderRight: '1px solid rgba(58,143,200,0.2)',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Drawer tray body */}
      <div
        style={{
          background: 'linear-gradient(180deg, #030b17 0%, #040d1a 100%)',
          border: '1px solid rgba(100,180,255,0.18)',
          borderTop: 'none',
          boxShadow: [
            'inset 0 4px 16px rgba(0,0,0,0.6)',
            'inset 0 1px 0 rgba(0,0,0,0.4)',
            '0 6px 24px rgba(0,0,0,0.4)',
          ].join(', '),
          padding: '28px 24px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Tray inner top shadow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 20,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Fine grid inside tray */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: [
              'linear-gradient(rgba(58,143,200,0.03) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(58,143,200,0.03) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>

        {/* Tray bottom label holder */}
        <div
          style={{
            marginTop: 24,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              padding: '4px 24px',
              background: 'linear-gradient(180deg, #0a1f32 0%, #061526 100%)',
              border: '1px solid rgba(58,143,200,0.2)',
              borderTop: '2px solid rgba(100,180,255,0.15)',
              boxShadow: 'inset 0 1px 0 rgba(140,210,255,0.06), 0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'var(--bp-text-dim)',
                textTransform: 'uppercase',
              }}
            >
              {titleEn} DRAWER
            </span>
          </div>
        </div>
      </div>

      {/* Cabinet drawer shadow underneath */}
      <div
        style={{
          height: 6,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
          borderLeft: '1px solid rgba(58,143,200,0.08)',
          borderRight: '1px solid rgba(58,143,200,0.08)',
        }}
      />
    </motion.div>
  );
}

export function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setCountries(getCountriesWithCounts());
    setTotalCount(getArchives().length);
  }, []);

  const chineseCountries = countries.filter(c => c.category === 'chinese-history');
  const worldCountries = countries.filter(c => c.category === 'world-history');

  return (
    <div className="min-h-screen pt-[74px]">
      {/* Hero Banner */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          borderBottom: '2px solid rgba(100,180,255,0.15)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
      >
        {/* Physical panel background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #071626 0%, #040f1e 100%)',
            boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.4)',
          }}
        />

        {/* Rivet marks in corners */}
        {[
          { top: 12, left: 12 },
          { top: 12, right: 12 },
          { bottom: 12, left: 12 },
          { bottom: 12, right: 12 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #1a4060, #06131e)',
              border: '1px solid rgba(58,143,200,0.3)',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6), 0 1px 0 rgba(100,180,255,0.1)',
              zIndex: 2,
            }}
          />
        ))}

        <div className="relative px-8 pt-10 pb-8" style={{ zIndex: 1 }}>
          {/* Top ruler */}
          <div style={{ display: 'flex', marginBottom: 24, opacity: 0.25 }}>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: 16,
                  height: i % 10 === 0 ? 10 : i % 5 === 0 ? 7 : 4,
                  borderRight: '1px solid var(--bp-accent)',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          <div className="flex items-end justify-between">
            <div>
              <motion.div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.35em',
                  color: 'var(--bp-text-dim)',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ◈ PERSONAL HISTORICAL RESEARCH SYSTEM ◈
              </motion.div>
              <motion.h1
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'var(--bp-white)',
                  fontSize: '3rem',
                  letterSpacing: '0.1em',
                  textShadow: '0 0 40px rgba(96,180,255,0.25)',
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                历 史 档 案 馆
              </motion.h1>
              <motion.div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '13px',
                  letterSpacing: '0.25em',
                  color: 'var(--bp-accent)',
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                HISTORICAL ARCHIVE SYSTEM
              </motion.div>
            </div>

            {/* Physical stats panel */}
            <motion.div
              className="hidden md:flex gap-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { label: 'TOTAL RECORDS', value: totalCount.toString().padStart(4, '0') },
                { label: 'COUNTRIES', value: countries.filter(c => c.archiveCount > 0).length.toString().padStart(3, '0') },
                { label: 'CATEGORIES', value: '005' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '12px 18px',
                    textAlign: 'right',
                    background: 'linear-gradient(180deg, #081828 0%, #050f1e 100%)',
                    border: '1px solid rgba(100,180,255,0.2)',
                    borderLeft: i === 0 ? '1px solid rgba(100,180,255,0.2)' : 'none',
                    boxShadow: [
                      'inset 0 1px 0 rgba(140,210,255,0.07)',
                      'inset -1px 0 0 rgba(0,0,0,0.2)',
                    ].join(', '),
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      color: 'var(--bp-text-dim)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '2rem',
                      color: 'var(--bp-highlight)',
                      lineHeight: 1,
                      marginTop: 4,
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom ruler */}
          <div style={{ display: 'flex', marginTop: 24, opacity: 0.15 }}>
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: i % 10 === 0 ? 7 : i % 5 === 0 ? 5 : 3,
                  borderRight: '1px solid var(--bp-accent)',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main cabinet body */}
      <div className="px-8 py-10 max-w-7xl mx-auto">

        {/* Chinese History Drawer */}
        <DrawerTray
          title="中国历史"
          titleEn="CHINESE HISTORY"
          subtitle="按朝代与国家分类"
          count={chineseCountries.reduce((sum, c) => sum + c.archiveCount, 0)}
          delay={0.3}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end' }}>
            {chineseCountries.map((country, i) => (
              <CountryDrawer key={country.id} country={country} index={i} />
            ))}
            {/* Add button */}
            <Link to="/manage" style={{ display: 'block', paddingTop: 32 }}>
              <motion.div
                style={{
                  width: 210,
                  height: 120,
                  border: '1px dashed rgba(58,143,200,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: 'rgba(8,24,40,0.4)',
                }}
                whileHover={{
                  borderColor: 'rgba(58,143,200,0.45)',
                  backgroundColor: 'rgba(58,143,200,0.04)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '0.3em',
                      color: 'var(--bp-text-dim)',
                    }}
                  >
                    + NEW RECORD
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </DrawerTray>

        {/* World History Drawer */}
        <DrawerTray
          title="世界历史"
          titleEn="WORLD HISTORY"
          subtitle="按国家与地区分类"
          count={worldCountries.reduce((sum, c) => sum + c.archiveCount, 0)}
          delay={0.45}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end' }}>
            {worldCountries.map((country, i) => (
              <CountryDrawer key={country.id} country={country} index={i} />
            ))}
            <Link to="/manage" style={{ display: 'block', paddingTop: 32 }}>
              <motion.div
                style={{
                  width: 210,
                  height: 120,
                  border: '1px dashed rgba(58,143,200,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: 'rgba(8,24,40,0.4)',
                }}
                whileHover={{
                  borderColor: 'rgba(58,143,200,0.45)',
                  backgroundColor: 'rgba(58,143,200,0.04)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '0.3em',
                      color: 'var(--bp-text-dim)',
                    }}
                  >
                    + NEW RECORD
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </DrawerTray>

        {/* Pending categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Section label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 14,
              paddingBottom: 10,
              borderBottom: '1px solid rgba(58,143,200,0.1)',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                border: '1px solid rgba(58,143,200,0.3)',
                transform: 'rotate(45deg)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.1rem',
                color: 'rgba(106,170,200,0.5)',
                letterSpacing: '0.04em',
              }}
            >
              待收录
            </span>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: 'var(--bp-text-dim)',
                textTransform: 'uppercase',
                opacity: 0.5,
              }}
            >
              / PENDING CATEGORIES
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {FUTURE_SECTIONS.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  style={{
                    width: 210,
                    height: 120,
                    border: '1px dashed rgba(58,143,200,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    opacity: 0.3,
                    background: 'rgba(4,10,18,0.3)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <Icon size={20} style={{ color: 'var(--bp-text-dim)' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.9rem',
                        color: 'var(--bp-text-dim)',
                      }}
                    >
                      {section.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '9px',
                        letterSpacing: '0.25em',
                        color: 'var(--bp-text-dim)',
                        textTransform: 'uppercase',
                        marginTop: 3,
                      }}
                    >
                      COMING SOON
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 16,
            borderTop: '1px solid rgba(58,143,200,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: 0.35,
          }}
        >
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: 'var(--bp-text-dim)',
              textTransform: 'uppercase',
            }}
          >
            HISTORICAL ARCHIVE SYSTEM v1.0 // PERSONAL USE ONLY
          </span>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--bp-text-dim)',
            }}
          >
            REF: HAS-{new Date().getFullYear()}-BLUEPRINT
          </span>
        </div>
      </div>
    </div>
  );
}
