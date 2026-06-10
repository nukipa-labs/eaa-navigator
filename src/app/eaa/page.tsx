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
  eaa: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng',
  ecEaa:
    'https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en',
  en301549:
    'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf',
  wcag: 'https://www.w3.org/TR/WCAG22/',
  wad: 'https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-public-sector-websites-and-mobile-apps.html'
};

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: 'What is the European Accessibility Act (EAA)?',
    a: 'The EAA is Directive (EU) 2019/882. It harmonises accessibility requirements across the EU for a defined set of products and services, so that people with disabilities can use them on an equal footing. It was adopted in April 2019, member states had to transpose it into national law by 28 June 2022, and its requirements apply from 28 June 2025.'
  },
  {
    q: 'When does the EAA apply?',
    a: 'The requirements apply from 28 June 2025. There are transitional rules: existing service contracts can continue until 28 June 2030, and self-service terminals already in use before 28 June 2025 may run until the end of their economic life, up to a maximum of 20 years.'
  },
  {
    q: 'What products and services does the EAA cover?',
    a: 'Covered products include computers and operating systems, smartphones, TV equipment for digital television, ATMs, ticketing and check-in machines, e-readers and payment terminals. Covered services include e-commerce, consumer banking, e-books, electronic communications, access to audiovisual media services, and air, bus, rail and waterborne passenger transport services.'
  },
  {
    q: 'Are small businesses exempt from the EAA?',
    a: 'There is a micro-enterprise exemption, but it is narrow. It applies only to micro-enterprises that provide services, defined as fewer than 10 staff and an annual turnover or balance sheet of no more than 2 million euro. Micro-enterprises that deal in products are not exempt.'
  },
  {
    q: 'How do I comply with the EAA?',
    a: 'Conformance is shown via the harmonised standard EN 301 549, which for web and mobile incorporates WCAG 2.1 AA. In practice that means building your digital products and services to WCAG 2.1 AA (WCAG 2.2 AA as best practice), and making accessibility information available. Audit, fix, document, and maintain.'
  },
  {
    q: 'What are the penalties under the EAA?',
    a: 'The EAA leaves penalties to each member state, which must make them effective, proportionate and dissuasive. There is no single EU-wide figure; the amounts and enforcement mechanisms vary by country. Non-compliant products and services can also be ordered withdrawn from the market.'
  },
  {
    q: 'How is the EAA different from the Web Accessibility Directive?',
    a: 'The Web Accessibility Directive (2016/2102) covers public-sector websites and mobile apps. The EAA (2019/882) covers private-sector products and services. Both use EN 301 549 (and therefore WCAG AA) as the technical benchmark, so the underlying standard is the same.'
  }
];

export const metadata: Metadata = {
  title: 'The European Accessibility Act (EAA), explained',
  description:
    'A plain-English guide to the European Accessibility Act, Directive (EU) 2019/882: the dates, the covered products and services, the micro-enterprise exemption, how conformance works via EN 301 549 and WCAG, and penalties.',
  alternates: { canonical: '/eaa' },
  openGraph: {
    type: 'article',
    title: 'The European Accessibility Act (EAA), explained',
    description:
      'Plain-English guide to the EAA, Directive (EU) 2019/882: dates, covered products and services, the micro-enterprise exemption, EN 301 549 / WCAG and penalties.',
    url: `${SITE}/eaa`,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: 'EAA Navigator' }]
  }
};

