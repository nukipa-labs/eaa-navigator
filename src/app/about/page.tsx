import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { Callout } from '@/components/ui/Callout';
import { JsonLd } from '@/components/ui/JsonLd';
import { webPage, breadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About and methodology: how we keep this accurate',
  description:
    'EAA Navigator is a free hub explaining web accessibility requirements in plain English. How we source, update and keep it accurate.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About EAA Navigator',
            url: 'https://eaa-navigator.com/about',
            description:
              'A plain-English guide to web accessibility, built to stay accurate. How we source and update it.'
          },
          webPage({
            name: 'About and methodology: how we keep this accurate',
            path: '/about',
            description:
              'EAA Navigator is a free hub explaining web accessibility requirements in plain English. How we source, update and keep it accurate.'
          }),
          breadcrumb([{ name: 'About', path: '/about' }])
        ]}
      />
      <Container size="md" className="py-16 lg:py-24">
        <header className="max-w-3xl">
          <h1 className="font-display font-semibold text-4xl lg:text-5xl text-ink leading-tight">
A plain-English guide to web accessibility, built to stay accurate.
          </h1>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            EAA Navigator is a free hub explaining what web accessibility actually requires, in
            plain English: WCAG, the European Accessibility Act, and the ADA. No software to sell.
            No overlay to pitch. Just the standards, kept current and source-backed.
          </p>
          <p className="mt-3 font-display text-lg text-primary">
            Understand what you have to do, and how to do it properly.
          </p>
        </header>

        <div className="mt-12">
          <Prose>
            <h2>How we keep this accurate</h2>
            <p>
              Accessibility law and standards keep moving, so accuracy is the whole job. Here&apos;s
              how we approach it.
            </p>

            <h3>No software to sell, no overlay to pitch</h3>
            <p>
              We don&apos;t sell an accessibility widget and we aren&apos;t paid to recommend one.
              That matters here, because the most heavily marketed &ldquo;solutions&rdquo; in this
              space, the automated overlay tools, do not make a website conformant. Automated
              testing catches only a fraction of WCAG issues; the rest need human review. We&apos;ll
              tell you that plainly, because nobody is paying us not to.
            </p>

            <h3>Where our facts come from</h3>
            <p>
              Every factual claim traces back to a primary source: the WCAG 2.2 specification from
              the W3C, the European Accessibility Act (Directive (EU) 2019/882) on EUR-Lex, the
              harmonised standard EN 301 549, the US Department of Justice&apos;s ADA Title II web
              rule, and the US Access Board on Section 508. We link the source so you can check our
              work.
            </p>

            <h3>How we keep it current</h3>
            <p>
              Key pages carry a visible &ldquo;Last updated&rdquo; date and, where it helps, a short
              changelog. When something material changes, a compliance deadline, a new WCAG version,
              a court ruling or an enforcement action, we revise the affected pages and send it to
              subscribers of The Accessibility Brief.
            </p>

            <h3>When the rules aren&apos;t settled</h3>
            <p>
              Sometimes the position is genuinely in flux. WCAG 3.0, for example, is still an early
              Working Draft and is not a compliance target, and an EN 301 549 update aligning to
              WCAG 2.2 is expected but not yet the harmonised benchmark. When that&apos;s the case, we
              say so plainly and mark it, rather than sound more certain than the facts allow.
            </p>
          </Prose>
        </div>

        <div className="mt-10 max-w-2xl">
          <Callout variant="info" title="This is guidance, not legal advice">
            This is guidance to help you understand web accessibility requirements, not legal
            advice. We&apos;ve worked hard to get it right and to link our sources, but for decisions
            specific to your organisation, confirm with the official sources we link or a qualified
            adviser. We can&apos;t guarantee compliance, and you should be wary of anyone, or any
            tool, that says they can.
          </Callout>
        </div>

        <div className="mt-12 max-w-2xl">
          <Prose>
            <h2>Who&apos;s behind it</h2>
            <p>
              EAA Navigator is a free information service operated by Nukipa Labs GmbH. It is
              maintained as an editorial project by the EAA Navigator team, not by a regulator and
              not by an overlay vendor.
            </p>

            <h2>Get in touch</h2>
            <p>
              Spotted something out of date, or have a question we should answer? Tell us. We read
              everything and we&apos;d rather hear it from you than leave a mistake live. Email us at{' '}
              <a href="mailto:contact@nukipalabs.com">contact@nukipalabs.com</a>.
            </p>
            <p>
              Want the updates without checking back?{' '}
              <Link href="/subscribe">Subscribe to The Accessibility Brief.</Link>
            </p>
          </Prose>
        </div>
      </Container>
    </>
  );
}
