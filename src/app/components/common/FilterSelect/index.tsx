"use client";

import React from "react";
import { GoChevronDown } from "react-icons/go";

interface IOption {
  label: string;
  value: string;
}

export const FilterSelect: React.FC<{
  options?: IOption[];
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
}> = ({ options, className, value, onChange }) => (
  <div
    className={`bg-white rounded-lg border-2 border-gray-200 relative flex ${className}`}
  >
    <select
      className="pl-4 pr-8 min-w-[71px] py-2 rounded-lg text-xs bg-white focus:outline-none appearance-none"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
      }}
    >
      {options?.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <GoChevronDown className="text-lg text-body-dark absolute right-3 top-1/2 -translate-y-1/2" />
  </div>
);
