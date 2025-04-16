import NeonCard from "./_components/ui/neonCard";
import UserProfileCard from "./_components/userProfileCard";
import PaymentStatus from "./_components/paymentStatus";

export default function DashboardPage() {
  const userData = {
    name: "John Doe",
    phone: "+628123456789",
    address: "Jl. Contoh No. 123",
    package: "Premium 100Mbps",
    joinDate: "2023-01-15",
    paymentStatus: "paid",
    dueDate: "2023-11-30",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NeonCard>
        <UserProfileCard data={userData} />
      </NeonCard>

      <NeonCard>
        <PaymentStatus
          status={userData.paymentStatus}
          dueDate={userData.dueDate}
        />
      </NeonCard>
    </div>
  );
}
