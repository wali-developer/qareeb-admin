"use client";
import React, { useState } from "react";
import { Typography } from "../../common";
import { TiTick } from "react-icons/ti";

interface ICheckboxProps {
  label: string;
  className?: string;
}
export const Checkbox = ({
  label,
  className,
}: ICheckboxProps): React.ReactElement => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`flex items-center gap-x-2 cursor-pointer  ${className} `}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div className="w-4 h-4 rounded-sm bg-input-background border border-border border-light-gray flex items-center justify-center cursor-pointer">
        {isChecked ? <TiTick size={16} className="text-orange-400" /> : null}
      </div>
      {label ?? <Typography variant="medium-medium">{label}</Typography>}
    </div>
  );
};
