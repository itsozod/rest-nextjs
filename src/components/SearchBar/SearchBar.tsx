"use client";
import { Input, Row } from "antd";
import React, { ChangeEvent } from "react";

export const SearchBar = ({
  query,
  handleQuery,
}: {
  query: string;
  handleQuery: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <Row
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Input
          value={query}
          onChange={handleQuery}
          placeholder="Enter country name"
        />
      </Row>
    </>
  );
};
