// sidebar/SidebarItem.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ href, icon, text, badge }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center px-4 py-3 rounded-lg group transition-all duration-200
        ${
          isActive
            ? "bg-gray-100 dark:bg-gray-700 border-l-4 border-cyan-500"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }
      `}
    >
      <span
        className={`
          mr-3 text-lg 
          ${
            isActive
              ? "text-primary-600"
              : "text-gray-500 dark:text-gray-400 group-hover:text-primary-600"
          }
        `}
      >
        <span className="text-cyan-400">{icon}</span>
      </span>
      <span className="whitespace-nowrap">{text}</span>
      {badge && (
        <span className="ml-auto bg-primary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}
