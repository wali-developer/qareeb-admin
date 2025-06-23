"use client";

import React from "react";
import { Button, Modal, Typography } from "../common";
import Image from "next/image";
import { FaFilePdf, FaStar } from "react-icons/fa";
import Link from "next/link";
import { TotalBookingsChart } from "./TotalBookingsChart";

interface IUserDetails {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CompanyDetails = ({
  isOpen,
  setIsOpen,
}: IUserDetails): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full md:w-[670px] p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src={"/dashboard/avatar.png"}
              alt={""}
              width={74}
              height={74}
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div>
              <Typography variant="h4" className="!font-medium">
                AlNukhba Transport
              </Typography>
              <Typography variant="medium" className="text-secondary/60 block">
                support@alnukhba.com
              </Typography>
            </div>
          </div>

          <Typography variant="medium-bold">
            4.7 <FaStar className="text-sm text-yellow-400 inline" />
          </Typography>
        </div>
        <Typography variant="h4" className="my-5">
          Profile information
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Typography variant="medium-medium">Company Name</Typography>
            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
              AlNukhba Transport
            </div>
          </div>
          <div>
            <Typography variant="medium-medium">Email</Typography>
            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
              support@alnukhba.com
            </div>
          </div>
          <div>
            <Typography variant="medium-medium">Phone number</Typography>
            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
              +966 2 6727572
            </div>
          </div>
          <div>
            <Typography variant="medium-medium">Staff Members</Typography>
            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
              03
            </div>
          </div>
          <div>
            <Typography variant="medium-medium">No of bookings</Typography>
            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
              07
            </div>
          </div>
          <div>
            <Typography variant="medium-medium">Service Ares</Typography>
            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
              Makkah, Taif
            </div>
          </div>
          <div>
            <Typography variant="medium-medium">Company license</Typography>

            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center gap-2 h-[42px] text-xs text-secondary/60">
              <Link
                className="inline-flex gap-2 items-center hover:underline hover:text-primary"
                href={
                  "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
                }
                target="_blank"
              >
                <FaFilePdf className="text-sm text-primary" /> License.pdf
              </Link>
            </div>
          </div>
          <div>
            <Typography variant="medium-medium">Date joined</Typography>
            <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
              03/ 1 / 2025
            </div>
          </div>
        </div>

        {/* Staff members */}
        <div className="mt-5">
          <Typography variant="medium-medium">Staff Members</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg py-2 px-3 flex gap-3 items-center"
              >
                <Image
                  src={"/dashboard/avatar.png"}
                  alt={""}
                  width={74}
                  height={74}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] inline-block w-max border border-primary px-2 py-0.5 rounded-md">
                    Nurse
                  </p>
                  <p className="text-xs font-semibold inline-block">
                    Saalih al-Khalid
                  </p>
                  <p className="text-[11px] inline-block">
                    {" "}
                    saalih.khalid@gmail.com
                  </p>
                  <p className="text-[9px] bg-gray-200 inline-block w-max rounded-md p-1 px-2">
                    {index == 1
                      ? "Driver license: 2419486290"
                      : "+966 26647231"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Company Cars */}
        <div className="mt-5">
          <Typography variant="medium-medium">Company Cars</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg py-2"
              >
                <Image
                  src={"/dashboard/car.png"}
                  alt={"Car"}
                  width={248}
                  height={147}
                  className="w-full rounded-full object-cover px-3"
                />
                <div className="border-t-2 border-secondary flex justify-between p-2 px-4">
                  <div>
                    <Typography variant="small-bold" className="block">
                      Honda civic 2022
                    </Typography>
                    <Typography variant="small" className="block">
                      Honda
                    </Typography>
                  </div>
                  <p className="text-[10px] h-max grow-0 inline-block w-max border border-primary px-2 py-0.5 rounded-md">
                    AL-109
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Bookings Chart */}
        <TotalBookingsChart />

        {/* Buttons */}
        <div className="flex gap-4 items-center justify-end mt-10">
          <Button
            variant={"outline"}
            title="Cancel"
            className="w-[200px]"
            onClick={() => setIsOpen(false)}
          />
          <Button title="Delete" className="w-[200px]" />
        </div>
      </div>
    </Modal>
  );
};
