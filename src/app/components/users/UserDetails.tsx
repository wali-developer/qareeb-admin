"use client";

import React from "react";
import { Button, Modal, Typography } from "../common";
import Image from "next/image";

interface IUserDetails {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserDetails = ({
  isOpen,
  setIsOpen,
}: IUserDetails): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full md:w-[670px] p-6">
        <div className="flex items-center gap-2">
          <Image
            src={"/dashboard/avatar.png"}
            alt={""}
            width={74}
            height={74}
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover"
          />
          <div>
            <Typography variant="h4" className="!font-medium">
              {"Olivia Rhye"}
            </Typography>
            <Typography variant="medium" className="text-secondary/60 block">
              {"olivia@gmail.com "}
            </Typography>
          </div>
        </div>
        <Typography variant="h4" className="my-7">
          User Details
        </Typography>
        <div className="mb-5">
          <Typography variant="medium-medium">Username</Typography>
          <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
            Olivia Rhye
          </div>
        </div>
        <div className="mb-5">
          <Typography variant="medium-medium">Email</Typography>
          <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
            olivia@gmail.com
          </div>
        </div>
        <div className="mb-5">
          <Typography variant="medium-medium">Phone number</Typography>
          <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
            +966 2 6727572
          </div>
        </div>
        <div className="mb-5">
          <Typography variant="medium-medium">No of bookings</Typography>
          <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
            07
          </div>
        </div>
        <div className="mb-5">
          <Typography variant="medium-medium">Date Created</Typography>
          <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 flex items-center h-[42px] text-xs text-secondary/60">
            03/ 1 / 2025
          </div>
        </div>
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
