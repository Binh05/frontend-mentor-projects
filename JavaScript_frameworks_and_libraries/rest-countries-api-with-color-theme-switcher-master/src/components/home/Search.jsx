import { useState, useRef } from "react";

export default function SearchField({ search, filter }) {
  return (
    <div className="w-full md:flex md:justify-between">
      <SearchInput search={search} />
      <Filter filter={filter} />
    </div>
  );
}

function Filter({ filter }) {
  const [selecting, setSelecting] = useState(false);
  const [selectValue, setSelectValue] = useState("Filter by Region");
  const regions = useRef(["Africa", "America", "Asia", "Europe", "Oceania"]);

  return (
    <div className="mt-21 inline-block rounded-lg md:mt-0">
      <button
        name="region"
        id="region"
        className="bg-Light-Mode-Elements flex h-26 w-full cursor-pointer items-center justify-between gap-16 rounded-lg px-14 text-xl shadow-lg"
        onClick={() => setSelecting(!selecting)}
      >
        {selectValue}
        <ArrowDown />
      </button>
      {selecting && (
        <ul className="bg-Light-Mode-Elements absolute mt-3 w-6/12 rounded-xl py-5 shadow-2xl">
          {regions.current.map((region) => (
            <li key={region} className="text-xl">
              <button
                type="button"
                className="h-full w-full cursor-pointer px-14 py-3 text-left"
                onClick={(e) => {
                  filter(region);
                  setSelectValue(region);
                  setSelecting(false);
                }}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SearchInput({ search }) {
  return (
    <div className="bg-Light-Mode-Elements text-Light-Mode-Input flex h-25 items-center gap-8 rounded-md px-17 shadow-lg md:w-6/12">
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
        onChange={search}
        type="text"
        className="font-SemiBold w-full text-xl focus:outline-none"
        placeholder="Search for a country..."
      />
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
