"use client";
import { Button, Col, Flex, Row } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useThemeStore } from "@/store/store";

export default function CountryInfo({ params }: { params: { name: string } }) {
  const [countries, setCountries] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getCountryByName = async (name: string) => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      console.log(data);
      setCountries(data);
    };
    getCountryByName(params.name);
  }, [params.name]);
  const { theme } = useThemeStore();
  return (
    <Flex
      vertical={true}
      gap={10}
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "10px",
      }}
    >
      <Flex
        gap={10}
        vertical={true}
        justify="center"
        style={{
          padding: "10px",
        }}
      >
        <Row>
          <Button
            type="primary"
            onClick={() => {
              router.push("/");
            }}
          >
            {"<"} Back
          </Button>
        </Row>

        <Flex
          className={styles["country_container"]}
          gap={80}
          justify="space-between"
        >
          {countries?.map((country) => {
            const currencyKey = Object.keys(country?.currencies);
            return (
              <>
                <Row key={country?.flags?.svg}>
                  <Image
                    src={country?.flags?.svg}
                    alt="Flag"
                    width={450}
                    height={350}
                    loading="lazy"
                    style={{
                      maxWidth: "100%",
                      height: "100%",
                    }}
                  />
                </Row>

                <Flex
                  vertical={true}
                  gap={40}
                  style={{
                    color: theme ? "#fff" : "black",
                  }}
                >
                  <Flex className={styles.country_info_container} gap={80}>
                    <Flex vertical={true} gap={10} justify="center">
                      <h1>{country?.name?.common}</h1>
                      <Col>
                        <Row>Native name: {country?.altSpellings[1]}</Row>
                        <Row>Population: {country?.population}</Row>
                        <Row>Region: {country?.region}</Row>
                        <Row>Sub Region: {country?.subregion}</Row>
                        <Row>Capital: {country?.capital}</Row>
                      </Col>
                    </Flex>
                    <Col>
                      <Row>Top Level Domain: {country?.tld[0]}</Row>
                      <Row>
                        Currencies: {country?.currencies[currencyKey]?.name}{" "}
                      </Row>
                      <Row>
                        Languages:{" "}
                        {Object.values(country?.languages).join(", ")}
                      </Row>
                    </Col>
                  </Flex>
                  <Row>
                    Border Countries:{"  "}
                    {country?.borders
                      ? Object.values(country?.borders).join(", ")
                      : "None"}
                  </Row>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
