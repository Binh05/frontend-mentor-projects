import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/cart";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [cardsQuantity, setCardsQuantity] = useState([]);

  const incre = (index) => {
    setCardsQuantity((pre) => {
      const update = [...pre];
      update[index] += 1;
      return update;
    });
  };

  const decre = (index) => {
    setCardsQuantity((pre) => {
      const update = [...pre];
      update[index] -= 1;
      return update;
    });
  };

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setData(res.data);
        setCardsQuantity(res.data.map(() => 0));
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  return (
    <div className="grid min-h-screen place-content-center bg-rose-50">
      <div className="my-16 flex gap-8">
        <div>
          <h1 className="mb-4 text-3xl font-bold">Desserts</h1>
          <div className="grid grid-cols-3 gap-4">
            {data.map((item, index) => (
              <Card
                key={index}
                data={item}
                incre={() => incre(index)}
                decre={() => decre(index)}
                quantity={cardsQuantity[index]}
              />
            ))}
          </div>
        </div>
        <div>
          <Cart cards={cardsQuantity} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
