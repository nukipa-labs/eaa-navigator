import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  Container,
  Section,
  TLDR,
  Callout,
  SourceCite,
  Sources,
  JsonLd,
  NewsletterSignup,
  Icon
} from '@/components/ui';
import { webPage, breadcrumb, SITE } from '@/lib/schema';

const PAGE_URL = `${SITE}/deadlines`;

// ---- Canonical official sources (see BUILD-CONTEXT.md §sources) ----
const EAA_EURLEX = 'https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng';
const EC_EAA =
  'https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en';
const WAD_SUMMARY =
  'https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-public-sector-websites-and-mobile-apps.html';
const DOJ_WEB_RULE = 'https://www.ada.gov/resources/2024-03-08-web-rule/';
const SECTION_508 = 'https://www.access-board.gov/ict/';
const EN_301_549 =
  'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf';

export const metadata: Metadata = {
  title: 'Accessibility compliance deadlines & timeline | EAA Navigator',
  description:
    'The web accessibility deadlines that matter: the EAA applies from 28 June 2025 (service contracts to 2030), the EU Web Accessibility Directive milestones, and the US DOJ Title II deadlines of 26 April 2027 and 2028. A living timeline of what is past and what is upcoming.',
  alternates: { canonical: '/deadlines' },
  openGraph: {
    title: 'Accessibility compliance deadlines: EAA, the EU & the US',
    description:
      'A living timeline of web accessibility deadlines: the EAA, the EU Web Accessibility Directive, the DOJ Title II rule and Section 508. What is past, what is upcoming.',
    url: PAGE_URL,
    type: 'article'
  }
};

// ----------------------------------------------------------------------------
// Status pill
// ----------------------------------------------------------------------------

type Status = 'inforce' | 'upcoming' | 'past';

const STATUS_STYLE: Record<Status, string> = {
  inforce: 'bg-low text-primary border border-primary/25',
  upcoming: 'bg-warn text-accent-deep border border-accent/40',
  past: 'bg-sand-tint text-muted border border-line'
};

const STATUS_LABEL: Record<Status, string> = {
  inforce: 'In force',
  upcoming: 'Upcoming',
  past: 'Past'
};

