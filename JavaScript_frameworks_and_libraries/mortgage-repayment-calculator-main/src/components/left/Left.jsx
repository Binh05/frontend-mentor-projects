import Input from "./Input";
import RadioInput from "./RadioInput";
import clsx from "clsx";
import { useContext } from "react";
import { InputsContext } from "../../stores/InputsContext";
import { ResultContext } from "../../stores/ResultContext";

export default function () {
  const inputs = useContext(InputsContext);
  const result = useContext(ResultContext);

  const getAmount = (e) => {
    inputs.current.amount = e.target.value;
  };

  const getTerm = (e) => {
    inputs.current.term = e.target.value;
  };

  const getRate = (e) => {
    inputs.current.rate = e.target.value;
  };

  const getType = (e) => {
    inputs.current.type = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const r = inputs.current.rate / 100 / 12;
    const n = inputs.current.term * 12;
    let monthly = 0;
    if (inputs.current.type === "Repayment") {
      monthly = (inputs.current.amount * r) / (1 - Math.pow(1 + r, -n));
    } else {
      monthly = inputs.current.amount * r;
    }

    const total = (monthly * n).toFixed(2);
    monthly = monthly.toFixed(2);

    result.setResult({ monthly, total });
    console.log(monthly);
  };

  const clearAll = () => {
    result.setResult(null);
  };

  return (
    <div className="p-8">
      <form>
        <div
          className={clsx(
            "mb-8 flex flex-col items-start",
            "md:flex-row md:items-center md:justify-between",
          )}
        >
          <h1 className="text-Slate-900 text-2xl font-bold">
            Mortgage Calculator
          </h1>
          <button
            type="reset"
            className={clsx(
              "text-Slate-500 cursor-pointer font-[500] underline underline-offset-2",
              "hover:text-Slate-700",
            )}
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
        <Input
          title={"Mortgage Amount"}
          h={2.5}
          text={"£"}
          setData={getAmount}
        />
        <div
          className={clsx(
            "my-4 flex w-full flex-col items-end gap-4",
            "md:flex-row",
          )}
        >
          <Input
            h={3}
            position="right"
            title={"Mortgage Term"}
            text="years"
            setData={getTerm}
          />
          <Input
            h={3}
            position="right"
            title={"Interest Rate"}
            text="%"
            setData={getRate}
          />
        </div>
        <div className="space-y-2">
          <p className="text-Slate-500">Mortgage Type</p>
          <div className="space-y-2">
            <RadioInput
              name="MortgageType"
              id="repay"
              label={"Repayment"}
              getData={getType}
            />
            <RadioInput
              name="MortgageType"
              id="interest"
              label={"Interest Only"}
              getData={getType}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-Slate-900 hover:bg-primary-hover mt-6 flex cursor-pointer gap-2 rounded-full px-8 py-4 font-bold"
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#133041"
              d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
            />
          </svg>
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}
