import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Section,
  TLDR,
  Callout,
  SourceCite,
  Sources,
  JsonLd,
  RevealOnScroll,
  ContourBackground,
  Prose,
  Icon
} from '@/components/ui';
import { LeadGateForm } from '@/components/LeadGateForm';
import { webPage, breadcrumb, REVIEWED_BY, DATE_MODIFIED, SITE } from '@/lib/schema';

const PUBLISHED = '2025-09-01';
const MODIFIED = DATE_MODIFIED;

const SRC = {
  vpat: 'https://www.itic.org/policy/accessibility/vpat',
  acrVpatFaq: 'https://www.section508.gov/sell/acr-vpat-faq/',
  accessBoard: 'https://www.access-board.gov/ict/',
  en301549:
    'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf',
  wcag22: 'https://www.w3.org/TR/WCAG22/',
  eaaDirective: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng'
};

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: 'What is a VPAT?',
    a: 'A VPAT — Voluntary Product Accessibility Template — is a standard document, published by the IT industry association ITI, that you fill in to describe how your product conforms to accessibility standards. The blank template is the VPAT; the completed, accurate document is called an Accessibility Conformance Report (ACR). Buyers, especially in procurement, request it to compare products on accessibility.'
  },
  {
    q: 'What is the difference between a VPAT and an ACR?',
    a: 'A VPAT is the empty template. An ACR — Accessibility Conformance Report — is the filled-in result: a real statement of how your product measures up against each applicable success criterion, marked as supports, partially supports or does not support, with explanatory remarks. People often say "send us your VPAT" when they mean "send us your completed ACR".'
  },
  {
    q: 'What are the four VPAT editions?',
    a: 'ITI publishes the VPAT in four editions so it can map to different standards: WCAG (the W3C guidelines), 508 (US Section 508), EU (the EN 301 549 standard behind EU law) and INT (an international edition combining all three). You pick the edition that matches what your buyer needs to see.'
  },
  {
    q: 'Can we fill in a VPAT ourselves without testing?',
    a: 'You can type into the template, but an ACR that is not backed by a real conformance evaluation is worth little and can be actively risky — overstating conformance can mislead buyers and expose you to liability. A credible ACR rests on actual testing against the standard, including the manual and assistive-technology testing that automated tools cannot replace.'
  },
  {
    q: 'Who asks for a VPAT?',
    a: 'Procurement teams, most consistently in the US public sector under Section 508, plus enterprise buyers and increasingly EU buyers referencing EN 301 549. If you sell software, hardware or digital services to large organisations or government, expect a VPAT/ACR request as part of due diligence.'
  },
  {
    q: 'Are PDFs and documents covered too?',
    a: 'Yes. Accessibility is not only about web pages. PDFs, Word and other documents must be tagged and structured so assistive technology can read them — correct reading order, real headings, alt text on images, and accessible tables and forms. Document accessibility is a frequent gap and a common reason a product falls short of a clean conformance report.'
  }
];

