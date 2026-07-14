import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { getArchiveById, deleteArchive } from '../store/archiveStore';
import { Archive } from '../types';
import { TagBadge } from '../components/TagBadge';
import { BlueprintCorners } from '../components/BlueprintCorner';
import { Timeline } from '../components/Timeline';
import { FigureRelationGraph } from '../components/FigureRelationGraph';
import {
  ChevronLeft, Edit3, Trash2, User2, BookMarked,
  AlignLeft, Clock, Cpu, ExternalLink, Network, ChevronDown
} from 'lucide-react';

const FACTION_COLORS: Record<string, string> = {
  '秦国': '#c8a840', '汉朝': '#c8a840',
  '主战派': '#40c870', '主和派': '#c07030',
  '清廷': '#7090e0', '英国侵略方': '#c04030',
  '革命派': '#40c870', '旧势力': '#c07030',
  '旧帝制': '#c04030', '旧制度': '#c04030',
  '革命派（雅各宾）': '#40b0c8', '后革命': '#c8a840',
  '轴心国': '#c04030', '同盟国': '#40c870',
};

export function ArchiveDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [archive, setArchive] = useState<Archive | undefined>();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [expandedFigure, setExpandedFigure] = useState<number | null>(null);

  useEffect(() => {
    if (id) setArchive(getArchiveById(id));
  }, [id]);

  if (!archive) {
    return (
      <div className="min-h-screen pt-[74px] flex items-center justify-center">
        <div className="font-mono text-[15px]" style={{ color: 'var(--bp-text-dim)' }}>
          — RECORD NOT FOUND —
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (confirmDelete) {
      deleteArchive(archive.id);
      navigate(`/country/${archive.countryCode}`);
    } else {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 3000);
    }
  };

  return (
    <div className="min-h-screen pt-[74px]">
      {/* Header */}
      <div
        className="relative px-8 pt-6 pb-5"
        style={{ background: 'rgba(0,20,40,0.7)', borderBottom: '1px solid var(--bp-border)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <Link
            to={`/country/${archive.countryCode}`}
            className="inline-flex items-center gap-1.5 font-mono text-[13px] tracking-wider uppercase"
            style={{ color: 'var(--bp-text-dim)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bp-accent)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bp-text-dim)')}
          >
            <ChevronLeft size={13} /> {archive.country} ARCHIVE
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to={`/manage?edit=${archive.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[13px] uppercase"
              style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-text)', background: 'var(--bp-surface)' }}
            >
              <Edit3 size={13} /> EDIT
            </Link>
            <button
              onClick={handleDelete}
              className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[13px] uppercase transition-colors"
              style={{
                border: `1px solid ${confirmDelete ? 'var(--bp-stamp-red)' : 'var(--bp-border)'}`,
                color: confirmDelete ? 'var(--bp-stamp-red)' : 'var(--bp-text)',
                background: confirmDelete ? 'rgba(192,64,48,0.1)' : 'var(--bp-surface)',
              }}
            >
              <Trash2 size={13} />
              {confirmDelete ? 'CONFIRM DELETE' : 'DELETE'}
            </button>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-mono text-[16px] tracking-wider px-2 py-0.5"
                style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-accent)' }}
              >
                {archive.category.toUpperCase().replace('-', ' ')}
              </span>
              {archive.isAIGenerated && (
                <span
                  className="flex items-center gap-1 font-mono text-[16px] px-2 py-0.5"
                  style={{ border: '1px solid var(--bp-stamp-green)', color: 'var(--bp-stamp-green)' }}
                >
                  <Cpu size={15} /> AI GENERATED
                </span>
              )}
            </div>
            <h1
              className="mb-1"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)', fontSize: '2.25rem' }}
            >
              {archive.title}
            </h1>
            {archive.titleEn && (
              <div className="font-mono text-[13px] tracking-wider uppercase" style={{ color: 'var(--bp-text-dim)' }}>
                {archive.titleEn}
              </div>
            )}
          </div>

          {/* Date badge */}
          <div
            className="text-right p-3 relative shrink-0"
            style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,20,40,0.6)' }}
          >
            <BlueprintCorners size={5} />
            <div className="font-mono text-[15px] tracking-widest mb-1" style={{ color: 'var(--bp-text-dim)' }}>
              DATE RANGE
            </div>
            <div className="font-mono text-xs" style={{ color: 'var(--bp-highlight)' }}>
              {archive.date}
            </div>
            {archive.dateEnd && (
              <>
                <div className="font-mono text-[15px]" style={{ color: 'var(--bp-text-dim)' }}>—</div>
                <div className="font-mono text-xs" style={{ color: 'var(--bp-highlight)' }}>
                  {archive.dateEnd}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {archive.tags.map(tag => (
            <TagBadge key={tag} tag={tag} size="md" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Image */}
            {archive.image && (
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ border: '1px solid var(--bp-border)' }}
              >
                <BlueprintCorners size={13} />
                <img
                  src={archive.image}
                  alt={archive.title}
                  className="w-full h-56 object-cover"
                  style={{ filter: 'sepia(0.35) saturate(0.65) brightness(0.7) hue-rotate(175deg)' }}
                />
                {/* Blueprint overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 4px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 font-mono text-[15px] tracking-wider"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,10,20,0.9), transparent)',
                    color: 'var(--bp-text-dim)',
                  }}
                >
                  FIG. {archive.id.toUpperCase()} // {archive.title}
                </div>
              </motion.div>
            )}

            {/* Description */}
            <Section icon={<AlignLeft size={16} />} title="档案摘要" titleEn="ABSTRACT">
              <p
                className="leading-relaxed"
                style={{ color: 'var(--bp-text-bright)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {archive.description}
              </p>
            </Section>

            {/* Timeline */}
            {archive.timeline && archive.timeline.length > 0 && (
              <Section icon={<Clock size={16} />} title="历史时间线" titleEn="TIMELINE">
                <Timeline entries={archive.timeline} />
              </Section>
            )}

            {/* Analysis */}
            {archive.analysis && (
              <Section icon={<BookMarked size={16} />} title="历史分析" titleEn="HISTORICAL ANALYSIS">
                <p
                  className="leading-relaxed whitespace-pre-line"
                  style={{ color: 'var(--bp-text-bright)', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {archive.analysis}
                </p>
              </Section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            {/* Key figures */}
            {archive.keyFigures && archive.keyFigures.length > 0 && (
              <div
                className="relative p-4"
                data-bp-snappable data-bp-label="关键人物"
                style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,15,30,0.5)' }}
              >
                <BlueprintCorners size={6} />
                {/* Section header with graph toggle */}
                <div className="flex items-center justify-between mb-3 pb-2" style={{ borderBottom: '1px solid var(--bp-border)' }}>
                  <div className="flex items-center gap-2">
                    <User2 size={16} style={{ color: 'var(--bp-accent)' }} />
                    <span className="font-mono text-[13px] tracking-wider" style={{ color: 'var(--bp-text-bright)' }}>
                      关键人物
                    </span>
                    <span className="font-mono text-[15px] tracking-widest opacity-50" style={{ color: 'var(--bp-text-dim)' }}>
                      / KEY FIGURES
                    </span>
                  </div>
                  {archive.keyFigures.some(f => f.relations && f.relations.length > 0) && (
                    <button
                      onClick={() => setShowGraph(v => !v)}
                      className="flex items-center gap-1 font-mono text-[11px] tracking-widest uppercase px-2 py-1 transition-all"
                      style={{
                        border: `1px solid ${showGraph ? 'var(--bp-accent)' : 'rgba(58,143,200,0.3)'}`,
                        color: showGraph ? 'var(--bp-highlight)' : 'var(--bp-text-dim)',
                        background: showGraph ? 'rgba(58,143,200,0.1)' : 'transparent',
                      }}
                    >
                      <Network size={11} />
                      关系图
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {archive.keyFigures.map((person, i) => {
                    const factionColor = person.faction ? (FACTION_COLORS[person.faction] ?? 'var(--bp-accent)') : null;
                    const isExpanded = expandedFigure === i;
                    const relCount = person.relations?.length ?? 0;
                    return (
                      <motion.div
                        key={i}
                        className="relative"
                        style={{ border: `1px solid ${isExpanded ? 'rgba(100,180,255,0.3)' : 'var(--bp-border)'}`, background: 'rgba(0,20,40,0.4)', cursor: person.description ? 'pointer' : 'default' }}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        onClick={() => person.description && setExpandedFigure(isExpanded ? null : i)}
                      >
                        <BlueprintCorners size={5} />
                        <div className="p-3">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-[15px]" style={{ color: 'var(--bp-text-bright)' }}>
                                  {person.name}
                                </span>
                                {person.faction && factionColor && (
                                  <span
                                    className="font-mono text-[10px] px-1.5 py-0.5"
                                    style={{
                                      border: `1px solid ${factionColor}50`,
                                      color: factionColor,
                                      background: `${factionColor}12`,
                                      letterSpacing: '0.08em',
                                    }}
                                  >
                                    {person.faction}
                                  </span>
                                )}
                              </div>
                              <div className="font-mono text-[11px] mt-0.5" style={{ color: 'var(--bp-accent)', letterSpacing: '0.12em' }}>
                                {person.role}
                              </div>
                              {person.period && (
                                <div className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--bp-text-dim)' }}>
                                  {person.period}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {relCount > 0 && (
                                <span
                                  className="font-mono text-[10px] px-1.5 py-0.5"
                                  style={{
                                    border: '1px solid rgba(96,180,255,0.2)',
                                    color: 'var(--bp-text-dim)',
                                    letterSpacing: '0.1em',
                                  }}
                                >
                                  {relCount}关系
                                </span>
                              )}
                              {person.description && (
                                <motion.span
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ display: 'flex', color: 'var(--bp-text-dim)' }}
                                >
                                  <ChevronDown size={13} />
                                </motion.span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded description */}
                        <AnimatePresence>
                          {isExpanded && person.description && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div
                                className="px-3 pb-3 pt-0"
                                style={{ borderTop: '1px solid rgba(58,143,200,0.12)' }}
                              >
                                <p
                                  className="leading-relaxed mt-2"
                                  style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    fontSize: '0.82rem',
                                    color: 'var(--bp-text)',
                                    lineHeight: 1.7,
                                  }}
                                >
                                  {person.description}
                                </p>
                                {person.relations && person.relations.length > 0 && (
                                  <div className="mt-2 flex flex-wrap gap-1">
                                    {person.relations.map((rel, ri) => (
                                      <span
                                        key={ri}
                                        className="font-mono text-[10px] px-1.5 py-0.5"
                                        style={{
                                          border: '1px solid rgba(58,143,200,0.2)',
                                          color: 'var(--bp-text-dim)',
                                        }}
                                      >
                                        {rel.label} · {rel.targetName}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* References */}
            {archive.references && archive.references.length > 0 && (
              <Section icon={<ExternalLink size={16} />} title="参考资料" titleEn="REFERENCES">
                <ul className="space-y-1.5">
                  {archive.references.map((ref, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-[16px] shrink-0 mt-0.5" style={{ color: 'var(--bp-accent)' }}>
                        [{(i + 1).toString().padStart(2, '0')}]
                      </span>
                      <span className="font-mono text-[13px] leading-relaxed" style={{ color: 'var(--bp-text)' }}>
                        {ref}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Metadata */}
            <div
              className="p-3 relative"
              style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,10,20,0.4)' }}
            >
              <BlueprintCorners size={5} />
              <div className="font-mono text-[16px] tracking-widest mb-2" style={{ color: 'var(--bp-text-dim)' }}>
                RECORD METADATA
              </div>
              {[
                { label: 'RECORD ID', value: archive.id },
                { label: 'COUNTRY', value: `${archive.country} [${archive.countryCode.toUpperCase()}]` },
                { label: 'CREATED', value: new Date(archive.createdAt).toLocaleDateString('zh-CN') },
                { label: 'UPDATED', value: new Date(archive.updatedAt).toLocaleDateString('zh-CN') },
              ].map(item => (
                <div key={item.label} className="flex justify-between py-1" style={{ borderBottom: '1px solid rgba(58,143,200,0.08)' }}>
                  <span className="font-mono text-[16px]" style={{ color: 'var(--bp-text-dim)' }}>{item.label}</span>
                  <span className="font-mono text-[16px]" style={{ color: 'var(--bp-text)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Relationship graph — full width, collapsible */}
        <AnimatePresence>
          {showGraph && archive.keyFigures && archive.keyFigures.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
              className="mt-6 relative"
              style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,10,20,0.5)' }}
              data-bp-snappable data-bp-label="人物关系图"
            >
              <BlueprintCorners size={8} />
              {/* Graph header */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: '1px solid var(--bp-border)' }}
              >
                <div className="flex items-center gap-2">
                  <Network size={16} style={{ color: 'var(--bp-accent)' }} />
                  <span className="font-mono text-[13px] tracking-wider" style={{ color: 'var(--bp-text-bright)' }}>
                    人物关系图
                  </span>
                  <span className="font-mono text-[15px] tracking-widest opacity-50" style={{ color: 'var(--bp-text-dim)' }}>
                    / RELATIONSHIP GRAPH
                  </span>
                </div>
                <div className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--bp-text-dim)' }}>
                  CLICK NODE TO INSPECT · HOVER TO HIGHLIGHT
                </div>
              </div>
              <FigureRelationGraph figures={archive.keyFigures} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  titleEn,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  titleEn?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-4" data-bp-snappable data-bp-label={title} style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,15,30,0.5)' }}>
      <BlueprintCorners size={6} />
      <div
        className="flex items-center gap-2 mb-3 pb-2"
        style={{ borderBottom: '1px solid var(--bp-border)' }}
      >
        <span style={{ color: 'var(--bp-accent)' }}>{icon}</span>
        <span className="font-mono text-[13px] tracking-wider" style={{ color: 'var(--bp-text-bright)' }}>
          {title}
        </span>
        {titleEn && (
          <span className="font-mono text-[15px] tracking-widest opacity-50" style={{ color: 'var(--bp-text-dim)' }}>
            / {titleEn}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
