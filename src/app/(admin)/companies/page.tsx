"use client";

import { NextPage } from "next";
import {
  DateRangePicker,
  SearchInput,
  Tabs,
  Typography,
} from "@/app/components/common";
import { CompaniesList, IndividualList } from "@/app/components/companies";
import { useState } from "react";

const tabs = ["Company management", "Individual management"];

const BookingPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section className="space-y-6">
      <Typography variant="h2" className="!font-medium">
        Companies Management
      </Typography>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="mt-4 sm:mt-8">
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <SearchInput className="w-full sm:w-[370px] " />
          <DateRangePicker />
        </div>
        {activeTab === tabs[0] ? <CompaniesList /> : <IndividualList />}
      </section>
    </section>
  );
};

export default BookingPage;
