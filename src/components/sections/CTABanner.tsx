import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ContourBackground } from '@/components/ui/ContourBackground';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary text-paper py-16 lg:py-24">
      <ContourBackground className="opacity-50" />
      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-paper leading-tight">
              Make your site accessible, the right way.
            </h2>
            <p className="mt-4 text-paper/80 text-base lg:text-lg">
              Start with the free WCAG 2.2 AA checklist, then work through the guides at your own
              pace. Plain English, source-backed, no overlays and no sales pitch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/wcag-checklist" variant="primary">
                Get the WCAG Checklist
              </Button>
              <Button
                href="/guides"
                variant="secondary"
                className="!border-paper !text-paper hover:!bg-paper/10"
              >
                Browse the guides
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
