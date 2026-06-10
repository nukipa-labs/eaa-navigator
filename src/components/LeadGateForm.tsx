'use client';

import { useState, type FormEvent } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = 'name-company-email' | 'email';

// Generalised, email-gated lead form. Adapted from ChecklistForm, but it does
// NOT trigger a client-side download — the PDF asset may not exist yet. On
// success it shows a confirmation state and we email the copy out of band.
// POSTs to /api/lead with { slug, ...fields, source }.
export function LeadGateForm({
  slug,
  source,
  heading = 'Get your copy, free.',
  blurb = 'Tell us where to send it and we will email it over shortly.',
  cta = 'Email it to me',
  fields = 'name-company-email',
  downloadUrl
}: {
  slug: string;
  source: string;
  heading?: string;
  blurb?: string;
  cta?: string;
  fields?: Fields;
  /** If set, the file is downloaded immediately on success (and offered again in the done state). */
  downloadUrl?: string;
}) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const wantsNameCompany = fields === 'name-company-email';

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (wantsNameCompany && !name.trim()) {
      setStatus('error');
      setError('Please add your name.');
      return;
    }
    if (wantsNameCompany && !company.trim()) {
      setStatus('error');
      setError('Please add your company.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setError("That doesn't look like a valid email address. Mind checking it?");
      return;
    }
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          ...(wantsNameCompany ? { name: name.trim(), company: company.trim() } : {}),
          email,
          source
        })
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        setStatus('done');
        if (downloadUrl) {
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = downloadUrl.split('/').pop() || '';
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      } else {
        setStatus('error');
        setError(data?.error || `We couldn't submit that just now. Please try again.`);
      }
    } catch {
      setStatus('error');
      setError(`We couldn't submit that just now. Please try again.`);
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-card border border-line bg-card p-6">
        <p className="text-ink font-medium">
          {downloadUrl ? 'Your download is starting.' : 'Thanks — check your inbox.'}
        </p>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {downloadUrl
            ? 'If it does not start automatically, use the button below. We have also emailed you a copy.'
            : "We'll email your copy shortly."}
        </p>
        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-accent px-6 font-body font-semibold text-ink transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-cta-hover)] active:scale-[0.97]"
          >
            Download the checklist (PDF)
          </a>
        )}
      </div>
    );
  }

  const inputClass =
    'mt-1.5 min-h-[44px] w-full rounded-md border border-line bg-white px-3.5 text-ink placeholder:text-muted focus:border-accent focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2';

  const ids = {
    name: `lg-${slug}-name`,
    company: `lg-${slug}-company`,
    email: `lg-${slug}-email`
  };

  return (
    <form onSubmit={onSubmit} className="rounded-card border border-line bg-card p-6">
      <p className="text-ink font-medium">{heading}</p>
      <p className="mt-2 text-sm text-muted leading-relaxed">{blurb}</p>

      {wantsNameCompany && (
        <>
          <div className="mt-4">
            <label htmlFor={ids.name} className="block font-body font-medium text-ink text-sm">
              Name
            </label>
            <input
              id={ids.name}
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div className="mt-4">
            <label htmlFor={ids.company} className="block font-body font-medium text-ink text-sm">
              Company
            </label>
            <input
              id={ids.company}
              type="text"
              autoComplete="organization"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company"
              className={inputClass}
            />
          </div>
        </>
      )}

      <div className="mt-4">
        <label htmlFor={ids.email} className="block font-body font-medium text-ink text-sm">
          Email
        </label>
        <input
          id={ids.email}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-3 text-danger text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-5 min-h-[48px] w-full rounded-md bg-accent px-6 font-body font-semibold text-ink transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-cta-hover)] active:scale-[0.97] disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : cta}
      </button>

      <p className="mt-3 text-xs text-muted">No spam. Unsubscribe any time.</p>
    </form>
  );
}
