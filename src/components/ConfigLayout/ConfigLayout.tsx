import { ConfigProvider } from "antd";
import React from "react";

export const ConfigLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "#fff",
          },
          components: {
            Input: {
              colorBgBase: "white",
              colorPrimaryBg: "#fff",
              colorPrimary: "#fff",
              colorBgContainer: "#fff",
              colorPrimaryHover: "black",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};
