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
function calculateTimeLeft(targetDate: Date): TimeLeft {
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
  const [targetDate, setTargetDate] = useState<Date>(
    new Date("2026-02-17T00:00:00")
  ); // Giá trị mặc định
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  // Fetch ngày Tết từ API
  useEffect(() => {
    const fetchLunarNewYear = async () => {
      try {
        setLoading(true);

        // Gọi API lấy ngày Tết (ví dụ)
        // Ở đây sử dụng API Nager.Date (API miễn phí cho ngày lễ)
        const response = await fetch(
          `https://date.nager.at/api/v3/publicholidays/${
            new Date().getFullYear() + 1
          }/VN`
        );

        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu từ API");
        }

        const holidays = await response.json();

        // Tìm ngày Tết trong danh sách ngày lễ
        const lunarNewYear = holidays.find(
          (holiday: any) =>
            holiday.name.includes("Lunar New Year") ||
            holiday.name.includes("Tết") ||
            holiday.localName.includes("Tết")
        );

        console.log(lunarNewYear);

        if (lunarNewYear) {
          setTargetDate(new Date(lunarNewYear.date + "T00:00:00"));
        } else {
          // Nếu không tìm thấy, giữ ngày mặc định
          console.log("Không tìm thấy ngày Tết, sử dụng ngày mặc định");
        }
      } catch (err) {
        console.error("Lỗi khi lấy ngày Tết:", err);
        setError("Không thể lấy ngày Tết, đang sử dụng ngày mặc định");
      } finally {
        setLoading(false);
      }
    };

    fetchLunarNewYear();
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft(targetDate);
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
    }
  }, [loading, targetDate]);

  return (
    <div className="flex justify-center items-center flex-col mt-10 sm:mt-20 lg:mt-3 ">
      {loading ? (
        <div className="text-center py-4">Đang tải ngày Tết...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-2">{error}</div>
      ) : (
        <>
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
                key={`days-${timeLeft.days}`}
                value={timeLeft.days}
                label="Ngày"
              />
            </div>
            <div className="flex-1">
              <CountdownUnit
                key={`hours-${timeLeft.hours}`}
                value={timeLeft.hours}
                label="Giờ"
              />
            </div>
            <div className="flex-1">
              <CountdownUnit
                key={`minutes-${timeLeft.minutes}`}
                value={timeLeft.minutes}
                label="Phút"
              />
            </div>
            <div className="flex-1">
              <CountdownUnit
                key={`seconds-${timeLeft.seconds}`}
                value={timeLeft.seconds}
                label="Giây"
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-center text-gray-500 opacity-70 blinking-text">
            Đếm ngược đến Tết Nguyên Đán {new Date(targetDate).getFullYear()} 🎉
          </div>

          <div className="mt-2 text-sm text-gray-400">
            Ngày Tết: {targetDate.toLocaleDateString("vi-VN")}
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
