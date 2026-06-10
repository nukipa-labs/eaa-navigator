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
  doj: 'https://www.ada.gov/resources/2024-03-08-web-rule/',
  section508: 'https://www.access-board.gov/ict/',
  vpatFaq: 'https://www.section508.gov/sell/acr-vpat-faq/',
  iti: 'https://www.itic.org/policy/accessibility/vpat',
  wcag: 'https://www.w3.org/TR/WCAG22/'
};

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: 'Does the ADA apply to websites?',
    a: 'The ADA does not name websites and sets no explicit technical standard, but US courts and settlements have widely treated the websites of "public accommodations" (Title III) as covered. In practice, WCAG 2.0 / 2.1 Level AA is used as the de-facto benchmark for what an accessible website looks like.'
  },
  {
    q: 'What standard does the ADA require for websites?',
    a: 'There is no single explicit ADA web standard for private businesses. Courts and settlements generally use WCAG AA (2.0 or 2.1). For state and local government, the DOJ Title II rule does set an explicit standard: WCAG 2.1 Level AA.'
  },
  {
    q: 'What is the DOJ Title II web rule?',
    a: 'In April 2024 the US Department of Justice published a final rule under ADA Title II that adopts WCAG 2.1 Level AA for the websites and mobile apps of state and local governments. The compliance deadlines were extended by one year in April 2026: 26 April 2027 for entities serving populations of 50,000 or more, and 26 April 2028 for smaller entities and special districts.'
  },
  {
    q: 'How many website accessibility lawsuits are there?',
    a: 'Federal website-accessibility lawsuits run in the thousands per year. Published counts vary by methodology and venue, from roughly 2,500 federal-only filings to around 4,000 across all venues in 2024, with a rebound in 2025. Treat "thousands a year" as the reliable figure rather than any single hard number.'
  },
  {
    q: 'What is Section 508?',
    a: 'Section 508 is a US federal procurement law. It requires that information and communication technology bought, used or developed by federal agencies be accessible. The 2017 "508 Refresh" incorporated WCAG 2.0 Level AA as the technical standard.'
  },
  {
    q: 'What is a VPAT?',
    a: 'A VPAT (Voluntary Product Accessibility Template) is a document, produced by ITI, that a vendor fills in to describe how a product meets accessibility standards. A completed VPAT is called an Accessibility Conformance Report (ACR). Procurement teams, especially US public sector under Section 508 and enterprise buyers, often require one.'
  }
];

export const metadata: Metadata = {
  title: 'ADA & Section 508 web accessibility (US), explained',
  description:
    'A plain-English guide to US web accessibility law: the ADA and websites, the WCAG AA de-facto standard, the volume of lawsuits, the DOJ Title II rule and its 2027/2028 deadlines, Section 508, and how VPATs fit.',
  alternates: { canonical: '/ada' },
  openGraph: {
    type: 'article',
    title: 'ADA & Section 508 web accessibility (US), explained',
    description:
      'Plain-English guide to US web accessibility law: the ADA and websites, WCAG AA, the DOJ Title II rule and its 2027/2028 deadlines, Section 508 and VPATs.',
    url: `${SITE}/ada`,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
  }
};

