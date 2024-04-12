"use client";
import {
  Button,
  ConfigProvider,
  Dropdown,
  MenuProps,
  Space,
  theme,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useThemeStore } from "@/store/store";

export const DropdownMenu = ({ items }: MenuProps) => {
  const { theme } = useThemeStore();
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Dropdown: {
              colorPrimary: theme ? "hsl(209, 23%, 22%)" : "#fff",
              colorTextLightSolid: theme ? "#fff" : "black",
              colorPrimaryBg: theme ? "black" : "red",
              colorPrimaryBgHover: theme ? "black" : "#fff",
              colorBgTextActive: "red",
            },
          },
        }}
      >
        <Dropdown
          trigger={["click"]}
          menu={{
            items,
            selectable: true,
          }}
        >
          <Button type="primary">
            <Space>
              Filter by region
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </ConfigProvider>
    </>
  );
};
