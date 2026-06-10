import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Container,
  Section,
  Button,
  Callout,
  SourceCite,
  Sources,
  JsonLd,
  RevealOnScroll,
  ContourBackground,
  NewsletterSignup,
  Icon
} from '@/components/ui';
import { webPage, breadcrumb, SITE } from '@/lib/schema';
import { ContrastChecker } from './ContrastChecker';

const SRC = {
  wcag: 'https://www.w3.org/TR/WCAG22/',
  webaim: 'https://webaim.org/projects/million/'
};

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: 'What is a good colour contrast ratio?',
    a: 'For normal body text, aim for a contrast ratio of at least 4.5:1 to meet WCAG Level AA. Large text (24px and up, or 18.66px and up if bold) needs at least 3:1. To meet the enhanced Level AAA, normal text needs 7:1 and large text needs 4.5:1.'
  },
  {
    q: 'What counts as large text in WCAG?',
    a: 'Large text is text that is at least 24 CSS pixels (about 18pt), or at least 18.66 CSS pixels (about 14pt) when it is bold. Anything smaller is treated as normal text and must meet the higher 4.5:1 ratio.'
  },
  {
    q: 'How is the contrast ratio calculated?',
    a: 'Each colour is converted from sRGB to a relative luminance: the channels are linearised, then weighted (0.2126 red, 0.7152 green, 0.0722 blue). The ratio is (lighter + 0.05) divided by (darker + 0.05), giving a value between 1:1 and 21:1. This checker uses that exact WCAG formula.'
  },
  {
    q: 'Do icons and form borders need to pass contrast?',
    a: 'Yes. Non-text elements that convey information, such as icons, input borders, focus indicators and chart segments, must meet a contrast ratio of at least 3:1 against their adjacent colours, under WCAG 1.4.11 Non-text Contrast.'
  },
  {
    q: 'Is passing a contrast check enough to be compliant?',
    a: 'No. Contrast is one success criterion among many. It is the single most common failure online, so it is a sensible place to start, but a site also needs keyboard operability, alt text, labels, headings and more. Use the WCAG checklist for the full picture.'
  }
];

export const metadata: Metadata = {
  title: 'Color Contrast Checker (WCAG AA & AAA) · EAA Navigator',
  description:
    'Free color contrast checker. Enter any two colours and instantly see the WCAG contrast ratio with AA and AAA pass or fail results for normal text, large text and UI elements.',
  alternates: { canonical: '/contrast-checker' },
  openGraph: {
    type: 'website',
    title: 'Color Contrast Checker (WCAG AA & AAA) · EAA Navigator',
    description:
      'Free color contrast checker. Enter two colours and see the WCAG contrast ratio with AA and AAA pass or fail results for normal text, large text and UI elements.',
    url: `${SITE}/contrast-checker`,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
  }
};

