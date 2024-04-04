"use client";
import { Button, Dropdown, MenuProps, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Africa",
  },
  {
    key: "2",
    label: "America",
  },
  {
    key: "3",
    label: "Asia",
  },
  {
    key: "4",
    label: "Europe",
  },
  {
    key: "5",
    label: "Oceania",
  },
];

export const DropdownMenu = () => {
  return (
    <>
      <Dropdown
        overlayStyle={{
          color: "green",
        }}
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ["3"],
        }}
      >
        <Button
          style={{
            background: "black",
            color: "#fff",
          }}
        >
          <Space>
            Filter by region
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
};
