"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FilterSelect, Typography } from "../common";
import type { TooltipProps } from "recharts";

const data = [
  { month: "Jan", revenue: 20000 },
  { month: "Feb", revenue: 30000 },
  { month: "Mar", revenue: 50000 },
  { month: "Apr", revenue: 86366.77 },
  { month: "May", revenue: 47000 },
  { month: "Jun", revenue: 53000 },
  { month: "Jul", revenue: 21000 },
  { month: "Aug", revenue: 48000 },
  { month: "Sep", revenue: 66000 },
  { month: "Oct", revenue: 61000 },
  { month: "Nov", revenue: 57000 },
  { month: "Dec", revenue: 59000 },
];

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload?.length) {
    return (
      <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold shadow">
        {payload[0].value?.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </div>
    );
  }
  return null;
};

export const TotalRevenueChart = () => {
  return (
    <section className="bg-white rounded-xl p-5  border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" className="!font-medium">
          Total Revenue
        </Typography>
        <FilterSelect options={[{ label: "This year", value: "This year" }]} />
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4880FF" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#4880FF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#4B5563" }} />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            tick={{ fontSize: 12, fill: "#4B5563" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="linear"
            dataKey="revenue"
            stroke="#4880FF"
            strokeWidth={2}
            fill="url(#revenueGradient)"
            dot={{
              r: 4,
              stroke: "#4880FF",
              strokeWidth: 2,
              fill: "#fff",
            }}
            activeDot={{
              r: 5,
              stroke: "#4880FF",
              strokeWidth: 2,
              fill: "#4880FF",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};
