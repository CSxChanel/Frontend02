import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarSubItem({ href, text }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 rounded-lg group transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700
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