function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center rounded-chip px-2.5 py-0.5 font-body text-xs font-semibold ${STATUS_STYLE[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

// ----------------------------------------------------------------------------
// Timeline (today = 9 June 2026)
// ----------------------------------------------------------------------------

type TimelineEvent = {
  date: string;
  title: string;
  meaning: string;
  status: Status;
  dot: 'done' | 'now' | 'upcoming';
  source: { href: string; label: string };
};

const TIMELINE: TimelineEvent[] = [
  {
    date: '23 Sep 2020',
    title: 'Public-sector websites must be accessible (Web Accessibility Directive)',
    meaning:
      'Under Directive (EU) 2016/2102, all public-sector websites (not just new ones) had to meet the accessibility requirements from this date. Public-sector bodies also publish an accessibility statement.',
    status: 'past',
    dot: 'done',
    source: { href: WAD_SUMMARY, label: 'EUR-Lex, Directive 2016/2102' }
  },
  {
    date: '23 Jun 2021',
    title: 'Public-sector mobile apps must be accessible',
    meaning:
      'The Web Accessibility Directive extended to public-sector mobile applications from this date, completing the public-sector rollout.',
    status: 'past',
    dot: 'done',
    source: { href: WAD_SUMMARY, label: 'EUR-Lex, Directive 2016/2102' }
  },
  {
    date: '28 Jun 2022',
    title: 'EAA transposition deadline',
    meaning:
      'Member states had to transpose the European Accessibility Act (Directive (EU) 2019/882) into national law by this date, so the rules would be ready to apply in 2025.',
    status: 'past',
    dot: 'done',
    source: { href: EAA_EURLEX, label: 'EUR-Lex, Directive 2019/882' }
  },
  {
    date: '28 Jun 2025',
    title: 'The EAA applies',
    meaning:
      'The main go-live for the private sector. From this date, covered products and services placed on the EU market must meet the EAA accessibility requirements. This date is now in force.',
    status: 'inforce',
    dot: 'now',
    source: { href: EAA_EURLEX, label: 'EUR-Lex, Directive 2019/882' }
  },
  {
    date: '26 Apr 2027',
    title: 'US DOJ Title II: larger government entities',
    meaning:
      'State and local government entities serving populations of 50,000 or more must meet WCAG 2.1 AA. The deadline was extended by one year in April 2026.',
    status: 'upcoming',
    dot: 'upcoming',
    source: { href: DOJ_WEB_RULE, label: 'US DOJ web rule' }
  },
  {
    date: '26 Apr 2028',
    title: 'US DOJ Title II: smaller entities and special districts',
    meaning:
      'State and local government entities serving fewer than 50,000 people, and special district governments, must meet WCAG 2.1 AA. Also extended by a year in April 2026.',
    status: 'upcoming',
    dot: 'upcoming',
    source: { href: DOJ_WEB_RULE, label: 'US DOJ web rule' }
  },
  {
    date: '28 Jun 2030',
    title: 'EAA service-contract transition ends',
    meaning:
      'Service contracts already in force before 28 June 2025 may continue until this date. After it, they too must comply. Self-service terminals in use before 28 Jun 2025 can run to the end of their economic life, up to 20 years.',
    status: 'upcoming',
    dot: 'upcoming',
    source: { href: EAA_EURLEX, label: 'EUR-Lex, Directive 2019/882' }
  }
];

function TimelineDot({ kind }: { kind: TimelineEvent['dot'] }) {
  if (kind === 'now') {
    return (
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span className="absolute h-5 w-5 rounded-full bg-accent/25" />
        <span className="relative h-3.5 w-3.5 rounded-full bg-accent" />
      </span>
    );
  }
  if (kind === 'done') {
    return <span className="h-3.5 w-3.5 rounded-full bg-primary" />;
  }
  return <span className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-paper" />;
}

// ----------------------------------------------------------------------------
// Status board rows
// ----------------------------------------------------------------------------

type StatusRow = {
  title: string;
  date: string;
  status: Status;
  body: ReactNode;
  source: { href: string; label: string };
};

const STATUS_BOARD: StatusRow[] = [
  {
    title: 'European Accessibility Act (EU, private sector)',
    date: 'In force from 28 Jun 2025',
    status: 'inforce',
    body: (
      <>
        Covered products and services (e-commerce, banking, e-books, transport,
        smartphones, ATMs and more) must meet the EAA requirements, shown via{' '}
        EN 301 549 / WCAG 2.1 AA. Existing service contracts have until 28 Jun
        2030.{' '}
        <Link
          href="/eaa"
          className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-accent-deep"
        >
          Read the EAA explainer
        </Link>
        .
      </>
    ),
    source: { href: EAA_EURLEX, label: 'EUR-Lex, Directive 2019/882' }
  },
  {
    title: 'Web Accessibility Directive (EU, public sector)',
    date: 'In force since 2020 / 2021',
    status: 'inforce',
    body: (
      <>
        Public-sector websites (from 23 Sep 2020) and mobile apps (from 23 Jun
        2021) must meet the accessibility requirements and publish an
        accessibility statement. The technical benchmark is EN 301 549, which
        incorporates WCAG 2.1 AA.
      </>
    ),
    source: { href: WAD_SUMMARY, label: 'EUR-Lex, Directive 2016/2102' }
  },
  {
    title: 'DOJ Title II rule (US state & local government)',
    date: 'Due 26 Apr 2027 / 2028',
    status: 'upcoming',
    body: (
      <>
        State and local government websites and apps must meet WCAG 2.1 AA:
        larger entities (population 50,000 or more) by 26 Apr 2027, smaller ones
        and special districts by 26 Apr 2028. Deadlines were extended by one
        year in April 2026.{' '}
        <Link
          href="/ada"
          className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-accent-deep"
        >
          Read the ADA explainer
        </Link>
        .
      </>
    ),
    source: { href: DOJ_WEB_RULE, label: 'US DOJ web rule' }
  },
  {
    title: 'Section 508 (US federal procurement)',
    date: 'In force (2017 refresh)',
    status: 'inforce',
    body: (
      <>
        Federal ICT must be accessible. The 2017 &ldquo;508 Refresh&rdquo; (in
        effect since 18 January 2018) incorporates WCAG 2.0 AA. Vendors selling
        to federal agencies prove conformance with a{' '}
        <Link
          href="/vpat"
          className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-accent-deep"
        >
          VPAT
        </Link>
        .
      </>
    ),
    source: { href: SECTION_508, label: 'US Access Board' }
  }
];

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function DeadlinesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'Accessibility compliance deadlines & timeline (EAA, EU & US)',
    description:
      'The web accessibility deadlines that matter: the EAA applies from 28 June 2025, the EU Web Accessibility Directive milestones, and the US DOJ Title II deadlines of 26 April 2027 and 2028.',
    url: PAGE_URL,
    datePublished: '2026-01-15',
    dateModified: '2026-06-09',
    author: { '@type': 'Organization', name: 'EAA Navigator' },
    publisher: { '@type': 'Organization', name: 'EAA Navigator' },
    isBasedOn: EAA_EURLEX
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does the European Accessibility Act apply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The EAA requirements apply from 28 June 2025, which is now in force. Existing service contracts can continue until 28 June 2030, and self-service terminals in use before 28 June 2025 may run to the end of their economic life, up to 20 years.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the US DOJ Title II web accessibility deadlines?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'State and local government entities serving populations of 50,000 or more must meet WCAG 2.1 AA by 26 April 2027; smaller entities and special districts by 26 April 2028. Both deadlines were extended by one year in April 2026.'
        }
      },
      {
        '@type': 'Question',
        name: 'When did public-sector websites have to be accessible in the EU?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under the EU Web Accessibility Directive (2016/2102), all public-sector websites had to be accessible from 23 September 2020 and public-sector mobile apps from 23 June 2021.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          faqSchema,
          webPage({
            name: 'Accessibility compliance deadlines & timeline',
            path: '/deadlines',
            description:
              'The web accessibility deadlines that matter: the EAA applies from 28 June 2025 (service contracts to 2030), the EU Web Accessibility Directive milestones, and the US DOJ Title II deadlines of 26 April 2027 and 2028.'
          }),
          breadcrumb([{ name: 'Accessibility deadlines & timeline', path: '/deadlines' }])
        ]}
      />

      {/* Header + answer-first */}
      <Container size="lg" className="pt-16 lg:pt-20">
        <header className="max-w-3xl">
          <h1 className="font-display font-semibold text-4xl lg:text-5xl text-ink leading-tight">
            Accessibility compliance deadlines &amp; timeline
          </h1>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            Web accessibility now has hard dates on both sides of the Atlantic. The European
            Accessibility Act is already in force; the US DOJ Title II deadlines are coming in 2027
            and 2028. Here is the full picture, with what is past and what is still upcoming.
          </p>
        </header>
      </Container>

      {/* The headline dates, big and clear (ink band) */}
      <Section background="ink" className="mt-12" containerSize="lg">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-on-dark">
          The dates that matter
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-card border border-paper/15 p-6 lg:p-8">
            <p className="font-display font-semibold text-4xl lg:text-5xl text-accent-on-dark leading-none">
              28 June 2025
            </p>
            <p className="mt-4 text-lg text-paper font-medium">
              The EAA applies (in force)
            </p>
            <p className="mt-2 text-paper/80 leading-relaxed">
              Covered products and services on the EU market must meet the European Accessibility Act
              requirements. Existing service contracts have until 28 June 2030.
            </p>
          </div>
          <div className="rounded-card border border-paper/15 p-6 lg:p-8">
            <p className="font-display font-semibold text-4xl lg:text-5xl text-accent-on-dark leading-none">
              26 April 2027
            </p>
            <p className="mt-4 text-lg text-paper font-medium">
              US DOJ Title II (larger entities)
            </p>
            <p className="mt-2 text-paper/80 leading-relaxed">
              State and local government serving 50,000 or more must meet WCAG 2.1 AA. Smaller
              entities follow on 26 April 2028.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-paper/70">
          The EAA date is now past and in force; the DOJ dates are upcoming.{' '}
          <SourceCite href={EAA_EURLEX}>
            <span className="text-accent-on-dark">EAA</span>
          </SourceCite>{' '}
          and{' '}
          <SourceCite href={DOJ_WEB_RULE}>
            <span className="text-accent-on-dark">DOJ web rule</span>
          </SourceCite>
          .
        </p>
      </Section>

      {/* TLDR + what applies to me */}
      <Section background="paper" containerSize="lg">
        <div className="max-w-3xl">
          <TLDR title="What applies to me, and when">
            <p>
              If you sell to or serve the public <strong>in the EU</strong>, the{' '}
              <Link href="/eaa">EAA</Link> already applies (since 28 June 2025), with WCAG 2.1 AA as
              the benchmark. If you are a <strong>US state or local government</strong> body, your
              DOJ Title II date is <strong>26 April 2027</strong> (population 50,000 or more) or{' '}
              <strong>26 April 2028</strong> (smaller). Selling ICT to the{' '}
              <strong>US federal government</strong> means meeting Section 508 (WCAG 2.0 AA) and
              providing a VPAT.
            </p>
          </TLDR>
        </div>

        {/* Mini matrix */}
        <div className="mt-8 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <caption className="sr-only">
              Accessibility deadlines by who you are and the standard you must meet.
            </caption>
            <thead>
              <tr className="bg-sand text-ink">
                <th
                  scope="col"
                  className="border-b-2 border-line-strong px-4 py-3 font-body text-sm font-semibold"
                >
                  Who you are
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-line-strong px-4 py-3 font-body text-sm font-semibold"
                >
                  Your deadline
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-line-strong px-4 py-3 font-body text-sm font-semibold"
                >
                  The standard
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-paper">
                <th scope="row" className="px-4 py-3 font-body font-semibold text-ink align-top">
                  EU business (covered products or services)
                </th>
                <td className="px-4 py-3 font-mono text-sm text-ink align-top">28 Jun 2025</td>
                <td className="px-4 py-3 text-sm text-muted align-top">
                  EN 301 549 / WCAG 2.1 AA. Existing service contracts have until 28 Jun 2030.
                </td>
              </tr>
              <tr className="bg-sand-tint">
                <th scope="row" className="px-4 py-3 font-body font-semibold text-ink align-top">
                  EU public-sector body
                </th>
                <td className="px-4 py-3 font-mono text-sm text-ink align-top">
                  2020 / 2021
                </td>
                <td className="px-4 py-3 text-sm text-muted align-top">
                  Websites from 23 Sep 2020, apps from 23 Jun 2021, plus an accessibility statement.
                </td>
              </tr>
              <tr className="bg-paper">
                <th scope="row" className="px-4 py-3 font-body font-semibold text-ink align-top">
                  US state &amp; local government
                </th>
                <td className="px-4 py-3 font-mono text-sm text-ink align-top">
                  26 Apr 2027 / 2028
                </td>
                <td className="px-4 py-3 text-sm text-muted align-top">
                  WCAG 2.1 AA under the DOJ Title II rule. 2027 for population 50,000 or more, 2028
                  for smaller entities.
                </td>
              </tr>
              <tr className="bg-sand-tint">
                <th scope="row" className="px-4 py-3 font-body font-semibold text-ink align-top">
                  US federal supplier
                </th>
                <td className="px-4 py-3 font-mono text-sm text-ink align-top">In force</td>
                <td className="px-4 py-3 text-sm text-muted align-top">
                  Section 508 (WCAG 2.0 AA) since the 2017 refresh; prove conformance with a VPAT.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm text-muted">
          Not sure which one is you, or whether you are in scope?{' '}
          <Link
            href="/guides/who-does-the-eaa-apply-to"
            className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-accent-deep"
          >
            Read who the EAA applies to
          </Link>
          , or{' '}
          <Link
            href="/wcag-checklist"
            className="text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-accent-deep"
          >
            get the WCAG 2.2 AA checklist
          </Link>
          .
        </p>
      </Section>

      {/* Timeline */}
      <Section background="sand" containerSize="lg">
        <div className="max-w-2xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            The full timeline
          </p>
          <h2 className="mt-3 inline-flex items-center gap-2 font-display font-semibold text-3xl lg:text-4xl leading-tight text-ink">
            <Icon name="history" className="text-primary text-3xl" />
            Every milestone, in order
          </h2>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
            From the EU public-sector dates to the upcoming US deadlines, with the source for each
            step. Today is 9 June 2026.
          </p>
        </div>
        <ol className="relative mt-12 space-y-8 border-l border-line pl-8">
          {TIMELINE.map((ev) => (
            <li key={ev.date + ev.title} className="relative">
              <span className="absolute -left-[2.55rem] top-1.5 flex items-center justify-center">
                <TimelineDot kind={ev.dot} />
              </span>
              <div className="rounded-card border border-line bg-card p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-accent-deep">{ev.date}</span>
                  <StatusPill status={ev.status} />
                </div>
                <h3 className="mt-2 font-display font-semibold text-xl text-ink">{ev.title}</h3>
                <p className="mt-1.5 text-ink/80 leading-relaxed">{ev.meaning}</p>
                <p className="mt-2 text-sm">
                  <SourceCite href={ev.source.href}>{ev.source.label}</SourceCite>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Status board */}
      <Section background="paper" containerSize="lg">
        <div className="max-w-2xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            At a glance
          </p>
          <h2 className="mt-3 inline-flex items-center gap-2 font-display font-semibold text-3xl lg:text-4xl leading-tight text-ink">
            <Icon name="dashboard" className="text-primary text-3xl" />
            The four regimes, and where they stand
          </h2>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted">
            The laws that set web accessibility deadlines, and whether each is in force or still
            upcoming.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {STATUS_BOARD.map((row) => (
            <div key={row.title} className="rounded-card border border-line bg-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <StatusPill status={row.status} />
                <span className="font-mono text-xs text-muted">{row.date}</span>
              </div>
              <h3 className="mt-3 font-display font-semibold text-xl text-ink">{row.title}</h3>
              <div className="mt-2 text-ink/80 leading-relaxed">{row.body}</div>
              <p className="mt-3 text-sm">
                <SourceCite href={row.source.href}>{row.source.label}</SourceCite>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl">
          <Callout variant="warn" title="The deadline is not the work">
            Meeting any of these dates means real audit and remediation against{' '}
            <Link href="/wcag">WCAG AA</Link>. No overlay or automated scan gets you there on its
            own. If you have not started, the time to begin is now, not the day before the deadline.
          </Callout>
        </div>
      </Section>

      {/* Sources + disclaimer */}
      <Section background="sand" containerSize="md">
        <div className="max-w-3xl">
          <Callout variant="info" title="This is guidance, not legal advice">
            This is guidance to help you track web accessibility deadlines, not legal advice.
            Confirm dates and obligations for your situation with the official sources we link or a
            qualified adviser. We cannot guarantee compliance.
          </Callout>
        </div>

        <Sources
          items={[
            {
              href: EAA_EURLEX,
              label: 'Directive (EU) 2019/882 (European Accessibility Act), EUR-Lex',
              retrieved: '9 Jun 2026'
            },
            {
              href: EC_EAA,
              label: 'European Commission: European Accessibility Act',
              retrieved: '9 Jun 2026'
            },
            {
              href: WAD_SUMMARY,
              label: 'EUR-Lex summary: Web Accessibility Directive (2016/2102)',
              retrieved: '9 Jun 2026'
            },
            {
              href: DOJ_WEB_RULE,
              label: 'US DOJ: ADA Title II web rule fact sheet',
              retrieved: '9 Jun 2026'
            },
            {
              href: SECTION_508,
              label: 'US Access Board: Section 508 / ICT standards',
              retrieved: '9 Jun 2026'
            },
            {
              href: EN_301_549,
              label: 'EN 301 549 v3.2.1, the EU harmonised ICT accessibility standard (ETSI)',
              retrieved: '9 Jun 2026'
            }
          ]}
        />
      </Section>

      <NewsletterSignup
        variant="band"
        background="forest"
        heading="Get alerted when a deadline moves"
        subcopy="We track the EAA, the DOJ rule and Section 508 so you don't. Plain-English alerts the moment a date or standard changes."
        source="deadlines"
      />
    </>
  );
}
