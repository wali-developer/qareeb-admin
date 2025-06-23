"use client";

import React from "react";
import { Button, Modal, TextField, Typography } from "../common";

interface IAddService {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddNewPrice = ({
  isOpen,
  setIsOpen,
}: IAddService): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full md:w-[670px] p-6">
        <Typography variant="h5">{"Add New Pricing Tier"}</Typography>

        <form className="mt-5 space-y-5">
          <TextField label="Service Name" placeholder="Enter service name" />
          <TextField
            label="Price per Kilometer (SAR/km)"
            placeholder="Enter the price per kilometer (e.g., 5 SAR/km)"
            type="number"
          />
          <TextField
            label="Waiting Time Charges (SAR/min)"
            placeholder="Enter the waiting time charge (e.g., 1 SAR/minute)"
            type="number"
          />
          <TextField
            label="Base Fare (SAR)"
            placeholder="Enter the base fare for the service (e.g., 20 SAR)"
            type="number"
          />
          <TextField
            label="Minimum Fare (SAR)"
            placeholder="Minimum fare that will be charged (e.g., 30 SAR)"
            type="number"
          />
          <TextField label="Status" placeholder="Select  status" />
        </form>

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
