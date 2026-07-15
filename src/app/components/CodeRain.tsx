import { useEffect, useRef } from 'react';

/* ── 历史字符集 ── */
const HIST_CHARS = (
  // 朝代
  '夏商周秦汉晋隋唐宋元明清' +
  // 天干地支
  '甲乙丙丁戊己庚辛壬癸' +
  '子丑寅卯辰巳午未申酉戌亥' +
  // 历史关键词
  '帝王将相诸侯争霸春秋战国' +
  '焚书坑儒丝路赤壁贞观' +
  '安史靖康崖山郑和土木' +
  '甲午辛亥革命维新变法' +
  // 档案氛围
  '机密绝密档案文献卷宗' +
  '编号分类索引记录密令' +
  // 数字
  '一二三四五六七八九十百千万'
).split('');

/* ── 常量 ── */
const FONT_SIZE = 16;
const TRAIL_LENGTH = 4;           // 短拖尾：4 个字符
const HEAD_ALPHA = 0.55;          // 中等透明度
const MOUSE_RADIUS = 100;         // 鼠标影响半径
const MOUSE_FORCE = 3;            // 鼠标推力系数
const COLOR = { r: 96, g: 180, b: 255 }; // --bp-highlight 的 RGB

/* ── 数据结构 ── */
interface Drop {
  chars: string[];    // 拖尾字符队列
  y: number;          // 头部 y 坐标
  speed: number;      // 基础速度
  active: boolean;
  delay: number;      // 未激活时的剩余等待帧
}

function randChar(): string {
  return HIST_CHARS[Math.floor(Math.random() * HIST_CHARS.length)];
}

function makeDrop(x: number, canvasH: number, initial: boolean): Drop {
  return {
    chars: Array.from({ length: TRAIL_LENGTH }, () => randChar()),
    y: initial ? Math.random() * canvasH : canvasH + FONT_SIZE * TRAIL_LENGTH + Math.random() * 120,
    speed: 0.6 + Math.random() * 1.4,
    active: true,
    delay: 0,
  };
}

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const reducedMotion = useRef(false);

  useEffect(() => {
    /* ── 无障碍：减少动画偏好 ── */
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion.current = mq.matches;
    const onMotion = (e: MediaQueryListEvent) => { reducedMotion.current = e.matches; };
    mq.addEventListener('change', onMotion);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let drops: Drop[] = [];
    let colW = 24;
    let W = 0, H = 0;

    /* ── 初始化 / 重置列 ── */
    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = W < 768;
      colW = isMobile ? 36 : 24;

      const count = Math.floor(W / colW);
      drops = Array.from({ length: count }, (_, i) => {
        const d = makeDrop(i * colW, H, true);
        // 首帧就激活，均匀分布
        d.y = Math.random() * (H + 200) - 100;
        return d;
      });
    };

    /* ── 鼠标追踪 ── */
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    /* ── 绘制循环 ── */
    const draw = () => {
      if (reducedMotion.current) {
        ctx.clearRect(0, 0, W, H);
        return;
      }

      // 清屏（不拖影，由字符队列自身形成拖尾）
      ctx.clearRect(0, 0, W, H);
      ctx.font = `${FONT_SIZE}px "Space Mono", ui-monospace, monospace`;
      ctx.textBaseline = 'top';

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const baseX = i * colW + 4;

        /* ── 非活跃列：倒计时后重新激活 ── */
        if (!drop.active) {
          drop.delay--;
          if (drop.delay <= 0) {
            drops[i] = makeDrop(baseX, H, false);
          }
          continue;
        }

        /* ── 移动（从下往上） ── */
        let dy = drop.speed;

        // 鼠标交互：附近的字符被推开 / 加速
        const headScreenY = drop.y;
        const dxm = baseX - mx;
        const dym = headScreenY - my;
        const dist = Math.sqrt(dxm * dxm + dym * dym);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const factor = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          dy += factor * 2; // 加速远离
        }

        drop.y -= dy;

        /* ── 刷新字符（流动感） ── */
        if (Math.random() < 0.3) {
          drop.chars[Math.floor(Math.random() * drop.chars.length)] = randChar();
        }

        /* ── 绘制拖尾字符 ── */
        for (let t = 0; t < drop.chars.length; t++) {
          const charY = drop.y + t * FONT_SIZE;

          // 超出屏幕顶部则跳过
          if (charY < -FONT_SIZE || charY > H + FONT_SIZE) continue;

          // 透明度渐变：头部最亮，尾部渐隐
          const fadeRatio = 1 - t / drop.chars.length;
          const alpha = HEAD_ALPHA * fadeRatio * fadeRatio; // 二次衰减更自然

          if (alpha < 0.01) continue;

          // 头部字符额外加亮
          if (t === 0) {
            ctx.fillStyle = `rgba(168, 216, 240, ${HEAD_ALPHA})`; // --bp-text-bright
          } else {
            ctx.fillStyle = `rgba(${COLOR.r}, ${COLOR.g}, ${COLOR.b}, ${alpha})`;
          }

          ctx.fillText(drop.chars[t], baseX, charY);
        }

        /* ── 超出屏幕顶部 → 去激活 ── */
        if (drop.y < -FONT_SIZE * (TRAIL_LENGTH + 1)) {
          drop.active = false;
          drop.delay = Math.floor(30 + Math.random() * 180); // 0.5~3.5 秒后重生
        }
      }

      raf = requestAnimationFrame(draw);
    };

    init();
    window.addEventListener('resize', init);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('mouseleave', onMouseLeave);
      mq.removeEventListener('change', onMotion);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
