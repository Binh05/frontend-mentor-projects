import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/stores/DataContext";
import Header from "@components/home/Header";
import SearchField from "@components/home/Search";
import CountryCard from "@components/home/CountryCard";

export default function () {
  const countries = useContext(DataContext);

  const [filterRegion, setFilterRegion] = useState("");
  const countriesFilter = filterRegion
    ? countries.filter((c) => c.region.includes(filterRegion))
    : countries;

  const filterRegionInput = (region) => {
    setFilterRegion(region);
  };

  const [searchInput, setSearchInput] = useState("");
  const countriesRender = searchInput
    ? countriesFilter.filter(
        (country) =>
          country.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          country.nativeName.toLowerCase().includes(searchInput.toLowerCase()),
      )
    : countriesFilter;

  const search = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="bg-Light-Mode-Background min-h-screen pb-20">
      <Header />
      <div className="mx-18 pt-18">
        <SearchField search={search} filter={filterRegionInput} />
        <div className="mt-17 grid justify-center gap-21 md:flex md:flex-wrap md:gap-16">
          {countriesRender.map((c) => (
            <CountryCard key={c.name} data={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
