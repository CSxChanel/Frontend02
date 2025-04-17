"use client";
import { FaPlus } from "react-icons/fa";

export default function DashboardTitle() {
  return (
    <div className="mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Dashboard Overview
      </h1>
      <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
        <FaPlus className="mr-2" /> New Report
      </button>
    </div>
  );
}
