"use client";

import React, { useState } from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";
import { BiPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AddBookingRule } from "./AddBookingRule";

const pricing = [
  {
    label: "Riyadh",
    description: "Riyadh Province",
    type: "11564",
    action: "",
  },
  {
    label: "Riyadh",
    description: "Riyadh Province",
    type: "11564",
    action: "",
  },
  {
    label: "Riyadh",
    description: "Riyadh Province",
    type: "11564",
    action: "",
  },
];
export const BookingRules = () => {
  const [show, setShow] = useState(false);
  const pricingColumns: TableColumn<(typeof pricing)[0]>[] = [
    {
      key: "label",
      header: "Label",
    },
    {
      key: "description",
      header: "Description",
    },

    { key: "type", header: "Type" },
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
            Booking Rules
          </Typography>
          <button
            className="h-10 rounded-xl border-2 border-gray-200 cursor-pointer px-5 text-secondary inline-flex gap-2 items-center"
            onClick={() => setShow(true)}
          >
            <BiPlus className="text-xl" />
            <Typography variant="medium-medium">
              Add new booking rule
            </Typography>
          </button>
        </div>

        <Table
          columns={pricingColumns}
          data={[...pricing]}
          rowKey={(_, i) => i}
        />
      </div>
      <AddBookingRule isOpen={show} setIsOpen={setShow} />
    </>
  );
};
