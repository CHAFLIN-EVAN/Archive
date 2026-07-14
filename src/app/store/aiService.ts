import { ArchiveReport, TimelineEntry, KeyFigure } from '../types';
import { getSettings } from './archiveStore';

const REPORT_PROMPT = (query: string) => `你是一位专业的历史学家和档案管理员。请为以下历史学习请求生成一份详尽的历史档案报告。

学习请求：${query}

请严格按照以下JSON格式输出（不要添加任何多余文字，只输出JSON）：
{
  "title": "档案标题（简洁有力）",
  "subject": "档案主题描述",
  "country": "相关国家/地区（中文）",
  "countryCode": "国家代码（如cn/fr/de/us/uk/ru/jp/roman等）",
  "category": "档案分类（chinese-history/world-history/period/biography/event之一）",
  "date": "起始年份（如1789年或前221年）",
  "dateEnd": "结束年份（可选）",
  "description": "200字以内的档案摘要",
  "timeline": [
    {"year": "年份", "event": "事件名称", "significance": "历史意义"}
  ],
  "keyEvents": ["重大事件1", "重大事件2"],
  "keyFigures": [
    {
      "name": "姓名",
      "role": "职务/角色",
      "period": "生卒年",
      "description": "100字以内的人物简介，说明其历史地位和主要贡献",
      "faction": "所属阵营或政治派别（如有）",
      "relations": [
        {"targetName": "关联人物姓名（必须是keyFigures中的其他人）", "type": "关系类型（ally/enemy/subordinate/superior/rival/colleague/family之一）", "label": "简短关系描述（2-4字）"}
      ]
    }
  ],
  "analysis": "500字以上的深度历史分析，包含背景、过程、影响和历史评价",
  "references": ["参考资料1", "参考资料2"],
  "tags": ["标签1", "标签2", "标签3"]
}`;

function parseMockReport(query: string): ArchiveReport {
  const isChinese = /中国|中华|汉|唐|宋|明|清|秦|毛泽东|孙中山/.test(query);

  return {
    title: `关于「${query}」的历史档案`,
    subject: query,
    country: isChinese ? '中国' : '世界',
    countryCode: isChinese ? 'cn' : 'de',
    category: isChinese ? 'chinese-history' : 'world-history',
    date: '待确认',
    description: `这是一份关于「${query}」的历史研究报告。请配置有效的通义千问 API 密钥（前往设置页面）以获取由 AI 自动生成的详尽历史档案。`,
    timeline: [
      { year: '—', event: '请配置 API 密钥以自动生成时间线', significance: '需要 AI 支持' },
    ] as TimelineEntry[],
    keyEvents: ['配置 API 密钥后将自动生成重大事件列表'],
    keyFigures: [
      { name: '待生成', role: '配置 API 密钥后自动填充', period: '—' },
    ] as KeyFigure[],
    analysis: `本系统尚未配置 AI API 密钥，无法自动生成「${query}」的详细历史分析报告。\n\n请前往【设置】页面，输入您的通义千问 API 密钥，即可享受 AI 驱动的智能历史研究功能：\n\n• 自动生成详细时间线\n• 深度历史背景分析\n• 关键人物档案整理\n• 历史影响评估\n• 权威参考资料整合\n\n配置完成后，您只需在报告页面输入学习需求，系统将在几秒内为您生成完整的历史档案报告。`,
    references: ['请配置 API 密钥后自动生成'],
    tags: [query, isChinese ? '中国史' : '世界史', '待完善'],
  };
}

// In development the Vite server proxies /dashscope-proxy/* → dashscope.aliyuncs.com/*
// to bypass CORS. In production the user configures a proxy URL in settings, or the
// request goes directly to DashScope if their endpoint already handles CORS.
function resolveEndpoint(configured: string): string {
  if (import.meta.env.DEV) {
    return configured.replace(
      'https://dashscope.aliyuncs.com',
      '/dashscope-proxy'
    );
  }
  return configured;
}

export async function generateHistoricalReport(
  query: string,
  onChunk?: (partial: string) => void
): Promise<ArchiveReport> {
  const settings = getSettings();

  // No key configured — return placeholder immediately, no network call.
  if (!settings.apiKey || settings.apiKey.length < 10) {
    await new Promise(r => setTimeout(r, 600));
    return parseMockReport(query);
  }

  const endpoint = resolveEndpoint(settings.apiEndpoint);
  const prompt = REPORT_PROMPT(query);
  const streaming = !!onChunk;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${settings.apiKey}`,
      ...(streaming ? { 'Accept': 'text/event-stream' } : {}),
    },
    body: JSON.stringify({
      model: settings.apiModel || 'qwen-max',
      max_tokens: 4096,
      stream: streaming,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`API ${response.status}: ${body || response.statusText}`);
  }

  if (streaming && response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      for (const line of chunk.split('\n')) {
        if (!line.startsWith('data: ')) continue;
        const payload = line.slice(6).trim();
        if (payload === '[DONE]') continue;
        try {
          const data = JSON.parse(payload);
          const delta = data.choices?.[0]?.delta?.content;
          if (delta) {
            fullText += delta;
            onChunk(fullText);
          }
        } catch {}
      }
    }

    const jsonMatch = fullText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI 返回内容中未找到 JSON 数据');
    return JSON.parse(jsonMatch[0]) as ArchiveReport;
  }

  const data = await response.json();
  const text: string = data.choices?.[0]?.message?.content || '';
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('AI 返回内容中未找到 JSON 数据');
  return JSON.parse(jsonMatch[0]) as ArchiveReport;
}