export default function VpatPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'VPAT & Document Accessibility',
    description:
      'What a VPAT is versus an ACR, the four editions, who requests them, how they are produced, and document/PDF accessibility. Get a VPAT template.',
    inLanguage: 'en',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/vpat` },
    author: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    publisher: { '@type': 'Organization', name: 'EAA Navigator', url: SITE },
    reviewedBy: REVIEWED_BY,
    about: {
      '@type': 'CreativeWork',
      name: 'Voluntary Product Accessibility Template (VPAT)',
      url: SRC.vpat
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
          articleSchema,
          faqSchema,
          webPage({
            name: 'VPAT & Document Accessibility',
            path: '/vpat',
            description:
              'What a VPAT is versus an ACR, the four editions, who requests them, how they are produced, and document/PDF accessibility. Get a VPAT template.'
          }),
          breadcrumb([{ name: 'VPAT & document accessibility', path: '/vpat' }])
        ]}
      />

      {/* Hero + template gate */}
      <section className="relative overflow-hidden bg-paper">
        <ContourBackground />
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                Resource &amp; service
              </p>
              <h1 className="mt-3 font-display font-semibold text-4xl lg:text-5xl text-ink leading-tight">
                VPAT &amp; document accessibility
              </h1>
              <p className="mt-6 text-lg text-ink/80 leading-relaxed">
                A <SourceCite href={SRC.vpat}>VPAT</SourceCite> is the template buyers ask you to fill
                in to show how your product conforms to accessibility standards. The completed,
                accurate version is an <strong>Accessibility Conformance Report (ACR)</strong>. This
                page explains both, the four editions, and the document-accessibility work that often
                gets missed.
              </p>
              <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted">
                <Icon name="verified" className="text-primary text-base" />
                Reviewed by the EAA Navigator team
              </p>
              <div className="mt-8">
                <TLDR>
                  <ul className="space-y-2">
                    <li>
                      <strong className="font-semibold">VPAT:</strong> the blank template, from ITI.
                    </li>
                    <li>
                      <strong className="font-semibold">ACR:</strong> the completed, accurate report
                      &mdash; what buyers actually want.
                    </li>
                    <li>
                      <strong className="font-semibold">Four editions:</strong> WCAG, 508, EU (EN 301
                      549) and INT.
                    </li>
                    <li>
                      <strong className="font-semibold">Honest fill-in:</strong> a credible ACR needs
                      a real evaluation, not guesswork.
                    </li>
                  </ul>
                </TLDR>
              </div>
            </div>
            <RevealOnScroll delay={1}>
              <div className="flex flex-col gap-5">
                {/* Real preview of the downloadable PDF cover (rendered from the Typst build) */}
                <Image
                  src="/brand/vpat-template-cover.jpg"
                  alt="Cover of the VPAT Template & Guide PDF"
                  width={778}
                  height={1100}
                  priority
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="mx-auto w-full max-w-[320px] rounded-card border border-line shadow-[0_18px_40px_-16px_rgba(30,27,75,0.35)]"
                />
                <LeadGateForm
                  slug="vpat-template"
                  source="vpat-page"
                  fields="name-email"
                  heading="Get the VPAT template"
                  blurb="Just your name and email — your download starts straight away. A blank VPAT with the full WCAG 2.2 A and AA report tables, plus a guide to completing it honestly."
                  cta="Get the VPAT template (PDF)"
                  downloadUrl="/downloads/vpat-accessibility-template.pdf"
                />
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* VPAT vs ACR */}
      <Section background="sand" eyebrow="The basics" title="VPAT vs ACR">
        <div className="grid gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <div className="h-full rounded-card border border-line bg-card p-6">
              <Icon name="draft" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display font-semibold text-xl text-ink">VPAT (the template)</h3>
              <p className="mt-2 text-ink/90 leading-relaxed">
                The Voluntary Product Accessibility Template, published by ITI. A standard, blank form
                with a row for each applicable success criterion. On its own it says nothing about
                your product &mdash; it is the structure you complete.{' '}
                <SourceCite href={SRC.vpat}>ITI</SourceCite>
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <div className="h-full rounded-card border border-line bg-card p-6">
              <Icon name="fact_check" className="text-primary text-3xl" />
              <h3 className="mt-3 font-display font-semibold text-xl text-ink">ACR (the report)</h3>
              <p className="mt-2 text-ink/90 leading-relaxed">
                The Accessibility Conformance Report: the filled-in VPAT. Each criterion marked{' '}
                <em>supports</em>, <em>partially supports</em> or <em>does not support</em>, with
                honest remarks. This is what a buyer means by &ldquo;send us your VPAT&rdquo;.{' '}
                <SourceCite href={SRC.acrVpatFaq}>Section508.gov</SourceCite>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Four editions */}
      <Section background="paper" eyebrow="Four editions" title="Pick the edition your buyer needs">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: 'rule', title: 'WCAG', body: 'Maps to the W3C Web Content Accessibility Guidelines — the web standard most buyers reference.' },
            { icon: 'gavel', title: '508', body: 'Maps to US Section 508, the standard for US federal procurement.' },
            { icon: 'public', title: 'EU', body: 'Maps to EN 301 549, the EU harmonised standard behind the EAA and public-sector rules.' },
            { icon: 'language', title: 'INT', body: 'An international edition combining WCAG, 508 and EN 301 549 in one report.' }
          ].map((c) => (
            <div key={c.title} className="rounded-card border border-line bg-card p-6">
              <Icon name={c.icon} className="text-primary text-3xl" />
              <h3 className="mt-3 font-display font-semibold text-xl text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Editions per ITI&apos;s VPAT. <SourceCite href={SRC.vpat}>ITI VPAT</SourceCite>
        </p>
      </Section>

      {/* Who asks + how produced + documents */}
      <Section background="paper">
        <Prose className="max-w-3xl">
          <RevealOnScroll>
            <h2 id="who-asks" className="inline-flex items-center gap-2">
              <Icon name="groups" className="text-primary text-2xl" />
              Who requests a VPAT, and why
            </h2>
            <p>
              VPAT/ACR requests come from buyers who need to compare products on accessibility before
              they purchase.
            </p>
            <ul>
              <li>
                <strong>US public-sector procurement.</strong> Section 508 requires federal agencies
                to consider accessibility when buying ICT, so an ACR is a routine part of selling to
                them. <SourceCite href={SRC.accessBoard}>US Access Board</SourceCite>
              </li>
              <li>
                <strong>Enterprise buyers.</strong> Large organisations fold accessibility into vendor
                due diligence and ask for an ACR alongside security and privacy documentation.{' '}
                <SourceCite href={SRC.acrVpatFaq}>Section508.gov</SourceCite>
              </li>
              <li>
                <strong>EU buyers.</strong> With the{' '}
                <Link href="/eaa">European Accessibility Act</Link> in force, buyers increasingly want
                conformance shown against{' '}
                <SourceCite href={SRC.en301549}>EN 301 549</SourceCite>, using the EU or INT edition.{' '}
                <SourceCite href={SRC.eaaDirective}>Directive (EU) 2019/882</SourceCite>
              </li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="how-produced" className="inline-flex items-center gap-2">
              <Icon name="science" className="text-primary text-2xl" />
              How an ACR is produced (honestly)
            </h2>
            <p>
              An ACR is only as good as the testing behind it. A credible report rests on a real
              conformance evaluation against <Link href="/wcag">WCAG 2.2 AA</Link> &mdash; automated
              scanning plus manual expert review, keyboard testing and assistive-technology testing.
              Filling in the template from memory or marking everything &ldquo;supports&rdquo; is both
              misleading to buyers and a liability to you.
            </p>
            <p>
              In practice that means an accessibility audit comes first; the ACR documents the
              result. If the audit finds gaps, you fix them and then issue an ACR that reflects the
              improved state. Work through the{' '}
              <Link href="/wcag-checklist">WCAG 2.2 AA checklist</Link> to see where you stand, and
              use the <Link href="/guides">guides</Link> to close the gaps.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 id="documents" className="inline-flex items-center gap-2">
              <Icon name="picture_as_pdf" className="text-primary text-2xl" />
              Document and PDF accessibility
            </h2>
            <p>
              Accessibility is not only about web pages. The PDFs, reports, forms and other documents
              you publish or send to customers must be accessible too &mdash; and they are a frequent
              gap. A tagged, accessible document has a correct reading order, real headings rather than
              visually styled text, alternative text on meaningful images, and accessible tables and
              form fields.
            </p>
            <p>
              For organisations with large libraries of PDFs &mdash; statements, policies, manuals,
              government forms &mdash; document accessibility is often the highest-value work, because
              those documents reach the public directly and are exactly where assistive-technology
              users get stuck. It is a core part of meeting{' '}
              <Link href="/accessibility">an accessible standard</Link> across everything you publish,
              not just your site templates.
            </p>
          </RevealOnScroll>
        </Prose>
      </Section>

      {/* FAQ */}
      <Section background="sand" eyebrow="FAQ" title="People also ask">
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

      {/* Sources + disclaimer */}
      <Section background="paper">
        <div className="mx-auto max-w-3xl">
          <Callout variant="info" title="This is guidance, not legal advice">
            This page is guidance to help you understand VPATs, ACRs and document accessibility, not
            legal advice. For decisions specific to your business, confirm with the official sources
            we link or a qualified adviser. No one can guarantee compliance, and you should be wary of
            anyone who says they can.
          </Callout>

          <Sources
            items={[
              { href: SRC.vpat, label: 'ITI: Voluntary Product Accessibility Template (VPAT)', retrieved: '9 Jun 2026' },
              { href: SRC.acrVpatFaq, label: 'Section508.gov: ACR/VPAT FAQ', retrieved: '9 Jun 2026' },
              { href: SRC.accessBoard, label: 'US Access Board: ICT / Section 508', retrieved: '9 Jun 2026' },
              { href: SRC.en301549, label: 'EN 301 549 v3.2.1 (ETSI)', retrieved: '9 Jun 2026' },
              { href: SRC.wcag22, label: 'Web Content Accessibility Guidelines (WCAG) 2.2 (W3C)', retrieved: '9 Jun 2026' },
              { href: SRC.eaaDirective, label: 'Directive (EU) 2019/882 (European Accessibility Act), EUR-Lex', retrieved: '9 Jun 2026' }
            ]}
          />
        </div>
      </Section>
    </>
  );
}

export const metadata: Metadata = {
  title: 'VPAT & Document Accessibility',
  description:
    'What a VPAT is versus an ACR, the four editions (WCAG, 508, EU, INT), who requests them, how an honest report is produced, and document/PDF accessibility. Get a VPAT template.',
  alternates: { canonical: '/vpat' },
  openGraph: {
    type: 'article',
    title: 'VPAT & Document Accessibility',
    description:
      'What a VPAT is versus an ACR, the four editions, who requests them, how they are produced, and document/PDF accessibility.',
    url: `${SITE}/vpat`,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED
  }
};
