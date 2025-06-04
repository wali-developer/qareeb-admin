"use client";

import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendar } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

type CustomInputProps = {
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClear?: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick, onClear }, ref) => (
    <div className="relative w-full">
      <FaRegCalendar className="text-base absolute left-4 top-1/2 -translate-y-1/2" />
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        className="min-w-[243px] w-full pl-10 h-11 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-secondary text-sm"
      >
        {value || "Select date range"}
      </button>

      {/* Clear button inside input */}
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute top-1/2 right-3 cursor-pointer -translate-y-1/2"
        >
          <RxCrossCircled className="text-base text-red-500" />
        </button>
      )}
    </div>
  )
);
CustomInput.displayName = "CustomInput";

export const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleClear = () => {
    setDateRange([null, null]);
  };

  return (
    <div>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) =>
          setDateRange(update as [Date | null, Date | null])
        }
        customInput={<CustomInput onClear={handleClear} />}
        //   isClearable
        className="hidden"
      />
    </div>
  );
};
