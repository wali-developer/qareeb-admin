"use client";

import React from "react";
import { Button, Modal, TextField, Typography } from "../common";

interface IAddRule {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddBookingRule = ({
  isOpen,
  setIsOpen,
}: IAddRule): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full md:w-[670px] p-6">
        <Typography variant="h5">{"Add New Booking Rule"}</Typography>

        <form className="mt-5 space-y-5">
          <TextField
            label="Label"
            placeholder="Cancellation Fee After Window"
          />
          <TextField
            label="Enter Description"
            placeholder="Enter a description..."
          />
          <TextField label="Type" placeholder="Select Type" />

          <TextField label="Value" placeholder="Enter value" />
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
