import { useEffect, useRef } from 'react';

// 字符集：英数字符号 + 少量汉字（营造"档案 / 机密"氛围）
const CHARS_EN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*+=<>?/\\|[]{}';
const CHARS_ZH = '历史档案机密系统数据文献记录索引蓝图分类研究编号卷宗绝密classified';
const FONT_SIZE = 15;
const COLOR_RGB = '96, 180, 255'; // var(--bp-highlight) 的 RGB
const BG_RGB = '0, 20, 40';       // 接近 var(--bp-bg) #001428
const FADE_ALPHA = 0.08;          // 每帧淡出速度（越小拖尾越长）
const HEAD_ALPHA = 0.18;          // 头部字符透明度（轻微点缀）

interface Column {
  active: boolean;
  y: number;
  speed: number;
  char: string;
  delay: number; // 剩余延迟帧数
}

function randomChar(): string {
  const useZh = Math.random() < 0.15;
  const chars = useZh ? CHARS_ZH : CHARS_EN;
  return chars[Math.floor(Math.random() * chars.length)];
}

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // 无障碍：用户若要求减少动画，则完全禁用
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mq.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener('change', onMotionChange);

    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion.current) {
      return () => mq.removeEventListener('change', onMotionChange);
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let columns: Column[] = [];
    let width = 0;
    let height = 0;
    let colWidth = 20;
    let activationChance = 0.02; // 每帧每非活跃列重新激活的概率

    const getConfig = () => {
      const isMobile = window.innerWidth < 768;
      return {
        colWidth: isMobile ? 32 : 20,
        activationChance: isMobile ? 0.008 : 0.02,
      };
    };

    const initColumns = (colCount: number) => {
      columns = Array.from({ length: colCount }, () => ({
        active: false,
        y: 0,
        speed: 0.4 + Math.random() * 1.2,
        char: randomChar(),
        delay: Math.floor(Math.random() * 240), // 初始随机错开
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cfg = getConfig();
      colWidth = cfg.colWidth;
      activationChance = cfg.activationChance;

      // 背景填充，避免首帧透明
      ctx.fillStyle = '#001428';
      ctx.fillRect(0, 0, width, height);

      const colCount = Math.floor(width / colWidth);
      initColumns(colCount);
    };

    const draw = () => {
      if (prefersReducedMotion.current) {
        // 清屏并停止
        ctx.fillStyle = '#001428';
        ctx.fillRect(0, 0, width, height);
        return;
      }

      // 半透明背景覆盖 —— 让老字符逐渐淡出
      ctx.fillStyle = `rgba(${BG_RGB}, ${FADE_ALPHA})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${FONT_SIZE}px "Space Mono", ui-monospace, monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];

        if (!col.active) {
          // 随机激活
          if (col.delay > 0) {
            col.delay--;
          } else if (Math.random() < activationChance) {
            col.active = true;
            col.y = height + 10; // 从底部开始
            col.speed = 0.4 + Math.random() * 1.2;
            col.char = randomChar();
          }
          continue;
        }

        col.y -= col.speed;
        // 每帧刷新字符（形成"代码流动"感）
        if (Math.random() < 0.4) {
          col.char = randomChar();
        }

        // 头部字符（最亮）
        ctx.fillStyle = `rgba(${COLOR_RGB}, ${HEAD_ALPHA})`;
        ctx.fillText(col.char, i * colWidth + 3, col.y);

        // 稍微拖尾：在头部下方 1 个字符位置画一个较亮的"高光"字符
        ctx.fillStyle = `rgba(${COLOR_RGB}, ${HEAD_ALPHA * 0.5})`;
        ctx.fillText(col.char, i * colWidth + 3, col.y + FONT_SIZE);

        // 超出顶部：去激活，随机延迟后从底部重新出现
        if (col.y < -FONT_SIZE * 2) {
          col.active = false;
          col.delay = Math.floor(60 + Math.random() * 300); // 1-6 秒 @60fps
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      mq.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 100 }}
    />
  );
}
