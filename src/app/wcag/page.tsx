import type { Metadata } from 'next';
import Link from 'next/link';
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
  Stat,
  Stats,
  Prose,
  Icon
} from '@/components/ui';
import { REVIEWED_BY, DATE_MODIFIED, SITE } from '@/lib/schema';

const PUBLISHED = '2026-01-15';
const MODIFIED = DATE_MODIFIED;

const SRC = {
  wcag: 'https://www.w3.org/TR/WCAG22/',
  newIn22: 'https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/',
  overview: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
  en301549:
    'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf',
  eaa: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng',
  doj: 'https://www.ada.gov/resources/2024-03-08-web-rule/',
  section508: 'https://www.access-board.gov/ict/'
};

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: 'What is WCAG?',
    a: 'WCAG, the Web Content Accessibility Guidelines, is the international standard for digital accessibility, published by the World Wide Web Consortium (W3C). It is organised around four principles (Perceivable, Operable, Understandable, Robust) and turns them into testable success criteria at three conformance levels: A, AA and AAA.'
  },
  {
    q: 'What is the difference between WCAG A, AA and AAA?',
    a: 'A is the most basic level, AA is the practical and legal target almost every law points to, and AAA is the highest bar and is not expected across a whole site. When people talk about WCAG compliance they almost always mean Level AA.'
  },
  {
    q: 'What is the difference between WCAG 2.1 and 2.2?',
    a: 'WCAG 2.2 (a W3C Recommendation since 5 October 2023) builds on 2.1 (June 2018). It added nine new success criteria across the levels and removed one (4.1.1 Parsing), giving a net of five more criteria at each level. At Level AA, the count goes from 50 in 2.1 to 55 in 2.2.'
  },
  {
    q: 'What are the new WCAG 2.2 AA criteria?',
    a: 'The new Level AA criteria in 2.2 are Focus Not Obscured (Minimum), Dragging Movements, Target Size (Minimum) at 24 by 24 CSS pixels, and Accessible Authentication (Minimum). Focus Appearance is a new criterion too, but it is Level AAA, not AA. Consistent Help and Redundant Entry are new at Level A.'
  },
  {
    q: 'How does WCAG relate to the EAA, ADA and Section 508?',
    a: 'WCAG is the underlying standard the laws reference. In the EU, EN 301 549 incorporates WCAG 2.1 AA and is the harmonised standard for the EAA and the public-sector Web Accessibility Directive. In the US, the DOJ Title II rule adopts WCAG 2.1 AA, Section 508 references WCAG 2.0 AA, and ADA case law uses WCAG AA.'
  },
  {
    q: 'Is WCAG 3.0 the standard now?',
    a: 'No. WCAG 3.0 is an early W3C Working Draft, not a finished standard, and it is not a compliance target. WCAG 2.1 AA remains the legal benchmark, with WCAG 2.2 AA as current best practice. Do not plan compliance around WCAG 3.0 yet.'
  },
  {
    q: 'Which WCAG version should I aim for?',
    a: 'Target WCAG 2.2 Level AA. It includes everything in 2.1 AA (the level most laws require) plus the newer 2.2 criteria, so meeting 2.2 AA also satisfies 2.1 AA and sets you up well for the future.'
  }
];

export const metadata: Metadata = {
  title: 'What is WCAG? WCAG 2.1 & 2.2 AA explained',
  description:
    'A plain-English guide to WCAG: the versions and history, the A/AA/AAA levels, the POUR principles, the success-criteria counts, the new 2.2 AA criteria, and how WCAG maps into the EAA, ADA and Section 508.',
  alternates: { canonical: '/wcag' },
  openGraph: {
    type: 'article',
    title: 'What is WCAG? WCAG 2.1 & 2.2 AA explained',
    description:
      'Plain-English WCAG guide: versions, the A/AA/AAA levels, POUR, the success-criteria counts and the new 2.2 AA criteria. Sourced and kept current.',
    url: `${SITE}/wcag`,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
  }
};

