import { useParams } from "react-router-dom";
import Header from "@components/home/Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "@/stores/DataContext";

export default function Detail() {
  const countries = useContext(DataContext);
  const { code, name } = useParams();
  const data = countries.find((c) => c.alpha3Code === code);

  if (!data) return <p>Loading...</p>;
  const lan = data.languages
    .reduce((s, lan) => (s += lan.name + ", "), "")
    .slice(0, -2);

  const current = data.currencies
    .reduce((s, c) => (s += c.name + ", "), "")
    .slice(0, -2);

  return (
    <>
      <Header />
      <div className="mt-20 mb-30 px-15">
        <Link
          to={"/"}
          type="button"
          className="bg-Light-Mode-Elements flex w-53 items-center gap-4 rounded-md px-14 py-4 text-2xl shadow-[0_0_1rem_rgba(0,0,0,0.4)]"
        >
          <ArrowLeft />
          Back
        </Link>
        <div className="mt-32">
          <div className="max-h-[29rem] overflow-y-hidden">
            <img
              src={data.flag}
              alt={data.name}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="font-Bold mt-28 mb-10 text-[2.5rem]">{data.name}</h1>
          <ul className="mb-14">
            <ItemList title="Native Name:" content={data.nativeName}></ItemList>
            <ItemList
              title="Population:"
              content={data.population.toLocaleString()}
            ></ItemList>
            <ItemList title="Region:" content={data.region}></ItemList>
            <ItemList title="Sub Region:" content={data.subregion}></ItemList>
            <ItemList title="Capital:" content={data.capital}></ItemList>
          </ul>
          <ul>
            <ItemList
              title="Top Level Domain:"
              content={data.topLevelDomain}
            ></ItemList>
            <ItemList title="Currencies:" content={current}></ItemList>
            <ItemList title="Languages:" content={lan}></ItemList>
          </ul>
          <div className="my-14">
            <p className="font-SemiBold text-2xl">Border Countries:</p>
            <div className="my-8 flex flex-wrap gap-8">
              {data.borders &&
                data.borders.map((b) => {
                  const country = countries.find(
                    (c) => c.alpha3Code === b,
                  ).name;
                  return <ItemCard key={country} content={country} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ItemCard({ content }) {
  return (
    <div className="rounded-sm bg-white px-16 py-4 text-2xl shadow-[0_0_0.5rem_rgba(0,0,0,0.4)]">
      <p>{content}</p>
    </div>
  );
}

function ItemList({ title, content }) {
  return (
    <p className="text-2xl leading-13">
      <span className="font-SemiBold">{title}</span> {content}
    </p>
  );
}

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
}
