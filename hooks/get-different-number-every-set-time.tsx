// hooks/useDifferentNumberAtSetTime.ts
import { useEffect, useState } from 'react';

export const useDifferentNumberAtSetTime = (time: number, sides: number[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sides.length);
    }, time);

    return () => clearInterval(interval);
  }, [time, sides.length]);

  return sides[currentIndex];
};
