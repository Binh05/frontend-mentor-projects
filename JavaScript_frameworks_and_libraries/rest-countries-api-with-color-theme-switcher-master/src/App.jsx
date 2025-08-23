import Home from "@components/home/Home";
import Detail from "@components/detail/Detail";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "@/stores/DataContext";

function App() {
  const countries = useContext(DataContext);
  console.clear();

  return (
    <div className="font-nuni font-Regular bg-Light-Mode-Background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code/" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
