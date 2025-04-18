import { FaRocket, FaChevronLeft } from "react-icons/fa";

export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-between h-16 px-6 border-b border-gray-400 dark:border-cyan-400">
      <div className="flex items-center space-x-2">
        <FaRocket className="text-2xl text-primary-600 dark:text-primary-400 animate-pulse-slow" />
        <span className="text-xl font-bold dark:text-white whitespace-nowrap">
          SKYNET{" "}
        </span>
      </div>
    </div>
  );
}
