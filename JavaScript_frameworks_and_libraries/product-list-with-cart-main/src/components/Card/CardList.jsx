import Card from "./Card";

export default function CardList({ data, incre, decre }) {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Desserts</h1>
      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <Card
            key={index}
            data={item}
            incre={() => incre(index)}
            decre={() => decre(index)}
          />
        ))}
      </div>
    </div>
  );
}
