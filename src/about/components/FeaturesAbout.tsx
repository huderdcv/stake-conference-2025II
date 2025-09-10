import React from 'react';

import { FeatureItem } from './FeatureItem';
import { LuHandshake, LuHouse, LuSmilePlus, LuSparkles } from 'react-icons/lu';

const featureList = [
  {
    title: 'Inspiración',
    description:
      'Mensajes de Cristo para aplicar en tu hogar, estudios, trabajo, etc.',
    icon: <LuSmilePlus className="feature-icon" />,
  },
  {
    title: 'Fortaleza familiar',
    description:
      'Mensajes inspirados para edificar un hogar más fuerte y lleno de amor.',
    icon: <LuHouse className="feature-icon" />,
  },
  {
    title: 'Guía del Espíritu',
    description:
      'Experimenta la influencia del Espíritu Santo mientras escuchas los mensajes.',
    icon: <LuSparkles className="feature-icon" />,
  },
  {
    title: 'Comunidad',
    description:
      'Comparte un momento especial con personas que buscan lo mismo que tú.',
    icon: <LuHandshake className="feature-icon" />,
  },
];

export const FeaturesAbout = () => {
  return (
    <div className="container grid grid--4-cols column-gap-md">
      {featureList.map((feature) => (
        <FeatureItem key={feature.title} {...feature} />
      ))}
    </div>
  );
};
