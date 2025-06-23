"use client";

import React, { useState } from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";
import Image from "next/image";
import { statusColors } from "@/app/base/helpers";
import { BiPlus } from "react-icons/bi";
import { AddAdminUser } from "./AddAdminUser";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const users = [
  {
    adminName: "Olivia Rhye",
    image: "/dashboard/avatar.png",
    email: "olivia@gmail.com",
    role: "Super Admin",
    permissions: "All permissions",
    status: "Active",
    action: "",
  },
  {
    adminName: "Olivia Rhye",
    image: "/dashboard/avatar.png",
    email: "olivia@gmail.com",
    role: "Pricing Admin",
    permissions: "All permissions",
    status: "Inactive",
    action: "",
  },
  {
    adminName: "Olivia Rhye",
    image: "/dashboard/avatar.png",
    email: "olivia@gmail.com",
    role: "Service Area Admin",
    permissions: "All permissions",
    status: "Active",
    action: "",
  },
  {
    adminName: "Olivia Rhye",
    image: "/dashboard/avatar.png",
    email: "olivia@gmail.com",
    role: "Bookings admin",
    permissions: "All permissions",
    status: "Inactive",
    action: "",
  },
];
export const AdminSettings = () => {
  const [show, setShow] = useState(false);
  const usersColumns: TableColumn<(typeof users)[0]>[] = [
    {
      key: "adminName",
      header: "Admin Name",
      render: (v) => (
        <div className="flex items-center gap-2">
          <Image
            src={v.image}
            alt={v.adminName}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover hidden md:block"
          />
          <span className="font-medium text-secondary">{v.adminName}</span>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email address",
    },

    { key: "role", header: "Role" },
    { key: "permissions", header: "Permissions" },
    {
      key: "status",
      header: "Status",
      render: (booking) => (
        <span
          className={`inline-flex gap-2 items-center text-xs px-2 font-medium py-1 rounded-full `}
          style={{
            color: statusColors[booking.status].color,
            backgroundColor: statusColors[booking.status].bg,
          }}
        >
          <span
            className="w-[6px] h-[6px] shrink-0 rounded-full"
            style={{ backgroundColor: statusColors[booking.status].color }}
          />
          {booking.status}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      render: () => (
        <div className="inline-flex gap-3 items-center">
          <button className="" onClick={() => setShow(true)}>
            <FiEdit className="text-lg text-secondary/60" />
          </button>
          <button className="" onClick={() => setShow(true)}>
            <RiDeleteBinLine className="text-lg text-red-500" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="mt-5 border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
        <div className="flex gap-3 items-center justify-between mb-4">
          <Typography variant="h5Light" className="!font-medium">
            Total Admins
          </Typography>
          <button
            className="h-10 rounded-xl border-2 border-gray-200 cursor-pointer px-5 text-secondary inline-flex gap-2 items-center"
            onClick={() => setShow(true)}
          >
            <BiPlus className="text-xl" />
            <Typography variant="medium-medium">Add admin</Typography>
          </button>
        </div>

        <Table columns={usersColumns} data={[...users]} rowKey={(_, i) => i} />

        {/* <Pagination /> */}
      </div>
      <AddAdminUser isOpen={show} setIsOpen={setShow} />
    </>
  );
};
