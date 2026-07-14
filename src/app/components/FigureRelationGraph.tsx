import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KeyFigure, FigureRelationType } from '../types';

interface Props {
  figures: KeyFigure[];
}

const RELATION_META: Record<FigureRelationType, { color: string; dash: string; label: string }> = {
  ally:        { color: '#40c870', dash: 'none',  label: '盟友' },
  colleague:   { color: '#40b0c8', dash: 'none',  label: '同僚' },
  family:      { color: '#c8a840', dash: 'none',  label: '家族' },
  superior:    { color: '#7090e0', dash: '6 3',   label: '上级' },
  subordinate: { color: '#7090e0', dash: '6 3',   label: '下属' },
  rival:       { color: '#c07030', dash: '4 4',   label: '竞争' },
  enemy:       { color: '#c04030', dash: '2 3',   label: '对立' },
};

const FACTION_COLORS: Record<string, string> = {
  '秦国':          '#c8a840',
  '汉朝':          '#c8a840',
  '主战派':        '#40c870',
  '主和派':        '#c07030',
  '清廷':          '#7090e0',
  '英国侵略方':    '#c04030',
  '革命派':        '#40c870',
  '旧势力':        '#c07030',
  '旧帝制':        '#c04030',
  '旧制度':        '#c04030',
  '革命派（雅各宾）': '#40b0c8',
  '后革命':        '#c8a840',
  '轴心国':        '#c04030',
  '同盟国':        '#40c870',
};

const W = 700;
const H = 400;
const CX = W / 2;
const CY = H / 2;
const NODE_W = 116;
const NODE_H = 52;

function computePositions(n: number) {
  if (n === 1) return [{ x: CX, y: CY }];
  if (n === 2) return [{ x: CX - 180, y: CY }, { x: CX + 180, y: CY }];
  const r = Math.min(CX - NODE_W * 0.65, CY - NODE_H * 0.7, 155);
  return Array.from({ length: n }, (_, i) => ({
    x: CX + r * Math.cos((2 * Math.PI * i) / n - Math.PI / 2),
    y: CY + r * Math.sin((2 * Math.PI * i) / n - Math.PI / 2),
  }));
}

interface Edge {
  fromIdx: number;
  toIdx: number;
  type: FigureRelationType;
  label: string;
  curveSide: 1 | -1;
}

function buildEdges(figures: KeyFigure[]): Edge[] {
  const edges: Edge[] = [];
  const pairCounts = new Map<string, number>();

  figures.forEach((fig, fromIdx) => {
    if (!fig.relations) return;
    fig.relations.forEach(rel => {
      const toIdx = figures.findIndex(f => f.name === rel.targetName);
      if (toIdx === -1 || toIdx === fromIdx) return;
      const pairKey = `${Math.min(fromIdx, toIdx)}-${Math.max(fromIdx, toIdx)}`;
      const count = pairCounts.get(pairKey) ?? 0;
      pairCounts.set(pairKey, count + 1);
      edges.push({
        fromIdx,
        toIdx,
        type: rel.type as FigureRelationType,
        label: rel.label,
        curveSide: count === 0 ? 1 : -1,
      });
    });
  });
  return edges;
}

function getCurvePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  curveSide: 1 | -1,
  hasMultiple: boolean
): { path: string; labelX: number; labelY: number } {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const offset = hasMultiple ? 46 * curveSide : 0;
  const px = (-dy / len) * offset;
  const py = (dx / len) * offset;
  const mx = (from.x + to.x) / 2 + px;
  const my = (from.y + to.y) / 2 + py;
  const path = `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
  const labelX = 0.25 * from.x + 0.5 * mx + 0.25 * to.x;
  const labelY = 0.25 * from.y + 0.5 * my + 0.25 * to.y;
  return { path, labelX, labelY };
}

export function FigureRelationGraph({ figures }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const positions = useMemo(() => computePositions(figures.length), [figures.length]);
  const edges = useMemo(() => buildEdges(figures), [figures]);

  const pairHasMultiple = useMemo(() => {
    const m = new Map<string, number>();
    edges.forEach(e => {
      const k = `${Math.min(e.fromIdx, e.toIdx)}-${Math.max(e.fromIdx, e.toIdx)}`;
      m.set(k, (m.get(k) ?? 0) + 1);
    });
    return m;
  }, [edges]);

  const connectedNodes = useMemo(() => {
    if (hovered === null) return new Set<number>();
    const s = new Set<number>([hovered]);
    edges.forEach(e => {
      if (e.fromIdx === hovered) s.add(e.toIdx);
      if (e.toIdx === hovered) s.add(e.fromIdx);
    });
    return s;
  }, [hovered, edges]);

  const connectedEdges = useMemo(() => {
    if (hovered === null) return new Set<number>();
    const s = new Set<number>();
    edges.forEach((e, i) => {
      if (e.fromIdx === hovered || e.toIdx === hovered) s.add(i);
    });
    return s;
  }, [hovered, edges]);

  const selectedFigure = selected !== null ? figures[selected] : null;

  const hasRelations = figures.some(f => f.relations && f.relations.length > 0);

  return (
    <div>
      {/* SVG Graph */}
      <div
        style={{
          background: 'linear-gradient(180deg, #030b17 0%, #040d1a 100%)',
          border: '1px solid rgba(100,180,255,0.15)',
          borderTop: '2px solid rgba(100,180,255,0.2)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'inset 0 3px 12px rgba(0,0,0,0.5)',
        }}
      >
        {/* Fine grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(58,143,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,143,200,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }} />

        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          {/* Edges */}
          {hasRelations && edges.map((edge, i) => {
            const from = positions[edge.fromIdx];
            const to = positions[edge.toIdx];
            const pairKey = `${Math.min(edge.fromIdx, edge.toIdx)}-${Math.max(edge.fromIdx, edge.toIdx)}`;
            const multi = (pairHasMultiple.get(pairKey) ?? 1) > 1;
            const { path, labelX, labelY } = getCurvePath(from, to, edge.curveSide, multi);
            const meta = RELATION_META[edge.type];
            const isActive = hovered === null || connectedEdges.has(i);
            const opacity = isActive ? 1 : 0.08;

            return (
              <g key={i} style={{ transition: 'opacity 0.2s' }} opacity={opacity}>
                <path
                  d={path}
                  fill="none"
                  stroke={meta.color}
                  strokeWidth={1.5}
                  strokeDasharray={meta.dash === 'none' ? undefined : meta.dash}
                  opacity={0.7}
                />
                {/* Label background */}
                <rect
                  x={labelX - 18}
                  y={labelY - 9}
                  width={36}
                  height={16}
                  rx={3}
                  fill="#030b17"
                  opacity={0.85}
                />
                <text
                  x={labelX}
                  y={labelY + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={meta.color}
                  fontSize={10}
                  fontFamily="Space Mono, monospace"
                  opacity={0.9}
                >
                  {edge.label}
                </text>
              </g>
            );
          })}

          {/* Nodes */}
          {figures.map((fig, i) => {
            const pos = positions[i];
            const factionColor = fig.faction ? (FACTION_COLORS[fig.faction] ?? 'var(--bp-accent)') : 'rgba(100,180,255,0.4)';
            const isHovered = hovered === i;
            const isSelected = selected === i;
            const isActive = hovered === null || connectedNodes.has(i);
            const opacity = isActive ? 1 : 0.12;

            return (
              <g
                key={i}
                transform={`translate(${pos.x - NODE_W / 2}, ${pos.y - NODE_H / 2})`}
                style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                opacity={opacity}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                {/* Card shadow */}
                <rect
                  x={2} y={3}
                  width={NODE_W} height={NODE_H}
                  rx={3}
                  fill="rgba(0,0,0,0.4)"
                />
                {/* Card background */}
                <rect
                  width={NODE_W} height={NODE_H}
                  rx={3}
                  fill={isHovered || isSelected ? 'rgba(14,36,60,0.98)' : 'rgba(8,22,38,0.95)'}
                />
                {/* Faction color border */}
                <rect
                  width={NODE_W} height={NODE_H}
                  rx={3}
                  fill="none"
                  stroke={isSelected ? factionColor : isHovered ? factionColor : 'rgba(100,180,255,0.25)'}
                  strokeWidth={isSelected ? 2 : isHovered ? 1.5 : 1}
                />
                {/* Top highlight line */}
                <line x1={4} y1={0} x2={NODE_W - 4} y2={0} stroke="rgba(140,210,255,0.15)" strokeWidth={1} />
                {/* Faction color dot */}
                <circle cx={10} cy={10} r={3.5} fill={factionColor} opacity={0.8} />
                {/* Name */}
                <text
                  x={NODE_W / 2} y={22}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isHovered || isSelected ? '#d0eeff' : '#a8d8f0'}
                  fontSize={13}
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="500"
                >
                  {fig.name.length > 7 ? fig.name.slice(0, 7) + '…' : fig.name}
                </text>
                {/* Role */}
                <text
                  x={NODE_W / 2} y={38}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isHovered ? 'rgba(100,180,255,0.8)' : 'rgba(60,130,180,0.7)'}
                  fontSize={10}
                  fontFamily="Space Mono, monospace"
                >
                  {fig.role.length > 10 ? fig.role.slice(0, 10) + '…' : fig.role}
                </text>
                {/* Selected indicator */}
                {isSelected && (
                  <rect
                    x={-1} y={-1}
                    width={NODE_W + 2} height={NODE_H + 2}
                    rx={4}
                    fill="none"
                    stroke={factionColor}
                    strokeWidth={2}
                    opacity={0.5}
                    strokeDasharray="4 3"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {!hasRelations && (
          <div
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: 'rgba(42,104,136,0.6)', letterSpacing: '0.2em' }}>
              — NO RELATION DATA —
            </span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', gap: '6px 16px',
          padding: '8px 14px',
          background: 'rgba(3,9,20,0.6)',
          border: '1px solid rgba(58,143,200,0.1)',
          borderTop: 'none',
        }}
      >
        {(Object.entries(RELATION_META) as [FigureRelationType, typeof RELATION_META[FigureRelationType]][])
          .filter(([, m]) => edges.some(e => RELATION_META[e.type].label === m.label))
          .map(([type, meta]) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width={24} height={10} style={{ flexShrink: 0 }}>
                <line
                  x1={0} y1={5} x2={24} y2={5}
                  stroke={meta.color}
                  strokeWidth={1.5}
                  strokeDasharray={meta.dash === 'none' ? undefined : meta.dash}
                />
              </svg>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: meta.color, letterSpacing: '0.1em' }}>
                {meta.label}
              </span>
            </div>
          ))}
      </div>

      {/* Selected figure detail panel */}
      <AnimatePresence>
        {selectedFigure && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '16px 18px',
                background: 'linear-gradient(180deg, #071828 0%, #050f1e 100%)',
                border: '1px solid rgba(100,180,255,0.18)',
                borderTop: '2px solid rgba(100,180,255,0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    {selectedFigure.faction && (
                      <span style={{
                        fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.15em',
                        color: FACTION_COLORS[selectedFigure.faction] ?? 'var(--bp-accent)',
                        border: `1px solid ${FACTION_COLORS[selectedFigure.faction] ?? 'rgba(100,180,255,0.3)'}50`,
                        padding: '2px 7px',
                        background: `${FACTION_COLORS[selectedFigure.faction] ?? '#3a8fc8'}12`,
                      }}>
                        {selectedFigure.faction}
                      </span>
                    )}
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--bp-text-dim)', letterSpacing: '0.1em' }}>
                      {selectedFigure.period ?? '—'}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', color: 'var(--bp-white)', marginBottom: 4 }}>
                    {selectedFigure.name}
                  </div>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--bp-accent)', letterSpacing: '0.15em', marginBottom: 10 }}>
                    {selectedFigure.role}
                  </div>
                  {selectedFigure.description && (
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.88rem', color: 'var(--bp-text)', lineHeight: 1.65 }}>
                      {selectedFigure.description}
                    </p>
                  )}
                </div>

                {/* Relation list for selected figure */}
                {selectedFigure.relations && selectedFigure.relations.length > 0 && (
                  <div style={{ flexShrink: 0, minWidth: 160 }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--bp-text-dim)', marginBottom: 8, textTransform: 'uppercase' }}>
                      已知关系
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {selectedFigure.relations.map((rel, i) => {
                        const meta = RELATION_META[rel.type as FigureRelationType];
                        return (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                            <svg width={16} height={8}>
                              <line x1={0} y1={4} x2={16} y2={4} stroke={meta.color} strokeWidth={1.5} strokeDasharray={meta.dash === 'none' ? undefined : meta.dash} />
                            </svg>
                            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: meta.color, letterSpacing: '0.08em' }}>
                              {rel.label}
                            </span>
                            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.78rem', color: 'var(--bp-text-dim)' }}>
                              {rel.targetName.length > 6 ? rel.targetName.slice(0, 6) + '…' : rel.targetName}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
