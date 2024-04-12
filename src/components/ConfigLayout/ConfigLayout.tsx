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
              colorBgContainer: theme ? "hsl(209, 23%, 22%)" : "#fff",
              colorPrimaryHover: "black",
              colorTextPlaceholder: theme ? "#fff" : "black",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};
