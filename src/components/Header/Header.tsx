"use client";
import React from "react";
import styles from "./Header.module.css";
import { Flex, Row } from "antd";
import { Header } from "antd/es/layout/layout";

export const HeaderLayout = () => {
  return (
    <>
      <Header
        className={styles.header}
        style={{
          background: "white",
        }}
      >
        <Flex
          justify="space-between"
          align="center"
          className={styles["header_container"]}
        >
          <Row>Where in the world</Row>
          <Row>Dark Mode</Row>
        </Flex>
      </Header>
    </>
  );
};
