import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getSettings, saveSettings } from '../store/archiveStore';
import { ArchiveSettings } from '../types';
import { BlueprintCorners } from '../components/BlueprintCorner';
import { Settings, Key, Globe, Cpu, Check, Eye, EyeOff, AlertTriangle } from 'lucide-react';

const MODELS = [
  { value: 'qwen-max', label: 'Qwen Max（最强，推荐）' },
  { value: 'qwen-plus', label: 'Qwen Plus（均衡）' },
  { value: 'qwen-turbo', label: 'Qwen Turbo（快速）' },
  { value: 'qwen-long', label: 'Qwen Long（长文本）' },
];

export function SettingsPage() {
  const [settings, setSettings] = useState<ArchiveSettings>({
    apiKey: '',
    apiEndpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    apiModel: 'qwen-max',
  });
  const [saved, setSaved] = useState(false);
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const handleSave = () => {
    saveSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(0,10,20,0.5)',
    border: '1px solid var(--bp-border)',
    color: 'var(--bp-text-bright)',
    fontFamily: 'Space Mono, monospace',
    fontSize: '15px',
    padding: '10px 12px',
    outline: 'none',
    caretColor: 'var(--bp-highlight)',
  };

  return (
    <div className="min-h-screen pt-[74px]">
      <div
        className="px-8 pt-8 pb-6"
        style={{ background: 'rgba(0,20,40,0.7)', borderBottom: '1px solid var(--bp-border)' }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Settings size={24} style={{ color: 'var(--bp-accent)' }} />
          <div className="font-mono text-[16px] tracking-[0.3em] uppercase" style={{ color: 'var(--bp-text-dim)' }}>
            SYSTEM CONFIGURATION
          </div>
        </div>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}>
          系统设置
        </h1>
      </div>

      <div className="px-8 py-6 max-w-2xl mx-auto">
        {/* AI API Section */}
        <motion.div
          className="relative p-5 mb-6"
          style={{ border: '1px solid var(--bp-border)', background: 'var(--bp-surface)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <BlueprintCorners size={15} />

          <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid var(--bp-border)' }}>
            <Cpu size={16} style={{ color: 'var(--bp-accent)' }} />
            <span className="font-mono text-[13px] tracking-wider uppercase" style={{ color: 'var(--bp-text-bright)' }}>
              AI ENGINE CONFIGURATION
            </span>
          </div>

          {/* Warning */}
          {!settings.apiKey && (
            <div
              className="flex items-start gap-2 p-3 mb-4"
              style={{ border: '1px solid rgba(200, 168, 64, 0.3)', background: 'rgba(200,168,64,0.06)' }}
            >
              <AlertTriangle size={16} style={{ color: 'var(--bp-gold)', marginTop: 1, flexShrink: 0 }} />
              <div>
                <div className="font-mono text-[13px]" style={{ color: 'var(--bp-gold)' }}>
                  API 密钥未配置
                </div>
                <div className="font-mono text-[16px] mt-0.5" style={{ color: 'var(--bp-text-dim)' }}>
                  未配置 API 密钥时，AI 报告功能将使用模拟数据展示。配置密钥后可使用真实 AI 生成功能。
                </div>
              </div>
            </div>
          )}

          {/* API Key */}
          <div className="mb-4">
            <label
              className="block font-mono text-[16px] tracking-widest uppercase mb-1"
              style={{ color: 'var(--bp-text-dim)' }}
            >
              <Key size={15} className="inline mr-1" />
              API KEY
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                placeholder="sk-xxxxxxxxxxxxxxxx"
                value={settings.apiKey}
                onChange={e => setSettings({ ...settings, apiKey: e.target.value })}
                style={{ ...inputStyle, paddingRight: 40 }}
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--bp-text-dim)' }}
              >
                {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="font-mono text-[16px] mt-1" style={{ color: 'var(--bp-text-dim)' }}>
              通义千问 DashScope API 密钥，在阿里云 DashScope 控制台获取
            </div>
          </div>

          {/* API Endpoint */}
          <div className="mb-4">
            <label
              className="block font-mono text-[16px] tracking-widest uppercase mb-1"
              style={{ color: 'var(--bp-text-dim)' }}
            >
              <Globe size={15} className="inline mr-1" />
              API ENDPOINT
            </label>
            <input
              type="text"
              value={settings.apiEndpoint}
              onChange={e => setSettings({ ...settings, apiEndpoint: e.target.value })}
              style={inputStyle}
            />
            <div className="font-mono text-[16px] mt-1" style={{ color: 'var(--bp-text-dim)' }}>
              本地开发会自动通过 Vite 代理绕过 CORS。生产环境请填入支持跨域访问的代理地址（如 Cloudflare Worker），否则浏览器会被 CORS 阻断。
            </div>
          </div>

          {/* Model */}
          <div className="mb-4">
            <label
              className="block font-mono text-[16px] tracking-widest uppercase mb-1"
              style={{ color: 'var(--bp-text-dim)' }}
            >
              <Cpu size={15} className="inline mr-1" />
              AI MODEL
            </label>
            <select
              value={settings.apiModel}
              onChange={e => setSettings({ ...settings, apiModel: e.target.value })}
              style={{ ...inputStyle }}
            >
              {MODELS.map(m => (
                <option key={m.value} value={m.value} style={{ background: '#001428' }}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="relative p-5 mb-6"
          style={{ border: '1px solid var(--bp-border)', background: 'rgba(0,15,30,0.5)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <BlueprintCorners size={6} />
          <div className="font-mono text-[16px] tracking-widest uppercase mb-3" style={{ color: 'var(--bp-text-dim)' }}>
            ABOUT // SYSTEM INFO
          </div>
          {[
            { label: 'SYSTEM', value: 'Historical Archive System v1.0' },
            { label: 'EDITION', value: 'Blueprint Engineering Edition' },
            { label: 'STACK', value: 'React + Tailwind CSS v4 + Motion' },
            { label: 'STORAGE', value: 'localStorage (Browser)' },
            { label: 'AI ENGINE', value: '通义千问 DashScope API' },
          ].map(item => (
            <div
              key={item.label}
              className="flex justify-between py-2"
              style={{ borderBottom: '1px solid rgba(58,143,200,0.08)' }}
            >
              <span className="font-mono text-[16px]" style={{ color: 'var(--bp-text-dim)' }}>{item.label}</span>
              <span className="font-mono text-[16px]" style={{ color: 'var(--bp-text)' }}>{item.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Save button */}
        <motion.button
          onClick={handleSave}
          className="w-full flex items-center justify-center gap-2 py-3 font-mono text-[15px] tracking-wider uppercase"
          style={{
            background: saved ? 'rgba(48,152,80,0.2)' : 'rgba(58,143,200,0.15)',
            border: `1px solid ${saved ? 'var(--bp-stamp-green)' : 'var(--bp-accent)'}`,
            color: saved ? 'var(--bp-stamp-green)' : 'var(--bp-highlight)',
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {saved ? <Check size={16} /> : <Settings size={16} />}
          {saved ? 'SETTINGS SAVED' : 'SAVE SETTINGS'}
        </motion.button>
      </div>
    </div>
  );
}
