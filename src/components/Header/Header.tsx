"use client";
import React from "react";
import styles from "./Header.module.css";
import { ConfigProvider, Flex, Layout, Row } from "antd";
// import { Header } from "antd/es/layout/layout";

export const HeaderLayout = () => {
  const { Header } = Layout;
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "red !important",
            colorPrimaryBg: "green"
          },
        }}
      >
        <Header className={styles.header}>
          <Flex
            justify="space-between"
            align="center"
            className={styles["header_container"]}
          >
            <Row>Where in the world</Row>
            <Row>Dark Mode</Row>
          </Flex>
        </Header>
      </ConfigProvider>
    </>
  );
};
