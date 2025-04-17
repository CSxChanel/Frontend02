import { FaEllipsisV } from "react-icons/fa";

export default function UserProfile() {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-3 border-2 border-primary-500 animate-float"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User profile"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
            Sarah Johnson
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            Admin
          </p>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
}
