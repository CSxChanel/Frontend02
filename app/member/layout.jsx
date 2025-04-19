// app/member/layout.jsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Sidebar from "@/";
import Header from "@/components/ui/heider/Heider";
import GlobalLoader from "@/context/GlobalLoading";

export default function MemberLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <>
      <GlobalLoader />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <motion.div className="flex h-screen overflow-hidden">
          <Sidebar
            collapsed={sidebarCollapsed}
            mobileMenuOpen={mobileMenuOpen}
            onToggle={toggleSidebar}
          />
          <motion.div className="flex-1 flex flex-col overflow-hidden">
            <Header onToggleMobileMenu={toggleMobileMenu} />
            <motion.main
              variants={itemVariants}
              className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative"
            >
              {children}
            </motion.main>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
