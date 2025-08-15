import clsx from "clsx";

export default function Repay({ title, bold = false, result }) {
  return (
    <div>
      <p className="text-Slate-500 mb-4">{title}</p>
      <p
        className={clsx(
          "font-bold",
          bold ? "text-primary text-4xl" : "text-White text-2xl",
        )}
      >
        £{result}
      </p>
    </div>
  );
}
