import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { searchArchives, getAllTags } from '../store/archiveStore';
import { Archive } from '../types';
import { ArchiveCard } from '../components/ArchiveCard';
import { TagBadge } from '../components/TagBadge';
import { BlueprintCorners } from '../components/BlueprintCorner';
import { Search, X, SlidersHorizontal } from 'lucide-react';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [results, setResults] = useState<Archive[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setAllTags(getAllTags());
  }, []);

  useEffect(() => {
    if (query || activeTags.length > 0) {
      setResults(searchArchives(query, activeTags));
      setHasSearched(true);
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [query, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen pt-[74px]">
      {/* Header */}
      <div
        className="px-8 pt-8 pb-6"
        style={{ background: 'rgba(0,20,40,0.7)', borderBottom: '1px solid var(--bp-border)' }}
      >
        <div className="font-mono text-[16px] tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--bp-text-dim)' }}>
          ARCHIVE RETRIEVAL SYSTEM
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}>
          检 索 档 案
        </h1>
        <div className="font-mono text-[13px] mt-1" style={{ color: 'var(--bp-text-dim)' }}>
          SEARCH // FULL-TEXT + TAG FILTER
        </div>
      </div>

      <div className="px-8 py-6 max-w-6xl mx-auto">
        {/* Search input */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="relative flex items-center"
            style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)' }}
          >
            <BlueprintCorners size={15} />
            <Search
              size={24}
              className="absolute left-4"
              style={{ color: 'var(--bp-accent)' }}
            />
            <input
              autoFocus
              type="text"
              placeholder="输入关键词搜索历史档案..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3.5 bg-transparent font-mono text-sm outline-none"
              style={{ color: 'var(--bp-text-bright)', caretColor: 'var(--bp-highlight)' }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4"
                style={{ color: 'var(--bp-text-dim)' }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Scan line animation */}
          {query && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5"
              style={{ background: 'var(--bp-accent)' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>

        {/* Tag filter */}
        <motion.div
          className="relative p-4 mb-6"
          style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,15,30,0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <BlueprintCorners size={6} />
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} style={{ color: 'var(--bp-accent)' }} />
              <span className="font-mono text-[16px] tracking-widest uppercase" style={{ color: 'var(--bp-text-dim)' }}>
                TAG FILTER // {allTags.length} TAGS AVAILABLE
              </span>
            </div>
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="flex items-center gap-1 font-mono text-[16px]"
                style={{ color: 'var(--bp-accent)' }}
              >
                <X size={15} /> CLEAR ({activeTags.length})
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
            {allTags.map(tag => (
              <TagBadge
                key={tag}
                tag={tag}
                active={activeTags.includes(tag)}
                onClick={() => toggleTag(tag)}
                size="md"
              />
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {!hasSearched && (
            <motion.div
              key="empty"
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                style={{ border: '1px solid var(--bp-border)' }}
              >
                <Search size={27} style={{ color: 'var(--bp-text-dim)' }} />
              </div>
              <p className="font-mono text-[15px]" style={{ color: 'var(--bp-text-dim)' }}>
                输入关键词或选择标签开始检索
              </p>
              <p className="font-mono text-[16px] mt-2 opacity-50" style={{ color: 'var(--bp-text-dim)' }}>
                ENTER KEYWORDS OR SELECT TAGS TO SEARCH
              </p>
            </motion.div>
          )}

          {hasSearched && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="font-mono text-[13px] mb-4" style={{ color: 'var(--bp-text-dim)' }}>
                SEARCH RESULTS //
                <span style={{ color: 'var(--bp-highlight)' }}> {results.length} </span>
                RECORDS FOUND
                {activeTags.length > 0 && <span> // TAGS: [{activeTags.join('] [')}]</span>}
              </div>

              {results.length === 0 ? (
                <div className="text-center py-12" style={{ border: '1px dashed var(--bp-border)' }}>
                  <p className="font-mono text-[15px]" style={{ color: 'var(--bp-text-dim)' }}>
                    — NO RECORDS FOUND —
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.map((archive, i) => (
                    <ArchiveCard key={archive.id} archive={archive} index={i} />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
