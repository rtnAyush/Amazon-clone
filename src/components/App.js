import CartState from "../context/AddToCart/CartState";
import Cart from "./Cart";
import Header from "./Header"
import Home from "./Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <CartState>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartState>
    </>
  );
}

export default App;
