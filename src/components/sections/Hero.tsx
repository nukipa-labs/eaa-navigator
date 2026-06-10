import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ContourBackground } from '@/components/ui/ContourBackground';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { IMAGES } from '@/lib/images';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <ContourBackground />
      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <RevealOnScroll>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                Your web accessibility resource hub
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h1 className="mt-4 font-display font-semibold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
                Find your way to an accessible website.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="mt-5 text-lg lg:text-xl text-ink/80 leading-relaxed max-w-2xl">
                Plain-English guidance on WCAG, the European Accessibility Act and the
                US ADA, for any team that has to make a website or product accessible.
                We read the standards so you don&apos;t have to.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={3}>
              <p className="mt-4 font-display text-lg lg:text-xl text-primary">
                Know what the law expects, and what it takes to actually meet it.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/wcag-checklist" variant="primary">
                  Get the WCAG Checklist
                </Button>
                <Button href="/accessibility" variant="secondary">
                  Start with the basics
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={2} direction="right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-line shadow-[0_24px_60px_-24px_rgba(30,27,75,0.35)]">
              <Image
                src={IMAGES.teamReview.src}
                alt={IMAGES.teamReview.alt}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
