// sidebar/SidebarSubItem.jsx

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarSubItem({ href, text }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block mt-2 py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300
        ${
          isActive
            ? "bg-gray-100 dark:bg-gray-700 border-l-4 border-primary-500"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
    >
      <span className="whitespace-nowrap">{text}</span>
    </Link>
  );
}
