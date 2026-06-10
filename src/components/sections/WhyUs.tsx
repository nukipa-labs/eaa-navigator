import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const POINTS = [
  {
    title: 'Honest about overlays',
    body: `Overlay widgets that claim to make your site "compliant" in one line of code don't. Automated tools catch only about a third of WCAG issues, and overlay-equipped sites are still sued. We say so plainly, because the truth saves you money.`
  },
  {
    title: 'Source-backed',
    body: 'Every standard and legal claim links to its primary source: W3C for WCAG, EUR-Lex for the EAA, ada.gov and the US Access Board for the ADA and Section 508. Each page shows the date we last checked it.'
  },
  {
    title: 'Plain English, free, current',
    body: 'A WCAG checklist, guides, a glossary and a deadline tracker, written for people without an accessibility team. Free to read, no upsell, and updated as the standards and the law move.'
  }
];

export function WhyUs() {
  return (
    <Section
      background="forest"
      eyebrow="Why use this hub"
      title="Why use this hub"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {POINTS.map((p, i) => (
          <RevealOnScroll key={p.title} delay={i}>
            <div>
              <span aria-hidden="true" className="block h-[2px] w-8 bg-accent" />
              <h3 className="mt-4 font-display font-semibold text-xl text-paper">{p.title}</h3>
              <p className="mt-3 text-paper/80 leading-relaxed">{p.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
