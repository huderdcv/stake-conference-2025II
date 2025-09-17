import { Footer } from '@/ui';
import { HeroSection } from '@/hero';
import { AboutSection } from '@/about';
import { SpeakersSection } from '@/speakers';
import { ScheduleSection } from '@/schedule';
import { TestimonialsSection } from '@/testimonials';
import { CtaSection } from '@/cta';
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-event"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Conferencia de Estaca Ayacucho 2025',
            startDate: '2025-09-20T17:30:00-05:00',
            endDate: '2025-09-21T13:00:00-05:00',
            eventAttendanceMode:
              'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'Centro de Estaca Ayacucho',
              address: 'Ayacucho, Perú',
            },
            organizer: {
              '@type': 'Organization',
              name: 'Estaca Ayacucho - La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
          }),
        }}
      />
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
