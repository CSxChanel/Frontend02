// app/dashboard/layout.jsx
"use client";
import Sidebar from "@/app/layouts/sidebar-dashboard";
import Header from "@/app/layouts/hearde-dashboard";

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

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <Header />
        <main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-4"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
