import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

interface SnapRect {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
}

const SPRING = { stiffness: 700, damping: 38, mass: 0.08 };
const SNAP_SPRING = { stiffness: 300, damping: 30, mass: 0.2 };
const SNAP_THRESHOLD = 56;

export function BlueprintCursor() {
  // 手机端 / 触屏设备不渲染自定义光标
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch =
        window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window;
      setIsTouchDevice(isTouch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  const lineX = useSpring(rawX, SPRING);
  const lineY = useSpring(rawY, SPRING);

  const snapX = useSpring(rawX, SNAP_SPRING);
  const snapY = useSpring(rawY, SNAP_SPRING);
  const snapW = useSpring(0, SNAP_SPRING);
  const snapH = useSpring(0, SNAP_SPRING);

  const [snap, setSnap] = useState<SnapRect | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const prevSnapId = useRef<string>('');

  useEffect(() => {
    // 触屏设备跳过鼠标事件绑定
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      rawX.set(x);
      rawY.set(y);
      setCoords({ x, y });
      if (!visible) setVisible(true);

      // Snap detection
      const els = document.querySelectorAll<HTMLElement>('[data-bp-snappable]');
      let best: SnapRect | null = null;
      let minDist = SNAP_THRESHOLD;

      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        const dx = Math.max(r.left - x, 0, x - r.right);
        const dy = Math.max(r.top - y, 0, y - r.bottom);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          best = {
            x: r.left,
            y: r.top,
            width: r.width,
            height: r.height,
            label: el.getAttribute('data-bp-label') || '',
          };
        }
      });

      const id = best ? `${Math.round(best.x)},${Math.round(best.y)},${Math.round(best.width)},${Math.round(best.height)}` : '';
      if (id !== prevSnapId.current) {
        prevSnapId.current = id;
        setSnap(best);
        if (best) {
          snapX.set(best.x);
          snapY.set(best.y);
          snapW.set(best.width);
          snapH.set(best.height);
        }
      } else if (best) {
        // Keep springs updated if element scrolls/resizes
        snapX.set(best.x);
        snapY.set(best.y);
        snapW.set(best.width);
        snapH.set(best.height);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible, isTouchDevice]);

  if (isTouchDevice || !visible) return null;

  const isSnapped = snap !== null;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`html, html * { cursor: none !important; }`}</style>

      {/* ── Full-screen crosshair lines ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 9998 }}>
        {/* Vertical line */}
        <motion.div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: lineX }}
          animate={{ opacity: isSnapped ? 0.18 : 0.55 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, transparent 0%, var(--bp-highlight) 20%, var(--bp-highlight) 80%, transparent 100%)',
            boxShadow: '0 0 6px rgba(96,180,255,0.3)',
          }} />
        </motion.div>

        {/* Horizontal line */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ top: lineY }}
          animate={{ opacity: isSnapped ? 0.18 : 0.55 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, transparent 0%, var(--bp-highlight) 20%, var(--bp-highlight) 80%, transparent 100%)',
            boxShadow: '0 0 6px rgba(96,180,255,0.3)',
          }} />
        </motion.div>

        {/* Axis tick marks on vertical line */}
        {!isSnapped && [0.1, 0.25, 0.5, 0.75, 0.9].map((pct, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{ left: lineX, top: `${pct * 100}vh`, width: 6, marginLeft: -3 }}
          >
            <div style={{ width: '100%', height: '100%', background: 'var(--bp-accent)', opacity: 0.4 }} />
          </motion.div>
        ))}

        {/* Axis tick marks on horizontal line */}
        {!isSnapped && [0.1, 0.25, 0.5, 0.75, 0.9].map((pct, i) => (
          <motion.div
            key={i}
            className="absolute w-px"
            style={{ top: lineY, left: `${pct * 100}vw`, height: 6, marginTop: -3 }}
          >
            <div style={{ width: '100%', height: '100%', background: 'var(--bp-accent)', opacity: 0.4 }} />
          </motion.div>
        ))}

        {/* Center crosshair diamond */}
        <motion.div
          className="absolute"
          style={{
            left: lineX,
            top: lineY,
            width: 8,
            height: 8,
            marginLeft: -4,
            marginTop: -4,
            backgroundColor: 'var(--bp-highlight)',
            rotate: 45,
          }}
          animate={{
            scale: isSnapped ? 0 : 1,
            opacity: isSnapped ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />

        {/* Coordinate readout */}
        <AnimatePresence>
          {!isSnapped && (
            <motion.div
              className="absolute font-mono pointer-events-none select-none"
              style={{
                left: coords.x + 14,
                top: coords.y - 22,
                fontSize: 12,
                color: 'var(--bp-text-dim)',
                letterSpacing: '0.1em',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
            >
              {`X:${Math.round(coords.x).toString().padStart(4, '0')} Y:${Math.round(coords.y).toString().padStart(4, '0')}`}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Snap selection box ── */}
      <AnimatePresence>
        {isSnapped && (
          <motion.div
            className="fixed pointer-events-none"
            style={{
              left: snapX,
              top: snapY,
              width: snapW,
              height: snapH,
              zIndex: 9999,
            }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            {/* Dashed selection border */}
            <div
              className="absolute inset-0"
              style={{
                border: '1px dashed rgba(96,180,255,0.7)',
                boxShadow: '0 0 0 1px rgba(96,180,255,0.08), inset 0 0 20px rgba(96,180,255,0.04)',
              }}
            />

            {/* Animated dash offset */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ pointerEvents: 'none' }}
            >
              <motion.rect
                x={0} y={0}
                width="100%"
                height="100%"
                fill="none"
                stroke="rgba(96,180,255,0.4)"
                strokeWidth={1}
                strokeDasharray="6 4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
              />
            </svg>

            {/* Corner markers — L-shaped blueprint corners */}
            {[
              { top: -1, left: -1, borderTop: true, borderLeft: true },
              { top: -1, right: -1, borderTop: true, borderRight: true },
              { bottom: -1, left: -1, borderBottom: true, borderLeft: true },
              { bottom: -1, right: -1, borderBottom: true, borderRight: true },
            ].map((corner, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: 12,
                  height: 12,
                  top: corner.top,
                  left: corner.left,
                  right: (corner as any).right,
                  bottom: (corner as any).bottom,
                  borderTop: corner.borderTop ? '2px solid var(--bp-highlight)' : undefined,
                  borderLeft: corner.borderLeft ? '2px solid var(--bp-highlight)' : undefined,
                  borderBottom: corner.borderBottom ? '2px solid var(--bp-highlight)' : undefined,
                  borderRight: corner.borderRight ? '2px solid var(--bp-highlight)' : undefined,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05, duration: 0.1 }}
              />
            ))}

            {/* Dimension label */}
            <motion.div
              className="absolute font-mono select-none"
              style={{
                bottom: -18,
                left: 0,
                fontSize: 12,
                color: 'var(--bp-accent)',
                letterSpacing: '0.12em',
                whiteSpace: 'nowrap',
              }}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              {snap && `${Math.round(snap.width)} × ${Math.round(snap.height)}px`}
              {snap?.label && <span style={{ color: 'var(--bp-text-dim)', marginLeft: 8 }}>{snap.label}</span>}
            </motion.div>

            {/* Top label */}
            <motion.div
              className="absolute font-mono select-none"
              style={{
                top: -18,
                right: 0,
                fontSize: 12,
                color: 'var(--bp-text-dim)',
                letterSpacing: '0.1em',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.08 }}
            >
              SELECTED
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
