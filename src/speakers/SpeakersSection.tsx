import React from 'react';
import './speakers.css';
import { SpeakerCard } from './components';
import confetti from 'canvas-confetti';

const speakers = [
  {
    imageUrl: '/images/speakers-section/elder-palhua.jpg',
    description: 'Fotografia del Elder Palhua, Setenta de área',
    name: 'Elder Palhua',
    calling: 'Setenta de Área',
    isPrincipal: true,
  },
  {
    imageUrl: '/images/speakers-section/presidente-huamani.jpg',
    description:
      'Fotografia del Presidente Huamani, Presidente de la estaca ayacucho',
    name: 'Presidente Huamani',
    calling: 'Presidente de la Estaca Ayacucho',
    isPrincipal: false,
  },
  {
    imageUrl: '/images/speakers-section/presidente-zea.png',
    description:
      'Fotografia del Presidente Zea, segundo consejero de la presidencia de estaca ayacucho',
    name: 'Presidente Zea',
    calling: '2do Consejero de la Estaca',
    isPrincipal: false,
  },
  {
    imageUrl: '/images/speakers-section/presidentes-byers.jpeg',
    description:
      'Fotografia del Presidente Byers junto a su esposa la hermana Byers, Presidentes de la misión Perú Lima Sur',
    name: 'Pdte y Hna Byers',
    calling: 'Presidentes de la Misión Perú Lima Sur',
    isPrincipal: false,
  },
  {
    imageUrl: '/images/speakers-section/presidente-arangoitia.png',
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
    <section id="speakers-section" className="speakers-section">
      <div className="container">
        <div className="sub-heading">Discursantes</div>
        <h2 className="heading-secondary">
          Siervos inspirados de Cristo listos para compartir su mensaje
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
