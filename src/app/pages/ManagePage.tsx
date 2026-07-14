import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  getArchives, getArchiveById, saveArchive, deleteArchive, COUNTRIES
} from '../store/archiveStore';
import { Archive, ArchiveCategory } from '../types';
import { BlueprintCorners } from '../components/BlueprintCorner';
import { TagBadge } from '../components/TagBadge';
import {
  Plus, Edit3, Trash2, Save, X, ChevronLeft, Check,
  FileText, Search, Archive as ArchiveIcon
} from 'lucide-react';

const CATEGORIES: { value: ArchiveCategory; label: string }[] = [
  { value: 'chinese-history', label: '中国历史' },
  { value: 'world-history', label: '世界历史' },
  { value: 'period', label: '特定时期' },
  { value: 'biography', label: '人物传记' },
  { value: 'event', label: '事件档案' },
];

const EMPTY_ARCHIVE: Partial<Archive> = {
  title: '',
  titleEn: '',
  date: '',
  dateEnd: '',
  description: '',
  image: '',
  references: [],
  tags: [],
  country: '',
  countryCode: 'cn',
  category: 'chinese-history',
  analysis: '',
};

export function ManagePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editId = searchParams.get('edit');

  const [archives, setArchives] = useState<Archive[]>([]);
  const [editing, setEditing] = useState<Partial<Archive>>(EMPTY_ARCHIVE);
  const [mode, setMode] = useState<'list' | 'edit'>('list');
  const [saved, setSaved] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [refInput, setRefInput] = useState('');

  useEffect(() => {
    const all = getArchives();
    setArchives(all);
    if (editId) {
      const found = all.find(a => a.id === editId);
      if (found) {
        setEditing(found);
        setMode('edit');
      }
    }
  }, [editId]);

  const handleNew = () => {
    setEditing({ ...EMPTY_ARCHIVE, id: `rec-${Date.now()}` });
    setMode('edit');
  };

  const handleEdit = (archive: Archive) => {
    setEditing({ ...archive });
    setMode('edit');
  };

  const handleDelete = (id: string) => {
    deleteArchive(id);
    setArchives(getArchives());
  };

  const handleSave = () => {
    if (!editing.title || !editing.countryCode) return;
    const country = COUNTRIES.find(c => c.code === editing.countryCode);
    const archive: Archive = {
      id: editing.id || `rec-${Date.now()}`,
      title: editing.title || '',
      titleEn: editing.titleEn,
      date: editing.date || '',
      dateEnd: editing.dateEnd,
      description: editing.description || '',
      image: editing.image,
      references: editing.references || [],
      tags: editing.tags || [],
      country: editing.country || country?.name || '',
      countryCode: editing.countryCode || 'cn',
      category: editing.category || 'chinese-history',
      analysis: editing.analysis,
      timeline: editing.timeline,
      keyFigures: editing.keyFigures,
      createdAt: editing.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isAIGenerated: editing.isAIGenerated || false,
    };
    saveArchive(archive);
    setArchives(getArchives());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setMode('list');
    }, 1000);
  };

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    const tags = [...(editing.tags || [])];
    if (!tags.includes(tagInput.trim())) {
      setEditing({ ...editing, tags: [...tags, tagInput.trim()] });
    }
    setTagInput('');
  };

  const handleAddRef = () => {
    if (!refInput.trim()) return;
    const refs = [...(editing.references || [])];
    setEditing({ ...editing, references: [...refs, refInput.trim()] });
    setRefInput('');
  };

  const filtered = archives.filter(a => {
    if (!searchQ) return true;
    const q = searchQ.toLowerCase();
    return a.title.toLowerCase().includes(q) || a.country.toLowerCase().includes(q);
  });

  if (mode === 'edit') {
    return <EditView
      editing={editing}
      setEditing={setEditing}
      saved={saved}
      onSave={handleSave}
      onCancel={() => setMode('list')}
      tagInput={tagInput}
      setTagInput={setTagInput}
      onAddTag={handleAddTag}
      refInput={refInput}
      setRefInput={setRefInput}
      onAddRef={handleAddRef}
    />;
  }

  return (
    <div className="min-h-screen pt-[74px]">
      <div
        className="px-8 pt-8 pb-6"
        style={{ background: 'rgba(0,20,40,0.7)', borderBottom: '1px solid var(--bp-border)' }}
      >
        <div className="font-mono text-[16px] tracking-[0.3em] uppercase mb-1" style={{ color: 'var(--bp-text-dim)' }}>
          ARCHIVE MANAGEMENT SYSTEM
        </div>
        <div className="flex items-center justify-between">
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}>
            档案管理
          </h1>
          <motion.button
            onClick={handleNew}
            className="flex items-center gap-2 px-4 py-2 font-mono text-[13px] uppercase"
            style={{
              background: 'rgba(58,143,200,0.15)',
              border: '1px solid var(--bp-accent)',
              color: 'var(--bp-highlight)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={15} /> NEW ARCHIVE
          </motion.button>
        </div>
      </div>

      <div className="px-8 py-6 max-w-5xl mx-auto">
        {/* Search */}
        <div
          className="relative flex items-center mb-5"
          style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)' }}
        >
          <Search size={16} className="absolute left-3" style={{ color: 'var(--bp-text-dim)' }} />
          <input
            type="text"
            placeholder="搜索档案..."
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
            className="w-full pl-8 pr-3 py-2 bg-transparent font-mono text-[15px] outline-none"
            style={{ color: 'var(--bp-text-bright)' }}
          />
        </div>

        {/* Archive list */}
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className="text-center py-12" style={{ border: '1px dashed var(--bp-border)' }}>
              <p className="font-mono text-[15px]" style={{ color: 'var(--bp-text-dim)' }}>
                — NO ARCHIVES YET —
              </p>
              <button
                onClick={handleNew}
                className="font-mono text-[13px] mt-2"
                style={{ color: 'var(--bp-accent)' }}
              >
                + Create first archive
              </button>
            </div>
          )}

          {filtered.map((archive, i) => (
            <motion.div
              key={archive.id}
              className="relative flex items-center gap-4 p-3 group"
              style={{ border: '1px solid var(--bp-border)', backgroundColor: 'var(--bp-surface)' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{
                borderColor: 'var(--bp-accent)',
                backgroundColor: 'rgba(0,30,50,0.6)',
              }}
            >
              <BlueprintCorners size={5} />
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <ArchiveIcon size={16} style={{ color: 'var(--bp-accent)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[15px] truncate" style={{ color: 'var(--bp-text-bright)' }}>
                  {archive.title}
                </div>
                <div className="font-mono text-[16px]" style={{ color: 'var(--bp-text-dim)' }}>
                  {archive.country} // {archive.date}{archive.dateEnd ? ` — ${archive.dateEnd}` : ''}
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-1 max-w-[200px]">
                {archive.tags.slice(0, 3).map(tag => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
              <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  to={`/archive/${archive.id}`}
                  className="p-1.5"
                  style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-text)' }}
                >
                  <FileText size={13} />
                </Link>
                <button
                  onClick={() => handleEdit(archive)}
                  className="p-1.5"
                  style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-text)' }}
                >
                  <Edit3 size={13} />
                </button>
                <button
                  onClick={() => handleDelete(archive.id)}
                  className="p-1.5"
                  style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-stamp-red)' }}
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EditView({
  editing, setEditing, saved, onSave, onCancel,
  tagInput, setTagInput, onAddTag,
  refInput, setRefInput, onAddRef
}: any) {
  const inputStyle = {
    width: '100%',
    background: 'rgba(0,10,20,0.5)',
    border: '1px solid var(--bp-border)',
    color: 'var(--bp-text-bright)',
    fontFamily: 'Space Mono, monospace',
    fontSize: '16px',
    padding: '8px 10px',
    outline: 'none',
    caretColor: 'var(--bp-highlight)',
  };

  const fieldStyle = 'mb-4';
  const labelStyle = {
    display: 'block',
    fontFamily: 'Space Mono, monospace',
    fontSize: '16px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'var(--bp-text-dim)',
    marginBottom: '4px',
  };

  return (
    <div className="min-h-screen pt-[74px]">
      <div
        className="px-8 pt-6 pb-5"
        style={{ background: 'rgba(0,20,40,0.7)', borderBottom: '1px solid var(--bp-border)' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={onCancel}
              className="inline-flex items-center gap-1.5 mb-2 font-mono text-[13px] tracking-wider uppercase"
              style={{ color: 'var(--bp-text-dim)' }}
            >
              <ChevronLeft size={13} /> ARCHIVE LIST
            </button>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}>
              {editing.id && editing.title ? '编辑档案' : '新建档案'}
            </h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="flex items-center gap-1.5 px-3 py-2 font-mono text-[13px] uppercase"
              style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-text)', background: 'var(--bp-surface)' }}
            >
              <X size={13} /> CANCEL
            </button>
            <motion.button
              onClick={onSave}
              className="flex items-center gap-1.5 px-4 py-2 font-mono text-[13px] uppercase"
              style={{
                background: saved ? 'rgba(48,152,80,0.2)' : 'rgba(58,143,200,0.2)',
                border: `1px solid ${saved ? 'var(--bp-stamp-green)' : 'var(--bp-accent)'}`,
                color: saved ? 'var(--bp-stamp-green)' : 'var(--bp-highlight)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {saved ? <Check size={13} /> : <Save size={13} />}
              {saved ? 'SAVED!' : 'SAVE ARCHIVE'}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div>
            <Field label="档案标题 *" inputStyle={inputStyle} labelStyle={labelStyle}>
              <input
                type="text"
                placeholder="例：秦始皇统一六国"
                value={editing.title || ''}
                onChange={e => setEditing({ ...editing, title: e.target.value })}
                style={inputStyle}
              />
            </Field>
            <Field label="英文标题" inputStyle={inputStyle} labelStyle={labelStyle}>
              <input
                type="text"
                placeholder="Qin Shi Huang Unifies Six States"
                value={editing.titleEn || ''}
                onChange={e => setEditing({ ...editing, titleEn: e.target.value })}
                style={inputStyle}
              />
            </Field>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Field label="起始年份" inputStyle={inputStyle} labelStyle={labelStyle}>
                <input
                  type="text"
                  placeholder="前221年"
                  value={editing.date || ''}
                  onChange={e => setEditing({ ...editing, date: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="结束年份" inputStyle={inputStyle} labelStyle={labelStyle}>
                <input
                  type="text"
                  placeholder="前206年"
                  value={editing.dateEnd || ''}
                  onChange={e => setEditing({ ...editing, dateEnd: e.target.value })}
                  style={inputStyle}
                />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Field label="档案分类" inputStyle={inputStyle} labelStyle={labelStyle}>
                <select
                  value={editing.category || 'chinese-history'}
                  onChange={e => setEditing({ ...editing, category: e.target.value as ArchiveCategory })}
                  style={{ ...inputStyle }}
                >
                  {CATEGORIES.map(c => (
                    <option key={c.value} value={c.value} style={{ background: '#001428' }}>{c.label}</option>
                  ))}
                </select>
              </Field>
              <Field label="国家/地区 *" inputStyle={inputStyle} labelStyle={labelStyle}>
                <select
                  value={editing.countryCode || 'cn'}
                  onChange={e => {
                    const c = COUNTRIES.find(co => co.code === e.target.value);
                    setEditing({ ...editing, countryCode: e.target.value, country: c?.name || '' });
                  }}
                  style={{ ...inputStyle }}
                >
                  {COUNTRIES.map(c => (
                    <option key={c.code} value={c.code} style={{ background: '#001428' }}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="图片 URL（可选）" inputStyle={inputStyle} labelStyle={labelStyle}>
              <input
                type="text"
                placeholder="https://..."
                value={editing.image || ''}
                onChange={e => setEditing({ ...editing, image: e.target.value })}
                style={inputStyle}
              />
            </Field>
          </div>

          {/* Right column */}
          <div>
            <Field label="档案摘要" inputStyle={inputStyle} labelStyle={labelStyle}>
              <textarea
                placeholder="简要描述这段历史的背景、过程和意义..."
                value={editing.description || ''}
                onChange={e => setEditing({ ...editing, description: e.target.value })}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </Field>
            <Field label="历史分析" inputStyle={inputStyle} labelStyle={labelStyle}>
              <textarea
                placeholder="深入的历史分析、影响评估..."
                value={editing.analysis || ''}
                onChange={e => setEditing({ ...editing, analysis: e.target.value })}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </Field>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label style={labelStyle}>标签</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="输入标签后按Enter添加"
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && onAddTag()}
              style={{ ...inputStyle, flex: 1 }}
            />
            <button
              onClick={onAddTag}
              className="px-3 font-mono text-[13px] uppercase"
              style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-accent)', background: 'var(--bp-surface)' }}
            >
              + ADD
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(editing.tags || []).map((tag: string) => (
              <div key={tag} className="flex items-center gap-1">
                <TagBadge tag={tag} size="md" />
                <button
                  onClick={() => setEditing({ ...editing, tags: (editing.tags || []).filter((t: string) => t !== tag) })}
                  className="w-3 h-3 flex items-center justify-center"
                  style={{ color: 'var(--bp-text-dim)' }}
                >
                  <X size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="mb-4">
          <label style={labelStyle}>参考资料</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="输入参考资料后按Enter添加"
              value={refInput}
              onChange={e => setRefInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && onAddRef()}
              style={{ ...inputStyle, flex: 1 }}
            />
            <button
              onClick={onAddRef}
              className="px-3 font-mono text-[13px] uppercase"
              style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-accent)', background: 'var(--bp-surface)' }}
            >
              + ADD
            </button>
          </div>
          <ul className="space-y-1">
            {(editing.references || []).map((ref: string, i: number) => (
              <li key={i} className="flex items-center gap-2">
                <span className="font-mono text-[16px]" style={{ color: 'var(--bp-accent)' }}>
                  [{(i + 1).toString().padStart(2, '0')}]
                </span>
                <span className="font-mono text-[13px] flex-1" style={{ color: 'var(--bp-text)' }}>{ref}</span>
                <button
                  onClick={() => setEditing({ ...editing, references: (editing.references || []).filter((_: string, j: number) => j !== i) })}
                  style={{ color: 'var(--bp-text-dim)' }}
                >
                  <X size={15} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children, inputStyle, labelStyle }: any) {
  return (
    <div className="mb-4">
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}
