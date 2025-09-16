import React from 'react';
import { Navbar } from '@/ui';
import Link from 'next/link';
import Image from 'next/image';
import { SocialItems } from './components';
import './hero-section.css';
import { CountDown } from '@/components';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-container">
        <h1 className="heading-primary margin-bt-n">
          Fortalece tu fe y encuentra respuestas en Cristo
        </h1>
        <p className="hero-description">
          Conferencia de la Estaca Ayacucho - 20 y 21 de Septiembre
        </p>
        <div className="hero-countdown">
          <CountDown />
        </div>
        <Link href="#cta-section" className="btn btn--full margin-r-n">
          Fortalece tu fe
        </Link>
        <Link href="#about-section" className="btn btn--outline">
          Más información &darr;
        </Link>
      </div>
      <Image
        className="hero-image"
        src="/images/hero-section/picture_of_jesus_2.webp"
        alt="image of jesuschrist"
        width={2592}
        height={2561}
        // style={{ width: '50%', height: 'auto' }}
      />
      <SocialItems />
    </section>
  );
};
