import ThemeToggle from "./_components/themeToggle";
import WhatsappChatButton from "./_components/whatsappChatButton";
import AnimatedBanner from "./_components/ui/animatedBanner";
import NotificationBell from "./_components/ui/notificationBell";
import UserAvatar from "./_components/ui/userAvatar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Modern Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-900 to-blue-800 dark:from-gray-800 dark:to-gray-900 p-4 border-r-2 border-cyan-500 shadow-lg shadow-cyan-500/20">
        <div className="mb-8 p-4">
          <AnimatedBanner title="SKYNET" />
        </div>
        <nav>{/* Navigation items */}</nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center border-b-2 border-pink-500 shadow-lg shadow-pink-500/10">
          <h1 className="text-xl font-bold">Member Dashboard</h1>
          <div className="flex gap-4">
            <ThemeToggle />
            <NotificationBell />
            <UserAvatar />
          </div>
        </header>
        <main className="p-6">{children}</main>
        <WhatsappChatButton />
      </div>
    </div>
  );
}
