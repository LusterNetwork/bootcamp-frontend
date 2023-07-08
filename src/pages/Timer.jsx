import React, { useEffect, useState } from "react";

const Timer = () => {
  const HOURS = 1000 * 60 * 60;
  const MINUTES = 1000 * 60;

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const todaysDate = new Date();
    const timeToAdd = 9 * 24 * HOURS;
    const timerEndDate = new Date(todaysDate.getTime() + timeToAdd);

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const difference = timerEndDate.getTime() - currentTime;

      const remainingDays = Math.floor(difference / (HOURS * 24));
      const remainingHours = Math.floor((difference % (HOURS * 24)) / HOURS);
      const remainingMinutes = Math.floor((difference % HOURS) / MINUTES);
      const remainingSeconds = Math.floor((difference % MINUTES) / 1000);

      setRemainingTime({
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="flex justify-center gap-0 md:gap-1 text-center">
      <div className="flex flex-col p-1 md:p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span>
            {remainingTime.days < 10
              ? `0${remainingTime.days}`
              : remainingTime.days}
          </span>
        </span>
        days
      </div>
      <span className="text-4xl self-center">:</span>
      <div className="flex flex-col p-1 md:p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span>
            {remainingTime.hours < 10
              ? `0${remainingTime.hours}`
              : remainingTime.hours}
          </span>
        </span>
        hours
      </div>
      <span className="text-4xl self-center">:</span>
      <div className="flex flex-col p-1 md:p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span>
            {remainingTime.minutes < 10
              ? `0${remainingTime.minutes}`
              : remainingTime.minutes}
          </span>
        </span>
        min
      </div>
      <span className="text-4xl self-center">:</span>
      <div className="flex flex-col p-1 md:p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span>
            {remainingTime.seconds < 10
              ? `0${remainingTime.seconds}`
              : remainingTime.seconds}
          </span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Timer;
