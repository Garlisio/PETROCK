import "./App.css";
import Home from "./pages/home/Home";
import Store from "./pages/Store/Store";
import Information from "./pages/information/information"
import Premium from "./pages/premium/premium"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Store" element={<Store/>} />
        <Route path="/Information" element={<Information/>} />
        <Route path="/Premium" element={<Premium/>} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
