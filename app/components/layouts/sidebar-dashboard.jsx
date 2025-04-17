// app/layouts/sidebar-dashboard.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaRocket,
  FaTachometerAlt,
  FaUsers,
  FaBox,
  FaChartLine,
  FaCog,
  FaChevronDown,
  FaQuestionCircle,
  FaSignOutAlt,
  FaEllipsisV,
} from "react-icons/fa";

export default function SidebarDashboard() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <aside className="sidebar h-screen bg-slate-200 dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-6">
            <FaRocket className="text-2xl text-primary-600 dark:text-primary-400 animate-float" />
            <span className="text-xl font-bold text-cyan-400 animate-glow dark:text-gray-200">
              cPhone-C7
            </span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto py-4 px-2">
          <nav className="space-y-1">
            <Link
              href="#"
              className="sidebar-item flex items-center py-3 px-3 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FaTachometerAlt className="sidebar-icon mr-6 text-lg text-gray-500 dark:text-gray-400" />
              <span>Dashboard</span>
            </Link>

            {/* Users */}
            <div className="sidebar-menu-group">
              <div
                onClick={() => toggleMenu("users")}
                className="sidebar-item flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer group hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <div className="flex items-center">
                  <FaUsers className="sidebar-icon mr-6 text-lg text-gray-500 dark:text-gray-400 group-hover:text-primary-600 transition-transform duration-200" />
                  <span>Users</span>
                </div>
                <FaChevronDown className="text-xs text-gray-400 transition-transform duration-200" />
              </div>
              <div
                className={`sidebar-submenu pl-12 ${
                  openMenus["users"] ? "open" : ""
                }`}
              >
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  All Users
                </Link>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  Add New
                </Link>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  Roles
                </Link>
              </div>
            </div>

            {/* Products */}
            <div className="sidebar-menu-group">
              <div
                onClick={() => toggleMenu("products")}
                className="sidebar-item flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer group hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <div className="flex items-center">
                  <FaBox className="sidebar-icon mr-6 text-lg text-gray-500 dark:text-gray-400 group-hover:text-primary-600 transition-transform duration-200" />
                  <span>Products</span>
                </div>
                <FaChevronDown className="text-xs text-gray-400 transition-transform duration-200" />
              </div>
              <div
                className={`sidebar-submenu pl-12 ${
                  openMenus["products"] ? "open" : ""
                }`}
              >
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  Inventory
                </Link>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  Categories
                </Link>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  Discounts
                </Link>
              </div>
            </div>

            {/* Analytics */}
            <Link
              href="#"
              className="sidebar-item flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <FaChartLine className="sidebar-icon mr-6 text-lg text-gray-500 dark:text-gray-400" />
              <span>Analytics</span>
            </Link>

            {/* Settings */}
            <div className="sidebar-menu-group">
              <div
                onClick={() => toggleMenu("settings")}
                className="sidebar-item flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer group hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <div className="flex items-center">
                  <FaCog className="sidebar-icon mr-6 text-lg text-gray-500 dark:text-gray-400 group-hover:text-primary-600 transition-transform duration-200" />
                  <span>Settings</span>
                </div>
                <FaChevronDown className="text-xs text-gray-400 transition-transform duration-200" />
              </div>
              <div
                className={`sidebar-submenu pl-12 ${
                  openMenus["settings"] ? "open" : ""
                }`}
              >
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  General
                </Link>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  Security
                </Link>
                <Link
                  href="#"
                  className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  Notifications
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

            {/* Help */}
            <Link
              href="#"
              className="sidebar-item flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FaQuestionCircle className="sidebar-icon mr-6 text-lg text-gray-500 dark:text-gray-400" />
              <span>Help</span>
            </Link>

            {/* Logout */}
            <button
              type="button"
              className="menu-item flex items-center px-3 py-3 rounded-lg hover:bg-indigo-700 text-cyan-400 animate-glow"
            >
              <FaSignOutAlt className="mr-6" />
              <span className="menu-text">Logout</span>
            </button>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Image
              className="w-10 h-10 rounded-full mr-4 border-2 border-primary-500 animate-float"
              src="/dummy-user.png"
              width={40}
              height={40}
              alt="User profile"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                <span id="userName">Username</span>
              </p>
              <p className="text-xs text-slate-800 dark:text-gray-400 truncate">
                <span id="userRole">Admin</span>
              </p>
            </div>
            <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
