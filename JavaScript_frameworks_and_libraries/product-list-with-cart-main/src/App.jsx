import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./components/Card/CardList";
import Cart from "./components/Cart/Cart";
import Thumbnail from "./components/thumbnail/thumbnail";

function App() {
  const [data, setData] = useState([]);
  //const [quantity, setQuantity] = useState([]);
  const [confirm, setConfirm] = useState(false);

  const items = data
    .map((item, index) => ({
      ...item,
      index,
    }))
    .filter((item) => item.quantity > 0);

  const confirmBtn = () => {
    setConfirm(!confirm);
  };

  const incre = (index) => {
    setData((prev) => {
      const updated = [...prev];
      updated[index].quantity += 1;
      return updated;
    });

    // setQuantity((prev) => {
    //   const update = [...prev];
    //   update[index] += 1;
    //   return update;
    // });
  };

  const decre = (index) => {
    setData((pre) => {
      const update = [...pre];
      update[index].quantity = Math.max(0, update[index].quantity - 1);
      return update;
    });

    // setQuantity((prev) => {
    //   const update = [...prev];
    //   update[index] = Math.max(0, update[index] - 1);
    //   return update;
    // });
  };

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setData(() =>
          res.data.map((data) => ({
            ...data,
            quantity: 0,
            setOrder: false,
          })),
        );
        //setQuantity((q) => q.map(() => 0));
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  const removeItem = (index) => {
    setData((pre) => {
      const update = [...pre];
      update[index].quantity = 0;
      return update;
    });

    // setQuantity((pre) => {
    //   const update = [...pre];
    //   update[index] = 0;
    //   return update;
    // });
  };

  const reStart = () => {
    setData((prev) => prev.map((item) => ({ ...item, quantity: 0 })));
    //setQuantity(prev => prev.map(() => 0))
    setConfirm(false);
  };

  return (
    <div className="bg-Rose-bg font-Red-Hat-Text grid min-h-screen place-content-center">
      <div className="mx-6 my-16 flex flex-4 grow-3 flex-col gap-8 md:mx-28 md:flex-col lg:flex-row">
        <CardList data={data} incre={incre} decre={decre} />
        <Cart
          data={data}
          items={items}
          removeItem={removeItem}
          confirmBtn={confirmBtn}
        />
      </div>
      {
        <Thumbnail
          items={items}
          totalPrice={data.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0,
          )}
          reStart={reStart}
          confirm={confirm}
          setConfirm={confirmBtn}
        />
      }
    </div>
  );
}

export default App;
