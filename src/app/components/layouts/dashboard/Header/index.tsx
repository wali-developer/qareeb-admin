"use client";

import React from "react";
import { ProfileDropdown } from "../ProfileDropdown";
import { IoNotificationsOutline } from "react-icons/io5";

export const Header = ({
  onShow,
}: {
  onShow: () => void;
}): React.ReactElement => {
  return (
    <header className="w-full px-5 py-3 sm:py-5 flex flex-wrap lg:flex-nowrap lg:py-8 gap-y-4 justify-between items-center">
      <div className="relative rounded-md">
        <input
          type="text"
          placeholder="Search here"
          className="w-md h-11 rounded-md border-2 border-gray-300 focus:outline-secondary bg-white text-sm px-5"
        />
      </div>
      <div className="flex gap-x-4 xl:gap-x-8 items-center ml-auto">
        <div className="hidden sm:block relative">
          <span className="text-2xl text-body/60">
            <IoNotificationsOutline />
          </span>
          <span className="absolute -top-0.5 -right-1 w-[15px] h-[15px] bg-primary rounded-full inline-flex justify-center items-center text-white text-[10px]">
            3
          </span>
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
