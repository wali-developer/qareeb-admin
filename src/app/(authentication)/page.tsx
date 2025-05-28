import { TextField, Typography } from "@/app/components/common";
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function login() {
  return (
    <section className="flex items-center w-full h-screen justify-center gap-x-4">
      <div className="w-[50%] h-screen">
        <Image
          src={"/auth/persons.png"}
          width={720}
          height={1024}
          alt="persons"
        />
      </div>
      <div className="w-[50%]">
        <div>
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
          <TextField
            label="Email"
            placeholder="Enter your email"
            className="w-[458px]"
            icon={<AiOutlineMail />}
          />
        </div>
      </div>
    </section>
  );
}

export default login;
