interface Props {
  tag: string;
  active?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
}

export function TagBadge({ tag, active = false, onClick, size = 'sm' }: Props) {
  const base =
    'inline-flex items-center gap-1 font-mono border transition-all duration-150 select-none';
  const sz = size === 'sm' ? 'px-2 py-0.5 text-[13px]' : 'px-3 py-1 text-xs';
  const style = active
    ? 'border-[var(--bp-highlight)] bg-[var(--bp-highlight)]/15 text-[var(--bp-highlight)] cursor-pointer'
    : onClick
    ? 'border-[var(--bp-border)] text-[var(--bp-text)] cursor-pointer hover:border-[var(--bp-accent)] hover:text-[var(--bp-text-bright)]'
    : 'border-[var(--bp-border)] text-[var(--bp-text-dim)]';

  return (
    <span className={`${base} ${sz} ${style}`} onClick={onClick}>
      {active && <span className="text-[15px] opacity-60"># </span>}
      {tag}
    </span>
  );
}
