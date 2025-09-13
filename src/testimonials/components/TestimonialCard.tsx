import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface Props {
  author: string;
  testimonialDesc: string;
  imgUrl: string;
  imageDesc: string;
  width: number;
  height: number;
}
export const TestimonialCard = ({
  author,
  testimonialDesc,
  imgUrl,
  imageDesc,
  width,
  height,
}: Props) => {
  return (
    <figure className="testimonial-card">
      <div className="quot-box">
        <FaQuoteLeft className="quot-sign" />
      </div>
      <div className="testimonial-box">
        <blockquote className="testimonial-text">{testimonialDesc}</blockquote>
        <Image
          src={imgUrl}
          alt={imageDesc}
          width={width}
          height={height}
          className="testimonial-image"
        />
        <p className="testimonial-author">&mdash; {author}</p>
      </div>
    </figure>
  );
};
