import React from "react";
import { Typography } from "../common";
import Image from "next/image";
import { Table, TableColumn } from "../common/Table";

const businesses = [
  {
    name: "Barakah Transport",
    email: "support@alnukhba.com",
    rating: 4.9,
    image: "/dashboard/avatar.png",
  },
  {
    name: "Ride with Hamza",
    email: "hamza@ride.co",
    rating: 4.7,
    image: "/dashboard/avatar.png",
  },
  {
    name: "Rafaqa SS",
    email: "rafaq@gmail.com",
    rating: 4.3,
    image: "/dashboard/avatar.png",
  },
  {
    name: "Sara’s Transport",
    email: "saratransport@ride.com",
    rating: 4.1,
    image: "/dashboard/avatar.png",
  },
  {
    name: "Meeqat Express",
    email: "meeqat@express.com",
    rating: 4.1,
    image: "/dashboard/avatar.png",
  },
];

export const PopularBusinessDash = () => {
  const businessColumns: TableColumn<(typeof businesses)[0]>[] = [
    {
      key: "name",
      header: "Name",
      render: (b) => (
        <div className="flex items-center gap-2">
          <Image
            src={b.image}
            alt={b.name}
            width={40}
            height={40}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-secondary text-sm">{b.name}</div>
            <div className="text-gray-500 text-xs mt-1">{b.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "rating",
      header: "Rating",
      render: (b) => (
        <div className="text-right font-semibold text-sm">
          {b.rating} <span className="text-yellow-500">★</span>
        </div>
      ),
    },
  ];

  return (
    <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
      <div className="mb-4">
        <Typography variant="h4" className="!font-medium">
          Popular Business
        </Typography>
      </div>

      <Table columns={businessColumns} data={businesses} rowKey={(_, i) => i} />

      <div className="pt-12">
        <button className="w-full cursor-pointer bg-primary-gradient text-white text-sm py-3 rounded-xl">
          View detail
        </button>
      </div>
    </div>
  );
};
