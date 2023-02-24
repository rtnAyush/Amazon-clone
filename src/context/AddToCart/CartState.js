import { useState } from "react";
import CartContext from "./CartContext";


function CartState(props) {
    const [items, setItems] = useState([]);

    const addToCart = (item) => {
        setItems([...items, item]);
    }

    return (
        <CartContext.Provider value={{ items, addToCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartState;