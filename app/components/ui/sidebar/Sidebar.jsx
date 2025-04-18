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
import UserProfile from "./UserProfile";
import SidebarSubItem from "./SidebarSubItem";

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
            <SidebarItem
              href="/dashboard/"
              icon={<FaTachometerAlt />}
              text="Dashboard"
            />

            <SidebarMenuGroup
              title="Users"
              icon={<FaUsers />}
              open={openSubmenu === "users"}
              onToggle={() => toggleSubmenu("users")}
            >
              <SidebarSubItem
                href="dashboard/data-users/all-user"
                text="All Users"
              />
              <SidebarSubItem
                href="dashboard/data-users/new-user"
                text="New User"
              />
              <SidebarSubItem
                href="dashboard/data-users/edit-user"
                text="Edit User"
              />
              <SidebarSubItem
                href="dashboard/data-users/delete-user"
                text="Delete User"
              />
            </SidebarMenuGroup>

            <SidebarMenuGroup
              title="Products"
              icon={<FaBox />}
              open={openSubmenu === "products"}
              onToggle={() => toggleSubmenu("products")}
            >
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300"
              >
                Inventory
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300"
              >
                Categories
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300"
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
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300"
              >
                General
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300"
              >
                Security
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300"
              >
                Notifications
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:hover:text-cyan-400 dark:text-gray-300"
              >
                Integrations
              </a>
            </SidebarMenuGroup>
          </nav>

          <div className="border-t border-gray-400 dark:border-gray-700 my-4"></div>

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
