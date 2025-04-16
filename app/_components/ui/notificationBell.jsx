// import { FiBell } from "react-icons/fi";
import { FaRegBell, FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const hasNotification = true;

  return (
    <button className="relative p-2 rounded-full hover:bg-gray-800">
      {hasNotification ? (
        <FaBell className="text-yellow-400 text-xl" />
      ) : (
        <FaRegBell className="text-gray-400 text-xl" />
      )}
      {hasNotification && (
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      )}
    </button>
  );
}
