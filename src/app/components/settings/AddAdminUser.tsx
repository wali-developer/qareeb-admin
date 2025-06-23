"use client";

import React from "react";
import { Button, Modal, TextField, Typography } from "../common";

interface IAddAdminUser {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddAdminUser = ({
  isOpen,
  setIsOpen,
}: IAddAdminUser): React.ReactElement => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full md:w-[670px] p-6">
        <Typography variant="h5">{"Add Admin user"}</Typography>
        <Typography variant="medium" className="mt-2">
          {"Enter the details of new admin user to add to your admin panel"}
        </Typography>

        <form className="mt-5 space-y-5">
          <TextField
            label="Admin user name"
            placeholder="Enter admin user name"
          />
          <TextField label="Email" placeholder="Enter email" />
          <TextField label="Role" placeholder="Select role for the admin" />

          <TextField
            label="Permissions"
            placeholder="Select permissions for the admin"
          />
        </form>

        {/* Buttons */}
        <div className="flex gap-4 items-center justify-end mt-10">
          <Button
            variant={"outline"}
            title="Cancel"
            className="w-[200px]"
            onClick={() => setIsOpen(false)}
          />
          <Button title="Add" className="w-[200px]" />
        </div>
      </div>
    </Modal>
  );
};
