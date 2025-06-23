"use client";

import React from "react";
import { Button, Modal, TextField, Typography } from "../common";

interface IAddArea {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddArea = ({
  isOpen,
  setIsOpen,
}: IAddArea): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full md:w-[670px] p-6">
        <Typography variant="h5">{"Add New Pricing Tier"}</Typography>

        <form className="mt-5 space-y-5">
          <TextField label="City" placeholder="Enter city namee" />
          <TextField
            label="State / Province"
            placeholder="Enter state / province"
          />
          <TextField label="ZIP code" placeholder="Enter ZIP code" />

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
