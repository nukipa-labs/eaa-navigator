import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Container,
  Section,
  Button,
  TLDR,
  Callout,
  SourceCite,
  Sources,
  JsonLd,
  RevealOnScroll,
  ContourBackground,
  NewsletterSignup,
  Prose,
  Icon
} from '@/components/ui';
import { GUIDES, getGuide, SITE, PUBLISHED, SRC } from '@/lib/guides';
import { REVIEWED_BY, DATE_MODIFIED } from '@/lib/schema';

const MODIFIED = DATE_MODIFIED;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = `${SITE}/guides/${g.slug}`;
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      type: 'article',
      title: g.metaTitle,
      description: g.metaDescription,
      url,
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
    }
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const url = `${SITE}/guides/${g.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.metaDescription,
    inLanguage: 'en',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    publisher: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    reviewedBy: REVIEWED_BY,
    about: {
      '@type': 'CreativeWork',
      name: 'Web Content Accessibility Guidelines (WCAG) 2.2',
      url: SRC.wcag22
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: g.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE}/guides` },
      { '@type': 'ListItem', position: 3, name: g.title, item: url }
    ]
  };

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* Hero (text only — no image) */}
      <header className="relative overflow-hidden bg-paper">
        <ContourBackground />
        <Container size="md" className="relative z-10 py-16 lg:py-24">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            Accessibility guide
          </p>
          <h1 className="mt-3 font-display font-semibold text-4xl lg:text-6xl text-ink leading-tight">
            {g.title}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink/80 leading-relaxed">{g.intro}</p>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted">
            <Icon name="verified" className="text-primary text-base" />
            Reviewed by the EAA Navigator team
          </p>

          <div className="mt-8">
            <TLDR>
              <ul className="space-y-2">
                {g.tldr.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TLDR>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="/wcag-checklist" variant="primary">
              Get the WCAG Checklist
            </Button>
            <Button as="a" href="/guides" variant="secondary">
              Browse all guides
            </Button>
          </div>
        </Container>
      </header>

      {/* What this covers */}
      <Section background="paper" eyebrow="In this guide">
        <div className="mx-auto max-w-3xl">
          <h2 className="inline-flex items-center gap-2 font-display font-semibold text-3xl lg:text-4xl leading-tight text-ink">
            <Icon name="fact_check" className="text-primary text-3xl" />
            What this covers
          </h2>
          <RevealOnScroll>
            <Prose className="mt-6">
              <ul>
                {g.covers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Prose>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Key points / common pitfalls */}
      <Section background="sand" eyebrow="What matters">
        <div className="mx-auto max-w-3xl">
          <h2 className="inline-flex items-center gap-2 font-display font-semibold text-3xl lg:text-4xl leading-tight text-ink">
            <Icon name="rule" className="text-primary text-3xl" />
            {g.keyPointsHeading}
          </h2>
          <RevealOnScroll>
            <Prose className="mt-6">
              <ul>
                {g.keyPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Across web accessibility, Level AA of{' '}
                <SourceCite href={SRC.wcag22}>WCAG 2.2</SourceCite> is the working target, and for the
                EU it is incorporated into the harmonised standard{' '}
                <SourceCite href={SRC.en301549}>EN 301 549</SourceCite>.
              </p>
            </Prose>
          </RevealOnScroll>
        </div>
      </Section>

      {/* What to do */}
      <Section background="paper" eyebrow="What to do">
        <div className="mx-auto max-w-3xl">
          <h2 className="inline-flex items-center gap-2 font-display font-semibold text-3xl lg:text-4xl leading-tight text-ink">
            <Icon name="checklist" className="text-primary text-3xl" />
            What to do next
          </h2>
          <RevealOnScroll>
            <Prose className="mt-6">
              <ol>
                {g.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p>
                For the standard itself, see the <Link href="/wcag">WCAG explainer</Link>; to put it
                into practice, work through the{' '}
                <Link href="/wcag-checklist">WCAG 2.2 AA checklist</Link>.
              </p>
            </Prose>
          </RevealOnScroll>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="sand" eyebrow="FAQ">
        <div className="mx-auto max-w-3xl">
          <h2 className="inline-flex items-center gap-2 font-display font-semibold text-3xl lg:text-4xl leading-tight text-ink">
            <Icon name="help" className="text-primary text-3xl" />
            Common questions
          </h2>
          <dl className="mt-6 divide-y divide-line">
            {g.faq.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-display text-lg font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 text-ink/90 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* CTA + cross-links */}
      <Section background="forest" align="center">
        <div className="mx-auto max-w-2xl text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-paper">
              Make your site accessible
            </h2>
            <p className="mt-4 text-paper/80 leading-relaxed">
              Start with the WCAG 2.2 AA checklist, then work through the guides to fix what you
              find.
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
              <Link href="/accessibility" className="text-accent-on-dark underline-offset-2 hover:underline">
                Accessibility hub
              </Link>
              <Link href="/wcag" className="text-accent-on-dark underline-offset-2 hover:underline">
                What is WCAG?
              </Link>
              <Link
                href="/contrast-checker"
                className="text-accent-on-dark underline-offset-2 hover:underline"
              >
                Contrast checker
              </Link>
              <Link
                href="/wcag-checklist"
                className="text-accent-on-dark underline-offset-2 hover:underline"
              >
                WCAG checklist
              </Link>
            </nav>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Sources + disclaimer */}
      <Section background="paper">
        <div className="mx-auto max-w-3xl">
          <Callout variant="info" title="This is guidance, not legal advice">
            This guide is here to help you understand web accessibility and how WCAG, the EAA and the
            ADA apply in practice. It is not legal advice. For decisions specific to your business,
            confirm with the official sources we link or a qualified adviser.
          </Callout>

          <Sources
            items={[
              {
                href: SRC.wcag22,
                label: 'Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.wcagOverview,
                label: 'WCAG overview (W3C Web Accessibility Initiative)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.eaaDirective,
                label: 'Directive (EU) 2019/882 — European Accessibility Act (EUR-Lex)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.en301549,
                label: 'EN 301 549 v3.2.1 — harmonised ICT accessibility standard (ETSI)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.dojWebRule,
                label: 'US DOJ ADA Title II web accessibility rule fact sheet',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.webaim,
                label: 'WebAIM Million 2025 — accessibility of the top 1,000,000 home pages',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.overlayFactSheet,
                label: 'Overlay Fact Sheet — why overlays do not deliver compliance',
                retrieved: '9 Jun 2026'
              }
            ]}
          />
        </div>
      </Section>

      <NewsletterSignup variant="band" />
    </>
  );
}