export default function AdaPillarPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ADA & Section 508 web accessibility (US), explained',
    description:
      'A plain-English guide to US web accessibility law: the ADA and websites, the WCAG AA de-facto standard, the volume of lawsuits, the DOJ Title II rule and its 2027/2028 deadlines, Section 508, and how VPATs fit.',
    inLanguage: 'en',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/ada` },
    author: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    publisher: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    reviewedBy: REVIEWED_BY,
    about: {
      '@type': 'Legislation',
      name: 'Americans with Disabilities Act (ADA) and Section 508',
      url: SRC.doj
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
        name: 'ADA & Section 508 web accessibility',
        item: `${SITE}/ada`
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
            ADA &amp; Section 508 web accessibility (US)
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink/80 leading-relaxed">
            In the US, web accessibility is driven by the Americans with Disabilities Act (ADA), the
            DOJ&apos;s Title II rule for government, and Section 508 for federal procurement. None of
            the older law sets an explicit web standard, so <Link href="/wcag">WCAG AA</Link> has
            become the benchmark courts and buyers use. This page explains how they fit together.
          </p>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted">
            <Icon name="verified" className="text-primary text-base" />
            Reviewed by the EAA Navigator team
          </p>

          <div className="mt-8">
            <TLDR>
              <ul className="space-y-2">
                <li>
                  <strong className="font-semibold">ADA Title III:</strong> applied to business
                  websites by courts; no explicit standard, but WCAG AA is the de-facto benchmark.
                </li>
                <li>
                  <strong className="font-semibold">Lawsuits:</strong> thousands of website
                  accessibility cases are filed each year.
                </li>
                <li>
                  <strong className="font-semibold">DOJ Title II rule:</strong> WCAG 2.1 AA for state
                  and local government, due 26 Apr 2027 / 26 Apr 2028.
                </li>
                <li>
                  <strong className="font-semibold">Section 508:</strong> federal procurement; the
                  2017 refresh uses WCAG 2.0 AA.
                </li>
                <li>
                  <strong className="font-semibold">VPAT:</strong> the document buyers ask for to
                  prove conformance.
                </li>
              </ul>
            </TLDR>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/wcag-checklist" variant="primary">
              Get the WCAG 2.2 AA checklist
            </Button>
            <Button href="/vpat" variant="secondary">
              About VPATs
            </Button>
          </div>
        </Container>
      </header>

      {/* Title II deadline band */}
      <Section background="ink" eyebrow="DOJ Title II deadlines">
        <RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <Icon name="event" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-3xl lg:text-4xl font-semibold text-accent-on-dark">
                26 April 2027
              </p>
              <p className="mt-2 text-paper/80">
                State and local government entities serving populations of 50,000 or more.
              </p>
            </div>
            <div>
              <Icon name="event" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-3xl lg:text-4xl font-semibold text-accent-on-dark">
                26 April 2028
              </p>
              <p className="mt-2 text-paper/80">
                Smaller entities (under 50,000) and special districts.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-paper/70">
            WCAG 2.1 AA. Deadlines extended by one year in April 2026.{' '}
            <SourceCite href={SRC.doj}>
              <span className="text-accent-on-dark">DOJ web rule</span>
            </SourceCite>
            .{' '}
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
            <h2 id="ada-websites" className="inline-flex items-center gap-2">
              <Icon name="gavel" className="text-primary text-2xl" />
              The ADA and websites
            </h2>
            <p>
              The Americans with Disabilities Act became law in 1990, long before the modern web. Its
              Title III prohibits discrimination by &ldquo;places of public accommodation&rdquo;, and
              US courts have widely held that this reaches the websites of businesses open to the
              public. The catch: the ADA itself <strong>names no website and sets no explicit
              technical standard</strong>.
            </p>
            <p>
              To fill that gap, courts, the DOJ and settlement agreements have converged on{' '}
              <strong>WCAG 2.0 / 2.1 Level AA</strong> as the practical measure of an accessible
              website. So while there is no statute that says &ldquo;meet WCAG AA&rdquo;, that is
              what compliance looks like in practice for a Title III business.{' '}
              <SourceCite href={SRC.doj}>US DOJ</SourceCite>
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="lawsuits" className="inline-flex items-center gap-2">
              <Icon name="balance" className="text-primary text-2xl" />
              The volume of lawsuits
            </h2>
            <p>
              Website accessibility litigation in the US is substantial.{' '}
              <strong>Thousands of federal cases are filed each year.</strong> Exact counts vary by
              who is measuring and which venues they include, ranging from roughly 2,500 federal-only
              filings to around 4,000 across all venues in 2024, with a rebound reported in 2025.
            </p>
            <p>
              Rather than quote one hard number as fact, the safe takeaway is the scale: this is a
              steady, high-volume area of litigation, much of it targeting businesses whose sites
              fail common WCAG checks like contrast, alt text and form labels. Fixing those issues is
              both the compliant and the defensive move.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="doj-title-ii" className="inline-flex items-center gap-2">
              <Icon name="account_balance" className="text-primary text-2xl" />
              The DOJ Title II rule (state and local government)
            </h2>
            <p>
              In <strong>April 2024</strong>, the Department of Justice published a final rule under
              ADA Title II that, for the first time, sets an explicit web standard for{' '}
              <strong>state and local government</strong>: their websites and mobile apps must meet{' '}
              <strong>WCAG 2.1 Level AA</strong>.{' '}
              <SourceCite href={SRC.doj}>DOJ web rule</SourceCite>
            </p>
            <p>The compliance deadlines, as extended by one year in April 2026, are:</p>
            <ul>
              <li>
                <strong>26 April 2027</strong> for public entities serving populations of{' '}
                <strong>50,000 or more</strong>.
              </li>
              <li>
                <strong>26 April 2028</strong> for entities serving populations{' '}
                <strong>under 50,000</strong> and for special district governments.
              </li>
            </ul>
            <p>
              This rule binds government bodies, not private businesses, but it cements WCAG 2.1 AA as
              the US reference point. See the <Link href="/deadlines">deadlines page</Link> for how
              these sit alongside the EU dates.
            </p>
            <Callout variant="info" title="WCAG 2.1 or 2.2? Both, in practice">
              The laws above still cite <strong>WCAG 2.1 AA</strong>, but <strong>WCAG 2.2</strong> is
              the current version and is backwards-compatible — it only adds criteria. Meeting{' '}
              <Link href="/wcag">WCAG 2.2 AA</Link> therefore also satisfies 2.1 AA, so targeting 2.2 is
              the safe, future-proof choice — which is why our checklist is 2.2.
            </Callout>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="section-508" className="inline-flex items-center gap-2">
              <Icon name="shopping_bag" className="text-primary text-2xl" />
              Section 508 (federal procurement)
            </h2>
            <p>
              Section 508 of the Rehabilitation Act requires that information and communication
              technology (ICT) developed, bought, maintained or used by{' '}
              <strong>federal agencies</strong> be accessible. The{' '}
              <strong>2017 &ldquo;508 Refresh&rdquo;</strong> aligned it with international standards
              by incorporating <strong>WCAG 2.0 Level AA</strong>.{' '}
              <SourceCite href={SRC.section508}>US Access Board</SourceCite>
            </p>
            <p>
              Section 508 matters well beyond government walls: any company that wants to{' '}
              <strong>sell software, hardware or services to the US federal government</strong> has to
              show its products meet the standard. That is where VPATs come in.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="vpat" className="inline-flex items-center gap-2">
              <Icon name="description" className="text-primary text-2xl" />
              How VPATs fit
            </h2>
            <p>
              A <Link href="/vpat">VPAT</Link> (Voluntary Product Accessibility Template), produced by
              the trade association ITI, is the document a vendor fills in to describe how a product
              conforms to accessibility standards. A completed VPAT is called an{' '}
              <strong>Accessibility Conformance Report (ACR)</strong>.{' '}
              <SourceCite href={SRC.vpatFaq}>Section508.gov</SourceCite>
            </p>
            <p>
              VPATs come in four editions, so a vendor can report against the standard a buyer cares
              about: <strong>WCAG, Section 508, EU (EN 301 549) and INT</strong> (a combined,
              international edition). Procurement teams, especially US public-sector buyers under
              Section 508 and large enterprises, routinely request one before purchasing.{' '}
              <SourceCite href={SRC.iti}>ITI</SourceCite>
            </p>
          </RevealOnScroll>
        </Prose>

        {/* Three pillars cards (outside Prose) */}
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="gavel" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">ADA Title III</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Private businesses. No explicit standard in law; WCAG AA used by courts and
                settlements.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="account_balance" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">DOJ Title II</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                State and local government. WCAG 2.1 AA, explicit, due 26 Apr 2027 / 2028.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="shopping_bag" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Section 508</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Federal procurement. WCAG 2.0 AA since the 2017 refresh; proven via a VPAT.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mx-auto max-w-3xl mt-8">
          <RevealOnScroll>
            <Callout variant="warn" title="Overlays do not equal ADA compliance">
              Overlay widgets do not make a site ADA-compliant. Overlay-equipped sites are still
              sued, automated tools catch only part of the issues, and the DOJ has said overlays are
              not a substitute for real conformance. In 2025 the FTC finalised a $1,000,000 order
              against an overlay vendor for deceptive claims.{' '}
              <Link href="/accessibility">More on why overlays fall short</Link>.
            </Callout>
          </RevealOnScroll>
        </div>
      </Section>

      {/* By the numbers */}
      <Section background="sand" eyebrow="By the numbers" title="US web accessibility in a few figures">
        <RevealOnScroll>
          <Stats>
            <Stat value="WCAG AA" label="The de-facto standard US courts and the DOJ apply to websites." />
            <Stat value="Thousands" label="Website accessibility lawsuits filed in the US each year." />
            <Stat value="26 Apr 2027" label="DOJ Title II deadline for larger government entities (≥50k)." />
            <Stat value="WCAG 2.0 AA" label="The standard Section 508 has used since the 2017 refresh." />
          </Stats>
          <p className="mt-6 text-sm text-muted">
            Lawsuit counts vary by methodology and venue; treat &ldquo;thousands a year&rdquo; as the
            reliable figure. <SourceCite href={SRC.doj}>US DOJ</SourceCite>
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
            This is guidance to help you understand US web accessibility law, not legal advice. For
            decisions specific to your organisation, confirm with the official sources we link or a
            qualified adviser. We cannot guarantee compliance, and you should be wary of anyone who
            says they can.
          </Callout>

          <Sources
            items={[
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
                href: SRC.vpatFaq,
                label: 'Section508.gov: ACR / VPAT FAQ',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.iti,
                label: 'ITI: Voluntary Product Accessibility Template (VPAT)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.wcag,
                label: 'Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation)',
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
