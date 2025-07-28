import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/cart";
import axios from "axios";
import clsx from "clsx";
import "./styles/App.css";

function App() {
  const [data, setData] = useState([]);
  const [cardsQuantity, setCardsQuantity] = useState([]);
  const [confirm, setConfirm] = useState(false);

  const items = data
    .map((item, index) => ({
      ...item,
      quantity: cardsQuantity[index],
      index,
    }))
    .filter((item) => item.quantity > 0);

  const confirmBtn = () => {
    setConfirm(true);
  };

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
      update[index] = Math.max(update[index] - 1, 0);
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

  const removeItem = (index) => {
    setCardsQuantity((pre) => {
      const update = [...pre];
      update[index] = 0;
      return update;
    });
  };

  return (
    <div className="grid min-h-screen place-content-center bg-rose-50">
      {confirm && (
        <div
          onClick={() => setConfirm(false)}
          className="fixed top-0 left-0 z-[2] h-[100vh] w-full bg-black opacity-[60%] content-['']"
        ></div>
      )}
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
          <Cart
            items={items}
            totalQuan={cardsQuantity.reduce((a, b) => a + b, 0)}
            totalPrice={cardsQuantity.reduce(
              (acc, curr, i) => acc + curr * data[i]?.price,
              0,
            )}
            removeItem={removeItem}
            confirmBtn={confirmBtn}
          />
        </div>
      </div>
      {confirm && (
        <div className="fixed top-[50%] left-[50%] z-2 w-[37rem] translate-[-50%] bg-white p-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
              fill="#1EA575"
            />
            <path
              d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
              fill="#1EA575"
            />
          </svg>
          <h3 className="mt-4 text-3xl font-bold">Order Confirmed</h3>
          <p>We hope you enjoy your food!</p>
          <ul className="my-8">
            {items.map((item, index) => (
              <li className="flex items-center justify-between bg-rose-50 p-6">
                <div className="flex items-center gap-3">
                  <img
                    className="h-12 w-12"
                    src={item.image.thumbnail}
                    alt={item.name}
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <div className="space-x-4">
                      <span>{item.quantity}x</span>
                      <span>@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <p>${(item.quantity * item.price).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setConfirm(false)}
            className="w-full cursor-pointer rounded-4xl bg-red-700 py-4 text-center text-white"
          >
            Start New Order
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
