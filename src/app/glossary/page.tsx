import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { JsonLd } from '@/components/ui';
import { NewsletterSignup } from '@/components/ui';
import { webPage } from '@/lib/schema';
import { GLOSSARY } from '@/lib/glossary';
import { GlossaryList } from './GlossaryList';

const SITE = 'https://eaa-navigator.com';

export const metadata: Metadata = {
  title: 'Accessibility glossary: every term in plain English',
  description:
    'Every web accessibility term decoded in plain English: WCAG, Level AA, POUR, EN 301 549, the EAA, ADA, Section 508, VPAT, ARIA, alt text, contrast and more.',
  alternates: { canonical: '/glossary' },
  openGraph: {
    type: 'article',
    title: 'Accessibility glossary: every term in plain English',
    description:
      'Every web accessibility term decoded in plain English: WCAG, Level AA, the EAA, ADA, Section 508, VPAT, ARIA, alt text and more.',
    url: `${SITE}/glossary`,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
  }
};

export default function GlossaryPage() {
  const definedTermSet = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Accessibility glossary',
    description:
      'Plain-English definitions of the key web accessibility terms: WCAG, the European Accessibility Act (EAA), EN 301 549, the ADA, Section 508, VPAT, ARIA and more.',
    url: `${SITE}/glossary`,
    hasDefinedTerm: GLOSSARY.map((t) => ({
      '@type': 'DefinedTerm',
      '@id': `${SITE}/glossary#${t.slug}`,
      name: t.term,
      description: t.formal ? `${t.plain} ${t.formal}` : t.plain,
      inDefinedTermSet: `${SITE}/glossary`
    }))
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Accessibility glossary', item: `${SITE}/glossary` }
    ]
  };

  return (
    <>
      <JsonLd
        data={[
          definedTermSet,
          breadcrumb,
          webPage({
            name: 'Accessibility glossary: every term in plain English',
            path: '/glossary',
            description:
              'Every web accessibility term decoded in plain English: WCAG, Level AA, POUR, EN 301 549, the EAA, ADA, Section 508, VPAT, ARIA, alt text, contrast and more.'
          })
        ]}
      />

      <Container size="lg" className="py-16 lg:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            Accessibility glossary
          </p>
          <h1 className="mt-3 font-display font-semibold text-4xl lg:text-5xl text-ink leading-tight">
            Every accessibility term, in plain English
          </h1>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            Web accessibility comes with its own vocabulary: WCAG, Level AA, POUR, EN 301 549, the
            EAA, ADA, Section 508, VPAT, ARIA. Here is each term explained simply first, then with the
            precise standard or legal phrasing, so you can read any accessibility document without a
            specialist background. Every definition is grounded in the standards and laws themselves.
          </p>
          <p className="mt-4 text-sm text-muted">
            Need the bigger picture first?{' '}
            <Link
              href="/wcag"
              className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-accent-deep"
            >
              Read what WCAG is
            </Link>
            , or browse the{' '}
            <Link
              href="/guides"
              className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-accent-deep"
            >
              accessibility guides
            </Link>
            .
          </p>
        </header>

        <div className="mt-12">
          <GlossaryList />
        </div>

        <p className="mt-12 mx-auto max-w-2xl text-center text-sm text-muted">
          This is guidance, not legal advice. Confirm with the official sources we link
          or a qualified adviser. Definitions reference WCAG 2.2, EN 301 549, the European
          Accessibility Act (Directive (EU) 2019/882) and US ADA / Section 508 guidance.
        </p>
      </Container>

      <NewsletterSignup variant="band" />
    </>
  );
}
