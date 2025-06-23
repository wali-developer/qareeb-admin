"use client";

import React, { type MouseEvent } from "react";

interface IButtonProps {
  title: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "outline";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({
  title,
  className,
  type = "button",
  variant = "primary",
  onClick,
  ...rest
}: IButtonProps): React.ReactElement => (
  <button
    className={`h-[36px] sm:h-[44px] rounded-lg text-[15px] font-medium border cursor-pointer ${className} ${
      variant === "primary" && "bg-primary-gradient text-white border-primary"
    } ${
      variant === "primary" &&
      "bg-transparent text-secondary/90 border-gray-200"
    } `}
    type={type}
    {...rest}
    onClick={onClick}
  >
    {title}
  </button>
);
