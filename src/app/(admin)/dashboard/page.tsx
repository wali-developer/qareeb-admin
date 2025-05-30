import { Typography } from "@/app/components/common";
import {
  DashboardStats,
  PopularBusinessDash,
  TotalRevenueChart,
  VendorsDashboard,
} from "@/app/components/dashboard";
import React from "react";

const DashboardPage = () => {
  return (
    <section className="space-y-6">
      <Typography variant="h2" className="!font-medium">
        Dashboard
      </Typography>
      <DashboardStats />
      <TotalRevenueChart />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <VendorsDashboard />
        <PopularBusinessDash />
      </section>
    </section>
  );
};

export default DashboardPage;
