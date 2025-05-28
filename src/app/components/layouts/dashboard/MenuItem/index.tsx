"use client";

import { IMenuItem } from "@/app/base/types";
import { Typography } from "@/app/components/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const MenuItem = ({ item }: { item: IMenuItem }): React.ReactElement => {
  const pathname = usePathname();
  const active: boolean = pathname.includes(item.path);

  return (
    <li className="mb-3.5">
      <Link href={item.path}>
        <div
          className={`w-full h-12 flex items-center rounded-lg hover:bg-primary/50 transition-all duration-500 ${
            active ? "bg-primary-gradient" : "bg-white"
          }`}
        >
          <div
            className={`h-full pl-4 text-[22px] flex gap-x-3 items-center flex-1 ${
              active ? "text-white" : "text-secondary/70"
            }`}
          >
            {item.icon}
            <Typography
              variant="medium-medium"
              className={`${active ? "text-white" : "text-secondary/70"}`}
            >
              {item.title}
            </Typography>
          </div>
        </div>
      </Link>
    </li>
  );
};
