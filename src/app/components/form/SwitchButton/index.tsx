"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

interface ISwitchButton {
  label?: string;
  checked?: boolean;
  className?: string;
}

export function SwitchButton({
  label,
  checked,
  className,
}: ISwitchButton): React.ReactElement {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (checked === true || checked === false) setEnabled(checked);
  }, [checked]);

  return (
    <div className={`${className} flex gap-x-4 items-center`}>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-primary" : "bg-gray-300"}
          relative inline-flex h-[17px] w-[30px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${
            enabled
              ? "translate-x-[8px] sm:translate-x-[14px]"
              : "translate-x-0"
          }
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      {(label !== null || label !== "") && (
        <span className="text-xs text-body-dark">{label}</span>
      )}
    </div>
  );
}
