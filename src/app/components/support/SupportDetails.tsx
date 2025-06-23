"use client";

import React from "react";
import { Button, Modal, Typography } from "../common";
import Image from "next/image";

interface IUserDetails {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SupportDetails = ({
  isOpen,
  setIsOpen,
}: IUserDetails): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full md:w-[650px] p-6">
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
          <Typography variant="medium-medium">Message</Typography>
          <div className="border-2 mt-1 border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary/60 h-[150px] overflow-y-auto">
            I tried booking a volunteer for tomorrow, but the calendar doesn’t
            let me select future dates properly. It either freezes or resets.
            Please check the booking feature—it’s frustrating.
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
          <Button title="Send email" className="w-[200px]" />
        </div>
      </div>
    </Modal>
  );
};
