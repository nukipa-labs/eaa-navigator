import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const TOOLS = [
  {
    title: 'Colour contrast checker',
    body: 'Check any text and background against the WCAG AA and AAA contrast thresholds, instantly, in your browser.',
    href: '/contrast-checker'
  },
  {
    title: 'WCAG 2.2 AA Checklist',
    body: 'A plain-English checklist of all 55 Level A and AA success criteria, free as a downloadable PDF.',
    href: '/wcag-checklist'
  },
  {
    title: 'Guides',
    body: 'Practical how-tos on contrast, focus, keyboard access, forms, alt text and accessibility statements.',
    href: '/guides'
  },
  {
    title: 'Glossary',
    body: 'WCAG, EAA, EN 301 549, VPAT, ACR, POUR. The acronyms explained in plain language.',
    href: '/glossary'
  }
];

export function ToolsStrip() {
  return (
    <Section
      background="paper"
      eyebrow="Free resources"
      title="Free resources, no email wall"
      subtitle="Use the contrast checker and read every guide straight away — nothing to install, no signup. We only ask for your email if you want a PDF, like the WCAG checklist or a VPAT template, sent to you."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TOOLS.map((t, i) => (
          <RevealOnScroll key={t.href} delay={i}>
            <Link
              href={t.href}
              className="group block h-full rounded-card border border-line bg-card p-6 transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:border-accent hover:[transform:translateY(-3px)] hover:shadow-[var(--shadow-card-hover)]"
            >
              <h3 className="font-display font-semibold text-lg text-ink group-hover:text-primary transition-colors">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t.body}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">Open →</span>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Need a VPAT for procurement? See the{' '}
        <Link href="/vpat" className="text-primary font-medium link-underline">
          VPAT template and guide
        </Link>
        .
      </p>
    </Section>
  );
}
