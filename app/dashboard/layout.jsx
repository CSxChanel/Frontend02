// app/dashboard/layout

import "../styles/globals.css";

import HeaderDashboard from "../layouts/hearde-dashboard";
import SidebarDashboard from "../layouts/sidebar-dashboard";

export default function LayoutDashboard({ children }) {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <section className="flex h-screen overflow-hidden">
          {/* ======sidebar====== */}
          <SidebarDashboard />
          <section className="flex-1 flex flex-col overflow-hidden">
            {/* ======heider====== */}
            <HeaderDashboard />
            {/* ======main contents====== */}
            <main className="z-20 flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
              {children}
            </main>
          </section>
        </section>
      </section>
    </>
  );
}
