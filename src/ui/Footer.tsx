import React from 'react';
import './footer.css';

import Image from 'next/image';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoTiktok } from 'react-icons/io5';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* logo col */}
        <div className="logo-col">
          <Link href={'#'} className="logo-box">
            <Image
              src={`/images/navbar/logo-stake-brand-color.png`}
              alt="Logo de la estaca Ayacucho"
              width={900}
              height={1203}
              className="footer-logo-image"
            />
            <span className="footer-logo-text">EstacaAyacucho</span>
          </Link>
          <p className="copyright-text">Copyright &copy; 2025</p>
        </div>
        {/* address col */}
        <div className="address-col">
          <p className="address-title">Contáctanos</p>
          <div>
            <ul className="footer-social-links">
              <li>
                <Link
                  href="https://www.facebook.com/estaca.ayacuchoperu?locale=es_LA"
                  target="_blank"
                  className="footer-social-link"
                >
                  <IoLogoFacebook className="footer-social-icon" />
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.tiktok.com/@estaca.ayacucho'}
                  target="_blank"
                  className="footer-social-link"
                >
                  <IoLogoTiktok className="footer-social-icon" />
                </Link>
              </li>
            </ul>
          </div>
          <address>
            <p className="address">
              Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga
            </p>
          </address>
        </div>
        {/* nav-col */}
        <div className="nav-col">
          <ul className="footer-nav">
            <li>
              <Link href={'#about-section'} className="footer-link">
                Acerca de
              </Link>
            </li>
            <li>
              <Link href={'#speakers-section'} className="footer-link">
                Discursantes
              </Link>
            </li>
            <li>
              <Link href={'#schedule-section'} className="footer-link">
                Programa
              </Link>
            </li>
            <li>
              <Link href={'#testimonials-section'} className="footer-link">
                Testimonios
              </Link>
            </li>
          </ul>
          <p className="footer-msg">
            Este sitio web especial es parte de la difusión local de la
            Conferencia de Estaca Ayacucho y no proviene de un sitio oficial de
            La Iglesia de Jesucristo de los Santos de los Últimos Días.
          </p>
        </div>
      </div>
    </footer>
  );
};
