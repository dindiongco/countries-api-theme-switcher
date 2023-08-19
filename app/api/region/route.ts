import { NextResponse } from "next/server";

async function fetchCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region",
    {
      method: "GET",
    }
  );

  const countries = await response.json();
  return countries;
}

export async function GET(request: Request) {
  const countries = await fetchCountries();
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("query"));
  const query = searchParams.get("query");

  const filteredCountries = countries.filter((country: any) => {
    return (
      country.region.toLowerCase().includes(query?.toLowerCase())
    );
  });

  return NextResponse.json(filteredCountries);
}