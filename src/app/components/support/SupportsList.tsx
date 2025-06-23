"use client";

import React, { useState } from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";
import Image from "next/image";
import { Pagination } from "../common/Pagination";
import { statusColors } from "@/app/base/helpers";
import { SupportDetails } from "./SupportDetails";

const supports = [
  {
    username: "Olivia Rhye",
    email: "olivia@gmail.com",
    message: "The app is a blessing! I booked a volunteer...",
    date: "03/ 1 / 2025",
    status: "Resolved",
    createdAt: "03/ 1 / 2025",
    image: "/dashboard/avatar.png",
    action: "",
  },
  {
    username: "Olivia Rhye",
    email: "olivia@gmail.com",
    message: "The app is a blessing! I booked a volunteer...",
    date: "03/ 1 / 2025",
    status: "Pending",
    createdAt: "03/ 1 / 2025",
    image: "/dashboard/avatar.png",
    action: "",
  },
  {
    username: "Olivia Rhye",
    email: "olivia@gmail.com",
    message: "The app is a blessing! I booked a volunteer...",
    date: "03/ 1 / 2025",
    status: "New",
    createdAt: "03/ 1 / 2025",
    image: "/dashboard/avatar.png",
    action: "",
  },
  {
    username: "Olivia Rhye",
    email: "olivia@gmail.com",
    message: "The app is a blessing! I booked a volunteer...",
    date: "03/ 1 / 2025",
    status: "Pending",
    createdAt: "03/ 1 / 2025",
    image: "/dashboard/avatar.png",
    action: "",
  },
];
export const SupportsList = () => {
  const [show, setShow] = useState(false);
  const supportsColumns: TableColumn<(typeof supports)[0]>[] = [
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

    { key: "message", header: "Message" },
    { key: "date", header: "Date" },
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
      <div className="mt-3 sm:mt-5 border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
        <div className="flex gap-3 items-center mb-4">
          <Typography variant="h5Light" className="!font-medium">
            Recent Messages
          </Typography>
          <Typography
            variant="small-medium"
            className="text-primary bg-primary/5 px-2 py-0.5 rounded-md"
          >
            22 new messages
          </Typography>
        </div>

        <Table
          columns={supportsColumns}
          data={[...supports, ...supports]}
          rowKey={(_, i) => i}
        />

        <Pagination />
      </div>
      <SupportDetails isOpen={show} setIsOpen={setShow} />
    </>
  );
};
