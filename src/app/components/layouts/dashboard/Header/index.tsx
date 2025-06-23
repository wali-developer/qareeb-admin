"use client";

import React from "react";
import { ProfileDropdown } from "../ProfileDropdown";
import { IoNotificationsOutline } from "react-icons/io5";
import { SearchInput } from "@/app/components/common";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

export const Header = ({
  setShow,
  show,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}): React.ReactElement => {
  return (
    <header className="w-full px-5 py-3 sm:py-5 flex flex-wrap lg:flex-nowrap lg:py-8 gap-y-4 justify-between items-center sticky z-50 top-0 bg-gray-100">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setShow((prev) => !prev)}
          className="block lg:hidden"
        >
          {show ? (
            <RxCross2 className="text-2xl text-primary" />
          ) : (
            <HiMiniBars3 className="text-2xl text-primary" />
          )}
        </button>
        <SearchInput />
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