export default function EaaPillarPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The European Accessibility Act (EAA), explained',
    description:
      'A plain-English guide to the European Accessibility Act, Directive (EU) 2019/882: the dates, the covered products and services, the micro-enterprise exemption, how conformance works via EN 301 549 and WCAG, and penalties.',
    inLanguage: 'en',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/eaa` },
    author: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    publisher: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    reviewedBy: REVIEWED_BY,
    about: {
      '@type': 'Legislation',
      name: 'Directive (EU) 2019/882 (European Accessibility Act)',
      legislationIdentifier: 'Directive (EU) 2019/882',
      url: SRC.eaa
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
        name: 'The European Accessibility Act (EAA)',
        item: `${SITE}/eaa`
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
            The European Accessibility Act (EAA)
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink/80 leading-relaxed">
            The EAA is an EU law that requires a defined set of products and services to be
            accessible to people with disabilities. Its requirements apply from{' '}
            <strong>28 June 2025</strong>, and conformance is shown through the harmonised standard
            EN 301 549, which builds on <Link href="/wcag">WCAG</Link>.{' '}
            <SourceCite href={SRC.eaa}>Directive (EU) 2019/882</SourceCite> sets it out; this page
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
                  <strong className="font-semibold">What:</strong> the European Accessibility Act,
                  Directive (EU) 2019/882.
                </li>
                <li>
                  <strong className="font-semibold">When:</strong> transposed by 28 Jun 2022, applies
                  from 28 Jun 2025. Service-contract transition to 28 Jun 2030.
                </li>
                <li>
                  <strong className="font-semibold">Who:</strong> businesses placing covered products
                  on the EU market or providing covered services.
                </li>
                <li>
                  <strong className="font-semibold">Exemption:</strong> micro-enterprises providing
                  services only (fewer than 10 staff and no more than 2m euro).
                </li>
                <li>
                  <strong className="font-semibold">How:</strong> conform to EN 301 549, which builds
                  on WCAG 2.1 AA.
                </li>
              </ul>
            </TLDR>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/wcag-checklist" variant="primary">
              Get the WCAG 2.2 AA checklist
            </Button>
            <Button href="/deadlines" variant="secondary">
              See all deadlines
            </Button>
          </div>
        </Container>
      </header>

      {/* Key dates band */}
      <Section background="ink" eyebrow="Key dates">
        <RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <Icon name="event" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-3xl lg:text-4xl font-semibold text-accent-on-dark">
                28 June 2025
              </p>
              <p className="mt-2 text-paper/80">
                EAA requirements apply. Covered products and services placed on the market must be
                accessible.
              </p>
            </div>
            <div>
              <Icon name="event" className="text-accent-on-dark text-3xl" />
              <p className="mt-2 font-display text-3xl lg:text-4xl font-semibold text-accent-on-dark">
                28 June 2030
              </p>
              <p className="mt-2 text-paper/80">
                Service contracts in force before 28 Jun 2025 may continue until this date.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-paper/70">
            Member states had to transpose the directive by 28 June 2022.{' '}
            <SourceCite href={SRC.eaa}>
              <span className="text-accent-on-dark">Directive (EU) 2019/882</span>
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
            <h2 id="what-it-is" className="inline-flex items-center gap-2">
              <Icon name="balance" className="text-primary text-2xl" />
              What the EAA is, and what it is for
            </h2>
            <p>
              The European Accessibility Act, EAA for short, is{' '}
              <SourceCite href={SRC.eaa}>Directive (EU) 2019/882</SourceCite>, adopted on 17 April
              2019. Its purpose is to harmonise accessibility requirements across the EU for a defined
              set of products and services, so that people with disabilities can buy and use them on
              an equal footing, and so that businesses face one common set of rules rather than 27
              different ones.{' '}
              <SourceCite href={SRC.ecEaa}>European Commission</SourceCite>
            </p>
            <p>
              Because it is a directive, the EAA had to be{' '}
              <strong>transposed into national law in each member state by 28 June 2022</strong>, and
              its requirements <strong>apply from 28 June 2025</strong>. From that date, covered
              products and services placed on the EU market must meet the accessibility requirements.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="dates" className="inline-flex items-center gap-2">
              <Icon name="event" className="text-primary text-2xl" />
              The dates and transition periods
            </h2>
            <ul>
              <li>
                <strong>28 June 2022:</strong> member states had to transpose the EAA into national
                law.
              </li>
              <li>
                <strong>28 June 2025:</strong> the accessibility requirements apply.
              </li>
              <li>
                <strong>28 June 2030:</strong> service contracts already in force before 28 June 2025
                may continue until this date.
              </li>
              <li>
                <strong>Up to 20 years:</strong> self-service terminals lawfully in use before 28
                June 2025 may continue to be used until the end of their economic life, capped at 20
                years.
              </li>
            </ul>
            <p>
              For the full timeline, including the related public-sector dates, see our{' '}
              <Link href="/deadlines">accessibility deadlines page</Link>.{' '}
              <SourceCite href={SRC.eaa}>Directive (EU) 2019/882</SourceCite>
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="scope" className="inline-flex items-center gap-2">
              <Icon name="category" className="text-primary text-2xl" />
              What the EAA covers
            </h2>
            <p>
              The EAA applies to a specific list of products and services, not to everything sold in
              the EU.
            </p>
          </RevealOnScroll>
        </Prose>

        {/* Products / services cards (outside Prose for grid layout control) */}
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="devices" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Covered products</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink/90 leading-relaxed list-disc pl-5">
                <li>Computers and operating systems</li>
                <li>Smartphones and other communication devices</li>
                <li>TV equipment for digital television</li>
                <li>ATMs and payment terminals</li>
                <li>Ticketing and check-in machines</li>
                <li>E-readers</li>
              </ul>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="storefront" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Covered services</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink/90 leading-relaxed list-disc pl-5">
                <li>E-commerce</li>
                <li>Consumer banking</li>
                <li>E-books</li>
                <li>Electronic communications</li>
                <li>Access to audiovisual media services</li>
                <li>Air, bus, rail and waterborne passenger transport</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mx-auto max-w-3xl mt-8">
          <RevealOnScroll>
            <Callout variant="info" title="E-commerce is in scope">
              <span className="inline-flex items-start gap-2">
                <Icon name="shopping_cart" className="text-accent-deep text-xl shrink-0" />
                <span>
                  If you sell to consumers online in the EU, your e-commerce service is a covered
                  service. That makes the EAA relevant to a very large number of websites, not just
                  to makers of hardware.{' '}
                  <SourceCite href={SRC.ecEaa}>European Commission</SourceCite>
                </span>
              </span>
            </Callout>
          </RevealOnScroll>
        </div>

        <Prose className="max-w-3xl mt-12">
          <RevealOnScroll>
            <h2 id="exemption" className="inline-flex items-center gap-2">
              <Icon name="groups" className="text-primary text-2xl" />
              The micro-enterprise exemption
            </h2>
            <p>
              The EAA includes an exemption for the smallest businesses, but it is narrower than many
              people assume. It applies only to{' '}
              <strong>micro-enterprises that provide services</strong>. A micro-enterprise is one with{' '}
              <strong>fewer than 10 staff and an annual turnover or balance sheet of no more than 2
              million euro</strong>.
            </p>
            <p>
              The key limit: the exemption covers services only.{' '}
              <strong>Micro-enterprises that deal in products are not exempt.</strong> And even
              exempt service providers are encouraged to make their offerings accessible. If you are
              unsure whether the EAA applies to you, our guide on{' '}
              <Link href="/guides/who-does-the-eaa-apply-to">who the EAA applies to</Link> walks
              through it.{' '}
              <SourceCite href={SRC.eaa}>Directive (EU) 2019/882</SourceCite>
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="conformance" className="inline-flex items-center gap-2">
              <Icon name="fact_check" className="text-primary text-2xl" />
              How conformance works: EN 301 549 and WCAG
            </h2>
            <p>
              The EAA sets functional accessibility requirements but does not, on its own, spell out
              the technical detail. That comes from the harmonised standard{' '}
              <strong>EN 301 549</strong>. For websites and mobile applications, EN 301 549 (Chapter
              9) incorporates <strong>WCAG 2.1 Level AA</strong>.{' '}
              <SourceCite href={SRC.en301549}>EN 301 549 v3.2.1</SourceCite>
            </p>
            <p>
              In practice this means: meet <Link href="/wcag">WCAG 2.1 AA</Link> (with WCAG 2.2 AA as
              current best practice) and you get a presumption of conformity for the web and mobile
              parts of your obligations. That is why almost everything on this site comes back to
              WCAG AA.
            </p>
          </RevealOnScroll>
        </Prose>

        {/* Conformance steps (outside Prose) */}
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="fact_check" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Audit</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Test your digital products and services against WCAG 2.2 AA with automated, manual
                and assistive-technology testing. The{' '}
                <Link href="/wcag-checklist" className="text-ink hover:text-primary">
                  WCAG 2.2 AA checklist
                </Link>{' '}
                sets out what to check.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="build" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Fix and document</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Work through the issues, then document conformance and make accessibility information
                available, as the EAA requires of service providers. The{' '}
                <Link href="/guides" className="text-ink hover:text-primary">
                  guides
                </Link>{' '}
                cover the common fixes.
              </p>
            </div>
            <div className="rounded-card border border-line bg-card p-6">
              <Icon name="update" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">Maintain</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">
                Keep testing as products and services change, so conformance does not slip after the
                first push.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <Prose className="max-w-3xl mt-12">
          <RevealOnScroll>
            <h2 id="penalties" className="inline-flex items-center gap-2">
              <Icon name="gavel" className="text-primary text-2xl" />
              Penalties and enforcement
            </h2>
            <p>
              The EAA leaves penalties to each member state. National rules must be{' '}
              <strong>effective, proportionate and dissuasive</strong>, but there is no single
              EU-wide figure, and the amounts and enforcement bodies differ from country to country.
              Market-surveillance authorities can require non-compliant products and services to be
              brought into conformity or withdrawn.{' '}
              <SourceCite href={SRC.eaa}>Directive (EU) 2019/882</SourceCite>
            </p>
            <p>
              Because enforcement is national, check the rules in the member states where you sell.
              Beyond fines, there is reputational and commercial risk, and complaints can come from
              users and consumer bodies as well as regulators.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="what-to-do" className="inline-flex items-center gap-2">
              <Icon name="checklist" className="text-primary text-2xl" />
              What a business should do
            </h2>
            <ul>
              <li>
                <strong>Confirm whether you are in scope.</strong> Identify whether your products or
                services are on the covered list, and whether the narrow micro-enterprise exemption
                could apply. See <Link href="/guides/who-does-the-eaa-apply-to">who the EAA applies
                to</Link>.
              </li>
              <li>
                <strong>Audit against WCAG 2.2 AA.</strong> Work through the{' '}
                <Link href="/wcag-checklist">WCAG 2.2 AA checklist</Link> with manual and
                assistive-technology testing, not just an automated scan, since automated tools
                catch only part of the issues. For complex products, an independent manual audit is
                worth commissioning.
              </li>
              <li>
                <strong>Fix and document.</strong> Remediate, keep evidence of conformance, and make
                accessibility information available.
              </li>
              <li>
                <strong>Maintain.</strong> Build accessibility into your processes so you stay
                compliant as things change.
              </li>
            </ul>
          </RevealOnScroll>
        </Prose>

        <div className="mx-auto max-w-3xl mt-8">
          <RevealOnScroll>
            <Callout variant="warn" title="Beware the overlay shortcut">
              No automated overlay or widget makes you EAA-compliant. Conformance depends on the
              product or service genuinely meeting EN 301 549 / WCAG AA, which needs real audit and
              remediation work. Treat any "instant compliance" claim with caution.{' '}
              <Link href="/accessibility">See our explainer on why overlays fall short</Link>.
            </Callout>
          </RevealOnScroll>
        </div>
      </Section>

      {/* By the numbers */}
      <Section background="sand" eyebrow="By the numbers" title="The EAA in a few figures">
        <RevealOnScroll>
          <Stats>
            <Stat value="28 Jun 2025" label="The date the EAA requirements apply." />
            <Stat value="28 Jun 2030" label="End of the transition for existing service contracts." />
            <Stat value="<10 / €2m" label="Micro-enterprise threshold, for the services-only exemption." />
            <Stat value="WCAG 2.1 AA" label="The standard EN 301 549 incorporates for web and mobile." />
          </Stats>
          <p className="mt-6 text-sm text-muted">
            Penalties are set by each member state and must be effective, proportionate and
            dissuasive. <SourceCite href={SRC.eaa}>Directive (EU) 2019/882</SourceCite>
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
            This is guidance to help you understand the EAA, not legal advice. For decisions specific
            to your business, confirm with the official sources we link or a qualified adviser. We
            cannot guarantee compliance, and you should be wary of anyone who says they can.
          </Callout>

          <Sources
            items={[
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
                href: SRC.wcag,
                label: 'Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation)',
                retrieved: '9 Jun 2026'
              },
              {
                href: SRC.wad,
                label: 'EUR-Lex summary: Web Accessibility Directive (2016/2102)',
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
