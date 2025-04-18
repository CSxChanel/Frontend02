// components/ui/UserProfileCard
"use client";

import Image from "next/image";

export default function UserProfileCard({ data }) {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image src="/dummy-user.png" alt="Profile" width={64} height={64} />
        </div>
        <div>
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-gray-600">{data.phone}</p>
        </div>
      </div>
      <p className="text-gray-600">Address: {data.address}</p>
      <p className="text-gray-600">Package: {data.package}</p>
      <p className="text-gray-600">Join Date: {data.joinDate}</p>
      <p className="text-gray-600">Payment Status: {data.paymentStatus}</p>
      <p className="text-gray-600">Due Date: {data.dueDate}</p>
    </div>
  );
}
