"use client";

import React from "react";
import { Button, Modal, Typography } from "../common";
import {
  MdOutlineMailOutline,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuCalendarDays, LuUserRound } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { SiMastercard } from "react-icons/si";
import { statusColors } from "@/app/base/helpers";

interface IBookingDetails {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookingDetails = ({
  isOpen,
  setIsOpen,
}: IBookingDetails): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full max-w-[796px] p-6">
        <Typography variant="h4">Booking Details</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <MdOutlineRadioButtonChecked className="text-xl text-gray-500" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Pickup Location
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                King Abdulaziz International Airport
              </Typography>
            </div>
          </div>
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <GrLocation className="text-xl text-gray-500" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Drop ff Location
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                Makkah Clock Tower Hotel, Makkah
              </Typography>
            </div>
          </div>
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <LuCalendarDays className="text-xl text-gray-500" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Date
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                25/4/2024
              </Typography>
            </div>
          </div>
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <IoMdTime className="text-xl text-gray-500" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Time
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                10:00 AM
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3 flex justify-between items-center">
          <Typography className="text-gray-500">Distance:</Typography>
          <Typography variant="regular-medium" className="text-secondary">
            10 km
          </Typography>
        </div>
        <div className="mb-3 flex justify-between items-center">
          <Typography className="text-gray-500">Time:</Typography>
          <Typography variant="regular-medium" className="text-secondary">
            1hr
          </Typography>
        </div>
        <div className="mb-3 flex justify-between items-center">
          <Typography className="text-gray-500">Total:</Typography>
          <Typography variant="regular-medium" className="text-primary">
            SAR 130
          </Typography>
        </div>

        {/* user detials */}
        <Typography variant="h4" className="mt-5">
          User Details
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <LuUserRound className="text-xl text-gray-500" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Name
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                Olivia Rhye
              </Typography>
            </div>
          </div>
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <MdOutlineMailOutline className="text-xl text-gray-500" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Email
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                olivia@gmail.com
              </Typography>
            </div>
          </div>
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <IoCallOutline className="text-xl text-gray-500" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Contact No
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                +966 5X XXX XXXX
              </Typography>
            </div>
          </div>
          <div className="w-full py-1.5 px-3 flex gap-2 items-center border border-gray-300 bg-gray-50 rounded-lg">
            <SiMastercard className="text-xl text-primary" />
            <div>
              <Typography variant="small" className="text-gray-500">
                Mastercard
              </Typography>
              <Typography variant="medium-medium" className="text-secondary/70">
                4532 **** **** 3012
              </Typography>
            </div>
          </div>
        </div>

        {/* Additional charges */}
        {/* user detials */}
        <Typography variant="h4" className="mt-5">
          Additional Charges
        </Typography>
        <div className="mt-5 mb-3 flex justify-between items-center">
          <Typography className="text-gray-500">Traffic Delay</Typography>
          <Typography variant="regular-medium" className="text-secondary">
            SAR 40
          </Typography>
        </div>
        <div className="mb-3 flex justify-between items-center">
          <Typography className="text-gray-500">AC vehicle</Typography>
          <Typography variant="regular-medium" className="text-secondary">
            60 SAR
          </Typography>
        </div>
        <div className="mb-3 flex justify-between items-center">
          <Typography className="text-gray-500">Total:</Typography>
          <Typography variant="regular-medium" className="text-primary">
            SAR 230
          </Typography>
        </div>
        <div className="mb-3 flex justify-between items-center">
          <Typography className="text-gray-500">Status</Typography>
          <span
            className={`inline-flex gap-2 items-center text-xs px-2 font-medium py-1 rounded-full `}
            style={{
              color: statusColors["Completed"].color,
              backgroundColor: statusColors["Completed"].bg,
            }}
          >
            <span
              className="w-[6px] h-[6px] shrink-0 rounded-full"
              style={{ backgroundColor: statusColors["Completed"].color }}
            />
            {"Completed"}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center justify-end mt-10">
          <Button
            variant={"outline"}
            title="Cancel"
            className="w-[200px]"
            onClick={() => setIsOpen(false)}
          />
          <Button title="Go to dashboard" className="w-[200px]" />
        </div>
      </div>
    </Modal>
  );
};
