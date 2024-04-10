"use client";
import { Button, ConfigProvider, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const DropdownMenu = ({ items }: MenuProps) => {
  return (
    <>
      <ConfigProvider
        theme={{
          inherit: false,
          token: {
            colorPrimary: "#fff",
            colorTextLightSolid: "black",
            colorPrimaryBg: "black",
            colorPrimaryBgHover: "black"
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
