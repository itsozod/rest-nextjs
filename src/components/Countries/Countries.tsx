"use client";
import { Col, Flex, Row } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Countries.module.css";
import Grid from "antd/es/card/Grid";
import { SearchBar } from "../SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { DropdownMenu } from "../Dropdown/Dropdown";

export const Countries = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  async function getCountries() {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const countries = await res.json();
      setCountries(countries);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  const handleCountry = async (name: string) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      if (data.status !== 404) {
        setCountries(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value.toLowerCase());

    if (value) {
      handleCountry(value);
    } else {
      getCountries();
      console.log("RENDERRRRRR")
    }
  };

  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: "10px",
        }}
      >
        <Flex justify="space-between" style={{ padding: "10px" }}>
          <SearchBar query={query} handleQuery={handleQuery} />
          <DropdownMenu/>
        </Flex>
        
        <Grid className={styles["countries_container"]}>
          {countries.length === 0 ? <p>Loading...</p> : null}
          {countries?.map((country: any) => {
            return (
              <Flex
                onClick={() => {
                  console.log("Country", country.name.common);
                  router.push(`/${country.name.common}`);
                }}
                vertical={true}
                justify="center"
                align="start"
                key={country?.name?.common}
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#fff",
                  alignSelf: "normal",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={country?.flags?.png}
                  alt="Flag"
                  width={150}
                  height={150}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "150px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />

                <Col
                  style={{
                    padding: "10px",
                    marginTop: "auto",
                  }}
                >
                  <h2>{country?.name?.common}</h2>
                  <div>Population: {country?.population}</div>
                  <div>Region: {country?.region}</div>
                  <div>Capital: {country?.capital}</div>
                </Col>
              </Flex>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
