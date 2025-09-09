import Link from 'next/link';
import React from 'react';
import { IoLogoFacebook, IoLogoTiktok } from 'react-icons/io5';

export const SocialItems = () => {
  return (
    <>
      <ul className="social-links">
        <li>
          <Link
            href="https://www.facebook.com/estaca.ayacuchoperu?locale=es_LA"
            target="_blank"
            className="social-link"
          >
            <IoLogoFacebook className="social-icon" />
          </Link>
        </li>
        <li>
          <Link
            href={'https://www.tiktok.com/@estaca.ayacucho'}
            target="_blank"
            className="social-link"
          >
            <IoLogoTiktok className="social-icon" />
          </Link>
        </li>
      </ul>
    </>
  );
};
