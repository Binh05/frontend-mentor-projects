import Left from "./components/left/Left";
import Results from "./components/right/Results";
import clsx from "clsx";
import { ResultContext } from "./stores/ResultContext";
import { useContext } from "react";

function App() {
  const result = useContext(ResultContext);

  return (
    <div className="bg-Slate-100 grid min-h-screen place-content-center">
      <div
        className={clsx(
          "bg-White font-Jakarta flex max-w-[63.5rem] flex-col md:mx-4 md:rounded-2xl",
          "md:flex-row",
        )}
      >
        <div className="basis-[50%]">
          <Left />
        </div>
        <div className="basis-[50%]">
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
