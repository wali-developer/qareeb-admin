"use client";

import { useState } from "react";

const tabs = ["All", "Approved", "Pending"];

export const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex gap-3 mb-4 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition 
            ${
              activeTab === tab
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-600 border-gray-300"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