export default function WcagPillarPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is WCAG? WCAG 2.1 & 2.2 AA explained',
    description:
      'A plain-English guide to WCAG: the versions and history, the A/AA/AAA levels, the POUR principles, the success-criteria counts, the new 2.2 AA criteria, and how WCAG maps into the EAA, ADA and Section 508.',
    inLanguage: 'en',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/wcag` },
    author: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    publisher: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    reviewedBy: REVIEWED_BY,
    about: {
      '@type': 'CreativeWork',
      name: 'Web Content Accessibility Guidelines (WCAG) 2.2',
      url: SRC.wcag
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'What is WCAG?', item: `${SITE}/wcag` }
    ]
  };

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* Hero */}
      <header className="relative overflow-hidden bg-paper">
        <ContourBackground />
        <Container size="md" className="relative z-10 py-16 lg:py-24">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            The plain-English explainer
          </p>
          <h1 className="mt-3 font-display font-semibold text-4xl lg:text-6xl text-ink leading-tight">
            What is WCAG?
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink/80 leading-relaxed">
            WCAG, the Web Content Accessibility Guidelines, is the international standard for digital
            accessibility. It is built on four principles and three conformance levels, and it is the
            benchmark that the <Link href="/eaa">EAA</Link>, the <Link href="/ada">ADA</Link> and
            Section 508 all rely on.{' '}
            <SourceCite href={SRC.wcag}>WCAG 2.2</SourceCite> is the current version; this page
            explains it plainly.
          </p>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted">
            <Icon name="verified" className="text-primary text-base" />
            Reviewed by the EAA Navigator team
          </p>

          <div className="mt-8">
            <TLDR>
              <ul className="space-y-2">
                <li>
                  <strong className="font-semibold">What:</strong> the W3C standard for digital
                  accessibility, built on the POUR principles.
                </li>
                <li>
                  <strong className="font-semibold">Levels:</strong> A, AA and AAA. Level AA is the
                  target almost every law points to.
                </li>
                <li>
                  <strong className="font-semibold">Versions:</strong> 2.0 (2008), 2.1 (2018) and 2.2
                  (a W3C Recommendation since October 2023).
                </li>
                <li>
                  <strong className="font-semibold">Counts:</strong> WCAG 2.1 AA has 50 success
                  criteria; WCAG 2.2 AA has 55, a net of five more.
                </li>
                <li>
                  <strong className="font-semibold">3.0:</strong> still an early draft, not a
                  compliance target. Aim for 2.2 AA.
                </li>
              </ul>
            </TLDR>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/wcag-checklist" variant="primary">
              Get the WCAG checklist
            </Button>
            <Button href="/accessibility" variant="secondary">
              Start with the basics
            </Button>
          </div>
        </Container>
      </header>

      {/* Levels band */}
      <Section background="ink" eyebrow="The three levels">
        <RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <Icon name="looks_one" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-3xl lg:text-4xl font-semibold text-accent-on-dark">A</p>
              <p className="mt-2 text-paper/80">The most basic level. Necessary, but not the target.</p>
            </div>
            <div>
              <Icon name="verified" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-3xl lg:text-4xl font-semibold text-accent-on-dark">AA</p>
              <p className="mt-2 text-paper/80">
                The legal and practical target. What the EAA, the ADA and Section 508 all aim at.
              </p>
            </div>
            <div>
              <Icon name="workspace_premium" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-3xl lg:text-4xl font-semibold text-accent-on-dark">AAA</p>
              <p className="mt-2 text-paper/80">
                The highest bar. Not expected across a whole site.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-paper/70">
            Aim for Level AA across the board.{' '}
            <SourceCite href={SRC.overview}>
              <span className="text-accent-on-dark">W3C / WAI overview</span>
            </SourceCite>
          </p>
        </RevealOnScroll>
      </Section>

      {/* Main long-form */}
      <Section background="paper">
        <Prose className="max-w-3xl">
          <RevealOnScroll>
            <h2 id="what-it-is" className="inline-flex items-center gap-2">
              <Icon name="rule" className="text-primary text-2xl" />
              What WCAG is, and where it comes from
            </h2>
            <p>
              WCAG stands for the <strong>Web Content Accessibility Guidelines</strong>. It is
              published by the World Wide Web Consortium (W3C), the body that sets the open standards
              of the web, through its Web Accessibility Initiative (WAI). WCAG is the international
              reference for making digital content usable by people with disabilities, and it is the
              standard that accessibility laws around the world point to.{' '}
              <SourceCite href={SRC.overview}>W3C / WAI</SourceCite>
            </p>
            <p>
              The guidelines have evolved in versions:{' '}
              <strong>WCAG 2.0 in 2008, WCAG 2.1 on 5 June 2018, and WCAG 2.2, which became a W3C
              Recommendation on 5 October 2023</strong>. Each version builds on the last, so meeting
              the newer version also meets the older one. WCAG 3.0 exists only as an early Working
              Draft and is not a compliance target.{' '}
              <SourceCite href={SRC.wcag}>WCAG 2.2</SourceCite>
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="levels" className="inline-flex items-center gap-2">
              <Icon name="stairs" className="text-primary text-2xl" />
              The three conformance levels
            </h2>
            <p>
              Every WCAG success criterion is assigned a level. The levels are cumulative: to claim
              AA you must meet A and AA; to claim AAA you must meet all three.
            </p>
            <ul>
              <li>
                <strong>Level A</strong> is the floor. Failing it tends to block users outright.
              </li>
              <li>
                <strong>Level AA</strong> is the target almost every law adopts: EN 301 549, the DOJ
                Title II rule, Section 508 and most ADA case law.
              </li>
              <li>
                <strong>Level AAA</strong> is the most demanding. The W3C itself does not recommend
                requiring AAA across a whole site, because not all content can meet it.
              </li>
            </ul>
            <p>
              In short, <strong>aim for Level AA</strong>. That is what compliance means in practice.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="pour" className="inline-flex items-center gap-2">
              <Icon name="category" className="text-primary text-2xl" />
              The POUR principles, with examples
            </h2>
            <p>
              WCAG groups all of its success criteria under four principles, known by the initials{' '}
              <strong>POUR</strong>. Content must be perceivable, operable, understandable and robust.
            </p>
          </RevealOnScroll>
        </Prose>

        {/* POUR grid (outside Prose for grid layout control) */}
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="visibility" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Perceivable</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Information must be available to the senses. For example: alt text for images,
                captions and transcripts for media, and a contrast ratio of at least 4.5:1 for normal
                text.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="keyboard" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Operable</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                The interface must be usable by everyone. For example: full keyboard operation, a
                visible focus indicator, skip links, and no content that flashes more than three
                times a second.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="help" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Understandable</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Content and controls must make sense. For example: readable language, consistent and
                predictable navigation, labelled form fields, and clear, specific error messages.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="shield" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Robust</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Content must work with a wide range of tools, now and in future. For example: valid
                markup, correct names, roles and values, and status messages that assistive
                technology can announce.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <Prose className="max-w-3xl mt-12">
          <RevealOnScroll>
            <h2 id="counts" className="inline-flex items-center gap-2">
              <Icon name="tag" className="text-primary text-2xl" />
              How many success criteria? 2.1 vs 2.2
            </h2>
            <p>
              WCAG turns the four principles into specific, testable{' '}
              <strong>success criteria</strong>. The count matters because it is how you scope an
              audit.
            </p>
            <ul>
              <li>
                <strong>WCAG 2.1 Level AA: 50 success criteria.</strong>
              </li>
              <li>
                <strong>WCAG 2.2 Level AA: 55 success criteria.</strong>
              </li>
            </ul>
            <p>
              WCAG 2.2 added nine new success criteria across the levels and removed one (4.1.1
              Parsing, now obsolete), giving a <strong>net of five more</strong> at each level. So it
              is not nine more at AA, it is five more, taking AA from 50 to 55.{' '}
              <SourceCite href={SRC.newIn22}>What&apos;s New in WCAG 2.2 (W3C)</SourceCite>
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="new-in-22" className="inline-flex items-center gap-2">
              <Icon name="new_releases" className="text-primary text-2xl" />
              The key new WCAG 2.2 AA criteria
            </h2>
            <p>
              These are the new Level AA criteria most teams need to act on. (Two more new ones,
              Consistent Help and Redundant Entry, are Level A.)
            </p>
          </RevealOnScroll>
        </Prose>

        {/* New 2.2 AA criteria (outside Prose for grid layout control) */}
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="visibility" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                Focus Not Obscured (Minimum)
              </h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                2.4.11 [AA]. When an element gets keyboard focus, it must not be entirely hidden
                behind sticky headers, cookie banners or other overlapping content.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="drag_pan" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Dragging Movements</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                2.5.7 [AA]. Anything that works by dragging (sliders, drag-and-drop) must also have a
                simple single-pointer alternative, such as tapping or clicking.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="touch_app" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                Target Size (Minimum)
              </h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                2.5.8 [AA]. Interactive targets must be at least 24 by 24 CSS pixels, or have enough
                spacing, so they are easy to hit. Some exceptions apply.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="password" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                Accessible Authentication (Minimum)
              </h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                3.3.8 [AA]. Login must not force a cognitive test such as remembering a password or
                solving a puzzle, unless an alternative or a helper (like a password manager) is
                allowed.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mx-auto max-w-3xl mt-8">
          <RevealOnScroll>
            <Callout variant="info" title="Focus Appearance is AAA, not AA">
              <span className="inline-flex items-start gap-2">
                <Icon name="info" className="text-accent-deep text-xl shrink-0" />
                <span>
                  Focus Appearance (2.4.13) is a new WCAG 2.2 criterion, but it sits at{' '}
                  <strong>Level AAA</strong>, so it is not part of the AA target. Do not confuse it
                  with Focus Not Obscured (Minimum), which is AA.
                </span>
              </span>
            </Callout>
          </RevealOnScroll>
        </div>

        <Prose className="max-w-3xl mt-12">
          <RevealOnScroll>
            <h2 id="mapping" className="inline-flex items-center gap-2">
              <Icon name="account_tree" className="text-primary text-2xl" />
              How WCAG maps into the law
            </h2>
            <p>
              WCAG is a voluntary standard on its own. It gets legal force because regulations and
              standards reference it.
            </p>
            <ul>
              <li>
                <strong>EU, EN 301 549:</strong> the EU harmonised standard incorporates{' '}
                <strong>WCAG 2.1 AA</strong> in its Chapter 9. Meeting WCAG AA gives a presumption of
                conformity under both the <Link href="/eaa">EAA</Link> and the public-sector Web
                Accessibility Directive.{' '}
                <SourceCite href={SRC.en301549}>EN 301 549</SourceCite>
              </li>
              <li>
                <strong>US, ADA &amp; Title II:</strong> the DOJ Title II rule adopts{' '}
                <strong>WCAG 2.1 AA</strong> for state and local government, and ADA Title III case
                law uses WCAG AA as the de-facto benchmark.{' '}
                <SourceCite href={SRC.doj}>DOJ web rule</SourceCite>
              </li>
              <li>
                <strong>US, Section 508:</strong> the 2017 refresh incorporates{' '}
                <strong>WCAG 2.0 AA</strong> for federal ICT procurement.{' '}
                <SourceCite href={SRC.section508}>US Access Board</SourceCite>
              </li>
            </ul>
            <p>
              The practical upshot: build to <strong>WCAG 2.2 AA</strong> and you satisfy the WCAG
              2.1 AA that the laws require, with headroom for the future. See how it fits each law on
              our <Link href="/eaa">EAA</Link> and <Link href="/ada">ADA</Link> pages.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="wcag-3" className="inline-flex items-center gap-2">
              <Icon name="schedule" className="text-primary text-2xl" />
              What about WCAG 3.0?
            </h2>
            <p>
              You may hear about WCAG 3.0. It is an ambitious rethink of how accessibility is
              measured, but it is still an <strong>early W3C Working Draft</strong>. It is years from
              being a finished standard and is <strong>not</strong> a compliance target. Plan around
              WCAG 2.2 AA; treat 3.0 as something to watch, not to act on yet.
            </p>
          </RevealOnScroll>
        </Prose>

        <div className="mx-auto max-w-3xl mt-8">
          <RevealOnScroll>
            <Callout variant="info" title="Put it into practice">
              <span className="inline-flex items-start gap-2">
                <Icon name="lightbulb" className="text-accent-deep text-xl shrink-0" />
                <span>
                  Ready to test your own site? Grab the{' '}
                  <Link href="/wcag-checklist">WCAG 2.2 AA checklist</Link>, or follow the{' '}
                  <Link href="/guides">guides</Link> for specific fixes. The glossary explains any
                  term you are not sure of.
                </span>
              </span>
            </Callout>
          </RevealOnScroll>
        </div>
      </Section>

      {/* By the numbers */}
      <Section background="sand" eyebrow="By the numbers" title="WCAG in a few figures">
        <RevealOnScroll>
          <Stats>
            <Stat value="4" label="Principles: Perceivable, Operable, Understandable, Robust (POUR)." />
            <Stat value="3" label="Conformance levels: A, AA and AAA. Aim for AA." />
            <Stat value="55" label="Success criteria at WCAG 2.2 Level AA (50 at WCAG 2.1 AA)." />
            <Stat value="24px" label="The minimum target size for interactive controls, new in 2.2 AA." />
          </Stats>
          <p className="mt-6 text-sm text-muted">
            Counts per the W3C.{' '}
            <SourceCite href={SRC.newIn22}>What&apos;s New in WCAG 2.2</SourceCite>
          </p>
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

      {/* Sources + closing */}
      <Section background="paper">
        <div className="mx-auto max-w-3xl">
          <Callout variant="info" title="This is guidance, not legal advice">
            This is guidance to help you understand WCAG, not legal advice. For decisions specific to
            your organisation, confirm with the official sources we link or a qualified adviser. We
            cannot guarantee compliance, and you should be wary of anyone who says they can.
          </Callout>

          <Sources
            items={[
              {
                href: SRC.wcag,
                label: 'Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.newIn22,
                label: "What's New in WCAG 2.2 (W3C)",
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.overview,
                label: 'WCAG overview (W3C / Web Accessibility Initiative)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.en301549,
                label: 'EN 301 549 v3.2.1, the EU harmonised ICT accessibility standard (ETSI)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.eaa,
                label: 'Directive (EU) 2019/882 (European Accessibility Act), EUR-Lex',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.doj,
                label: 'US DOJ: ADA Title II web rule fact sheet',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.section508,
                label: 'US Access Board: Section 508 / ICT standards',
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
