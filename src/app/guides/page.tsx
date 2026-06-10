import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import {
  Container,
  Section,
  Button,
  TLDR,
  SourceCite,
  JsonLd,
  RevealOnScroll,
  ContourBackground,
  NewsletterSignup
} from '@/components/ui';
import { webPage } from '@/lib/schema';
import { GUIDES, SITE, SRC } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Accessibility Guides: WCAG, EAA, ADA, Overlays & More | EAA Navigator',
  description:
    'Plain-English web accessibility guides: who the EAA applies to, ADA vs EAA, accessibility statements, e-commerce and WordPress accessibility, overlays, keyboard access and alt text.',
  alternates: { canonical: '/guides' },
  openGraph: {
    type: 'website',
    title: 'Accessibility Guides: WCAG, EAA, ADA, Overlays & More',
    description:
      'Plain-English web accessibility guides covering the EAA, the ADA, WCAG, accessibility statements, e-commerce, WordPress, overlays, keyboard access and alt text.',
    url: `${SITE}/guides`,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
  }
};

export default function GuidesIndexPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Accessibility Guides',
    itemListElement: GUIDES.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: g.title,
      url: `${SITE}/guides/${g.slug}`
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE}/guides` }
    ]
  };

  return (
    <>
      <JsonLd
        data={[
          itemListSchema,
          breadcrumbSchema,
          webPage({
            name: 'Accessibility Guides: WCAG, EAA, ADA, Overlays & More',
            path: '/guides',
            description:
              'Plain-English web accessibility guides: who the EAA applies to, ADA vs EAA, accessibility statements, e-commerce and WordPress accessibility, overlays, keyboard access and alt text.'
          })
        ]}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-paper">
        <ContourBackground />
        <Container size="md" className="relative z-10 py-16 lg:py-24">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            Accessibility guides
          </p>
          <h1 className="mt-3 font-display font-semibold text-4xl lg:text-6xl text-ink leading-tight">
            Accessibility guides
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink/80 leading-relaxed">
            Plain-English guides to web accessibility compliance, covering the standard (WCAG), the
            European Accessibility Act (EAA) and the US ADA. Whether you run an online shop, manage a
            WordPress site or just need an honest answer about accessibility overlays, start with the
            guide that fits your question.{' '}
            <SourceCite href={SRC.wcag22}>WCAG 2.2 (W3C)</SourceCite>
          </p>

          <div className="mt-8">
            <TLDR>
              <ul className="space-y-2">
                <li>
                  WCAG Level AA is the practical target everywhere — the EAA references it via
                  EN 301 549, and US ADA case law and the DOJ Title II rule use it too.
                </li>
                <li>
                  The EAA’s accessibility requirements have applied since 28 June 2025, and e-commerce
                  is one of the services in scope.
                </li>
                <li>
                  Accessibility overlays do not make a site compliant — these guides explain what
                  actually does.
                </li>
              </ul>
            </TLDR>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="/wcag-checklist" variant="primary">
              Get the WCAG Checklist
            </Button>
            <Button as="a" href="/contrast-checker" variant="secondary">
              Try the contrast checker
            </Button>
          </div>

          <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-card border border-line shadow-[0_24px_60px_-24px_rgba(30,27,75,0.35)]">
            <Image
              src={IMAGES.lowVision.src}
              alt={IMAGES.lowVision.alt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </header>

      {/* Card grid */}
      <Section background="paper" eyebrow="Browse the guides" title="Every guide, in plain English">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g, i) => (
            <RevealOnScroll key={g.slug} delay={i}>
              <Link
                href={`/guides/${g.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-card p-6 transition hover:border-accent hover:-translate-y-[3px]"
              >
                <h2 className="font-display text-xl font-semibold text-ink group-hover:text-primary">
                  {g.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-ink/80 leading-relaxed">{g.summary}</p>
                <span className="mt-4 text-sm font-semibold text-accent-deep">Read the guide →</span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="forest" align="center">
        <div className="mx-auto max-w-2xl text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-paper">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-paper/80 leading-relaxed">
              The WCAG 2.2 AA checklist walks you through the essentials in plain English. Pair it
              with the free contrast checker to test your own colours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button as="a" href="/wcag-checklist" variant="primary">
                Get the WCAG Checklist
              </Button>
              <Button
                as="a"
                href="/contrast-checker"
                variant="secondary"
                className="!border-paper !text-paper hover:!bg-paper/10"
              >
                Try the contrast checker
              </Button>
            </div>
            <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/wcag" className="text-accent-on-dark underline-offset-2 hover:underline">
                What is WCAG?
              </Link>
              <Link href="/eaa" className="text-accent-on-dark underline-offset-2 hover:underline">
                The EAA explained
              </Link>
              <Link href="/accessibility" className="text-accent-on-dark underline-offset-2 hover:underline">
                Accessibility hub
              </Link>
            </nav>
          </RevealOnScroll>
        </div>
      </Section>

      <NewsletterSignup variant="band" />
    </>
  );
}
