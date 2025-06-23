"use client";

import React, { useState } from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";
import { statusColors } from "@/app/base/helpers";
import { BiPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AddNewPrice } from "./AddNewPrice";

const pricing = [
  {
    serviceName: "Standard Ride",
    pricePerKm: "5",
    waitingCharges: "2",
    BaseFare: "20",
    minimumFare: "30",
    status: "Active",
    action: "",
  },
  {
    serviceName: "Standard Ride",
    pricePerKm: "5",
    waitingCharges: "2",
    BaseFare: "20",
    minimumFare: "30",
    status: "Inactive",
    action: "",
  },
  {
    serviceName: "Standard Ride",
    pricePerKm: "5",
    waitingCharges: "2",
    BaseFare: "20",
    minimumFare: "30",
    status: "Active",
    action: "",
  },
  {
    serviceName: "Standard Ride",
    pricePerKm: "5",
    waitingCharges: "2",
    BaseFare: "20",
    minimumFare: "30",
    status: "Inactive",
    action: "",
  },
];
export const PricingList = () => {
  const [show, setShow] = useState(false);
  const pricingColumns: TableColumn<(typeof pricing)[0]>[] = [
    {
      key: "serviceName",
      header: "Service  Name",
    },
    {
      key: "pricePerKm",
      header: "Price per Kilometer (SAR)",
    },

    { key: "waitingCharges", header: "Waiting Time Charges SAR/min" },
    { key: "BaseFare", header: "Base Fare (SAR)" },
    { key: "minimumFare", header: "Minimum Fare (SAR)" },
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
      <div className="border border-gray-300 rounded-xl px-6 py-4 bg-white shadow-sm">
        <div className="flex justify-between flex-wrap gap-3 items-center mb-5">
          <Typography variant="h5" className="!font-medium">
            Service Pricing
          </Typography>
          <button
            className="h-10 rounded-xl border-2 border-gray-200 cursor-pointer px-5 text-secondary inline-flex gap-2 items-center"
            onClick={() => setShow(true)}
          >
            <BiPlus className="text-xl" />
            <Typography variant="medium-medium">
              Add New Pricing Tier
            </Typography>
          </button>
        </div>

        <Table
          columns={pricingColumns}
          data={[...pricing]}
          rowKey={(_, i) => i}
        />
      </div>
      <AddNewPrice isOpen={show} setIsOpen={setShow} />
    </>
  );
};
