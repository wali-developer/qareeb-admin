"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";
import { Sidebar } from "../components/layouts/dashboard";
const Header = dynamic(
  () =>
    import("../components/layouts/dashboard").then((module) => module.Header),
  {
    ssr: false,
  }
);

interface ILayout {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: ILayout): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <section className="lg:flex">
      <Sidebar
        show={show}
        onHide={() => {
          setShow(false);
        }}
      />
      <div className="flex-1 bg-gray/60">
        <Header setShow={setShow} show={show} />
        <main className="px-4 sm:px-6 pb-10 min-h-[89vh]">{children}</main>
      </div>
    </section>
  );
};

export default DashboardLayout;
