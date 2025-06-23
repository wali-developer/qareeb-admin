"use client";

import React from "react";

interface ITabs {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabs: string[];
}

export const Tabs = ({
  activeTab,
  setActiveTab,
  tabs,
}: ITabs): React.ReactElement => {
  return (
    <div className="noScrollbar flex gap-3 sm:py-4 overflow-x-auto border-b border-gray-200 ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 whitespace-nowrap cursor-pointer rounded-full text-sm transition 
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
