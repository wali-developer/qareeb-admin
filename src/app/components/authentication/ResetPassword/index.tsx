import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "../../common";
import { OTP } from "../OTP";
import { ForgotPassword } from "../ForgotPassword";
import { CreateNewPassword } from "../CreateNewPassword";

interface IResetPasswordProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ResetPassword = ({
  isOpen,
  setIsOpen,
}: IResetPasswordProps): React.ReactElement => {
  const [currentModal, setCurrentModal] = useState("forgot");

  const modelsContent: Record<string, React.ReactElement> = {
    forgot: <ForgotPassword onSubmit={() => setCurrentModal("otp")} />,
    otp: <OTP onSubmit={() => setCurrentModal("reset")} />,
    reset: (
      <CreateNewPassword
        onSubmit={() => {
          setIsOpen(false);
          setCurrentModal("forgot");
        }}
      />
    ),
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full sm:w-[490px] rounded-3xl p-5 sm:py-6 sm:px-8 flex flex-col gap-y-8">
        <div className="flex items-center justify-center">
          <Image
            src={"/auth/Qareeb-logo.png"}
            width={110}
            height={136}
            alt="logo"
          />
        </div>
        {modelsContent[currentModal]}
      </div>
    </Modal>
  );
};
