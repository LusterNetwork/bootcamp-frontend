import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Timer = ({ isShow, func }) => {
  const MINUTES = 1000 * 60;
  const SECONDS = 1000;

  const [remainingTime, setRemainingTime] = useState(() => {
    const timerEndDate = localStorage.getItem("timerEndDate");
    const currentTime = new Date().getTime();

    if (timerEndDate && parseInt(timerEndDate) > currentTime) {
      return parseInt(timerEndDate) - currentTime;
    }

    return 30 * MINUTES;
  });

  useEffect(() => {
    const timerEndDate = new Date().getTime() + remainingTime;

    localStorage.setItem("timerEndDate", timerEndDate.toString());

    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = timerEndDate - currentTime;

      setRemainingTime(difference);
    }, SECONDS);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "timerEndDate" && !localStorage.getItem("timerEndDate")) {
        setRemainingTime(30 * MINUTES);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / MINUTES);
    const seconds = Math.floor((time % MINUTES) / SECONDS);

    return { minutes, seconds };
  };

  return (
    <div className="fixed z-10 inset-0 bg-opacity-80 flex flex-col items-center justify-center bg-gray-800">
      <div className="animate-slide-down text-center mx-2 md:mx-0 bg-white shadow-xl rounded-md px-6 md:px-10 py-12 text-black relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => func(!isShow)}
        >
          <MdCancel size={24} />
        </button>
        <h2 className="text-lg md:text-3xl font-extrabold mb-4 font-bruno text-green-600">
          Early Bird Offer: Rs. 9999 only
        </h2>
        <div className="flex items-center justify-center space-x-1 md:space-x-2 text-center">
          <div className="flex flex-col items-center m-1 md:m-2 p-2 bg-slate-200 rounded-lg">
            <span className="text-xl md:text-3xl font-bold">
              {formatTime(remainingTime).minutes < 10
                ? `0${formatTime(remainingTime).minutes}`
                : formatTime(remainingTime).minutes}
            </span>
            <span className="text-xs mt-1 font-bold">Minutes</span>
          </div>
          <span className="text-2xl md:text-4xl font-extrabold text-black">:</span>
          <div className="flex flex-col items-center m-1 md:m-2 p-2 bg-slate-200 rounded-lg">
            <span className="text-xl md:text-3xl font-bold">
              {formatTime(remainingTime).seconds < 10
                ? `0${formatTime(remainingTime).seconds}`
                : formatTime(remainingTime).seconds}
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
