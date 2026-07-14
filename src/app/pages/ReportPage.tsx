import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { generateHistoricalReport } from '../store/aiService';
import { saveArchive } from '../store/archiveStore';
import { ArchiveReport } from '../types';
import { BlueprintCorners } from '../components/BlueprintCorner';
import { TagBadge } from '../components/TagBadge';
import { Timeline } from '../components/Timeline';
import { Link, useNavigate } from 'react-router';
import {
  Cpu, Send, Save, RefreshCw, User2, BookMarked, Clock,
  CheckCircle, AlertCircle, ChevronRight
} from 'lucide-react';

const EXAMPLE_QUERIES = [
  '中国近代史：从鸦片战争到辛亥革命',
  '唐朝的兴衰：大唐帝国三百年',
  '二战中的太平洋战场',
  '法国大革命的历史影响',
  '蒙古帝国的扩张与统治',
  '明代郑和下西洋',
  '苏联解体的历史原因',
];

export function ReportPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<ArchiveReport | null>(null);
  const [streamText, setStreamText] = useState('');
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);

  const handleGenerate = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setReport(null);
    setStreamText('');
    setError('');
    setSaved(false);

    try {
      const result = await generateHistoricalReport(query, text => {
        setStreamText(text);
      });
      setReport(result);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (msg.toLowerCase().includes('failed to fetch') || msg.toLowerCase().includes('networkerror')) {
        setError('网络请求失败（CORS）：浏览器无法直接访问 API。请在设置页面将 API 端点改为支持跨域的代理地址，或参考项目文档部署 CORS 代理。');
      } else {
        setError(`生成失败：${msg}`);
      }
    } finally {
      setLoading(false);
      setStreamText('');
    }
  };

  const handleSave = () => {
    if (!report) return;
    const id = `ai-${Date.now()}`;
    saveArchive({
      id,
      title: report.title,
      date: report.date,
      dateEnd: report.dateEnd,
      description: report.description,
      references: report.references,
      tags: report.tags,
      country: report.country,
      countryCode: report.countryCode,
      category: report.category,
      timeline: report.timeline,
      keyFigures: report.keyFigures,
      analysis: report.analysis,
      isAIGenerated: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setSaved(true);
    setTimeout(() => navigate(`/country/${report.countryCode}`), 1200);
  };

  return (
    <div className="min-h-screen pt-[74px]">
      {/* Header */}
      <div
        className="px-8 pt-8 pb-6"
        style={{ background: 'rgba(0,20,40,0.7)', borderBottom: '1px solid var(--bp-border)' }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Cpu size={24} style={{ color: 'var(--bp-accent)' }} />
          <div className="font-mono text-[16px] tracking-[0.3em] uppercase" style={{ color: 'var(--bp-text-dim)' }}>
            AI INTELLIGENCE REPORT GENERATOR
          </div>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}>
          AI 历史报告
        </h1>
        <div className="font-mono text-[13px] mt-1" style={{ color: 'var(--bp-text-dim)' }}>
          输入学习需求 → AI自动生成详尽历史档案报告 → 一键收录
        </div>
      </div>

      <div className="px-8 py-6 max-w-5xl mx-auto">
        {/* Input section */}
        <motion.div
          className="relative p-5 mb-6"
          style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <BlueprintCorners size={15} />

          <div className="font-mono text-[16px] tracking-widest uppercase mb-3" style={{ color: 'var(--bp-text-dim)' }}>
            LEARNING REQUEST // ENTER YOUR QUERY
          </div>

          <textarea
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="例：我想学习中国近代史，从鸦片战争到五四运动这段时期的主要事件、关键人物和历史影响..."
            rows={4}
            className="w-full bg-transparent font-mono text-sm outline-none resize-none"
            style={{
              color: 'var(--bp-text-bright)',
              caretColor: 'var(--bp-highlight)',
              border: '1px solid var(--bp-border)',
              padding: '12px',
              background: 'rgba(0,10,20,0.4)',
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleGenerate();
            }}
          />

          <div className="flex items-center justify-between mt-3">
            <div className="font-mono text-[16px]" style={{ color: 'var(--bp-text-dim)' }}>
              Ctrl+Enter 快速生成
            </div>
            <motion.button
              onClick={handleGenerate}
              disabled={loading || !query.trim()}
              className="flex items-center gap-2 px-5 py-2 font-mono text-[13px] tracking-wider uppercase"
              style={{
                background: loading || !query.trim()
                  ? 'rgba(58,143,200,0.1)'
                  : 'rgba(58,143,200,0.2)',
                border: '1px solid var(--bp-accent)',
                color: loading || !query.trim() ? 'var(--bp-text-dim)' : 'var(--bp-highlight)',
                cursor: loading || !query.trim() ? 'not-allowed' : 'pointer',
              }}
              whileHover={!loading && query.trim() ? { scale: 1.02 } : {}}
              whileTap={!loading && query.trim() ? { scale: 0.98 } : {}}
            >
              {loading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                  <RefreshCw size={15} />
                </motion.div>
              ) : (
                <Send size={15} />
              )}
              {loading ? 'GENERATING...' : 'GENERATE REPORT'}
            </motion.button>
          </div>
        </motion.div>

        {/* Example queries */}
        {!report && !loading && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="font-mono text-[16px] tracking-widest uppercase mb-3" style={{ color: 'var(--bp-text-dim)' }}>
              EXAMPLE QUERIES // 示例查询
            </div>
            <div className="flex flex-wrap gap-2">
              {EXAMPLE_QUERIES.map((q, i) => (
                <motion.button
                  key={i}
                  onClick={() => setQuery(q)}
                  className="px-3 py-1.5 font-mono text-[13px] text-left transition-colors"
                  style={{
                    border: '1px solid var(--bp-border)',
                    backgroundColor: 'rgba(0,20,40,0.4)',
                    color: 'var(--bp-text)',
                  }}
                  whileHover={{ borderColor: 'var(--bp-accent)', color: 'var(--bp-text-bright)' }}
                >
                  <ChevronRight size={15} className="inline mr-1" />
                  {q}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Loading / streaming */}
        <AnimatePresence>
          {loading && (
            <motion.div
              className="relative p-6 mb-6"
              style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <BlueprintCorners />
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                >
                  <Cpu size={24} style={{ color: 'var(--bp-accent)' }} />
                </motion.div>
                <span className="font-mono text-[13px] tracking-wider" style={{ color: 'var(--bp-accent)' }}>
                  AI PROCESSING // GENERATING HISTORICAL REPORT
                </span>
                <motion.div
                  className="flex gap-1"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                >
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full"
                      style={{ background: 'var(--bp-accent)' }}
                    />
                  ))}
                </motion.div>
              </div>

              {streamText && (
                <div
                  className="font-mono text-[13px] leading-relaxed max-h-40 overflow-y-auto"
                  style={{ color: 'var(--bp-text)', background: 'rgba(0,10,20,0.4)', padding: 12 }}
                >
                  {streamText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    style={{ color: 'var(--bp-highlight)' }}
                  >
                    ▌
                  </motion.span>
                </div>
              )}

              {!streamText && (
                <div className="space-y-2">
                  {['分析学习请求...', '检索历史数据...', '构建时间线...', '生成报告中...'].map((step, i) => (
                    <motion.div
                      key={step}
                      className="flex items-center gap-2 font-mono text-[16px]"
                      style={{ color: 'var(--bp-text-dim)' }}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3 }}
                    >
                      <div className="w-1.5 h-1.5" style={{ background: 'var(--bp-accent)' }} />
                      {step}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error */}
        {error && (
          <motion.div
            className="relative p-4 mb-6"
            style={{ border: '1px solid var(--bp-stamp-red)', background: 'rgba(192,64,48,0.08)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-2 font-mono text-[15px]" style={{ color: 'var(--bp-stamp-red)' }}>
              <AlertCircle size={16} />
              {error}
            </div>
            <Link to="/settings" className="font-mono text-[16px] mt-1 block" style={{ color: 'var(--bp-accent)' }}>
              → 前往设置配置 API 密钥
            </Link>
          </motion.div>
        )}

        {/* Generated report */}
        <AnimatePresence>
          {report && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Report header */}
              <div
                className="relative p-5 mb-5"
                style={{ border: '1px solid var(--bp-border-bright)', background: 'var(--bp-surface)' }}
              >
                <BlueprintCorners size={13} />
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-[16px] tracking-wider px-2 py-0.5"
                        style={{ border: '1px solid var(--bp-accent)', color: 'var(--bp-accent)' }}
                      >
                        {report.category?.toUpperCase().replace('-', ' ')}
                      </span>
                      <span
                        className="flex items-center gap-1 font-mono text-[16px] px-2 py-0.5"
                        style={{ border: '1px solid var(--bp-stamp-green)', color: 'var(--bp-stamp-green)' }}
                      >
                        <Cpu size={15} /> AI GENERATED
                      </span>
                    </div>
                    <h2
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}
                    >
                      {report.title}
                    </h2>
                    <div className="font-mono text-[13px] mt-1" style={{ color: 'var(--bp-text-dim)' }}>
                      {report.country} // {report.date}{report.dateEnd ? ` — ${report.dateEnd}` : ''}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={handleGenerate}
                      className="flex items-center gap-1.5 px-3 py-2 font-mono text-[13px] uppercase"
                      style={{ border: '1px solid var(--bp-border)', color: 'var(--bp-text)', background: 'var(--bp-surface)' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <RefreshCw size={13} /> REGENERATE
                    </motion.button>
                    <motion.button
                      onClick={handleSave}
                      disabled={saved}
                      className="flex items-center gap-1.5 px-4 py-2 font-mono text-[13px] uppercase"
                      style={{
                        background: saved ? 'rgba(48, 152, 80, 0.2)' : 'rgba(58,143,200,0.2)',
                        border: `1px solid ${saved ? 'var(--bp-stamp-green)' : 'var(--bp-accent)'}`,
                        color: saved ? 'var(--bp-stamp-green)' : 'var(--bp-highlight)',
                      }}
                      whileHover={!saved ? { scale: 1.02 } : {}}
                    >
                      {saved ? <CheckCircle size={13} /> : <Save size={13} />}
                      {saved ? 'SAVED!' : 'SAVE TO ARCHIVE'}
                    </motion.button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {report.tags?.map(tag => (
                    <TagBadge key={tag} tag={tag} size="md" />
                  ))}
                </div>
              </div>

              {/* Report content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 space-y-5">
                  {/* Description */}
                  <ReportSection icon={null} title="档案摘要" titleEn="ABSTRACT">
                    <p
                      className="leading-relaxed"
                      style={{ color: 'var(--bp-text-bright)', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {report.description}
                    </p>
                  </ReportSection>

                  {/* Timeline */}
                  {report.timeline?.length > 0 && (
                    <ReportSection icon={<Clock size={15} />} title="历史时间线" titleEn="TIMELINE">
                      <Timeline entries={report.timeline} />
                    </ReportSection>
                  )}

                  {/* Analysis */}
                  {report.analysis && (
                    <ReportSection icon={<BookMarked size={15} />} title="历史分析" titleEn="ANALYSIS">
                      <p
                        className="leading-relaxed whitespace-pre-line"
                        style={{ color: 'var(--bp-text-bright)', fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {report.analysis}
                      </p>
                    </ReportSection>
                  )}
                </div>

                <div className="space-y-5">
                  {/* Key Events */}
                  {report.keyEvents?.length > 0 && (
                    <ReportSection icon={null} title="重大事件" titleEn="KEY EVENTS">
                      <ul className="space-y-2">
                        {report.keyEvents.map((ev, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="font-mono text-[16px] shrink-0 mt-0.5" style={{ color: 'var(--bp-accent)' }}>
                              ◆
                            </span>
                            <span className="font-mono text-[13px] leading-relaxed" style={{ color: 'var(--bp-text)' }}>
                              {ev}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </ReportSection>
                  )}

                  {/* Key Figures */}
                  {report.keyFigures?.length > 0 && (
                    <ReportSection icon={<User2 size={15} />} title="关键人物" titleEn="KEY FIGURES">
                      <div className="space-y-2">
                        {report.keyFigures.map((p, i) => (
                          <div
                            key={i}
                            className="relative p-2"
                            style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,10,20,0.4)' }}
                          >
                            <div className="font-mono text-[13px]" style={{ color: 'var(--bp-text-bright)' }}>
                              {p.name}
                            </div>
                            <div className="font-mono text-[16px]" style={{ color: 'var(--bp-accent)' }}>
                              {p.role}
                            </div>
                            {p.period && (
                              <div className="font-mono text-[15px]" style={{ color: 'var(--bp-text-dim)' }}>
                                {p.period}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </ReportSection>
                  )}

                  {/* References */}
                  {report.references?.length > 0 && (
                    <ReportSection icon={null} title="参考资料" titleEn="REFERENCES">
                      <ul className="space-y-1">
                        {report.references.map((ref, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="font-mono text-[15px] shrink-0" style={{ color: 'var(--bp-accent)' }}>
                              [{i + 1}]
                            </span>
                            <span className="font-mono text-[16px] leading-relaxed" style={{ color: 'var(--bp-text)' }}>
                              {ref}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </ReportSection>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ReportSection({
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
    <div
      className="relative p-4"
      style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,15,30,0.5)' }}
    >
      <BlueprintCorners size={6} />
      <div
        className="flex items-center gap-2 mb-3 pb-2"
        style={{ borderBottom: '1px solid var(--bp-border)' }}
      >
        {icon && <span style={{ color: 'var(--bp-accent)' }}>{icon}</span>}
        <span className="font-mono text-[13px] tracking-wider" style={{ color: 'var(--bp-text-bright)' }}>
          {title}
        </span>
        {titleEn && (
          <span className="font-mono text-[15px] opacity-50" style={{ color: 'var(--bp-text-dim)' }}>
            / {titleEn}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
