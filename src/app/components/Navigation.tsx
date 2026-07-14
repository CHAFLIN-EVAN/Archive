import { Link, useLocation } from 'react-router';
import { Search, BookOpen, PlusSquare, Settings, Archive, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const NAV_ITEMS = [
  { to: '/', icon: Archive, label: '档案馆', labelEn: 'ARCHIVE' },
  { to: '/search', icon: Search, label: '检索', labelEn: 'SEARCH' },
  { to: '/report', icon: BookOpen, label: 'AI报告', labelEn: 'AI REPORT' },
  { to: '/manage', icon: PlusSquare, label: '管理', labelEn: 'MANAGE' },
  { to: '/settings', icon: Settings, label: '设置', labelEn: 'SETTINGS' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-[74px]"
      data-bp-snappable
      data-bp-label="NAV"
      style={{
        background: 'linear-gradient(180deg, #071828 0%, #050f1e 100%)',
        borderBottom: '2px solid rgba(58,143,200,0.2)',
        boxShadow: [
          '0 4px 20px rgba(0,0,0,0.6)',
          '0 2px 0 rgba(0,0,0,0.4)',
          'inset 0 1px 0 rgba(140,200,255,0.07)',
          'inset 0 -1px 0 rgba(0,0,0,0.3)',
        ].join(', '),
      }}
    >
      {/* Physical top edge highlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(140,210,255,0.2), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Corner rivets */}
      {[{ left: 10 }, { right: 10 }].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            ...pos,
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #1a3a55, #06101e)',
            border: '1px solid rgba(58,143,200,0.25)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6)',
          }}
        />
      ))}

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group" style={{ marginLeft: 16 }}>
        <div
          style={{
            width: 38,
            height: 38,
            background: 'linear-gradient(145deg, #0c2840, #061826)',
            border: '1px solid rgba(100,180,255,0.25)',
            borderTop: '1px solid rgba(140,210,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 1px 0 rgba(140,200,255,0.06), 2px 3px 8px rgba(0,0,0,0.4)',
          }}
        >
          <svg viewBox="0 0 32 32" fill="none" style={{ width: 24, height: 24 }}>
            <rect x="2" y="2" width="28" height="28" stroke="var(--bp-accent)" strokeWidth="0.8" />
            <rect x="5" y="5" width="22" height="22" stroke="var(--bp-accent)" strokeWidth="0.4" strokeDasharray="2 2" />
            <line x1="16" y1="2" x2="16" y2="30" stroke="var(--bp-accent)" strokeWidth="0.4" />
            <line x1="2" y1="16" x2="30" y2="16" stroke="var(--bp-accent)" strokeWidth="0.4" />
            <circle cx="16" cy="16" r="4" stroke="var(--bp-highlight)" strokeWidth="1" />
            <circle cx="16" cy="16" r="1.5" fill="var(--bp-highlight)" />
          </svg>
        </div>
        <div>
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              color: 'var(--bp-text-dim)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Historical
          </div>
          <div
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              color: 'var(--bp-text-bright)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Archive System
          </div>
        </div>
      </Link>

      {/* Nav items as physical label tabs */}
      <div style={{ display: 'flex', alignItems: 'stretch', height: '100%', gap: 0 }}>
        {NAV_ITEMS.map(item => {
          const active =
            item.to === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              data-bp-snappable
              data-bp-label={item.labelEn}
              style={{ display: 'flex', alignItems: 'stretch' }}
            >
              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '0 16px',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--bp-highlight)' : 'var(--bp-text)',
                  background: active
                    ? 'linear-gradient(180deg, rgba(58,143,200,0.12) 0%, rgba(58,143,200,0.06) 100%)'
                    : 'transparent',
                  borderLeft: active ? '1px solid rgba(58,143,200,0.25)' : '1px solid transparent',
                  borderRight: active ? '1px solid rgba(58,143,200,0.25)' : '1px solid transparent',
                  borderBottom: active ? '2px solid var(--bp-accent)' : '2px solid transparent',
                  borderTop: active ? '2px solid transparent' : '2px solid transparent',
                  position: 'relative',
                  transition: 'all 0.15s ease',
                  boxShadow: active ? 'inset 0 -1px 8px rgba(58,143,200,0.08)' : 'none',
                }}
                whileHover={{
                  backgroundColor: active
                    ? 'rgba(58,143,200,0.12)'
                    : 'rgba(58,143,200,0.05)',
                  color: active ? 'var(--bp-highlight)' : 'var(--bp-text-bright)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{item.labelEn}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* System status */}
      <div
        className="hidden lg:flex items-center gap-8"
        style={{ marginRight: 16 }}
      >
        {/* Physical LED indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #50e880, #208840)',
              border: '1px solid rgba(48,152,80,0.5)',
              boxShadow: '0 0 6px rgba(48,200,80,0.5), inset 0 1px 2px rgba(255,255,255,0.2)',
              animation: 'pulse 2.5s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: 'var(--bp-text-dim)',
              textTransform: 'uppercase',
            }}
          >
            SYS ONLINE
          </span>
        </div>
      </div>
    </nav>
  );
}
