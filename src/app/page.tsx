import styles from './page.module.css';

import { Navbar } from '@/ui';
import { HeroSection } from '@/hero';
import { AboutSection } from '@/about';
import { SpeakersSection } from '@/speakers';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
      </main>
    </>
  );
}
