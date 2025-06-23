import React from "react";
import { Button, PasswordField, TextField, Typography } from "../common";

export const ProfileSettings = () => {
  return (
    <>
      <section className="rounded-2xl border-2 border-gray-200 bg-white">
        <div className="px-5 py-4 border-b-2 border-gray-200">
          <Typography variant="h5" className="!font-medium">
            Personal Information
          </Typography>
        </div>
        <form className="pt-6 pb-8 px-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <TextField label="Name" placeholder="Name" />
          <TextField label="Email" placeholder="Email" />
          <TextField
            label="Phone number"
            placeholder="Phone number"
            type="number"
          />
          <TextField label="Country" placeholder="Country" />
          <TextField label="City" placeholder="City" />
          <TextField label="State/Province" placeholder="State/Province" />
          <TextField label="ZIP Code" placeholder="ZIP Code" />
          <TextField label="Language" placeholder="Language" />
          <Button title="Update" className="max-w-[150px]" />
        </form>
      </section>
      <section className="mt-6 rounded-2xl border-2 border-gray-200 bg-white">
        <div className="px-5 py-4 border-b-2 border-gray-200">
          <Typography variant="h5" className="!font-medium">
            Password settings
          </Typography>
        </div>
        <form className="pt-6 pb-8 px-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <PasswordField
            label="Current password"
            placeholder="Current password"
          />
          <PasswordField label="New password" placeholder="New password" />
          <PasswordField
            label="Confirm password"
            placeholder="Confirm password"
          />
          <Button title="Update" className="max-w-[150px] md:col-span-2" />
        </form>
      </section>
    </>
  );
};
