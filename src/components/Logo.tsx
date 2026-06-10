/**
 * EAA Navigator logo: a compass-rose mark (cyan north needle) + the
 * "EAA Navigator" wordmark in the display font (Spectral). The
 * navigation/wayfinding metaphor — finding your way to accessibility
 * compliance — not a wheelchair/universal-access cliché.
 */

const SIZES = {
  sm: { mark: 24, text: 'text-base' },
  md: { mark: 30, text: 'text-lg' },
  lg: { mark: 40, text: 'text-2xl' }
} as const;

export function CompassMark({
  size = 30,
  tone = 'light'
}: {
  size?: number;
  tone?: 'light' | 'dark';
}) {
  // tone 'light' = on a light surface (indigo/ink strokes); 'dark' = on a dark surface (paper strokes)
  const ring = tone === 'dark' ? '#FBFCFE' : '#1E1B4B';
  const needleSouth = tone === 'dark' ? 'rgba(251,252,254,0.55)' : '#4338CA';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="24" cy="24" r="21" stroke={ring} strokeWidth="2" opacity="0.85" />
      <circle cx="24" cy="24" r="14" stroke={ring} strokeWidth="1" opacity="0.4" />
      {/* North needle in cyan */}
      <path d="M24 4 L29 24 L24 22 L19 24 Z" fill="#06B6D4" />
      {/* South needle */}
      <path d="M24 44 L29 24 L24 26 L19 24 Z" fill={needleSouth} />
      {/* East / West subtle */}
      <path d="M44 24 L24 29 L26 24 L24 19 Z" fill={ring} opacity="0.45" />
      <path d="M4 24 L24 29 L22 24 L24 19 Z" fill={ring} opacity="0.45" />
      <circle cx="24" cy="24" r="2.4" fill="#06B6D4" />
    </svg>
  );
}

export function Logo({
  tone = 'light',
  size = 'md'
}: {
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}) {
  const s = SIZES[size];
  const textColor = tone === 'dark' ? 'text-paper' : 'text-ink';
  return (
    <span className="inline-flex items-center gap-2.5">
      <CompassMark size={s.mark} tone={tone} />
      <span className={`font-display font-semibold tracking-tight ${s.text} ${textColor}`}>
        EAA Navigator
      </span>
    </span>
  );
}
