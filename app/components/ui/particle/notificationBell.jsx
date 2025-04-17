// import { FiBell } from "react-icons/fi";
import { FaRegBell, FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const hasNotification = true;

  return (
    <button className="relative p-2 rounded-full text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
      {hasNotification ? (
        <FaBell className="text-yellow-400 text-xl " />
      ) : (
        <FaRegBell className="text-gray-400 text-xl" />
      )}
      {hasNotification && (
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animation-ping"></span>
      )}
    </button>
  );
}
