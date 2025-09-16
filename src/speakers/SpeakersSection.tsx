import React from 'react';
import './speakers.css';
import { SpeakerCard } from './components';
import confetti from 'canvas-confetti';

const speakers = [
  {
    imageUrl: '/images/speakers-section/elder-palhua.webp',
    description: 'Fotografia del Elder Palhua, Setenta de área',
    name: 'Elder Palhua',
    calling: 'Setenta de Área',
    isPrincipal: true,
  },
  {
    imageUrl: '/images/speakers-section/presidente-huamani.webp',
    description:
      'Fotografia del Presidente Huamani, Presidente de la estaca ayacucho',
    name: 'Presidente Huamani',
    calling: 'Presidente de la Estaca Ayacucho',
    isPrincipal: false,
  },
  {
    imageUrl: '/images/speakers-section/presidente-zea.webp',
    description:
      'Fotografia del Presidente Zea, segundo consejero de la presidencia de estaca ayacucho',
    name: 'Presidente Zea',
    calling: '2do Consejero de la Estaca',
    isPrincipal: false,
  },
  {
    imageUrl: '/images/speakers-section/presidentes-byers.webp',
    description:
      'Fotografia del Presidente Byers junto a su esposa la hermana Byers, Presidentes de la misión Perú Lima Sur',
    name: 'Pdte y Hna Byers',
    calling: 'Presidentes de la Misión Perú Lima Sur',
    isPrincipal: false,
  },
  {
    imageUrl: '/images/speakers-section/presidente-arangoitia.webp',
    description:
      'Fotografia del Presidente Alex Arangoitia, Gerente de Bienestar y Autosuficiencia',
    name: 'Presidente Arangoitia',
    calling: 'Gerente de Bienestar y Autosuficiencia',
    isPrincipal: false,
  },
];

export const SpeakersSection = () => {
  const handleMoreSpeakerAnimation = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  return (
    <section
      id="speakers-section"
      className="speakers-section animate__animated animate__fadeIn"
    >
      <div className="container">
        <div className="sub-heading">Discursantes</div>
        <h2 className="heading-secondary">
          Siervos inspirados listos para compartir el mensaje de Cristo
        </h2>
        <div className="speakers-container grid grid--3-cols speakers-gap">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
          <div
            // onMouseOutCapture={handleMoreSpeakerAnimation}
            className="more-speakers"
          >
            <p>Y muchos discursantes más...</p>
          </div>
        </div>
      </div>
    </section>
  );
};
