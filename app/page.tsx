'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const [audio, setAudio] = useState(null); // State to store audio object
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing

  useEffect(() => {
    const audioInstance = new Audio('/asian-new-year-celebration.mp3');
    audioInstance.loop = true;
    setAudio(audioInstance);

    // Cleanup the audio when the component is unmounted
    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    };
  }, []);

  // Function to start the audio
  const playAudio = () => {
    if (audio) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Audio playback failed:', error);
      });
    }
  };

  // Function to stop the audio
  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-100 to-yellow-200 flex flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-800 mb-6 sm:mb-8 text-center text-shadow">
        Lunar New Year 2025 Countdown
      </h1>
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-xl w-full flex flex-col items-center justify-center border-4 border-yellow-500 mb-6 sm:mb-8">
        <CountdownTimer />
      </div>
      <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-red-800 text-center font-semibold italic">
        Celebrating the Year of the Snake 🐍
      </p>
      
      {/* Play / Stop Audio Button */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={playAudio}
          disabled={isPlaying} // Disable play button if audio is already playing
          className="bg-green-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          Play Music
        </button>
        <button
          onClick={stopAudio}
          disabled={!isPlaying} // Disable stop button if audio is not playing
          className="bg-red-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out"
        >
          Stop Music
        </button>
      </div>

      <Link
        href="https://vu93.vercel.app/vn"
        className="link-button bg-red-700 text-white py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out mt-8"
      >
        Join the Celebration
      </Link>
    </main>
  );
}
