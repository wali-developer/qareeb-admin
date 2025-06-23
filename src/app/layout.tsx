import type { Metadata } from "next";
import { poppins } from "./styles/fonts";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Qareeb dashboard",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
