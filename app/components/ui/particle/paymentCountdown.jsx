"use client";
import { FiClock, FiCreditCard } from "react-icons/fi";
import { motion } from "framer-motion";

export default function PaymentCountdown({ days = 5 }) {
  const paymentStatus = days > 0 ? "pending" : "overdue";
  const colors = {
    pending: "text-cyan-400",
    overdue: "text-red-400",
  };

  return (
    <div className="flex flex-col items-center">
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#2d3748"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={paymentStatus === "pending" ? "#22d3ee" : "#f87171"}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * Math.min(days, 30)) / 30}
            transform="rotate(-90 50 50)"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <FiClock className={`text-3xl ${colors[paymentStatus]}`} />
          <span className="text-2xl font-bold mt-1">{days}</span>
          <span className="text-xs">DAYS LEFT</span>
        </div>
      </div>

      {/* Payment Info */}
      <div className="text-center">
        <p className="flex items-center justify-center gap-2">
          <FiCreditCard className={colors[paymentStatus]} />
          <span className={colors[paymentStatus]}>
            {paymentStatus === "pending" ? "Payment Due" : "Payment Overdue"}
          </span>
        </p>
        <button className="mt-2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-bold hover:opacity-90 transition-opacity">
          Pay Now
        </button>
      </div>
    </div>
  );
}
