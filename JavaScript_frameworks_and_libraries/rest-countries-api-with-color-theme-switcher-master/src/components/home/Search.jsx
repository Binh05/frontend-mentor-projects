import { useContext } from "react";
import { DataContext } from "@/stores/DataContext";

export default function SearchField() {
  return (
    <div>
      <SearchInput />
      <Filter />
    </div>
  );
}

function Filter() {
  const data = useContext(DataContext);

  return (
    <div className="mx-9 mt-21 inline-block w-6/12 rounded-lg">
      <button
        name="region"
        id="region"
        className="bg-Light-Mode-Elements font-Regular flex h-26 w-full cursor-pointer items-center justify-between rounded-lg px-14 text-xl shadow-lg"
      >
        Filter by Region
        <ArrowDown />
      </button>
      <ul className="bg-Light-Mode-Elements mt-2 max-h-[18.25rem] space-y-6 overflow-y-auto rounded-xl py-8 shadow-2xl">
        {data.map((data) => (
          <li className="font-Regular px-14 text-xl">
            <button
              type="button"
              className="h-full w-full cursor-pointer text-left"
            >
              {data.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function SearchInput() {
  return (
    <div className="bg-Light-Mode-Elements text-Light-Mode-Input mx-9 mt-8 flex h-25 items-center gap-8 rounded-md px-17 shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="inline size-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        className="font-SemiBold w-full text-xl focus:outline-none"
        placeholder="Search for a country..."
      />
    </div>
  );
}
