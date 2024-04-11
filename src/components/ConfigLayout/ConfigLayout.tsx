"use client";
import { useThemeStore } from "@/store/store";
import { useTheme } from "@/utils/useTheme";
import { ConfigProvider } from "antd";
import React from "react";

export const ConfigLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: useTheme(theme),
          },
          components: {
            Button: {
              colorPrimary: useTheme(theme),
              colorTextLightSolid: theme ? "#fff" : "black",
            },
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
