"use client";
import { motion } from "framer-motion";

export default function GlowCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="relative group rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-400/10 group-hover:opacity-100 opacity-0 transition-opacity" />
      <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 h-full border border-gray-700 rounded-xl">
        {children}
      </div>
    </motion.div>
  );
}
