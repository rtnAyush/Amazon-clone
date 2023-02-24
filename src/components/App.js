import CartState from "../context/AddToCart/CartState";
import Cart from "./Cart";
import Header from "./Header"
import Home from "./Home";


function App() {
  return (
    <>
      <CartState>
        <Header />
        <Home />
        <Cart />
      </CartState>
    </>
  );
}

export default App;
