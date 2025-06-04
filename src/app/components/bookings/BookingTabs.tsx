"use client";

import { useState } from "react";

const tabs = [
  "All Bookings",
  "Active Bookings",
  "Completed Bookings",
  "Cancelled Bookings",
  "Custom Bookings",
];

export const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex gap-3 py-4 overflow-x-auto border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 cursor-pointer rounded-full text-sm transition 
            ${
              activeTab === tab
                ? "text-white bg-primary-gradient"
                : "bg-transparent text-secondary/70"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
