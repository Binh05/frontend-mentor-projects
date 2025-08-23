import { Link } from "react-router-dom";

export default function CountryCard({ data }) {
  return (
    <Link
      to={`/country/${data.alpha3Code}`}
      className="bg-Light-Mode-Elements max-w-[32.25rem] rounded-lg shadow-lg"
    >
      <div className="rounded-lg">
        <img
          src={data.flag}
          alt={data.name}
          className="max-w-100% h-auto rounded-t-lg"
        />
      </div>
      <div className="p-13">
        <h1 className="font-Bold mb-6 text-3xl">{data.name}</h1>
        <ul className="space-y-1">
          <ItemList
            title="Population:"
            content={data.population.toLocaleString()}
          />
          <ItemList title="Region:" content={data.region} />
          <ItemList title="Capital:" content={data.capital} />
        </ul>
      </div>
    </Link>
  );
}

function ItemList({ title, content }) {
  return (
    <li className="text-xl">
      <span className="font-SemiBold">{title}</span> {content}
    </li>
  );
}
