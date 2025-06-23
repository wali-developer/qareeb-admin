"use client";

import { NextPage } from "next";
import { Tabs, Typography } from "@/app/components/common";
import React, { useState } from "react";
import {
  AdminSettings,
  AppSettings,
  ProfileSettings,
  SecurityAndNotifications,
} from "@/app/components/settings";

const tabs: string[] = [
  "Profile settings",
  "App settings",
  "Admin settings",
  "Security and notifications",
];

const SettingsPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const tabsContent: Record<string, React.ReactElement> = {
    "Profile settings": <ProfileSettings />,
    "App settings": <AppSettings />,
    "Admin settings": <AdminSettings />,
    "Security and notifications": <SecurityAndNotifications />,
  };

  return (
    <section className="space-y-5">
      <Typography variant="h2" className="!font-medium">
        Settings
      </Typography>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="mt-5">{tabsContent[activeTab]}</section>
    </section>
  );
};

export default SettingsPage;
