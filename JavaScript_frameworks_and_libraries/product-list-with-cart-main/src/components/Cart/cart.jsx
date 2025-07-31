import CartItem from "./CartItem";

export default function Cart({ data, items, removeItem, confirmBtn }) {
  return (
    <div className="mx-auto flex w-[calc((100%-1rem)/1)] max-w-[25rem] shrink-0 items-start md:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-2rem)/3)]">
      <CartItem
        items={items}
        totalQuan={data.reduce((acc, item) => acc + item.quantity, 0)}
        totalPrice={data.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        )}
        removeItem={removeItem}
        confirmBtn={confirmBtn}
      />
    </div>
  );
}
