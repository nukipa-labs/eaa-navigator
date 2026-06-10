import Link from 'next/link';
import { JsonLd, Section, Icon } from '@/components/ui';
import { Hero } from '@/components/sections/Hero';
import { DeadlineBand } from '@/components/sections/DeadlineBand';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { Pathways } from '@/components/sections/Pathways';
import { ToolsStrip } from '@/components/sections/ToolsStrip';
import { WhyUs } from '@/components/sections/WhyUs';
import { NewsletterFeature } from '@/components/sections/NewsletterFeature';
import { Stats } from '@/components/sections/Stats';
import { CTABanner } from '@/components/sections/CTABanner';
import { webPage } from '@/lib/schema';

const HOME_DESCRIPTION =
  'Plain-English answers, free resources and trustworthy updates on web accessibility, WCAG, the European Accessibility Act and the ADA, for any team that has to comply.';

type Faq = { q: string; a: string };

const HOME_FAQS: Faq[] = [
  {
    q: 'What is the European Accessibility Act?',
    a: 'The European Accessibility Act (EAA) is Directive (EU) 2019/882. It sets common accessibility requirements across the EU for a defined set of products and services, including e-commerce, consumer banking, e-books, electronic communications and passenger transport. Its requirements have applied since 28 June 2025. Conformance is shown through the harmonised standard EN 301 549, which for websites and apps incorporates WCAG 2.1 AA.'
  },
  {
    q: 'Do I need to make my website accessible?',
    a: 'In most cases, yes. If you sell to consumers in the EU, the EAA can apply to your e-commerce service. In the US, ADA case law treats WCAG 2.0/2.1 AA as the benchmark for public accommodations, and the DOJ Title II rule requires it for state and local government. Beyond the law, around 1 in 6 people worldwide have a significant disability, so accessibility widens who can use your site. Our overview walks through whether you are covered.'
  },
  {
    q: 'What is WCAG and which level do I need?',
    a: 'WCAG is the Web Content Accessibility Guidelines, published by the W3C. The current version is WCAG 2.2 (October 2023). It has three conformance levels: A, AA and AAA. Level AA is the legal target almost everywhere, including EN 301 549, Section 508 and the DOJ Title II rule. WCAG 2.2 AA has 55 success criteria. AAA is not expected across a whole site.'
  },
  {
    q: 'What are the accessibility compliance deadlines?',
    a: 'The EAA has applied since 28 June 2025, though existing service contracts may continue until 28 June 2030. In the US, the DOJ ADA Title II rule (extended by a year in April 2026) requires WCAG 2.1 AA by 26 April 2027 for state and local governments serving 50,000 or more people, and by 26 April 2028 for smaller bodies and special districts. See the deadlines page for the full picture.'
  },
  {
    q: 'Do accessibility overlays make my site compliant?',
    a: 'No. Overlay and widget products (such as accessiBe, AudioEye and UserWay) cannot make a site conformant. Automated tools detect only about 30 to 40% of WCAG issues; the rest need human testing. The Overlay Fact Sheet, signed by over 1,000 accessibility professionals, rejects overlays as a compliance solution, overlay-equipped sites are still sued, and in 2025 the FTC finalised a $1,000,000 order against accessiBe for deceptive claims. Real conformance comes from fixing the underlying code and content.'
  }
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <>
      <JsonLd
        data={[
          webPage({ name: 'EAA Navigator', path: '/', description: HOME_DESCRIPTION }),
          faqSchema
        ]}
      />
      <Hero />
      <DeadlineBand />
      <ProblemSolution />
      <Pathways />
      <ToolsStrip />
      <WhyUs />
      <NewsletterFeature />
      <Stats />

      {/* On-page FAQ */}
      <Section background="paper" eyebrow="Accessibility FAQ" title="Common accessibility questions">
        <div className="mx-auto max-w-3xl divide-y divide-line">
          {HOME_FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-card border border-line bg-card my-3 [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-display text-lg font-semibold text-primary">
                {f.q}
                <Icon
                  name="expand_more"
                  className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-5 -mt-1 text-ink/90 leading-relaxed">
                {f.q === 'Do I need to make my website accessible?' ? (
                  <p>
                    In most cases, yes. If you sell to consumers in the EU, the EAA can apply to your
                    e-commerce service. In the US, ADA case law treats WCAG 2.0/2.1 AA as the
                    benchmark for public accommodations, and the DOJ Title II rule requires it for
                    state and local government. Beyond the law, around 1 in 6 people worldwide have a
                    significant disability, so accessibility widens who can use your site. Our{' '}
                    <Link href="/accessibility" className="text-primary underline-offset-2 hover:underline">
                      plain-English overview
                    </Link>{' '}
                    walks through whether you are covered.
                  </p>
                ) : f.q === 'What are the accessibility compliance deadlines?' ? (
                  <p>
                    The EAA has applied since 28 June 2025, though existing service contracts may
                    continue until 28 June 2030. In the US, the DOJ ADA Title II rule (extended by a
                    year in April 2026) requires WCAG 2.1 AA by 26 April 2027 for state and local
                    governments serving 50,000 or more people, and by 26 April 2028 for smaller
                    bodies and special districts. See the{' '}
                    <Link href="/deadlines" className="text-primary underline-offset-2 hover:underline">
                      deadlines page
                    </Link>{' '}
                    for the full picture.
                  </p>
                ) : (
                  <p>{f.a}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
