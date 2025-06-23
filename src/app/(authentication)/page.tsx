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
import Link from "next/link";
import { routes } from "../base/constants";

function Login(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex items-center bg-gray-100 min-h-screen">
        <section className="w-full hidden md:block">
          <Image
            src={"/auth/persons.png"}
            width={720}
            height={1024}
            alt="persons"
            className="w-full h-screen object-cover"
          />
        </section>
        <section className="w-full flex flex-col items-center justify-center p-4">
          <div className="flex flex-col gap-y-2 lg:gap-y-5 items-center justify-center">
            <Image
              src={"/auth/Qareeb-logo.png"}
              width={40}
              height={46}
              alt="logo"
              className="w-[60px] h-[86px] lg:w-[110px] lg:h-[136px]"
            />
            <Typography variant="h1" className="!font-semibold">
              Log in to your account
            </Typography>
            <Typography variant="regular" className="text-tertiary">
              Welcome back! Please enter your details.
            </Typography>
          </div>
          <div className="flex flex-col w-full md:w-3/5 gap-y-4 lg:gap-y-6 mt-4 lg:mt-6">
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              className=""
              icon={<GoMail size={18} />}
            />
            <PasswordField
              label="Password"
              placeholder="Enter your password"
              className=""
            />
            <div className="flex items-center justify-between flex-wrap gap-y-3 gap-x-4 ">
              <Checkbox label={"Remember for 30 days"} />
              <button
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
                className="text-primary-gradient text-xs sm:text-sm cursor-pointer"
              >
                Forgot password
              </button>
            </div>
            <Link href={routes.dashboard} className="block">
              <Button title={"Sign in"} className="w-full" />
            </Link>
            <Typography variant="medium" className="text-tertiary text-center">
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
