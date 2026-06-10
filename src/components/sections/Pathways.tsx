import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

type Card = { title: string; body: string; href: string; tag: string };

const CARDS: Card[] = [
  {
    tag: 'Website & ecommerce',
    title: 'I run a website or online shop',
    body: 'Where to start, what the EAA expects of e-commerce, and the WCAG 2.2 AA checklist to work through. Plain-English first.',
    href: '/accessibility'
  },
  {
    tag: 'Developer or agency',
    title: 'I build or maintain sites',
    body: 'The WCAG success criteria explained, plus practical guides on contrast, focus, keyboard access and forms.',
    href: '/wcag'
  },
  {
    tag: 'Procurement & public sector',
    title: 'I buy or run public services',
    body: 'How VPATs and Accessibility Conformance Reports work, and what the ADA and Section 508 require of you.',
    href: '/vpat'
  },
  {
    tag: 'EAA compliance',
    title: 'I just need to comply with the EAA',
    body: 'What Directive (EU) 2019/882 covers, who is exempt, and the path to a real accessibility audit, not an overlay.',
    href: '/eaa'
  }
];

function NeedleGlyph() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-primary group-hover:text-accent-deep transition-colors"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 4 L14.5 12 L12 11 L9.5 12 Z" fill="currentColor" stroke="none" />
      <path d="M12 20 L14.5 12 L12 13 L9.5 12 Z" opacity="0.4" />
    </svg>
  );
}

function PathwayCard({ card, delay }: { card: Card; delay: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <Link
        href={card.href}
        className="group block h-full rounded-card border border-line bg-card p-6 transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:border-accent hover:[transform:translateY(-3px)] hover:shadow-[var(--shadow-card-hover)]"
      >
        <NeedleGlyph />
        <p className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
          {card.tag}
        </p>
        <h3 className="mt-2 font-display font-semibold text-xl text-ink">{card.title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{card.body}</p>
        <span className="mt-4 inline-block text-sm font-medium text-primary">Open →</span>
      </Link>
    </RevealOnScroll>
  );
}

export function Pathways() {
  return (
    <Section
      background="sand"
      eyebrow="Start here"
      title="Start where you are"
      subtitle="Four routes into accessibility, depending on who you are and what you need right now."
    >
      {/* Asymmetric zig-zag layout (not an identical 3-up grid) */}
      <div className="grid gap-5 md:grid-cols-6">
        <div className="md:col-span-4">
          <PathwayCard card={CARDS[0]} delay={0} />
        </div>
        <div className="md:col-span-2">
          <PathwayCard card={CARDS[1]} delay={1} />
        </div>
        <div className="md:col-span-2">
          <PathwayCard card={CARDS[2]} delay={2} />
        </div>
        <div className="md:col-span-4">
          <PathwayCard card={CARDS[3]} delay={3} />
        </div>
      </div>
    </Section>
  );
}
