"use client";

import React from "react";
import { Typography } from "../common";
import { Table, TableColumn } from "../common/Table";
import { SwitchButton } from "../form";

const security = [
  {
    name: "Two-Factor Authentication (2FA)",
    description:
      "Requires an extra authentication step for users to log in, adding additional security.",
    action: "",
  },
  {
    name: "Failed Login Attempts Lock",
    description:
      "Locks accounts after a specified number of incorrect login attempts to prevent unauthorized access.",
    action: "",
  },
  {
    name: "Role-Based Access Control (RBAC)",
    description:
      "Restrict access to specific sections of the admin panel based on user roles.",
    action: "",
  },
  {
    name: "Email Verification on Login",
    description:
      "Sends a verification code to the user’s email for each login to verify identity.",
    action: "",
  },
];
const notificationTypes = [
  {
    name: "Booking Confirmation & Cancellation Notifications",
    description:
      "Notify users when their bookings are confirmed or canceled, ensuring they stay informed about any updates.",
    action: "",
  },
  {
    name: "User Registration Confirmation",
    description:
      "Send confirmation notifications to users upon successful registration, confirming account creation.",
    action: "",
  },
  {
    name: "System Maintenance Alerts",
    description:
      "Notify users in advance about scheduled maintenance, ensuring they are aware of downtime.",
    action: "",
  },
];
export const SecurityAndNotifications = () => {
  const tableColumns: TableColumn<(typeof security)[0]>[] = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "description",
      header: "Description",
    },

    {
      key: "action",
      header: "",
      render: () => <SwitchButton />,
    },
  ];

  return (
    <>
      <div className="border border-gray-300 rounded-xl px-6 py-4 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <Typography variant="h5" className="!font-medium">
            Security Settings
          </Typography>
        </div>
        <Table columns={tableColumns} data={security} rowKey={(_, i) => i} />
      </div>

      <div className="border border-gray-300 rounded-xl px-6 py-4 bg-white shadow-sm mt-5">
        <div className="flex justify-between items-center mb-5">
          <Typography variant="h5" className="!font-medium">
            Notification Settings
          </Typography>
        </div>

        <Table
          columns={tableColumns}
          data={notificationTypes}
          rowKey={(_, i) => i}
        />
      </div>
    </>
  );
};
