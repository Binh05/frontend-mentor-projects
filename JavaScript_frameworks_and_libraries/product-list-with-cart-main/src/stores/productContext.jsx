import axios from "axios";
import { createContext, useEffect, useState, useReducer } from "react";

const ProductContext = createContext();
const initData = [];

function reducer(state, action) {
  switch (action.type) {
    case "INIT_DATA":
      return action.payload.map((data) => ({
        ...data,
        quantity: 0,
        confirm: false,
      }));
    case "INCRE":
      return state.map((item, i) => {
        i === action.index ? { ...item, quantity: item.quantity + 1 } : item;
      });
    case "DECRE":
      return state.map((item, i) => {
        i === action.index ? { ...item, quantity: item.quantity - 1 } : item;
      });
    default:
      throw new error("invalid action");
  }
}

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initData);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        dispatch({ type: "INIT_DATA", payload: res.data });
      })
      .catch((error) => {
        console.log(`error load data: ${error}`);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
