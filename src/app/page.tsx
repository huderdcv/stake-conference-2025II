import styles from './page.module.css';

import { Footer } from '@/ui';
import { HeroSection } from '@/hero';
import { AboutSection } from '@/about';
import { SpeakersSection } from '@/speakers';
import { ScheduleSection } from '@/schedule';
import { TestimonialsSection } from '@/testimonials';
import { CtaSection } from '@/cta';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ScheduleSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
