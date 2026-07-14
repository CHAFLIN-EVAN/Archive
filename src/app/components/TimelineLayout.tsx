import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Archive } from '../types';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface Props {
  archives: Archive[];
}

const CATEGORY_COLORS: Record<string, { bar: string; border: string; text: string; rgb: string }> = {
  'chinese-history': { bar: 'rgba(200,168,64,0.18)',  border: '#c8a840', text: '#d4b84a', rgb: '200,168,64' },
  'world-history':   { bar: 'rgba(58,143,200,0.18)',  border: '#3a8fc8', text: '#60b4ff', rgb: '58,143,200' },
  'period':          { bar: 'rgba(64,176,200,0.18)',  border: '#40b0c8', text: '#40d0e8', rgb: '64,176,200' },
  'biography':       { bar: 'rgba(144,112,208,0.18)', border: '#9070d0', text: '#b090f0', rgb: '144,112,208' },
  'event':           { bar: 'rgba(192,112,48,0.18)',  border: '#c07030', text: '#e09040', rgb: '192,112,48' },
};

const CAT_LABELS: Record<string, string> = {
  'chinese-history': '中国史', 'world-history': '世界史',
  'period': '时代', 'biography': '人物', 'event': '事件',
};

// Discrete zoom multipliers (×base)
const ZOOM_STEPS = [1, 2, 4, 8, 16, 32, 64, 128, 256];

const BAR_H   = 40;
const TRACK_G = 10;
const RULER_H = 42;
const PAD_X   = 20;

function parseYear(s: string | undefined): number | null {
  if (!s) return null;
  const bc = s.match(/前\s*(\d+)/);
  if (bc) return -parseInt(bc[1]);
  const ad = s.match(/(\d+)/);
  if (ad) return parseInt(ad[1]);
  return null;
}

function formatYear(y: number): string {
  return y < 0 ? `前${Math.abs(y)}` : String(y);
}

function getTickInterval(pxPerYear: number): number {
  // aim for a tick every ~80–160px
  const yearsPerTick = 100 / pxPerYear;
  const targets = [1, 2, 5, 10, 25, 50, 100, 200, 500, 1000, 2000];
  for (const t of targets) if (t >= yearsPerTick * 0.5) return t;
  return 2000;
}

interface TrackItem { archive: Archive; startYear: number; endYear: number; }

function buildTracks(items: TrackItem[]): TrackItem[][] {
  const sorted = [...items].sort((a, b) => a.startYear - b.startYear);
  const tracks: TrackItem[][] = [];
  const ends: number[] = [];
  for (const item of sorted) {
    let placed = false;
    for (let t = 0; t < tracks.length; t++) {
      if (ends[t] <= item.startYear) {
        tracks[t].push(item); ends[t] = item.endYear; placed = true; break;
      }
    }
    if (!placed) { tracks.push([item]); ends.push(item.endYear); }
  }
  return tracks;
}

interface TooltipState {
  archive: Archive;
  clientX: number;
  clientY: number;
}

