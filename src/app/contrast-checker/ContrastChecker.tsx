'use client';

import { useId, useMemo, useState } from 'react';
import { Icon } from '@/components/ui';

/** Normalise a user-typed hex string to a clean #RRGGBB, or null if invalid. */
function normaliseHex(raw: string): string | null {
  let v = raw.trim();
  if (v.startsWith('#')) v = v.slice(1);
  v = v.toLowerCase();
  // Expand a 3-digit shorthand (e.g. "abc" -> "aabbcc").
  if (/^[0-9a-f]{3}$/.test(v)) {
    v = v
      .split('')
      .map((c) => c + c)
      .join('');
  }
  if (/^[0-9a-f]{6}$/.test(v)) return `#${v}`;
  return null;
}

/** sRGB channel (0-255) -> linearised value, per WCAG. */
function linearise(channel: number): number {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/** Relative luminance of a #RRGGBB colour, per WCAG. */
function relativeLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.2126 * linearise(r) + 0.7152 * linearise(g) + 0.0722 * linearise(b);
}

/** WCAG contrast ratio between two #RRGGBB colours (1 to 21). */
function contrastRatio(fg: string, bg: string): number {
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

type Check = { label: string; threshold: number; note: string };

const CHECKS: Check[] = [
  { label: 'AA — normal text', threshold: 4.5, note: 'Body text below 24px (or below 18.66px bold).' },
  { label: 'AA — large text', threshold: 3.0, note: 'Text 24px and up, or 18.66px and up if bold.' },
  { label: 'AAA — normal text', threshold: 7.0, note: 'The enhanced bar for body text.' },
  { label: 'AAA — large text', threshold: 4.5, note: 'The enhanced bar for large text.' },
  { label: 'UI & graphics', threshold: 3.0, note: 'Icons, borders, focus rings and other non-text elements.' }
];

function Badge({ pass }: { pass: boolean }) {
  return pass ? (
    <span className="inline-flex items-center gap-1 rounded-chip bg-low px-2.5 py-1 font-body text-xs font-semibold text-primary">
      <Icon name="check_circle" className="text-sm" />
      Pass
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-chip bg-danger px-2.5 py-1 font-body text-xs font-semibold text-paper">
      <Icon name="cancel" className="text-sm" />
      Fail
    </span>
  );
}

/** One colour control: a hex text input plus a native colour picker, kept in sync. */
function ColorControl({
  label,
  raw,
  hex,
  valid,
  onRawChange
}: {
  label: string;
  raw: string;
  hex: string;
  valid: boolean;
  onRawChange: (value: string) => void;
}) {
  const textId = useId();
  const pickerId = useId();
  const errId = useId();

  return (
    <div>
      <label htmlFor={textId} className="block font-body text-sm font-semibold text-ink">
        {label}
      </label>
      <div className="mt-2 flex items-center gap-3">
        <input
          id={pickerId}
          type="color"
          value={hex}
          aria-label={`${label} colour picker`}
          onChange={(e) => onRawChange(e.target.value)}
          className="h-11 w-12 shrink-0 cursor-pointer rounded-md border border-line bg-card p-1 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
        />
        <input
          id={textId}
          type="text"
          inputMode="text"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          value={raw}
          onChange={(e) => onRawChange(e.target.value)}
          aria-invalid={!valid}
          aria-describedby={!valid ? errId : undefined}
          placeholder="#1E1B4B"
          className="w-full rounded-md border border-line bg-card px-3 py-2.5 font-mono text-ink placeholder:text-muted focus:border-accent focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
        />
      </div>
      {!valid && (
        <p id={errId} className="mt-2 text-sm text-danger">
          That is not a valid hex colour. Use 3 or 6 hex digits, like #1E1B4B or #abc.
        </p>
      )}
    </div>
  );
}

export function ContrastChecker() {
  const [fgRaw, setFgRaw] = useState('#1E1B4B');
  const [bgRaw, setBgRaw] = useState('#FBFCFE');

  const fgHex = normaliseHex(fgRaw);
  const bgHex = normaliseHex(bgRaw);
  const fgValid = fgHex !== null;
  const bgValid = bgHex !== null;

  // Fall back to safe values so the preview never breaks on partial input.
  const safeFg = fgHex ?? '#1E1B4B';
  const safeBg = bgHex ?? '#FBFCFE';

  const ratio = useMemo(() => contrastRatio(safeFg, safeBg), [safeFg, safeBg]);
  const ratioLabel = ratio.toFixed(2);

  function swap() {
    setFgRaw(bgRaw);
    setBgRaw(fgRaw);
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Controls */}
        <div className="rounded-card border border-line bg-card p-6">
          <h3 className="font-display text-lg font-semibold text-ink">Choose your colours</h3>
          <div className="mt-5 space-y-6">
            <ColorControl
              label="Foreground / text colour"
              raw={fgRaw}
              hex={safeFg}
              valid={fgValid}
              onRawChange={setFgRaw}
            />
            <ColorControl
              label="Background colour"
              raw={bgRaw}
              hex={safeBg}
              valid={bgValid}
              onRawChange={setBgRaw}
            />
            <button
              type="button"
              onClick={swap}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md border-[1.5px] border-primary bg-transparent px-4 py-2 font-body font-semibold text-primary transition-colors hover:bg-primary/[0.06] focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
            >
              <Icon name="swap_vert" className="text-base" />
              Swap colours
            </button>
          </div>
        </div>

        {/* Live preview */}
        <div className="rounded-card border border-line bg-card p-6">
          <h3 className="font-display text-lg font-semibold text-ink">Live preview</h3>
          <div
            className="mt-5 rounded-card border border-line p-6"
            style={{ backgroundColor: safeBg, color: safeFg }}
          >
            <p className="font-display text-2xl font-semibold leading-tight">
              Large sample text
            </p>
            <p className="mt-3 text-base leading-relaxed">
              Normal sample text. The quick brown fox jumps over the lazy dog, again and again, to
              show how readable this pairing is at a body-copy size.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted">
            <span
              className="inline-block h-5 w-5 shrink-0 rounded-chip border border-line"
              style={{ backgroundColor: safeFg }}
              aria-hidden="true"
            />
            <span className="font-mono">{safeFg.toUpperCase()}</span>
            <span aria-hidden="true">on</span>
            <span
              className="inline-block h-5 w-5 shrink-0 rounded-chip border border-line"
              style={{ backgroundColor: safeBg }}
              aria-hidden="true"
            />
            <span className="font-mono">{safeBg.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div
        aria-live="polite"
        className="mt-8 rounded-card border border-line bg-sand-tint p-6"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">Contrast ratio</h3>
          <p className="font-mono text-3xl font-semibold text-primary">
            {ratioLabel}
            <span className="ml-1 text-base text-muted">: 1</span>
          </p>
        </div>

        <ul className="mt-5 divide-y divide-line">
          {CHECKS.map((c) => {
            const pass = ratio >= c.threshold;
            return (
              <li key={c.label} className="flex items-start justify-between gap-4 py-3">
                <div>
                  <p className="font-body font-semibold text-ink">{c.label}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    Needs {c.threshold.toFixed(1)}:1. {c.note}
                  </p>
                </div>
                <div className="shrink-0 pt-0.5">
                  <Badge pass={pass} />
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-sm text-muted">
          Large text means 24px and above, or 18.66px (14pt) and above if bold. Everything smaller
          counts as normal text.
        </p>
      </div>
    </div>
  );
}
