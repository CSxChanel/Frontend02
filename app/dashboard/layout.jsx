"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Sidebar from "../components/ui/sidebar/Sidebar";
import Header from "../components/ui/heider/Heider";

export default function DashboardLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`${darkMode ? "dark" : ""}`}
    >
      <motion.div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          mobileMenuOpen={mobileMenuOpen}
          onToggle={toggleSidebar}
        />

        <motion.div className="flex-1 flex flex-col overflow-hidden">
          <Header
            onToggleMobileMenu={toggleMobileMenu}
            onToggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />

          <motion.main
            variants={itemVariants}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
          >
            {children}
          </motion.main>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
