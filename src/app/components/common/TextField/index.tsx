import React from "react";

interface textFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  className?: string;
}
export const TextField = ({
  icon,
  placeholder,
  className,
  label,
  ...rest
}: textFieldProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div
        className={`w-full flex items-center gap-x-2 border border-border border-light-gray rounded-lg px-4 py-2 ${className}`}
      >
        {icon && <span className="text-tertiary ">{icon}</span>}
        <input
          type="text"
          placeholder={placeholder}
          className="placeholder:text-tertiary text-regular flex-1"
          {...rest}
        />
      </div>
    </div>
  );
};
