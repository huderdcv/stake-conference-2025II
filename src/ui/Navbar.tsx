import React from 'react';

import './navbar.css';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <>
      <header className="section-header">
        <Link href="#">
          <Image
            src="/images/navbar/logo-stake-brand-color.png"
            alt="logo de la estaca ayacucho"
            width={900}
            height={1203}
            className="logo"
          />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <Link href={'#about-section'}>Acerca de</Link>
            <Link href={'#speakers-section'}>Discursantes</Link>
            <Link href={'#schedule-section'}>Programa</Link>
            <Link href={'#testimonials-section'}>Testimonios</Link>
            <Link href={'#'}>FAQ</Link>
          </ul>
        </nav>
        <Link href="#" className="btn btn--full btn-md">
          Asistir
        </Link>
      </header>
    </>
  );
};
