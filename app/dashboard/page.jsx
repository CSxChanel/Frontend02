"use client";
import { useMediaQuery } from "react-responsive";
import GlowCard from "../_components/ui/dataGlowCard";

export default function DashboardPage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      className={`grid ${isMobile ? "grid-cols-1 gap-4" : "grid-cols-3 gap-6"}`}
    >
      <GlowCard>
        <CompactUserProfile />
      </GlowCard>

      <GlowCard>
        <CompactPaymentStatus />
      </GlowCard>
    </div>
  );
}

const CompactUserProfile = () => (
  <div className="p-4">
    <h3 className="text-sm font-semibold text-cyan-400">PROFILE</h3>
    {/* Compact content */}
  </div>
);

const CompactPaymentStatus = () => (
  <div className="p-4">
    <h3 className="text-sm font-semibold text-purple-400">PAYMENT</h3>
    {/* Compact content */}
  </div>
);
