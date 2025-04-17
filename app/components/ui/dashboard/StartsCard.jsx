export default function StatsCard({
  title,
  value,
  change,
  icon,
  gradientFrom,
  gradientTo,
}) {
  return (
    <div
      className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl shadow-lg p-6 text-white card-hover transition-all duration-300`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <p className="text-xs mt-2 opacity-90">{change}</p>
        </div>
        <span className="text-2xl opacity-70">{icon}</span>
      </div>
    </div>
  );
}
