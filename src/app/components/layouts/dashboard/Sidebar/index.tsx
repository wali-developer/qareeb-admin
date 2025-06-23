import React from "react";
import { RxCross2 } from "react-icons/rx";
import { MenuItem } from "../MenuItem";
import { routes } from "@/app/base/constants";
import {
  LuCalendarDays,
  LuLayoutDashboard,
  LuUsersRound,
} from "react-icons/lu";
import { IMenuItem } from "@/app/base/types";
import Image from "next/image";
import { PiUsersThreeBold } from "react-icons/pi";
import { HiOutlineSupport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

interface ISidebar {
  show: boolean;
  onHide: () => void;
}

export const menu: IMenuItem[] = [
  {
    title: "Dashboard",
    path: routes.dashboard,
    icon: <LuLayoutDashboard />,
  },
  {
    title: "Bookings",
    path: routes.bookings,
    icon: <LuCalendarDays />,
  },
  {
    title: "User management",
    path: routes.users,
    icon: <LuUsersRound />,
  },
  {
    title: "Company management",
    path: routes.companies,
    icon: <PiUsersThreeBold />,
  },
  {
    title: "Customer Support",
    path: routes.customerSupport,
    icon: <HiOutlineSupport />,
  },
  {
    title: "Settings",
    path: routes.settings,
    icon: <IoSettingsOutline />,
  },
];

export const Sidebar = ({ show, onHide }: ISidebar): React.ReactElement => (
  <aside
    className={`z-10 fixed top-0 left-0 bg-white overflow-y-auto h-screen w-[300px] lg:sticky transition-all duration-300 styledScroll ${
      show ? "" : "invisible opacity-0 lg:opacity-100 lg:visible "
    }`}
  >
    <div className="flex justify-between px-4">
      <Link
        href={"/"}
        className="pt-8 pb-12 px-2 flex justify-center lg:flex-1"
      >
        <Image
          src={"./dashboard/logo.svg"}
          alt="Logo"
          width={124}
          height={39}
        />
      </Link>
      <button className="text-xl text-primary block lg:hidden" onClick={onHide}>
        <RxCross2 />
      </button>
    </div>
    <ul className="mt-10 lg:mt-0 px-4">
      {menu.map((item, index) => (
        <MenuItem item={item} key={index} hideMenu={onHide} />
      ))}
    </ul>
  </aside>
);
