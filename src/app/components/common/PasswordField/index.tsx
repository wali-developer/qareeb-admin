"use client";
import React, { useState } from "react";
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
  const [inputType, setInputType] = useState("text");
  return (
    <div className="flex flex-col gap-y-2 w-full ">
      {label && (
        <label className="text-sm font-medium text-left">{label}</label>
      )}
      <div
        className={`w-full h-[36px] md:h-[44px] flex items-center gap-x-2 bg-input-background border border-border border-light-gray shadow rounded-lg px-4 focus-within:bg-primary-gradient ${className}`}
      >
        <span className="text-tertiary cursor-pointer  ">
          <FiLock
            size={18}
            onClick={() => {
              setInputType((prev) => (prev === "text" ? "password" : "text"));
            }}
          />
        </span>

        <input
          type={inputType}
          placeholder={placeholder}
          className="placeholder:text-tertiary text-regular flex-1 outline-none "
          {...rest}
        />
      </div>
    </div>
  );
};
