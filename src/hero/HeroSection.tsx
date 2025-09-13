import React from 'react';
import { Navbar } from '@/ui';
import Link from 'next/link';
import Image from 'next/image';
import { SocialItems } from './components';
import './hero-section.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-container">
        <p className="hero-description">Conferencia de la Estaca Ayacucho</p>
        <h1 className="heading-primary margin-bt-lg">
          Fortalece tu fe y encuentra respuestas en Cristo
        </h1>
        <Link href="#about-section" className="btn btn--outline margin-r-sm">
          Más información
        </Link>
        <Link href="#" className="btn btn--full">
          Fortalece tu fe
        </Link>
      </div>
      <Image
        className="hero-image"
        src="/images/hero-section/picture_of_jesus.png"
        alt="image of jesuschrist"
        width={2592}
        height={2561}
        // style={{ width: '50%', height: 'auto' }}
      />
      <SocialItems />
    </section>
  );
};
