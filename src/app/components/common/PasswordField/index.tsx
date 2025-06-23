"use client";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

interface textFieldProps {
  placeholder?: string;
  label?: string;
  className?: string;
}
export const PasswordField = ({
  placeholder,
  className,
  label,
  ...rest
}: textFieldProps): React.ReactElement => {
  const [inputType, setInputType] = useState("password");
  return (
    <div className="flex flex-col gap-y-2 w-full ">
      {label && (
        <label className="text-sm font-medium text-left">{label}</label>
      )}
      <div
        className={`w-full h-[44px] flex items-center gap-x-2 bg-white border border-light-gray shadow rounded-lg px-4 relative ${className}`}
      >
        <span className="text-tertiary cursor-pointer  ">
          <FiLock size={18} />
        </span>

        <input
          type={inputType}
          placeholder={placeholder}
          className="placeholder:text-tertiary text-sm flex-1 outline-none"
          {...rest}
        />

        {inputType === "text" ? (
          <BsEye
            className="absolute top-1/2 text-tertiary cursor-pointer -translate-y-1/2 right-4 text-xl"
            onClick={() => {
              setInputType((prev) => (prev === "text" ? "password" : "text"));
            }}
          />
        ) : (
          <BsEyeSlash
            className="absolute top-1/2 text-tertiary cursor-pointer -translate-y-1/2 right-4 text-xl"
            onClick={() => {
              setInputType((prev) => (prev === "text" ? "password" : "text"));
            }}
          />
        )}
      </div>
    </div>
  );
};
