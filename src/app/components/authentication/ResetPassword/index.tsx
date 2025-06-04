import React, { useState } from "react";
import Modal from "../../common/Modal";
import Image from "next/image";
import { Button, TextField, Typography } from "../../common";
import { GoMail } from "react-icons/go";
import { OTP } from "../OTP";

interface IResetPasswordProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
export const ResetPassword = ({
  isOpen,
  setIsOpen,
}: IResetPasswordProps): React.ReactElement => {
  const [isView, setIsView] = useState<boolean>(false);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(true);
        }}
      >
        <div className="w-full max-w-[485px] rounded-3xl p-2 flex flex-col gap-y-8">
          <div className="flex items-center justify-center">
            <Image
              src={"/auth/Qareeb-logo.png"}
              width={110}
              height={136}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography variant="h1">Reset password</Typography>
            <Typography variant="h5Light" className="text-light-gray">
              Don’t worry! It’s happens. Please enter the correct email address
              so that OTP sends to your email.
            </Typography>
          </div>
          <TextField
            label="Email"
            placeholder="Enter your email"
            type={"email"}
            className="sm:h-[60px]"
            icon={<GoMail size={18} />}
          />
          <Button
            type="submit"
            title="Submit"
            className="sm:h-[66px]"
            onClick={() => {
              setIsOpen(false);
              setIsView(true);
            }}
          />
        </div>
      </Modal>
      <OTP isOpen={isView} setIsOpen={setIsView} />
    </>
  );
};
