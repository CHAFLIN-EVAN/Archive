interface Props {
  title: string;
  titleEn?: string;
  subtitle?: string;
  count?: number;
  action?: React.ReactNode;
}

export function SectionHeader({ title, titleEn, subtitle, count, action }: Props) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-4">
        {/* Blueprint marker */}
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 relative"
            style={{
              border: '1px solid var(--bp-accent)',
              background: 'rgba(58,143,200,0.1)',
            }}
          >
            <div
              className="absolute inset-0.5"
              style={{ background: 'var(--bp-accent)', opacity: 0.4 }}
            />
          </div>
          <div
            className="h-px w-6"
            style={{ background: 'linear-gradient(90deg, var(--bp-accent), transparent)' }}
          />
        </div>

        <div>
          <div className="flex items-baseline gap-3">
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--bp-white)' }}>
              {title}
            </h2>
            {titleEn && (
              <span
                className="font-mono text-[13px] tracking-widest uppercase"
                style={{ color: 'var(--bp-text-dim)' }}
              >
                {titleEn}
              </span>
            )}
            {count !== undefined && (
              <span
                className="font-mono text-[13px] px-2 py-0.5"
                style={{
                  border: '1px solid var(--bp-border)',
                  color: 'var(--bp-text)',
                }}
              >
                {count.toString().padStart(3, '0')} REC
              </span>
            )}
          </div>
          {subtitle && (
            <p className="font-mono text-[13px] mt-0.5" style={{ color: 'var(--bp-text-dim)' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}
