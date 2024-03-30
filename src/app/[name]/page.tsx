"use client";
import { Button, Col, Flex, Row } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function CountryInfo({ params }: { params: { name: string } }) {
  const decodeName = decodeURI(params.name);
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
      <Row>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          {"<"} Back
        </Button>
      </Row>

      <Flex
        className={styles["country_container"]}
        gap={20}
        justify="space-between"
        align="center"
      >
        {countries?.map((country) => {
          const currencyKey = Object.keys(country.currencies);
          console.log(currencyKey);
          return (
            <>
              <Row key={country.flags.svg}>
                <Image
                  src={country.flags.svg}
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

              <Flex align="center" gap={20}>
                <Col>
                  <h1>{country.name.common}</h1>
                  <Col>
                    <Row>Native name: {country.altSpellings[1]}</Row>
                    <Row>Population: {country.population}</Row>
                    <Row>Region: {country.region}</Row>
                    <Row>Sub Region: {country.subregion}</Row>
                    <Row>Capital: {country.capital}</Row>
                  </Col>
                </Col>
                <Col>
                  <Row>Top Level Domain:</Row>
                  <Row>Currencies: {country.currencies[currencyKey].name} </Row>
                  <Row>Languages: </Row>
                </Col>
              </Flex>
            </>
          );
        })}
      </Flex>
    </Flex>
  );
}
