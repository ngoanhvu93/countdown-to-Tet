"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

// Định nghĩa kiểu dữ liệu cho đối tượng timeLeft
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Hàm tính toán thời gian còn lại
function calculateTimeLeft(): TimeLeft {
  const targetDate = new Date("2026-02-17T00:00:00"); // Ngày Tết 2026
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

// Định nghĩa kiểu cho props của CountdownUnit
interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("bounce");
    const timer = setTimeout(() => {
      setAnimationClass("");
    }, 600);

    setIsFlipped(true);
    const flipTimer = setTimeout(() => {
      setIsFlipped(false);
    }, 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(flipTimer);
    };
  }, [value]);

  // Format the number to add leading zero if less than 10
  const formattedValue = value < 10 ? `0${value}` : value;

  return (
    <div className="w-16 sm:w-20 md:w-24  ">
      <div>
        <div className="front bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 md:p-5">
          <span className="text-xl sm:text-3xl font-bold text-white number">
            {formattedValue}
          </span>
          <span className="text-sm sm:text-lg text-white opacity-80">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  const [isCelebration, setIsCelebration] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window === "undefined" ? 0 : window.innerWidth
  );

  const [windowHeight, setWindowHeight] = useState(
    typeof window === "undefined" ? 0 : window.innerHeight
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Kiểm tra nếu đến ngày Tết
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsCelebration(true); // Kích hoạt hiệu ứng bắn pháo hoa
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col mt-10 sm:mt-20 lg:mt-3 ">
      {isCelebration && (
        <div className="confetti-container absolute inset-0">
          <Confetti
            width={windowWidth}
            height={windowHeight}
            recycle={false}
            numberOfPieces={1000}
          />
        </div>
      )}

      <div className="flex justify-evenly items-center w-full space-x-6 sm:space-x-8 md:space-x-10">
        <div className="flex-1">
          <CountdownUnit
            key={timeLeft.days}
            value={timeLeft.days}
            label="Ngày"
          />
        </div>
        <div className="flex-1">
          <CountdownUnit
            key={timeLeft.hours}
            value={timeLeft.hours}
            label="Giờ"
          />
        </div>
        <div className="flex-1">
          <CountdownUnit
            key={timeLeft.minutes}
            value={timeLeft.minutes}
            label="Phút"
          />
        </div>
        <div className="flex-1">
          <CountdownUnit
            key={timeLeft.seconds}
            value={timeLeft.seconds}
            label="Giây"
          />
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-center text-gray-500 opacity-70 blinking-text">
        Đếm ngược đến Tết Nguyên Đán {new Date().getFullYear() + 1} 🎉
      </div>
    </div>
  );
};

export default CountdownTimer;
