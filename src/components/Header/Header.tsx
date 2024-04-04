"use client";
import React from "react";
import styles from "./Header.module.css";
import { Flex, Row } from "antd";

export const HeaderLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <Flex
          justify="space-between"
          align="center"
          className={styles["header_container"]}
        >
          <Row>Where in the world</Row>
          <Row>Dark Mode</Row>
        </Flex>
      </header>
    </>
  );
};
