"use client";

import { BookingListings } from "@/app/components/bookings";
import { Tabs, Typography } from "@/app/components/common";
import { NextPage } from "next";
import { useState } from "react";

const tabs = [
  "All Bookings",
  "Active Bookings",
  "Completed Bookings",
  "Cancelled Bookings",
  "Custom Bookings",
];

const BookingPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section className="space-y-6">
      <Typography variant="h2" className="!font-medium">
        Bookings
      </Typography>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <BookingListings />
    </section>
  );
};

export default BookingPage;
