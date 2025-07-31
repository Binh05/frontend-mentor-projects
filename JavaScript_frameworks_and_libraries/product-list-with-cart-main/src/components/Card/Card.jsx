import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Card({ data, incre, decre }) {
  const prVal = Number(data.price).toFixed(2);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    if (data.quantity === 0) {
      setOrder(false);
    } else {
      setOrder(true);
    }
  }, [data.quantity]);

  return (
    <div className="max-w-[25rem] space-y-7">
      <div
        className={clsx(
          order && "border-Red border-2",
          "relative rounded-[.5rem]",
        )}
      >
        <picture>
          <source media="(max-width: 48rem)" srcSet={data.image.tablet} />
          <source media="(max-width: 23.5rem)" srcSet={data.image.mobile} />
          <img
            className="w-full rounded-[.5rem]"
            src={data.image.desktop}
            alt="waffle"
          />
        </picture>
        {!order && (
          <button
            onClick={incre}
            type="button"
            className="hover:text-Red font-Red-Hat-Text absolute bottom-0 left-[50%] flex w-max max-w-[100%] shrink translate-x-[-50%] translate-y-[50%] cursor-pointer gap-2 rounded-[2rem] border-[.01rem] bg-white px-5 py-1.5 font-semibold"
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="add to cart" />
            Add to Cart
          </button>
        )}

        {order && (
          <div className="bg-Red absolute bottom-0 left-[50%] flex w-[50%] translate-x-[-50%] translate-y-[50%] items-center justify-between gap-2 rounded-[2rem] px-3 py-2 text-white">
            <button
              onClick={decre}
              type="button"
              className="hover:text-Red h-5 cursor-pointer rounded-[100%] border-1 p-1 text-white hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            {data.quantity}
            <button
              onClick={incre}
              type="button"
              className="hover:text-Red cursor-pointer rounded-[100%] border-1 p-1 text-white hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="#fff"
                stroke="currentColor"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div>
        <p className="text-Rose-400 text-sm">{data.category}</p>
        <h3 className="font-semibold">{data.name}</h3>
        <p className="text-Red font-bold">${prVal}</p>
      </div>
    </div>
  );
}
