"use client";
import React from "react";
import styles from "./Header.module.css";
import { Flex, Layout, Row } from "antd";
import { useThemeStore } from "@/store/store";
import Image from "next/image";

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
          <Row justify={"center"} align={"middle"} style={{ gap: "10px" }}>
            <Image
              src={theme ? "/moon-filled.png" : "/moon.png"}
              alt="Moon"
              width={20}
              height={20}
              loading="lazy"
              style={{
                width: "20px",
                height: "20px",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                cursor: "pointer",
              }}
              onClick={setTheme}
            />
            <Row>Dark Mode</Row>
          </Row>
        </Flex>
      </Header>
    </>
  );
};
