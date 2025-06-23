import React from "react";
import { Button, Typography } from "../../common";
import { OTPInputs } from "../OTPInputs";

export const OTP = ({
  onSubmit,
}: {
  onSubmit: () => void;
}): React.ReactElement => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="flex flex-col gap-y-4">
        <Typography variant="h1" className="!font-semibold text-center">
          Enter OTP
        </Typography>
        <Typography variant="medium" className="text-dark-gray text-center">
          Please enter 4 digit code sent to your email johndoe@gmail.com
        </Typography>
      </div>
      <div className="flex items-center justify-center py-4">
        <OTPInputs />
      </div>
      <div className="space-y-3">
        <Typography variant="medium" className="text-dark-gray text-center">
          Didn’t get the code? {""}
          <span className="text-red-600 cursor-pointer"> Resend code</span>
        </Typography>
        <Typography variant="medium" className="text-dark-gray text-center">
          Request another code in <strong>00:45</strong>
        </Typography>
      </div>
      <Button
        type="submit"
        title="Reset Password"
        className="w-full shrink-0 mt-5 sm:mt-10"
      />
    </form>
  );
};
