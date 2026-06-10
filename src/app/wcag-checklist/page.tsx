import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContourBackground } from '@/components/ui/ContourBackground';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { JsonLd } from '@/components/ui/JsonLd';
import { Icon } from '@/components/ui/Icon';
import { LeadGateForm } from '@/components/LeadGateForm';
import { webPage, breadcrumb } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Free WCAG 2.2 AA Checklist (PDF)',
  description:
    'A plain-English WCAG 2.2 AA checklist, organised by the POUR principles. The 55 Level AA success criteria summarised, the common failures to watch for, and how to test each one. Free PDF.',
  alternates: { canonical: '/wcag-checklist' }
};

const INSIDE = [
  'The 55 Level AA success criteria in WCAG 2.2, summarised in plain English, so you can see the whole standard on a few pages.',
  'Organised by the four POUR principles — Perceivable, Operable, Understandable, Robust — so related checks sit together.',
  'The nine criteria added in WCAG 2.2, flagged separately, including target size, dragging movements, focus not obscured and accessible authentication.',
  'The common failures behind most real-world issues: low-contrast text, missing alt text, unlabelled form fields and empty links or buttons.',
  'How to test each item — what an automated checker catches, and what only a keyboard and a screen reader will find.',
  'A column to record pass, fail or not-applicable against each page template, so you can show your progress.'
];

const WHO = [
  'A developer or designer who wants the standard on one reference sheet.',
  'A site or store owner who needs to know where they stand before an audit.',
  'A marketing or content lead checking pages before they go live.',
  'An agency running the same checks across many client sites.'
];

export default function WcagChecklistPage() {
  return (
    <>
      <JsonLd
        data={[
          webPage({
            name: 'Free WCAG 2.2 AA Checklist (PDF)',
            path: '/wcag-checklist',
            description:
              'A plain-English WCAG 2.2 AA checklist, organised by the POUR principles. The 55 Level AA success criteria summarised, the common failures, and how to test each one. Free PDF.'
          }),
          breadcrumb([{ name: 'WCAG 2.2 AA Checklist', path: '/wcag-checklist' }])
        ]}
      />

      {/* Hero + gate, side by side */}
      <section className="relative overflow-hidden bg-paper">
        <ContourBackground />
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                Free PDF
              </p>
              <h1 className="mt-4 font-display font-semibold text-4xl lg:text-5xl text-ink leading-tight">
                The whole WCAG 2.2 AA standard, on one checklist.
              </h1>
              <p className="mt-5 text-lg text-ink/80 leading-relaxed">
                A plain-English checklist of all 55 Level AA success criteria, organised by the four
                POUR principles. For each item you get a short, readable summary, the common ways it
                fails, and how to test it &mdash; so you can work through your site in an order that
                makes sense.
              </p>
              <p className="mt-5 text-sm text-muted">
                Want the background first?{' '}
                <Link href="/wcag" className="text-accent-deep underline-offset-2 hover:underline">
                  Read what WCAG 2.2 AA actually requires
                </Link>
                .
              </p>
            </div>
            <RevealOnScroll delay={1}>
              <div className="flex flex-col gap-5">
                {/* Real preview of the downloadable PDF cover (rendered from the Typst build) */}
                <Image
                  src="/brand/wcag-checklist-cover.jpg"
                  alt="Cover of the WCAG 2.2 AA Checklist PDF"
                  width={778}
                  height={1100}
                  priority
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="mx-auto w-full max-w-[320px] rounded-card border border-line shadow-[0_18px_40px_-16px_rgba(30,27,75,0.35)]"
                />
                <LeadGateForm
                  slug="wcag-checklist"
                  source="wcag-checklist-page"
                  fields="name-email"
                  heading="Get the WCAG 2.2 AA Checklist, free."
                  blurb="Just your name and email — your download starts straight away. One plain-English PDF covering every Level A and AA criterion."
                  cta="Get the checklist (PDF)"
                  downloadUrl="/downloads/wcag-22-aa-checklist.pdf"
                />
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* What's inside */}
      <Section background="sand" title="What's inside">
        <ul className="grid gap-4 sm:grid-cols-2">
          {INSIDE.map((item, i) => (
            <RevealOnScroll key={item} delay={i}>
              <li className="flex gap-3 rounded-card border border-line bg-card p-5">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-ink">{item}</span>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </Section>

      {/* POUR structure */}
      <Section background="paper" title="Organised the way the standard is: POUR">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: 'visibility',
              title: 'Perceivable',
              body: 'Text alternatives, captions, colour contrast and content that adapts — so people can take it in by sight, sound or touch.'
            },
            {
              icon: 'keyboard',
              title: 'Operable',
              body: 'Keyboard access, enough time, no seizure triggers, clear focus and large-enough targets — so people can navigate and act.'
            },
            {
              icon: 'lightbulb',
              title: 'Understandable',
              body: 'Readable text, predictable behaviour, clear labels and helpful error handling — so people can make sense of it.'
            },
            {
              icon: 'build',
              title: 'Robust',
              body: 'Valid, well-structured markup with correct names, roles and values — so it works with screen readers and other assistive tech.'
            }
          ].map((p) => (
            <div key={p.title} className="rounded-card border border-line bg-card p-6">
              <Icon name={p.icon} className="text-primary text-3xl" />
              <h3 className="mt-3 font-display font-semibold text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/90 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          The checklist follows this order, with the nine criteria new in WCAG 2.2 flagged so you can
          see what changed.
        </p>
      </Section>

      {/* Who it's for */}
      <Section background="forest" title="Who this is for">
        <ul className="grid max-w-2xl gap-4 sm:grid-cols-2">
          {WHO.map((w) => (
            <li key={w} className="flex gap-3 text-paper/85 leading-relaxed">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{w}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-paper/70">
          A checklist tells you where you stand. To go deeper, work through the{' '}
          <Link href="/guides" className="text-accent-on-dark underline-offset-2 hover:underline">
            guides
          </Link>{' '}
          or test your colours in the{' '}
          <Link href="/contrast-checker" className="text-accent-on-dark underline-offset-2 hover:underline">
            contrast checker
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
