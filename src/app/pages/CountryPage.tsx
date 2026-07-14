import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { getArchivesByCountry, getCountriesWithCounts, getAllTags } from '../store/archiveStore';
import { Archive, Country } from '../types';
import { ArchiveCard } from '../components/ArchiveCard';
import { TagBadge } from '../components/TagBadge';
import { BlueprintCorners } from '../components/BlueprintCorner';
import { TimelineLayout } from '../components/TimelineLayout';
import { ChevronLeft, Search, SlidersHorizontal, X, LayoutGrid, AlignLeft } from 'lucide-react';

type ViewMode = 'grid' | 'timeline';

export function CountryPage() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [archives, setArchives] = useState<Archive[]>([]);
  const [country, setCountry] = useState<Country | undefined>();
  const [searchQ, setSearchQ] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  useEffect(() => {
    if (!countryCode) return;
    const all = getArchivesByCountry(countryCode);
    setArchives(all);
    const countries = getCountriesWithCounts();
    setCountry(countries.find(c => c.code === countryCode));
    const tags = new Set<string>();
    all.forEach(a => a.tags.forEach(t => tags.add(t)));
    setAvailableTags(Array.from(tags).sort());
  }, [countryCode]);

  const filtered = useMemo(() => {
    let result = archives;
    if (searchQ) {
      const q = searchQ.toLowerCase();
      result = result.filter(
        a =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          (a.titleEn || '').toLowerCase().includes(q)
      );
    }
    if (activeTags.length > 0) {
      result = result.filter(a => activeTags.every(t => a.tags.includes(t)));
    }
    return result;
  }, [archives, searchQ, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen pt-[74px]">
      {/* Header */}
      <div
        className="relative px-8 pt-6 pb-5"
        style={{
          background: 'linear-gradient(180deg, #071828 0%, #040f1e 100%)',
          borderBottom: '2px solid rgba(100,180,255,0.15)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(140,200,255,0.06)',
        }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 mb-4 font-mono text-[13px] tracking-wider uppercase transition-colors"
          style={{ color: 'var(--bp-text-dim)' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bp-accent)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bp-text-dim)')}
        >
          <ChevronLeft size={13} /> BACK TO ARCHIVE
        </Link>

        <div className="flex items-end justify-between">
          <div>
            <div
              className="font-mono text-[16px] tracking-[0.3em] uppercase mb-1"
              style={{ color: 'var(--bp-text-dim)' }}
            >
              {country?.nameEn?.toUpperCase()} // {country?.code?.toUpperCase()}-ARCHIVE
            </div>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}>
              {country?.name || countryCode?.toUpperCase()}
            </h1>
            {country?.description && (
              <p className="font-mono text-[13px] mt-1" style={{ color: 'var(--bp-text)' }}>
                {country.description}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end gap-3">
            {/* View mode toggle */}
            <div
              className="flex items-center"
              style={{ border: '1px solid rgba(58,143,200,0.25)', background: 'rgba(0,15,30,0.5)' }}
            >
              {([
                { mode: 'grid' as ViewMode, Icon: LayoutGrid, label: '网格' },
                { mode: 'timeline' as ViewMode, Icon: AlignLeft, label: '时间线' },
              ] as const).map(({ mode, Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className="flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] tracking-widest uppercase transition-all"
                  style={{
                    color: viewMode === mode ? 'var(--bp-highlight)' : 'var(--bp-text-dim)',
                    background: viewMode === mode ? 'rgba(58,143,200,0.15)' : 'transparent',
                    borderRight: mode === 'grid' ? '1px solid rgba(58,143,200,0.25)' : 'none',
                  }}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>

            <div className="text-right">
              <div className="font-mono text-[16px] tracking-widest" style={{ color: 'var(--bp-text-dim)' }}>
                TOTAL RECORDS
              </div>
              <div
                className="font-mono"
                style={{ color: 'var(--bp-highlight)', fontSize: '2.65rem', lineHeight: 1 }}
              >
                {archives.length.toString().padStart(3, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 max-w-7xl mx-auto">
        {/* Search and filter bar */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="relative flex-1 max-w-md"
            style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)' }}
          >
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--bp-text-dim)' }}
            />
            <input
              type="text"
              placeholder="搜索档案标题、描述..."
              value={searchQ}
              onChange={e => setSearchQ(e.target.value)}
              className="w-full pl-8 pr-3 py-2 bg-transparent font-mono text-[15px] outline-none"
              style={{ color: 'var(--bp-text-bright)', caretColor: 'var(--bp-highlight)' }}
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 py-2 font-mono text-[13px] tracking-wider uppercase transition-colors"
            style={{
              border: `1px solid ${showFilters ? 'var(--bp-accent)' : 'var(--bp-border)'}`,
              background: showFilters ? 'rgba(58,143,200,0.1)' : 'var(--bp-surface)',
              color: showFilters ? 'var(--bp-accent)' : 'var(--bp-text)',
            }}
          >
            <SlidersHorizontal size={15} />
            FILTER
            {activeTags.length > 0 && (
              <span
                className="px-1.5 py-0.5 font-mono text-[15px]"
                style={{ background: 'var(--bp-accent)', color: 'var(--bp-white)' }}
              >
                {activeTags.length}
              </span>
            )}
          </button>

          <Link
            to="/manage"
            className="flex items-center gap-1.5 px-3 py-2 font-mono text-[13px] tracking-wider uppercase"
            style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)', color: 'var(--bp-text)' }}
          >
            + ADD
          </Link>
        </div>

        {/* Tag filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div
                className="p-4 mb-5 relative"
                style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)' }}
              >
                <BlueprintCorners size={6} />
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[16px] tracking-widest uppercase" style={{ color: 'var(--bp-text-dim)' }}>
                    TAG FILTER
                  </span>
                  {activeTags.length > 0 && (
                    <button
                      onClick={() => setActiveTags([])}
                      className="flex items-center gap-1 font-mono text-[16px]"
                      style={{ color: 'var(--bp-accent)' }}
                    >
                      <X size={15} /> CLEAR ALL
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {availableTags.map(tag => (
                    <TagBadge
                      key={tag}
                      tag={tag}
                      active={activeTags.includes(tag)}
                      onClick={() => toggleTag(tag)}
                      size="md"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results info */}
        {(searchQ || activeTags.length > 0) && (
          <div className="mb-4 font-mono text-[13px]" style={{ color: 'var(--bp-text-dim)' }}>
            找到 <span style={{ color: 'var(--bp-highlight)' }}>{filtered.length}</span> 条档案
            {activeTags.length > 0 && (
              <span> · 标签筛选: {activeTags.join(', ')}</span>
            )}
          </div>
        )}

        {filtered.length === 0 ? (
          <div
            className="text-center py-16 relative"
            style={{ border: '1px dashed var(--bp-border)' }}
          >
            <p className="font-mono text-[15px]" style={{ color: 'var(--bp-text-dim)' }}>
              — NO RECORDS FOUND —
            </p>
            <p className="font-mono text-[16px] mt-2" style={{ color: 'var(--bp-text-dim)', opacity: 0.6 }}>
              尝试调整搜索条件或{' '}
              <Link to="/manage" style={{ color: 'var(--bp-accent)' }}>添加新档案</Link>
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          <AnimatePresence mode="wait">
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((archive, i) => (
                <ArchiveCard key={archive.id} archive={archive} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key="timeline"
              className="relative"
              style={{
                border: '1px solid var(--bp-border)',
                background: 'rgba(0,8,18,0.6)',
                height: '50vh',
                minHeight: 320,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <BlueprintCorners size={7} />
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-4 py-2"
                style={{
                  borderBottom: '1px solid rgba(58,143,200,0.18)',
                  background: 'rgba(0,12,26,0.7)',
                  flexShrink: 0,
                }}
              >
                <div className="flex items-center gap-2">
                  <AlignLeft size={13} style={{ color: 'var(--bp-accent)' }} />
                  <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: 'var(--bp-text-dim)' }}>
                    HISTORICAL TIMELINE
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest" style={{ color: 'rgba(58,143,200,0.35)' }}>
                  滚轮缩放 · Shift+滚轮横移 · 点击打开
                </span>
              </div>
              {/* Timeline fills the rest of the 50vh panel */}
              <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <TimelineLayout archives={filtered} />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
