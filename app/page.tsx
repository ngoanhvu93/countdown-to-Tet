"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import CountdownTimer from "../components/CountdownTimer";
import { Disc3, Play, Pause, Volume2, VolumeX } from "lucide-react"; // Added Volume icons
import { motion } from "framer-motion"; // Import framer-motion

export default function Home() {
  const [audio, setAudio] = useState(null); // State to store audio object
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // Use a ref to keep track of animation frame
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const audioInstance = new Audio("/asian-new-year-celebration.mp3");
    audioInstance.loop = true;
    audioInstance.volume = volume;

    // Add event listeners for audio
    audioInstance.addEventListener("loadedmetadata", () => {
      setDuration(audioInstance.duration);
    });

    setAudio(audioInstance);

    // Cleanup the audio when the component is unmounted
    return () => {
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0;
        cancelAnimationFrame(animationRef.current as number);
      }
    };
  }, []);

  // Function to update time display
  const updateTimeDisplay = () => {
    if (audio) {
      setCurrentTime(audio.currentTime);
      animationRef.current = requestAnimationFrame(updateTimeDisplay);
    }
  };

  // Function to toggle play and stop the audio
  const toggleAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        cancelAnimationFrame(animationRef.current as number);
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            animationRef.current = requestAnimationFrame(updateTimeDisplay);
          })
          .catch((error) => {
            console.log("Audio playback failed:", error);
          });
      }
    }
  };

  // Function to handle timeline change
  const handleTimelineChange = (e) => {
    if (audio) {
      const newTime = e.target.value;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    if (audio) {
      const newVolume = e.target.value;
      audio.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0 && isMuted) {
        setIsMuted(false);
      } else if (newVolume === 0 && !isMuted) {
        setIsMuted(true);
      }
    }
  };

  // Function to toggle mute
  const toggleMute = () => {
    if (audio) {
      if (isMuted) {
        audio.volume = volume || 0.5;
        setIsMuted(false);
      } else {
        audio.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Format time to display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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

      {/* Music Player Component */}
      <motion.div
        className="w-full max-w-md mt-8 bg-white/30 backdrop-blur-sm p-4 rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={toggleAudio}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              isPlaying ? "bg-green-600" : "bg-green-700"
            } text-white`}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <div className="flex-1 mx-4">
            <div className="flex justify-between text-xs text-gray-700 mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <input
              title="Timeline"
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleTimelineChange}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300"
            />
          </div>

          <div className="flex items-center">
            <button onClick={toggleMute} className="text-gray-700 mr-2">
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              title="Volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 h-2 rounded-lg appearance-none cursor-pointer bg-gray-300"
            />
          </div>
        </div>

        <div className="text-center text-sm font-medium text-gray-700">
          Nhạc Tết - Lunar New Year Celebration Music
        </div>
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
