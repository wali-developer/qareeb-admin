import React from "react";
import Modal from "../common/Modal";

export const BookingDetails = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={setIsOpen}>
      <div className="max-w-[760px]"></div>
    </Modal>
  );
};
