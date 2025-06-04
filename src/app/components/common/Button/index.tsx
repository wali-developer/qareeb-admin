import React, { type MouseEvent } from "react";

interface IButtonProps {
  title: string;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({
  title,
  className,
  type = "button",
  onClick,
  ...rest
}: IButtonProps): React.ReactElement => (
  <button
    className={`w-full h-[36px] sm:h-[44px] rounded-md bg-primary-gradient text-white text-base font-semibold cursor-pointer ${className} `}
    type={type}
    {...rest}
    onClick={onClick}
  >
    {title}
  </button>
);
