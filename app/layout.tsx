import type { Metadata } from "next";
import "./globals.css";

import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a library management solution",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={"dark antialiased"}>{children}</body>
    </html>
  );
};

export default RootLayout;
