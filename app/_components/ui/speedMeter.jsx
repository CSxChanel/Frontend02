"use client";
import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SpeedMeter({ speed = 85 }) {
  return (
    <div className="relative h-40">
      {/* Speed Meter Background */}
      <div className="absolute inset-0 bg-gray-800 rounded-xl opacity-20"></div>

      {/* Speed Indicator */}
      <motion.div
        initial={{ rotate: -120 }}
        animate={{ rotate: -120 + (240 * speed) / 100 }}
        className="absolute bottom-0 left-1/2 origin-bottom w-1 h-24 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t-full"
        style={{ left: "50%" }}
      />

      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-900 rounded-full border-4 border-gray-800 flex items-center justify-center">
        <FiZap className="text-yellow-400 text-xl" />
      </div>

      {/* Speed Text */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {speed}%
        </span>
        <p className="text-xs text-gray-400">Current Speed</p>
      </div>
    </div>
  );
}
