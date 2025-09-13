import './testimonials.css';
import { TestimonialCard } from './components';

const testimonials = [
  {
    author: 'Eva Gavilan y Jhoshep Chipana',
    testimonialDesc:
      'Escuchar los mensajes nos da esperanza en medio de las preocupaciones. El Señor nos habla directamente al corazón.',
    imgUrl: '/images/testimonials-section/photo-01.png',
    imageDesc: 'Fotografia de Eva y Jhoshep',
    width: 824,
    height: 824,
  },
  {
    author: 'Luis Arteaga y Monica Torres',
    testimonialDesc:
      'La conferencia nos ayudó a sentir el Espíritu y recordar que Dios tiene un plan para nosotros. Salimos con más fe y ánimo.',
    imgUrl: '/images/testimonials-section/photo-02.png',
    imageDesc: 'Fotografia 2',
    width: 400,
    height: 400,
  },
  {
    author: 'Huder De La Cruz',
    testimonialDesc:
      'Asistir a la conferencia me dio la respuesta que estaba buscando. Sentí paz y claridad al tomar decisiones en mi vida.',
    imgUrl: '/images/testimonials-section/photo-03.png',
    imageDesc: 'Fotografia 03',
    width: 484,
    height: 484,
  },
  {
    author: 'Silvana Rodriguez',
    testimonialDesc:
      'En la conferencia sentí una fortaleza especial para mi familia. Volví a casa con más amor y deseo de servir a los míos.',
    imgUrl: '/images/testimonials-section/photo-04.png',
    imageDesc: 'Fotografia 04',
    width: 818,
    height: 818,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="testimonials-section">
      <div className="container">
        <div className="sub-heading">Testimonios</div>
        <h2 className="heading-secondary">
          Personas reales con mensajes sinceros
        </h2>
        <div className="testimonials-container grid grid--2-cols column-gap-lg row-gap-md">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
