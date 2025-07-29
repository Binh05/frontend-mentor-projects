export default function ItemConfirm({ item, totalPrice }) {
  return (
    <li className="bg-Rose-bg flex items-center justify-between p-8">
      {item ? (
        <>
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12"
              src={item.image.thumbnail}
              alt={item.name}
            />
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              <h4 className="inline font-semibold">{item.name}</h4>
              <div className="space-x-4">
                <span className="text-Red font-semibold">{item.quantity}x</span>
                <span className="text-Rose-300 font-semibold">
                  @ ${item.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <p className="text-Rose-900 font-semibold">
            ${(item.quantity * item.price).toFixed(2)}
          </p>
        </>
      ) : (
        <div className="flex w-full items-center justify-between">
          <p className="text-Rose-500 font-semibold">Order Total</p>
          <p className="text-Rose-900 text-2xl font-bold">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </li>
  );
}
