import React from "react";
import { Button, TextField, Typography } from "../../common";
import { GoMail } from "react-icons/go";

export const ForgotPassword = ({
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
    <div className="flex flex-col gap-y-4 mb-5">
      <Typography variant="h1" className="!font-semibold text-center">
        Reset password
      </Typography>
      <Typography variant="medium" className="text-secondary/50 text-center">
        Don’t worry! It’s hsappens. Please enter the correct email address so
        that OTP sends to your email.
      </Typography>
    </div>
    <TextField
      label="Email"
      type="email"
      placeholder="Enter your email"
      className="shrink-0"
      icon={<GoMail size={18} />}
    />
    <Button
      type="submit"
      title="Submit"
      className="w-full shrink-0 mt-5 sm:mt-10"
    />
  </form>
);
