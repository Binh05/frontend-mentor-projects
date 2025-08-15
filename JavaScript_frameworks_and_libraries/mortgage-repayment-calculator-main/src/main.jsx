import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InputsProvider } from "./stores/InputsContext.jsx";
import { ResultProvider } from "./stores/ResultContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResultProvider>
      <InputsProvider>
        <App />
      </InputsProvider>
    </ResultProvider>
  </StrictMode>,
);
