interface Props {
  size?: number;
  className?: string;
}

export function BlueprintCorners({ size = 10, className = '' }: Props) {
  const s = size;
  return (
    <>
      <span
        className={`absolute top-0 left-0 pointer-events-none ${className}`}
        style={{
          width: s, height: s,
          borderTop: '1px solid var(--bp-border-bright)',
          borderLeft: '1px solid var(--bp-border-bright)',
        }}
      />
      <span
        className={`absolute top-0 right-0 pointer-events-none ${className}`}
        style={{
          width: s, height: s,
          borderTop: '1px solid var(--bp-border-bright)',
          borderRight: '1px solid var(--bp-border-bright)',
        }}
      />
      <span
        className={`absolute bottom-0 left-0 pointer-events-none ${className}`}
        style={{
          width: s, height: s,
          borderBottom: '1px solid var(--bp-border-bright)',
          borderLeft: '1px solid var(--bp-border-bright)',
        }}
      />
      <span
        className={`absolute bottom-0 right-0 pointer-events-none ${className}`}
        style={{
          width: s, height: s,
          borderBottom: '1px solid var(--bp-border-bright)',
          borderRight: '1px solid var(--bp-border-bright)',
        }}
      />
    </>
  );
}
