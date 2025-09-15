'use client';

import { useEffect, useState } from 'react';

interface Props {
  expired: null | boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLoading: boolean;
}

export const useCountDown = (eventDate: number) => {
  const [timerLeft, setTimerLeft] = useState<Props>({
    expired: null,
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 0,
    isLoading: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerLeft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const calculateTimeLeft = () => {
    const nowDate = new Date().getTime();
    const difference = eventDate - nowDate;

    if (difference <= 0) {
      return {
        expired: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isLoading: false,
      };
    }

    return {
      expired: false,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isLoading: false,
    };
  };

  return {
    ...timerLeft,
  };
};
