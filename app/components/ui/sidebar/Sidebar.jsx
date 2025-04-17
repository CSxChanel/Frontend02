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
import UserProfile from "./UserProfile";

export default function Sidebar({ collapsed, mobileMenuOpen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div
      className={`
      bg-white dark:bg-gray-800 shadow-lg z-10 flex-shrink-0 border-r border-gray-200 dark:border-gray-700
      ${collapsed ? "transform -translate-x-[250px] w-[30px]" : "w-[280px]"}
      ${mobileMenuOpen ? "" : "hidden md:block"}
      transition-all duration-300
    `}
    >
      <div className="flex flex-col h-full">
        <SidebarHeader />

        <div className="flex-1 overflow-y-auto py-4 px-2">
          <nav className="space-y-1">
            <SidebarItem
              href="#"
              active
              icon={<FaTachometerAlt />}
              text="Dashboard"
            />

            <SidebarMenuGroup
              title="Users"
              icon={<FaUsers />}
              open={openSubmenu === "users"}
              onToggle={() => toggleSubmenu("users")}
            >
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                All Users
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Add New
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Roles
              </a>
            </SidebarMenuGroup>

            <SidebarMenuGroup
              title="Products"
              icon={<FaBox />}
              open={openSubmenu === "products"}
              onToggle={() => toggleSubmenu("products")}
            >
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Inventory
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Categories
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Discounts
              </a>
            </SidebarMenuGroup>

            <SidebarItem href="#" icon={<FaChartLine />} text="Analytics" />

            <SidebarItem
              href="#"
              icon={<FaShoppingCart />}
              text="Orders"
              badge="15"
            />

            <SidebarMenuGroup
              title="Settings"
              icon={<FaCog />}
              open={openSubmenu === "settings"}
              onToggle={() => toggleSubmenu("settings")}
            >
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                General
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Security
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Notifications
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                Integrations
              </a>
            </SidebarMenuGroup>
          </nav>

          <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

          <nav className="space-y-1">
            <SidebarItem href="#" icon={<FaLifeRing />} text="Support" />

            <SidebarItem href="#" icon={<FaBook />} text="Documentation" />
          </nav>
        </div>

        <UserProfile />
      </div>
    </div>
  );
}
