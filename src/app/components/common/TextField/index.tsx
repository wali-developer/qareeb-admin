import React from "react";

interface textFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  className?: string;
  type: string;
}
export const TextField = ({
  icon,
  placeholder,
  className,
  label,
  type = "text",
  ...rest
}: textFieldProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-y-2 w-full ">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div
        className={`w-full h-[44px] flex items-center gap-x-2 bg-input-background border border-border border-light-gray shadow rounded-lg px-4 ${className}`}
      >
        {icon && <span className="text-tertiary ">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className="placeholder:text-tertiary text-regular flex-1 outline-none"
          {...rest}
        />
      </div>
    </div>
  );
};
