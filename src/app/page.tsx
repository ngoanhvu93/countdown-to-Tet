'use client'

import Link from 'next/link';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-100 to-yellow-200 flex flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-800 mb-6 sm:mb-8 text-center">
        Lunar New Year 2025 Countdown
      </h1>
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-xl w-full flex flex-col items-center justify-center border-4 border-yellow-500 mb-6 sm:mb-8">
        <CountdownTimer />
      </div>
      <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-red-800 text-center font-semibold italic">
        Celebrating the Year of the Snake 🐍
      </p>
      <Link href="https://vu93.vercel.app/vn" className="bg-red-700 text-white py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out mt-8">
        Join the Celebration
      </Link>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <img src="/images/lunar-new-year-lanterns.png" alt="Lunar New Year Lanterns" className="w-32 sm:w-40 md:w-52 lg:w-64 object-contain" />
      </div>
    </main>
  );
}
