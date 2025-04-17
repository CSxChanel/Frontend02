// app/dashboard/layout.jsx
"use client";
import Sidebar from "@/app/_components/layouts/sidebar-dashboard";
import Header from "@/app/_components/layouts/hearde-dashboard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
