"use client";

import React, { useState } from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";
import Image from "next/image";
import { Pagination } from "../common/Pagination";
import { UserDetails } from "./UserDetails";
import { statusColors } from "@/app/base/helpers";

const users = [
  {
    username: "Olivia Rhye",
    email: "olivia@gmail.com ",
    phone: "+966 2 6727572 ",
    bookings: "06",
    status: "Active",
    createdAt: "03/ 1 / 2025",
    image: "/dashboard/avatar.png",
    action: "",
  },
  {
    username: "Olivia Rhye",
    email: "olivia@gmail.com ",
    phone: "+966 2 6727572 ",
    bookings: "06",
    status: "Inactive",
    createdAt: "03/ 1 / 2025",
    image: "/dashboard/avatar.png",
    action: "",
  },
  {
    username: "Olivia Rhye",
    email: "olivia@gmail.com ",
    phone: "+966 2 6727572 ",
    bookings: "06",
    status: "Active",
    createdAt: "03/ 1 / 2025",
    image: "/dashboard/avatar.png",
    action: "",
  },
];

export const UsersList = () => {
  const [show, setShow] = useState(false);
  const usersColumns: TableColumn<(typeof users)[0]>[] = [
    {
      key: "username",
      header: "Username",
      render: (v) => (
        <div className="flex items-center gap-2">
          <Image
            src={v.image}
            alt={v.username}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover hidden md:block"
          />
          <span className="font-medium text-secondary">{v.username}</span>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email address",
    },

    { key: "phone", header: "Phone number" },
    { key: "bookings", header: "No of bookings" },
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
        <button
          className="bg-primary-gradient cursor-pointer text-white text-xs px-6 py-2 rounded-md"
          onClick={() => setShow(true)}
        >
          View details
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="mt-5 border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
        <div className="flex gap-3 items-center mb-4">
          <Typography variant="h5Light" className="!font-medium">
            Total users
          </Typography>
          <Typography
            variant="small-medium"
            className="text-primary bg-primary/5 px-2 py-0.5 rounded-md"
          >
            100 users
          </Typography>
        </div>

        <Table
          columns={usersColumns}
          data={[...users, ...users]}
          rowKey={(_, i) => i}
        />

        <Pagination />
      </div>
      <UserDetails isOpen={show} setIsOpen={setShow} />
    </>
  );
};
