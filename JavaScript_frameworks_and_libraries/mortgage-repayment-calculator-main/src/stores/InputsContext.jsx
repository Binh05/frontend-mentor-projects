import { createContext, useRef } from "react";

const InputsContext = createContext();

function InputsProvider({ children }) {
  const inputs = useRef({
    amount: 0,
    term: 0,
    rate: 0,
    type: "",
  });

  return (
    <InputsContext.Provider value={inputs}>{children}</InputsContext.Provider>
  );
}

export { InputsContext, InputsProvider };
