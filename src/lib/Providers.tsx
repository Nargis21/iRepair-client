"use client";
import { store } from "@/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <AntdRegistry>{children}</AntdRegistry>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
