import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
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

// Canonical official sources (see BUILD-CONTEXT.md §sources).
const SRC = {
  wcag: 'https://www.w3.org/TR/WCAG22/',
  wcagOverview: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
  eaa: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng',
  ecEaa:
    'https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en',
  en301549:
    'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf',
  doj: 'https://www.ada.gov/resources/2024-03-08-web-rule/',
  section508: 'https://www.access-board.gov/ict/',
  webaim: 'https://webaim.org/projects/million/',
  who: 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health',
  overlay: 'https://overlayfactsheet.com/'
};

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: 'What is web accessibility?',
    a: 'Web accessibility means designing and building websites, apps and digital documents so that people with disabilities can perceive, understand, navigate and interact with them. That includes people who are blind or have low vision, are deaf or hard of hearing, have motor or cognitive disabilities, or use assistive technology such as screen readers, magnifiers or keyboard-only navigation. The recognised standard is WCAG.'
  },
  {
    q: 'What is WCAG?',
    a: 'WCAG stands for the Web Content Accessibility Guidelines, published by the World Wide Web Consortium (W3C). It is the international standard for digital accessibility, organised around four principles (Perceivable, Operable, Understandable, Robust) and three conformance levels (A, AA, AAA). Level AA is the target almost every law points to.'
  },
  {
    q: 'Which laws require web accessibility?',
    a: 'In the EU, the European Accessibility Act (Directive (EU) 2019/882) covers many private-sector products and services from 28 June 2025, and the Web Accessibility Directive (2016/2102) covers public-sector sites and apps. In the US, courts apply the ADA to websites, the DOJ Title II rule sets WCAG 2.1 AA for state and local government, and Section 508 covers federal procurement. They converge on WCAG AA.'
  },
  {
    q: 'What conformance level do I need to meet?',
    a: 'WCAG 2.1 Level AA is the practical target everywhere. The EU harmonised standard EN 301 549, the DOJ Title II rule and Section 508 all point to WCAG AA, and most ADA settlements use it too. AAA is not expected across a whole site.'
  },
  {
    q: 'Do accessibility overlays or widgets make my site compliant?',
    a: 'No. Overlay and widget products (such as accessiBe, AudioEye or UserWay) cannot make a site conformant. Automated tools detect only about 30 to 40 percent of WCAG issues; the rest need human testing. The Overlay Fact Sheet, signed by more than 1,000 accessibility professionals, rejects overlays as a compliance solution, overlay-equipped sites are still sued, and in 2025 the FTC finalised a $1,000,000 order against accessiBe for deceptive claims.'
  },
  {
    q: 'How do I make my website accessible?',
    a: 'Audit your site against WCAG 2.2 AA (automated scan plus manual and assistive-technology testing), fix the issues in priority order, publish an accessibility statement, and keep testing as the site changes. Build accessibility into your design and development process so new issues do not creep back in.'
  },
  {
    q: 'Why does web accessibility matter?',
    a: 'Around 1.3 billion people, roughly 16 percent of the world or one in six, experience significant disability (WHO). Yet WebAIM found that 94.8 percent of the top one million home pages had detectable WCAG failures in 2025. Beyond the legal duty, accessible sites reach more customers, work better on more devices and tend to be better built overall.'
  },
  {
    q: 'How long does it take to become compliant?',
    a: 'It depends on the size of the site and how many issues an audit finds, but accessibility is best treated as an ongoing programme rather than a one-off project. A typical path is an audit in weeks, a remediation phase over the following weeks or months, then continuous testing as content and features change.'
  }
];

export const metadata: Metadata = {
  title: 'What is web accessibility? WCAG, the EAA & ADA, explained',
  description:
    'A plain-English guide to web accessibility: the POUR principles, WCAG as the standard, the EAA, ADA and Section 508 laws, who must comply, and how to get compliant.',
  alternates: { canonical: '/accessibility' },
  openGraph: {
    type: 'article',
    title: 'What is web accessibility? WCAG, the EAA & ADA, explained',
    description:
      'Plain-English guide to web accessibility: POUR, WCAG AA, the EAA, ADA and Section 508, who must comply, and how to get compliant. Sourced and kept current.',
    url: `${SITE}/accessibility`,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
  }
};

