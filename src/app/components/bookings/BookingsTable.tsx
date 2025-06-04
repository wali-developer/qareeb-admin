"use client";

import React, { useState } from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";
import Image from "next/image";
import { Pagination } from "../common/Pagination";
import { BookingDetails } from "./BookingDetails";

const bookings = [
  {
    bookingId: "23412",
    username: "Olivia Rhye",
    volunteerName: "Zeeshan Ahmed",
    date: "25/4/2024",
    time: "10:00 AM",
    status: "Completed",
    image: "/dashboard/avatar.png",
    action: "",
  },
  {
    bookingId: "23413",
    username: "Olivia Rhye",
    volunteerName: "Zeeshan Ahmed",
    date: "25/4/2024",
    time: "10:00 AM",
    status: "Pending",
    image: "/dashboard/avatar.png",
    action: "",
  },
  {
    bookingId: "23414",
    username: "Olivia Rhye",
    volunteerName: "Zeeshan Ahmed",
    date: "25/4/2024",
    time: "10:00 AM",
    status: "Cancelled",
    image: "/dashboard/avatar.png",
    action: "",
  },
];

const colors: Record<string, { color: string; bg: string }> = {
  Pending: { color: "#007AFF", bg: "#ECFDF3" },
  Completed: { color: "#027A48", bg: "#007AFF1A" },
  Cancelled: { color: "#FF3B30", bg: "#FF3B301A" },
};

export const BookingsTable = () => {
  const [show, setShow] = useState(false);
  const bookingsColumns: TableColumn<(typeof bookings)[0]>[] = [
    { key: "bookingId", header: "Booking ID" },
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
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-secondary">{v.username}</span>
        </div>
      ),
    },
    {
      key: "volunteerName",
      header: "Volunteer Name",
      render: (v) => (
        <div className="flex items-center gap-2">
          <Image
            src={v.image}
            alt={v.volunteerName}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-secondary">{v.volunteerName}</span>
        </div>
      ),
    },

    {
      key: "status",
      header: "Status",
      render: (booking) => (
        <span
          className={`inline-flex gap-2 items-center text-xs px-2 font-medium py-1 rounded-full `}
          style={{
            color: colors[booking.status].color,
            backgroundColor: colors[booking.status].bg,
          }}
        >
          <span
            className="w-[6px] h-[6px] shrink-0 rounded-full"
            style={{ backgroundColor: colors[booking.status].color }}
          />
          {booking.status}
        </span>
      ),
    },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
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
            All Bookings
          </Typography>
          <Typography
            variant="small-medium"
            className="text-primary bg-primary/5 px-2 py-0.5 rounded-md"
          >
            734 Bookings
          </Typography>
        </div>

        <Table
          columns={bookingsColumns}
          data={[...bookings, ...bookings]}
          rowKey={(_, i) => i}
        />

        <Pagination />
      </div>
      <BookingDetails isOpen={show} setIsOpen={setShow} />
    </>
  );
};
