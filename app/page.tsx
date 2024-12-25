"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CountdownTimer from "../components/CountdownTimer";
import { Disc3, Play, Pause } from "lucide-react"; // Import icons
import { motion } from "framer-motion"; // Import framer-motion

export default function Home() {
  const [audio, setAudio] = useState(null); // State to store audio object
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing

  useEffect(() => {
    const audioInstance = new Audio("/asian-new-year-celebration.mp3");
    audioInstance.loop = true;
    setAudio(audioInstance);

    // Cleanup the audio when the component is unmounted
    return () => {
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0;
      }
    };
  }, []);

  // Function to toggle play and stop the audio
  const toggleAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Audio playback failed:", error);
          });
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-100 to-yellow-200 flex flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Add a fade-in animation when the page loads */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 text-center text-gray-800 gradient-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Lunar New Year 2025 Countdown
      </motion.h1>

      <motion.div
        className="p-6 sm:p-8 md:p-10 lg:p-12 max-w-xl w-full flex flex-col items-center justify-center mb-6 sm:mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <CountdownTimer />
      </motion.div>

      <motion.p
        className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 text-center font-semibold italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Celebrating the Year of the Snake 🐍
      </motion.p>

      {/* Play/Stop Audio Button */}
      <motion.div
        className="flex justify-center space-x-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <button
          onClick={toggleAudio}
          className={`bg-green-700 w-56 flex justify-center items-center text-white py-3 px-6 rounded-lg shadow-md ${
            isPlaying ? "bg-green-600 shadow-lg" : "hover:bg-green-800"
          }`}
        >
          <span className="flex items-center space-x-2">
            {/* Spinning Vinyl Record and Icon */}
            {isPlaying ? (
              <>
                <Disc3 className="text-white animate-spin" />{" "}
                {/* Spinning vinyl record */}
                <Pause className="text-white" />{" "}
                {/* Pause icon when music is playing */}
                <span>Music Playing</span>
              </>
            ) : (
              <>
                <Play className="text-white" />{" "}
                {/* Play icon when music is stopped */}
                <span>Play Music</span>
              </>
            )}
          </span>
        </button>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <Link
          href="https://vu93.vercel.app/vn"
          className="link-button bg-red-700 w-56 flex justify-center items-center text-white py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out"
        >
          Join the Celebration
        </Link>
      </motion.div>
    </main>
  );
}
