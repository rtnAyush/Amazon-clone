import CartState from "../context/AddToCart/CartState";
import Cart from "./Cart";
import Header from "./Header"
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";



function App() {

  return (
    <>
      <CartState>
        <Routes>
          <Route path="/Amazon-clone/login" element={<Login />} />
          <Route path="/Amazon-clone/" element={<><Header /><Home /></>} />
          <Route path="/Amazon-clone/cart" element={<><Header /><Cart /></>} />
        </Routes>
      </CartState>
    </>
  );
}

export default App;
