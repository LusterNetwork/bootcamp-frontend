import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Timer = ({ isShow, func }) => {
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
    <div className="fixed z-10 inset-0 bg-opacity-80 flex flex-col items-center justify-center bg-gray-800">
    {/* <img
      src="/assets/spiderman.png"
      alt="spiderman"
      className="h-3/4  brightness-110"
    /> */}
   
    <div className="animate-slide-down bg-white shadow-xl rounded-md px-6 md:px-10 py-12 text-black relative">
    <button
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      onClick={() => func(!isShow)}
    >
      <MdOutlineCancel size={24} />
    </button>
    <h2 className="text-lg md:text-3xl font-extrabold mb-4 font-bruno text-green-600">
      Early Bird Offer: Rs. 9999 only
    </h2>
    <div className="flex items-center justify-center space-x-1 md:space-x-2 text-center">
      <div className="flex flex-col items-center m-1 md:m-2 p-2 bg-slate-200 rounded-lg">
        <span className="text-xl md:text-3xl font-bold">
          {remainingTime.days < 10
            ? `0${remainingTime.days}`
            : remainingTime.days}
        </span>
        <span className="text-xs mt-1 font-bold">Days</span>
      </div>
      <span className="text-2xl md:text-4xl font-extrabold text-black">:</span>
      <div className="flex flex-col items-center m-1 md:m-2 p-2 bg-slate-200 rounded-lg">
        <span className="text-xl md:text-3xl font-bold">
          {remainingTime.hours < 10
            ? `0${remainingTime.hours}`
            : remainingTime.hours}
        </span>
        <span className="text-xs mt-1 font-bold">Hours</span>
      </div>
      <span className="text-2xl md:text-4xl font-extrabold text-black">:</span>
      <div className="flex flex-col items-center m-1 md:m-2 p-2 bg-slate-200 rounded-lg">
        <span className="text-xl md:text-3xl font-bold">
          {remainingTime.minutes < 10
            ? `0${remainingTime.minutes}`
            : remainingTime.minutes}
        </span>
        <span className="text-xs mt-1 font-bold">Minutes</span>
      </div>
      <span className="text-2xl md:text-4xl font-extrabold text-black">:</span>
      <div className="flex flex-col items-center m-1 md:m-2 p-2 bg-slate-200 rounded-lg">
        <span className="text-xl md:text-3xl font-bold">
          {remainingTime.seconds < 10
            ? `0${remainingTime.seconds}`
            : remainingTime.seconds}
        </span>
        <span className="text-xs mt-1 font-bold">Seconds</span>
      </div>
    </div>
    <div className="flex flex-col items-center mt-2">
      <h2 className="text-lg md:text-3xl font-extrabold font-orbitron mb-2 text-red-600 animate-bounce">
        Hurry Up!
      </h2>
      <p className="text-sm md:text-2xl font-extrabold mb-2 font-orbitron">
        Limited Time Offer
      </p>
      <Link
        to="/register"
        className="h-10 md:h-12 mt-2 px-6 md:px-8 font-bold text-base md:text-xl flex items-center justify-center
        rounded-md bg-gradient-to-r from-[#58AFEF] to-[#9374DC] text-white transition-colors 
        hover:bg-[#9374DC] hover:from-[#58AFEF] hover:to-[#9374DC]"
      >
        Register Now
      </Link>
    </div>
  </div>
  </div>
  
  
  
  );
};

export default Timer;
