"use client";
import React from "react";
import styles from "./Header.module.css";
import { Button, Flex, Layout, Row, Typography } from "antd";
import { useThemeStore } from "@/store/store";

export const HeaderLayout = () => {
  const { Header } = Layout;
  const { theme, setTheme } = useThemeStore();

  return (
    <>
      <Header
        className={styles.header}
        style={{
          background: theme ? "hsl(209, 23%, 22%)" : "#fff",
          color: theme ? "#fff" : "black",
        }}
      >
        <Flex
          justify="space-between"
          align="center"
          className={styles["header_container"]}
        >
          <Row
            style={{
              fontSize: "18px",
            }}
          >
            Where in the world
          </Row>
          <Button type="primary" onClick={setTheme}>
            Dark Mode
          </Button>
        </Flex>
      </Header>
    </>
  );
};
