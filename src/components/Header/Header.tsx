"use client";
import React from "react";
import styles from "./Header.module.css";
import { Button, Flex, Layout, Row } from "antd";
import { useThemeStore } from "@/store/store";

export const HeaderLayout = () => {
  const { Header } = Layout;
  const { setTheme } = useThemeStore();

  return (
    <>
      <Header className={styles.header}>
        <Flex
          justify="space-between"
          align="center"
          className={styles["header_container"]}
        >
          <Row>Where in the world</Row>
          <Button type="primary" onClick={setTheme}>
            Dark Mode
          </Button>
        </Flex>
      </Header>
    </>
  );
};