export default function ContrastCheckerPage() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Color Contrast Checker',
    url: `${SITE}/contrast-checker`,
    description:
      'A free, browser-based tool that calculates the WCAG colour contrast ratio between two colours and shows AA and AAA pass or fail results for normal text, large text and UI elements.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any (web browser)',
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': `${SITE}/#organization` },
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'EUR'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <>
      <JsonLd
        data={[
          webPage({
            name: 'Color Contrast Checker (WCAG AA & AAA)',
            path: '/contrast-checker',
            description:
              'Free color contrast checker. Enter any two colours and instantly see the WCAG contrast ratio with AA and AAA pass or fail results for normal text, large text and UI elements.'
          }),
          breadcrumb([{ name: 'Color Contrast Checker', path: '/contrast-checker' }]),
          webApplicationSchema,
          faqSchema
        ]}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-paper">
        <ContourBackground />
        <Container size="md" className="relative z-10 py-16 lg:py-24">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            Free tool
          </p>
          <h1 className="mt-3 font-display font-semibold text-4xl lg:text-6xl text-ink leading-tight">
            Color Contrast Checker
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink/80 leading-relaxed">
            Enter any two colours and see the WCAG contrast ratio straight away, with clear pass or
            fail results for AA and AAA. Low-contrast text is the most common accessibility failure
            on the web, so it is a good place to start. Everything runs in your browser; nothing is
            sent anywhere.
          </p>
        </Container>
      </header>

      {/* The tool */}
      <Section background="paper">
        <ContrastChecker />
      </Section>

      {/* Explainer */}
      <Section
        background="sand"
        eyebrow="How it works"
        title="Contrast ratios and the WCAG thresholds"
      >
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl space-y-5 text-ink/90 leading-relaxed">
            <p>
              A contrast ratio measures how much a colour stands out against the colour behind it. It
              runs from 1:1 (identical, invisible) to 21:1 (pure black on pure white). WCAG works it
              out by converting each colour from sRGB to a relative luminance, then comparing the two:
              the ratio is (lighter + 0.05) divided by (darker + 0.05). This checker uses that exact
              formula. <SourceCite href={SRC.wcag}>WCAG 2.2</SourceCite>
            </p>
            <p>
              WCAG sets different thresholds depending on what the colour is used for:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>AA, normal text: 4.5:1.</strong> Body text below 24px, or below 18.66px when
                bold. This is the level almost every accessibility law requires.
              </li>
              <li>
                <strong>AA, large text: 3:1.</strong> Text 24px and up, or 18.66px and up if bold.
              </li>
              <li>
                <strong>AAA, normal text: 7:1</strong> and <strong>AAA, large text: 4.5:1.</strong>{' '}
                The enhanced bar, not usually required across a whole site.
              </li>
              <li>
                <strong>UI and graphics: 3:1.</strong> Icons, input borders, focus rings and other
                meaningful non-text elements (WCAG 1.4.11).
              </li>
            </ul>
            <p>
              Why start here? In the <strong>WebAIM Million 2025</strong> analysis of the top million
              home pages, <strong>low-contrast text was the single most common failure, found on
              79.1% of home pages</strong>. It is widespread, easy to detect and usually
              straightforward to fix. <SourceCite href={SRC.webaim}>WebAIM Million</SourceCite>
            </p>
          </div>

          <div className="mx-auto max-w-3xl mt-8">
            <Callout variant="info" title="Contrast is a start, not the finish line">
              <span className="inline-flex items-start gap-2">
                <Icon name="info" className="text-accent-deep text-xl shrink-0" />
                <span>
                  Passing contrast does not make a page compliant on its own. It is one of dozens of
                  WCAG success criteria. Use the{' '}
                  <Link href="/wcag-checklist">WCAG 2.2 AA checklist</Link> for the full set, and read{' '}
                  <Link href="/wcag">what WCAG is</Link> if any of the terms are new.
                </span>
              </span>
            </Callout>
          </div>
        </RevealOnScroll>
      </Section>

      {/* FAQ */}
      <Section background="paper" eyebrow="FAQ" title="People also ask">
        <div className="mx-auto max-w-3xl">
          <dl className="divide-y divide-line">
            {FAQS.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-display text-lg font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 text-ink/90 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* CTA cross-links */}
      <Section background="forest" eyebrow="Keep going" title="From a quick check to full compliance">
        <RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/wcag"
              className="group rounded-card border border-paper/20 bg-paper/5 p-6 transition-colors hover:bg-paper/10 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
            >
              <Icon name="rule" className="text-accent-on-dark text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-paper">What is WCAG?</h3>
              <p className="mt-2 text-paper/80 leading-relaxed">
                The standard behind every contrast rule, explained in plain English.
              </p>
            </Link>
            <Link
              href="/accessibility"
              className="group rounded-card border border-paper/20 bg-paper/5 p-6 transition-colors hover:bg-paper/10 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
            >
              <Icon name="accessibility_new" className="text-accent-on-dark text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                Accessibility basics
              </h3>
              <p className="mt-2 text-paper/80 leading-relaxed">
                Start here for the bigger picture on web accessibility compliance.
              </p>
            </Link>
            <Link
              href="/wcag-checklist"
              className="group rounded-card border border-paper/20 bg-paper/5 p-6 transition-colors hover:bg-paper/10 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
            >
              <Icon name="checklist" className="text-accent-on-dark text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-paper">WCAG 2.2 checklist</h3>
              <p className="mt-2 text-paper/80 leading-relaxed">
                The free, plain-English checklist covering all 55 Level AA criteria.
              </p>
            </Link>
            <Link
              href="/guides"
              className="group rounded-card border border-paper/20 bg-paper/5 p-6 transition-colors hover:bg-paper/10 focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-2"
            >
              <Icon name="menu_book" className="text-accent-on-dark text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                Accessibility guides
              </h3>
              <p className="mt-2 text-paper/80 leading-relaxed">
                Plain-English how-tos for the issues a contrast tool cannot catch.
              </p>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/wcag-checklist" variant="primary">
              Get the WCAG checklist
            </Button>
            <Button
              href="/guides"
              variant="secondary"
              className="!border-paper !text-paper hover:!bg-paper/10"
            >
              Browse the guides
            </Button>
          </div>
        </RevealOnScroll>
      </Section>

      {/* Sources + closing */}
      <Section background="paper">
        <div className="mx-auto max-w-3xl">
          <Callout variant="info" title="This is guidance, not legal advice">
            This tool helps you check colour contrast against WCAG, but it is guidance, not legal
            advice, and passing it does not guarantee compliance. For decisions specific to your
            organisation, confirm with the official sources we link or a qualified adviser.
          </Callout>

          <Sources
            items={[
              {
                href: SRC.wcag,
                label: 'Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.webaim,
                label: 'The WebAIM Million 2025 (annual accessibility analysis of the top 1,000,000 home pages)',
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
