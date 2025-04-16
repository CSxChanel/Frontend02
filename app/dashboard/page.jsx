import { FiActivity, FiClock, FiCreditCard, FiZap } from "react-icons/fi";
import DataGlowCard from "../_components/ui/dataGlowCard";
import SpeedMeter from "../_components/ui/speedMeter";
import PaymentCountdown from "../_components/ui/paymentCountdown";
import UsageChart from "../_components/ui/usageChart";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Network Speed Card */}
      <DataGlowCard className="lg:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <FiZap className="text-yellow-400 text-2xl" />
          <h3 className="font-mono text-lg">NETWORK SPEED</h3>
        </div>
        <SpeedMeter speed={85} />
      </DataGlowCard>

      {/* Payment Status */}
      <DataGlowCard>
        <div className="flex items-center gap-3 mb-4">
          <FiCreditCard className="text-purple-400 text-2xl" />
          <h3 className="font-mono text-lg">PAYMENT</h3>
        </div>
        <PaymentCountdown days={5} />
      </DataGlowCard>

      {/* Usage Statistics */}
      <DataGlowCard className="lg:col-span-3">
        <div className="flex items-center gap-3 mb-4">
          <FiActivity className="text-cyan-400 text-2xl" />
          <h3 className="font-mono text-lg">USAGE ANALYTICS</h3>
        </div>
        <UsageChart />
      </DataGlowCard>
    </div>
  );
}
