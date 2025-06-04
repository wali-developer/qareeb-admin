import React from "react";
import { SearchInput } from "../common";
import { DateRangePicker } from "../common/DateRangePicker";
import { BookingsTable } from "./BookingsTable";

export const BookingListings = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center">
        <SearchInput className="max-w-[370px] " />
        <DateRangePicker />
      </div>
      <BookingsTable />
    </section>
  );
};
