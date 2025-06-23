import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchInput = ({ className }: { className?: string }) => {
  return (
    <div className="relative rounded-lg w-full sm:w-auto">
      <FiSearch className="text-xl text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search here"
        className={`${className} w-full sm:w-md h-9 sm:h-11 rounded-md border-2 border-gray-300 focus:outline-secondary bg-white text-sm pl-9 sm:pl-10 pr-5`}
      />
    </div>
  );
};
