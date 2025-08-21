import Header from "@components/home/Header";
import SearchField from "@components/home/Search";
import { useContext } from "react";
import { DataContext } from "@/stores/DataContext";

export default function () {
  return (
    <div className="bg-Light-Mode-Background min-h-screen">
      <Header />
      <SearchField />
    </div>
  );
}
