import React from "react";

import Header from "~/src/entities/header/ui";
import Footer from "~/src/entities/footer/ui";
import StoreProvider from "~/src/app/store/provider";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <StoreProvider>
      <Header />
      <div className="page-wrapper__main">
        {children}
        <Footer paddingBottom={43} />
      </div>
    </StoreProvider>
  );
}
