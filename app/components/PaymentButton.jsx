"use client";
import { useState } from "react";
import { FiCreditCard, FiLoader } from "react-icons/fi";

export default function PaymentButton({ amount }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });
      const { token } = await response.json();
      window.snap.pay(token, {
        onSuccess: () => alert("Payment successful!"),
        onClose: () => setIsLoading(false),
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      {isLoading ? <FiLoader className="animate-spin" /> : <FiCreditCard />}
      <span>Pay Rp{amount.toLocaleString()}</span>
    </button>
  );
}
