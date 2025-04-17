import { FaChevronDown } from "react-icons/fa";

export default function SidebarMenuGroup({
  title,
  icon,
  children,
  open,
  onToggle,
}) {
  return (
    <div className="sidebar-menu-group">
      <div
        onClick={onToggle}
        className="flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer group hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <div className="flex items-center">
          <span className="mr-3 text-lg text-gray-500 dark:text-gray-400 group-hover:text-primary-600 transition-transform duration-200">
            {icon}
          </span>
          <span>{title}</span>
        </div>
        <FaChevronDown
          className={`text-xs text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className={`sidebar-submenu pl-12 ${open ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
