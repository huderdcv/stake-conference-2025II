import './testimonials.css';
import { TestimonialCard } from './components';

const testimonials = [
  {
    author: 'Eva Gavilan',
    testimonialDesc:
      'Que hermoso es crecer en la fe de la mano con la persona que amas. Y en esta conferencia nos acercara más al Señor y poder hacer su voluntad.',
    imgUrl: '/images/testimonials-section/eva-gavilan.jpg',
    imageDesc: 'Fotografia de Eva',
    width: 720,
    height: 720,
  },
  {
    author: 'Rubén Martínez y Elizabeth León',
    testimonialDesc:
      'Como matrimonio, agradecemos las conferencias porque fortalecen nuestra fe y nos enseñan a centrar nuestro hogar en Jesucristo.',
    imgUrl: '/images/testimonials-section/ruben-elizabeth.png',
    imageDesc: 'Fotografia de Ruben Martinez y Elizabeth Leon',
    width: 918,
    height: 918,
  },
  {
    author: 'Lenin Cuba y Minerva Arca',
    testimonialDesc:
      'Asistir a la conferencia nos ayuda a sentir más el Espíritu Santo, a recibir respuestas y a comprender que Dios tiene un plan para nosotros.',
    imgUrl: '/images/testimonials-section/lenin-minerva.jpeg',
    imageDesc: 'Fotografia de Lenin y Minerva',
    width: 999,
    height: 999,
  },
  {
    author: 'Huder De La Cruz',
    testimonialDesc:
      'Asistir a mi primera conferencia fue un punto clave en mi acercamiento a Cristo. Ahora cada conferencia me da conocimiento y gozo.',
    imgUrl: '/images/testimonials-section/huder-delacruz.png',
    imageDesc: 'Fotografia de Huder',
    width: 1036,
    height: 1036,
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
