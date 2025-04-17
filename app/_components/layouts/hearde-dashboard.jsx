// src/components/layout/heared-dashborad

import ThemeToggle from "../themeToggle";
import NotificationBell from "../ui/notificationBell";
import SearchInput from "../ui/searchInput";
import HamburgerMenu from "../ui/hamburgerMenu";

export default function HeaderDashboard() {
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-8 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
        <HamburgerMenu />
        <div className="flex-1 max-w-md mx-4">
          <SearchInput />
        </div>
        <div className="flex items-center space-x-4">
          <NotificationBell />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
