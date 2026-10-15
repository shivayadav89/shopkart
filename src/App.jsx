import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Products from "./pages/Product";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product" element={<Products />} />

      </Routes>
    </>
  );

}

export default App;
  