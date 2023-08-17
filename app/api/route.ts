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

export async function GET() {
  const countries = await fetchCountries();
  return NextResponse.json(countries);
}
