import { FaRocket, FaChevronLeft } from "react-icons/fa";

export default function SidebarHeader({ collapsed, onToggle }) {
  return (
    <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <FaRocket className="text-2xl text-primary-600 dark:text-primary-400 animate-pulse-slow" />
        {!collapsed && (
          <span className="text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">
            AdminPro
          </span>
        )}
      </div>
      {!collapsed && (
        <button
          onClick={onToggle}
          className="p-1 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FaChevronLeft />
        </button>
      )}
    </div>
  );
}
