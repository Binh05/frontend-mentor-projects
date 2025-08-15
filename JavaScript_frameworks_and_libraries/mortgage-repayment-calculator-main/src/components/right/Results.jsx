import { useContext } from "react";
import Empty from "./Empty";
import Repay from "./Repay";
import { ResultContext } from "../../stores/ResultContext";

export default function Results() {
  const result = useContext(ResultContext);

  return (
    <div className="bg-Slate-700 grid h-full px-10 py-7 text-center md:rounded-r-2xl md:rounded-bl-[12%]">
      {result.result === null ? (
        <Empty />
      ) : (
        <div className="space-y-6 text-left">
          <h2 className="text-White text-xl font-bold">Your results</h2>
          <p className="text-Slate-500">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="bg-Slate-900 border-t-primary rounded-md border-t-4 p-8">
            <Repay
              bold={true}
              title="Your monthly repayments"
              result={result.result.monthly}
            />
            <hr className="text-Slate-300 my-6" />
            <Repay
              title="Total you'll repay over the term"
              result={result.result.total}
            />
          </div>
        </div>
      )}
    </div>
  );
}
