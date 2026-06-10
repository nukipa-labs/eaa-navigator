import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function ProblemSolution() {
  return (
    <Section background="paper">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <div>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink leading-tight">
              Accessibility law feels like a maze. It doesn&apos;t have to.
            </h2>
            <p className="mt-5 text-ink/80 text-base lg:text-lg leading-relaxed">
              WCAG, the EAA, EN 301 549, the ADA, Section 508, VPATs. The terms pile up, automated
              checkers and overlay widgets promise instant compliance, and it&apos;s hard to know what
              you actually have to do. Meanwhile 94.8% of the top one million home pages still fail
              WCAG, so this is a real problem, not a box-ticking one.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <div className="rounded-card bg-low border-l-[3px] border-primary p-6 lg:p-8">
            <p className="text-ink text-base lg:text-lg leading-relaxed">
              Start with plain English. We explain what each law expects, point you at the one
              standard they all lean on (WCAG 2.2 AA), and are honest about what tools can and
              can&apos;t do. No overlay sells you compliance. When you&apos;re ready to fix things, we show
              you the path to a real audit and remediation, done by people, not a widget.
            </p>
            <p className="mt-5">
              <Link href="/accessibility" className="text-primary font-medium link-underline">
                New to this? Start with the plain-English overview →
              </Link>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