export function TimelineLayout({ archives }: Props) {
  const navigate = useNavigate();
  const scrollRef  = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(1200);
  const [zoomIdx, setZoomIdx] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(e => setContainerW(e[0].contentRect.width));
    obs.observe(el);
    setContainerW(el.clientWidth);
    return () => obs.disconnect();
  }, []);

  // Mouse wheel zoom on the scroll area
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // plain wheel = zoom; shift+wheel = horizontal scroll (browser default)
      if (e.shiftKey) return;
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoomIdx(z => Math.min(z + 1, ZOOM_STEPS.length - 1));
      } else {
        setZoomIdx(z => Math.max(z - 1, 0));
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const zoomIn  = useCallback(() => setZoomIdx(z => Math.min(z + 1, ZOOM_STEPS.length - 1)), []);
  const zoomOut = useCallback(() => setZoomIdx(z => Math.max(z - 1, 0)), []);
  const zoomFit = useCallback(() => setZoomIdx(0), []);

  if (archives.length === 0) return null;

  // ── parse years ──────────────────────────────────────────────
  const items: TrackItem[] = archives.map(a => {
    const s = parseYear(a.date) ?? 0;
    const rawE = parseYear(a.dateEnd);
    // give point-in-time events a minimum visible span
    const minSpan = Math.abs(s) > 500 ? 40 : 5;
    const e = rawE != null && rawE > s ? rawE : s + minSpan;
    return { archive: a, startYear: s, endYear: e };
  });

  const allY = items.flatMap(i => [i.startYear, i.endYear]);
  const minYear = Math.min(...allY);
  const maxYear = Math.max(...allY);
  const span    = maxYear - minYear || 1;

  const zoom      = ZOOM_STEPS[zoomIdx];
  const usableW   = containerW - PAD_X * 2;
  const contentW  = Math.max(usableW * zoom, usableW);
  const pxPerYear = contentW / span;

  const tracks  = buildTracks(items);
  const tracksH = tracks.length * (BAR_H + TRACK_G) + TRACK_G;
  const innerH  = RULER_H + tracksH;

  function toX(year: number): number {
    return (year - minYear) * pxPerYear;
  }

  // ── ruler ticks ───────────────────────────────────────────────
  const tickInterval = getTickInterval(pxPerYear);
  const firstTick = Math.ceil(minYear / tickInterval) * tickInterval;
  const ticks: number[] = [];
  for (let y = firstTick; y <= maxYear + tickInterval; y += tickInterval) ticks.push(y);

  // ── zoom label ────────────────────────────────────────────────
  const zoomLabel = zoom === 1 ? '全览' : `×${zoom}`;

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      {/* ── Zoom toolbar ─────────────────────────────────────── */}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 16px',
          borderBottom: '1px solid rgba(58,143,200,0.15)',
          background: 'rgba(0,10,20,0.4)',
          flexShrink: 0,
        }}
      >
        {/* Zoom controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1px solid rgba(58,143,200,0.25)' }}>
          <button
            onClick={zoomOut}
            disabled={zoomIdx === 0}
            style={{
              padding: '5px 10px', display: 'flex', alignItems: 'center',
              color: zoomIdx === 0 ? 'rgba(58,143,200,0.25)' : 'var(--bp-text)',
              background: 'transparent', cursor: zoomIdx === 0 ? 'default' : 'pointer',
              borderRight: '1px solid rgba(58,143,200,0.2)',
            }}
          >
            <ZoomOut size={13} />
          </button>

          {/* Zoom step indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2, padding: '0 8px' }}>
            {ZOOM_STEPS.map((s, i) => (
              <button
                key={s}
                onClick={() => setZoomIdx(i)}
                style={{
                  width: i === zoomIdx ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === zoomIdx
                    ? 'var(--bp-highlight)'
                    : i < zoomIdx
                      ? 'rgba(96,180,255,0.4)'
                      : 'rgba(58,143,200,0.18)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'width 0.15s, background 0.15s',
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={zoomIn}
            disabled={zoomIdx === ZOOM_STEPS.length - 1}
            style={{
              padding: '5px 10px', display: 'flex', alignItems: 'center',
              color: zoomIdx === ZOOM_STEPS.length - 1 ? 'rgba(58,143,200,0.25)' : 'var(--bp-text)',
              background: 'transparent',
              cursor: zoomIdx === ZOOM_STEPS.length - 1 ? 'default' : 'pointer',
              borderLeft: '1px solid rgba(58,143,200,0.2)',
            }}
          >
            <ZoomIn size={13} />
          </button>
        </div>

        {/* Zoom level label */}
        <div
          style={{
            fontFamily: 'Space Mono, monospace', fontSize: 11,
            color: 'var(--bp-highlight)', letterSpacing: '0.15em',
            minWidth: 36, textAlign: 'center',
          }}
        >
          {zoomLabel}
        </div>

        {/* Fit button */}
        {zoomIdx > 0 && (
          <button
            onClick={zoomFit}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '4px 10px',
              border: '1px solid rgba(58,143,200,0.3)',
              background: 'transparent',
              color: 'var(--bp-text-dim)',
              fontFamily: 'Space Mono, monospace',
              fontSize: 10, letterSpacing: '0.15em',
              cursor: 'pointer',
            }}
          >
            <Maximize2 size={11} /> FIT
          </button>
        )}

        {/* Separator */}
        <div style={{ width: 1, height: 18, background: 'rgba(58,143,200,0.2)', margin: '0 4px' }} />

        {/* Pixel density info */}
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(58,143,200,0.5)', letterSpacing: '0.08em' }}>
          {pxPerYear < 1
            ? `${(1 / pxPerYear).toFixed(0)} 年/px`
            : `${pxPerYear.toFixed(1)} px/年`}
        </span>

        <div style={{ flex: 1 }} />

        {/* Span info */}
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(58,143,200,0.45)', letterSpacing: '0.08em' }}>
          {formatYear(minYear)} — {formatYear(maxYear)} · {span.toLocaleString()} 年
        </span>
      </div>

      {/* ── Scrollable track area ─────────────────────────────── */}
      <div
        ref={scrollRef}
        style={{
          overflowX: 'auto',
          overflowY: 'auto',
          flex: 1,
          minHeight: 0,
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(3,9,20,0.6) 0%, rgba(2,6,14,0.4) 100%)',
        }}
      >
        <div
          style={{
            width: contentW + PAD_X * 2,
            minWidth: '100%',
            height: innerH,
            position: 'relative',
          }}
        >
          {/* Vertical grid lines */}
          <svg
            style={{
              position: 'absolute', top: RULER_H, left: PAD_X,
              width: contentW, height: tracksH,
              pointerEvents: 'none',
            }}
          >
            {ticks.map(y => {
              const x = toX(y);
              if (x < -1 || x > contentW + 1) return null;
              return (
                <line
                  key={y}
                  x1={x} y1={0} x2={x} y2={tracksH}
                  stroke="rgba(58,143,200,0.09)" strokeWidth={1}
                />
              );
            })}
            {/* Current era line */}
            {maxYear >= 2000 && (() => {
              const cx = toX(2025);
              return cx >= 0 && cx <= contentW ? (
                <line
                  x1={cx} y1={0} x2={cx} y2={tracksH}
                  stroke="rgba(96,180,255,0.22)" strokeWidth={1}
                  strokeDasharray="5 3"
                />
              ) : null;
            })()}
          </svg>

          {/* Sticky ruler */}
          <div
            style={{
              position: 'sticky', top: 0,
              height: RULER_H,
              zIndex: 20,
              background: 'rgba(4,11,22,0.95)',
              borderBottom: '2px solid rgba(58,143,200,0.2)',
              backdropFilter: 'blur(4px)',
            }}
          >
            {/* ruler track */}
            <div style={{ position: 'relative', width: contentW + PAD_X * 2, height: RULER_H }}>
              {ticks.map(y => {
                const x = toX(y) + PAD_X;
                return (
                  <div
                    key={y}
                    style={{
                      position: 'absolute', left: x, top: 0, height: RULER_H,
                      display: 'flex', flexDirection: 'column',
                      transform: 'translateX(-50%)',
                      alignItems: 'center',
                    }}
                  >
                    {/* Major tick */}
                    <div style={{
                      width: 1, height: 10, marginTop: 4,
                      background: 'rgba(96,160,210,0.5)',
                    }} />
                    <span style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: 10,
                      color: 'rgba(120,180,220,0.75)',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      marginTop: 3,
                    }}>
                      {formatYear(y)}
                    </span>
                    {/* Minor ticks between majors */}
                    {pxPerYear * tickInterval > 60 && (
                      <div style={{ display: 'flex', position: 'absolute', top: 8, left: '50%' }}>
                        {[1, 2, 3, 4].map(n => {
                          const mx = n * (tickInterval / 5) * pxPerYear;
                          return (
                            <div
                              key={n}
                              style={{
                                position: 'absolute',
                                left: mx,
                                width: 1, height: 5,
                                background: 'rgba(58,143,200,0.25)',
                              }}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Track bars */}
          {tracks.map((track, ti) =>
            track.map(item => {
              const { archive, startYear, endYear } = item;
              const col    = CATEGORY_COLORS[archive.category] ?? CATEGORY_COLORS['world-history'];
              const barX   = toX(startYear) + PAD_X;
              const barW   = Math.max((endYear - startYear) * pxPerYear, 3);
              const barY   = RULER_H + TRACK_G + ti * (BAR_H + TRACK_G);
              const isHov  = hovered === archive.id;

              return (
                <div
                  key={archive.id}
                  style={{
                    position: 'absolute',
                    left: barX, top: barY,
                    width: barW, height: BAR_H,
                    background: isHov ? `rgba(${col.rgb},0.38)` : col.bar,
                    border: `1px solid ${isHov ? col.border : col.border + '88'}`,
                    borderLeft: `3px solid ${col.border}`,
                    boxShadow: isHov
                      ? `0 2px 12px rgba(${col.rgb},0.25), inset 0 1px 0 rgba(255,255,255,0.07)`
                      : 'inset 0 1px 0 rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center',
                    overflow: 'hidden',
                    transition: 'background 0.12s, border-color 0.12s, box-shadow 0.12s',
                    zIndex: isHov ? 15 : 1,
                  }}
                  onMouseEnter={e => {
                    setHovered(archive.id);
                    setTooltip({ archive, clientX: e.clientX, clientY: e.clientY });
                  }}
                  onMouseMove={e => {
                    setTooltip(t => t ? { ...t, clientX: e.clientX, clientY: e.clientY } : t);
                  }}
                  onMouseLeave={() => { setHovered(null); setTooltip(null); }}
                  onClick={() => navigate(`/archive/${archive.id}`)}
                >
                  <div
                    style={{
                      padding: '0 7px',
                      display: 'flex', flexDirection: 'column',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      minWidth: 0,
                    }}
                  >
                    {barW > 36 && (
                      <span style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: Math.min(13, Math.max(9, barW / 12)),
                        color: col.text,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        lineHeight: 1.25,
                        maxWidth: barW - 14,
                      }}>
                        {archive.title}
                      </span>
                    )}
                    {barW > 120 && (
                      <span style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: 9,
                        color: `${col.text}88`,
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.04em',
                        lineHeight: 1.25,
                      }}>
                        {formatYear(startYear)}
                        {endYear - startYear > 1 ? ` — ${formatYear(endYear)}` : ''}
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ── Legend ───────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          gap: '5px 16px',
          padding: '7px 16px',
          borderTop: '1px solid rgba(58,143,200,0.12)',
          background: 'rgba(0,8,18,0.5)',
          flexShrink: 0,
        }}
      >
        {Array.from(new Set(archives.map(a => a.category))).map(cat => {
          const col = CATEGORY_COLORS[cat] ?? CATEGORY_COLORS['world-history'];
          return (
            <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{
                width: 20, height: 10,
                background: col.bar,
                border: `1px solid ${col.border}88`,
                borderLeft: `3px solid ${col.border}`,
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'Space Mono, monospace', fontSize: 10,
                color: col.text, letterSpacing: '0.1em',
              }}>
                {CAT_LABELS[cat] ?? cat}
              </span>
            </div>
          );
        })}
        <span style={{
          fontFamily: 'Space Mono, monospace', fontSize: 10,
          color: 'rgba(58,143,200,0.3)', letterSpacing: '0.06em',
        }}>
          滚轮缩放 · Shift+滚轮横移
        </span>
        <span style={{
          marginLeft: 'auto',
          fontFamily: 'Space Mono, monospace', fontSize: 10,
          color: 'rgba(58,143,200,0.35)', letterSpacing: '0.06em',
        }}>
          {archives.length} 条档案
        </span>
      </div>

      {/* ── Fixed tooltip (renders outside scroll container) ── */}
      {tooltip && (
        <div
          style={{
            position: 'fixed',
            left: tooltip.clientX + 16,
            top: tooltip.clientY - 12,
            transform: 'translateY(-100%)',
            background: 'rgba(5,14,28,0.97)',
            border: '1px solid rgba(100,180,255,0.28)',
            borderTop: '2px solid rgba(96,180,255,0.55)',
            padding: '10px 14px',
            zIndex: 9999,
            pointerEvents: 'none',
            minWidth: 180, maxWidth: 280,
            boxShadow: '0 12px 32px rgba(0,0,0,0.7)',
          }}
        >
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: 'var(--bp-white)', marginBottom: 3 }}>
            {tooltip.archive.title}
          </div>
          {tooltip.archive.titleEn && (
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--bp-text-dim)', letterSpacing: '0.12em', marginBottom: 5 }}>
              {tooltip.archive.titleEn}
            </div>
          )}
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--bp-accent)', letterSpacing: '0.1em', marginBottom: 6 }}>
            {tooltip.archive.date}{tooltip.archive.dateEnd ? ` — ${tooltip.archive.dateEnd}` : ''}
          </div>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: 11,
            color: 'var(--bp-text)', lineHeight: 1.55,
            display: '-webkit-box', WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {tooltip.archive.description}
          </div>
          <div style={{ marginTop: 7, fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(96,180,255,0.45)', letterSpacing: '0.15em' }}>
            CLICK TO OPEN →
          </div>
        </div>
      )}
    </div>
  );
}
