import { Section } from '@/components/ui/Section';
import { Stat, Stats as StatsGrid } from '@/components/ui/Stat';
import { SourceCite } from '@/components/ui/SourceCite';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function Stats() {
  return (
    <Section
      background="sand"
      eyebrow="By the numbers"
      title="Web accessibility in a few numbers"
      subtitle="The figures worth keeping in your head. Each one comes from an official standard or a published study we link below."
    >
      <RevealOnScroll>
        <StatsGrid>
          <Stat
            value="94.8%"
            label="of the top one million home pages had detectable WCAG failures in 2025. Accessibility gaps are the norm, not the exception."
          />
          <Stat
            value="51"
            label="WCAG errors on an average home page. The most common are low-contrast text, missing alt text and missing form labels."
          />
          <Stat
            value="1.3 billion"
            label="people, about 16% or 1 in 6 worldwide, experience significant disability. Accessible design reaches all of them."
          />
          <Stat
            value="55"
            label="success criteria in WCAG 2.2 at level AA, the legal target almost everywhere. Level AAA is not expected site-wide."
          />
        </StatsGrid>
      </RevealOnScroll>
      <p className="mt-8 text-sm text-muted">
        Sources: WebAIM Million 2025
        <SourceCite href="https://webaim.org/projects/million/">WebAIM Million 2025</SourceCite>{' '}
        for the failure rate and average errors; WHO
        <SourceCite href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health">
          WHO disability and health
        </SourceCite>{' '}
        for the 1.3 billion figure; W3C
        <SourceCite href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</SourceCite> for the success
        criteria count.
      </p>
    </Section>
  );
}
