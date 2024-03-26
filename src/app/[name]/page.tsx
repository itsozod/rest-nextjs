import React from "react";

export default function CountryInfo({ params }: { params: { name: string } }) {
  return <div>Country info: {params.name}</div>;
}
