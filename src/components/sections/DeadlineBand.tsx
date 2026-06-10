import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ContourBackground } from '@/components/ui/ContourBackground';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const DEADLINES = [
  {
    date: '28 June 2025',
    who: 'European Accessibility Act — in force now.',
    note: 'Directive (EU) 2019/882 requirements apply from this date to new products and services covered by the EAA, such as e-commerce, banking, e-books and transport. Existing service contracts may run until 28 June 2030.'
  },
  {
    date: '26 April 2027',
    who: 'US ADA Title II — larger public bodies.',
    note: 'The DOJ Title II rule adopts WCAG 2.1 AA. State and local governments serving a population of 50,000 or more must comply by this date; smaller bodies and special districts by 26 April 2028.'
  }
];

export function DeadlineBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper py-16 lg:py-20">
      <ContourBackground className="opacity-60" />
      <Container className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-on-dark">
          Key deadlines
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {DEADLINES.map((d, i) => (
            <RevealOnScroll key={d.date} delay={i}>
              <div className="rounded-card border border-paper/15 bg-paper/[0.04] p-6 h-full">
                <div className="font-display font-semibold text-3xl lg:text-4xl text-accent-on-dark">
                  {d.date}
                </div>
                <p className="mt-3 font-medium text-paper">{d.who}</p>
                <p className="mt-2 text-sm text-paper/70 leading-relaxed">{d.note}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-paper/75">
            The EAA already applies across the EU; the US Title II dates were extended by a year in
            April 2026. We track the standards and the dates, and tell you when anything moves.
          </p>
          <Link
            href="/deadlines"
            className="shrink-0 text-accent-on-dark font-medium link-underline"
          >
            See all deadlines →
          </Link>
        </div>
      </Container>
    </section>
  );
}
