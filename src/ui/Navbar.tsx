'use client';

import React, { useState } from 'react';

import './navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <header className={`section-header ${navOpen ? 'nav-open' : ''}`}>
        <Link href="#">
          <Image
            src="/images/navbar/logo-stake-brand-color.webp"
            alt="Logo de la estaca ayacucho"
            width={900}
            height={1203}
            className="logo"
          />
        </Link>
        <div onClick={() => setNavOpen(!navOpen)} className="header-menu">
          <nav className="main-nav">
            <ul className="main-nav-list">
              <Link href={'#about-section'}>Acerca de</Link>
              <Link href={'#speakers-section'}>Discursantes</Link>
              <Link href={'#schedule-section'}>Programa</Link>
              <Link href={'#testimonials-section'}>Testimonios</Link>
            </ul>
          </nav>
          <Link href="#cta-section" className="btn btn--full btn-md">
            Invitación
          </Link>
        </div>
        <button onClick={() => setNavOpen(!navOpen)} className="mobile-nav">
          <IoMenuSharp className="icon-mobile-nav" name="menu-outline" />
          <IoCloseSharp className="icon-mobile-nav" name="close-outline" />
        </button>
      </header>
    </>
  );
};
