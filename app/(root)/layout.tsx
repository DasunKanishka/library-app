import React, { ReactNode } from "react";

import Header from "@/components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <div className="max-w-7xl mx-auto">
        <Header />

        <div className="pb-20 mt-20">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
