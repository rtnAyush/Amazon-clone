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
          <Route path="/Amazon-clone/" element={<Home />} />
          <Route path="/Amazon-clone/cart" element={<Cart />} />
        </Routes>
      </CartState>
    </>
  );
}

export default App;
