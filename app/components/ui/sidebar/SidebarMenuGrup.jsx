// sidebar/SidebarMenuGroup.jsx
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export default function SidebarMenuGroup({
  title,
  icon,
  children,
  open,
  onToggle,
  activePaths = [],
}) {
  const pathname = usePathname();
  const isActive = activePaths?.some((path) => pathname.startsWith(path));

  return (
    <div className="sidebar-menu-group">
      <div
        onClick={onToggle}
        className={`
          flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer group transition-all duration-200
          ${
            isActive
              ? "bg-gray-100 dark:bg-gray-700 border-l-4 border-cyan-500"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }
        `}
      >
        <div className="flex items-center">
          <span
            className={`mr-3 text-lg transition-transform duration-200 ${
              isActive
                ? "text-primary-600"
                : "text-cyan-400 group-hover:text-primary-600"
            }`}
          >
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

      <div
        className={`sidebar-submenu pl-12 transition-all duration-200 ${
          open ? "open" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
