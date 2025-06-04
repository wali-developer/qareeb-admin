import React from "react";
import Modal from "../../common/Modal";
import { Button, PasswordField, Typography } from "../../common";
import Image from "next/image";

interface ICreatePasswordProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
export const CreateNewPassword = ({
  isOpen,
  setIsOpen,
}: ICreatePasswordProps): React.ReactElement => (
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
          Please enter 4 digit code sent to your email johndoe@gmail.com
        </Typography>
      </div>
      <div className="space-y-4">
        <PasswordField placeholder="Enter new password" label="New Password" />
        <PasswordField
          placeholder="Enter confirm password"
          label="Confirm Password"
        />
      </div>
      <Button
        type="submit"
        title="Create New Password"
        className="sm:h-[66px] mt-4"
        onClick={() => {
          setIsOpen(false);
        }}
      />
    </div>
  </Modal>
);
