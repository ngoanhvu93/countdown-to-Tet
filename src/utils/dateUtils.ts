export function getLunarNewYear(): Date {
  // Lunar New Year 2024 falls on February 10th
  return new Date('2024-02-10T00:00:00');
}

export function calculateTimeLeft(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const difference = getLunarNewYear().getTime() - new Date().getTime();
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}