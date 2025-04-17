"use client";

import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="inset-y-0 right-0 pr-3 text-gray-200 w-8 h-8" />
      </div>

      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        aria-label="Search"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
        placeholder="Search..."
      />
    </div>
  );
}
