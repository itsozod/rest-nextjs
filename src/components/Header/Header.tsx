import React from "react";
import styles from "./Header.module.css";
import { Header } from "antd/es/layout/layout";
import { Flex, Row } from "antd";

export const HeaderLayout = () => {
  return (
    <>
      <Header style={{ background: "#fff" }}>
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
