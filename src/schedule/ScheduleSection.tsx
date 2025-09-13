import React from 'react';

import './schedule.css';
import { ScheduleBox } from './components';

export const ScheduleSection = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        <div className="sub-heading">Cronograma</div>
        <h2 className="heading-secondary">
          Horarios y ubicación de la conferencia
        </h2>
        <ScheduleBox />
      </div>
    </section>
  );
};
