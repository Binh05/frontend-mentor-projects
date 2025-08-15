import { createContext, useState } from "react";

const ResultContext = createContext();

function ResultProvider({ children }) {
  const [result, setResult] = useState(null);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
}

export { ResultContext, ResultProvider };
