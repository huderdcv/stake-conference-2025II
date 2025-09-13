import Image from 'next/image';
import React from 'react';

interface Props {
  name: string;
  calling: string;
  imageUrl: string;
  description: string;
  isPrincipal: boolean;
}
export const SpeakerCard = ({
  name,
  calling,
  imageUrl,
  description,
  isPrincipal,
}: Props) => {
  return (
    <div className={`speaker-card ${isPrincipal ? 'principal' : ''}`}>
      <Image
        alt={description}
        src={imageUrl}
        width={1016}
        height={1016}
        className="speaker-card-image"
      />
      <p className="speaker-card-name">{name}</p>
      <p className="speaker-card-calling">{calling}</p>
    </div>
  );
};
