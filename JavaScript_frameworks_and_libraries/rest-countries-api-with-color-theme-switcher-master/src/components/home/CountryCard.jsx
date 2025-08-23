import { Link } from "react-router-dom";

export default function CountryCard({ data }) {
  return (
    <Link
      to={`/country/${data.alpha3Code}`}
      className="bg-Light-Mode-Elements max-w-[32.25rem] rounded-lg shadow-lg md:w-73"
    >
      <div className="rounded-lg md:max-h-43">
        <img
          src={data.flag}
          alt={data.name}
          className="w-full rounded-t-lg object-cover md:max-h-43"
        />
      </div>
      <div className="p-13 md:py-8">
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
