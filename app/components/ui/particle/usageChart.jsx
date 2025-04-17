"use client";
import { FiActivity, FiWifi } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", usage: 65 },
  { name: "Tue", usage: 72 },
  { name: "Wed", usage: 88 },
  { name: "Thu", usage: 55 },
  { name: "Fri", usage: 90 },
  { name: "Sat", usage: 78 },
  { name: "Sun", usage: 82 },
];

export default function UsageChart() {
  return (
    <div className="h-64">
      <div className="flex items-center gap-2 mb-4 text-cyan-400">
        <FiWifi className="text-xl" />
        <h4 className="font-mono">WEEKLY USAGE</h4>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#a0aec0" }} />
          <YAxis
            axisLine={false}
            tick={{ fill: "#a0aec0" }}
            domain={[0, 100]}
          />
          <Bar
            dataKey="usage"
            radius={[4, 4, 0, 0]}
            className="fill-cyan-500"
            animationDuration={2000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
