import React, { useState } from "react";
import Modal from "../../common/Modal";
import Image from "next/image";
import { Button, Typography } from "../../common";
import { OTPInputs } from "../OTPInputs";
import { CreateNewPassword } from "../CreateNewPassword";

interface IOtpProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
export const OTP = ({ isOpen, setIsOpen }: IOtpProps): React.ReactElement => {
  const [isview, setIsView] = useState<boolean>(false);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(true);
        }}
      >
        <div className="w-full max-w-[485px] rounded-3xl p-2 flex flex-col gap-y-6">
          <div className="flex items-center justify-center">
            <Image
              src={"/auth/Qareeb-logo.png"}
              width={110}
              height={136}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography variant="h1">Enter OTP</Typography>
            <Typography variant="h5Light" className="text-dark-gray">
              Please enter 4 digit code sent to your email johndoe@gmail.com
            </Typography>
          </div>
          <div className="flex items-center justify-center">
            <OTPInputs />
          </div>
          <div className="space-y-3">
            <Typography variant="medium" className="text-dark-gray">
              Didn’t get the code? {""}
              <span className="text-red-600 cursor-pointer"> Resend code</span>
            </Typography>
            <Typography variant="medium" className="text-dark-gray">
              Request another code in <strong>00:45</strong>
            </Typography>
          </div>
          <Button
            type="submit"
            title="Reset Password"
            className="sm:h-[66px] mt-4"
            onClick={() => {
              setIsOpen(false);
              setIsView(true);
            }}
          />
        </div>
      </Modal>
      <CreateNewPassword isOpen={isview} setIsOpen={setIsView} />
    </>
  );
};
