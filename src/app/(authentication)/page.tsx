"use client";
import {
  Button,
  PasswordField,
  TextField,
  Typography,
} from "@/app/components/common";
import Image from "next/image";
import React, { useState } from "react";
import { Checkbox } from "../components/form";
import { GoMail } from "react-icons/go";
import { ResetPassword } from "../components/authentication";

function Login(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center ">
        <section className="w-full">
          <Image
            src={"/auth/persons.png"}
            width={720}
            height={1024}
            alt="persons"
            className="w-full h-screen lg:w-[720px] lg:h-[1024px] object-contain md:object-cover"
          />
        </section>
        <section className="w-full flex flex-col items-center justify-center p-4  ">
          <div className="flex flex-col gap-y-2 lg:gap-y-5 items-center justify-center">
            <Image
              src={"/auth/Qareeb-logo.png"}
              width={40}
              height={46}
              alt="logo"
              className="w-[60px] h-[86px] lg:w-[110px] lg:h-[136px]"
            />
            <Typography variant="h1">Log in to your account</Typography>
            <Typography variant="regular" className="text-tertiary">
              Welcome back! Please enter your details.
            </Typography>
          </div>
          <div className="flex flex-col gap-y-4 lg:gap-y-6 mt-4 lg:mt-6">
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              className="w-[458px]"
              icon={<GoMail size={18} />}
            />
            <PasswordField
              label="Password"
              placeholder="Enter your password"
              className="w-[458px]"
            />
            <div className="flex items-center justify-between gap-x-4 ">
              <Checkbox label={"Remember for 30 days"} />
              <button
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
                className="text-primary-gradient cursor-pointer"
              >
                Forgot password
              </button>
            </div>
            <Button title={"Sign in"} />
            <Typography variant="small" className="text-tertiary text-center">
              By login you’re agree to our Terms of service & Privacy policy
            </Typography>
          </div>
        </section>
      </div>
      <ResetPassword isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Login;
