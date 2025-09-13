import React from 'react';

import './schedule.css';
import { ScheduleBox } from './components';

export const ScheduleSection = () => {
  return (
    <section id="schedule-section" className="schedule-section">
      <div className="container">
        <div className="sub-heading">Programa</div>
        <h2 className="heading-secondary">
          Horarios y ubicación de la conferencia
        </h2>
        <ScheduleBox />
      </div>
    </section>
  );
};
