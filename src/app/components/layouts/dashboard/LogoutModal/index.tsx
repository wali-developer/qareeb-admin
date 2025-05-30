"use client";

import React from "react";
import { DialogTitle } from "@headlessui/react";
import Modal from "@/app/components/common/Modal";
import { LuLogOut } from "react-icons/lu";

export const LogoutModal = ({ isOpen, setIsOpen }: any): React.ReactElement => {
  const handleLogout = (): void => {
    // Your logout logic
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex justify-center">
          <div className="bg-red-50 p-3 rounded-full">
            <LuLogOut className="h-6 w-6 text-red-500" />
          </div>
        </div>

        <DialogTitle as="h3" className="text-xl font-semibold mt-4">
          Logout
        </DialogTitle>
        <p className="text-gray-500 text-sm mt-4">
          Are you sure you want to logout from this account?
          <br />
          Don’t worry you can always login whenever you feel like.
        </p>

        <div className="mt-8 flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 sm:px-12 py-2.5 border rounded-md text-sm font-medium text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-5 sm:px-12 py-2.5 bg-red-500 text-white rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </Modal>
    </>
  );
};
