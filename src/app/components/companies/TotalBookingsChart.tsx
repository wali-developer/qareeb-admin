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
      <div className="bg-[#F89732] text-white px-3 py-1 rounded text-xs font-semibold shadow">
        {payload[0].value?.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </div>
    );
  }
  return null;
};

export const TotalBookingsChart = () => {
  return (
    <section className="bg-white rounded-xl p-2  border border-gray-300 mt-6">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="small-medium">Total number of booking</Typography>
        <FilterSelect options={[{ label: "This year", value: "This year" }]} />
      </div>

      <ResponsiveContainer width="100%" height={230}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: -30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F89732" stopOpacity={1} />
              <stop offset="100%" stopColor="#F89732" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#4F4F4F" }} />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            tick={{ fontSize: 10, fill: "#4F4F4F" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#F89732"
            strokeWidth={2}
            fill="url(#revenueGradient)"
            dot={{
              r: 4,
              stroke: "#F89732",
              strokeWidth: 2,
              fill: "#fff",
            }}
            activeDot={{
              r: 5,
              stroke: "#F89732",
              strokeWidth: 2,
              fill: "#F89732",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};
