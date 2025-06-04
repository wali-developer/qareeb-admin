"use client";

import { SearchInput } from "../common";
import { DateRangePicker } from "../common/DateRangePicker";

export const BookingSearchRow = () => {
  return (
    <div className="flex justify-between items-center">
      <SearchInput className="max-w-[370px] " />
      <DateRangePicker />
    </div>
  );
};
