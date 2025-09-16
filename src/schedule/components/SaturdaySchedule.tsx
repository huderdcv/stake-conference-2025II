import { ScheduleComponent } from './ScheduleComponent';

const saturdayInfo = {
  dateEvent: 'Sábado 20 de Septiembre, 2025',
  sesions: [
    {
      name: '5:30PM - SESIÓN DE LÍDERES DEL CONSEJO DE BARRIO Y ESTACA AMPLIADO ',
      descriptions: [
        'Asisten líderes en general, así como organizaciones completas de barrio y estaca, junto con secretarios, maestros y presidentes de cuórum de diáconos y maestros.',
        'Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
      ],
    },
    {
      name: '7:30PM - SESIÓN DE ADULTOS',
      descriptions: [
        'Asisten adultos desde los 18 años de todos los barrios y toda persona interesada.',
        'Jr. 28 de julio 716 (Alameda Valdelirios) - Huamanga',
        'Jr. 2 de mayo 495(Frente al recreo Don Felix) - Huanta',
      ],
    },
  ],
};

export const SaturdaySchedule = () => {
  return (
    <>
      <ScheduleComponent {...saturdayInfo} />
    </>
  );
};
