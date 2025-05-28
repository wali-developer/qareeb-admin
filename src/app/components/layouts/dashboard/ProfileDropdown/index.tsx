"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Typography } from "@/app/components/common";
import { FiLogOut, FiUser } from "react-icons/fi";

export const ProfileDropdown = (): React.ReactElement => {
  const links = [
    {
      name: "View profile",
      path: "#",
      icon: <FiUser />,
    },
    // { name: "Settings", path: "#", icon: <FiSettings /> },
    // { name: "Support", path: "#", icon: <FiHeadphones /> },
    // {
    //   name: "Change password",
    //   path: "#",
    //   icon: <FiLock />,
    // },
  ];

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="flex gap-1 sm:gap-x-3 items-center cursor-pointer">
          <div className="w-[35px] sm:w-[44px] h-[35px] sm:h-[44px] overflow-hidden rounded-full">
            {/* <MImage
                            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
                            alt="Profile"
                            w={46}
                            h={46}
                            className="w-full h-full object-cover object-top"
                        /> */}
            <span className="w-full h-full inline-flex justify-center items-center rounded-full text-lg font-medium border-2 border-secondary">
              W
            </span>
          </div>
          <div className="flex gap-x-3 items-center">
            <div className="space-y-1">
              <Typography
                variant="small-bold"
                className="hidden sm:block text-left text-secondary"
              >
                Wali Ullah
              </Typography>
              <Typography
                variant="small"
                className="hidden sm:block text-left text-gray-600"
              >
                waliullah@gmail.com
              </Typography>
            </div>
            <span className="text-body/60 text-2xl">
              <IoChevronDown />
            </span>
          </div>
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 mt-2 w-52 origin-top-right bg-white shadow-md  focus:outline-none outline-none py-4 z-50 transition-all duration-300 rounded-lg border border-gray-200">
            <div className="px-1">
              {links.map((item, index) => (
                <MenuItem key={item.name + index}>
                  <Link href={item?.path}>
                    <button
                      className={`group w-full items-center py-2.5 px-4 flex gap-x-2 hover:bg-secondary/5`}
                    >
                      <span className="text-xl text-gray-500">{item.icon}</span>
                      <Typography className="!text-[15px] text-gray-500">
                        {item.name}
                      </Typography>
                    </button>
                  </Link>
                </MenuItem>
              ))}

              <MenuItem>
                <button
                  className={`group w-full items-center py-2.5 px-4 flex gap-x-2 hover:bg-secondary/5`}
                >
                  <span className="text-xl text-red-500">
                    <FiLogOut />
                  </span>
                  <Typography className="!text-[15px] text-red-500">
                    Logout
                  </Typography>
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};
