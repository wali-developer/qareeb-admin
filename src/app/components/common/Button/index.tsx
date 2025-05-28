import React from "react";

interface IButtonProps {
  title: string;
}
export const Button = ({ title }: IButtonProps): React.ReactElement => (
  <button className="w-full h-[44px] rounded-md bg-primary-gradient text-white text-base font-semibold">
    {title}
  </button>
);
