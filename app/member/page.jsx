// member/page.jsx

import DashboardTitle from "@/components/ui/dashboard/DashboardTitle";
import StatsCard from "@/components/ui/dashboard/StartsCard";
import { FaDollarSign, FaUsers, FaShoppingCart, FaTasks } from "react-icons/fa";

export default function MemberPage() {
  return (
    <>
      <DashboardTitle />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Total Revenue"
          value="$24,780"
          change="+12.5% from last month"
          icon={<FaDollarSign className="animate-bounce-slow" />}
          gradientFrom="from-blue-500"
          gradientTo="to-blue-400"
        />
        <StatsCard
          title="New Users"
          value="1,254"
          change="+8.2% from last month"
          icon={<FaUsers className="animate-float" />}
          gradientFrom="from-purple-500"
          gradientTo="to-purple-400"
        />
        <StatsCard
          title="Total Orders"
          value="3,487"
          change="+5.7% from last month"
          icon={<FaShoppingCart className="animate-spin-slow" />}
          gradientFrom="from-green-500"
          gradientTo="to-green-400"
        />
        <StatsCard
          title="Pending Tasks"
          value="18"
          change="-3 from yesterday"
          icon={<FaTasks className="animate-pulse-slow" />}
          gradientFrom="from-pink-500"
          gradientTo="to-pink-400"
        />
      </div>
    </>
  );
}
