//sidebar/Sidebar.jsx
"use client";
import { useState } from "react";
import {
  FaLifeRing,
  FaBook,
  FaTachometerAlt,
  FaUsers,
  FaBox,
  FaChartLine,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import SidebarHeader from "./SidebarHeider";
import SidebarMenuGroup from "./SidebarMenuGrup";
import SidebarItem from "./SidebarItem";
import SidebarSubItem from "./SidebarSubItem";
import UserProfile from "./UserProfile";
import { userPaths } from "@/lib/paths";

export default function Sidebar({ collapsed, mobileMenuOpen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div
      className={`
      bg-slate-200 dark:bg-gray-800 shadow-lg z-10 flex-shrink-0 border-r border-gray-400 dark:border-cyan-400
      ${collapsed ? "transform -translate-x-[250px] w-[30px]" : "w-[230px]"}
      ${mobileMenuOpen ? "" : "hidden md:block"}
      transition-all duration-300
    `}
    >
      <div className="flex flex-col h-full">
        <SidebarHeader />

        <div className="flex-1 overflow-y-auto py-4 px-2">
          <nav className="space-y-1">
            {/* ==== DASHBOARD ==== */}
            <SidebarItem
              href="/dashboard"
              icon={<FaTachometerAlt />}
              text="Dashboard"
            />

            {/* ==== USERS ==== */}
            <SidebarMenuGroup
              title="Users"
              icon={<FaUsers />}
              open={openSubmenu === "users"}
              onToggle={() => toggleSubmenu("users")}
              activePaths={[
                userPaths.all,
                userPaths.new,
                userPaths.edit,
                userPaths.delete,
                userPaths.roles,
              ]}
            >
              <SidebarSubItem href={userPaths.all} text="All Users" />
              <SidebarSubItem href={userPaths.new} text="New User" />
              <SidebarSubItem href={userPaths.edit} text="Edit User" />
              <SidebarSubItem href={userPaths.delete} text="Delete User" />
              <SidebarSubItem href={userPaths.roles} text="Roles User" />
            </SidebarMenuGroup>

            {/* ==== PPPoE ==== */}
            <SidebarMenuGroup
              title="PPPoE"
              icon={<FaBook />}
              open={openSubmenu === "pppoe"}
              onToggle={() => toggleSubmenu("pppoe")}
            >
              <SidebarSubItem href="#" text="All PPPoE" />
              <SidebarSubItem href="#" text="New PPPoE" />
              <SidebarSubItem href="#" text="Edit PPPoE" />
              <SidebarSubItem href="#" text="Delete PPPoE" />
            </SidebarMenuGroup>

            {/* ==== PAYMENTS ==== */}
            <SidebarMenuGroup
              title="Payments"
              icon={<FaBox />}
              open={openSubmenu === "payments"}
              onToggle={() => toggleSubmenu("payments")}
            >
              <SidebarSubItem href="#" text="All Payments" />
              <SidebarSubItem href="#" text="New Payment" />
              <SidebarSubItem href="#" text="Edit Payment" />
              <SidebarSubItem href="#" text="Delete Payment" />
            </SidebarMenuGroup>

            {/* ==== ANALYTICS ==== */}
            <SidebarItem href="#" icon={<FaChartLine />} text="Analytics" />

            {/* ==== ORDERS ==== */}
            <SidebarItem
              href="#"
              icon={<FaShoppingCart />}
              text="Orders"
              badge="15"
            />

            {/* ==== SETINGS ==== */}
            <SidebarMenuGroup
              title="Settings"
              icon={<FaCog />}
              open={openSubmenu === "settings"}
              onToggle={() => toggleSubmenu("settings")}
            >
              <SidebarSubItem href="#" text="Profile" />
              <SidebarSubItem href="#" text="Account" />
              <SidebarSubItem href="#" text="Billing" />
              <SidebarSubItem href="#" text="Notifications" />
            </SidebarMenuGroup>
          </nav>

          <div className="border-t border-gray-400 dark:border-gray-700 my-4"></div>

          <nav className="space-y-1">
            <SidebarItem href="#" icon={<FaLifeRing />} text="Support" />

            <SidebarItem href="#" icon={<FaBook />} text="Documentation" />
          </nav>
        </div>
        {/* ==== USER PROFILE ==== */}
        <UserProfile />
      </div>
    </div>
  );
}
