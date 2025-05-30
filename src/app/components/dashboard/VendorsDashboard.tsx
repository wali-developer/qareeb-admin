import Image from "next/image";
import React from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";

const vendors = [
  {
    name: "Olivia Rhye",
    email: "olivia@gmail.com",
    phone: "+966 2 6727572",
    image: "/dashboard/avatar.png",
  },
  {
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    phone: "+966 2 6727572",
    image: "/dashboard/avatar.png",
  },
  {
    name: "Lana Steiner",
    email: "lana@gmail.com",
    phone: "+966 2 6727572",
    image: "/dashboard/avatar.png",
  },
  {
    name: "Demi Wilkinson",
    email: "demi@gmail.com",
    phone: "+966 2 6727572",
    image: "/dashboard/avatar.png",
  },
  {
    name: "Candice Wu",
    email: "candice@gmail.com",
    phone: "+966 2 6727572",
    image: "/dashboard/avatar.png",
  },
  {
    name: "Natali Craig",
    email: "natali@gmail.com",
    phone: "+966 2 6727572",
    image: "/dashboard/avatar.png",
  },
  {
    name: "Drew Cano",
    email: "drew@gmail.com",
    phone: "+966 2 6727572",
    image: "/dashboard/avatar.png",
  },
];

export const VendorsDashboard = () => {
  const vendorColumns: TableColumn<(typeof vendors)[0]>[] = [
    {
      key: "name",
      header: "Name",
      render: (v) => (
        <div className="flex items-center gap-2">
          <Image
            src={v.image}
            alt={v.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-secondary">{v.name}</span>
        </div>
      ),
    },
    { key: "email", header: "Email address" },
    { key: "phone", header: "Phone number" },
    {
      key: "name",
      header: "New request",
      render: () => (
        <div className="flex gap-2">
          <button className="bg-primary-gradient text-white text-xs px-4 py-1 rounded-md">
            Accept
          </button>
          <button className="border border-gray-300 text-xs px-4 py-1 rounded-md">
            Decline
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="col-span-2 border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" className="!font-medium">
          Qareeb Vendor
        </Typography>
        <input
          type="text"
          placeholder="Search for volunteer"
          className="border border-gray-300 rounded-md px-3 py-2 w-80 text-[13px]"
        />
      </div>

      <Table columns={vendorColumns} data={vendors} rowKey={(_, i) => i} />
    </div>
  );
};
