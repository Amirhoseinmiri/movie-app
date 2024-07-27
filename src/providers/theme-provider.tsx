import React from "react";
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
          borderRadius: 2,
        },
        components: {
          Button: {
            controlHeight: 50,
            controlOutline: "none",
          },
          Input: {
            controlHeight: 50,
            controlOutline: "none",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
