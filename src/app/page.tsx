import styles from './page.module.css';

import { Navbar } from '@/ui';
import { HeroSection } from '@/hero';
import { AboutSection } from '@/about';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
