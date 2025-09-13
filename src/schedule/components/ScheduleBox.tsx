'use client';
import { useState } from 'react';
import { SaturdaySchedule } from './SaturdaySchedule';
import { SundaySchedule } from './SundaySchedule';

type Day = 'saturday' | 'sunday';

export const ScheduleBox = () => {
  const [selectedDay, setSelectedDay] = useState<Day>('saturday');

  return (
    <div className="container-details">
      <div className="schedule-buttons">
        <button
          onClick={() => setSelectedDay('saturday')}
          className={`button-schedule ${
            selectedDay === 'saturday' ? 'active-schedule' : ''
          }`}
        >
          Sábado 20
        </button>
        <button
          onClick={() => setSelectedDay('sunday')}
          className={`button-schedule ${
            selectedDay === 'sunday' ? 'active-schedule' : ''
          }`}
        >
          Domingo 21
        </button>
      </div>
      {selectedDay === 'saturday' ? <SaturdaySchedule /> : <SundaySchedule />}
    </div>
  );
};
