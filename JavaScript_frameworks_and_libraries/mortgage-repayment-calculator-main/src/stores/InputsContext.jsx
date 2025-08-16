import { createContext, useRef } from "react";

const InputsContext = createContext();

function InputsProvider({ children }) {
  const inputs = useRef({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });

  return (
    <InputsContext.Provider value={inputs}>{children}</InputsContext.Provider>
  );
}

export { InputsContext, InputsProvider };
