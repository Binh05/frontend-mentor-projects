import clsx from "clsx";
import { ResultContext } from "../../stores/ResultContext";
import { useContext } from "react";

export default function Input({
  title,
  h = 2,
  position = "left",
  text = "",
  setData,
  empty,
}) {
  return (
    <div className="w-full">
      <p className="text-Slate-500 mb-2 font-[500]">{title}</p>
      <div className="relative">
        <input
          min={0}
          type="number"
          className={clsx(
            "peer border-Slate-300 text-Slate-700 w-full rounded-xs border-[1.5px] font-bold outline-none",
            "hover:border-Slate-700 focus:border-primary",
            "appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            empty && "border-secondary",
            position === "left" ? "pl-14" : "pl-4",
          )}
          style={{ height: `${h}rem` }}
          onChange={setData}
        />
        <div
          className={clsx(
            "bg-Slate-100 absolute h-[96%] px-4",
            position === "right" && "right-[0.05rem]",
            position === "left" && "left-[0.05rem]",
            "flex items-center",
            "peer-focus:bg-primary",
            empty ? "bg-secondary top-[1.7%]" : "top-[2.5%]",
          )}
        >
          <p
            className={clsx(
              "text-Slate-700 peer-focus:text-Slate-900 font-bold",
              empty && "text-White",
            )}
          >
            {text}
          </p>
        </div>
      </div>
      {empty && (
        <p className="text-secondary mt-2 text-sm font-bold">
          This field is required
        </p>
      )}
    </div>
  );
}
