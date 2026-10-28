
import { Routes, Route, useNavigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Practice from "./pages/Practice";
import Register from "./pages/Register";
import React, { useState } from "react";


function App() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  return (
    <>
    <Navbar userName={userName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/register" element={<Register setUserName={setUserName} />} />

      </Routes>
    </>
  );
}

export default App;