import React from 'react';
import './about.css';
import Image from 'next/image';
import { FeaturesAbout } from './components';
export const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="about-section animate__animated animate__fadeIn"
    >
      <div className="container grid grid--2-cols about-container-gap margin-bt-xl">
        <div className="heading-box">
          <div className="sub-heading">Acerca de</div>
          <h2 className="heading-secondary about-title">La conferencia</h2>
        </div>

        <Image
          src="/images/about-section/sermon_on_the_mount.webp"
          alt="El señor Jesucristo enseñando el Sermon del Monte"
          width={1920}
          height={1280}
          className="about-image-1"
        />
        <div className="images-container">
          <Image
            src="/images/about-section/jesus_teaching.webp"
            alt="El señor Jesucristo enseñando en la ciudad"
            width={3840}
            height={2560}
            className="about-image-2"
          />
          <Image
            src="/images/about-section/jesus_smiling.webp"
            alt="Jesucristo sonriendo"
            width={1920}
            height={2885}
            className="about-image-3 animate__animated animate__fadeInUp"
          />
        </div>
        <p className="about-description">
          La conferencia de estaca es una reunión semestral organizada por la
          Estaca Ayacucho. Es una gran oportunidad para toda persona de escuchar
          mensajes edificantes de Jesucristo, fortalecer la fe y descubrir
          respuestas a las preguntas más importantes de la vida.{' '}
        </p>
      </div>

      <FeaturesAbout />
    </section>
  );
};
