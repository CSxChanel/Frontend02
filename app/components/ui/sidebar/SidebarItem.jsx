export default function SidebarItem({
  href,
  icon,
  text,
  active = false,
  badge,
}) {
  return (
    <a
      href={href}
      className={`
        flex items-center px-4 py-3 rounded-lg group transition-all duration-200
        ${
          active
            ? "bg-gray-100 dark:bg-gray-700 border-l-4 border-primary-500"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }
      `}
    >
      <span
        className={`
        mr-3 text-lg text-gray-500 dark:text-gray-400 
        ${active ? "text-primary-600" : "group-hover:text-primary-600"}
        transition-transform duration-200
      `}
      >
        {icon}
      </span>
      <span className="whitespace-nowrap">{text}</span>
      {badge && (
        <span className="ml-auto bg-primary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </a>
  );
}
