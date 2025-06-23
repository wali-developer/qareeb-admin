"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import React from "react";

interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal = ({
  isOpen,
  setIsOpen,
  children,
}: IModal): React.ReactElement => (
  <Dialog
    open={isOpen}
    onClose={setIsOpen}
    transition
    className="fixed inset-0 top-0 backdrop-blur-sm h-screen overflow-y-auto items-center bg-black/50 transition duration-300 ease-out data-[closed]:opacity-0 z-[99] p-3"
  >
    <div className="flex justify-center min-h-full w-full items-center">
      <DialogPanel className={"bg-white rounded-xl w-max md:rounded-3xl"}>
        {children}
      </DialogPanel>
    </div>
  </Dialog>
);
