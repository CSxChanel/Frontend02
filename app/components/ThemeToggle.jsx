"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Pastikan komponen sudah ter-mount di client
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        <FaSun className="text-gray-400" />
      </button>
    );

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-indigo-500" />
      )}
    </button>
  );
}
