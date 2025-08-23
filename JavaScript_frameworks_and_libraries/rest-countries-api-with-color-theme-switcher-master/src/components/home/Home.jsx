import { useContext } from "react";
import { DataContext } from "@/stores/DataContext";
import Header from "@components/home/Header";
import SearchField from "@components/home/Search";
import CountryCard from "@components/home/CountryCard";

export default function () {
  const countries = useContext(DataContext);

  return (
    <div className="bg-Light-Mode-Background min-h-screen">
      <Header />
      <SearchField />
      <div className="mt-17 grid justify-center gap-21">
        {countries.map((c) => (
          <CountryCard key={c.name} data={c} />
        ))}
      </div>
    </div>
  );
}
