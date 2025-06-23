import React from "react";
import { Button, PasswordField, Typography } from "../../common";

export const CreateNewPassword = ({
  onSubmit,
}: {
  onSubmit: () => void;
}): React.ReactElement => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
  >
    <div className="flex flex-col gap-y-4">
      <Typography variant="h1" className="!font-semibold text-center">
        Reset password
      </Typography>
      <Typography variant="medium" className="text-secondary/60 text-center">
        Please enter 4 digit code sent to your email johndoe@gmail.com
      </Typography>
    </div>
    <div className="space-y-4 py-4">
      <PasswordField placeholder="Enter new password" label="New Password" />
      <PasswordField
        placeholder="Enter confirm password"
        label="Confirm Password"
      />
    </div>
    <Button
      type="submit"
      title="Create New Password"
      className="w-full shrink-0 mt-5 sm:mt-10"
    />
  </form>
);
