import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Container,
  Section,
  RevealOnScroll,
  JsonLd,
  NewsletterSignup,
  Icon
} from '@/components/ui';
import { webPage } from '@/lib/schema';

const SITE = 'https://eaa-navigator.com';
const PAGE_URL = `${SITE}/resources`;

export const metadata: Metadata = {
  title: 'Accessibility Resources, Tools & Templates | EAA Navigator',
  description:
    'Free web-accessibility resources: a WCAG 2.2 AA checklist, a VPAT template, plain-English guides, a glossary, the newsletter, plus our audit, remediation and VPAT services.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Free accessibility resources & templates',
    description:
      'Free web-accessibility resources: a WCAG 2.2 AA checklist, a VPAT template, guides, a glossary and the newsletter.',
    url: PAGE_URL,
    type: 'website'
  }
};

type Resource = {
  title: string;
  value: string;
  href: string;
  icon: string;
  cta: string;
};

const TOOLS: Resource[] = [
  {
    title: 'Colour contrast checker',
    value:
      'Test any text and background colour against the WCAG AA and AAA contrast thresholds, with a live pass/fail readout. Runs in your browser.',
    href: '/contrast-checker',
    icon: 'contrast',
    cta: 'Check contrast'
  }
];

const LEAD_MAGNETS: Resource[] = [
  {
    title: 'WCAG 2.2 AA Checklist (PDF)',
    value:
      'All 55 Level AA success criteria summarised in plain English, organised by POUR, with the common failures and how to test each one. Free, by email.',
    href: '/wcag-checklist',
    icon: 'checklist',
    cta: 'Get the checklist'
  },
  {
    title: 'VPAT Template',
    value:
      'The Voluntary Product Accessibility Template, with a short guide to completing it honestly into an Accessibility Conformance Report. Free, by email.',
    href: '/vpat',
    icon: 'description',
    cta: 'Get the template'
  }
];

const LEARN: Resource[] = [
  {
    title: 'Guides',
    value:
      'Plain-English, source-backed guides: who the EAA applies to, ADA vs EAA, accessibility statements, e-commerce, WordPress, keyboard access, alt text and overlays.',
    href: '/guides',
    icon: 'menu_book',
    cta: 'Browse guides'
  },
  {
    title: 'Glossary',
    value:
      'Every term decoded in plain English: WCAG, POUR, EN 301 549, VPAT, ACR, conformance levels and more.',
    href: '/glossary',
    icon: 'dictionary',
    cta: 'Open the glossary'
  },
  {
    title: 'The newsletter',
    value:
      'Short, plain-English updates on accessibility rules, deadlines and standards. We watch the standards so you don’t.',
    href: '/subscribe',
    icon: 'mail',
    cta: 'Subscribe'
  }
];


function ResourceCard({ r }: { r: Resource }) {
  return (
    <li className="h-full list-none">
      <Link
        href={r.href}
        className="group flex h-full flex-col rounded-card border border-line bg-card p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-accent hover:shadow-[0_12px_32px_-10px_rgba(30,27,75,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-low">
          <Icon name={r.icon} className="text-primary text-2xl transition-colors group-hover:text-accent-deep" />
        </span>
        <h3 className="mt-4 font-display font-semibold text-xl text-ink">{r.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{r.value}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary transition-colors group-hover:text-accent-deep">
          {r.cta}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
    </li>
  );
}

function Grid({ items }: { items: Resource[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r, i) => (
        <RevealOnScroll key={r.href + r.title} delay={i}>
          <ResourceCard r={r} />
        </RevealOnScroll>
      ))}
    </ul>
  );
}

export default function ResourcesPage() {
  const allItems: Resource[] = [...TOOLS, ...LEAD_MAGNETS, ...LEARN];

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Accessibility resources, tools and templates',
    url: PAGE_URL,
    itemListElement: allItems.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.title,
      url: `${SITE}${t.href}`
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: PAGE_URL }
    ]
  };

  return (
    <>
      <JsonLd
        data={[
          itemListSchema,
          breadcrumbSchema,
          webPage({
            name: 'Accessibility Resources, Tools & Templates',
            path: '/resources',
            description:
              'Free web-accessibility resources: a colour contrast checker, a WCAG 2.2 AA checklist, a VPAT template, plain-English guides, a glossary and the newsletter.'
          })
        ]}
      />

      <Container size="lg" className="pt-16 lg:pt-20">
        <header className="max-w-3xl">
          <h1 className="font-display font-semibold text-4xl lg:text-5xl text-ink leading-tight">
            Accessibility resources, tools &amp; templates
          </h1>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            Everything here is free. The downloads ask only for your email so we can send them; the
            guides and glossary are open. Pick what matches what you need right now &mdash; a
            checklist to work through, a template to fill in, or a plain-English explainer.
          </p>
        </header>
      </Container>

      <Section background="paper" containerSize="lg" eyebrow="Free tools" title="Interactive tools">
        <Grid items={TOOLS} />
      </Section>

      <Section background="sand" containerSize="lg" eyebrow="Free downloads" title="Checklists & templates">
        <Grid items={LEAD_MAGNETS} />
      </Section>

      <Section background="paper" containerSize="lg" eyebrow="Learn" title="Guides, glossary & updates">
        <Grid items={LEARN} />
        <p className="mt-8 max-w-2xl text-sm text-muted">
          This is guidance to help you understand web accessibility, not legal advice. Confirm with
          the official sources we link or a qualified adviser.
        </p>
      </Section>

      <NewsletterSignup
        variant="band"
        heading="New tools and rule changes land in the newsletter first"
        subcopy="Short, plain-English updates on accessibility standards and deadlines, free."
        source="resources"
      />
    </>
  );
}
