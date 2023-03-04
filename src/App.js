import React,{useState} from "react";
import Home from "./components/Home";
import Data from "./components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [data, setData] = useState("")

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home setData={setData}/>} />
          <Route path="/data" element={<Data data={data}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
