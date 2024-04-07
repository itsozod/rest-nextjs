"use client";
import { Col, Flex, MenuProps, Row } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Countries.module.css";
import Grid from "antd/es/card/Grid";
import { SearchBar } from "../SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { DropdownMenu } from "../Dropdown/Dropdown";
import { useDebounce } from "@uidotdev/usehooks";

export const Countries = () => {
  const getCountryByRegion = async (region: string) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      if (data.status !== 404) {
        setCountries(data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          onClick={() => getCountryByRegion("Africa")}
          style={{ color: "#fff" }}
          href="#"
        >
          Africa
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          onClick={() => getCountryByRegion("America")}
          style={{ color: "#fff" }}
          href="#"
        >
          America
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          onClick={() => getCountryByRegion("Asia")}
          style={{ color: "#fff" }}
          href="#"
        >
          Asia
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          onClick={() => getCountryByRegion("Europe")}
          style={{ color: "#fff" }}
          href="#"
        >
          Europe
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          onClick={() => getCountryByRegion("Oceania")}
          style={{ color: "#fff" }}
          href="#"
        >
          Oceania
        </a>
      ),
    },
  ];
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const searchQuery = useDebounce(query, 300);
  const [notFound, setNotfound] = useState(false);

  async function getCountries() {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const countries = await res.json();
      setCountries(countries);
    } catch (e) {
      console.error(e);
    }
  }

  const handleCountry = async (name: string) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();

      if (data?.status === 404) {
        setNotfound(true);
      } else {
        setCountries(data);
        setNotfound(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // if (!searchQuery) {
    //   setNotfound(false);
    // }
    if (searchQuery) {
      handleCountry(searchQuery);
    } else {
      setNotfound(false);
      getCountries();
    }
  }, [searchQuery]);

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value.toLowerCase());
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
        <Flex gap={10} justify="space-between" style={{ padding: "10px" }}>
          <SearchBar query={query} handleQuery={handleQuery} />
          <DropdownMenu items={items} />
        </Flex>

        <Grid className={styles["countries_container"]}>
          {countries.length === 0 ? <p>Loading...</p> : null}
          {notFound ? (
            <p>Not found!!!</p>
          ) : (
            countries?.map((country: any) => {
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
            })
          )}
        </Grid>
      </div>
    </>
  );
};
