import { ScheduleComponent } from './ScheduleComponent';

const sundayInfo = {
  dateEvent: 'Domingo 21 de Septiembre, 2025',
  sesions: [
    {
      name: '9:00AM - PRIMERA SESIÓN GENERAL',
      descriptions: [
        'Asisten barrios Alameda, Belén, Huanta(transmisión), Las Casuarinas y toda persona interesada.',
        'Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
        'Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
      ],
    },
    {
      name: '11:00AM - SEGUNDA SESIÓN GENERAL',
      descriptions: [
        'Asisten  barrios Garcilazo, Las Américas, Mariscal Cáceres y toda persona interesada.',
        'Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
      ],
    },
  ],
};

export const SundaySchedule = () => {
  return (
    <>
      <ScheduleComponent {...sundayInfo} />
    </>
  );
};
