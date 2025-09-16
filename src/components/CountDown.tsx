'use client';
import React from 'react';
import './countdown.css';
import { useCountDown } from './hooks';

const eventDate = new Date('2025-09-20T17:30:00-05:00').getTime();

export const CountDown = () => {
  const { expired, isLoading, days, hours, minutes, seconds } =
    useCountDown(eventDate);
  // if (isLoading) return <p>hola</p>;
  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <div
          className="cd-item "
          style={{ opacity: `${isLoading ? '0' : '100%'}` }}
        >
          <span className="cd-value">
            {days < 10 && '0'}
            {days}
          </span>
          <span className="cd-property">DIAS</span>
        </div>
        <div
          className="cd-item"
          style={{ opacity: `${isLoading ? '0' : '100%'}` }}
        >
          <span className="cd-value">
            {hours < 10 && '0'}
            {hours}
          </span>
          <span className="cd-property">HORAS</span>
        </div>
        <div
          className="cd-item"
          style={{ opacity: `${isLoading ? '0' : '100%'}` }}
        >
          <span className="cd-value ">
            {minutes < 10 && '0'}
            {minutes}
          </span>
          <span className="cd-property">MINUTOS</span>
        </div>
        <div
          className="cd-item"
          style={{ opacity: `${isLoading ? '0' : '100%'}` }}
        >
          <span className="cd-value">
            {seconds < 10 && '0'}
            {seconds}
          </span>
          <span className="cd-property">SEGUNDOS</span>
        </div>
      </div>
    </div>
  );
};
