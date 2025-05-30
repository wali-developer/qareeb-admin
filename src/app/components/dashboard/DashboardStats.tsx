import React from "react";
import { FilterSelect, Typography } from "../common";
import { LuUsers } from "react-icons/lu";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IStat } from "@/app/base/types";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoGraph } from "react-icons/go";

export const DashboardStats = () => {
  return (
    <section className="bg-white rounded-xl p-5 mt-6">
      <div className="flex justify-between items-center">
        <Typography variant="h4" className="!font-medium">
          Overview
        </Typography>
        <FilterSelect options={[{ label: "This week", value: "This week" }]} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4 mt-3">
        <StatCard
          title={"Total User"}
          value={"43,689"}
          icon={<LuUsers />}
          percentage={8.5}
          color="#8280FF"
          bgColor="#8280FF1A"
        />
        <StatCard
          title={"Total Company"}
          value={"436"}
          icon={<FaCarAlt />}
          percentage={8.5}
          color="#FFBD12"
          bgColor="#FFBD121A"
        />
        <StatCard
          title={"Total bookings"}
          value={"4689"}
          icon={<MdOutlineCalendarMonth />}
          percentage={8.5}
          color="#00B69B"
          bgColor="#00B69B1A"
        />
        <StatCard
          title={"Total Revenue"}
          value={"43,689"}
          icon={<GoGraph />}
          percentage={8.5}
          color="#FF0404"
          bgColor="#75524E1A"
        />
      </div>
    </section>
  );
};

const StatCard = ({
  title,
  value,
  icon,
  percentage,
  color,
  bgColor,
}: IStat) => (
  <div className={`p-4 rounded-xl`} style={{ backgroundColor: bgColor }}>
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <Typography variant="medium" className="text-secondary/70">
          {title}
        </Typography>
        <Typography variant="h2" className="font-semibold">
          {value}
        </Typography>
      </div>
      <div className="w-12 h-12 rounded-xl bg-white inline-flex justify-center items-center">
        <span className="text-lg" style={{ color }}>
          {icon}
        </span>
      </div>
    </div>
    <div className="flex gap-1 items-center mt-6">
      <HiArrowTrendingUp className="text-green-500 text-xl" />
      <Typography variant="medium" className="text-secondary/70">
        <span className="text-green-500">{percentage}%</span> Up from yesterday
      </Typography>
    </div>
  </div>
);