export default function AccessibilityPillarPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is web accessibility? WCAG, the EAA & ADA, explained',
    description:
      'A plain-English guide to web accessibility: the POUR principles, WCAG as the standard, the EAA, ADA and Section 508 laws, who must comply, and how to get compliant.',
    inLanguage: 'en',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/accessibility` },
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'What is web accessibility?',
        item: `${SITE}/accessibility`
      }
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
            What is web accessibility?
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink/80 leading-relaxed">
            Web accessibility means building digital products that everyone can use, including people
            with disabilities. The shared standard is{' '}
            <SourceCite href={SRC.wcag}>WCAG</SourceCite>, and three legal drivers now make it a duty
            for most organisations: the European Accessibility Act in the EU, and the ADA and Section
            508 in the US. This page explains all of it without the jargon.
          </p>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted">
            <Icon name="verified" className="text-primary text-base" />
            Reviewed by the EAA Navigator team
          </p>

          <div className="mt-8">
            <TLDR>
              <ul className="space-y-2">
                <li>
                  <strong className="font-semibold">What:</strong> designing and building websites,
                  apps and documents so people with disabilities can use them.
                </li>
                <li>
                  <strong className="font-semibold">The standard:</strong> WCAG, built on four
                  principles, Perceivable, Operable, Understandable, Robust (POUR). Level AA is the
                  target.
                </li>
                <li>
                  <strong className="font-semibold">The laws:</strong> the EAA (EU), the ADA and
                  Section 508 (US), with EN 301 549 as the EU harmonised standard.
                </li>
                <li>
                  <strong className="font-semibold">Who:</strong> most businesses selling to or
                  serving the public, plus public-sector bodies.
                </li>
                <li>
                  <strong className="font-semibold">How:</strong> audit, fix, publish an
                  accessibility statement, then maintain. Overlays alone do not make you compliant.
                </li>
              </ul>
            </TLDR>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/wcag-checklist" variant="primary">
              Get the WCAG checklist
            </Button>
            <Button href="/glossary" variant="secondary">
              Open the glossary
            </Button>
          </div>

          <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-card border border-line shadow-[0_24px_60px_-24px_rgba(30,27,75,0.35)]">
            <Image
              src={IMAGES.heroBraille.src}
              alt={IMAGES.heroBraille.alt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </header>

      {/* Three legal drivers band */}
      <Section background="ink" eyebrow="Three legal drivers">
        <RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <Icon name="balance" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-2xl lg:text-3xl font-semibold text-accent-on-dark">
                EAA
              </p>
              <p className="mt-2 text-paper/80">
                The European Accessibility Act. EU law for many products and services, applying from
                28 June 2025.
              </p>
            </div>
            <div>
              <Icon name="gavel" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-2xl lg:text-3xl font-semibold text-accent-on-dark">
                ADA &amp; 508
              </p>
              <p className="mt-2 text-paper/80">
                US law. Courts apply the ADA to websites; Section 508 covers federal procurement.
              </p>
            </div>
            <div>
              <Icon name="rule" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-2xl lg:text-3xl font-semibold text-accent-on-dark">
                WCAG AA
              </p>
              <p className="mt-2 text-paper/80">
                The technical standard they all converge on, via EN 301 549 in the EU.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-paper/70">
            Different laws, one practical target: WCAG 2.1 AA.{' '}
            <Link href="/deadlines" className="text-accent-on-dark underline-offset-2 hover:underline">
              See the full deadline tracker
            </Link>
            .
          </p>
        </RevealOnScroll>
      </Section>

      {/* Main long-form */}
      <Section background="paper">
        <Prose className="max-w-3xl">
          <RevealOnScroll>
            <h2 id="what-it-is" className="inline-flex items-center gap-2">
              <Icon name="accessibility_new" className="text-primary text-2xl" />
              What web accessibility is, and who it is for
            </h2>
            <p>
              Web accessibility is the practice of building websites, apps and digital documents so
              that people with disabilities can perceive, understand, navigate and interact with
              them on an equal footing. That includes people who are blind or have low vision, who
              are deaf or hard of hearing, who have motor disabilities, and who have cognitive or
              learning disabilities. Many of these users rely on assistive technology, such as
              screen readers, screen magnifiers, voice control or keyboard-only navigation.{' '}
              <SourceCite href={SRC.wcagOverview}>W3C / WAI</SourceCite>
            </p>
            <p>
              Accessibility is not a niche concern. The World Health Organization estimates that
              around <strong>1.3 billion people, about 16 percent of the world, or one in six</strong>,
              experience significant disability.{' '}
              <SourceCite href={SRC.who}>WHO</SourceCite> Building for them also tends to build a
              better site for everyone: clearer structure, better contrast, captions, and pages that
              work on more devices and connections.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="pour" className="inline-flex items-center gap-2">
              <Icon name="category" className="text-primary text-2xl" />
              The POUR principles
            </h2>
            <p>
              The whole field rests on four principles, known by the initials{' '}
              <Link href="/glossary#pour">POUR</Link>. Content has to be:
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
                Users must be able to perceive the information. Think text alternatives for images,
                captions for video, and enough colour contrast to read the text.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="keyboard" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Operable</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Users must be able to operate the interface. Everything must work by keyboard, with
                visible focus, no keyboard traps, and no content that flashes dangerously.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="help" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Understandable</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Content and operation must be understandable. Use clear language, predictable
                navigation, and helpful, specific error messages on forms.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="shield" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Robust</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Content must work reliably with current and future tools, including assistive
                technology. Use valid, well-structured code and correct names, roles and values.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <Prose className="max-w-3xl mt-12">
          <RevealOnScroll>
            <h2 id="wcag" className="inline-flex items-center gap-2">
              <Icon name="rule" className="text-primary text-2xl" />
              WCAG: the standard everyone uses
            </h2>
            <p>
              The <Link href="/wcag">Web Content Accessibility Guidelines (WCAG)</Link> turn the four
              principles into testable success criteria. They are published by the W3C, the body that
              sets web standards, and they are the international benchmark for digital accessibility.{' '}
              <SourceCite href={SRC.wcag}>WCAG 2.2</SourceCite>
            </p>
            <p>WCAG has three conformance levels:</p>
            <ul>
              <li>
                <strong>Level A</strong> covers the most basic requirements.
              </li>
              <li>
                <strong>Level AA</strong> is the practical and legal target. It is what EN 301 549,
                the DOJ Title II rule, Section 508 and most ADA case law point to.
              </li>
              <li>
                <strong>Level AAA</strong> is the highest bar and is not expected across a whole
                site.
              </li>
            </ul>
            <p>
              When people say a site should be accessible, they almost always mean{' '}
              <strong>WCAG 2.1 Level AA</strong> (with WCAG 2.2 AA as the current best-practice
              version). For the versions, levels and what changed in 2.2, see our{' '}
              <Link href="/wcag">full WCAG explainer</Link>.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="laws" className="inline-flex items-center gap-2">
              <Icon name="gavel" className="text-primary text-2xl" />
              The three legal drivers
            </h2>
            <p>
              Three separate legal frameworks push organisations towards the same WCAG AA target.
            </p>
          </RevealOnScroll>
        </Prose>

        {/* Legal drivers cards (outside Prose for grid layout control) */}
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="balance" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                <Link href="/eaa" className="text-ink hover:text-primary">
                  EAA (EU)
                </Link>
              </h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                The European Accessibility Act, Directive (EU) 2019/882, covers many products and
                services and applies from 28 June 2025.{' '}
                <SourceCite href={SRC.eaa}>Directive (EU) 2019/882</SourceCite>
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="gavel" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                <Link href="/ada" className="text-ink hover:text-primary">
                  ADA &amp; 508 (US)
                </Link>
              </h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                US courts apply the ADA to websites, the DOJ Title II rule adopts WCAG 2.1 AA, and
                Section 508 covers federal procurement.{' '}
                <SourceCite href={SRC.doj}>DOJ web rule</SourceCite>
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="fact_check" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">EN 301 549</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                The EU harmonised standard. Its Chapter 9 incorporates WCAG 2.1 AA, so meeting WCAG
                AA gives a presumption of conformity in the EU.{' '}
                <SourceCite href={SRC.en301549}>EN 301 549 v3.2.1</SourceCite>
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <Prose className="max-w-3xl mt-12">
          <RevealOnScroll>
            <h2 id="who-must-comply" className="inline-flex items-center gap-2">
              <Icon name="groups" className="text-primary text-2xl" />
              Who must comply
            </h2>
            <p>
              The short answer is: most organisations that sell to, or serve, the public. Under the{' '}
              <Link href="/eaa">EAA</Link>, businesses placing covered products on the EU market or
              providing covered services (e-commerce, banking, transport, e-books and more) must
              comply, with a narrow exemption for micro-enterprises providing services.{' '}
              <SourceCite href={SRC.ecEaa}>European Commission</SourceCite> Public-sector bodies are
              covered by the separate Web Accessibility Directive.
            </p>
            <p>
              In the US, <Link href="/ada">ADA Title III</Link> reaches the websites of businesses
              open to the public, the DOJ Title II rule binds state and local government, and Section
              508 applies to federal agencies and the companies that sell to them. Even where a law
              does not name you directly, your customers and procurement partners increasingly ask
              for proof of conformance, often a <Link href="/vpat">VPAT</Link>.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="why-it-matters" className="inline-flex items-center gap-2">
              <Icon name="public" className="text-primary text-2xl" />
              Why it matters
            </h2>
            <p>
              The need is large and the gap is wide. WebAIM&apos;s 2025 analysis of the top one
              million home pages found that <strong>94.8 percent had detectable WCAG failures</strong>,
              with around 51 errors per home page on average. The most common problems were
              low-contrast text, missing alternative text on images, and missing form labels.{' '}
              <SourceCite href={SRC.webaim}>WebAIM Million 2025</SourceCite>
            </p>
            <p>
              Beyond the legal duty, accessibility widens your audience, improves usability for
              everyone, helps with search engine optimisation, and tends to produce more robust,
              maintainable code. It is rarely wasted effort.
            </p>
          </RevealOnScroll>
        </Prose>

        {/* Anti-overlay callout */}
        <div className="mx-auto max-w-3xl mt-8 space-y-4">
          <RevealOnScroll>
            <Callout variant="warn" title="Overlays and automated tools are not enough">
              Automated scanners and overlay widgets (such as accessiBe, AudioEye and UserWay) cannot
              make a site conformant. <strong>Automated tools catch only about 30 to 40 percent</strong>{' '}
              of WCAG issues; the rest need human and assistive-technology testing. The Overlay Fact
              Sheet, signed by more than 1,000 accessibility professionals, rejects overlays as a
              compliance solution, overlay-equipped sites are still sued, and in 2025 the FTC
              finalised a $1,000,000 order against accessiBe for deceptive claims.{' '}
              <SourceCite href={SRC.overlay}>Overlay Fact Sheet</SourceCite>
            </Callout>
          </RevealOnScroll>
        </div>

        <Prose className="max-w-3xl mt-12">
          <RevealOnScroll>
            <h2 id="how-to-comply" className="inline-flex items-center gap-2">
              <Icon name="checklist" className="text-primary text-2xl" />
              How to get compliant, in four steps
            </h2>
            <p>
              Compliance is a process, not a product you can bolt on. The reliable path has four
              steps.
            </p>
          </RevealOnScroll>
        </Prose>

        {/* Four steps (outside Prose for grid layout control) */}
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="fact_check" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">1. Audit</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Test the site against WCAG 2.2 AA using automated scans plus manual and
                assistive-technology testing. Automated tools alone miss most issues. The{' '}
                <Link href="/wcag-checklist" className="text-ink hover:text-primary">
                  WCAG 2.2 AA checklist
                </Link>{' '}
                walks you through what to check.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="build" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">2. Fix</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Work through the issues in priority order, starting with the ones that block users
                most. Use the{' '}
                <Link href="/wcag-checklist" className="text-ink hover:text-primary">
                  WCAG checklist
                </Link>{' '}
                to track progress, and the <Link href="/guides" className="text-ink hover:text-primary">guides</Link> for specific fixes.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="description" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                3. Publish a statement
              </h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Write an accessibility statement: your compliance status, known issues, a feedback
                channel and a contact. It is mandatory for public-sector bodies and expected of EAA
                service providers.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="update" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">4. Maintain</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Accessibility decays as content and features change. Build it into design and
                development, and retest regularly so new issues do not creep back in.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mx-auto max-w-3xl mt-8">
          <RevealOnScroll>
            <Callout variant="info" title="Where to go next">
              <span className="inline-flex items-start gap-2">
                <Icon name="lightbulb" className="text-accent-deep text-xl shrink-0" />
                <span>
                  New to this? Start with the <Link href="/wcag">WCAG explainer</Link>, then read the
                  law that applies to you, the <Link href="/eaa">EAA</Link> in the EU or the{' '}
                  <Link href="/ada">ADA and Section 508</Link> in the US. Our{' '}
                  <Link href="/guides">guides</Link> walk through specific tasks.
                </span>
              </span>
            </Callout>
          </RevealOnScroll>
        </div>
      </Section>

      {/* By the numbers */}
      <Section background="sand" eyebrow="By the numbers" title="Web accessibility in a few figures">
        <RevealOnScroll>
          <Stats>
            <Stat
              value="1.3bn"
              label="People, about 16% or one in six worldwide, who experience significant disability (WHO)."
            />
            <Stat
              value="94.8%"
              label="Of the top one million home pages had detectable WCAG failures in 2025 (WebAIM)."
            />
            <Stat
              value="AA"
              label="The WCAG conformance level the EAA, the ADA case law and Section 508 all target."
            />
            <Stat
              value="~30–40%"
              label="The share of WCAG issues automated tools can catch. The rest need human testing."
            />
          </Stats>
          <p className="mt-6 text-sm text-muted">
            Sources: <SourceCite href={SRC.who}>WHO</SourceCite>,{' '}
            <SourceCite href={SRC.webaim}>WebAIM Million 2025</SourceCite> and{' '}
            <SourceCite href={SRC.overlay}>the Overlay Fact Sheet</SourceCite>.
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
            This is guidance to help you understand web accessibility, not legal advice. For
            decisions specific to your organisation, confirm with the official sources we link or a
            qualified adviser. We cannot guarantee compliance, and you should be wary of anyone who
            says they can.
          </Callout>

          <Sources
            items={[
              {
                href: SRC.wcag,
                label: 'Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.wcagOverview,
                label: 'WCAG overview (W3C / Web Accessibility Initiative)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.eaa,
                label: 'Directive (EU) 2019/882 (European Accessibility Act), EUR-Lex',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.ecEaa,
                label: 'European Commission: European Accessibility Act',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.en301549,
                label: 'EN 301 549 v3.2.1, the EU harmonised ICT accessibility standard (ETSI)',
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
              },
              {
                href: SRC.webaim,
                label: 'WebAIM Million 2025 (annual accessibility analysis)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.who,
                label: 'World Health Organization: Disability fact sheet',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.overlay,
                label: 'Overlay Fact Sheet',
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
