// "use client";
import { Flex, Row } from "antd";
import React from "react";
import Image from "next/image";

export const Countries = async () => {
  const countries = await getCountries();
  console.log(countries);
  return (
    <>
      <h1>Hello</h1>
      {countries?.map((country) => {
        return (
          <Flex key={country.name.common} vertical={true}>
            <Image
              src={country.flags.svg}
              alt="Flag"
              width={"150"}
              height={"150"}
            />
            <Row>{country.name.common}</Row>
          </Flex>
        );
      })}
    </>
  );
};

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return countries;
}
