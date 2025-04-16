// _components/paymentStatus
"use client";

export default function PaymentStatus({ status, dueDate }) {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Payment Status</h2>
      <p className="text-gray-600">Status: {status}</p>
      <p className="text-gray-600">Due Date: {dueDate}</p>
    </div>
  );
}
