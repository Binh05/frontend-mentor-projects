import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export { DataContext, DataProvider };
