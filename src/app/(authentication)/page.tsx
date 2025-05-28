import { Button, TextField, Typography } from "@/app/components/common";
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { Checkbox } from "../components/form";

function login() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center w-full lg:h-screen gap-x-4">
      <div className="w-full gl:w-[50%] h-screen">
        <Image
          src={"/auth/persons.png"}
          width={720}
          height={1024}
          alt="persons"
          className="w-full h-full lg:w-[720px] lg:h-[1024px] object-contain "
        />
      </div>
      <div className="w-full lg:w-[50%] h-screen p-6 lg:p-12 xl:p-16">
        <div className="flex flex-col gap-y-3 lg:gap-y-5 items-center justify-center lg:mt-8 xl:mt-20">
          <Image
            src={"/auth/Qareeb-logo.png"}
            width={40}
            height={46}
            alt="logo"
            className="w-[110px] h-[136px]"
          />
          <Typography variant="h1">Log in to your account</Typography>
          <Typography variant="regular" className="text-tertiary">
            Welcome back! Please enter your details.
          </Typography>
        </div>
        <div className="flex flex-col gap-y-6 mt-6">
          <TextField
            label="Email"
            type="email"
            placeholder="Enter your email"
            className="w-[458px]"
            icon={<AiOutlineMail />}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="w-[458px]"
            icon={<VscLock />}
          />
          <div className="flex items-center justify-between gap-x-4 ">
            <Checkbox label={"Remember for 30 days"} />
            <Typography variant="medium" className="text-primary-gradient">
              Forgot password
            </Typography>
          </div>
          <Button title={"Sign in"} />
          <Typography variant="small" className="text-tertiary text-center">
            By login you’re agree to our Terms of service & Privacy policy
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default login;
