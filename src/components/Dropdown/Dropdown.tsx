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
          token: {
            colorPrimary: theme ? "hsl(209, 23%, 22%)" : "lightblue",
            colorText: theme ? "white" : "black",
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
