export default function CartItem({
  items,
  totalQuan,
  totalPrice,
  removeItem,
  confirmBtn,
}) {
  return (
    <div className="w-[100%] space-y-4 rounded-[.5rem] bg-white p-4">
      <h2 className="text-Red mb-5 text-3xl font-bold">
        Your Cart ({totalQuan})
      </h2>
      {items.length === 0 ? (
        <>
          <img
            className="mx-auto"
            src="/assets/images/illustration-empty-cart.svg"
            alt="illustration empty cart"
          />
          <p className="mx-auto mb-4 text-center">
            Your added items will appear here
          </p>
        </>
      ) : (
        <div>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="border-b-Rose-100 mb-6 flex items-center justify-between border-b-[.15rem] pb-6"
              >
                <div className="space-y-2">
                  <h4 className="font-semibold">{item.name}</h4>
                  <div className="space-x-4">
                    <span className="text-Red font-semibold">
                      {item.quantity}x
                    </span>
                    <span className="text-Rose-300 font-semibold">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="text-Rose-500 font-semibold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.index)}
                  type="button"
                  className="border-Rose-300 text-Rose-300 hover:border-Rose-900 hover:text-Rose-900 cursor-pointer rounded-[100%] border-2 p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 10 10"
                  >
                    <path
                      fill="#CAAFA7"
                      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <p className="text-Rose-900 font-semibold">Order Total</p>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="bg-Rose-bg mt-6 mb-8 flex justify-center gap-2 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
              />
              <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
              />
            </svg>
            <p className="text-Rose-500">
              This is a{" "}
              <span className="text-Rose-900 font-semibold">
                carbon-neutral
              </span>{" "}
              delivery
            </p>
          </div>
          <button
            onClick={confirmBtn}
            type="button"
            className="bg-Red text-Rose-bg hover:bg-Rose-500 mb-4 w-full cursor-pointer rounded-4xl px-12 py-3"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}
