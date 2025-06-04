import React, { useRef } from "react";

export const OTPInputs = () => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only one digit

    const newInput = inputsRef.current[index];
    if (newInput) newInput.value = value;

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      const input = inputsRef.current[index];
      if (input?.value === "" && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex items-center gap-x-3">
      {[0, 1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="p-[1.5px] rounded-xl bg-primary-gradient focus-within:bg-primary-gradient"
        >
          <input
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="no-spinner w-[54px] h-[54px] rounded-[10px] bg-bgColor text-center focus:outline-none"
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
          />
        </div>
      ))}
    </div>
  );
};
