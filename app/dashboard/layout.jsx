import { FiWifi, FiUser, FiCreditCard, FiSettings } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import GlassPanel from "../_components/ui/glassPanel";
import CyberBanner from "../_components/ui/cyberBanner";
import ThemeToggle from "../_components/themeToggle";
import NotificationBell from "../_components/ui/notificationBell";
import UserAvatar from "../_components/ui/userAvatar";
import WhatsappChatButton from "../_components/whatsappChatButton";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Cyberpunk Sidebar */}
      <GlassPanel className="fixed left-0 top-0 h-full w-64 border-r border-cyan-400/20">
        <CyberBanner title="SKYNET" />

        <nav className="mt-12 space-y-4 px-4">
          <NavItem icon={<FiWifi className="text-cyan-400" />} active>
            Dashboard
          </NavItem>
          <NavItem icon={<FiCreditCard className="text-purple-400" />}>
            Payments
          </NavItem>
          <NavItem icon={<FiUser className="text-pink-400" />}>Profile</NavItem>
          <NavItem icon={<FiSettings className="text-yellow-400" />}>
            Settings
          </NavItem>
        </nav>
      </GlassPanel>

      {/* Main Content */}
      <div className="ml-64">
        <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 p-4 flex justify-between items-center">
          <h1 className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            MEMBER PORTAL
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <NotificationBell />
            <UserAvatar />
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>

      {/* WhatsApp Float Button */}
      <WhatsappChatButton />
    </div>
  );
}

function NavItem({ icon, children, active = false }) {
  return (
    <button
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
        active ? "bg-cyan-900/30 text-cyan-400" : "hover:bg-gray-800/50"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{children}</span>
    </button>
  );
}
